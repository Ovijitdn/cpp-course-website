import { Topic } from "./types";

export const beginnerTopics: Topic[] = [
  {
    id: "intro-to-cpp",
    title: "Introduction to C++",
    explanation: "C++ is a powerful, high-performance programming language created by Bjarne Stroustrup in 1979 as an extension of the C programming language. It supports three major programming paradigms: procedural, object-oriented, and generic programming, making it one of the most versatile languages in the world.\n\nC++ is widely used in game development (Unreal Engine), operating systems (Windows, Linux), embedded systems (Arduino), web browsers (Chrome, Firefox), and competitive programming. Its combination of high-level features and low-level memory control makes it ideal for performance-critical applications.",
    syntax: `// ===== Structure of Every C++ Program =====

// Step 1: Include headers (libraries) for functionality
#include <iostream>    // Provides cout, cin for input/output

// Step 2: Use the standard namespace to avoid typing std:: everywhere
using namespace std;

// Step 3: The main() function — every program starts here
int main() {
    // Step 4: Write your code (statements) inside main
    cout << "Hello!";  // Print text to the screen

    // Step 5: Return 0 means "program ran successfully"
    return 0;
}`,
    example: `// ===== Your First Complete C++ Program =====
#include <iostream>    // Required for cout (console output)
using namespace std;   // So we can write cout instead of std::cout

int main() {
    // Print a welcome message to the console
    cout << "Welcome to C++!" << endl;      // endl = end line (new line)
    
    // You can print multiple things using <<
    cout << "C++ is powerful and fast." << endl;
    
    // Print numbers directly
    cout << "C++ was created in: " << 1979 << endl;
    
    // Print multiple items on one line
    cout << "Version: " << "C++" << 23 << endl;
    
    return 0;  // Tell the operating system: "Everything went fine!"
}
// Output:
// Welcome to C++!
// C++ is powerful and fast.
// C++ was created in: 1979
// Version: C++23`,
    codeExplanation: "We include the iostream library for input/output operations. 'using namespace std' lets us write cout instead of std::cout. The main() function is where every C++ program begins execution. cout with << sends text to the console, and endl creates a new line. Return 0 tells the OS the program ran successfully.",
    commonMistakes: [
      "Forgetting #include <iostream> when using cout/cin — you'll get a 'cout not declared' error",
      "Missing semicolons at the end of statements — every statement must end with ;",
      "Writing Main() or MAIN() instead of main() — C++ is case-sensitive!",
      "Forgetting the << operator between cout and your text"
    ],
    practiceQuestions: [
      "Write a program that prints your name, age, and favorite hobby on separate lines",
      "What is the difference between C and C++? List at least 3 differences",
      "Write a program that prints a box pattern using cout and special characters like *, |, and -"
    ]
  },
  {
    id: "history",
    title: "History of C++",
    explanation: "C++ was developed by Bjarne Stroustrup at Bell Labs starting in 1979. Originally called 'C with Classes', it was renamed to C++ in 1983 (the ++ symbolizing increment/improvement over C). It has evolved significantly through standardized versions.\n\nMajor standards include C++98 (first standard), C++11 (massive update with auto, lambdas, smart pointers), C++14 (refinements), C++17 (structured bindings, optional), C++20 (concepts, ranges, coroutines), and C++23 (print, flat_map). Each version brings powerful new features while maintaining backward compatibility.",
    syntax: `// ===== C++ Version Timeline =====
// Each version added major features:

// C++98  — First ISO standard
//          Features: classes, templates, STL, exceptions

// C++11  — The "Modern C++" revolution
//          Features: auto, lambda, smart pointers, range-for, nullptr

// C++14  — Small improvements to C++11
//          Features: generic lambdas, auto return type deduction

// C++17  — Practical improvements
//          Features: structured bindings, if-init, std::optional

// C++20  — Major update
//          Features: concepts, ranges, coroutines, modules, <=>

// C++23  — Latest standard
//          Features: std::print(), flat_map, expected

// ===== How to compile with a specific standard =====
// g++ -std=c++11 program.cpp -o program
// g++ -std=c++17 program.cpp -o program
// g++ -std=c++20 program.cpp -o program`,
    example: `// ===== Demonstrating C++11 Modern Features =====
#include <iostream>
#include <vector>       // Dynamic array container
using namespace std;

int main() {
    // Feature 1: 'auto' keyword — compiler figures out the type
    auto message = "Hello from Modern C++!";  // auto = const char*
    auto number = 42;                          // auto = int
    auto pi = 3.14159;                         // auto = double
    cout << message << endl;

    // Feature 2: Initializer list — create collections easily
    vector<int> nums = {10, 20, 30, 40, 50};

    // Feature 3: Range-based for loop — cleaner iteration
    cout << "Numbers: ";
    for (auto n : nums) {       // 'auto n' automatically gets the type (int)
        cout << n << " ";       // Prints each number
    }
    cout << endl;

    // Feature 4: Lambda function — anonymous inline function
    auto greet = [](string name) {
        cout << "Hello, " << name << "!" << endl;
    };
    greet("Beginner");   // Call the lambda like a regular function

    // Feature 5: nullptr — safer than NULL
    int* ptr = nullptr;  // Pointer that points to nothing (safe)
    if (ptr == nullptr) {
        cout << "Pointer is null (not pointing to anything)" << endl;
    }

    return 0;
}
// Output:
// Hello from Modern C++!
// Numbers: 10 20 30 40 50
// Hello, Beginner!
// Pointer is null (not pointing to anything)`,
    codeExplanation: "This demonstrates five C++11 features: 'auto' for automatic type deduction (the compiler figures out the type), initializer lists for easy collection creation, range-based for loops for clean iteration, lambda functions for inline anonymous functions, and nullptr as a type-safe null pointer replacement.",
    commonMistakes: [
      "Using C++11+ features without enabling the standard with -std=c++11 flag",
      "Assuming all compilers support the latest C++ standard — check your compiler version",
      "Not knowing which C++ version your project targets — older codebases may use C++98"
    ],
    practiceQuestions: [
      "Name three major features introduced in C++11 and explain what each does",
      "Who created C++ and when? What was it originally called?",
      "What does the '++' in C++ signify? (Hint: think about the increment operator)"
    ]
  },
  {
    id: "features",
    title: "Features of C++",
    explanation: "C++ offers a rich set of features that make it one of the most powerful programming languages. Key features include: Object-Oriented Programming (classes, inheritance, polymorphism), low-level memory manipulation (pointers), high performance (compiled language), platform independence at source code level, and a rich Standard Template Library (STL).\n\nIt also supports generic programming with templates, exception handling for error management, operator overloading for intuitive syntax, and multiple inheritance — making it suitable for both system-level programming (operating systems, drivers) and application-level programming (games, desktop apps).",
    syntax: `// ===== 7 Key Features of C++ with Code Examples =====

// 1. Object-Oriented Programming (Classes & Objects)
class Shape {
public:
    virtual double area() = 0;  // Pure virtual = Abstraction
};
class Circle : public Shape {   // Inheritance
    double r;
public:
    Circle(double r) : r(r) {}
    double area() override {     // Polymorphism (override base)
        return 3.14159 * r * r;
    }
};

// 2. Function Overloading (same name, different parameters)
int add(int a, int b) { return a + b; }          // For integers
double add(double a, double b) { return a + b; }  // For decimals

// 3. Operator Overloading (custom behavior for operators)
class Vector2D {
public:
    int x, y;
    // Make + work for our custom class
    Vector2D operator+(const Vector2D& v) {
        return {x + v.x, y + v.y};
    }
};

// 4. Templates (Generic Programming — works with ANY type)
template <typename T>     // T is a placeholder for any type
T maximum(T a, T b) {
    return (a > b) ? a : b;  // Works for int, double, string, etc.
}

// 5. Exception Handling (graceful error management)
try {
    throw runtime_error("Something went wrong!");  // Throw error
} catch (const exception& e) {
    cout << e.what();  // Catch and handle it
}

// 6. STL (Standard Template Library — pre-built data structures)
#include <vector>
#include <algorithm>
vector<int> v = {3, 1, 2};
sort(v.begin(), v.end());  // Sorts to {1, 2, 3}

// 7. Dynamic Memory Management (control over memory)
int* p = new int(42);  // Allocate memory on heap
delete p;              // Free that memory when done`,
    example: `// ===== Demonstrating Multiple C++ Features =====
#include <iostream>
#include <vector>       // STL container
#include <algorithm>    // STL algorithms (sort, find, etc.)
using namespace std;

// Feature 1: Class with static methods (OOP)
class Calculator {
public:
    // Feature 2: Function Overloading — same name, different types
    static int add(int a, int b) {
        return a + b;        // Works with integers
    }
    static double add(double a, double b) {
        return a + b;        // Works with decimals
    }
};

// Feature 3: Template function — works with ANY type
template <typename T>
T findMax(T a, T b) {
    return (a > b) ? a : b;
}

int main() {
    // Using overloaded functions
    cout << "int add: " << Calculator::add(3, 4) << endl;       // 7
    cout << "double add: " << Calculator::add(3.5, 4.2) << endl; // 7.7

    // Using template function with different types
    cout << "Max int: " << findMax(10, 20) << endl;        // 20
    cout << "Max double: " << findMax(3.14, 2.71) << endl;  // 3.14
    cout << "Max string: " << findMax(string("apple"), string("banana")) << endl; // banana

    // Feature 4: STL — vector + sort algorithm
    vector<int> v = {5, 2, 8, 1, 9};
    sort(v.begin(), v.end());  // Sort in ascending order

    cout << "Sorted: ";
    for (int x : v) cout << x << " ";  // 1 2 5 8 9
    cout << endl;

    // Feature 5: Dynamic memory
    int* ptr = new int(100);       // Allocate on heap
    cout << "Heap value: " << *ptr << endl;  // 100
    delete ptr;                     // Free memory

    return 0;
}
// Output:
// int add: 7
// double add: 7.7
// Max int: 20
// Max double: 3.14
// Max string: banana
// Sorted: 1 2 5 8 9
// Heap value: 100`,
    codeExplanation: "This program demonstrates five key C++ features: OOP with a Calculator class using static methods, function overloading with add() handling both int and double, a template function findMax() that works with any comparable type, STL usage with vector and sort algorithm, and dynamic memory allocation with new/delete.",
    commonMistakes: [
      "Confusing C++ with C — C++ has classes, templates, and STL that C lacks",
      "Thinking C++ is only for low-level programming — it's used for apps, games, GUIs, and more",
      "Ignoring the STL and writing everything from scratch — STL is optimized and tested"
    ],
    practiceQuestions: [
      "List five key features of C++ and give a one-line example of each",
      "How does C++ achieve platform independence at the source code level?",
      "What is the STL and why is it important? Name 3 STL containers."
    ]
  },
  {
    id: "setup",
    title: "Setup & Installation",
    explanation: "To start coding in C++, you need a compiler (a program that translates your C++ code into machine code that the computer can run). Popular compilers include GCC/g++ on Linux, MinGW on Windows, and Xcode command line tools on macOS. You'll also want a code editor or IDE (Integrated Development Environment) like VS Code, Code::Blocks, or CLion.\n\nYou can also use online compilers like compiler-explorer.com, onlinegdb.com, or replit.com for quick practice without any installation. This is great for beginners who want to start coding immediately!",
    syntax: `# ===== Setting Up C++ on Your Computer =====

# --- Linux (Ubuntu/Debian) ---
sudo apt update                    # Update package list
sudo apt install g++               # Install the g++ compiler
g++ --version                      # Check if installed correctly

# --- macOS ---
xcode-select --install             # Install command line tools
# Or: brew install gcc             # Using Homebrew

# --- Windows ---
# Download MinGW from mingw-w64.org or use MSYS2
# Or install Visual Studio Community (includes MSVC compiler)

# ===== Compiling and Running =====
g++ main.cpp -o myprogram          # Compile: source → executable
./myprogram                        # Run the executable

# ===== Compile with a specific C++ standard =====
g++ -std=c++11 main.cpp -o prog    # Use C++11 features
g++ -std=c++17 main.cpp -o prog    # Use C++17 features
g++ -std=c++20 main.cpp -o prog    # Use C++20 features

# ===== Compile with warnings (recommended!) =====
g++ -Wall -Wextra main.cpp -o prog # Show all warnings`,
    example: `// ===== Your First Program — Save as hello.cpp =====

#include <iostream>    // Include input/output library
using namespace std;   // Use standard namespace

int main() {
    // Print a success message
    cout << "✅ Setup successful!" << endl;
    cout << "Your C++ environment is ready." << endl;
    cout << endl;  // Empty line for spacing

    // Print system info
    cout << "Compiler: g++ (GCC)" << endl;
    cout << "C++ Standard: " << __cplusplus << endl;  // Shows C++ version number
    cout << "File: " << __FILE__ << endl;              // Shows current filename

    return 0;
}

// ===== How to compile and run this: =====
// Step 1: Open terminal/command prompt
// Step 2: Navigate to the file's folder:  cd /path/to/folder
// Step 3: Compile:  g++ -o hello hello.cpp
// Step 4: Run:      ./hello (Linux/Mac) or hello.exe (Windows)`,
    codeExplanation: "After installing a compiler, save your code in a .cpp file, compile it using g++ to create an executable, then run it. The -o flag names the output file. __cplusplus is a built-in macro that shows which C++ standard version your compiler is using.",
    commonMistakes: [
      "Not adding g++ to system PATH on Windows — the terminal won't find the compiler",
      "Forgetting to save the file before compiling — you'll compile the old version",
      "Using .c extension instead of .cpp — the compiler may treat it as C, not C++"
    ],
    practiceQuestions: [
      "Install g++ on your system and compile your first program. What output do you see?",
      "What is the difference between a compiler and an IDE?",
      "Try compiling with -std=c++17 flag. What value does __cplusplus show?"
    ]
  },
  {
    id: "first-program",
    title: "First Program",
    explanation: "The classic first program in any language is 'Hello, World!'. In C++, this involves including the iostream header for input/output, using the std namespace, defining the main() function, and using cout to print to the console.\n\nEvery C++ program must have exactly one main() function — it's where execution begins. The program runs line by line from top to bottom inside main(), and returns 0 to indicate successful completion.",
    syntax: `// ===== Anatomy of a C++ Program =====

#include <iostream>    // Step 1: Include header for I/O functions
using namespace std;   // Step 2: Use standard namespace

int main() {          // Step 3: Define the entry point function
    // Step 4: Use cout to print text to the console
    cout << "text";   // Print without newline
    cout << endl;     // Print a newline character

    // Alternative: use \\n instead of endl
    cout << "line 1\\n";  // \\n = newline (slightly faster than endl)
    cout << "line 2\\n";

    // Chain multiple items with <<
    cout << "Name: " << "Alice" << ", Age: " << 20 << endl;

    return 0;         // Step 5: Return 0 = program succeeded
}`,
    example: `// ===== Hello World — The Classic First Program =====
#include <iostream>    // Required: gives us cout and endl
using namespace std;   // So we don't have to type std:: every time

int main() {
    // --- Basic printing ---
    cout << "Hello, World!" << endl;        // The classic first program!

    // --- Multiple lines ---
    cout << "My name is Student" << endl;   // Each endl starts a new line
    cout << "I am learning C++" << endl;

    // --- Printing numbers ---
    cout << "My age: " << 20 << endl;       // You can print numbers directly
    cout << "PI is approximately: " << 3.14159 << endl;

    // --- Using \\n instead of endl ---
    cout << "Line 1\\n";     // \\n is another way to make a new line
    cout << "Line 2\\n";     // \\n is faster than endl (no buffer flush)

    // --- Chaining multiple values ---
    cout << "Score: " << 95 << "/100 (" << 95.0/100*100 << "%)" << endl;

    // --- Special characters ---
    cout << "Tab:\\tindented" << endl;       // \\t = tab space
    cout << "Quotes: \\"Hello\\"" << endl;      // \\" = print a quote mark
    cout << "Backslash: \\\\" << endl;         // \\\\ = print a backslash

    return 0;  // 0 = success, any other number = error
}
// Output:
// Hello, World!
// My name is Student
// I am learning C++
// My age: 20
// PI is approximately: 3.14159
// Line 1
// Line 2
// Score: 95/100 (95%)
// Tab:	indented
// Quotes: "Hello"
// Backslash: \\`,
    codeExplanation: "The #include directive imports the I/O library. 'using namespace std' lets us write cout instead of std::cout. The main function returns an int (0 means success). The << operator sends data to the output stream. Special escape sequences like \\n (newline), \\t (tab), \\\" (quote) let you print special characters.",
    commonMistakes: [
      "Writing Main() or MAIN() instead of main() — C++ is case-sensitive",
      "Using printf instead of cout (printf works but cout is the C++ way)",
      "Forgetting the << operator between cout and the string",
      "Confusing \\n (newline) with /n (not an escape sequence)"
    ],
    practiceQuestions: [
      "Modify the program to print your personal details on separate lines",
      "What does 'return 0' signify in main()? What about return 1?",
      "Write a program that prints a right triangle pattern using * and cout"
    ]
  },
  {
    id: "program-structure",
    title: "Structure of a C++ Program",
    explanation: "A C++ program has several key parts that work together: preprocessor directives (#include), namespace declarations, the main() function, variable declarations, statements, and optionally user-defined functions and classes.\n\nThe preprocessor runs before compilation, handling #include (file inclusion), #define (macros), and conditional compilation directives. Understanding this structure is crucial for writing organized, maintainable code.",
    syntax: `// ===== Complete Structure of a C++ Program =====

// PART 1: Preprocessor Directives (processed before compilation)
#include <iostream>     // Include standard I/O library
#include <string>       // Include string library
#define MAX_SIZE 100    // Define a constant macro

// PART 2: Namespace Declaration
using namespace std;    // Use the standard namespace

// PART 3: Function Declarations (prototypes — tell compiler what exists)
void greet(string name);          // Declare: takes string, returns nothing
int add(int a, int b);            // Declare: takes 2 ints, returns int

// PART 4: Main Function (program starts here)
int main() {
    // PART 5: Variable declarations and statements
    string userName = "Alice";
    greet(userName);               // Call the function
    cout << "Sum: " << add(3, 4) << endl;

    return 0;                      // Exit successfully
}

// PART 6: Function Definitions (actual implementation)
void greet(string name) {
    cout << "Hello, " << name << "!" << endl;
}

int add(int a, int b) {
    return a + b;
}`,
    example: `// ===== A Well-Structured C++ Program =====
// This program shows all parts of a proper C++ program

// --- Part 1: Preprocessor Directives ---
#include <iostream>     // For cout, cin
#include <string>       // For string type
#include <cmath>        // For math functions like sqrt()

// --- Part 2: Namespace ---
using namespace std;

// --- Part 3: Constants ---
const double PI = 3.14159265;   // Global constant

// --- Part 4: Function Declarations (prototypes) ---
double circleArea(double radius);
double circleCircumference(double radius);
void displayResult(string shape, double value);

// --- Part 5: Main Function (entry point) ---
int main() {
    // Local variables
    double radius = 5.0;

    // Calculate using our functions
    double area = circleArea(radius);
    double circumference = circleCircumference(radius);

    // Display results
    cout << "Circle with radius " << radius << ":" << endl;
    displayResult("Area", area);
    displayResult("Circumference", circumference);
    displayResult("Diameter", radius * 2);

    return 0;  // Success!
}

// --- Part 6: Function Definitions ---
double circleArea(double radius) {
    return PI * radius * radius;      // π × r²
}

double circleCircumference(double radius) {
    return 2 * PI * radius;           // 2 × π × r
}

void displayResult(string label, double value) {
    cout << "  " << label << ": " << value << endl;
}
// Output:
// Circle with radius 5:
//   Area: 78.5398
//   Circumference: 31.4159
//   Diameter: 10`,
    codeExplanation: "The program follows the standard structure: headers at top (#include), then namespace, then constants, function declarations (prototypes), main function that calls everything, and function definitions below. Declaring functions before main() lets the compiler know about them before they're called.",
    commonMistakes: [
      "Defining functions after main() without declaring them first — compiler error",
      "Placing #include inside functions instead of at the top of the file",
      "Missing the closing brace } of main() or other functions",
      "Forgetting the semicolon after function declarations (prototypes)"
    ],
    practiceQuestions: [
      "What are the 6 essential parts of a C++ program?",
      "Why do we write function declarations (prototypes) before main()?",
      "What happens if you remove 'using namespace std'? How would you fix cout calls?"
    ]
  },
  {
    id: "comments",
    title: "Comments",
    explanation: "Comments are non-executable text used to explain code, make notes, or temporarily disable code. C++ supports single-line comments (//) and multi-line comments (/* */). Good comments explain WHY, not WHAT — the code itself should be readable enough to show what it does.\n\nComments are completely removed during compilation and have zero impact on performance or the final program. They exist solely for human readers.",
    syntax: `// ===== Types of Comments in C++ =====

// TYPE 1: Single-line comment (everything after // is ignored)
int x = 5;  // This explains the variable

// TYPE 2: Multi-line comment (everything between /* and */)
/* This is a multi-line comment.
   It can span multiple lines.
   Useful for longer explanations. */

// TYPE 3: Documentation-style comment
/**
 * @brief Calculates the area of a circle
 * @param radius The radius of the circle
 * @return The area (π × r²)
 */
double circleArea(double radius);

// ===== When to Use Comments =====
// ✅ DO: Explain WHY (complex logic, business rules)
// ✅ DO: Document function purpose and parameters
// ✅ DO: Mark TODO items and known issues
// ❌ DON'T: State the obvious (int age = 25; // set age to 25)
// ❌ DON'T: Leave outdated comments that don't match the code`,
    example: `// ===== Practical Use of Comments =====
#include <iostream>
using namespace std;

/*
 * Program: Temperature Converter
 * Purpose: Converts between Celsius, Fahrenheit, and Kelvin
 * Author:  Student
 * Date:    2024
 */

int main() {
    // --- Input ---
    double celsius = 100.0;  // Boiling point of water

    // --- Conversions ---
    // Formula: Fahrenheit = (Celsius × 9/5) + 32
    double fahrenheit = (celsius * 9.0 / 5.0) + 32;

    // Formula: Kelvin = Celsius + 273.15
    double kelvin = celsius + 273.15;

    // --- Output ---
    cout << celsius << " °C = " << fahrenheit << " °F" << endl;
    cout << celsius << " °C = " << kelvin << " K" << endl;

    // TODO: Add user input for custom temperatures
    // TODO: Add reverse conversion (F → C)

    // The following line is commented out (disabled):
    // cout << "This line won't print" << endl;

    return 0;
}
// Output:
// 100 °C = 212 °F
// 100 °C = 373.15 K`,
    codeExplanation: "The multi-line comment at top describes the program's purpose, author, and date. Single-line comments explain the formula and mark TODO items. A commented-out cout line shows how to temporarily disable code. This is a common technique for debugging.",
    commonMistakes: [
      "Nesting multi-line comments (/* /* inner */ outer */ causes errors)",
      "Over-commenting obvious code like 'int x = 5; // set x to 5'",
      "Leaving outdated comments that no longer match the code — worse than no comments!"
    ],
    practiceQuestions: [
      "Add meaningful comments to a program you've written before",
      "What is the difference between // and /* */? When would you use each?",
      "Can you nest single-line comments inside multi-line comments? Test it!"
    ]
  },
  {
    id: "variables",
    title: "Variables",
    explanation: "Variables are named storage locations in memory that hold data values. Think of them as labeled boxes where you store information. Every variable in C++ must be declared with a specific data type before use — the type tells the compiler how much memory to allocate and what operations are allowed.\n\nVariable names must start with a letter or underscore, can contain letters, digits, and underscores, and cannot be C++ reserved keywords like int, class, or return. Good variable names are descriptive: use 'studentAge' instead of 'x'.",
    syntax: `// ===== Variable Declaration and Initialization =====

// Method 1: Declare first, assign later
int age;           // Declaration (variable exists but has garbage value!)
age = 25;          // Assignment (now it has a value)

// Method 2: Declare and initialize at once (RECOMMENDED)
int score = 95;         // Integer (whole number)
double price = 19.99;   // Decimal number
char grade = 'A';       // Single character (use single quotes)
string name = "Alice";  // Text (use double quotes, needs <string>)
bool isActive = true;   // Boolean (true or false)

// Method 3: Multiple variables of same type
int x = 1, y = 2, z = 3;

// Method 4: Auto type deduction (C++11)
auto count = 10;        // Compiler deduces: int
auto rate = 3.14;       // Compiler deduces: double

// ===== Variable Naming Rules =====
// ✅ Valid:   age, _count, student_name, totalScore, x1
// ❌ Invalid: 2name (starts with digit), my-var (has hyphen)
// ❌ Invalid: int (reserved keyword), class (reserved keyword)`,
    example: `// ===== Working with Variables =====
#include <iostream>
#include <string>    // Needed for string type
using namespace std;

int main() {
    // --- Declare and initialize different types ---
    int age = 20;               // Whole number
    double gpa = 3.85;          // Decimal number
    char initial = 'J';         // Single character
    string name = "John Doe";   // Text string
    bool enrolled = true;       // true or false

    // --- Print all variables ---
    cout << "===== Student Info =====" << endl;
    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl;
    cout << "Initial: " << initial << endl;
    cout << "GPA: " << gpa << endl;
    cout << "Enrolled: " << enrolled << endl;  // Prints 1 (true) or 0 (false)

    // --- Modify variables (they CAN change!) ---
    age = 21;                   // Update age
    gpa = 3.90;                 // Update GPA
    name = "John Smith";        // Update name

    cout << "\\n===== Updated Info =====" << endl;
    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl;
    cout << "GPA: " << gpa << endl;

    // --- Swap two variables using a third ---
    int a = 10, b = 20;
    cout << "\\nBefore swap: a=" << a << ", b=" << b << endl;
    int temp = a;   // Store a's value temporarily
    a = b;          // Put b's value in a
    b = temp;       // Put original a's value in b
    cout << "After swap:  a=" << a << ", b=" << b << endl;

    return 0;
}
// Output:
// ===== Student Info =====
// Name: John Doe
// Age: 20
// Initial: J
// GPA: 3.85
// Enrolled: 1
//
// ===== Updated Info =====
// Name: John Smith
// Age: 21
// GPA: 3.9
//
// Before swap: a=10, b=20
// After swap:  a=20, b=10`,
    codeExplanation: "We declare five variables of different types and initialize them. Variables can be modified after declaration — we update age, gpa, and name. The swap example shows a classic algorithm using a temporary variable to exchange two values. Bool prints as 1 (true) or 0 (false) by default.",
    commonMistakes: [
      "Using a variable before declaring it — compiler error",
      "Not initializing variables — they contain random garbage values!",
      "Starting variable names with a digit (e.g., 2name is invalid)",
      "Using = (assignment) when you mean == (comparison) in conditions"
    ],
    practiceQuestions: [
      "Declare variables for your personal info (name, age, height) and print them",
      "What happens if you use an uninitialized variable? Try it and see!",
      "Swap two variables WITHOUT using a temporary variable (hint: use + and -)"
    ]
  },
  {
    id: "data-types",
    title: "Data Types",
    explanation: "C++ has several built-in data types that determine what kind of data a variable can hold and how much memory it uses. The main types are: int (whole numbers, typically 4 bytes), double/float (decimal numbers), char (single character, 1 byte), bool (true/false, 1 byte), and string (text, requires <string>).\n\nModifiers like short, long, unsigned, and signed can alter the range of integer types. For example, unsigned int holds only positive values but doubles the maximum positive range. Always choose the smallest type that fits your data to save memory.",
    syntax: `// ===== C++ Built-in Data Types =====

// --- Integer types (whole numbers) ---
int       x = 42;          // 4 bytes, range: -2 billion to +2 billion
short     s = 100;         // 2 bytes, range: -32,768 to 32,767
long      l = 100000L;     // 4+ bytes
long long ll = 9223372036854775807LL;  // 8 bytes, very large numbers

// --- Unsigned (positive only — doubles the positive range) ---
unsigned int ui = 4294967295;  // 4 bytes, range: 0 to ~4.3 billion

// --- Floating-point types (decimal numbers) ---
float     f = 3.14f;      // 4 bytes, ~7 decimal digits precision
double    d = 3.14159265;  // 8 bytes, ~15 decimal digits precision

// --- Character type ---
char      c = 'A';        // 1 byte, stores a single character (ASCII)

// --- Boolean type ---
bool      b = true;       // 1 byte, can only be true or false

// --- String type (from <string> library) ---
string    str = "Hello";  // Dynamic size, grows as needed

// ===== sizeof() — Check memory size of any type =====
sizeof(int)       // Returns 4 (bytes)
sizeof(double)    // Returns 8 (bytes)
sizeof(char)      // Returns 1 (byte)`,
    example: `// ===== Exploring Data Types and Their Sizes =====
#include <iostream>
#include <string>
#include <climits>    // Provides INT_MAX, INT_MIN constants
#include <cfloat>     // Provides FLT_MAX, DBL_MAX constants
using namespace std;

int main() {
    // --- Print sizes of each type ---
    cout << "===== Data Type Sizes =====" << endl;
    cout << "int:       " << sizeof(int) << " bytes" << endl;
    cout << "short:     " << sizeof(short) << " bytes" << endl;
    cout << "long:      " << sizeof(long) << " bytes" << endl;
    cout << "long long: " << sizeof(long long) << " bytes" << endl;
    cout << "float:     " << sizeof(float) << " bytes" << endl;
    cout << "double:    " << sizeof(double) << " bytes" << endl;
    cout << "char:      " << sizeof(char) << " byte" << endl;
    cout << "bool:      " << sizeof(bool) << " byte" << endl;

    // --- Maximum and minimum values ---
    cout << "\\n===== Value Ranges =====" << endl;
    cout << "int max:    " << INT_MAX << endl;    // 2,147,483,647
    cout << "int min:    " << INT_MIN << endl;    // -2,147,483,648
    cout << "double max: " << DBL_MAX << endl;    // ~1.8 × 10^308

    // --- Integer overflow demonstration ---
    int maxInt = INT_MAX;         // Maximum int value
    cout << "\\n===== Integer Overflow =====" << endl;
    cout << "Max int:     " << maxInt << endl;
    cout << "Max int + 1: " << maxInt + 1 << endl;  // Wraps to negative!

    // --- Type casting (converting between types) ---
    cout << "\\n===== Type Behavior =====" << endl;
    cout << "int division:    7/2 = " << 7/2 << endl;        // 3 (truncated!)
    cout << "double division: 7.0/2 = " << 7.0/2 << endl;    // 3.5
    cout << "char as int:     'A' = " << (int)'A' << endl;    // 65 (ASCII)

    return 0;
}`,
    codeExplanation: "sizeof() returns the memory size of each type in bytes. INT_MAX and INT_MIN from <climits> show the range. Integer overflow wraps around (undefined behavior). Integer division 7/2 = 3 (not 3.5!) because both operands are int. Casting char 'A' to int gives its ASCII code (65).",
    commonMistakes: [
      "Using int for very large numbers — use long long instead (max ~9.2 quintillion)",
      "Storing decimals in int (7/2 = 3, not 3.5 — the decimal part is lost!)",
      "Forgetting #include <string> when using the string type",
      "Not understanding integer overflow — adding 1 to INT_MAX wraps to INT_MIN"
    ],
    practiceQuestions: [
      "Print the sizeof() of all basic data types on your system",
      "What happens when you store 3.7 in an int variable? Try it!",
      "What is the difference between float and double? When would you choose each?"
    ]
  },
  {
    id: "constants",
    title: "Constants",
    explanation: "Constants are variables whose values cannot be changed after initialization. They make your code safer (prevent accidental modifications) and more readable (give meaningful names to magic numbers). Use 'const' keyword or '#define' preprocessor directive to create constants.\n\nPrefer 'const' over '#define' because const variables have type checking, proper scope rules, and are easier to debug. In modern C++, you can also use 'constexpr' for compile-time constants.",
    syntax: `// ===== Three Ways to Create Constants =====

// Method 1: const keyword (PREFERRED — has type safety)
const double PI = 3.14159265;
const int MAX_STUDENTS = 50;
const string SCHOOL = "RUET";

// Method 2: #define preprocessor macro (C-style, no type checking)
#define TAX_RATE 0.08
#define APP_NAME "My App"

// Method 3: constexpr (C++11 — evaluated at compile time)
constexpr int ARRAY_SIZE = 100;    // Must be computable at compile time
constexpr double GRAVITY = 9.81;

// ===== Key Difference =====
// const: value fixed at runtime, has a type, follows scope rules
// #define: text replacement before compilation, no type, global scope
// constexpr: const + guaranteed compile-time evaluation`,
    example: `// ===== Using Constants Effectively =====
#include <iostream>
#include <string>
using namespace std;

// --- Global constants (accessible everywhere) ---
const double PI = 3.14159265;     // Mathematical constant
const double GRAVITY = 9.81;      // m/s² on Earth
const int MAX_STUDENTS = 50;      // Class size limit
const string UNIVERSITY = "RUET"; // Institution name

int main() {
    // --- Using constants in calculations ---
    double radius = 5.0;
    double area = PI * radius * radius;         // π × r²
    double circumference = 2 * PI * radius;     // 2πr

    cout << "===== Circle Calculator =====" << endl;
    cout << "Radius: " << radius << endl;
    cout << "Area: " << area << endl;
    cout << "Circumference: " << circumference << endl;

    // --- Constants prevent bugs ---
    cout << "\\nMax students allowed: " << MAX_STUDENTS << endl;
    cout << "University: " << UNIVERSITY << endl;

    // --- Physics calculation ---
    double height = 100.0;  // meters
    double fallTime = sqrt(2 * height / GRAVITY);  // Needs <cmath>
    cout << "\\nFall from " << height << "m takes ~"
         << (int)(sqrt(2 * height / GRAVITY)) << " seconds" << endl;

    // --- This would cause a COMPILER ERROR: ---
    // PI = 3.14;  // ❌ ERROR! Cannot modify a constant
    // MAX_STUDENTS = 60;  // ❌ ERROR! Cannot modify a constant

    // --- Local constant ---
    const int PASSING_GRADE = 60;
    int myGrade = 75;
    if (myGrade >= PASSING_GRADE) {
        cout << "\\nYou passed! (" << myGrade << " >= " << PASSING_GRADE << ")" << endl;
    }

    return 0;
}`,
    codeExplanation: "PI, GRAVITY, MAX_STUDENTS, and UNIVERSITY are declared as constants — any attempt to modify them after initialization will cause a compiler error. This prevents bugs from accidental value changes. PASSING_GRADE is a local constant, scoped to main(). Constants give meaningful names to magic numbers.",
    commonMistakes: [
      "Trying to modify a const variable after declaration — compiler error",
      "Not initializing a const variable at declaration time — you must give it a value immediately",
      "Using #define for everything instead of typed const variables — const is safer"
    ],
    practiceQuestions: [
      "Create constants for days in a week (7) and months in a year (12)",
      "What is the difference between const, #define, and constexpr?",
      "Why is const preferred over #define in modern C++?"
    ]
  },
  {
    id: "input-output",
    title: "Input / Output (cin / cout)",
    explanation: "C++ uses the iostream library for I/O operations. 'cout' (character output) sends data to the console with the << (insertion) operator. 'cin' (character input) reads data from the keyboard with the >> (extraction) operator.\n\nFor reading full lines including spaces, use getline(cin, variable). The endl manipulator adds a newline and flushes the output buffer. You can also use '\\n' for a newline without flushing (slightly faster).",
    syntax: `// ===== Output with cout =====
cout << "text";              // Print text
cout << variable;            // Print a variable's value
cout << "a = " << a << endl; // Chain multiple items
cout << "line\\n";            // Newline without flushing buffer

// ===== Input with cin =====
cin >> variable;             // Read a single value (stops at whitespace)
cin >> a >> b;               // Read multiple values

// ===== Read full line (including spaces) =====
string fullLine;
getline(cin, fullLine);      // Reads until Enter is pressed

// ===== IMPORTANT: Mixing cin >> and getline =====
cin >> number;               // Reads number, leaves \\n in buffer
cin.ignore();                // Clears the leftover \\n
getline(cin, text);          // Now getline works correctly

// ===== Formatted output =====
#include <iomanip>           // For formatting
cout << fixed << setprecision(2) << 3.14159;  // Output: 3.14
cout << setw(10) << "Hello";                  // Right-aligned in 10 chars`,
    example: `// ===== Complete I/O Example =====
#include <iostream>
#include <string>
#include <iomanip>    // For formatted output
using namespace std;

int main() {
    // --- Basic Output ---
    cout << "===== Student Registration =====" << endl;

    // --- Reading a full line (with spaces) ---
    string fullName;
    cout << "Enter your full name: ";
    getline(cin, fullName);     // getline reads the WHOLE line including spaces

    // --- Reading single values ---
    int age;
    cout << "Enter your age: ";
    cin >> age;                 // cin >> reads until whitespace

    double gpa;
    cout << "Enter your GPA: ";
    cin >> gpa;

    // --- Reading a character ---
    char section;
    cout << "Enter your section (A/B/C): ";
    cin >> section;

    // --- Display formatted results ---
    cout << "\\n===== Registration Complete =====" << endl;
    cout << "Name:    " << fullName << endl;
    cout << "Age:     " << age << " years old" << endl;
    cout << "GPA:     " << fixed << setprecision(2) << gpa << endl;  // 2 decimal places
    cout << "Section: " << section << endl;

    // --- Formatted table output ---
    cout << "\\n===== Receipt =====" << endl;
    cout << left << setw(15) << "Item" << setw(10) << "Price" << endl;
    cout << left << setw(15) << "Tuition" << "$" << setw(9) << 5000 << endl;
    cout << left << setw(15) << "Books" << "$" << setw(9) << 250 << endl;
    cout << left << setw(15) << "Lab Fee" << "$" << setw(9) << 100 << endl;

    return 0;
}`,
    codeExplanation: "We use getline to read the full name (including spaces), then cin >> to read an integer, double, and char. The output uses iomanip for formatting: fixed + setprecision(2) for 2 decimal places, setw() for column width, and left for left-alignment. Note: getline is used before cin >> to avoid input buffer issues.",
    commonMistakes: [
      "Using cin >> for strings with spaces — it stops at the first space! Use getline instead.",
      "Mixing cin >> and getline without clearing the buffer (use cin.ignore() between them)",
      "Forgetting endl or \\n, causing output to appear on the same line",
      "Not including <iomanip> when using setprecision, setw, or other formatting"
    ],
    practiceQuestions: [
      "Write a program that takes two numbers and prints their sum, difference, product, and quotient",
      "Read a full sentence from the user and print how many characters it has",
      "What happens if you enter a letter when cin expects an int? Try it!"
    ]
  },
  {
    id: "operators",
    title: "Operators",
    explanation: "C++ operators perform operations on variables and values. They are grouped into categories: Arithmetic (+, -, *, /, %), Assignment (=, +=, -=), Comparison (==, !=, <, >, <=, >=), Logical (&&, ||, !), Increment/Decrement (++, --), and Bitwise (&, |, ^, ~, <<, >>).\n\nOperator precedence determines the order of evaluation when multiple operators appear in one expression. Use parentheses to make precedence explicit and clear — it also makes your code easier to read.",
    syntax: `// ===== C++ Operator Categories =====

// 1. Arithmetic Operators (math operations)
a + b    // Addition
a - b    // Subtraction
a * b    // Multiplication
a / b    // Division (integer if both int, decimal if any double)
a % b    // Modulo (remainder after division)

// 2. Comparison Operators (return true or false)
a == b   // Equal to
a != b   // Not equal to
a < b    // Less than
a > b    // Greater than
a <= b   // Less than or equal
a >= b   // Greater than or equal

// 3. Logical Operators (combine conditions)
a && b   // AND: both must be true
a || b   // OR: at least one must be true
!a       // NOT: flips true↔false

// 4. Assignment Operators (shorthand)
a = b    // Assign b to a
a += b   // Same as: a = a + b
a -= b   // Same as: a = a - b
a *= b   // Same as: a = a * b
a /= b   // Same as: a = a / b
a %= b   // Same as: a = a % b

// 5. Increment / Decrement
a++      // Post-increment: use a, THEN add 1
++a      // Pre-increment: add 1, THEN use a
a--      // Post-decrement: use a, THEN subtract 1
--a      // Pre-decrement: subtract 1, THEN use a`,
    example: `// ===== All Operator Types Demonstrated =====
#include <iostream>
using namespace std;

int main() {
    // --- Arithmetic Operators ---
    int a = 17, b = 5;
    cout << "===== Arithmetic =====" << endl;
    cout << "a + b = " << (a + b) << endl;   // 22 (addition)
    cout << "a - b = " << (a - b) << endl;   // 12 (subtraction)
    cout << "a * b = " << (a * b) << endl;   // 85 (multiplication)
    cout << "a / b = " << (a / b) << endl;   // 3  (integer division — truncated!)
    cout << "a % b = " << (a % b) << endl;   // 2  (remainder: 17 = 5*3 + 2)

    // Important: integer vs floating-point division
    cout << "17 / 5   = " << 17 / 5 << endl;     // 3   (both int → int result)
    cout << "17.0 / 5 = " << 17.0 / 5 << endl;   // 3.4 (one is double → double result)

    // --- Comparison Operators ---
    cout << "\\n===== Comparison =====" << endl;
    cout << "a == b: " << (a == b) << endl;   // 0 (false)
    cout << "a != b: " << (a != b) << endl;   // 1 (true)
    cout << "a > b:  " << (a > b) << endl;    // 1 (true)
    cout << "a <= b: " << (a <= b) << endl;   // 0 (false)

    // --- Logical Operators ---
    cout << "\\n===== Logical =====" << endl;
    bool sunny = true, warm = false;
    cout << "sunny && warm: " << (sunny && warm) << endl;  // 0 (both must be true)
    cout << "sunny || warm: " << (sunny || warm) << endl;  // 1 (at least one true)
    cout << "!sunny:        " << (!sunny) << endl;          // 0 (flips true→false)

    // --- Increment / Decrement ---
    cout << "\\n===== Increment/Decrement =====" << endl;
    int x = 5;
    cout << "x   = " << x << endl;      // 5
    cout << "x++ = " << x++ << endl;     // 5 (prints THEN increments)
    cout << "x   = " << x << endl;       // 6 (now it's 6)
    cout << "++x = " << ++x << endl;     // 7 (increments THEN prints)

    // --- Assignment Shortcuts ---
    cout << "\\n===== Assignment Shortcuts =====" << endl;
    int score = 100;
    score += 10;  // score = score + 10 = 110
    cout << "score += 10: " << score << endl;
    score -= 30;  // score = score - 30 = 80
    cout << "score -= 30: " << score << endl;
    score *= 2;   // score = score * 2 = 160
    cout << "score *= 2:  " << score << endl;

    return 0;
}`,
    codeExplanation: "Integer division truncates (17/5 = 3, not 3.4) — but 17.0/5 gives 3.4 because one operand is double. The modulo operator (%) gives the remainder. Post-increment (x++) returns the old value then increments, while pre-increment (++x) increments first then returns. Logical operators work with boolean logic.",
    commonMistakes: [
      "Confusing = (assignment) with == (comparison) — if(x = 5) assigns 5 to x, always true!",
      "Integer division truncation — 5/2 gives 2, not 2.5. Use 5.0/2 for decimal result.",
      "Misunderstanding post vs pre increment: x++ uses old value, ++x uses new value",
      "Forgetting parentheses around comparisons in cout: cout << (a == b) not cout << a == b"
    ],
    practiceQuestions: [
      "What is the result of 7 / 2 and 7.0 / 2 in C++? Explain why they differ.",
      "Write a program that uses ALL arithmetic operators on two user-input numbers",
      "Explain the difference between x++ and ++x with a detailed example"
    ]
  },
  {
    id: "type-casting",
    title: "Type Casting",
    explanation: "Type casting converts a value from one data type to another. Implicit casting happens automatically when the compiler converts types (like int to double). Explicit casting is done manually when you want to force a conversion.\n\nC++ provides four cast operators: static_cast<type>(value) for compile-time conversions (most common), dynamic_cast for runtime polymorphic casts, const_cast to add/remove const, and reinterpret_cast for low-level bit reinterpretation. Prefer static_cast for safety — it catches errors at compile time.",
    syntax: `// ===== Three Ways to Cast in C++ =====

// Method 1: Implicit casting (automatic — compiler does it)
int a = 5;
double b = a;      // int → double (safe, no data loss)
int c = 3.7;       // double → int: TRUNCATES to 3 (data loss!)

// Method 2: C-style cast (old way — avoid in modern C++)
double d = (double)a;      // Force int to double
int e = (int)3.14;         // Force double to int → 3

// Method 3: C++ static_cast (PREFERRED — type-safe)
double f = static_cast<double>(a);   // int → double
int g = static_cast<int>(3.14);      // double → int → 3

// ===== Why static_cast is better =====
// ✅ Caught at compile time if conversion is invalid
// ✅ Easy to search for in code (grep "static_cast")
// ✅ Makes intent clear to other programmers`,
    example: `// ===== Type Casting in Action =====
#include <iostream>
using namespace std;

int main() {
    // --- Problem: Integer division loses decimals ---
    int a = 7, b = 2;
    cout << "===== Integer Division Problem =====" << endl;
    double wrong = a / b;                           // 3.0 (int/int = int, THEN to double)
    double correct = static_cast<double>(a) / b;    // 3.5 (double/int = double)
    cout << "Without cast: 7/2 = " << wrong << endl;    // 3
    cout << "With cast:    7/2 = " << correct << endl;   // 3.5

    // --- Char to int (ASCII value) ---
    cout << "\\n===== Character ↔ Integer =====" << endl;
    char letter = 'A';
    int ascii = static_cast<int>(letter);    // 'A' → 65
    cout << "'" << letter << "' as ASCII = " << ascii << endl;

    char fromNumber = static_cast<char>(97);  // 97 → 'a'
    cout << "ASCII 97 = '" << fromNumber << "'" << endl;

    // --- Double to int (truncation warning!) ---
    cout << "\\n===== Double to Int (Truncation) =====" << endl;
    double pi = 3.14159;
    int truncated = static_cast<int>(pi);    // Cuts off decimals!
    cout << "double: " << pi << " → int: " << truncated << endl;

    double negative = -2.9;
    int truncNeg = static_cast<int>(negative);  // -2 (not -3!)
    cout << "double: " << negative << " → int: " << truncNeg << endl;

    // --- Bool to int ---
    cout << "\\n===== Bool ↔ Int =====" << endl;
    bool flag = true;
    cout << "true as int: " << static_cast<int>(flag) << endl;   // 1
    cout << "false as int: " << static_cast<int>(false) << endl;  // 0
    cout << "42 as bool: " << static_cast<bool>(42) << endl;      // 1 (any non-zero = true)
    cout << "0 as bool: " << static_cast<bool>(0) << endl;        // 0 (zero = false)

    return 0;
}
// Output:
// ===== Integer Division Problem =====
// Without cast: 7/2 = 3
// With cast:    7/2 = 3.5
//
// ===== Character ↔ Integer =====
// 'A' as ASCII = 65
// ASCII 97 = 'a'
//
// ===== Double to Int (Truncation) =====
// double: 3.14159 → int: 3
// double: -2.9 → int: -2
//
// ===== Bool ↔ Int =====
// true as int: 1
// false as int: 0
// 42 as bool: 1
// 0 as bool: 0`,
    codeExplanation: "The key insight: when dividing two ints (7/2), the result is an int (3). Casting one operand to double forces floating-point division (3.5). Double-to-int truncates (cuts off decimals, doesn't round). Char-to-int gives ASCII codes. Any non-zero value cast to bool is true.",
    commonMistakes: [
      "Expecting 7/2 to give 3.5 — both operands are int so result is int (3)",
      "Using C-style casts like (int)3.14 — static_cast is safer and clearer",
      "Thinking double→int rounds to nearest — it TRUNCATES (3.9 → 3, not 4!)",
      "Not realizing -2.9 truncates to -2, not -3 (truncation goes toward zero)"
    ],
    practiceQuestions: [
      "What is the output of static_cast<int>(3.9)? And static_cast<int>(-3.9)?",
      "Convert every lowercase letter (a-z) to its ASCII value and print them",
      "Why is static_cast preferred over C-style casting? Give two reasons."
    ]
  }
];

