import { Section, Project, InterviewQuestion, MCQ, CodingChallenge, OutputPrediction } from "./types";
import { beginnerTopics, controlFlowTopics } from "./beginnerContent";
import { functionTopics, arrayTopics, pointerTopics } from "./coreContent";
import { oopTopics } from "./oopContent";
import { fileHandlingTopics, stlTopics, advancedTopics, dataStructureTopics } from "./advancedContent";

export const sections: Section[] = [
  {
    id: "beginner",
    title: "Beginner",
    emoji: "🚀",
    description: "Start your C++ journey with fundamentals: variables, data types, I/O, and operators.",
    topics: beginnerTopics,
  },
  {
    id: "control-flow",
    title: "Control Flow",
    emoji: "🔀",
    description: "Master decision-making and loops: if/else, switch, for, while, and loop control.",
    topics: controlFlowTopics,
  },
  {
    id: "functions",
    title: "Functions",
    emoji: "⚡",
    description: "Write reusable code with functions, parameters, overloading, and recursion.",
    topics: functionTopics,
  },
  {
    id: "arrays-strings",
    title: "Arrays & Strings",
    emoji: "📦",
    description: "Work with collections: arrays, multidimensional arrays, C-strings, and std::string.",
    topics: arrayTopics,
  },
  {
    id: "pointers",
    title: "Pointers",
    emoji: "🎯",
    description: "Understand memory: pointer basics, arithmetic, arrays, and dynamic allocation.",
    topics: pointerTopics,
  },
  {
    id: "oop",
    title: "Object-Oriented Programming",
    emoji: "🏗️",
    description: "Master OOP: classes, inheritance, polymorphism, encapsulation, and abstraction.",
    topics: oopTopics,
  },
  {
    id: "file-handling",
    title: "File Handling",
    emoji: "📁",
    description: "Read, write, append, and manage files including binary file operations.",
    topics: fileHandlingTopics,
  },
  {
    id: "stl",
    title: "Standard Template Library",
    emoji: "🧰",
    description: "Use STL containers, iterators, and algorithms for efficient data handling.",
    topics: stlTopics,
  },
  {
    id: "advanced",
    title: "Advanced C++",
    emoji: "🔬",
    description: "Templates, exceptions, lambdas, smart pointers, and move semantics.",
    topics: advancedTopics,
  },
  {
    id: "data-structures",
    title: "Data Structures",
    emoji: "🌳",
    description: "Implement linked lists, stacks, queues, trees, BSTs, and graphs from scratch.",
    topics: dataStructureTopics,
  },
];

