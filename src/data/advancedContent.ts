import { Topic } from "./types";

export const fileHandlingTopics: Topic[] = [
  {
    id: "file-basics",
    title: "File Handling Basics",
    explanation: "C++ uses the <fstream> library for file operations. Three classes: ifstream (read), ofstream (write), and fstream (both). Files must be opened before use and closed after.\n\nAlways check if a file opened successfully with is_open() before performing operations.",
    syntax: `// ===== File Handling in C++ =====
#include <fstream>  // Required for ALL file operations

// --- Three file stream classes ---
ofstream outFile("data.txt");   // OUTPUT file stream — for WRITING
ifstream inFile("data.txt");    // INPUT file stream — for READING
fstream file("data.txt", ios::in | ios::out);  // BOTH reading and writing

// --- Opening and closing files ---
outFile.open("data.txt");       // Open a file (alternative to constructor)
outFile.is_open();              // Check if file opened successfully (returns bool)
outFile.close();                // Close the file (ALWAYS do this when done!)

// --- Writing to a file (just like cout!) ---
outFile << "Hello, file!" << endl;  // Write text (same syntax as cout)
outFile << 42 << endl;              // Write numbers

// --- Reading from a file (just like cin!) ---
string word;
inFile >> word;           // Read one word (stops at whitespace)

string line;
getline(inFile, line);    // Read entire line (including spaces)

// ===== File open modes =====
// ios::out   — Write (default for ofstream, creates/overwrites)
// ios::in    — Read (default for ifstream)
// ios::app   — Append (add to end, don't erase)
// ios::binary — Binary mode (for non-text data)`,
    example: `// ===== File Handling Basics — Complete Example =====
#include <iostream>
#include <fstream>     // For ifstream, ofstream
#include <string>
using namespace std;

int main() {
    // ===== WRITING to a file =====
    ofstream outFile("example.txt");  // Create/open file for writing

    // Always check if the file opened successfully!
    if (!outFile.is_open()) {
        cout << "❌ Error: Could not create file!" << endl;
        return 1;  // Exit with error code
    }

    // Write to file (same << syntax as cout)
    outFile << "Hello, File!" << endl;
    outFile << "This is line 2." << endl;
    outFile << "The number is: " << 42 << endl;
    outFile.close();  // Close when done writing!
    cout << "✅ File written successfully." << endl;

    // ===== READING from a file =====
    ifstream inFile("example.txt");  // Open file for reading

    if (!inFile.is_open()) {
        cout << "❌ Error: Could not open file!" << endl;
        return 1;
    }

    // Read line by line using getline
    string line;
    int lineNum = 1;
    cout << "\\n===== File Contents =====" << endl;
    while (getline(inFile, line)) {   // Read until end of file
        cout << "  Line " << lineNum++ << ": " << line << endl;
    }
    inFile.close();  // Close when done reading!

    return 0;
}
// Output:
// ✅ File written successfully.
//
// ===== File Contents =====
//   Line 1: Hello, File!
//   Line 2: This is line 2.
//   Line 3: The number is: 42`,
    codeExplanation: "ofstream creates/overwrites a file and writes to it with << (same syntax as cout). ifstream opens for reading. getline reads one full line at a time. The while loop continues until end-of-file. Always check is_open() and call close() when done to ensure data is saved.",
    commonMistakes: [
      "Not checking if the file opened successfully — leads to silent failures",
      "Forgetting to close files — may lose buffered data that hasn't been written yet",
      "Using ofstream when you want to read — ofstream is for WRITING, ifstream is for READING"
    ],
    practiceQuestions: [
      "Write a program that saves user input to a file line by line",
      "What is the difference between ifstream and ofstream?",
      "What happens if you try to read a file that doesn't exist?"
    ]
  },
  {
    id: "file-read",
    title: "Reading Files",
    explanation: "Read files using ifstream with >> (word by word), getline() (line by line), or get() (character by character). Check eof() or use the stream in a boolean context to detect end of file.\n\nFor structured data, use >> with specific types. For text, getline is usually preferred.",
    syntax: `// ===== Four Ways to Read a File =====
#include <fstream>
ifstream file("data.txt");

// --- Method 1: Word by word (>> stops at whitespace) ---
string word;
while (file >> word) {
    // Reads one word at a time
    // "Hello World" → "Hello", then "World"
}

// --- Method 2: Line by line (getline reads entire line) ---
string line;
while (getline(file, line)) {
    // Reads one full line at a time (including spaces)
    // "Hello World" → "Hello World" (entire line)
}

// --- Method 3: Character by character ---
char ch;
while (file.get(ch)) {
    // Reads one character at a time (including whitespace)
}

// --- Method 4: Read specific types ---
int num;
double price;
file >> num >> price;  // Reads an int, then a double

// ===== Always close the file when done =====
file.close();`,
    example: `// ===== Reading Files — Complete Example =====
#include <iostream>
#include <fstream>
#include <string>
using namespace std;

int main() {
    // --- First, create a file to read from ---
    ofstream out("students.txt");
    out << "Alice 95" << endl;
    out << "Bob 87" << endl;
    out << "Charlie 92" << endl;
    out.close();

    // ===== Method 1: Read structured data (name + score) =====
    cout << "===== Reading Structured Data =====" << endl;
    ifstream file1("students.txt");
    if (!file1.is_open()) { cout << "Error!"; return 1; }

    string name;
    int score;
    while (file1 >> name >> score) {  // Read name and score pairs
        cout << "  " << name << " scored " << score << endl;
    }
    file1.close();

    // ===== Method 2: Read line by line with line numbers =====
    cout << "\\n===== Reading Line by Line =====" << endl;
    ifstream file2("students.txt");
    string line;
    int lineNum = 1;
    while (getline(file2, line)) {   // Read entire line
        cout << "  " << lineNum++ << ": " << line << endl;
    }
    file2.close();

    // ===== Method 3: Count words in a file =====
    cout << "\\n===== Word Count =====" << endl;
    ifstream file3("students.txt");
    string word;
    int wordCount = 0;
    while (file3 >> word) {  // Read word by word
        wordCount++;
    }
    cout << "  Total words: " << wordCount << endl;
    file3.close();

    return 0;
}
// Output:
// ===== Reading Structured Data =====
//   Alice scored 95
//   Bob scored 87
//   Charlie scored 92
//
// ===== Reading Line by Line =====
//   1: Alice 95
//   2: Bob 87
//   3: Charlie 92
//
// ===== Word Count =====
//   Total words: 6`,
    codeExplanation: "Three reading methods are shown: >> reads structured data (parses name and score separately), getline reads full lines (preserving spaces), and >> in a loop counts words. The file is opened with ifstream and closed with close(). Each method serves a different purpose.",
    commonMistakes: [
      "Using >> when you need full lines — >> stops at whitespace! Use getline for lines with spaces",
      "Not handling file-not-found errors gracefully — always check is_open()",
      "Forgetting that >> skips whitespace — getline preserves it"
    ],
    practiceQuestions: [
      "Count the number of words in a text file",
      "Read numbers from a file and compute their average",
      "Search for a specific word in a file and print the line"
    ]
  },
  {
    id: "file-write",
    title: "Writing Files",
    explanation: "Write to files using ofstream with the << operator, just like cout. By default, ofstream creates a new file or overwrites an existing one. Use ios::app flag to append instead.\n\nYou can write any type: strings, numbers, custom formatted data.",
    syntax: `// ===== Writing to Files =====
#include <fstream>

// --- Create/overwrite a file ---
ofstream file("output.txt");    // Creates new or OVERWRITES existing
file << "Hello" << endl;        // Write text (same as cout)
file << 42 << endl;             // Write numbers
file << 3.14 << endl;           // Write decimals
file.close();                   // Close to save!

// --- Write formatted data ---
#include <iomanip>
file << left << setw(20) << name << score << endl;
// setw(20) = width of 20 characters (for column alignment)

// --- Check if write succeeded ---
if (file.good()) {
    cout << "Write successful!" << endl;
}
if (file.fail()) {
    cout << "Write failed!" << endl;
}`,
    example: `// ===== Writing Files — Complete Example =====
#include <iostream>
#include <fstream>      // For ofstream
#include <iomanip>      // For setw, left
using namespace std;

int main() {
    // --- Open file for writing ---
    ofstream file("students.txt");
    if (!file.is_open()) {
        cout << "❌ Could not create file!" << endl;
        return 1;
    }

    // --- Student data ---
    string names[] = {"Alice", "Bob", "Charlie", "Diana"};
    int scores[] = {95, 87, 92, 78};
    int count = 4;

    // --- Write header ---
    file << "===== Student Scores =====" << endl;
    file << left << setw(15) << "Name" << setw(10) << "Score" << endl;
    file << "-------------------------" << endl;

    // --- Write each student ---
    for (int i = 0; i < count; i++) {
        file << left << setw(15) << names[i]   // Name, left-aligned, 15 chars wide
             << setw(10) << scores[i]            // Score, 10 chars wide
             << endl;
    }

    file.close();  // Close to save all data!
    cout << "✅ Data written to students.txt" << endl;

    // --- Verify by reading back ---
    ifstream readBack("students.txt");
    string line;
    cout << "\\n===== File Contents =====" << endl;
    while (getline(readBack, line)) {
        cout << "  " << line << endl;
    }
    readBack.close();

    return 0;
}
// Output:
// ✅ Data written to students.txt
//
// ===== File Contents =====
//   ===== Student Scores =====
//   Name           Score
//   -------------------------
//   Alice          95
//   Bob            87
//   Charlie        92
//   Diana          78`,
    codeExplanation: "ofstream creates students.txt and writes formatted data using setw for column alignment and left for left-justification. Each student's name and score are formatted in a table. The file is closed to ensure all buffered data is written. We verify by reading the file back.",
    commonMistakes: [
      "Opening with ofstream when you want to KEEP existing content — use ios::app to append",
      "Not flushing or closing the file — data may remain in buffer and never be written",
      "Writing to a read-only location or a path that doesn't exist"
    ],
    practiceQuestions: [
      "Write a program that logs timestamps to a file",
      "Save a multiplication table (1-10) to a file",
      "What is the difference between overwrite and append mode?"
    ]
  },
  {
    id: "file-append",
    title: "Appending to Files",
    explanation: "Use ios::app flag to open a file in append mode — new data is added at the end without erasing existing content. This is essential for logging, data collection, and persistent storage.\n\nYou can combine flags: ios::app | ios::ate positions the cursor at the end initially.",
    syntax: `// ===== Appending to Files =====
#include <fstream>

// --- Open in APPEND mode (don't erase existing content!) ---
ofstream file("log.txt", ios::app);  // ios::app = append
file << "New entry" << endl;          // Added to the END of file
file.close();

// ===== File Open Modes Comparison =====
// ofstream file("data.txt");          // Default: OVERWRITES entire file
// ofstream file("data.txt", ios::app); // APPENDS to end (keeps old data)
// ofstream file("data.txt", ios::ate); // Opens at end but CAN seek
// ofstream file("data.txt", ios::trunc); // Truncate (same as default)

// --- Combining flags with | (bitwise OR) ---
// ios::app | ios::binary  — Append in binary mode`,
    example: `// ===== Appending to Files — Complete Example =====
#include <iostream>
#include <fstream>
#include <ctime>       // For timestamps
using namespace std;

int main() {
    // --- Append a timestamped log entry ---
    // ios::app means: DON'T erase existing content, ADD to the end
    ofstream log("app.log", ios::app);

    if (!log.is_open()) {
        cout << "❌ Could not open log file!" << endl;
        return 1;
    }

    // Get current date/time
    time_t now = time(0);          // Get current time
    string dt = ctime(&now);       // Convert to readable string
    dt.pop_back();                 // Remove trailing newline

    // Write the log entry (APPENDED, not overwritten!)
    log << "[" << dt << "] Application event logged" << endl;
    log.close();

    cout << "✅ Log entry added (previous entries preserved!)" << endl;

    // --- Show all log entries ---
    ifstream readLog("app.log");
    string line;
    cout << "\\n===== All Log Entries =====" << endl;
    while (getline(readLog, line)) {
        cout << "  " << line << endl;
    }
    readLog.close();

    // --- Run this program multiple times ---
    // Each time it ADDS a new entry without erasing the old ones!

    return 0;
}
// Output (after running 3 times):
// ✅ Log entry added (previous entries preserved!)
//
// ===== All Log Entries =====
//   [Thu Mar 13 10:30:00 2026] Application event logged
//   [Thu Mar 13 10:31:15 2026] Application event logged
//   [Thu Mar 13 10:32:30 2026] Application event logged`,
    codeExplanation: "ios::app opens the file without erasing it and writes at the end. Each run adds a timestamped log entry while preserving all previous entries. Without ios::app, each run would erase the file and start fresh. This is essential for logging and data collection.",
    commonMistakes: [
      "Using ofstream without ios::app — it OVERWRITES the entire file, losing all previous data!",
      "Not checking if append was successful — check is_open() and good()",
      "Confusing ios::app with ios::ate — app always writes at end, ate just starts at end but can seek"
    ],
    practiceQuestions: [
      "Create a diary program that appends entries with dates",
      "Build a high-score tracker that appends new scores",
      "What is the difference between ios::app and ios::ate?"
    ]
  },
  {
    id: "binary-files",
    title: "Binary Files",
    explanation: "Binary files store data in raw binary format (not human-readable text). Use ios::binary flag and write()/read() methods instead of <<. Binary I/O is faster and preserves exact data representation.\n\nUseful for saving structs, images, serialized objects, and any non-text data.",
    syntax: `// ===== Binary File I/O =====

// --- Writing binary data ---
ofstream out("data.bin", ios::binary);  // Open in BINARY mode

// write() takes: pointer to data (as char*), number of bytes
// reinterpret_cast converts any pointer to char* for byte-level I/O
out.write(reinterpret_cast<char*>(&data), sizeof(data));
out.close();

// --- Reading binary data ---
ifstream in("data.bin", ios::binary);

// read() reads exact number of bytes into the variable
in.read(reinterpret_cast<char*>(&data), sizeof(data));
in.close();

// ===== Why binary? =====
// Text: 12345 stored as 5 characters ('1','2','3','4','5') = 5 bytes
// Binary: 12345 stored as raw int = 4 bytes (always, regardless of value)
// Binary is: faster, smaller, exact representation
// But: NOT human-readable (can't open in text editor)`,
    example: `// ===== Binary Files — Complete Example =====
#include <iostream>
#include <fstream>
using namespace std;

// Define a struct to save/load
struct Record {
    int id;
    char name[50];     // Fixed-size char array (NOT string — strings have pointers!)
    double salary;
};

int main() {
    // ===== WRITE a record to binary file =====
    Record r1 = {1, "Alice", 75000.0};  // Create a record

    ofstream out("records.bin", ios::binary);  // Open in binary mode
    if (!out.is_open()) { cout << "Error!"; return 1; }

    // Write the ENTIRE struct as raw bytes
    out.write(reinterpret_cast<char*>(&r1), sizeof(Record));
    // reinterpret_cast<char*> treats the struct as a sequence of bytes
    // sizeof(Record) = number of bytes to write
    out.close();
    cout << "✅ Record saved to binary file" << endl;

    // ===== READ the record back =====
    Record r2;  // Empty record to fill

    ifstream in("records.bin", ios::binary);
    if (!in.is_open()) { cout << "Error!"; return 1; }

    // Read the exact same number of bytes back into r2
    in.read(reinterpret_cast<char*>(&r2), sizeof(Record));
    in.close();

    // Display the loaded record
    cout << "\\n===== Loaded Record =====" << endl;
    cout << "  ID:     " << r2.id << endl;       // 1
    cout << "  Name:   " << r2.name << endl;     // Alice
    cout << "  Salary: $" << r2.salary << endl;   // 75000

    return 0;
}
// Output:
// ✅ Record saved to binary file
//
// ===== Loaded Record =====
//   ID:     1
//   Name:   Alice
//   Salary: $75000`,
    codeExplanation: "A Record struct is written to a binary file as raw bytes using write(). read() reads the exact same number of bytes back into a new Record variable. reinterpret_cast<char*> converts the struct pointer to a char pointer for byte-level I/O. Important: use char arrays (not std::string) in structs for binary I/O.",
    commonMistakes: [
      "Forgetting ios::binary flag — text mode may alter newline characters on some systems",
      "Using std::string in a struct for binary I/O — string contains a pointer, not the actual text data",
      "Binary files are NOT portable between different platforms/compilers — byte order and padding may differ"
    ],
    practiceQuestions: [
      "Save an array of 10 structs to a binary file and read them back",
      "What are the advantages of binary over text files?",
      "Why can't you use string members in a struct for binary I/O?"
    ]
  }
];

