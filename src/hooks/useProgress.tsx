import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "./useAuth";

export const useProgress = () => {
  const { user } = useAuth();
  const [completedTopics, setCompletedTopics] = useState<Set<string>>(new Set());
  const [bookmarkedTopics, setBookmarkedTopics] = useState<Set<string>>(new Set());
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    if (!user) { setLoading(false); return; }

    const [progressRes, bookmarkRes, notesRes] = await Promise.all([
      supabase.from("user_progress").select("topic_id").eq("user_id", user.id).eq("completed", true),
      supabase.from("user_bookmarks").select("topic_id").eq("user_id", user.id),
      supabase.from("user_notes").select("topic_id, note_text").eq("user_id", user.id),
    ]);

    if (progressRes.data) setCompletedTopics(new Set(progressRes.data.map(r => r.topic_id)));
    if (bookmarkRes.data) setBookmarkedTopics(new Set(bookmarkRes.data.map(r => r.topic_id)));
    if (notesRes.data) {
      const n: Record<string, string> = {};
      notesRes.data.forEach(r => { n[r.topic_id] = r.note_text; });
      setNotes(n);
    }
    setLoading(false);
  }, [user]);

  useEffect(() => { fetchData(); }, [fetchData]);

  const toggleComplete = async (topicId: string) => {
    if (!user) return;
    const isCompleted = completedTopics.has(topicId);

    if (isCompleted) {
      await supabase.from("user_progress").delete().eq("user_id", user.id).eq("topic_id", topicId);
      setCompletedTopics(prev => { const n = new Set(prev); n.delete(topicId); return n; });
    } else {
      await supabase.from("user_progress").upsert({
        user_id: user.id, topic_id: topicId, completed: true, completed_at: new Date().toISOString()
      }, { onConflict: "user_id,topic_id" });
      setCompletedTopics(prev => new Set(prev).add(topicId));
    }
  };

  const toggleBookmark = async (topicId: string) => {
    if (!user) return;
    const isBookmarked = bookmarkedTopics.has(topicId);

    if (isBookmarked) {
      await supabase.from("user_bookmarks").delete().eq("user_id", user.id).eq("topic_id", topicId);
      setBookmarkedTopics(prev => { const n = new Set(prev); n.delete(topicId); return n; });
    } else {
      await supabase.from("user_bookmarks").insert({ user_id: user.id, topic_id: topicId });
      setBookmarkedTopics(prev => new Set(prev).add(topicId));
    }
  };

  const saveNote = async (topicId: string, text: string) => {
    if (!user) return;
    if (!text.trim()) {
      await supabase.from("user_notes").delete().eq("user_id", user.id).eq("topic_id", topicId);
      setNotes(prev => { const n = { ...prev }; delete n[topicId]; return n; });
    } else {
      await supabase.from("user_notes").upsert({
        user_id: user.id, topic_id: topicId, note_text: text
      }, { onConflict: "user_id,topic_id" });
      setNotes(prev => ({ ...prev, [topicId]: text }));
    }
  };

  return { completedTopics, bookmarkedTopics, notes, loading, toggleComplete, toggleBookmark, saveNote };
};