export const projects: Project[] = [
  {
    id: "calculator",
    title: "Calculator",
    description: "Build a command-line calculator supporting basic arithmetic, memory, and continuous operations.",
    difficulty: "Beginner",
    concepts: ["Functions", "Switch Statement", "Loops", "Input Validation"],
    steps: [
      "Create a menu displaying available operations",
      "Get two numbers and an operator from the user",
      "Implement add, subtract, multiply, divide functions",
      "Handle division by zero",
      "Add a loop for continuous calculations",
      "Add memory store/recall feature",
    ],
    code: `#include <iostream>
using namespace std;

double add(double a, double b) { return a + b; }
double subtract(double a, double b) { return a - b; }
double multiply(double a, double b) { return a * b; }
double divide(double a, double b) {
    if (b == 0) { cout << "Error: Division by zero!" << endl; return 0; }
    return a / b;
}

int main() {
    double num1, num2, memory = 0;
    char op;
    
    do {
        cout << "\\n=== Calculator ===" << endl;
        cout << "Enter: number operator number" << endl;
        cout << "Operators: + - * / (q to quit)" << endl;
        cout << "Memory: " << memory << endl;
        cout << "> ";
        
        cin >> num1;
        cin >> op;
        if (op == 'q') break;
        cin >> num2;
        
        double result;
        switch (op) {
            case '+': result = add(num1, num2); break;
            case '-': result = subtract(num1, num2); break;
            case '*': result = multiply(num1, num2); break;
            case '/': result = divide(num1, num2); break;
            default: cout << "Invalid operator!"; continue;
        }
        
        cout << num1 << " " << op << " " << num2 << " = " << result << endl;
        memory = result;
    } while (true);
    
    return 0;
}`,
  },
  {
    id: "student-management",
    title: "Student Management System",
    description: "A CRUD system to manage student records with file persistence.",
    difficulty: "Intermediate",
    concepts: ["Classes", "File Handling", "Arrays/Vectors", "Input Validation"],
    steps: [
      "Create a Student class with name, ID, and grades",
      "Implement add, view, search, update, and delete operations",
      "Save/load records to/from a file",
      "Calculate GPA and class rankings",
      "Add a menu-driven interface",
    ],
    code: `#include <iostream>
#include <vector>
#include <fstream>
#include <algorithm>
using namespace std;

class Student {
public:
    int id;
    string name;
    double gpa;
    
    Student(int i = 0, string n = "", double g = 0)
        : id(i), name(n), gpa(g) {}
    
    void display() const {
        cout << "ID: " << id << " | Name: " << name
             << " | GPA: " << gpa << endl;
    }
};

class StudentManager {
    vector<Student> students;
    int nextId = 1;
public:
    void addStudent() {
        string name; double gpa;
        cout << "Name: "; cin.ignore(); getline(cin, name);
        cout << "GPA: "; cin >> gpa;
        students.push_back(Student(nextId++, name, gpa));
        cout << "Student added!" << endl;
    }
    
    void viewAll() const {
        if (students.empty()) { cout << "No students." << endl; return; }
        for (const auto& s : students) s.display();
    }
    
    void searchByName() const {
        string name;
        cout << "Search name: "; cin.ignore(); getline(cin, name);
        for (const auto& s : students) {
            if (s.name.find(name) != string::npos) s.display();
        }
    }
    
    void deleteStudent() {
        int id; cout << "Enter ID to delete: "; cin >> id;
        auto it = remove_if(students.begin(), students.end(),
                           [id](const Student& s) { return s.id == id; });
        if (it != students.end()) {
            students.erase(it, students.end());
            cout << "Deleted!" << endl;
        } else cout << "Not found." << endl;
    }
};

int main() {
    StudentManager mgr;
    int choice;
    do {
        cout << "\\n1.Add 2.View 3.Search 4.Delete 0.Exit\\nChoice: ";
        cin >> choice;
        switch (choice) {
            case 1: mgr.addStudent(); break;
            case 2: mgr.viewAll(); break;
            case 3: mgr.searchByName(); break;
            case 4: mgr.deleteStudent(); break;
        }
    } while (choice != 0);
    return 0;
}`,
  },
  {
    id: "library-system",
    title: "Library Management System",
    description: "Manage books with borrow/return functionality, member tracking, and search.",
    difficulty: "Intermediate",
    concepts: ["OOP", "Inheritance", "File Handling", "STL Containers"],
    steps: [
      "Create Book and Member classes",
      "Implement book catalog with add, remove, search",
      "Add borrow and return functionality with due dates",
      "Track member borrowing history",
      "Save data to files for persistence",
    ],
    code: `#include <iostream>
#include <vector>
#include <map>
using namespace std;

class Book {
public:
    int id;
    string title, author;
    bool available;
    
    Book(int i, string t, string a)
        : id(i), title(t), author(a), available(true) {}
    
    void display() const {
        cout << "[" << id << "] " << title << " by " << author
             << (available ? " (Available)" : " (Borrowed)") << endl;
    }
};

class Library {
    vector<Book> books;
    map<int, vector<int>> memberBooks; // memberId -> bookIds
    int nextBookId = 1;
    
public:
    void addBook(string title, string author) {
        books.push_back(Book(nextBookId++, title, author));
        cout << "Book added!" << endl;
    }
    
    void listBooks() const {
        for (const auto& b : books) b.display();
    }
    
    void borrowBook(int bookId, int memberId) {
        for (auto& b : books) {
            if (b.id == bookId && b.available) {
                b.available = false;
                memberBooks[memberId].push_back(bookId);
                cout << "Book borrowed successfully!" << endl;
                return;
            }
        }
        cout << "Book not available." << endl;
    }
    
    void returnBook(int bookId, int memberId) {
        for (auto& b : books) {
            if (b.id == bookId && !b.available) {
                b.available = true;
                auto& mb = memberBooks[memberId];
                mb.erase(remove(mb.begin(), mb.end(), bookId), mb.end());
                cout << "Book returned!" << endl;
                return;
            }
        }
        cout << "Invalid return." << endl;
    }
};

int main() {
    Library lib;
    lib.addBook("The C++ Programming Language", "Bjarne Stroustrup");
    lib.addBook("Clean Code", "Robert C. Martin");
    lib.addBook("Design Patterns", "Gang of Four");
    
    lib.listBooks();
    lib.borrowBook(1, 101);
    lib.listBooks();
    lib.returnBook(1, 101);
    
    return 0;
}`,
  },
  {
    id: "banking-system",
    title: "Banking System",
    description: "A console banking app with accounts, transactions, and balance management.",
    difficulty: "Advanced",
    concepts: ["OOP", "Inheritance", "Exception Handling", "File I/O", "Encapsulation"],
    steps: [
      "Create Account base class with derived SavingsAccount and CheckingAccount",
      "Implement deposit, withdraw, and transfer operations",
      "Add transaction history tracking",
      "Implement interest calculation for savings",
      "Add exception handling for insufficient funds",
      "Save account data to binary files",
    ],
    code: `#include <iostream>
#include <vector>
#include <stdexcept>
#include <iomanip>
using namespace std;

class Account {
protected:
    int id;
    string owner;
    double balance;
    vector<string> history;
    
    void log(string msg) {
        history.push_back(msg);
    }
public:
    Account(int i, string o, double b)
        : id(i), owner(o), balance(b) {
        log("Account created with $" + to_string(b));
    }
    
    virtual void deposit(double amount) {
        if (amount <= 0) throw invalid_argument("Invalid amount");
        balance += amount;
        log("Deposited $" + to_string(amount));
    }
    
    virtual void withdraw(double amount) {
        if (amount <= 0) throw invalid_argument("Invalid amount");
        if (amount > balance) throw runtime_error("Insufficient funds");
        balance -= amount;
        log("Withdrew $" + to_string(amount));
    }
    
    void display() const {
        cout << "Account #" << id << " | " << owner
             << " | Balance: $" << fixed << setprecision(2)
             << balance << endl;
    }
    
    void showHistory() const {
        for (const auto& h : history) cout << "  - " << h << endl;
    }
    
    double getBalance() const { return balance; }
    virtual ~Account() {}
};

class SavingsAccount : public Account {
    double interestRate;
public:
    SavingsAccount(int i, string o, double b, double rate = 0.05)
        : Account(i, o, b), interestRate(rate) {}
    
    void applyInterest() {
        double interest = balance * interestRate;
        balance += interest;
        log("Interest applied: $" + to_string(interest));
    }
};

int main() {
    try {
        SavingsAccount acc(1001, "Alice", 5000, 0.05);
        acc.display();
        
        acc.deposit(1500);
        acc.withdraw(500);
        acc.applyInterest();
        
        acc.display();
        cout << "\\nTransaction History:" << endl;
        acc.showHistory();
        
        // This will throw
        acc.withdraw(100000);
    } catch (const exception& e) {
        cerr << "Error: " << e.what() << endl;
    }
    return 0;
}`,
  },
];