export const stlTopics: Topic[] = [
  {
    id: "vector",
    title: "Vector",
    explanation: "std::vector is a dynamic array that automatically resizes. It provides random access (O(1)), push_back (amortized O(1)), and works with all STL algorithms. It's the most commonly used container.\n\nPrefer vector over raw arrays for most use cases — it manages memory automatically and provides bounds-checked access via .at().",
    syntax: `// ===== std::vector — Dynamic Array =====
#include <vector>

// --- Creating vectors ---
vector<int> v;                  // Empty vector
vector<int> v(5, 0);            // 5 elements, all initialized to 0
vector<int> v = {1, 2, 3, 4};  // Initialize with values
vector<string> names = {"Alice", "Bob"};

// --- Adding/Removing elements ---
v.push_back(10);    // Add 10 to the END   → {1,2,3,4,10}
v.pop_back();       // Remove the LAST element → {1,2,3,4}
v.insert(v.begin(), 0);  // Insert 0 at the beginning
v.erase(v.begin());      // Remove first element

// --- Accessing elements ---
v[0]              // First element (no bounds checking — FAST)
v.at(0)           // First element (WITH bounds checking — SAFE)
v.front()         // First element
v.back()          // Last element

// --- Information ---
v.size()          // Number of elements
v.empty()         // true if vector is empty
v.capacity()      // Allocated space (may be > size)
v.clear()         // Remove all elements`,
    example: `// ===== Vector — Complete Example =====
#include <iostream>
#include <vector>
#include <algorithm>   // For sort, find, reverse
using namespace std;

int main() {
    // --- Create and fill a vector ---
    vector<int> nums = {5, 2, 8, 1, 9, 3};

    // --- Add elements ---
    nums.push_back(7);     // Add 7 to end → {5,2,8,1,9,3,7}
    nums.push_back(4);     // Add 4 to end → {5,2,8,1,9,3,7,4}

    // --- Sort the vector ---
    sort(nums.begin(), nums.end());  // Ascending: {1,2,3,4,5,7,8,9}

    cout << "Sorted: ";
    for (int n : nums) cout << n << " ";  // Range-based for loop
    cout << endl;

    // --- Size and access ---
    cout << "Size: " << nums.size() << endl;     // 8
    cout << "First: " << nums.front() << endl;   // 1
    cout << "Last: " << nums.back() << endl;     // 9

    // --- Find an element ---
    auto it = find(nums.begin(), nums.end(), 8);
    if (it != nums.end()) {
        // (it - nums.begin()) calculates the index
        cout << "Found 8 at index " << (it - nums.begin()) << endl;  // 6
    }

    // --- Remove last element ---
    nums.pop_back();  // Remove 9
    cout << "After pop_back, last: " << nums.back() << endl;  // 8

    // --- Reverse the vector ---
    reverse(nums.begin(), nums.end());
    cout << "Reversed: ";
    for (int n : nums) cout << n << " ";
    cout << endl;

    return 0;
}
// Output:
// Sorted: 1 2 3 4 5 7 8 9
// Size: 8
// First: 1
// Last: 9
// Found 8 at index 6
// After pop_back, last: 8
// Reversed: 8 7 5 4 3 2 1`,
    codeExplanation: "Vector grows dynamically with push_back(). sort() orders elements in ascending order. Range-based for loop (for int n : nums) iterates all elements. find() searches and returns an iterator — compare with end() to check if found. reverse() reverses the order in-place.",
    commonMistakes: [
      "Using [] without checking bounds — use .at() for safe access (throws exception if out of bounds)",
      "Invalidating iterators after push_back — push_back may reallocate, making old iterators invalid",
      "Using vector<bool> — it's a special case and NOT a real vector of bools (uses bit packing)"
    ],
    practiceQuestions: [
      "Remove all duplicates from a vector",
      "Find the second largest element in a vector",
      "Implement a function that merges two sorted vectors"
    ]
  },
  {
    id: "list",
    title: "List",
    explanation: "std::list is a doubly-linked list. It provides O(1) insertion/deletion anywhere (given an iterator) but no random access (O(n) to access by index). It supports efficient splicing and merging.\n\nUse list when you need frequent insertions/deletions in the middle. Use vector for most other cases.",
    syntax: `// ===== std::list — Doubly Linked List =====
#include <list>

// --- Creating lists ---
list<int> lst;                  // Empty list
list<int> lst = {1, 2, 3};     // Initialize with values

// --- Adding elements (both ends!) ---
lst.push_back(4);     // Add to END     → {1,2,3,4}
lst.push_front(0);    // Add to FRONT   → {0,1,2,3,4}

// --- Removing elements ---
lst.pop_back();       // Remove from END
lst.pop_front();      // Remove from FRONT
lst.remove(3);        // Remove ALL elements with value 3

// --- Insert/erase at position ---
auto it = lst.begin();
advance(it, 2);            // Move iterator to index 2
lst.insert(it, 99);        // Insert 99 before position 2
lst.erase(it);              // Remove element at iterator

// --- List-specific operations ---
lst.sort();           // Sort the list (can't use std::sort!)
lst.reverse();        // Reverse the order
lst.unique();         // Remove consecutive duplicates (sort first!)

// ⚠️ No [] operator! Can't do lst[0] — use iterators only`,
    example: `// ===== List — Complete Example =====
#include <iostream>
#include <list>
using namespace std;

int main() {
    // --- Create a task list ---
    list<string> tasks = {"Study", "Code", "Sleep"};

    // --- Add to front and back ---
    tasks.push_front("Wake up");    // Add to beginning
    tasks.push_back("Repeat");      // Add to end

    // --- Sort alphabetically ---
    tasks.sort();  // list has its OWN sort method (not std::sort)

    // --- Print all tasks ---
    cout << "===== Today's Tasks (sorted) =====" << endl;
    for (const auto& t : tasks) {
        cout << "  ☐ " << t << endl;
    }

    // --- Remove a specific task ---
    tasks.remove("Sleep");  // Remove ALL occurrences of "Sleep"

    // --- Insert at a specific position ---
    auto it = tasks.begin();
    advance(it, 2);           // Move to position 2
    tasks.insert(it, "Eat");  // Insert "Eat" at position 2

    cout << "\\n===== Updated Tasks =====" << endl;
    for (const auto& t : tasks) {
        cout << "  ☐ " << t << endl;
    }

    cout << "\\nSize: " << tasks.size() << endl;

    return 0;
}
// Output:
// ===== Today's Tasks (sorted) =====
//   ☐ Code
//   ☐ Repeat
//   ☐ Sleep
//   ☐ Study
//   ☐ Wake up
//
// ===== Updated Tasks =====
//   ☐ Code
//   ☐ Repeat
//   ☐ Eat
//   ☐ Study
//   ☐ Wake up
//
// Size: 5`,
    codeExplanation: "list supports push_front (not available in vector!) and push_back. It has its own sort() method — std::sort won't work because list lacks random access iterators. remove() deletes all matching elements. advance() moves an iterator a specified number of positions.",
    commonMistakes: [
      "Trying to access elements by index (lst[0]) — list has NO [] operator, use iterators",
      "Using std::sort instead of list's sort method — std::sort requires random access iterators",
      "Not realizing list uses more memory per element than vector — each element has two extra pointers"
    ],
    practiceQuestions: [
      "When should you use list instead of vector?",
      "Implement a playlist using std::list with add, remove, and play next",
      "What is the memory overhead of list vs vector?"
    ]
  },
  {
    id: "stack-stl",
    title: "Stack (STL)",
    explanation: "std::stack is a LIFO (Last In, First Out) container adapter. It provides push(), pop(), top(), empty(), and size(). By default, it's built on top of deque, but you can use vector or list.\n\nStacks are used for expression evaluation, undo operations, DFS, and function call tracking.",
    syntax: `// ===== std::stack — Last In, First Out (LIFO) =====
#include <stack>

stack<int> s;          // Create an empty stack

// --- Adding elements ---
s.push(10);            // Push 10 onto the top
s.push(20);            // Push 20 on top of 10
s.push(30);            // Push 30 on top → stack is now: [10, 20, 30] (30 on top)

// --- Accessing the top ---
s.top();               // Returns 30 (the TOP element — does NOT remove it)

// --- Removing elements ---
s.pop();               // Removes 30 from top → stack is now: [10, 20]
// ⚠️ pop() does NOT return the value! Use top() first, then pop()

// --- Information ---
s.empty();             // false (stack has elements)
s.size();              // 2

// ===== LIFO = Last In, First Out =====
// Think of a stack of plates:
// - You put plates ON TOP (push)
// - You take plates FROM TOP (pop)
// - You can only see the TOP plate (top)`,
    example: `// ===== Stack — Bracket Matching Example =====
#include <iostream>
#include <stack>
#include <string>
using namespace std;

// Check if brackets are balanced: {[()]} → balanced, {[(])} → not
bool isBalanced(string expr) {
    stack<char> s;

    for (char c : expr) {
        // If opening bracket, PUSH onto stack
        if (c == '(' || c == '{' || c == '[') {
            s.push(c);
        }
        // If closing bracket, check if it matches the top
        else if (c == ')' || c == '}' || c == ']') {
            if (s.empty()) return false;  // No opening bracket to match!

            char top = s.top();  // See what's on top
            s.pop();             // Remove it

            // Check if the pair matches
            if ((c == ')' && top != '(') ||
                (c == '}' && top != '{') ||
                (c == ']' && top != '[')) {
                return false;  // Mismatched brackets!
            }
        }
    }

    return s.empty();  // If stack is empty, all brackets matched!
}

int main() {
    // --- Test cases ---
    string tests[] = {"{[()]}", "{[(])}", "((()))", "(()", "{}"};

    for (const auto& test : tests) {
        cout << test << " → "
             << (isBalanced(test) ? "✅ Balanced" : "❌ Not balanced")
             << endl;
    }

    return 0;
}
// Output:
// {[()]} → ✅ Balanced
// {[(])} → ❌ Not balanced
// ((())) → ✅ Balanced
// (()    → ❌ Not balanced
// {}     → ✅ Balanced`,
    codeExplanation: "Classic bracket matching using a stack: push opening brackets onto the stack, and when a closing bracket appears, pop the top and check if they match. If everything matches and the stack is empty at the end, the expression is balanced. This is a real-world use of LIFO behavior.",
    commonMistakes: [
      "Calling top() or pop() on an empty stack — undefined behavior (may crash)",
      "Trying to iterate over a stack — stacks are NOT iterable, you must pop one by one",
      "Forgetting that pop() does NOT return the value — use top() first, then pop()"
    ],
    practiceQuestions: [
      "Reverse a string using a stack",
      "Implement postfix expression evaluation using a stack",
      "What is the time complexity of all stack operations?"
    ]
  },
  {
    id: "queue-stl",
    title: "Queue (STL)",
    explanation: "std::queue is a FIFO (First In, First Out) container adapter. Elements are added at the back (push) and removed from the front (pop). Provides front(), back(), empty(), and size().\n\nQueues model real-world queues: task scheduling, BFS, print queues, message buffers.",
    syntax: `// ===== std::queue — First In, First Out (FIFO) =====
#include <queue>

queue<int> q;          // Create an empty queue

// --- Adding elements (to the BACK) ---
q.push(10);            // Add 10 to back
q.push(20);            // Add 20 to back
q.push(30);            // Add 30 to back → queue: [10, 20, 30]
                       //                  front=10, back=30

// --- Accessing elements ---
q.front();             // Returns 10 (FIRST element — will be removed next)
q.back();              // Returns 30 (LAST element added)

// --- Removing elements (from the FRONT) ---
q.pop();               // Removes 10 from front → queue: [20, 30]
// ⚠️ pop() does NOT return the value! Use front() first

// --- Information ---
q.empty();             // false
q.size();              // 2

// ===== FIFO = First In, First Out =====
// Think of a line at a store:
// - New people join at the BACK
// - People are served from the FRONT`,
    example: `// ===== Queue — Print Queue Example =====
#include <iostream>
#include <queue>
using namespace std;

int main() {
    // --- Simulate a printer queue ---
    queue<string> printQueue;

    // Documents are added to the queue (FIFO)
    printQueue.push("Document1.pdf");
    printQueue.push("Photo.jpg");
    printQueue.push("Report.docx");
    printQueue.push("Resume.pdf");

    cout << "===== Print Queue =====" << endl;
    cout << "Documents waiting: " << printQueue.size() << endl;
    cout << "Next to print: " << printQueue.front() << endl;

    // --- Process the queue (FIFO order) ---
    cout << "\\n===== Processing =====" << endl;
    int order = 1;
    while (!printQueue.empty()) {
        // front() gets the FIRST document (first added)
        cout << "  " << order++ << ". Printing: " << printQueue.front() << endl;
        printQueue.pop();  // Remove from front after printing
    }

    cout << "\\n✅ All documents printed!" << endl;
    cout << "Queue empty: " << (printQueue.empty() ? "Yes" : "No") << endl;

    return 0;
}
// Output:
// ===== Print Queue =====
// Documents waiting: 4
// Next to print: Document1.pdf
//
// ===== Processing =====
//   1. Printing: Document1.pdf
//   2. Printing: Photo.jpg
//   3. Printing: Report.docx
//   4. Printing: Resume.pdf
//
// ✅ All documents printed!
// Queue empty: Yes`,
    codeExplanation: "Four documents are queued for printing using push() (added to back). The while loop processes them in FIFO order — the first document added (Document1.pdf) is printed first using front(), then removed with pop(). This is exactly how real printer queues work.",
    commonMistakes: [
      "Calling front() or pop() on an empty queue — undefined behavior",
      "Confusing front() (first element, will be removed next) with back() (last element added)",
      "Trying to access elements by index — queue doesn't support random access"
    ],
    practiceQuestions: [
      "Simulate a ticket counter using a queue",
      "What is the difference between queue and deque?",
      "When would you use a priority_queue instead of a regular queue?"
    ]
  },
  {
    id: "set-stl",
    title: "Set",
    explanation: "std::set stores unique elements in sorted order. Insertion, deletion, and search are all O(log n) using a balanced BST internally. Duplicates are automatically ignored.\n\nUse unordered_set for O(1) average operations when order doesn't matter.",
    syntax: `// ===== std::set — Sorted Unique Elements =====
#include <set>

// --- Creating sets ---
set<int> s;                        // Empty set
set<int> s = {3, 1, 2, 3, 1};     // → {1, 2, 3} (sorted, no duplicates!)

// --- Adding elements ---
s.insert(4);      // Add 4 → {1, 2, 3, 4}
s.insert(2);      // 2 already exists → IGNORED (still {1, 2, 3, 4})

// --- Removing elements ---
s.erase(3);       // Remove 3 → {1, 2, 4}

// --- Searching ---
s.find(2);        // Returns iterator to 2 (or s.end() if not found)
s.count(2);       // Returns 1 (exists) or 0 (doesn't exist)
                  // count() is great for "does it exist?" checks

// --- Information ---
s.size();         // Number of elements
s.empty();        // Is the set empty?

// ===== Key Properties =====
// ✅ Always SORTED (ascending by default)
// ✅ All elements are UNIQUE (duplicates automatically removed)
// ✅ O(log n) insert, find, erase
// ❌ Can't modify elements in-place (erase and re-insert instead)
// ❌ No index access (no s[0])`,
    example: `// ===== Set — Complete Example =====
#include <iostream>
#include <set>
using namespace std;

int main() {
    // --- Create set with duplicates (they'll be removed!) ---
    set<int> nums = {5, 3, 8, 1, 3, 5, 8, 2};
    // Duplicates removed, sorted: {1, 2, 3, 5, 8}

    // --- Print the set ---
    cout << "Unique sorted: ";
    for (int n : nums) cout << n << " ";  // 1 2 3 5 8
    cout << "\\nSize: " << nums.size() << endl;  // 5

    // --- Check membership ---
    if (nums.count(5)) {
        cout << "5 is in the set ✅" << endl;
    }
    if (!nums.count(4)) {
        cout << "4 is NOT in the set ❌" << endl;
    }

    // --- Insert new elements ---
    nums.insert(4);    // Now in the set
    nums.insert(5);    // Already exists — ignored!

    // --- Remove an element ---
    nums.erase(3);     // Remove 3

    cout << "\\nAfter changes: ";
    for (int n : nums) cout << n << " ";  // 1 2 4 5 8
    cout << endl;

    // --- Find intersection of two sets ---
    set<int> setA = {1, 2, 3, 4, 5};
    set<int> setB = {3, 4, 5, 6, 7};
    cout << "\\nIntersection of A and B: ";
    for (int x : setA) {
        if (setB.count(x)) {       // If x is in both sets
            cout << x << " ";      // 3 4 5
        }
    }
    cout << endl;

    return 0;
}
// Output:
// Unique sorted: 1 2 3 5 8
// Size: 5
// 5 is in the set ✅
// 4 is NOT in the set ❌
//
// After changes: 1 2 4 5 8
//
// Intersection of A and B: 3 4 5`,
    codeExplanation: "Duplicate values (3, 5, 8) appear only once — set automatically removes duplicates. Elements are always sorted. count() returns 0 or 1 for membership testing. insert() ignores duplicates. erase() removes an element. The intersection example checks which elements exist in both sets.",
    commonMistakes: [
      "Expecting set to allow duplicates — use multiset for that",
      "Trying to modify elements in-place — you must erase and re-insert",
      "Accessing elements by index (s[0]) — set doesn't support this"
    ],
    practiceQuestions: [
      "Find the intersection of two sets",
      "Remove duplicates from a vector using set",
      "When to use set vs unordered_set?"
    ]
  },
  {
    id: "map-stl",
    title: "Map",
    explanation: "std::map stores key-value pairs sorted by key. Each key is unique. Operations (insert, find, erase) are O(log n). Access values with [] operator or .at().\n\nUse unordered_map for O(1) average operations when key order doesn't matter.",
    syntax: `// ===== std::map — Sorted Key-Value Pairs =====
#include <map>

// --- Creating maps ---
map<string, int> ages;                  // Empty map
map<string, int> ages = {
    {"Alice", 20},                      // key = "Alice", value = 20
    {"Bob", 25}
};

// --- Adding/Updating ---
ages["Charlie"] = 30;     // Add new key-value pair
ages["Alice"] = 21;       // UPDATE Alice's age (key already exists)
ages.insert({"Dave", 22}); // Insert (does NOT update if key exists)

// --- Accessing ---
ages["Alice"]             // Returns 20 — ⚠️ creates key if not found!
ages.at("Alice")          // Returns 20 — throws exception if not found

// --- Searching ---
ages.find("Alice")        // Iterator to element (or ages.end())
ages.count("Alice")       // 1 (exists) or 0 (doesn't)

// --- Removing ---
ages.erase("Bob");        // Remove Bob

// --- Iterating (auto unpacks key-value pair) ---
for (const auto& [name, age] : ages) {
    cout << name << ": " << age << endl;
}`,
    example: `// ===== Map — Word Frequency Counter =====
#include <iostream>
#include <map>
using namespace std;

int main() {
    // --- Count word frequencies ---
    map<string, int> wordCount;  // key=word, value=count
    string words[] = {"hello", "world", "hello", "cpp", "world", "hello"};

    for (const auto& w : words) {
        wordCount[w]++;  // Increment count for this word
        // If word doesn't exist, [] creates it with value 0, then ++
        // So first occurrence: 0 → 1
    }

    // --- Print frequencies (sorted by key automatically!) ---
    cout << "===== Word Frequencies =====" << endl;
    for (const auto& [word, count] : wordCount) {
        // Structured bindings: auto& [word, count] unpacks the pair
        cout << "  '" << word << "' appears " << count << " time(s)" << endl;
    }

    // --- Check if a word exists ---
    string searchWord = "cpp";
    if (wordCount.count(searchWord)) {
        cout << "\\n'" << searchWord << "' found! Count: "
             << wordCount[searchWord] << endl;
    }

    // --- Phone book example ---
    cout << "\\n===== Phone Book =====" << endl;
    map<string, string> phoneBook;
    phoneBook["Alice"] = "555-0101";
    phoneBook["Bob"] = "555-0202";
    phoneBook["Charlie"] = "555-0303";

    for (const auto& [name, phone] : phoneBook) {
        cout << "  " << name << ": " << phone << endl;
    }

    return 0;
}
// Output:
// ===== Word Frequencies =====
//   'cpp' appears 1 time(s)
//   'hello' appears 3 time(s)
//   'world' appears 2 time(s)
//
// 'cpp' found! Count: 1
//
// ===== Phone Book =====
//   Alice: 555-0101
//   Bob: 555-0202
//   Charlie: 555-0303`,
    codeExplanation: "wordCount maps each word to its frequency. The [] operator creates entries with default value (0 for int) if the key doesn't exist, then ++ increments it. Structured bindings (auto& [word, count]) unpack pairs during iteration. Keys are automatically sorted alphabetically.",
    commonMistakes: [
      "Using [] to check existence — it CREATES the key if missing! Use count() or find() instead",
      "Assuming insertion order is preserved — map sorts by KEY, not insertion order",
      "Not using .at() for const maps — [] can't be used on const maps (because it may create keys)"
    ],
    practiceQuestions: [
      "Build a phone book using map<string, string>",
      "Count character frequencies in a string",
      "What is the difference between map and unordered_map?"
    ]
  },
  {
    id: "iterators",
    title: "Iterators",
    explanation: "Iterators are objects that point to elements in containers, providing a uniform way to traverse them. Types: input, output, forward, bidirectional, and random access. Most STL algorithms work with iterators.\n\nbegin() points to the first element, end() points past the last. Use auto for type inference.",
    syntax: `// ===== Iterators — Pointers to Container Elements =====

vector<int> v = {10, 20, 30, 40, 50};

// --- Getting iterators ---
auto it = v.begin();     // Points to FIRST element (10)
auto end = v.end();      // Points PAST the last element (sentinel)

// --- Using iterators ---
*it          // Dereference: get the VALUE (10)
it++         // Move to NEXT element
it--         // Move to PREVIOUS element
it + 3       // Jump forward 3 positions (random access only)
it != end    // Check if we've reached the end

// --- Reverse iterators ---
auto rit = v.rbegin();   // Points to LAST element (50)
auto rend = v.rend();    // Points before the first element

// --- Iterator loop pattern ---
for (auto it = v.begin(); it != v.end(); ++it) {
    cout << *it << " ";   // Print each element
}
// This is what range-based for loops do internally!`,
    example: `// ===== Iterators — Complete Example =====
#include <iostream>
#include <vector>
using namespace std;

int main() {
    vector<int> v = {10, 20, 30, 40, 50};

    // --- Forward iteration ---
    cout << "Forward: ";
    for (auto it = v.begin(); it != v.end(); ++it) {
        cout << *it << " ";   // Dereference iterator to get value
    }
    cout << endl;  // 10 20 30 40 50

    // --- Reverse iteration ---
    cout << "Reverse: ";
    for (auto it = v.rbegin(); it != v.rend(); ++it) {
        cout << *it << " ";   // Starts from last, goes to first
    }
    cout << endl;  // 50 40 30 20 10

    // --- Modify elements through iterators ---
    cout << "Doubled: ";
    for (auto it = v.begin(); it != v.end(); ++it) {
        *it *= 2;  // Double each element through the iterator
    }
    for (int x : v) cout << x << " ";  // 20 40 60 80 100
    cout << endl;

    // --- Insert at a specific position ---
    auto pos = v.begin() + 2;   // Position 2 (third element)
    v.insert(pos, 55);          // Insert 55 at position 2
    cout << "After insert: ";
    for (int x : v) cout << x << " ";  // 20 40 55 60 80 100
    cout << endl;

    return 0;
}
// Output:
// Forward: 10 20 30 40 50
// Reverse: 50 40 30 20 10
// Doubled: 20 40 60 80 100
// After insert: 20 40 55 60 80 100`,
    codeExplanation: "begin()/end() provide forward iteration. rbegin()/rend() provide reverse iteration. Dereferencing (*it) gives the element value, which can also be modified (*it *= 2). begin() + 2 gives the position for insertion. This is what range-based for loops do internally!",
    commonMistakes: [
      "Comparing iterators from different containers — undefined behavior",
      "Invalidating iterators after container modification — insert/erase may invalidate iterators",
      "Using it < end instead of it != end for non-random-access iterators (list, set)"
    ],
    practiceQuestions: [
      "Use iterators to find the position of an element",
      "Insert an element at a specific position using an iterator",
      "What types of iterators does each STL container support?"
    ]
  },
  {
    id: "algorithms-stl",
    title: "STL Algorithms",
    explanation: "The <algorithm> header provides 100+ functions that work with iterators: sort, find, count, transform, accumulate, min/max_element, binary_search, reverse, unique, and more.\n\nThese are generic — they work with any container that provides appropriate iterators. Mastering STL algorithms is key to writing efficient, readable C++.",
    syntax: `// ===== Essential STL Algorithms =====
#include <algorithm>  // For sort, find, count, etc.
#include <numeric>    // For accumulate, iota

vector<int> v = {5, 3, 8, 1, 9, 2, 7};

// --- Sorting ---
sort(v.begin(), v.end());                    // Ascending: 1 2 3 5 7 8 9
sort(v.begin(), v.end(), greater<int>());    // Descending: 9 8 7 5 3 2 1

// --- Searching ---
find(v.begin(), v.end(), 8);                 // Iterator to 8 (or end())
binary_search(v.begin(), v.end(), 8);        // true/false (must be sorted!)
count(v.begin(), v.end(), 5);                // Number of 5s

// --- Min/Max ---
*min_element(v.begin(), v.end());            // Smallest element
*max_element(v.begin(), v.end());            // Largest element

// --- Modifying ---
reverse(v.begin(), v.end());                 // Reverse the order
fill(v.begin(), v.end(), 0);                 // Fill all with 0

// --- Aggregation ---
accumulate(v.begin(), v.end(), 0);           // Sum of all elements

// --- With lambda (custom logic) ---
count_if(v.begin(), v.end(),
    [](int n) { return n > 5; });            // Count elements > 5`,
    example: `// ===== STL Algorithms — Complete Example =====
#include <iostream>
#include <vector>
#include <algorithm>   // sort, find, count, reverse, etc.
#include <numeric>     // accumulate
using namespace std;

int main() {
    vector<int> v = {5, 3, 8, 1, 9, 2, 7};

    // --- Sort ascending ---
    sort(v.begin(), v.end());
    cout << "Sorted: ";
    for (int x : v) cout << x << " ";  // 1 2 3 5 7 8 9
    cout << endl;

    // --- Sum all elements ---
    int sum = accumulate(v.begin(), v.end(), 0);  // 0 is initial value
    cout << "Sum: " << sum << endl;                // 35

    // --- Find min and max ---
    auto [mn, mx] = minmax_element(v.begin(), v.end());
    cout << "Min: " << *mn << ", Max: " << *mx << endl;  // 1, 9

    // --- Binary search (only works on sorted data!) ---
    bool found = binary_search(v.begin(), v.end(), 7);
    cout << "7 found: " << (found ? "Yes" : "No") << endl;  // Yes

    // --- Count elements matching a condition ---
    int bigCount = count_if(v.begin(), v.end(),
        [](int n) { return n > 5; });  // Lambda: true if n > 5
    cout << "Elements > 5: " << bigCount << endl;  // 3 (7, 8, 9)

    // --- Reverse ---
    reverse(v.begin(), v.end());
    cout << "Reversed: ";
    for (int x : v) cout << x << " ";  // 9 8 7 5 3 2 1
    cout << endl;

    return 0;
}
// Output:
// Sorted: 1 2 3 5 7 8 9
// Sum: 35
// Min: 1, Max: 9
// 7 found: Yes
// Elements > 5: 3
// Reversed: 9 8 7 5 3 2 1`,
    codeExplanation: "sort() orders the vector. accumulate() sums all elements (starting from initial value 0). minmax_element returns iterators to the min and max. binary_search checks if a value exists (must be sorted first!). count_if uses a lambda to count elements matching a condition. reverse() reverses in-place.",
    commonMistakes: [
      "Using binary_search on unsorted data — it assumes sorted order, gives wrong results otherwise",
      "Forgetting #include <numeric> for accumulate — it's in a different header than <algorithm>",
      "Not capturing the return value of algorithms — many algorithms return useful iterators or values"
    ],
    practiceQuestions: [
      "Use transform to double all elements in a vector",
      "Sort a vector in descending order",
      "Remove all even numbers from a vector using remove_if and erase"
    ]
  },
  {
    id: "pair-stl",
    title: "Pair",
    explanation: "std::pair holds two values of potentially different types. Access members with .first and .second. Pairs are used extensively in maps, function return values, and algorithms.\n\nUse make_pair() or brace initialization {val1, val2}. C++17 structured bindings (auto [a, b]) make pairs even more convenient.",
    syntax: `// ===== std::pair — Two Values Together =====
#include <utility>  // For pair (also included by <map>, <algorithm>)

// --- Creating pairs ---
pair<int, string> p1(1, "hello");       // Constructor
pair<int, string> p2 = {1, "hello"};    // Brace initialization
auto p3 = make_pair(1, "hello");        // make_pair

// --- Accessing members ---
p1.first    // 1 (first element)
p1.second   // "hello" (second element)

// --- C++17 structured bindings (much cleaner!) ---
auto [id, name] = p1;   // id = 1, name = "hello"

// ===== Common uses =====
// 1. Return two values from a function
pair<int, int> getMinMax(vector<int>& v);

// 2. Map stores key-value as pairs
map<string, int> m;
for (auto& [key, val] : m) { }  // Iterate with structured bindings

// 3. Sort by second element
sort(v.begin(), v.end(),
    [](const auto& a, const auto& b) { return a.second > b.second; });`,
    example: `// ===== Pair — Student Rankings Example =====
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    // --- Vector of pairs: (name, score) ---
    vector<pair<string, int>> students = {
        {"Alice", 95},      // pair<string, int>
        {"Bob", 87},
        {"Charlie", 92},
        {"Diana", 98}
    };

    // --- Sort by score (descending) using lambda ---
    sort(students.begin(), students.end(),
         [](const auto& a, const auto& b) {
             return a.second > b.second;  // Compare by .second (score)
         });

    // --- Print rankings ---
    cout << "===== Rankings =====" << endl;
    int rank = 1;
    for (const auto& [name, score] : students) {
        // Structured bindings: auto& [name, score] unpacks the pair
        cout << "  #" << rank++ << " " << name << ": " << score << endl;
    }

    // --- Return two values from a function using pair ---
    auto findBestWorst = [&]() -> pair<string, string> {
        return {students.front().first,   // Best (first after desc sort)
                students.back().first};   // Worst (last after desc sort)
    };

    auto [best, worst] = findBestWorst();
    cout << "\\nBest: " << best << ", Needs improvement: " << worst << endl;

    return 0;
}
// Output:
// ===== Rankings =====
//   #1 Diana: 98
//   #2 Alice: 95
//   #3 Charlie: 92
//   #4 Bob: 87
//
// Best: Diana, Needs improvement: Bob`,
    codeExplanation: "A vector of pairs stores student name-score data. Custom sort uses a lambda to sort by .second (score) in descending order. Structured bindings (auto& [name, score]) unpack each pair during iteration. A lambda function returns a pair containing the best and worst student names.",
    commonMistakes: [
      "Confusing .first and .second — especially when pair types are different",
      "Not using structured bindings (C++17) — they make code much more readable",
      "Creating deeply nested pairs like pair<int, pair<int, pair<int, int>>> — use tuple or struct instead"
    ],
    practiceQuestions: [
      "Return two values from a function using pair",
      "Sort a vector of pairs by the first element",
      "When should you use pair vs struct?"
    ]
  }
];

