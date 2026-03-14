import { useParams, Navigate } from "react-router-dom";
import CourseLayout from "@/components/CourseLayout";
import LessonPage from "@/components/LessonPage";
import { findTopic, getAdjacentTopics } from "@/data/courseData";

const Lesson = () => {
  const { topicId } = useParams();

  const topic = topicId ? findTopic(topicId) : null;

  if (!topic) {
    return <Navigate to="/" replace />;
  }

  const { prev, next } = getAdjacentTopics(topic.id);

  return (
    <CourseLayout>
      <LessonPage topic={topic} prevTopic={prev} nextTopic={next} />
    </CourseLayout>
  );
};

export default Lesson;