export const interviewQuestions: InterviewQuestion[] = [
  { question: "What is the difference between C and C++?", answer: "C++ supports OOP (classes, inheritance, polymorphism), function/operator overloading, references, templates, STL, exception handling, and namespaces. C is procedural only." },
  { question: "What are the four pillars of OOP?", answer: "Encapsulation (data hiding), Abstraction (interface simplification), Inheritance (code reuse via parent-child), and Polymorphism (one interface, multiple forms)." },
  { question: "What is the difference between a pointer and a reference?", answer: "References must be initialized and can't be null or reassigned. Pointers can be null, reassigned, and support arithmetic. References are syntactic sugar for const pointers." },
  { question: "What is a virtual function?", answer: "A function declared with 'virtual' in a base class that can be overridden in derived classes. It enables runtime polymorphism — the correct function is called based on the actual object type, not the pointer type." },
  { question: "What is the Rule of Three/Five?", answer: "Rule of Three: if you define a destructor, copy constructor, or copy assignment, define all three. Rule of Five (C++11): add move constructor and move assignment. These manage resource ownership correctly." },
  { question: "What are smart pointers?", answer: "Smart pointers (unique_ptr, shared_ptr, weak_ptr) automatically manage heap memory. unique_ptr has sole ownership, shared_ptr uses reference counting, weak_ptr breaks circular references." },
  { question: "What is the difference between stack and heap memory?", answer: "Stack: automatic, fast, limited size, LIFO. Heap: manual (new/delete), slower, large, fragmentation possible. Local variables are on stack; dynamic allocations on heap." },
  { question: "What is function overloading vs overriding?", answer: "Overloading: same name, different parameters, compile-time. Overriding: same signature in derived class, runtime polymorphism with virtual functions." },
  { question: "What is a template?", answer: "Templates allow writing generic code that works with any type. Function templates create type-independent functions; class templates create type-independent classes. The compiler generates specific versions." },
  { question: "What is the STL?", answer: "Standard Template Library provides containers (vector, map, set), iterators, algorithms (sort, find), and utility classes. It's built with templates for type-generic, efficient data handling." },
  { question: "What is a dangling pointer?", answer: "A pointer that references memory that has been freed/deallocated. Accessing it is undefined behavior. Prevent by setting pointers to nullptr after delete." },
  { question: "Explain RAII.", answer: "Resource Acquisition Is Initialization: resources (memory, files, locks) are acquired in constructors and released in destructors. Smart pointers and container classes follow RAII." },
];