export const advancedTopics: Topic[] = [
  {
    id: "templates",
    title: "Templates",
    explanation: "Templates enable generic programming — writing code that works with any data type. Function templates create type-independent functions, and class templates create type-independent classes. The compiler generates specific versions at compile time.\n\nSTL containers (vector, map) and algorithms are all built with templates.",
    syntax: `// ===== Templates — Write Once, Use with ANY Type =====

// --- Function template ---
// 'T' is a placeholder for ANY type
// The compiler generates specific versions (int, double, string, etc.)
template <typename T>      // "T is a type parameter"
T maximum(T a, T b) {
    return (a > b) ? a : b;  // Works for int, double, string, etc.
}
// Usage:
// maximum(3, 7)         → T becomes int → returns 7
// maximum(3.14, 2.71)   → T becomes double → returns 3.14
// maximum("apple", "banana") → T becomes string → returns "banana"

// --- Class template ---
template <typename T>
class Container {
    T data;                    // 'data' can be any type
public:
    void set(T val) { data = val; }
    T get() { return data; }
};
// Usage:
// Container<int> c1;     → T becomes int
// Container<string> c2;  → T becomes string`,
    example: `// ===== Templates — Complete Example =====
#include <iostream>
#include <string>
using namespace std;

// --- Function template: works with ANY comparable type ---
template <typename T>
T findMax(T arr[], int size) {
    T maxVal = arr[0];               // Start with first element
    for (int i = 1; i < size; i++) {
        if (arr[i] > maxVal) {       // Compare using > operator
            maxVal = arr[i];         // Update max if larger
        }
    }
    return maxVal;
}

// --- Function template: swap any two values ---
template <typename T>
void mySwap(T &a, T &b) {
    T temp = a;    // Works for int, double, string — anything!
    a = b;
    b = temp;
}

int main() {
    // --- Use with int ---
    int intArr[] = {3, 7, 1, 9, 4};
    cout << "Max int: " << findMax(intArr, 5) << endl;      // 9

    // --- Same function, used with double ---
    double dblArr[] = {2.5, 8.1, 3.7};
    cout << "Max double: " << findMax(dblArr, 3) << endl;   // 8.1

    // --- Same function, used with string ---
    string strArr[] = {"banana", "apple", "cherry"};
    cout << "Max string: " << findMax(strArr, 3) << endl;   // cherry

    // --- Swap template ---
    int a = 10, b = 20;
    mySwap(a, b);                    // Swaps integers
    cout << "\\nAfter swap: a=" << a << ", b=" << b << endl;  // a=20, b=10

    string s1 = "hello", s2 = "world";
    mySwap(s1, s2);                  // Same function swaps strings!
    cout << "After swap: s1=" << s1 << ", s2=" << s2 << endl;

    return 0;
}
// Output:
// Max int: 9
// Max double: 8.1
// Max string: cherry
//
// After swap: a=20, b=10
// After swap: s1=world, s2=hello`,
    codeExplanation: "findMax and mySwap work with ANY type. The compiler generates separate int, double, and string versions based on usage. One function definition handles multiple types — this is generic programming. The type T is automatically deduced from the arguments.",
    commonMistakes: [
      "Defining template functions in .cpp files — they must be in headers (the compiler needs to see the full definition)",
      "Not providing the type when the compiler can't infer it — use func<int>() explicitly",
      "Template error messages can be extremely verbose — focus on the FIRST error"
    ],
    practiceQuestions: [
      "Write a template function to swap two values of any type",
      "Create a template class for a simple Stack",
      "What is template specialization?"
    ]
  },
  {
    id: "exception-handling",
    title: "Exception Handling",
    explanation: "Exceptions handle runtime errors gracefully using try-catch-throw. Code that might fail goes in try, throw raises an exception, and catch handles it. C++ can throw any type, but std::exception and its subclasses are standard.\n\nExceptions separate error handling from normal logic, making code cleaner.",
    syntax: `// ===== Exception Handling: try-catch-throw =====

// --- Basic structure ---
try {
    // Code that MIGHT cause an error
    // If an error occurs, THROW an exception
    throw runtime_error("Something went wrong!");
}
catch (const runtime_error& e) {
    // Handle the specific error
    cout << "Error: " << e.what() << endl;
}
catch (const exception& e) {
    // Handle ANY standard exception
    cout << "Exception: " << e.what() << endl;
}
catch (...) {
    // Handle ANYTHING else (last resort)
    cout << "Unknown error!" << endl;
}

// ===== Standard exception types =====
// runtime_error   — Errors detected at runtime
// invalid_argument — Bad function argument
// out_of_range    — Index out of bounds
// overflow_error  — Arithmetic overflow
// logic_error     — Program logic violation

// ===== Flow =====
// 1. Code in 'try' runs normally
// 2. If 'throw' is executed, jump to matching 'catch'
// 3. Code AFTER 'throw' in try block is SKIPPED
// 4. After catch, program continues normally`,
    example: `// ===== Exception Handling — Complete Example =====
#include <iostream>
#include <stdexcept>    // For runtime_error, invalid_argument, etc.
using namespace std;

// --- Function that may throw an exception ---
double divide(double a, double b) {
    if (b == 0) {
        // THROW an exception — immediately leaves this function
        throw runtime_error("Division by zero!");
    }
    return a / b;
}

// --- Function with input validation ---
int getAge(int age) {
    if (age < 0 || age > 150) {
        throw invalid_argument("Age must be between 0 and 150");
    }
    return age;
}

int main() {
    // --- Try block: code that might fail ---
    try {
        cout << "10 / 3 = " << divide(10, 3) << endl;  // Works fine: 3.33

        cout << "5 / 0 = " << divide(5, 0) << endl;    // THROWS exception!
        // ↑↑↑ This line THROWS, so the next line is SKIPPED ↑↑↑

        cout << "This line is NEVER reached!" << endl;
    }
    // --- Catch block: handle the error ---
    catch (const runtime_error& e) {
        // e.what() returns the error message
        cerr << "❌ Runtime error: " << e.what() << endl;
    }

    // Program continues after catch!
    cout << "\\nProgram continues after exception handling..." << endl;

    // --- Another try-catch ---
    try {
        getAge(200);  // Invalid! Throws invalid_argument
    }
    catch (const invalid_argument& e) {
        cerr << "❌ Invalid argument: " << e.what() << endl;
    }

    cout << "\\n✅ Program finished successfully!" << endl;

    return 0;
}
// Output:
// 10 / 3 = 3.33333
// ❌ Runtime error: Division by zero!
//
// Program continues after exception handling...
// ❌ Invalid argument: Age must be between 0 and 150
//
// ✅ Program finished successfully!`,
    codeExplanation: "divide() throws a runtime_error if b is 0. The try block calls it — when the exception is thrown, execution jumps to the matching catch block. The program continues normally after catch instead of crashing. e.what() returns the error message string.",
    commonMistakes: [
      "Catching exceptions by value instead of by reference — causes 'slicing' (loses derived type info)",
      "Using exceptions for normal control flow — exceptions are expensive, use if/else for expected conditions",
      "Not catching exceptions at all — an uncaught exception terminates the program"
    ],
    practiceQuestions: [
      "Create a custom exception class that inherits from runtime_error",
      "Handle file-not-found with exceptions",
      "What is the difference between throw and catch?"
    ]
  },
  {
    id: "namespaces",
    title: "Namespaces",
    explanation: "Namespaces prevent name collisions by grouping related code under a unique name. std is the standard namespace. You can create your own namespaces and nest them.\n\nAvoid 'using namespace std;' in headers — it pollutes the global namespace. Use std::cout explicitly in headers.",
    syntax: `// ===== Namespaces — Preventing Name Collisions =====

// --- Creating a namespace ---
namespace MyLib {
    void func() { cout << "MyLib::func" << endl; }
    int value = 42;
    const double PI = 3.14159;
}

// --- Using items from a namespace ---
// Method 1: Fully qualified name (safest)
MyLib::func();              // Use namespace::name
cout << MyLib::value;

// Method 2: Import a specific item
using MyLib::func;          // Now you can just write func()
func();

// Method 3: Import everything (avoid in headers!)
using namespace MyLib;      // Now you can use ALL items without MyLib::
func();
cout << value;

// ===== Why does this matter? =====
// Imagine two libraries both define a function called "sort":
// LibA::sort() and LibB::sort()
// Without namespaces, the compiler wouldn't know which one you mean!`,
    example: `// ===== Namespaces — Complete Example =====
#include <iostream>
using namespace std;

// --- Create custom namespaces ---
namespace Math {
    const double PI = 3.14159265;
    const double E = 2.71828;

    double circleArea(double r) {
        return PI * r * r;       // π × r²
    }

    double circleCircumference(double r) {
        return 2 * PI * r;       // 2πr
    }
}

namespace Physics {
    const double GRAVITY = 9.81;     // m/s² on Earth
    const double SPEED_OF_LIGHT = 3e8;  // m/s

    double fallTime(double height) {
        // t = sqrt(2h/g)
        return sqrt(2 * height / GRAVITY);
    }

    double speed(double distance, double time) {
        return distance / time;
    }
}

int main() {
    // --- Use fully qualified names ---
    cout << "===== Math =====" << endl;
    cout << "Circle area (r=5): " << Math::circleArea(5) << endl;
    cout << "Circumference:     " << Math::circleCircumference(5) << endl;
    cout << "PI = " << Math::PI << endl;

    cout << "\\n===== Physics =====" << endl;
    cout << "Fall time from 100m: " << Physics::fallTime(100) << "s" << endl;
    cout << "Speed (100m/9.58s): " << Physics::speed(100, 9.58) << " m/s" << endl;
    cout << "Gravity = " << Physics::GRAVITY << " m/s²" << endl;

    return 0;
}
// Output:
// ===== Math =====
// Circle area (r=5): 78.5398
// Circumference:     31.4159
// PI = 3.14159
//
// ===== Physics =====
// Fall time from 100m: 4.51524s
// Speed (100m/9.58s): 10.4384 m/s
// Gravity = 9.81 m/s²`,
    codeExplanation: "Math and Physics namespaces group related constants and functions. We access them using :: (scope resolution operator). If both namespaces had a function called 'calculate', there would be no conflict because Math::calculate and Physics::calculate are distinct.",
    commonMistakes: [
      "Using 'using namespace' in header files — pollutes every file that includes the header",
      "Creating deeply nested namespaces unnecessarily — keep it simple",
      "Confusing namespace with class — namespaces group code, classes define objects"
    ],
    practiceQuestions: [
      "Create two namespaces with same-named functions and use both",
      "What is an anonymous namespace and when would you use it?",
      "Why is 'using namespace std' discouraged in headers?"
    ]
  },
  {
    id: "lambda-functions",
    title: "Lambda Functions",
    explanation: "Lambdas are anonymous (unnamed) functions defined inline. They can capture variables from the surrounding scope. Syntax: [capture](params) -> returnType { body }.\n\nLambdas are essential for STL algorithms, callbacks, and short one-off functions. C++14 allows auto parameters for generic lambdas.",
    syntax: `// ===== Lambda Functions =====
// Syntax: [capture](parameters) -> returnType { body }

// --- Basic lambda ---
auto add = [](int a, int b) { return a + b; };
cout << add(3, 4);  // 7

// --- Capture: Access variables from surrounding scope ---
int x = 10;
auto addX = [x](int a) { return a + x; };  // Capture x BY VALUE (copy)
cout << addX(5);  // 15

auto modifyX = [&x]() { x += 10; };  // Capture x BY REFERENCE
modifyX();  // x is now 20

// --- Capture shortcuts ---
[=]  // Capture ALL variables by value (copy)
[&]  // Capture ALL variables by reference
[=, &x]  // All by value, but x by reference
[&, x]   // All by reference, but x by value

// ===== Common use: With STL algorithms =====
sort(v.begin(), v.end(), [](int a, int b) { return a > b; });
//                       ↑ lambda as comparison function

count_if(v.begin(), v.end(), [](int n) { return n > 5; });
//                           ↑ lambda as predicate`,
    example: `// ===== Lambda Functions — Complete Example =====
#include <iostream>
#include <vector>
#include <algorithm>   // sort, count_if, for_each
using namespace std;

int main() {
    vector<int> nums = {1, 5, 3, 8, 2, 7, 4, 6};

    // --- Lambda 1: Sort descending ---
    sort(nums.begin(), nums.end(),
         [](int a, int b) { return a > b; });  // true if a should come first
    cout << "Sorted desc: ";
    for (int n : nums) cout << n << " ";  // 8 7 6 5 4 3 2 1
    cout << endl;

    // --- Lambda 2: Count with captured variable ---
    int threshold = 4;
    int count = count_if(nums.begin(), nums.end(),
        [threshold](int n) { return n > threshold; });
    // [threshold] captures the local variable by value
    cout << "Numbers > " << threshold << ": " << count << endl;  // 4

    // --- Lambda 3: Print with for_each ---
    cout << "All numbers: ";
    for_each(nums.begin(), nums.end(),
        [](int n) { cout << n << " "; });  // Print each element
    cout << endl;

    // --- Lambda 4: Modify captured variable by reference ---
    int total = 0;
    for_each(nums.begin(), nums.end(),
        [&total](int n) { total += n; });  // [&total] captures by reference
    cout << "Sum: " << total << endl;       // 36

    // --- Lambda 5: Store and reuse ---
    auto isEven = [](int n) { return n % 2 == 0; };
    cout << "Even numbers: ";
    for (int n : nums) {
        if (isEven(n)) cout << n << " ";   // 8 6 4 2
    }
    cout << endl;

    return 0;
}
// Output:
// Sorted desc: 8 7 6 5 4 3 2 1
// Numbers > 4: 4
// All numbers: 8 7 6 5 4 3 2 1
// Sum: 36
// Even numbers: 8 6 4 2`,
    codeExplanation: "Five lambdas demonstrated: (1) comparison for descending sort, (2) predicate with captured threshold for counting, (3) action for printing each element, (4) accumulation using reference capture [&total], and (5) a stored reusable lambda for checking even numbers. Lambdas make STL algorithm usage concise and readable.",
    commonMistakes: [
      "Capturing by reference when the variable goes out of scope — dangling reference",
      "Forgetting the capture list [] — even if empty, the brackets are required",
      "Overcomplicating lambdas — if a lambda is more than 3-4 lines, use a named function instead"
    ],
    practiceQuestions: [
      "Use a lambda to transform all strings to uppercase",
      "What is the difference between [=] and [&]?",
      "Write a lambda that captures and modifies a local variable"
    ]
  },
  {
    id: "smart-pointers",
    title: "Smart Pointers",
    explanation: "Smart pointers (from <memory>) automatically manage heap memory, preventing leaks. unique_ptr has sole ownership (can't be copied). shared_ptr allows multiple owners (reference counted). weak_ptr breaks circular references.\n\nModern C++ (C++11+) should use smart pointers instead of raw new/delete in almost all cases.",
    syntax: `// ===== Smart Pointers — Automatic Memory Management =====
#include <memory>

// --- unique_ptr: SOLE ownership (only ONE owner) ---
// Can't be copied, only MOVED
auto up = make_unique<int>(42);       // Create unique_ptr to int(42)
cout << *up;                           // 42 (dereference like raw pointer)
// auto up2 = up;                      // ❌ Can't copy unique_ptr!
auto up2 = move(up);                   // ✅ Transfer ownership (up becomes null)

// --- shared_ptr: SHARED ownership (multiple owners) ---
// Reference counted — destroyed when LAST owner is gone
auto sp1 = make_shared<int>(42);      // Create shared_ptr
auto sp2 = sp1;                        // ✅ Can copy! (ref count = 2)
cout << sp1.use_count();               // 2 (two owners)
// When sp1 and sp2 both go out of scope → memory freed

// --- weak_ptr: Non-owning reference ---
// Doesn't prevent destruction, breaks circular references
weak_ptr<int> wp = sp1;               // Doesn't increase ref count

// ===== No more new/delete! =====
// ❌ Old way: int* p = new int(42); ... delete p;
// ✅ New way: auto p = make_unique<int>(42); // Auto-deleted!`,
    example: `// ===== Smart Pointers — Complete Example =====
#include <iostream>
#include <memory>      // For unique_ptr, shared_ptr
using namespace std;

class Resource {
    string name;
public:
    Resource(string n) : name(n) {
        cout << "  📦 " << name << " created" << endl;
    }
    ~Resource() {
        cout << "  🗑️ " << name << " destroyed" << endl;
    }
    void use() { cout << "  Using " << name << endl; }
};

int main() {
    // ===== unique_ptr: Sole ownership =====
    cout << "===== unique_ptr =====" << endl;
    {
        auto r1 = make_unique<Resource>("Resource-1");
        r1->use();       // Use like a regular pointer (->)

        // auto r2 = r1;  // ❌ Can't copy! unique_ptr has sole ownership
        auto r2 = move(r1);  // ✅ Transfer ownership to r2
        r2->use();
        // r1 is now nullptr — r2 is the sole owner
    }  // r2 goes out of scope → Resource-1 automatically destroyed!
    cout << endl;

    // ===== shared_ptr: Shared ownership =====
    cout << "===== shared_ptr =====" << endl;
    auto r3 = make_shared<Resource>("Resource-2");
    cout << "  Ref count: " << r3.use_count() << endl;  // 1

    {
        auto r4 = r3;    // ✅ Can copy! Both own Resource-2
        cout << "  Ref count: " << r3.use_count() << endl;  // 2
        r4->use();
    }  // r4 goes out of scope → ref count drops to 1 (NOT destroyed yet!)

    cout << "  Ref count: " << r3.use_count() << endl;  // 1
    r3->use();   // Resource-2 still alive!

    cout << "\\n===== End of main =====" << endl;
    return 0;
    // r3 goes out of scope → ref count drops to 0 → Resource-2 destroyed!
}
// Output:
// ===== unique_ptr =====
//   📦 Resource-1 created
//   Using Resource-1
//   Using Resource-1
//   🗑️ Resource-1 destroyed
//
// ===== shared_ptr =====
//   📦 Resource-2 created
//   Ref count: 1
//   Ref count: 2
//   Using Resource-2
//   Ref count: 1
//   Using Resource-2
//
// ===== End of main =====
//   🗑️ Resource-2 destroyed`,
    codeExplanation: "unique_ptr r1 owns Resource-1 exclusively — when transferred to r2 via move(), r1 becomes null. Resource-1 is automatically destroyed when r2 goes out of scope. shared_ptr r3 shares ownership of Resource-2 — when r4 joins (copy), ref count becomes 2. Resource-2 is only destroyed when the LAST owner (r3) goes out of scope. No manual delete needed!",
    commonMistakes: [
      "Trying to copy a unique_ptr — use std::move to transfer ownership instead",
      "Creating shared_ptr from a raw pointer multiple times — causes double-delete crash",
      "Not using make_unique/make_shared — they're safer and more efficient than raw new"
    ],
    practiceQuestions: [
      "Refactor a raw pointer program to use smart pointers",
      "When should you use unique_ptr vs shared_ptr?",
      "What problem does weak_ptr solve?"
    ]
  },
  {
    id: "move-semantics",
    title: "Move Semantics",
    explanation: "Move semantics (C++11) allow transferring resources from one object to another instead of copying. This avoids expensive deep copies for temporary objects. Implemented via move constructors and move assignment operators using rvalue references (&&).\n\nstd::move casts an object to an rvalue reference, enabling the move.",
    syntax: `// ===== Move Semantics =====
// Instead of COPYING data (expensive), MOVE it (cheap)

// --- Move constructor ---
class MyClass {
    int* data;
public:
    // Regular constructor
    MyClass(int val) : data(new int(val)) {}

    // COPY constructor: creates a deep copy (expensive!)
    MyClass(const MyClass& other) : data(new int(*other.data)) {
        cout << "Copied!" << endl;
    }

    // MOVE constructor: transfers ownership (cheap!)
    MyClass(MyClass&& other) noexcept : data(other.data) {
        other.data = nullptr;  // Leave source in valid but empty state
        cout << "Moved!" << endl;
    }

    ~MyClass() { delete data; }
};

// --- std::move: Force a move ---
MyClass a(42);
MyClass b = move(a);    // Calls MOVE constructor (not copy)
// a is now "moved-from" — valid but empty/unspecified

// ===== When moves happen automatically =====
// 1. Returning local objects from functions
// 2. Passing temporary objects
// 3. push_back with rvalue`,
    example: `// ===== Move Semantics — Complete Example =====
#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main() {
    // --- Move a string (instead of copying) ---
    string s1 = "Hello, World! This is a long string.";
    cout << "Before move:" << endl;
    cout << "  s1: '" << s1 << "'" << endl;

    string s2 = move(s1);  // MOVE s1's internal data to s2 (no copying!)
    cout << "\\nAfter move:" << endl;
    cout << "  s2: '" << s2 << "'" << endl;  // Has the data
    cout << "  s1: '" << s1 << "'" << endl;  // Empty! (data was moved away)

    // --- Move with vectors ---
    cout << "\\n===== Vector Move =====" << endl;
    vector<string> names;

    string name = "Alice Johnson";
    cout << "Before push: name = '" << name << "'" << endl;

    names.push_back(move(name));  // MOVE into vector (faster than copy!)
    cout << "After push:  name = '" << name << "'" << endl;  // Empty!
    cout << "names[0] = '" << names[0] << "'" << endl;        // "Alice Johnson"

    // --- Automatic move for temporaries ---
    cout << "\\n===== Automatic Move =====" << endl;
    vector<string> v;
    v.push_back("Temporary string");  // Temporary → automatically MOVED (not copied)
    v.push_back(string("Another one")); // Same: temporary → moved
    cout << "v has " << v.size() << " strings" << endl;

    return 0;
}
// Output:
// Before move:
//   s1: 'Hello, World! This is a long string.'
//
// After move:
//   s2: 'Hello, World! This is a long string.'
//   s1: ''
//
// ===== Vector Move =====
// Before push: name = 'Alice Johnson'
// After push:  name = ''
// names[0] = 'Alice Johnson'
//
// ===== Automatic Move =====
// v has 2 strings`,
    codeExplanation: "std::move transfers s1's internal data to s2 without copying — s1 becomes empty (moved-from state). push_back(move(name)) transfers the string into the vector instead of copying it. For temporary objects (string literals, rvalues), the compiler automatically uses move semantics. Moving is much faster than copying for large objects.",
    commonMistakes: [
      "Using an object after moving from it — it's in a 'valid but unspecified' state (usually empty)",
      "Forgetting noexcept on move operations — some containers like vector may fall back to copying",
      "Moving from const objects — doesn't actually move, silently falls back to copying"
    ],
    practiceQuestions: [
      "Write a class with both copy and move constructors",
      "What is an rvalue reference (&&)?",
      "When does the compiler automatically use move semantics?"
    ]
  }
];