export const controlFlowTopics: Topic[] = [
  {
    id: "if-statement",
    title: "If Statement",
    explanation: "The if statement is the most basic decision-making tool in C++. It executes a block of code ONLY when a condition evaluates to true. The condition is enclosed in parentheses and evaluated as a boolean — any non-zero value is true, zero is false.\n\nUse if statements for simple conditional logic where you only need to act when a condition is met. The body of the if statement is enclosed in curly braces {}.",
    syntax: `// ===== If Statement Syntax =====

// Basic if
if (condition) {
    // This code runs ONLY if condition is true
}

// What counts as true/false?
// true:  any non-zero number, non-null pointer, true
// false: 0, nullptr, false

// Examples of conditions:
if (age >= 18) { }           // Comparison
if (score > 90 && score <= 100) { }  // Multiple conditions with AND
if (isStudent || isTeacher) { }      // Multiple conditions with OR
if (!isEmpty) { }                     // Negation (NOT)`,
    example: `// ===== If Statement Examples =====
#include <iostream>
using namespace std;

int main() {
    int age;
    cout << "Enter your age: ";
    cin >> age;

    // --- Simple if ---
    if (age >= 18) {
        cout << "✅ You are eligible to vote!" << endl;
    }

    if (age >= 16) {
        cout << "🚗 You can get a driving license." << endl;
    }

    // --- If with logical operators ---
    int score = 85;
    if (score >= 80 && score <= 100) {  // AND: both must be true
        cout << "🎉 Excellent score!" << endl;
    }

    // --- If with boolean variable ---
    bool hasTicket = true;
    if (hasTicket) {
        cout << "🎬 Enjoy the movie!" << endl;
    }

    // --- Checking even/odd ---
    int number = 7;
    if (number % 2 == 0) {
        cout << number << " is even" << endl;
    }
    if (number % 2 != 0) {
        cout << number << " is odd" << endl;
    }

    return 0;
}`,
    codeExplanation: "Multiple independent if statements each check their own condition. If age is 20, both the voting and driving messages print because both conditions are true. The && operator requires both conditions to be true. The % (modulo) operator checks if a number is even (remainder 0) or odd.",
    commonMistakes: [
      "Using = instead of == in conditions: if (x = 5) ASSIGNS 5 to x (always true!)",
      "Forgetting curly braces for multi-line if blocks — only the first line executes",
      "Putting a semicolon after if (condition); — makes the body empty!",
      "Not using parentheses around the condition: if age >= 18 is a syntax error"
    ],
    practiceQuestions: [
      "Write a program that checks if a number is positive, negative, or zero",
      "What happens if you write if(x = 0) instead of if(x == 0)? Try it!",
      "Check if a number is both even AND greater than 10"
    ]
  },
  {
    id: "if-else",
    title: "If-Else Statement",
    explanation: "The if-else statement provides two paths: one for when the condition is true and another for when it's false. This ensures that exactly one block always executes. You can chain multiple conditions with else-if for more complex decision trees.\n\nUse if-else when you need to handle both outcomes of a condition, or when you have multiple mutually exclusive conditions (only one can be true at a time).",
    syntax: `// ===== If-Else Syntax =====

// Basic if-else (two paths)
if (condition) {
    // Runs if condition is TRUE
} else {
    // Runs if condition is FALSE
}

// Else-if chain (multiple conditions)
if (condition1) {
    // Runs if condition1 is true
} else if (condition2) {
    // Runs if condition1 is false AND condition2 is true
} else if (condition3) {
    // Runs if condition1 and condition2 are false AND condition3 is true
} else {
    // Runs if ALL conditions above are false (catch-all)
}

// ===== Ternary Operator (shorthand if-else) =====
// result = (condition) ? valueIfTrue : valueIfFalse;
int max = (a > b) ? a : b;  // One-line if-else`,
    example: `// ===== If-Else and Else-If Chain =====
#include <iostream>
using namespace std;

int main() {
    // --- Grading System ---
    int score;
    cout << "Enter your score (0-100): ";
    cin >> score;

    // Else-if chain: only ONE block executes
    if (score >= 90) {
        cout << "Grade: A ⭐ (Excellent!)" << endl;
    } else if (score >= 80) {
        cout << "Grade: B 👍 (Very Good)" << endl;
    } else if (score >= 70) {
        cout << "Grade: C 📝 (Good)" << endl;
    } else if (score >= 60) {
        cout << "Grade: D ⚠️ (Needs Improvement)" << endl;
    } else {
        cout << "Grade: F ❌ (Failed)" << endl;
    }

    // --- Ternary operator (one-line if-else) ---
    string status = (score >= 60) ? "PASSED" : "FAILED";
    cout << "Status: " << status << endl;

    // --- Even/Odd with if-else ---
    int num = 42;
    if (num % 2 == 0) {
        cout << num << " is even" << endl;
    } else {
        cout << num << " is odd" << endl;
    }

    // --- Leap year check ---
    int year = 2024;
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        cout << year << " is a leap year!" << endl;
    } else {
        cout << year << " is not a leap year." << endl;
    }

    return 0;
}`,
    codeExplanation: "The else-if chain evaluates conditions top to bottom — once a condition is true, its block executes and the rest are SKIPPED. The ternary operator (condition ? a : b) is a compact one-line if-else. The leap year check uses logical operators: divisible by 4 but not 100, OR divisible by 400.",
    commonMistakes: [
      "Not ordering conditions correctly in else-if chains (check strictest first)",
      "Writing else without a preceding if statement",
      "Adding a condition to else: else (x > 5) — else does NOT take a condition, use else if",
      "Using else-if when conditions aren't mutually exclusive"
    ],
    practiceQuestions: [
      "Write a program that determines if a year is a leap year",
      "Create a program that finds the largest of three numbers using if-else",
      "Rewrite the grading system using the ternary operator"
    ]
  },
  {
    id: "nested-if",
    title: "Nested If",
    explanation: "Nested if statements are if statements placed inside other if/else blocks. They're useful when you need to make multi-level decisions where the second condition only matters if the first condition is true.\n\nHowever, deeply nested if statements reduce readability. Consider using logical operators (&&, ||) or early returns to flatten nested code. As a rule of thumb, try to avoid nesting more than 2-3 levels deep.",
    syntax: `// ===== Nested If Syntax =====
if (outerCondition) {
    // First check passed
    if (innerCondition) {
        // Both conditions are true
    } else {
        // Outer true, inner false
    }
} else {
    // Outer condition is false
}

// ===== Often better with && (AND) =====
// Nested:
if (age >= 18) {
    if (hasID) {
        // Do something
    }
}
// Flattened (same logic, easier to read):
if (age >= 18 && hasID) {
    // Do something
}`,
    example: `// ===== Nested If: ATM Simulation =====
#include <iostream>
#include <string>
using namespace std;

int main() {
    // --- Simulated ATM Login ---
    string correctPin = "1234";
    double balance = 5000.00;
    int attempts = 3;

    string enteredPin;
    cout << "===== ATM Machine =====" << endl;
    cout << "Enter PIN: ";
    cin >> enteredPin;

    // Outer if: Check PIN
    if (enteredPin == correctPin) {
        cout << "✅ PIN accepted!" << endl;

        // Inner if: Check what they want to do
        int choice;
        cout << "\\n1. Check Balance" << endl;
        cout << "2. Withdraw" << endl;
        cout << "Choice: ";
        cin >> choice;

        if (choice == 1) {
            cout << "💰 Balance: $" << balance << endl;
        } else if (choice == 2) {
            double amount;
            cout << "Enter amount: $";
            cin >> amount;

            // Deeper nesting: validate withdrawal
            if (amount > 0) {
                if (amount <= balance) {
                    balance -= amount;
                    cout << "✅ Withdrew $" << amount << endl;
                    cout << "Remaining: $" << balance << endl;
                } else {
                    cout << "❌ Insufficient funds!" << endl;
                }
            } else {
                cout << "❌ Invalid amount!" << endl;
            }
        }
    } else {
        cout << "❌ Wrong PIN! Access denied." << endl;
    }

    // --- Same logic, flattened with && ---
    // The withdrawal check could also be written as:
    // if (amount > 0 && amount <= balance) { ... }

    return 0;
}`,
    codeExplanation: "The outer if checks the PIN. Only if correct, the menu appears. The withdrawal path has nested checks: first if amount is positive, then if there's enough balance. The deepest nesting could be flattened using && (amount > 0 && amount <= balance).",
    commonMistakes: [
      "Going too deep with nesting (more than 2-3 levels is a code smell)",
      "Mismatching braces in nested blocks — use consistent indentation",
      "Not considering that && can replace simple nested ifs (cleaner code)"
    ],
    practiceQuestions: [
      "Rewrite the ATM example using && instead of nested if where possible",
      "Create a nested if for a login system (check username, then password)",
      "What is the maximum recommended nesting depth? Why?"
    ]
  },
  {
    id: "switch",
    title: "Switch Statement",
    explanation: "The switch statement selects one of many code blocks to execute based on the value of a single expression. It's cleaner than long if-else chains when comparing one variable against multiple constant values.\n\nSwitch works with int, char, and enum types (NOT strings or floating-point). Each case must end with 'break' to prevent fall-through to the next case. The 'default' case handles values that don't match any case.",
    syntax: `// ===== Switch Statement Syntax =====
switch (expression) {     // expression must be int, char, or enum
    case value1:          // If expression == value1
        // code for value1
        break;            // IMPORTANT: stops fall-through

    case value2:          // If expression == value2
        // code for value2
        break;

    case value3:          // Multiple cases can share code:
    case value4:          // If expression == value3 OR value4
        // code for both
        break;

    default:              // If no case matched (like 'else')
        // code for no match
        break;
}

// ===== What happens WITHOUT break? =====
// Execution "falls through" to the next case!
// This is usually a bug, but sometimes used intentionally.`,
    example: `// ===== Switch Statement Examples =====
#include <iostream>
using namespace std;

int main() {
    // --- Example 1: Day of the Week ---
    int day;
    cout << "Enter day number (1-7): ";
    cin >> day;

    switch (day) {
        case 1: cout << "Monday 📅" << endl; break;
        case 2: cout << "Tuesday 📅" << endl; break;
        case 3: cout << "Wednesday 📅" << endl; break;
        case 4: cout << "Thursday 📅" << endl; break;
        case 5: cout << "Friday 🎉" << endl; break;
        case 6: cout << "Saturday 🌴" << endl; break;
        case 7: cout << "Sunday 🌴" << endl; break;
        default: cout << "❌ Invalid day!" << endl;
    }

    // --- Example 2: Calculator ---
    double num1, num2;
    char op;
    cout << "\\nEnter expression (e.g., 5 + 3): ";
    cin >> num1 >> op >> num2;

    switch (op) {
        case '+':
            cout << num1 << " + " << num2 << " = " << (num1 + num2) << endl;
            break;
        case '-':
            cout << num1 << " - " << num2 << " = " << (num1 - num2) << endl;
            break;
        case '*':
            cout << num1 << " * " << num2 << " = " << (num1 * num2) << endl;
            break;
        case '/':
            if (num2 != 0)
                cout << num1 << " / " << num2 << " = " << (num1 / num2) << endl;
            else
                cout << "❌ Cannot divide by zero!" << endl;
            break;
        default:
            cout << "❌ Unknown operator: " << op << endl;
    }

    // --- Example 3: Fall-through (intentional — weekend check) ---
    switch (day) {
        case 6:           // Saturday
        case 7:           // Sunday — falls through from case 6
            cout << "It's the weekend! 🎉" << endl;
            break;
        default:
            cout << "It's a weekday." << endl;
            break;
    }

    return 0;
}`,
    codeExplanation: "The switch compares the expression against each case value. When matched, that case's code runs. 'break' prevents fall-through. The calculator uses char cases for operators. Cases 6 and 7 intentionally share code (fall-through) to handle the weekend together. 'default' catches invalid input.",
    commonMistakes: [
      "Forgetting break — causes fall-through to the next case (usually a bug!)",
      "Trying to use strings or floating-point values in switch — only int/char/enum work",
      "Not including a default case for unexpected values",
      "Declaring variables inside a case without braces (use case 1: { int x = 5; break; })"
    ],
    practiceQuestions: [
      "Write a switch-based menu system with 5 options",
      "What happens if you remove ALL break statements? Try it!",
      "Can you use switch with a string variable? Why or why not?"
    ]
  },
  {
    id: "for-loop",
    title: "For Loop",
    explanation: "The for loop executes a block of code a specific number of times. It has three parts in the parentheses: initialization (runs once at the start), condition (checked before each iteration), and update (runs after each iteration).\n\nFor loops are ideal when you know in advance how many times to iterate. C++11 also introduced range-based for loops that simplify iterating over arrays and containers.",
    syntax: `// ===== For Loop Syntax =====

// Standard for loop
for (initialization; condition; update) {
    // code runs while condition is true
}

// Example: count from 1 to 10
for (int i = 1; i <= 10; i++) {
    cout << i << " ";  // 1 2 3 4 5 6 7 8 9 10
}

// Range-based for loop (C++11) — for arrays/containers
for (type variable : collection) {
    // process each element
}

// Examples:
for (int i = 0; i < 5; i++) { }        // Count 0,1,2,3,4
for (int i = 10; i >= 1; i--) { }      // Countdown 10,9,...,1
for (int i = 0; i < 100; i += 5) { }   // Skip by 5: 0,5,10,...,95`,
    example: `// ===== For Loop Examples =====
#include <iostream>
#include <vector>
using namespace std;

int main() {
    // --- Example 1: Print numbers 1 to 10 ---
    cout << "Count 1-10: ";
    for (int i = 1; i <= 10; i++) {  // i starts at 1, goes up to 10
        cout << i << " ";
    }
    cout << endl;

    // --- Example 2: Multiplication table ---
    int n = 5;
    cout << "\\n" << n << "x Table:" << endl;
    for (int i = 1; i <= 10; i++) {
        cout << n << " x " << i << " = " << (n * i) << endl;
    }

    // --- Example 3: Sum of first N numbers ---
    int sum = 0;
    for (int i = 1; i <= 100; i++) {
        sum += i;  // sum = sum + i
    }
    cout << "\\nSum of 1-100: " << sum << endl;  // 5050

    // --- Example 4: Star pattern ---
    cout << "\\nTriangle:" << endl;
    for (int row = 1; row <= 5; row++) {
        for (int col = 1; col <= row; col++) {  // Nested loop!
            cout << "* ";
        }
        cout << endl;
    }

    // --- Example 5: Range-based for loop (C++11) ---
    vector<string> fruits = {"Apple", "Banana", "Cherry", "Mango"};
    cout << "\\nFruits:" << endl;
    for (const string& fruit : fruits) {   // Auto-iterate over collection
        cout << "  🍎 " << fruit << endl;
    }

    return 0;
}`,
    codeExplanation: "Example 1 counts from 1 to 10. Example 2 uses the loop variable in calculations. Example 3 accumulates a running sum. Example 4 uses nested loops for a triangle pattern (outer = rows, inner = columns). Example 5 uses range-based for to iterate over a vector without an index.",
    commonMistakes: [
      "Off-by-one errors: using < vs <= changes the count by 1 (< 10 gives 0-9, <= 10 gives 0-10)",
      "Infinite loops from wrong update expression (forgetting i++)",
      "Modifying the loop variable inside the loop body (confusing and error-prone)",
      "Using range-based for on an array without knowing its size"
    ],
    practiceQuestions: [
      "Print all even numbers from 2 to 100 using a for loop",
      "Calculate the factorial of a number (e.g., 5! = 5×4×3×2×1 = 120)",
      "Print an inverted triangle pattern with * (5 stars, then 4, then 3...)"
    ]
  },
  {
    id: "while-loop",
    title: "While Loop",
    explanation: "The while loop repeats a block of code as long as a condition remains true. The condition is checked BEFORE each iteration, so if the condition is initially false, the body may never execute at all.\n\nUse while loops when the number of iterations is unknown and depends on a dynamic condition — like reading user input until they type 'quit', or processing data until the end of a file.",
    syntax: `// ===== While Loop Syntax =====
while (condition) {
    // code runs while condition is true
    // MUST update something to eventually make condition false!
}

// Example: countdown
int count = 10;
while (count > 0) {
    cout << count << " ";
    count--;           // Without this, infinite loop!
}
cout << "Liftoff!" << endl;`,
    example: `// ===== While Loop: Number Guessing Game =====
#include <iostream>
#include <cstdlib>   // For rand() and srand()
#include <ctime>     // For time()
using namespace std;

int main() {
    // --- Seed random number generator ---
    srand(time(0));
    int secret = rand() % 10 + 1;  // Random number 1-10
    int guess = 0;
    int attempts = 0;

    cout << "🎯 Guess the number (1-10)!" << endl;

    // --- Loop until correct guess ---
    while (guess != secret) {
        cout << "Your guess: ";
        cin >> guess;
        attempts++;

        if (guess < secret) {
            cout << "📉 Too low! Try again." << endl;
        } else if (guess > secret) {
            cout << "📈 Too high! Try again." << endl;
        }
    }

    // --- This runs after the loop ends ---
    cout << "🎉 Correct! The number was " << secret << endl;
    cout << "You got it in " << attempts << " attempts!" << endl;

    // --- Example 2: Sum digits of a number ---
    int number = 12345;
    int digitSum = 0;
    int temp = number;

    while (temp > 0) {
        digitSum += temp % 10;  // Get last digit
        temp /= 10;             // Remove last digit
    }
    cout << "\\nSum of digits of " << number << " = " << digitSum << endl;
    // 1+2+3+4+5 = 15

    return 0;
}`,
    codeExplanation: "The guessing game loop continues until the user guesses correctly. Each iteration reads a guess and provides feedback (too high/low). The digit sum example uses % 10 to get the last digit and / 10 to remove it, repeating until the number becomes 0.",
    commonMistakes: [
      "Forgetting to update the loop variable (causes infinite loop!)",
      "Using = instead of == in the while condition",
      "Not initializing variables before the while condition check"
    ],
    practiceQuestions: [
      "Sum all digits of a number using a while loop",
      "Reverse a number (e.g., 12345 → 54321) using while loop",
      "Count how many digits a number has using a while loop"
    ]
  },
  {
    id: "do-while",
    title: "Do-While Loop",
    explanation: "The do-while loop is similar to while, but it checks the condition AFTER the body executes. This guarantees the body runs at least once, even if the condition is initially false. This makes it perfect for menu-driven programs.\n\nThe key difference from while: while checks first then runs, do-while runs first then checks. The do-while loop has a semicolon after the closing while(condition);",
    syntax: `// ===== Do-While Syntax =====
do {
    // This code runs AT LEAST ONCE
    // Then checks the condition
} while (condition);  // NOTE: semicolon required here!

// ===== Comparison =====
// while: checks FIRST, might never run
// do-while: runs FIRST, then checks

// Example: Input validation
int input;
do {
    cout << "Enter a number (1-10): ";
    cin >> input;
} while (input < 1 || input > 10);  // Repeats until valid input`,
    example: `// ===== Do-While: Menu-Driven Program =====
#include <iostream>
using namespace std;

int main() {
    int choice;
    double balance = 1000.00;  // Starting balance

    // --- Menu loop (always shows at least once) ---
    do {
        cout << "\\n===== Bank Menu =====" << endl;
        cout << "1. 💰 Check Balance" << endl;
        cout << "2. ➕ Deposit" << endl;
        cout << "3. ➖ Withdraw" << endl;
        cout << "4. 🚪 Exit" << endl;
        cout << "Choice: ";
        cin >> choice;

        switch (choice) {
            case 1:
                cout << "Balance: $" << balance << endl;
                break;
            case 2: {
                double amount;
                cout << "Deposit amount: $";
                cin >> amount;
                if (amount > 0) {
                    balance += amount;
                    cout << "✅ Deposited $" << amount << endl;
                } else {
                    cout << "❌ Invalid amount!" << endl;
                }
                break;
            }
            case 3: {
                double amount;
                cout << "Withdraw amount: $";
                cin >> amount;
                if (amount > 0 && amount <= balance) {
                    balance -= amount;
                    cout << "✅ Withdrew $" << amount << endl;
                } else {
                    cout << "❌ Invalid or insufficient!" << endl;
                }
                break;
            }
            case 4:
                cout << "👋 Goodbye! Final balance: $" << balance << endl;
                break;
            default:
                cout << "❌ Invalid choice! Try again." << endl;
        }
    } while (choice != 4);  // Keep going until user chooses Exit

    return 0;
}`,
    codeExplanation: "The menu displays at least once (guaranteed by do-while). After each action, the condition checks if the user chose Exit (4). If not, the menu repeats. This is the classic use case for do-while — menus that must show at least once.",
    commonMistakes: [
      "Forgetting the semicolon after while(condition); — it's required!",
      "Using do-while when a regular while would be clearer",
      "Not providing an exit condition (causes infinite loop)"
    ],
    practiceQuestions: [
      "Create a do-while that reads numbers until the user enters 0, then prints the sum",
      "When would you prefer do-while over while? Give a real-world example.",
      "Write a do-while that validates user input is between 1-100"
    ]
  },
  {
    id: "break-statement",
    title: "Break Statement",
    explanation: "The break statement immediately exits the innermost loop or switch statement. It's used to stop iteration early when a condition is met, or to prevent fall-through in switch cases.\n\nBreak only affects the nearest enclosing loop — in nested loops, it only breaks out of the inner loop. If you need to break out of multiple nested loops, use a flag variable or consider restructuring your code.",
    syntax: `// ===== Break Statement =====

// In a loop: exits the loop immediately
for (int i = 0; i < 100; i++) {
    if (i == 5) break;  // Exits when i reaches 5
    cout << i << " ";   // Prints: 0 1 2 3 4
}

// In a switch: prevents fall-through
switch (x) {
    case 1: cout << "One"; break;  // Without break, would continue to case 2!
    case 2: cout << "Two"; break;
}

// In nested loops: only breaks the INNER loop
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (j == 2) break;  // Only breaks inner loop
        // Outer loop continues!
    }
}`,
    example: `// ===== Break: Search for an Element =====
#include <iostream>
using namespace std;

int main() {
    // --- Example 1: Find first occurrence ---
    int numbers[] = {4, 7, 2, 9, 1, 5, 8};
    int target = 9;
    int foundIndex = -1;  // -1 means "not found"

    for (int i = 0; i < 7; i++) {
        if (numbers[i] == target) {
            foundIndex = i;
            break;  // Found it! No need to check the rest
        }
    }

    if (foundIndex != -1) {
        cout << "Found " << target << " at index " << foundIndex << endl;
    } else {
        cout << target << " not found" << endl;
    }

    // --- Example 2: Input until sentinel ---
    cout << "\\nEnter numbers (0 to stop):" << endl;
    int sum = 0, count = 0, input;
    while (true) {        // Infinite loop
        cout << "> ";
        cin >> input;
        if (input == 0) break;  // Exit condition
        sum += input;
        count++;
    }
    if (count > 0) {
        cout << "Average: " << (double)sum / count << endl;
    }

    return 0;
}`,
    codeExplanation: "In Example 1, break exits the for loop as soon as the target is found — no point checking remaining elements. In Example 2, 'while(true)' creates an intentional infinite loop, and break is the only way out (when user enters 0). This is a common 'sentinel value' pattern.",
    commonMistakes: [
      "Using break in nested loops and expecting it to exit all loops (it only exits one)",
      "Forgetting break in switch cases (causes unintended fall-through)",
      "Overusing break — sometimes restructuring the loop condition is cleaner"
    ],
    practiceQuestions: [
      "Write a program that finds the first negative number in an array using break",
      "Implement a password checker that gives the user 3 attempts, then locks them out",
      "How would you break out of TWO nested loops? (Hint: use a flag variable)"
    ]
  },
  {
    id: "continue-statement",
    title: "Continue Statement",
    explanation: "The continue statement skips the rest of the current iteration and jumps to the next iteration of the loop. Unlike break (which exits the loop entirely), continue just skips one pass.\n\nIt's useful for filtering — processing only items that meet certain criteria while skipping others.",
    syntax: `// ===== Continue Statement =====

// Skips the rest of current iteration, goes to next
for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) continue;  // Skip even numbers
    cout << i << " ";           // Only prints: 1 3 5 7 9
}

// In while loops: be careful with placement!
int i = 0;
while (i < 10) {
    i++;
    if (i % 3 == 0) continue;  // Skip multiples of 3
    cout << i << " ";           // Prints: 1 2 4 5 7 8 10
}`,
    example: `// ===== Continue: Skip Unwanted Items =====
#include <iostream>
using namespace std;

int main() {
    // --- Example 1: Print only odd numbers ---
    cout << "Odd numbers 1-20: ";
    for (int i = 1; i <= 20; i++) {
        if (i % 2 == 0) continue;  // Skip even numbers
        cout << i << " ";
    }
    cout << endl;

    // --- Example 2: Sum positive numbers only ---
    int values[] = {5, -3, 8, -1, 10, -7, 3};
    int sum = 0;
    for (int i = 0; i < 7; i++) {
        if (values[i] < 0) continue;  // Skip negative numbers
        sum += values[i];              // Only add positive ones
    }
    cout << "Sum of positives: " << sum << endl;  // 5+8+10+3 = 26

    // --- Example 3: Process valid scores ---
    cout << "\\nEnter 5 scores (skip invalid with -1):" << endl;
    int total = 0, validCount = 0;
    for (int i = 0; i < 5; i++) {
        int score;
        cout << "Score " << (i+1) << ": ";
        cin >> score;

        if (score < 0 || score > 100) {
            cout << "  ⚠️ Invalid, skipping." << endl;
            continue;  // Skip to next iteration
        }

        total += score;
        validCount++;
    }
    if (validCount > 0) {
        cout << "Average of valid scores: " << (double)total / validCount << endl;
    }

    return 0;
}`,
    codeExplanation: "Continue skips the rest of the loop body for the current iteration. In Example 1, even numbers are skipped so only odd numbers print. In Example 2, negative values are skipped in the sum. In Example 3, invalid scores are skipped but the loop continues collecting valid ones.",
    commonMistakes: [
      "Using continue in a while loop and accidentally skipping the update step (infinite loop!)",
      "Confusing continue with break — continue skips ONE iteration, break exits the ENTIRE loop",
      "Using continue when an if-else would be clearer"
    ],
    practiceQuestions: [
      "Print all numbers 1-50 that are NOT divisible by 3 or 5",
      "Calculate the average of an array, skipping zeros",
      "What's the difference between using continue and using an if-else to skip code?"
    ]
  }
];