export const mcqs: MCQ[] = [
  {
    question: "What is the size of an int on most 64-bit systems?",
    options: ["2 bytes", "4 bytes", "8 bytes", "Depends on compiler"],
    correct: 1,
    explanation: "On most modern systems, int is 4 bytes (32 bits), regardless of 32-bit or 64-bit architecture."
  },
  {
    question: "Which of these is NOT a valid access specifier in C++?",
    options: ["public", "private", "protected", "internal"],
    correct: 3,
    explanation: "C++ has three access specifiers: public, private, and protected. 'internal' is from C#."
  },
  {
    question: "What does the 'virtual' keyword enable?",
    options: ["Compile-time polymorphism", "Runtime polymorphism", "Static binding", "Template instantiation"],
    correct: 1,
    explanation: "Virtual functions enable runtime polymorphism through dynamic dispatch using the vtable mechanism."
  },
  {
    question: "What is the output of: cout << 7/2;",
    options: ["3.5", "3", "4", "Error"],
    correct: 1,
    explanation: "Both operands are integers, so integer division is performed. 7/2 = 3 (decimal part truncated)."
  },
  {
    question: "Which container provides O(1) random access?",
    options: ["list", "set", "vector", "map"],
    correct: 2,
    explanation: "Vector stores elements contiguously in memory, providing O(1) random access via index."
  },
  {
    question: "What does 'new' return?",
    options: ["A reference", "A value", "A pointer", "An iterator"],
    correct: 2,
    explanation: "The 'new' operator allocates memory on the heap and returns a pointer to the allocated memory."
  },
  {
    question: "Which is the correct way to declare a pure virtual function?",
    options: ["virtual void f() {}", "virtual void f();", "virtual void f() = 0;", "pure virtual void f();"],
    correct: 2,
    explanation: "Pure virtual functions are declared with = 0, making the class abstract."
  },
  {
    question: "What is a memory leak?",
    options: ["Accessing freed memory", "Allocating memory that is never freed", "Stack overflow", "Buffer overflow"],
    correct: 1,
    explanation: "A memory leak occurs when dynamically allocated memory is never freed with delete, causing the program to consume increasing memory."
  },
];