export const dataStructureTopics: Topic[] = [
  {
    id: "linked-list",
    title: "Linked List",
    explanation: "A linked list is a linear data structure where each element (node) contains data and a pointer to the next node. Unlike arrays, elements aren't stored contiguously — they can be anywhere in memory.\n\nAdvantages: O(1) insertion/deletion at head, dynamic size. Disadvantages: O(n) access, extra memory for pointers.",
    syntax: `// ===== Linked List Structure =====

// --- Node: One element of the list ---
struct Node {
    int data;       // The value stored in this node
    Node* next;     // Pointer to the NEXT node (or nullptr if last)

    // Constructor for easy creation
    Node(int d) : data(d), next(nullptr) {}
};

// --- Linked List visual ---
// Head → [10|→] → [20|→] → [30|→] → nullptr
//
// Each box is a Node:
//   [data | next pointer]
// The last node's 'next' is nullptr (end of list)

// --- Key operations ---
// Push front:  O(1) — add to beginning
// Push back:   O(n) — must traverse to end
// Delete:      O(n) — must find the node first
// Search:      O(n) — must check each node
// Access [i]:  O(n) — must walk through i nodes`,
    example: `// ===== Linked List — Complete Example =====
#include <iostream>
using namespace std;

// --- Node structure ---
struct Node {
    int data;
    Node* next;
    Node(int d) : data(d), next(nullptr) {}
};

// --- Linked List class ---
class LinkedList {
    Node* head;  // Pointer to the first node
public:
    LinkedList() : head(nullptr) {}

    // Add to the FRONT of the list — O(1)
    void pushFront(int val) {
        Node* newNode = new Node(val);  // Create new node
        newNode->next = head;           // Point new node to current head
        head = newNode;                 // Update head to new node
    }

    // Add to the END of the list — O(n)
    void pushBack(int val) {
        Node* newNode = new Node(val);
        if (!head) {                    // If list is empty
            head = newNode;
            return;
        }
        Node* curr = head;
        while (curr->next) {            // Walk to the last node
            curr = curr->next;
        }
        curr->next = newNode;           // Last node points to new node
    }

    // Display the list
    void display() {
        Node* curr = head;
        while (curr) {                  // While not nullptr
            cout << curr->data << " → ";
            curr = curr->next;          // Move to next node
        }
        cout << "NULL" << endl;
    }

    // Destructor: free all nodes
    ~LinkedList() {
        while (head) {
            Node* temp = head;
            head = head->next;
            delete temp;                // Free each node
        }
    }
};

int main() {
    LinkedList list;

    // Build the list
    list.pushFront(3);     // List: 3 → NULL
    list.pushFront(2);     // List: 2 → 3 → NULL
    list.pushFront(1);     // List: 1 → 2 → 3 → NULL
    list.pushBack(4);      // List: 1 → 2 → 3 → 4 → NULL

    cout << "List: ";
    list.display();        // 1 → 2 → 3 → 4 → NULL

    return 0;
}
// Output:
// List: 1 → 2 → 3 → 4 → NULL`,
    codeExplanation: "Node stores data and a pointer to the next node. pushFront creates a new node, points it to the current head, then updates head — O(1). pushBack walks to the last node and attaches the new node — O(n). The destructor traverses the list and deletes each node to prevent memory leaks.",
    commonMistakes: [
      "Memory leaks from not deleting nodes — every new must have a matching delete",
      "Losing the head pointer — if head is overwritten without saving, the entire list is lost",
      "Not handling the empty list case — check if head is nullptr before operations"
    ],
    practiceQuestions: [
      "Implement insertAt(index, value) and deleteAt(index)",
      "Reverse a linked list (change all the next pointers)",
      "Detect if a linked list has a cycle (Floyd's algorithm)"
    ]
  },
  {
    id: "stack-impl",
    title: "Stack Implementation",
    explanation: "A stack can be implemented using an array or linked list. Array-based is simpler but has fixed capacity. Linked-list-based has dynamic size but uses more memory per element.\n\nKey operations: push (add to top), pop (remove from top), peek/top (view top), isEmpty.",
    syntax: `// ===== Stack Implementation (Array-based) =====
// Stack: LIFO — Last In, First Out

class Stack {
    int* arr;           // Dynamic array to hold elements
    int topIdx;         // Index of the top element (-1 if empty)
    int capacity;       // Maximum number of elements

public:
    Stack(int cap);     // Constructor: allocate array
    ~Stack();           // Destructor: free array

    void push(int val); // Add element to TOP       — O(1)
    int pop();          // Remove and return TOP     — O(1)
    int top();          // View TOP without removing — O(1)
    bool isEmpty();     // Check if stack is empty   — O(1)
    int size();         // Number of elements        — O(1)
};

// topIdx starts at -1 (empty stack)
// push: ++topIdx, then arr[topIdx] = val
// pop:  return arr[topIdx--]
// top:  return arr[topIdx]`,
    example: `// ===== Stack Implementation — Complete Example =====
#include <iostream>
using namespace std;

class Stack {
    int* arr;
    int topIdx, capacity;
public:
    // Constructor: create array with given capacity
    Stack(int cap = 100) : capacity(cap), topIdx(-1) {
        arr = new int[capacity];
    }

    // Destructor: free the array
    ~Stack() { delete[] arr; }

    // Push: add element to top
    void push(int val) {
        if (topIdx >= capacity - 1) {
            cout << "❌ Stack Overflow! (full)" << endl;
            return;
        }
        arr[++topIdx] = val;  // Increment top, then store
    }

    // Pop: remove and return top element
    int pop() {
        if (isEmpty()) {
            cout << "❌ Stack Underflow! (empty)" << endl;
            return -1;
        }
        return arr[topIdx--];  // Return top, then decrement
    }

    // Top: view top element without removing
    int top() {
        return isEmpty() ? -1 : arr[topIdx];
    }

    bool isEmpty() { return topIdx == -1; }
    int size() { return topIdx + 1; }
};

int main() {
    Stack s(5);  // Stack with capacity 5

    // Push elements
    s.push(10);  // Stack: [10]
    s.push(20);  // Stack: [10, 20]
    s.push(30);  // Stack: [10, 20, 30]

    cout << "Top: " << s.top() << endl;          // 30
    cout << "Size: " << s.size() << endl;         // 3
    cout << "Popped: " << s.pop() << endl;        // 30
    cout << "Popped: " << s.pop() << endl;        // 20
    cout << "Top now: " << s.top() << endl;       // 10
    cout << "Empty? " << s.isEmpty() << endl;     // 0 (false)

    return 0;
}
// Output:
// Top: 30
// Size: 3
// Popped: 30
// Popped: 20
// Top now: 10
// Empty? 0`,
    codeExplanation: "Array-based stack uses topIdx (-1 = empty) to track the top position. push increments topIdx then stores the value. pop returns the value then decrements topIdx. Overflow (full) and underflow (empty) are checked. All operations are O(1).",
    commonMistakes: [
      "Not checking for overflow (push on full stack) and underflow (pop on empty stack)",
      "Off-by-one errors with top index — topIdx is -1 when empty, 0 for one element",
      "Forgetting to delete[] the array in the destructor — memory leak"
    ],
    practiceQuestions: [
      "Implement a stack using a linked list instead of an array",
      "Evaluate a postfix expression using your stack",
      "Implement a min-stack that tracks the minimum in O(1)"
    ]
  },
  {
    id: "queue-impl",
    title: "Queue Implementation",
    explanation: "A queue can be implemented with a circular array or linked list. Circular array uses front and rear indices that wrap around. This avoids wasting space as elements are dequeued.\n\nKey operations: enqueue (add to rear), dequeue (remove from front), front (view front).",
    syntax: `// ===== Queue Implementation (Circular Array) =====
// Queue: FIFO — First In, First Out

class Queue {
    int* arr;
    int front, rear;      // Front and rear indices
    int capacity, count;  // Max size and current count

public:
    Queue(int cap);
    void enqueue(int val);  // Add to rear    — O(1)
    int dequeue();          // Remove from front — O(1)
    int peek();             // View front element — O(1)
    bool isEmpty();

    // ===== Circular indexing =====
    // When rear reaches the end, it wraps to the beginning:
    // rear = (rear + 1) % capacity;
    //
    // Example with capacity 5:
    // (0 + 1) % 5 = 1
    // (4 + 1) % 5 = 0  ← wraps around!
};`,
    example: `// ===== Queue Implementation — Complete Example =====
#include <iostream>
using namespace std;

class Queue {
    int* arr;
    int front, rear, capacity, count;
public:
    // Constructor
    Queue(int cap = 100) : capacity(cap), front(0), rear(-1), count(0) {
        arr = new int[capacity];
    }
    ~Queue() { delete[] arr; }

    // Enqueue: add to rear
    void enqueue(int val) {
        if (count == capacity) {
            cout << "❌ Queue is full!" << endl;
            return;
        }
        rear = (rear + 1) % capacity;  // Circular wrap-around
        arr[rear] = val;
        count++;
    }

    // Dequeue: remove from front
    int dequeue() {
        if (isEmpty()) {
            cout << "❌ Queue is empty!" << endl;
            return -1;
        }
        int val = arr[front];
        front = (front + 1) % capacity;  // Circular wrap-around
        count--;
        return val;
    }

    int peek() { return isEmpty() ? -1 : arr[front]; }
    bool isEmpty() { return count == 0; }
    int size() { return count; }
};

int main() {
    Queue q(5);

    // Enqueue elements
    q.enqueue(10);  q.enqueue(20);  q.enqueue(30);

    cout << "Front: " << q.peek() << endl;          // 10 (first in)
    cout << "Size: " << q.size() << endl;            // 3

    cout << "Dequeued: " << q.dequeue() << endl;     // 10 (FIFO!)
    cout << "Dequeued: " << q.dequeue() << endl;     // 20
    cout << "Front now: " << q.peek() << endl;       // 30
    cout << "Size now: " << q.size() << endl;        // 1

    return 0;
}
// Output:
// Front: 10
// Size: 3
// Dequeued: 10
// Dequeued: 20
// Front now: 30
// Size now: 1`,
    codeExplanation: "Circular array queue wraps indices using modulo (%). When rear or front reach the end of the array, they wrap back to 0. enqueue adds at rear, dequeue removes from front. count tracks the number of elements to distinguish 'full' from 'empty' (both would otherwise have front == rear).",
    commonMistakes: [
      "Not using circular indexing — wastes array space after dequeuing",
      "Confusing full and empty conditions — both have front near rear without a count variable",
      "Forgetting to wrap around with modulo — causes out-of-bounds access"
    ],
    practiceQuestions: [
      "Implement a queue using two stacks",
      "Implement a queue using a linked list",
      "What is a priority queue and how would you implement one?"
    ]
  },
  {
    id: "binary-tree",
    title: "Binary Tree",
    explanation: "A binary tree is a hierarchical data structure where each node has at most two children (left and right). The topmost node is the root. Trees are used for hierarchical data, expression parsing, and efficient searching.\n\nTraversals: Inorder (Left-Root-Right), Preorder (Root-Left-Right), Postorder (Left-Right-Root).",
    syntax: `// ===== Binary Tree Structure =====

struct TreeNode {
    int data;
    TreeNode* left;     // Pointer to left child (or nullptr)
    TreeNode* right;    // Pointer to right child (or nullptr)

    TreeNode(int d) : data(d), left(nullptr), right(nullptr) {}
};

// --- Tree visual ---
//        1          ← Root
//       / \\
//      2   3        ← Children of 1
//     / \\
//    4   5          ← Children of 2

// ===== Three Traversal Orders =====
// INORDER:   Left → Root → Right   → 4, 2, 5, 1, 3
//   (Gives SORTED order in BST)
//
// PREORDER:  Root → Left → Right   → 1, 2, 4, 5, 3
//   (Used to COPY a tree)
//
// POSTORDER: Left → Right → Root   → 4, 5, 2, 3, 1
//   (Used to DELETE a tree — children first, then root)`,
    example: `// ===== Binary Tree — Complete Example =====
#include <iostream>
using namespace std;

// --- Node structure ---
struct TreeNode {
    int data;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int d) : data(d), left(nullptr), right(nullptr) {}
};

// --- Inorder: Left → Root → Right ---
void inorder(TreeNode* root) {
    if (!root) return;           // Base case: empty node
    inorder(root->left);         // Visit left subtree first
    cout << root->data << " ";   // Then visit root
    inorder(root->right);        // Then visit right subtree
}

// --- Preorder: Root → Left → Right ---
void preorder(TreeNode* root) {
    if (!root) return;
    cout << root->data << " ";   // Visit root FIRST
    preorder(root->left);        // Then left subtree
    preorder(root->right);       // Then right subtree
}

// --- Postorder: Left → Right → Root ---
void postorder(TreeNode* root) {
    if (!root) return;
    postorder(root->left);       // Visit left first
    postorder(root->right);      // Then right
    cout << root->data << " ";   // Visit root LAST
}

int main() {
    // Build this tree:
    //        1
    //       / \\
    //      2   3
    //     / \\
    //    4   5
    TreeNode* root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->right = new TreeNode(3);
    root->left->left = new TreeNode(4);
    root->left->right = new TreeNode(5);

    cout << "Inorder:   "; inorder(root);   cout << endl;  // 4 2 5 1 3
    cout << "Preorder:  "; preorder(root);  cout << endl;  // 1 2 4 5 3
    cout << "Postorder: "; postorder(root); cout << endl;  // 4 5 2 3 1

    // Clean up (simplified — should use postorder deletion)
    delete root->left->left;
    delete root->left->right;
    delete root->left;
    delete root->right;
    delete root;

    return 0;
}
// Output:
// Inorder:   4 2 5 1 3
// Preorder:  1 2 4 5 3
// Postorder: 4 5 2 3 1`,
    codeExplanation: "A tree is built by creating nodes and linking them via left/right pointers. Each traversal uses recursion — the base case is a null node. Inorder visits left-root-right (gives sorted order in BST). Preorder visits root first (used to copy trees). Postorder visits root last (used to delete trees safely).",
    commonMistakes: [
      "Not handling null nodes in traversals — always check if root is nullptr",
      "Memory leaks from not deleting tree nodes — use postorder deletion (children before parent)",
      "Confusing tree traversal orders — remember: In=LRoR, Pre=RoLR, Post=LRRo"
    ],
    practiceQuestions: [
      "Implement postorder traversal",
      "Calculate the height of a binary tree recursively",
      "Count the number of nodes (and leaf nodes) in a tree"
    ]
  },
  {
    id: "bst",
    title: "Binary Search Tree (BST)",
    explanation: "A BST is a binary tree where left children are smaller and right children are larger than the parent. This property enables O(log n) average-case search, insertion, and deletion.\n\nInorder traversal of a BST gives elements in sorted order. Worst case (unbalanced) degrades to O(n) — balanced BSTs (AVL, Red-Black) solve this.",
    syntax: `// ===== Binary Search Tree (BST) =====

// BST Property: For every node:
//   ALL values in LEFT subtree  < node value
//   ALL values in RIGHT subtree > node value

//        5           ← root
//       / \\
//      3   7         ← 3 < 5, 7 > 5 ✅
//     / \\ / \\
//    1  4 6  8       ← all follow BST property ✅

struct Node {
    int data;
    Node *left, *right;
    Node(int d) : data(d), left(nullptr), right(nullptr) {}
};

// Key operations (average O(log n), worst O(n)):
Node* insert(Node* root, int val);   // Add a value
bool search(Node* root, int val);    // Find a value
Node* remove(Node* root, int val);   // Delete a value

// Inorder traversal → gives SORTED output
// (because left < root < right, recursively)`,
    example: `// ===== BST — Complete Example =====
#include <iostream>
using namespace std;

struct Node {
    int data;
    Node *left, *right;
    Node(int d) : data(d), left(nullptr), right(nullptr) {}
};

// --- Insert: recursively find the right position ---
Node* insert(Node* root, int val) {
    if (!root) return new Node(val);     // Empty spot found — create node

    if (val < root->data) {
        root->left = insert(root->left, val);   // Go LEFT if smaller
    } else if (val > root->data) {
        root->right = insert(root->right, val); // Go RIGHT if larger
    }
    // If equal, do nothing (BSTs typically don't allow duplicates)

    return root;
}

// --- Search: recursively follow BST property ---
bool search(Node* root, int val) {
    if (!root) return false;              // Not found
    if (val == root->data) return true;   // Found!
    if (val < root->data) return search(root->left, val);   // Go left
    return search(root->right, val);                         // Go right
}

// --- Inorder: gives SORTED output ---
void inorder(Node* root) {
    if (!root) return;
    inorder(root->left);                 // Left subtree first
    cout << root->data << " ";           // Current node
    inorder(root->right);                // Right subtree last
}

int main() {
    Node* root = nullptr;

    // Insert values: 5, 3, 7, 1, 4, 6, 8
    for (int v : {5, 3, 7, 1, 4, 6, 8}) {
        root = insert(root, v);
    }

    // Tree structure:
    //        5
    //       / \\
    //      3   7
    //     / \\ / \\
    //    1  4 6  8

    cout << "Inorder (sorted): ";
    inorder(root);  // 1 2 3 4 5 6 7 8
    cout << endl;

    cout << "Search 4: " << (search(root, 4) ? "Found ✅" : "Not found ❌") << endl;
    cout << "Search 9: " << (search(root, 9) ? "Found ✅" : "Not found ❌") << endl;

    return 0;
}
// Output:
// Inorder (sorted): 1 3 4 5 6 7 8
// Search 4: Found ✅
// Search 9: Not found ❌`,
    codeExplanation: "insert() recursively follows the BST property: go left if smaller, right if larger, until an empty spot is found. search() follows the same logic. Inorder traversal outputs elements in sorted order (1, 3, 4, 5, 6, 7, 8) because it visits left-root-right, and left is always smaller.",
    commonMistakes: [
      "Not handling duplicate values — decide your policy: ignore, go left, or go right",
      "Inserting already-sorted data creates an unbalanced tree (linked list) — worst case O(n)",
      "Deletion with two children is tricky — find the inorder successor (smallest in right subtree)"
    ],
    practiceQuestions: [
      "Implement delete operation for BST (handle all 3 cases)",
      "Find the minimum and maximum values in a BST",
      "What is the time complexity for a balanced vs unbalanced BST?"
    ]
  },
  {
    id: "graph-basics",
    title: "Graph Basics",
    explanation: "A graph consists of vertices (nodes) and edges connecting them. Graphs can be directed or undirected, weighted or unweighted. Common representations: adjacency matrix (2D array) and adjacency list (vector of vectors).\n\nKey algorithms: BFS (shortest path in unweighted), DFS (cycle detection, topological sort), Dijkstra (weighted shortest path).",
    syntax: `// ===== Graph Representations =====

// --- 1. Adjacency List (preferred for SPARSE graphs) ---
// Each vertex has a list of its neighbors
vector<vector<int>> adj(V);     // V = number of vertices
adj[u].push_back(v);            // Add edge from u to v
// For undirected: also add adj[v].push_back(u);

// --- 2. Adjacency Matrix (for DENSE graphs) ---
// 2D array: matrix[u][v] = 1 means edge from u to v
int matrix[V][V] = {0};         // Initialize all to 0 (no edges)
matrix[u][v] = 1;               // Add edge from u to v

// ===== Key Graph Algorithms =====
// BFS (Breadth-First Search):
//   Uses: QUEUE, finds shortest path in unweighted graphs
//   Visits: level by level (all neighbors, then their neighbors)
//
// DFS (Depth-First Search):
//   Uses: STACK or recursion, detects cycles
//   Visits: goes deep first, then backtracks
//
// Dijkstra's:
//   Uses: priority queue, finds shortest path in WEIGHTED graphs`,
    example: `// ===== Graph with BFS — Complete Example =====
#include <iostream>
#include <vector>
#include <queue>
using namespace std;

class Graph {
    int V;                         // Number of vertices
    vector<vector<int>> adj;       // Adjacency list

public:
    Graph(int v) : V(v), adj(v) {}

    // Add an undirected edge between u and v
    void addEdge(int u, int v) {
        adj[u].push_back(v);       // u → v
        adj[v].push_back(u);       // v → u (undirected)
    }

    // BFS: Visit nodes level by level
    void BFS(int start) {
        vector<bool> visited(V, false);  // Track visited nodes
        queue<int> q;                     // BFS uses a queue

        visited[start] = true;            // Mark start as visited
        q.push(start);                    // Add start to queue

        cout << "BFS order: ";
        while (!q.empty()) {
            int node = q.front();         // Get front of queue
            q.pop();                      // Remove from queue
            cout << node << " ";          // Process node

            // Visit all unvisited neighbors
            for (int neighbor : adj[node]) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;  // Mark visited
                    q.push(neighbor);          // Add to queue
                }
            }
        }
        cout << endl;
    }

    // DFS: Go deep, then backtrack (recursive)
    void DFS(int node, vector<bool>& visited) {
        visited[node] = true;             // Mark visited
        cout << node << " ";              // Process node

        for (int neighbor : adj[node]) {
            if (!visited[neighbor]) {
                DFS(neighbor, visited);   // Recurse into unvisited
            }
        }
    }
};

int main() {
    // Create graph:
    //   0 --- 1
    //   |     |
    //   2     3
    //   |
    //   4
    Graph g(5);
    g.addEdge(0, 1);
    g.addEdge(0, 2);
    g.addEdge(1, 3);
    g.addEdge(2, 4);

    // BFS from vertex 0
    g.BFS(0);  // 0 1 2 3 4 (level by level)

    // DFS from vertex 0
    vector<bool> visited(5, false);
    cout << "DFS order: ";
    g.DFS(0, visited);  // 0 1 3 2 4 (goes deep first)
    cout << endl;

    return 0;
}
// Output:
// BFS order: 0 1 2 3 4
// DFS order: 0 1 3 2 4`,
    codeExplanation: "Adjacency list representation using vector<vector<int>>. addEdge adds both directions for an undirected graph. BFS uses a queue to visit nodes level by level — starting from 0, it visits all neighbors (1, 2), then their neighbors (3, 4). DFS uses recursion to go as deep as possible before backtracking.",
    commonMistakes: [
      "Not marking nodes as visited — causes infinite loops in cyclic graphs",
      "Confusing directed and undirected graph representation — undirected needs edges in BOTH directions",
      "Using adjacency matrix for sparse graphs — wastes O(V²) memory when most entries are 0"
    ],
    practiceQuestions: [
      "Implement DFS using a stack instead of recursion",
      "Detect if a graph has a cycle",
      "Find the shortest path between two nodes using BFS"
    ]
  }
];