export const outputPredictions: OutputPrediction[] = [
  {
    code: `int x = 5;
cout << x++ << " " << ++x;`,
    output: "Undefined behavior (compiler-dependent), but often: 5 7",
    explanation: "x++ returns 5 then increments, ++x increments first. However, modifying x twice without a sequence point is undefined behavior."
  },
  {
    code: `int arr[] = {1, 2, 3, 4, 5};
cout << *(arr + 3);`,
    output: "4",
    explanation: "arr + 3 moves 3 elements forward from the start. *(arr + 3) dereferences to get arr[3] which is 4."
  },
  {
    code: `for (int i = 0; i < 5; i++) {
    if (i == 3) continue;
    cout << i << " ";
}`,
    output: "0 1 2 4",
    explanation: "The loop prints 0-4 but skips 3 because continue jumps to the next iteration when i equals 3."
  },
  {
    code: `class A { public: A() { cout << "A"; } };
class B : public A { public: B() { cout << "B"; } };
int main() { B obj; }`,
    output: "AB",
    explanation: "Base class constructor runs first (A), then derived class constructor (B). Construction order is always base to derived."
  },
  {
    code: `string s = "Hello";
cout << s.substr(1, 3);`,
    output: "ell",
    explanation: "substr(1, 3) extracts 3 characters starting from index 1: 'e', 'l', 'l'."
  },
];

export const codingChallenges: CodingChallenge[] = [
  {
    title: "Reverse a String",
    description: "Write a function that reverses a string without using the built-in reverse function.",
    hint: "Use two pointers: one at the start and one at the end. Swap characters and move inward.",
    solution: `string reverseString(string s) {
    int left = 0, right = s.length() - 1;
    while (left < right) {
        swap(s[left], s[right]);
        left++;
        right--;
    }
    return s;
}`
  },
  {
    title: "Check Palindrome",
    description: "Write a function to check if a given string is a palindrome (ignoring case and non-alphanumeric characters).",
    hint: "Use two pointers from both ends, skip non-alphanumeric chars, compare lowercase versions.",
    solution: `bool isPalindrome(string s) {
    int l = 0, r = s.size() - 1;
    while (l < r) {
        while (l < r && !isalnum(s[l])) l++;
        while (l < r && !isalnum(s[r])) r--;
        if (tolower(s[l]) != tolower(s[r])) return false;
        l++; r--;
    }
    return true;
}`
  },
  {
    title: "Find Two Sum",
    description: "Given an array and a target sum, find two numbers that add up to the target. Return their indices.",
    hint: "Use a hash map to store each number's index. For each number, check if (target - number) exists in the map.",
    solution: `#include <unordered_map>
pair<int,int> twoSum(vector<int>& nums, int target) {
    unordered_map<int,int> seen;
    for (int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];
        if (seen.count(complement))
            return {seen[complement], i};
        seen[nums[i]] = i;
    }
    return {-1, -1};
}`
  },
  {
    title: "Fibonacci Sequence",
    description: "Write an efficient function to compute the nth Fibonacci number.",
    hint: "Use iterative approach with two variables instead of recursion to achieve O(n) time.",
    solution: `long long fibonacci(int n) {
    if (n <= 1) return n;
    long long prev2 = 0, prev1 = 1;
    for (int i = 2; i <= n; i++) {
        long long curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}`
  },
  {
    title: "Detect Linked List Cycle",
    description: "Determine if a linked list has a cycle using Floyd's algorithm.",
    hint: "Use two pointers: slow moves 1 step, fast moves 2 steps. If they meet, there's a cycle.",
    solution: `bool hasCycle(Node* head) {
    Node* slow = head;
    Node* fast = head;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) return true;
    }
    return false;
}`
  },
];

// Helper function to get all topics as a flat array
export const getAllTopics = () => {
  return sections.flatMap(s => s.topics);
};

// Helper to find a topic by ID
export const findTopic = (topicId: string) => {
  return getAllTopics().find(t => t.id === topicId);
};

// Helper to get next and previous topics
export const getAdjacentTopics = (topicId: string) => {
  const allTopics = getAllTopics();
  const index = allTopics.findIndex(t => t.id === topicId);
  return {
    prev: index > 0 ? allTopics[index - 1] : null,
    next: index < allTopics.length - 1 ? allTopics[index + 1] : null,
  };
};
