import { Topic } from "./types";

export const functionTopics: Topic[] = [
  {
    id: "function-basics",
    title: "Function Basics",
    explanation: "Functions are reusable blocks of code that perform specific tasks. They help organize code, reduce repetition, and improve readability. Every C++ program has at least one function: main().\n\nA function has a return type, name, parameters (optional), and a body. When called, execution jumps to the function, runs it, and returns to the caller.",
    syntax: `// ===== Function Syntax =====

// A function has 4 parts:
// 1. Return type  — what kind of value it sends back (int, double, void, etc.)
// 2. Name         — what you call the function
// 3. Parameters   — input values (optional)
// 4. Body         — the code that runs when you call it

// --- Function that RETURNS a value ---
returnType functionName(parameters) {
    // Code goes here (the "body")
    return value;  // Send a result back to the caller
}

// --- Function that returns NOTHING (void) ---
void functionName(parameters) {
    // Does something, but doesn't send a value back
    // No return statement needed (or just "return;")
}

// --- Calling (using) a function ---
int result = functionName(arguments);  // Store what it returns
functionName(arguments);               // Just call it (if void)`,
    example: `// ===== Function Basics — Complete Example =====
#include <iostream>
using namespace std;

// --- Function 1: Returns an int (the sum of two numbers) ---
int add(int a, int b) {
    // 'a' and 'b' are PARAMETERS (inputs to the function)
    return a + b;  // Send the sum back to whoever called this
}

// --- Function 2: Returns nothing (void) — just prints ---
void greet(string name) {
    // This function takes a name and prints a greeting
    cout << "Hello, " << name << "!" << endl;
    // No return needed for void functions
}

// --- Function 3: Returns a double ---
double average(double x, double y) {
    double avg = (x + y) / 2.0;  // Calculate average
    return avg;                    // Return the result
}

// --- Function 4: No parameters, no return ---
void printLine() {
    cout << "========================" << endl;
}

int main() {
    // --- Calling our functions ---
    greet("Alice");                       // Output: Hello, Alice!
    greet("Bob");                         // Output: Hello, Bob!

    int sum = add(3, 7);                  // sum = 10
    cout << "3 + 7 = " << sum << endl;    // Output: 3 + 7 = 10

    printLine();                          // Output: ========================

    double avg = average(85.5, 92.0);     // avg = 88.75
    cout << "Average: " << avg << endl;   // Output: Average: 88.75

    // You can also use the return value directly:
    cout << "Sum: " << add(10, 20) << endl;  // Output: Sum: 30

    return 0;
}
// Output:
// Hello, Alice!
// Hello, Bob!
// 3 + 7 = 10
// ========================
// Average: 88.75
// Sum: 30`,
    codeExplanation: "We define four functions: add() returns an int sum of two numbers, greet() returns void and just prints a greeting, average() returns a double, and printLine() takes no parameters and returns nothing. In main(), we call each function — greet prints immediately, add and average return values we store and print.",
    commonMistakes: [
      "Forgetting the return statement in a non-void function — leads to undefined behavior",
      "Calling a function before it's declared or defined — compiler error",
      "Mismatching parameter types between declaration and call — e.g., passing a string when int is expected"
    ],
    practiceQuestions: [
      "Write a function that returns the maximum of two numbers",
      "Create a void function that prints a horizontal line of dashes",
      "What is the difference between void and int return types?"
    ]
  },
  {
    id: "declaration-vs-definition",
    title: "Declaration vs Definition",
    explanation: "A function declaration (prototype) tells the compiler the function's name, return type, and parameters without providing the body. A definition includes the full implementation.\n\nDeclarations go in header files or before main(), definitions go after main() or in separate .cpp files. This enables separate compilation and lets main() call functions defined later.",
    syntax: `// ===== Declaration vs Definition =====

// --- Declaration (also called "prototype") ---
// Tells the compiler: "Hey, this function EXISTS, I'll define it later"
// Just the signature + semicolon — NO body
int add(int a, int b);           // Declaration: returns int, takes 2 ints
double circleArea(double r);     // Declaration: returns double, takes 1 double
void printHello();               // Declaration: returns nothing, takes nothing

// --- Definition (also called "implementation") ---
// The ACTUAL code for the function — this is where the logic lives
int add(int a, int b) {          // Definition: has the body { }
    return a + b;                // The actual implementation
}

// ===== Why do we need declarations? =====
// In C++, the compiler reads top-to-bottom.
// If main() calls a function defined BELOW it,
// the compiler won't know about it yet.
// Solution: Declare it above main, define it below.`,
    example: `// ===== Declaration vs Definition — Complete Example =====
#include <iostream>
using namespace std;

// --- Step 1: DECLARATIONS (prototypes) above main ---
// These tell the compiler: "These functions exist, trust me"
double circleArea(double radius);        // Just the signature
double circleCircumference(double radius);
void displayResult(string label, double value);

// --- Step 2: MAIN FUNCTION ---
int main() {
    double r = 5.0;  // Radius of the circle

    // We can call these functions even though they're defined BELOW
    double area = circleArea(r);              // Calls the function
    double circ = circleCircumference(r);     // Calls the function

    cout << "Circle with radius " << r << ":" << endl;
    displayResult("Area", area);              // Output: Area: 78.5398
    displayResult("Circumference", circ);     // Output: Circumference: 31.4159

    return 0;
}

// --- Step 3: DEFINITIONS (actual implementation) below main ---
// Now we write the actual code for each function

double circleArea(double radius) {
    // Formula: area = π × r²
    return 3.14159 * radius * radius;
}

double circleCircumference(double radius) {
    // Formula: circumference = 2 × π × r
    return 2 * 3.14159 * radius;
}

void displayResult(string label, double value) {
    // Prints a formatted label: value pair
    cout << "  " << label << ": " << value << endl;
}
// Output:
// Circle with radius 5:
//   Area: 78.5398
//   Circumference: 31.4159`,
    codeExplanation: "The functions are declared before main() (just signatures with semicolons), then defined after main() (full body with code). This lets the compiler know about the functions when main() calls them, even though the implementations come later. Without declarations, the compiler would say 'function not found'.",
    commonMistakes: [
      "Declaration and definition having different parameter types — must match exactly",
      "Forgetting the semicolon at the end of a declaration — syntax error",
      "Defining a function twice — causes a linker error (multiple definitions)"
    ],
    practiceQuestions: [
      "Why do we need function declarations?",
      "What happens if you call a function without declaring it first?",
      "Write declarations for three math functions, then define them after main()"
    ]
  },
  {
    id: "parameters",
    title: "Function Parameters",
    explanation: "Parameters are variables listed in a function's declaration that receive values when the function is called. C++ supports pass by value (copies the value) and pass by reference (uses the original variable with &).\n\nPass by reference is more efficient for large objects and allows the function to modify the original variable.",
    syntax: `// ===== Three Ways to Pass Parameters =====

// --- 1. Pass by VALUE (copy) ---
// The function gets a COPY of the variable
// Changes inside the function do NOT affect the original
void func(int x) {
    x = 100;  // Only changes the local copy, not the original
}

// --- 2. Pass by REFERENCE (original variable) ---
// The function gets the ACTUAL variable (not a copy)
// Changes inside the function DO affect the original
// Use the & symbol after the type
void func(int &x) {
    x = 100;  // Changes the ORIGINAL variable!
}

// --- 3. Pass by CONST REFERENCE (read-only, efficient) ---
// Gets the original variable BUT cannot modify it
// Best for large objects (strings, vectors) — avoids copying
void func(const string &s) {
    cout << s;  // Can read, but cannot modify s
    // s = "new";  // ❌ ERROR! const prevents modification
}`,
    example: `// ===== Pass by Value vs Reference — Complete Example =====
#include <iostream>
using namespace std;

// --- Pass by VALUE: gets a COPY ---
void byValue(int x) {
    x = 100;  // Only changes the copy, not the original
    cout << "  Inside byValue: x = " << x << endl;  // 100
}

// --- Pass by REFERENCE: gets the ORIGINAL ---
void byReference(int &x) {
    x = 100;  // Changes the ORIGINAL variable!
    cout << "  Inside byReference: x = " << x << endl;  // 100
}

// --- Classic SWAP using references ---
void swap(int &a, int &b) {
    int temp = a;   // Store a's value temporarily
    a = b;          // Put b's value in a
    b = temp;       // Put original a's value in b
}

// --- Const reference: efficient + read-only ---
void printLength(const string &text) {
    // const means we PROMISE not to modify 'text'
    // & means we don't copy the string (efficient for large strings)
    cout << "  Length of '" << text << "': " << text.length() << endl;
}

int main() {
    // --- Test pass by value ---
    int num = 5;
    cout << "Before byValue: num = " << num << endl;   // 5
    byValue(num);                                       // Passes a copy
    cout << "After byValue: num = " << num << endl;     // Still 5! (unchanged)

    // --- Test pass by reference ---
    cout << "\\nBefore byReference: num = " << num << endl;  // 5
    byReference(num);                                         // Passes the original
    cout << "After byReference: num = " << num << endl;       // 100! (changed!)

    // --- Test swap ---
    int a = 10, b = 20;
    cout << "\\nBefore swap: a=" << a << ", b=" << b << endl;  // a=10, b=20
    swap(a, b);
    cout << "After swap:  a=" << a << ", b=" << b << endl;     // a=20, b=10

    // --- Test const reference ---
    cout << endl;
    printLength("Hello World");  // Efficient, no copy made

    return 0;
}
// Output:
// Before byValue: num = 5
//   Inside byValue: x = 100
// After byValue: num = 5
//
// Before byReference: num = 5
//   Inside byReference: x = 100
// After byReference: num = 100
//
// Before swap: a=10, b=20
// After swap:  a=20, b=10
//
//   Length of 'Hello World': 11`,
    codeExplanation: "byValue gets a copy of num, so the original is unchanged (still 5). byReference gets the actual variable via &, so changes persist (now 100). The swap function uses references to exchange two variables' values. printLength uses const reference — efficient (no copy) and safe (can't modify).",
    commonMistakes: [
      "Expecting pass-by-value to modify the original variable — it only changes the copy",
      "Forgetting & for reference parameters — without it, you get a copy",
      "Passing a literal (like 5) to a non-const reference parameter — literals can't be modified"
    ],
    practiceQuestions: [
      "Write a function that doubles a number using pass by reference",
      "What is the advantage of const reference for large objects?",
      "Why can't you pass a literal like 5 to a non-const reference?"
    ]
  },
  {
    id: "return-types",
    title: "Return Types",
    explanation: "A function's return type specifies what type of value it sends back to the caller. Use void if the function returns nothing. A function can return any type: int, double, string, bool, or even custom objects.\n\nA function can have multiple return statements but only one executes per call. In C++17, you can use structured bindings to return multiple values via pair or tuple.",
    syntax: `// ===== Function Return Types =====

// --- Returning different types ---
int getAge() {               // Returns an integer
    return 25;
}
string getName() {            // Returns a string
    return "Alice";
}
double getPI() {              // Returns a decimal number
    return 3.14159;
}
bool isEven(int n) {          // Returns true or false
    return n % 2 == 0;        // true if n is even, false if odd
}
void printHello() {           // Returns NOTHING (void)
    cout << "Hello";
    // No return needed (or just "return;")
}

// --- Returning MULTIPLE values using pair ---
#include <utility>            // Needed for pair
pair<int, int> getMinMax(int a, int b) {
    return {min(a,b), max(a,b)};  // Returns TWO values at once
}

// --- Using the returned pair (C++17 structured bindings) ---
auto [lo, hi] = getMinMax(5, 3);  // lo=3, hi=5`,
    example: `// ===== Return Types — Complete Example =====
#include <iostream>
#include <utility>   // For pair<> to return multiple values
using namespace std;

// --- Function returning a pair (two values at once) ---
pair<int, int> minMax(int a, int b, int c) {
    // Find the smallest and largest of three numbers
    int mn = min({a, b, c});  // min of all three
    int mx = max({a, b, c});  // max of all three
    return {mn, mx};          // Return both values as a pair
}

// --- Function returning bool (true/false) ---
bool isPrime(int n) {
    if (n < 2) return false;          // 0 and 1 are not prime
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) return false; // Found a divisor → not prime
    }
    return true;                       // No divisors found → it IS prime
}

// --- Function with multiple return paths ---
string getGrade(int score) {
    if (score >= 90) return "A";       // Early return for A
    if (score >= 80) return "B";       // Early return for B
    if (score >= 70) return "C";       // Early return for C
    if (score >= 60) return "D";       // Early return for D
    return "F";                        // Default: F
}

int main() {
    // --- Using pair return value ---
    // C++17 structured bindings: auto [name1, name2] = ...
    auto [lo, hi] = minMax(3, 7, 1);
    cout << "Min: " << lo << ", Max: " << hi << endl;  // Min: 1, Max: 7

    // --- Using bool return value ---
    cout << "Is 7 prime? " << (isPrime(7) ? "Yes" : "No") << endl;   // Yes
    cout << "Is 10 prime? " << (isPrime(10) ? "Yes" : "No") << endl; // No

    // --- Using string return value ---
    cout << "Score 85 → Grade: " << getGrade(85) << endl;  // B
    cout << "Score 55 → Grade: " << getGrade(55) << endl;  // F

    return 0;
}
// Output:
// Min: 1, Max: 7
// Is 7 prime? Yes
// Is 10 prime? No
// Score 85 → Grade: B
// Score 55 → Grade: F`,
    codeExplanation: "isPrime returns a bool with multiple return points — it returns false as soon as a divisor is found. minMax returns a pair of ints (two values). The structured binding auto [lo, hi] unpacks the pair in main() (C++17 feature). getGrade shows multiple returns based on different conditions.",
    commonMistakes: [
      "Forgetting to return a value in a non-void function — causes undefined behavior",
      "Returning a reference to a local variable — the variable is destroyed when the function ends (dangling reference)",
      "Not all code paths returning a value — the compiler may warn about this"
    ],
    practiceQuestions: [
      "Write a function that returns the absolute value of a number",
      "Return multiple values using pair<>",
      "What happens if a non-void function doesn't have a return statement?"
    ]
  },
  {
    id: "default-arguments",
    title: "Default Arguments",
    explanation: "Default arguments let you specify fallback values for parameters. If the caller doesn't provide a value, the default is used. Default parameters must be rightmost — you can't skip middle parameters.\n\nDefaults are specified in the declaration (not the definition if separate) and are evaluated at the call site.",
    syntax: `// ===== Default Arguments =====
// Default values are used when the caller doesn't provide them

// --- Basic syntax ---
void greet(string name, string greeting = "Hello") {
    // If caller doesn't provide 'greeting', it defaults to "Hello"
    cout << greeting << ", " << name << "!" << endl;
}

// --- Calling with and without defaults ---
greet("Alice");           // Uses default: "Hello, Alice!"
greet("Bob", "Hey");      // Overrides: "Hey, Bob!"

// --- Rules ---
// ✅ Defaults must be RIGHTMOST (from right to left)
void func(int a, int b = 5, int c = 10);   // OK
// ❌ This is INVALID:
// void func(int a = 5, int b, int c = 10); // Can't skip 'b'

// ✅ You can have ALL parameters with defaults:
void func(int a = 1, int b = 2, int c = 3);  // All have defaults`,
    example: `// ===== Default Arguments — Complete Example =====
#include <iostream>
using namespace std;

// --- Function with one default argument ---
// If 'exp' is not provided, it defaults to 2 (squaring)
double power(double base, int exp = 2) {
    double result = 1;                  // Start with 1
    for (int i = 0; i < exp; i++) {
        result *= base;                 // Multiply by base, exp times
    }
    return result;
}

// --- Function with two default arguments ---
// Both 'length' and 'ch' have defaults
void printLine(int length = 30, char ch = '-') {
    for (int i = 0; i < length; i++) {
        cout << ch;                     // Print the character 'length' times
    }
    cout << endl;
}

// --- Function with mixed (some default, some required) ---
void createUser(string name, string role = "student", int age = 18) {
    cout << name << " | Role: " << role << " | Age: " << age << endl;
}

int main() {
    // --- power() examples ---
    cout << "5^2 = " << power(5) << endl;       // 25 (default exp=2)
    cout << "2^10 = " << power(2, 10) << endl;   // 1024 (override exp=10)
    cout << "3^3 = " << power(3, 3) << endl;     // 27 (override exp=3)

    cout << endl;

    // --- printLine() examples ---
    printLine();            // 30 dashes (both defaults)
    printLine(20);          // 20 dashes (override length only)
    printLine(10, '*');     // 10 asterisks (override both)

    cout << endl;

    // --- createUser() examples ---
    createUser("Alice");                    // Alice | Role: student | Age: 18
    createUser("Bob", "admin");             // Bob | Role: admin | Age: 18
    createUser("Charlie", "teacher", 35);   // Charlie | Role: teacher | Age: 35

    return 0;
}
// Output:
// 5^2 = 25
// 2^10 = 1024
// 3^3 = 27
//
// ------------------------------
// --------------------
// **********
//
// Alice | Role: student | Age: 18
// Bob | Role: admin | Age: 18
// Charlie | Role: teacher | Age: 35`,
    codeExplanation: "power() defaults to squaring (exp=2). printLine() has two defaults (30 dashes). createUser() has two defaults (student, age 18). Callers can override none, some, or all defaults — but only from left to right. You cannot skip a default in the middle.",
    commonMistakes: [
      "Putting default arguments before non-default ones — defaults must be rightmost",
      "Specifying defaults in both declaration and definition — only do it in one place",
      "Trying to skip a default argument in the middle — not allowed in C++"
    ],
    practiceQuestions: [
      "Write a function with 3 parameters, last 2 having defaults",
      "Why must default parameters be rightmost?",
      "Can you have all parameters with default values?"
    ]
  },
  {
    id: "inline-functions",
    title: "Inline Functions",
    explanation: "The inline keyword suggests the compiler replace function calls with the function's actual code, reducing call overhead. It's beneficial for small, frequently called functions.\n\nModern compilers automatically inline small functions, so the keyword is mostly a hint. Inline functions must be defined in every translation unit (usually in headers).",
    syntax: `// ===== Inline Functions =====
// The 'inline' keyword suggests the compiler to REPLACE
// the function call with the actual code (copy-paste the body)

// --- Without inline (normal function call) ---
// When you call square(5), the program:
//   1. Jumps to the square function
//   2. Runs the code
//   3. Jumps back to where it was called
// This jumping has a small overhead

// --- With inline ---
// The compiler may REPLACE square(5) with (5 * 5) directly
// No jumping needed → slightly faster for tiny functions

inline int square(int x) {
    return x * x;   // This code may be "pasted" at the call site
}

// ===== When to use inline =====
// ✅ Small functions (1-3 lines)
// ✅ Functions called very frequently (in loops)
// ❌ Large functions (increases binary size)
// ❌ Recursive functions (can't be fully inlined)

// Note: Modern compilers auto-inline small functions
// The 'inline' keyword is mostly a HINT, not a command`,
    example: `// ===== Inline Functions — Complete Example =====
#include <iostream>
using namespace std;

// --- Small functions that benefit from inlining ---
inline int maxOf(int a, int b) {
    // Compiler may replace maxOf(3,7) with: (3 > 7) ? 3 : 7
    return (a > b) ? a : b;
}

inline double celsiusToF(double c) {
    // Compiler may replace celsiusToF(100) with: (100 * 9.0/5.0) + 32
    return (c * 9.0 / 5.0) + 32;
}

inline bool isPositive(int n) {
    // Compiler may replace isPositive(5) with: (5 > 0)
    return n > 0;
}

int main() {
    // --- Using inline functions ---
    cout << "Max(3, 7): " << maxOf(3, 7) << endl;         // 7
    cout << "Max(10, 2): " << maxOf(10, 2) << endl;       // 10

    cout << "100°C = " << celsiusToF(100) << "°F" << endl;  // 212°F
    cout << "0°C = " << celsiusToF(0) << "°F" << endl;      // 32°F
    cout << "37°C = " << celsiusToF(37) << "°F" << endl;    // 98.6°F

    // --- In a loop (where inlining helps most) ---
    cout << "Positive numbers: ";
    for (int i = -3; i <= 3; i++) {
        if (isPositive(i)) {       // Compiler may inline this check
            cout << i << " ";      // Only prints 1, 2, 3
        }
    }
    cout << endl;

    return 0;
}
// Output:
// Max(3, 7): 7
// Max(10, 2): 10
// 100°C = 212°F
// 0°C = 32°F
// 37°C = 98.6°F
// Positive numbers: 1 2 3`,
    codeExplanation: "All three functions are small enough to benefit from inlining. The compiler may replace the function call with the actual code, avoiding the overhead of a function call (creating stack frame, jumping, returning). In the loop, isPositive() being inlined means the check happens directly without function call overhead.",
    commonMistakes: [
      "Inlining large functions — increases binary size and may hurt cache performance",
      "Thinking inline guarantees inlining — it's just a suggestion to the compiler",
      "Defining inline functions in .cpp files instead of headers — they need to be visible everywhere they're used"
    ],
    practiceQuestions: [
      "When should you use inline functions?",
      "What are the trade-offs of inlining?",
      "Write an inline function that converts km to miles"
    ]
  },
  {
    id: "function-overloading",
    title: "Function Overloading",
    explanation: "Function overloading allows multiple functions with the same name but different parameter lists (number, type, or order of parameters). The compiler selects the correct version based on the arguments.\n\nReturn type alone doesn't distinguish overloaded functions — the parameter list must differ.",
    syntax: `// ===== Function Overloading =====
// SAME function name, DIFFERENT parameters
// The compiler picks the right version based on what you pass

// --- Overloaded by parameter TYPE ---
int add(int a, int b);          // For integers
double add(double a, double b); // For decimals

// --- Overloaded by NUMBER of parameters ---
int add(int a, int b);          // Two numbers
int add(int a, int b, int c);   // Three numbers

// ===== How the compiler chooses =====
// add(3, 4)       → calls int add(int, int)
// add(3.5, 4.2)   → calls double add(double, double)
// add(1, 2, 3)    → calls int add(int, int, int)

// ===== IMPORTANT =====
// ❌ Return type ALONE doesn't count as overloading:
// int func(int x);
// double func(int x);  // ❌ ERROR! Same parameters, different return`,
    example: `// ===== Function Overloading — Complete Example =====
#include <iostream>
using namespace std;

// --- Three overloaded "area" functions ---
// Same name, but different parameter lists

// Version 1: Square (one side length)
int area(int side) {
    // For a square, area = side × side
    return side * side;
}

// Version 2: Rectangle (length and width)
int area(int length, int width) {
    // For a rectangle, area = length × width
    return length * width;
}

// Version 3: Circle (radius as double)
double area(double radius) {
    // For a circle, area = π × r²
    return 3.14159 * radius * radius;
}

// --- Two overloaded "print" functions ---
void print(int value) {
    cout << "Integer: " << value << endl;
}

void print(string text) {
    cout << "String: " << text << endl;
}

void print(double value) {
    cout << "Double: " << value << endl;
}

int main() {
    // --- The compiler picks the right "area" based on arguments ---
    cout << "Square (5):       " << area(5) << endl;       // Calls area(int) → 25
    cout << "Rectangle (4×6):  " << area(4, 6) << endl;    // Calls area(int,int) → 24
    cout << "Circle (3.0):     " << area(3.0) << endl;     // Calls area(double) → 28.2743

    cout << endl;

    // --- The compiler picks the right "print" based on type ---
    print(42);            // Calls print(int) → "Integer: 42"
    print("Hello");       // Calls print(string) → "String: Hello"
    print(3.14);          // Calls print(double) → "Double: 3.14"

    return 0;
}
// Output:
// Square (5):       25
// Rectangle (4×6):  24
// Circle (3.0):     28.2743
//
// Integer: 42
// String: Hello
// Double: 3.14`,
    codeExplanation: "Three functions named 'area' compute areas for different shapes. The compiler picks the right one based on argument types and count: single int → square, two ints → rectangle, single double → circle. Similarly, three 'print' functions handle different types. This makes the code intuitive — one name, multiple behaviors.",
    commonMistakes: [
      "Trying to overload by return type only — doesn't work (parameter list must differ)",
      "Ambiguous calls when implicit conversions are possible — e.g., area(5.0f) could match int or double",
      "Overloading too many variants, making code hard to follow — keep it reasonable"
    ],
    practiceQuestions: [
      "Overload a print() function for int, double, and string",
      "Why can't you overload based on return type?",
      "What happens if you call area(5.0f) — float vs double?"
    ]
  },
  {
    id: "recursion",
    title: "Recursion",
    explanation: "Recursion is when a function calls itself to solve a smaller version of the same problem. Every recursive function needs a base case (stopping condition) and a recursive case that moves toward the base.\n\nRecursion is elegant for problems like factorials, Fibonacci, tree traversal, and divide-and-conquer algorithms, but can be less efficient than iteration due to stack overhead.",
    syntax: `// ===== Recursion Structure =====
// A recursive function has TWO parts:

// 1. BASE CASE — the stopping condition (prevents infinite recursion)
// 2. RECURSIVE CASE — the function calls ITSELF with a smaller problem

int factorial(int n) {
    // BASE CASE: When n reaches 1 (or 0), stop recursing
    if (n <= 1) return 1;

    // RECURSIVE CASE: n! = n × (n-1)!
    return n * factorial(n - 1);  // Calls itself with a smaller number
}

// ===== How factorial(5) works step by step =====
// factorial(5) = 5 × factorial(4)
// factorial(4) = 4 × factorial(3)
// factorial(3) = 3 × factorial(2)
// factorial(2) = 2 × factorial(1)
// factorial(1) = 1              ← BASE CASE reached!
// Now it "unwinds":
// factorial(2) = 2 × 1 = 2
// factorial(3) = 3 × 2 = 6
// factorial(4) = 4 × 6 = 24
// factorial(5) = 5 × 24 = 120  ← Final answer!`,
    example: `// ===== Recursion — Complete Example =====
#include <iostream>
using namespace std;

// --- Factorial: n! = n × (n-1) × ... × 1 ---
int factorial(int n) {
    // Base case: 0! = 1 and 1! = 1
    if (n <= 1) return 1;
    // Recursive case: n! = n × (n-1)!
    return n * factorial(n - 1);
}

// --- Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, ... ---
// Each number is the sum of the two before it
int fibonacci(int n) {
    // Base cases: fib(0) = 0, fib(1) = 1
    if (n <= 1) return n;
    // Recursive case: fib(n) = fib(n-1) + fib(n-2)
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// --- Sum of digits: 123 → 1 + 2 + 3 = 6 ---
int sumDigits(int n) {
    // Base case: single digit number
    if (n < 10) return n;
    // Recursive case: last digit + sum of remaining digits
    return (n % 10) + sumDigits(n / 10);
    // n % 10 = last digit (e.g., 123 % 10 = 3)
    // n / 10 = remaining digits (e.g., 123 / 10 = 12)
}

int main() {
    // --- Factorial ---
    cout << "5! = " << factorial(5) << endl;    // 120
    cout << "0! = " << factorial(0) << endl;    // 1

    // --- Fibonacci sequence ---
    cout << "\\nFibonacci: ";
    for (int i = 0; i < 10; i++) {
        cout << fibonacci(i) << " ";  // 0 1 1 2 3 5 8 13 21 34
    }
    cout << endl;

    // --- Sum of digits ---
    cout << "\\nSum of digits in 123: " << sumDigits(123) << endl;  // 6
    cout << "Sum of digits in 9876: " << sumDigits(9876) << endl;   // 30

    return 0;
}
// Output:
// 5! = 120
// 0! = 1
//
// Fibonacci: 0 1 1 2 3 5 8 13 21 34
//
// Sum of digits in 123: 6
// Sum of digits in 9876: 30`,
    codeExplanation: "factorial(5) calls factorial(4), which calls factorial(3), and so on until factorial(1) returns 1 (base case). Then results multiply back up: 1×2×3×4×5 = 120. Fibonacci adds two recursive calls per invocation. sumDigits extracts the last digit with %10 and recurses on the rest with /10.",
    commonMistakes: [
      "Missing the base case — causes stack overflow (infinite recursion until program crashes)",
      "Not progressing toward the base case — each recursive call must make the problem SMALLER",
      "Using naive recursion for Fibonacci — exponential time O(2^n), use memoization or iteration instead"
    ],
    practiceQuestions: [
      "Write a recursive function to compute the sum of digits",
      "Implement recursive binary search",
      "What is the time complexity of naive recursive Fibonacci?"
    ]
  }
];

export const arrayTopics: Topic[] = [
  {
    id: "1d-array",
    title: "1D Arrays",
    explanation: "An array is a collection of elements of the same type stored in contiguous memory. Elements are accessed by index starting from 0. The size must be known at compile time (for static arrays).\n\nArrays provide O(1) random access but have fixed size — use std::vector for dynamic sizing.",
    syntax: `// ===== 1D Array Declaration and Usage =====

// --- Method 1: Declare with size (values are uninitialized/garbage!) ---
int scores[5];              // Creates 5 ints, values are UNKNOWN

// --- Method 2: Declare with size AND initialize ---
int scores[5] = {85, 92, 78, 95, 88};  // All 5 values set

// --- Method 3: Let the compiler count the size ---
int scores[] = {85, 92, 78, 95, 88};   // Compiler knows size = 5

// --- Method 4: Partial initialization (rest become 0) ---
int scores[5] = {85, 92};  // → {85, 92, 0, 0, 0}
int zeros[10] = {0};        // All 10 elements are 0

// ===== Accessing Elements =====
// Arrays are 0-INDEXED: first element is at index 0
scores[0]   // First element (85)
scores[1]   // Second element (92)
scores[4]   // Last element (88)
// scores[5] ← ❌ OUT OF BOUNDS! (only 0-4 exist)

// ===== Getting Array Size =====
int size = sizeof(scores) / sizeof(scores[0]);  // Total bytes / element bytes`,
    example: `// ===== 1D Arrays — Complete Example =====
#include <iostream>
using namespace std;

int main() {
    // --- Create an array of 5 test scores ---
    int scores[5] = {85, 92, 78, 95, 88};
    int n = 5;  // Number of elements

    // --- Print all elements using a for loop ---
    cout << "===== All Scores =====" << endl;
    for (int i = 0; i < n; i++) {
        // scores[i] accesses the element at index i
        cout << "Score " << (i + 1) << ": " << scores[i] << endl;
    }

    // --- Calculate the sum and average ---
    int sum = 0;
    for (int i = 0; i < n; i++) {
        sum += scores[i];  // Add each score to sum
    }
    double average = (double)sum / n;  // Cast to double for decimal result
    cout << "\\nSum: " << sum << endl;              // 438
    cout << "Average: " << average << endl;         // 87.6

    // --- Find the maximum value ---
    int maxVal = scores[0];  // Start by assuming first element is max
    for (int i = 1; i < n; i++) {      // Start from index 1
        if (scores[i] > maxVal) {      // If this score is bigger...
            maxVal = scores[i];        // ...update maxVal
        }
    }
    cout << "Highest: " << maxVal << endl;  // 95

    // --- Find the minimum value ---
    int minVal = scores[0];
    for (int i = 1; i < n; i++) {
        if (scores[i] < minVal) {
            minVal = scores[i];
        }
    }
    cout << "Lowest: " << minVal << endl;   // 78

    // --- Modify an element ---
    scores[2] = 80;  // Change index 2 from 78 to 80
    cout << "\\nUpdated score at index 2: " << scores[2] << endl;  // 80

    return 0;
}
// Output:
// ===== All Scores =====
// Score 1: 85
// Score 2: 92
// Score 3: 78
// Score 4: 95
// Score 5: 88
//
// Sum: 438
// Average: 87.6
// Highest: 95
// Lowest: 78
//
// Updated score at index 2: 80`,
    codeExplanation: "We declare an array of 5 ints, iterate with a for loop to print each element, compute the sum for average (casting to double to avoid integer division), and find the maximum by comparing each element against the current max. Elements are accessed using 0-based indexing: scores[0] is the first, scores[4] is the last.",
    commonMistakes: [
      "Accessing out-of-bounds index — no runtime error, just undefined behavior (could crash or return garbage)",
      "Forgetting arrays are 0-indexed — first element is arr[0], NOT arr[1]",
      "Not knowing the array size — use sizeof(arr)/sizeof(arr[0]) for static arrays"
    ],
    practiceQuestions: [
      "Find the minimum element in an array",
      "Reverse an array in-place",
      "Count how many elements are above the average"
    ]
  },
  {
    id: "2d-array",
    title: "2D Arrays",
    explanation: "A 2D array is an array of arrays, forming a matrix with rows and columns. It's accessed using two indices: arr[row][col]. Memory is stored row-major in C++.\n\n2D arrays are used for matrices, grids, tables, game boards, and image processing.",
    syntax: `// ===== 2D Array Declaration =====

// --- Method 1: Declare with sizes ---
int matrix[3][4];   // 3 rows, 4 columns (values uninitialized)

// --- Method 2: Declare and initialize ---
int matrix[2][3] = {
    {1, 2, 3},      // Row 0: three columns
    {4, 5, 6}       // Row 1: three columns
};

// --- Method 3: Initialize without inner braces (works but less readable) ---
int matrix[2][3] = {1, 2, 3, 4, 5, 6};

// ===== Accessing Elements =====
matrix[0][0]   // Row 0, Column 0 → 1 (top-left)
matrix[0][2]   // Row 0, Column 2 → 3 (top-right)
matrix[1][1]   // Row 1, Column 1 → 5 (middle of row 1)

// ===== Traversing with nested loops =====
for (int i = 0; i < rows; i++) {        // Outer loop: each ROW
    for (int j = 0; j < cols; j++) {    // Inner loop: each COLUMN
        cout << matrix[i][j] << " ";    // Access element at (i, j)
    }
    cout << endl;  // New line after each row
}`,
    example: `// ===== 2D Arrays — Complete Example =====
#include <iostream>
using namespace std;

int main() {
    // --- Create a 3×3 matrix ---
    int matrix[3][3] = {
        {1, 2, 3},    // Row 0
        {4, 5, 6},    // Row 1
        {7, 8, 9}     // Row 2
    };

    // --- Print the matrix ---
    cout << "===== Matrix =====" << endl;
    for (int i = 0; i < 3; i++) {           // For each row
        for (int j = 0; j < 3; j++) {       // For each column in that row
            cout << matrix[i][j] << "\\t";   // \\t = tab for alignment
        }
        cout << endl;  // New line after each row
    }

    // --- Sum of all elements ---
    int total = 0;
    for (int i = 0; i < 3; i++) {
        for (int j = 0; j < 3; j++) {
            total += matrix[i][j];  // Add every element
        }
    }
    cout << "\\nTotal sum: " << total << endl;  // 45

    // --- Sum of main diagonal (where row == column) ---
    int diagSum = 0;
    for (int i = 0; i < 3; i++) {
        diagSum += matrix[i][i];  // Elements: [0][0], [1][1], [2][2]
        // These are: 1, 5, 9
    }
    cout << "Diagonal sum: " << diagSum << endl;  // 15

    // --- Sum of each row ---
    cout << "\\nRow sums: ";
    for (int i = 0; i < 3; i++) {
        int rowSum = 0;
        for (int j = 0; j < 3; j++) {
            rowSum += matrix[i][j];
        }
        cout << rowSum << " ";  // 6, 15, 24
    }
    cout << endl;

    return 0;
}
// Output:
// ===== Matrix =====
// 1    2    3
// 4    5    6
// 7    8    9
//
// Total sum: 45
// Diagonal sum: 15
//
// Row sums: 6 15 24`,
    codeExplanation: "A 3×3 matrix is initialized and printed using nested loops. The outer loop iterates rows (i), the inner loop iterates columns (j). The diagonal sum adds elements where row index equals column index (matrix[0][0] + matrix[1][1] + matrix[2][2] = 1 + 5 + 9 = 15). Row sums iterate each row and add all its columns.",
    commonMistakes: [
      "Swapping row and column indices — matrix[row][col] not matrix[col][row]",
      "Using the wrong loop bounds for rows vs columns — easy to mix up",
      "Forgetting that inner arrays must have specified size — int matrix[][3] is OK but int matrix[][] is not"
    ],
    practiceQuestions: [
      "Transpose a 3×3 matrix (swap rows and columns)",
      "Multiply two 2×2 matrices",
      "Find the sum of each row and column"
    ]
  },
  {
    id: "multidimensional",
    title: "Multidimensional Arrays",
    explanation: "C++ supports arrays with more than two dimensions. A 3D array can be thought of as an array of 2D matrices. While supported, arrays beyond 3D are rare and usually indicate a need for better data structures.\n\nThe syntax extends naturally: type name[d1][d2][d3]; with access via name[i][j][k].",
    syntax: `// ===== 3D Arrays =====
// Think of it as: an array of 2D matrices (layers of grids)

// --- Declaration ---
int arr3D[2][3][4];  // 2 layers, each with 3 rows and 4 columns

// --- Access ---
arr3D[layer][row][col] = value;
// arr3D[0][1][2] = 42;  // Layer 0, Row 1, Column 2

// --- Real-world analogy ---
// A school with 2 floors, 3 classrooms per floor, 4 desks per classroom
// desks[floor][classroom][desk] = studentID;

// --- Traversal: three nested loops ---
for (int i = 0; i < layers; i++) {        // Each layer
    for (int j = 0; j < rows; j++) {      // Each row in layer
        for (int k = 0; k < cols; k++) {  // Each column in row
            cout << arr3D[i][j][k];
        }
    }
}`,
    example: `// ===== 3D Array — Complete Example =====
#include <iostream>
using namespace std;

int main() {
    // --- 3D array: 2 students, 3 subjects, 2 exams each ---
    // Dimension 1 (i): which student (0=Alice, 1=Bob)
    // Dimension 2 (j): which subject (0=Math, 1=Science, 2=English)
    // Dimension 3 (k): which exam (0=Midterm, 1=Final)
    int marks[2][3][2] = {
        // Student 0 (Alice):
        {{85, 90},      // Math: Midterm=85, Final=90
         {78, 82},      // Science: Midterm=78, Final=82
         {92, 88}},     // English: Midterm=92, Final=88
        // Student 1 (Bob):
        {{75, 80},      // Math: Midterm=75, Final=80
         {88, 85},      // Science: Midterm=88, Final=85
         {90, 95}}      // English: Midterm=90, Final=95
    };

    // --- Labels for output ---
    string students[] = {"Alice", "Bob"};
    string subjects[] = {"Math", "Science", "English"};
    string exams[] = {"Midterm", "Final"};

    // --- Print all marks ---
    for (int s = 0; s < 2; s++) {          // For each student
        cout << "===== " << students[s] << " =====" << endl;
        for (int sub = 0; sub < 3; sub++) {     // For each subject
            cout << "  " << subjects[sub] << ": ";
            for (int e = 0; e < 2; e++) {       // For each exam
                cout << exams[e] << "=" << marks[s][sub][e];
                if (e < 1) cout << ", ";        // Comma between exams
            }
            cout << endl;
        }
        cout << endl;
    }

    return 0;
}
// Output:
// ===== Alice =====
//   Math: Midterm=85, Final=90
//   Science: Midterm=78, Final=82
//   English: Midterm=92, Final=88
//
// ===== Bob =====
//   Math: Midterm=75, Final=80
//   Science: Midterm=88, Final=85
//   English: Midterm=90, Final=95`,
    codeExplanation: "A 3D array stores exam marks for 2 students across 3 subjects with 2 exams each. Three nested loops iterate through each dimension: students (i), subjects (j), and exams (k). The array marks[s][sub][e] reads as: student s, subject sub, exam e.",
    commonMistakes: [
      "Getting confused with bracket order in initialization — keep the nesting clear with indentation",
      "Using too many dimensions when a struct/class would be clearer — 3D is usually the max",
      "Memory waste — multidimensional arrays allocate ALL space upfront even if most is unused"
    ],
    practiceQuestions: [
      "Create a 3D array for weekly temperatures (4 weeks, 7 days, 3 readings)",
      "When should you use a 3D array vs a vector of vectors?",
      "Calculate the total size in bytes of int arr[5][10][3]"
    ]
  },
  {
    id: "char-arrays",
    title: "Character Arrays",
    explanation: "Character arrays (C-strings) store strings as arrays of chars terminated by a null character '\\0'. They're the original C way of handling strings. The null terminator marks the end of the string.\n\nWhile std::string is preferred in modern C++, char arrays are still important for C compatibility, low-level programming, and understanding how strings work internally.",
    syntax: `// ===== Character Arrays (C-strings) =====

// --- Declaration methods ---
char str[20] = "Hello";     // Creates: {'H','e','l','l','o','\\0', ...}
                             // Auto-adds \\0 (null terminator)
                             // Size = 20, but only 6 chars used (5 + \\0)

char str[] = "Hello";       // Compiler sets size = 6 (5 chars + \\0)

char str[] = {'H','e','l','l','o','\\0'};  // Manual initialization
                                           // ⚠️ You MUST include \\0!

// ===== Important C-string functions (from <cstring>) =====
#include <cstring>
strlen(str)           // Returns length (NOT including \\0)
strcpy(dest, src)     // Copy src into dest
strcat(dest, src)     // Append src to end of dest
strcmp(str1, str2)    // Compare: returns 0 if equal
                      // ⚠️ Don't use == for C-strings! Use strcmp!`,
    example: `// ===== Character Arrays — Complete Example =====
#include <iostream>
#include <cstring>     // For strlen, strcat, strcmp, strcpy
using namespace std;

int main() {
    // --- Create character arrays ---
    char greeting[50] = "Hello";    // Size 50, holds "Hello\\0"
    char name[20];                   // Uninitialized — will fill from user

    // --- Get user input ---
    cout << "Enter your name: ";
    cin >> name;  // Reads ONE word (stops at space)

    // --- strlen: Get the length ---
    cout << "Your name has " << strlen(name) << " characters" << endl;

    // --- strcat: Concatenate (join) strings ---
    strcat(greeting, " ");      // greeting is now "Hello "
    strcat(greeting, name);     // greeting is now "Hello YourName"
    cout << greeting << endl;   // Output: Hello YourName

    // --- strcmp: Compare strings ---
    // Returns 0 if EQUAL, negative if str1 < str2, positive if str1 > str2
    if (strcmp(name, "Alice") == 0) {
        cout << "Welcome, Alice!" << endl;
    } else {
        cout << "You're not Alice, but welcome anyway!" << endl;
    }

    // --- strcpy: Copy one string to another ---
    char copy[50];
    strcpy(copy, greeting);     // copy now has same content as greeting
    cout << "Copy: " << copy << endl;

    // --- ⚠️ Why you can't use == for C-strings ---
    char a[] = "hello";
    char b[] = "hello";
    // a == b compares ADDRESSES (memory locations), not content!
    // They're at different addresses, so a == b is FALSE
    // Use strcmp(a, b) == 0 to compare CONTENT

    return 0;
}`,
    codeExplanation: "We use C-string functions from <cstring>: strlen returns length (without counting \\0), strcat concatenates (appends one string to another), strcmp compares content (returns 0 if equal), and strcpy copies. The char array must be large enough to hold the result plus the null terminator. Never use == to compare C-strings — it compares memory addresses, not content.",
    commonMistakes: [
      "Not leaving space for the null terminator \\0 — causes buffer overflow",
      "Using == to compare C-strings — it compares pointers (addresses), not content. Use strcmp instead",
      "Buffer overflow from strcpy/strcat without checking destination size — can corrupt memory"
    ],
    practiceQuestions: [
      "Write a function to count vowels in a char array",
      "Manually reverse a C-string in place",
      "Why is strcmp() needed instead of == for C-strings?"
    ]
  },
  {
    id: "strings",
    title: "C++ Strings",
    explanation: "std::string is C++'s string class that provides dynamic sizing, operator overloading (+, ==, <), and many member functions. It's safer and easier than char arrays.\n\nStrings automatically manage memory, grow as needed, and support comparison with == directly.",
    syntax: `// ===== C++ String (std::string) =====
#include <string>  // Required for string type

// --- Creating strings ---
string s1 = "Hello";              // Initialize with text
string s2("World");               // Another way to initialize
string s3;                        // Empty string ""
string s4(5, '*');                 // "*****" (5 copies of '*')

// --- Common operations ---
s1 + " " + s2      // Concatenation: "Hello World"
s1 == s2            // Comparison: false (unlike C-strings, == works!)
s1 < s2             // Alphabetical comparison: true ("Hello" < "World")
s1[0]               // Access character: 'H'
s1.length()         // String length: 5 (same as s1.size())

// --- Useful member functions ---
s1.substr(0, 3)     // Substring: "Hel" (start at 0, length 3)
s1.find("ll")       // Find position: 2 (index where "ll" starts)
s1.replace(0,1,"J") // Replace: "Jello" (at pos 0, replace 1 char)
s1.insert(5,"!")     // Insert: "Hello!" (insert at position 5)
s1.erase(0, 1)      // Erase: "ello" (erase 1 char at position 0)
s1.empty()           // Check if empty: false
s1.clear()           // Make it empty: ""`,
    example: `// ===== C++ Strings — Complete Example =====
#include <iostream>
#include <string>      // For string type
using namespace std;

int main() {
    // --- Create and concatenate strings ---
    string first = "John";
    string last = "Doe";
    string full = first + " " + last;  // "John Doe" (+ joins strings)

    cout << "Full name: " << full << endl;              // John Doe
    cout << "Length: " << full.length() << endl;         // 8
    cout << "First character: " << full[0] << endl;      // J
    cout << "Last character: " << full[full.length()-1] << endl;  // e

    // --- Substring: extract part of a string ---
    string firstName = full.substr(0, 4);  // Start at 0, take 4 chars
    cout << "Substring: " << firstName << endl;  // John

    // --- Find and replace ---
    size_t pos = full.find("Doe");      // Find where "Doe" starts
    if (pos != string::npos) {          // string::npos = "not found"
        full.replace(pos, 3, "Smith");  // Replace 3 chars at pos with "Smith"
    }
    cout << "After replace: " << full << endl;   // John Smith

    // --- Compare strings (== works with std::string!) ---
    if (first == "John") {
        cout << "It's John!" << endl;   // This prints
    }

    // --- String input ---
    string city;
    cout << "\\nEnter your city: ";
    getline(cin, city);  // getline reads the WHOLE line (including spaces)
    cout << "You live in: " << city << endl;

    return 0;
}`,
    codeExplanation: "Strings are concatenated with +, compared with == (unlike C-strings!), accessed with [] for individual characters, and manipulated with methods like substr() (extract part), find() (search), and replace() (modify). string::npos is a special constant meaning 'not found'. getline reads entire lines including spaces.",
    commonMistakes: [
      "Forgetting #include <string> — may work on some compilers but not all",
      "Using cin >> for strings with spaces — it stops at the first space, use getline instead",
      "Index out of bounds — string[i] doesn't do bounds checking, use .at(i) for safety"
    ],
    practiceQuestions: [
      "Check if a string is a palindrome",
      "Count the number of words in a sentence",
      "Convert a string to uppercase without toupper library"
    ]
  },
  {
    id: "string-functions",
    title: "String Functions",
    explanation: "C++ strings provide many built-in functions for manipulation: length()/size(), substr(), find(), replace(), insert(), erase(), compare(), c_str(), stoi(), to_string(), and more.\n\nThe <algorithm> header adds transform(), reverse(), and sort() for strings. These functions make text processing straightforward.",
    syntax: `// ===== Essential String Functions =====
#include <string>
#include <algorithm>  // For transform, reverse, sort

string s = "Hello, World!";

// --- Information functions ---
s.length()              // 13 — number of characters
s.size()                // 13 — same as length()
s.empty()               // false — is the string empty?

// --- Extraction ---
s.substr(7, 5)          // "World" — start at index 7, take 5 chars
s[0]                    // 'H' — character at index 0
s.at(0)                 // 'H' — same but with bounds checking

// --- Searching ---
s.find("World")         // 7 — index where "World" starts
s.find("xyz")           // string::npos — means "not found"
s.rfind("l")            // 10 — find LAST occurrence

// --- Modification ---
s.replace(7, 5, "C++")  // "Hello, C++!" — replace 5 chars at pos 7
s.insert(5, "!!!")       // Insert "!!!" at position 5
s.erase(5, 3)           // Remove 3 chars starting at position 5

// --- Conversion ---
stoi("42")              // 42 — string to integer
stod("3.14")            // 3.14 — string to double
to_string(42)           // "42" — number to string`,
    example: `// ===== String Functions — Complete Example =====
#include <iostream>
#include <string>
#include <algorithm>   // For reverse, transform
using namespace std;

int main() {
    string s = "Hello, World!";

    // --- Reverse a string ---
    string rev = s;                          // Make a copy
    reverse(rev.begin(), rev.end());         // Reverse the copy in-place
    cout << "Original: " << s << endl;       // Hello, World!
    cout << "Reversed: " << rev << endl;     // !dlroW ,olleH

    // --- Convert to UPPERCASE ---
    string upper = s;
    transform(upper.begin(), upper.end(),    // Source range
              upper.begin(),                  // Destination
              ::toupper);                     // Function to apply to each char
    cout << "Uppercase: " << upper << endl;  // HELLO, WORLD!

    // --- Convert to lowercase ---
    string lower = s;
    transform(lower.begin(), lower.end(), lower.begin(), ::tolower);
    cout << "Lowercase: " << lower << endl;  // hello, world!

    // --- Number ↔ String conversion ---
    string numStr = "42";
    int num = stoi(numStr) + 8;              // String → int, then add 8
    cout << "42 + 8 = " << to_string(num) << endl;  // "50"

    // --- Count a specific character ---
    int count = 0;
    for (char c : s) {            // Range-based for loop
        if (c == 'l') count++;    // Count every 'l'
    }
    cout << "'l' appears " << count << " times" << endl;  // 3

    // --- Check if string contains a substring ---
    if (s.find("World") != string::npos) {
        cout << "Contains 'World'" << endl;  // Yes!
    }

    return 0;
}
// Output:
// Original: Hello, World!
// Reversed: !dlroW ,olleH
// Uppercase: HELLO, WORLD!
// Lowercase: hello, world!
// 42 + 8 = 50
// 'l' appears 3 times
// Contains 'World'`,
    codeExplanation: "reverse() reverses a string in-place. transform with ::toupper/::tolower converts case character by character. stoi converts a string to integer, to_string converts back. Range-based for loop iterates each character for counting. find() with string::npos checks if a substring exists.",
    commonMistakes: [
      "Using stoi on non-numeric strings — throws an exception (program crashes if not caught)",
      "Forgetting that find() returns string::npos (not -1) when the substring is not found",
      "Modifying a string while iterating over it with index — can cause unexpected behavior"
    ],
    practiceQuestions: [
      "Extract the domain from an email address using string functions",
      "Implement a function that capitalizes the first letter of each word",
      "Convert a comma-separated string into individual values"
    ]
  }
];

export const pointerTopics: Topic[] = [
  {
    id: "pointer-basics",
    title: "Pointer Basics",
    explanation: "A pointer is a variable that stores the memory address of another variable. The & operator gets a variable's address, and the * operator dereferences a pointer (accesses the value at that address).\n\nPointers are fundamental to C++ — they enable dynamic memory, pass-by-reference, data structures, and polymorphism.",
    syntax: `// ===== Pointer Basics =====

// Every variable is stored somewhere in memory (at an address)
int x = 10;         // x is at some address, say 0x7ffc1234

// --- & (Address-of operator): Gets the ADDRESS of a variable ---
cout << &x;          // Prints the memory address of x (e.g., 0x7ffc1234)

// --- Declaring a pointer ---
// A pointer is a variable that STORES an address
int* ptr = &x;       // ptr now holds the address of x
// Read as: "ptr is a pointer to int, pointing to x"

// --- * (Dereference operator): Gets the VALUE at an address ---
cout << ptr;          // Prints the address stored in ptr
cout << *ptr;         // Prints the value AT that address → 10
                      // "Go to the address in ptr and get the value there"

// --- Modifying through a pointer ---
*ptr = 20;            // Changes x's value to 20 (through the pointer!)
// x is now 20

// ===== Key Operators Summary =====
// &x   → "What is x's address?"    (Address-of)
// *ptr → "What value is at ptr?"    (Dereference)
// ptr  → "What address does ptr hold?"`,
    example: `// ===== Pointer Basics — Complete Example =====
#include <iostream>
using namespace std;

int main() {
    // --- Create a variable ---
    int x = 42;

    // --- Create a pointer that points to x ---
    int* ptr = &x;    // ptr stores the ADDRESS of x

    // --- Display values and addresses ---
    cout << "===== Understanding Pointers =====" << endl;
    cout << "Value of x:          " << x << endl;      // 42
    cout << "Address of x (&x):   " << &x << endl;     // 0x7ffc... (some address)
    cout << "ptr holds (address):  " << ptr << endl;    // Same address as &x
    cout << "Value at ptr (*ptr):  " << *ptr << endl;   // 42 (value AT that address)

    // --- Modify x THROUGH the pointer ---
    *ptr = 100;    // *ptr means "the value at the address ptr holds"
                   // This changes x because ptr points to x!
    cout << "\\nAfter *ptr = 100:" << endl;
    cout << "x is now: " << x << endl;         // 100 (changed!)
    cout << "*ptr is:  " << *ptr << endl;      // 100 (same as x)

    // --- Point to a different variable ---
    int y = 200;
    ptr = &y;      // Now ptr points to y instead of x
    cout << "\\nAfter ptr = &y:" << endl;
    cout << "ptr now points to y: " << *ptr << endl;   // 200
    cout << "x is still: " << x << endl;                // 100 (unchanged)

    // --- Null pointer (points to nothing) ---
    int* nullPtr = nullptr;    // Good practice: initialize to nullptr
    if (nullPtr == nullptr) {
        cout << "\\nnullPtr points to nothing (safe!)" << endl;
    }

    return 0;
}
// Output:
// ===== Understanding Pointers =====
// Value of x:          42
// Address of x (&x):   0x7ffc... (some memory address)
// ptr holds (address):  0x7ffc... (same address)
// Value at ptr (*ptr):  42
//
// After *ptr = 100:
// x is now: 100
// *ptr is:  100
//
// After ptr = &y:
// ptr now points to y: 200
// x is still: 100
//
// nullPtr points to nothing (safe!)`,
    codeExplanation: "ptr stores the address of x. *ptr accesses x's value (dereferencing — 'go to the address and get the value'). Modifying *ptr changes x directly because they refer to the same memory location. We can reassign ptr to point to a different variable y. nullptr is a safe 'points to nothing' value.",
    commonMistakes: [
      "Dereferencing an uninitialized pointer — accessing random memory, undefined behavior",
      "Confusing * in declaration (int* ptr = 'ptr is a pointer') with * in usage (*ptr = 'value at address')",
      "Forgetting that ptr++ moves to the next memory location (next element), not +1 to the value"
    ],
    practiceQuestions: [
      "Create a pointer to a double and modify the value through it",
      "What is a null pointer and how do you create one?",
      "Swap two variables using pointers"
    ]
  },
  {
    id: "pointer-arithmetic",
    title: "Pointer Arithmetic",
    explanation: "Pointer arithmetic allows adding/subtracting integers to/from pointers. ptr + 1 moves to the next element (not next byte — it moves by sizeof(type) bytes). This is how arrays work internally.\n\nYou can also subtract two pointers of the same type to get the number of elements between them.",
    syntax: `// ===== Pointer Arithmetic =====

int arr[5] = {10, 20, 30, 40, 50};
int* ptr = arr;    // ptr points to arr[0] (first element)

// --- Adding to a pointer ---
// ptr + 1 does NOT move 1 byte — it moves to the NEXT element
// For int (4 bytes), ptr + 1 moves 4 bytes forward
ptr + 0   // Points to arr[0] → 10
ptr + 1   // Points to arr[1] → 20 (moved 4 bytes)
ptr + 2   // Points to arr[2] → 30 (moved 8 bytes)

// --- Dereferencing arithmetic ---
*(ptr + 0)   // Value at arr[0] → 10
*(ptr + 1)   // Value at arr[1] → 20
*(ptr + i)   // Value at arr[i] — same as arr[i]!

// --- Increment/Decrement ---
ptr++        // Move ptr to next element
ptr--        // Move ptr to previous element
ptr += 3     // Jump forward 3 elements

// ===== Key Insight =====
// arr[i]  is EXACTLY the same as  *(arr + i)
// &arr[i] is EXACTLY the same as  (arr + i)`,
    example: `// ===== Pointer Arithmetic — Complete Example =====
#include <iostream>
using namespace std;

int main() {
    int arr[] = {10, 20, 30, 40, 50};
    int* ptr = arr;  // ptr points to first element (arr[0])

    // --- Traverse array using pointer arithmetic ---
    cout << "===== Array via Pointer Arithmetic =====" << endl;
    for (int i = 0; i < 5; i++) {
        // *(ptr + i) means: "go to the address (ptr + i elements) and get the value"
        cout << "*(ptr+" << i << ") = " << *(ptr + i);
        cout << "  at address " << (ptr + i) << endl;
    }

    // --- Using pointer increment ---
    cout << "\\n===== Pointer Increment =====" << endl;
    ptr = arr;                                    // Reset to start
    cout << "*ptr = " << *ptr << endl;            // 10 (arr[0])

    ptr++;  // Move to next element
    cout << "After ptr++: *ptr = " << *ptr << endl;  // 20 (arr[1])

    ptr += 2;  // Jump forward 2 elements
    cout << "After ptr+=2: *ptr = " << *ptr << endl;  // 40 (arr[3])

    ptr--;  // Move back one element
    cout << "After ptr--: *ptr = " << *ptr << endl;   // 30 (arr[2])

    // --- Pointer subtraction: distance between pointers ---
    int* start = &arr[0];
    int* end = &arr[4];
    cout << "\\nDistance: " << (end - start) << " elements" << endl;  // 4

    return 0;
}
// Output:
// ===== Array via Pointer Arithmetic =====
// *(ptr+0) = 10  at address 0x...
// *(ptr+1) = 20  at address 0x...+4
// *(ptr+2) = 30  at address 0x...+8
// *(ptr+3) = 40  at address 0x...+12
// *(ptr+4) = 50  at address 0x...+16
//
// ===== Pointer Increment =====
// *ptr = 10
// After ptr++: *ptr = 20
// After ptr+=2: *ptr = 40
// After ptr--: *ptr = 30
//
// Distance: 4 elements`,
    codeExplanation: "The pointer ptr starts at arr[0]. Adding i moves it i elements forward (i × sizeof(int) bytes, not i bytes). ptr++ moves to the next element, ptr += 2 jumps forward 2 elements. *(ptr + i) is equivalent to arr[i]. Subtracting two pointers gives the number of elements between them.",
    commonMistakes: [
      "Assuming ptr + 1 moves by one byte — it moves by sizeof(type) bytes (4 for int)",
      "Going past array bounds with pointer arithmetic — no error, just undefined behavior",
      "Performing arithmetic on void pointers — not allowed (compiler doesn't know the element size)"
    ],
    practiceQuestions: [
      "Traverse and print an array using only pointer arithmetic (no [] operator)",
      "What is the difference between ptr++ and (*ptr)++?",
      "How many bytes does ptr + 3 actually move for an int pointer?"
    ]
  },
  {
    id: "pointers-and-arrays",
    title: "Pointers & Arrays",
    explanation: "In C++, an array name decays to a pointer to its first element. This means arr is equivalent to &arr[0], and arr[i] is equivalent to *(arr + i). This is why arrays are passed to functions as pointers.\n\nHowever, arrays and pointers are not identical — sizeof(arr) gives the array size, but sizeof(ptr) gives the pointer size.",
    syntax: `// ===== Arrays and Pointers Connection =====

int arr[5] = {1, 2, 3, 4, 5};
int* ptr = arr;  // arr "decays" to a pointer to its first element
                 // Same as: int* ptr = &arr[0];

// ===== Equivalences =====
// These pairs do EXACTLY the same thing:
arr[i]      // ←→  *(arr + i)     // Access element at index i
&arr[i]     // ←→  arr + i        // Address of element at index i
ptr[i]      // ←→  *(ptr + i)     // Works with pointers too!

// ===== Key Difference: sizeof =====
sizeof(arr)  // → 20 bytes (5 ints × 4 bytes each) — TOTAL array size
sizeof(ptr)  // → 8 bytes (on 64-bit system) — just the pointer itself

// ===== Why this matters: Functions =====
// When you pass an array to a function, it "decays" to a pointer
// The function receives a pointer, NOT a copy of the array
void func(int arr[], int size);   // arr is actually a pointer!
void func(int* arr, int size);    // Exactly the same thing`,
    example: `// ===== Pointers & Arrays — Complete Example =====
#include <iostream>
using namespace std;

// This function receives the array as a POINTER
// It does NOT get a copy of the array — just a pointer to it
void printArray(int* arr, int size) {
    cout << "Array: ";
    for (int i = 0; i < size; i++) {
        cout << arr[i] << " ";  // Can use [] on a pointer!
    }
    cout << endl;
}

// Function that modifies the original array (because it's a pointer)
void doubleAll(int* arr, int size) {
    for (int i = 0; i < size; i++) {
        arr[i] *= 2;  // Modifies the ORIGINAL array!
    }
}

int main() {
    int arr[] = {5, 3, 8, 1, 9};
    int size = sizeof(arr) / sizeof(arr[0]);  // 20 / 4 = 5 elements

    // --- Print array via function ---
    printArray(arr, size);  // Array "decays" to pointer when passed

    // --- Show pointer and array equivalence ---
    int* ptr = arr;  // ptr points to arr[0]
    cout << "\\n===== Equivalence =====" << endl;
    cout << "arr[2]     = " << arr[2] << endl;      // 8
    cout << "*(ptr+2)   = " << *(ptr + 2) << endl;  // 8
    cout << "ptr[2]     = " << ptr[2] << endl;       // 8
    cout << "*(arr+2)   = " << *(arr + 2) << endl;   // 8
    // All four print 8 — they're all equivalent!

    // --- sizeof difference ---
    cout << "\\n===== sizeof Difference =====" << endl;
    cout << "sizeof(arr) = " << sizeof(arr) << " bytes (whole array)" << endl;  // 20
    cout << "sizeof(ptr) = " << sizeof(ptr) << " bytes (just the pointer)" << endl;  // 8

    // --- Modify original array through function ---
    doubleAll(arr, size);
    cout << "\\nAfter doubling: ";
    printArray(arr, size);  // 10 6 16 2 18 (original is modified!)

    return 0;
}
// Output:
// Array: 5 3 8 1 9
//
// ===== Equivalence =====
// arr[2]     = 8
// *(ptr+2)   = 8
// ptr[2]     = 8
// *(arr+2)   = 8
//
// ===== sizeof Difference =====
// sizeof(arr) = 20 bytes (whole array)
// sizeof(ptr) = 8 bytes (just the pointer)
//
// After doubling: Array: 10 6 16 2 18`,
    codeExplanation: "The function receives the array as a pointer — arr[2], *(ptr+2), ptr[2], and *(arr+2) all access the same element. sizeof(arr) gives the total array size in bytes (5 × 4 = 20), but sizeof(ptr) gives the pointer size (8 on 64-bit). doubleAll modifies the original array because it receives a pointer, not a copy.",
    commonMistakes: [
      "Using sizeof on a pointer thinking it gives array size — it only gives the pointer size (8 bytes)",
      "Returning a local array from a function — the array is destroyed when the function ends, leaving a dangling pointer",
      "Confusing array of pointers (int* arr[]) with pointer to array (int (*arr)[])"
    ],
    practiceQuestions: [
      "Pass an array to a function and find its maximum element",
      "What is sizeof(arr) vs sizeof(ptr) for int arr[10]?",
      "Write a function that reverses an array using pointers"
    ]
  },
  {
    id: "double-pointer",
    title: "Double Pointer",
    explanation: "A double pointer (pointer to pointer) stores the address of another pointer. Declared as type** pp. It's used for 2D dynamic arrays, modifying a pointer inside a function, and command-line arguments (char** argv).\n\nDereferencing once (*pp) gives the inner pointer, twice (**pp) gives the actual value.",
    syntax: `// ===== Double Pointer (Pointer to Pointer) =====

int x = 5;
int* p = &x;       // p points to x
int** pp = &p;      // pp points to p (which points to x)

// ===== Dereferencing levels =====
// pp   → address of p (where p is stored in memory)
// *pp  → value of p = address of x (one level of dereferencing)
// **pp → value of x = 5 (two levels of dereferencing)

cout << pp;     // Address of p
cout << *pp;    // Same as p → address of x
cout << **pp;   // Same as *p → value of x → 5

// ===== Visual representation =====
//  pp ──→ p ──→ x
//  (holds   (holds   (holds
//   &p)      &x)      5)

// ===== Why use double pointers? =====
// 1. To modify a pointer inside a function
// 2. To create dynamic 2D arrays
// 3. Command-line arguments: int main(int argc, char** argv)`,
    example: `// ===== Double Pointer — Complete Example =====
#include <iostream>
using namespace std;

// --- This function modifies the CALLER'S pointer ---
// Without **, it would only modify a copy of the pointer
void allocate(int** ptr) {
    // *ptr = the caller's pointer variable
    // We're assigning a new address to the caller's pointer
    *ptr = new int(42);  // Allocate memory and store address in caller's ptr
}

int main() {
    // --- Basic double pointer ---
    int x = 10;
    int* p = &x;       // p points to x
    int** pp = &p;      // pp points to p

    cout << "===== Double Pointer Basics =====" << endl;
    cout << "x     = " << x << endl;        // 10
    cout << "*p    = " << *p << endl;       // 10 (value at p → x)
    cout << "**pp  = " << **pp << endl;     // 10 (value at *pp → p → x)

    // --- Modify x through double pointer ---
    **pp = 20;  // Same as *p = 20, same as x = 20
    cout << "\\nAfter **pp = 20:" << endl;
    cout << "x = " << x << endl;            // 20 (changed!)

    // --- Use double pointer to modify a pointer in a function ---
    cout << "\\n===== Modifying Pointer via Function =====" << endl;
    int* dynPtr = nullptr;     // Currently points to nothing
    allocate(&dynPtr);          // Pass ADDRESS of the pointer (&dynPtr → int**)
    cout << "Dynamically allocated: " << *dynPtr << endl;  // 42
    delete dynPtr;              // Don't forget to free the memory!

    return 0;
}
// Output:
// ===== Double Pointer Basics =====
// x     = 10
// *p    = 10
// **pp  = 10
//
// After **pp = 20:
// x = 20
//
// ===== Modifying Pointer via Function =====
// Dynamically allocated: 42`,
    codeExplanation: "pp points to p, which points to x. **pp accesses x through two levels of dereferencing. Changing **pp changes x. The allocate function takes int** (pointer to a pointer) so it can modify the caller's pointer — without **, it would only modify a local copy. After allocation, dynPtr points to heap memory containing 42.",
    commonMistakes: [
      "Dereferencing the wrong number of times — *pp gives the inner pointer, **pp gives the value",
      "Memory leaks when using double pointers for dynamic allocation — always delete what you new",
      "Confusing int** (pointer to pointer) with int*[] (array of pointers) — different things"
    ],
    practiceQuestions: [
      "Create and access a value through a triple pointer (int***)",
      "Use a double pointer to create a dynamic 2D array",
      "Why does the allocate function need int** instead of int*?"
    ]
  },
  {
    id: "dynamic-memory",
    title: "Dynamic Memory Allocation",
    explanation: "Dynamic memory is allocated at runtime using 'new' (allocates on heap) and freed with 'delete'. Unlike stack variables, heap memory persists until explicitly freed. Use new[] and delete[] for arrays.\n\nAlways pair new with delete and new[] with delete[]. Memory leaks occur when allocated memory is never freed. Modern C++ prefers smart pointers over raw new/delete.",
    syntax: `// ===== Dynamic Memory Allocation =====
// Stack memory: automatic, limited, destroyed when scope ends
// Heap memory: manual, large, persists until YOU free it

// --- Allocating single variable on heap ---
int* p = new int;          // Allocate one int (uninitialized)
int* p = new int(42);      // Allocate and initialize to 42
*p = 100;                  // Modify the value

// --- Allocating dynamic array on heap ---
int* arr = new int[n];     // Array of n ints (n can be a variable!)
arr[0] = 10;               // Use like a normal array
arr[1] = 20;

// --- Freeing memory (MUST DO when done!) ---
delete p;        // Free a single variable
delete[] arr;    // Free an array (NOTE: use delete[], not delete!)

// ===== Why dynamic memory? =====
// 1. Size determined at RUNTIME (int arr[n] doesn't work in standard C++)
// 2. Memory persists beyond function scope
// 3. Larger allocations (stack is limited, typically ~1-8 MB)

// ===== Golden Rules =====
// ✅ Every new must have a matching delete
// ✅ Every new[] must have a matching delete[]
// ❌ Never mix: delete on new[], or delete[] on new`,
    example: `// ===== Dynamic Memory — Complete Example =====
#include <iostream>
using namespace std;

int main() {
    // --- Dynamic single variable ---
    int* numPtr = new int(42);    // Allocate int on heap, set to 42
    cout << "Value: " << *numPtr << endl;  // 42
    delete numPtr;                 // Free when done!
    // numPtr is now a "dangling pointer" — don't use it!

    // --- Dynamic array (size determined at runtime) ---
    int n;
    cout << "\\nHow many numbers? ";
    cin >> n;

    int* arr = new int[n];  // Allocate n ints on heap

    // Fill the array
    for (int i = 0; i < n; i++) {
        arr[i] = i * 10;  // 0, 10, 20, 30, ...
    }

    // Print the array
    cout << "Array: ";
    for (int i = 0; i < n; i++) {
        cout << arr[i] << " ";
    }
    cout << endl;

    // Calculate sum
    int sum = 0;
    for (int i = 0; i < n; i++) {
        sum += arr[i];
    }
    cout << "Sum: " << sum << endl;

    delete[] arr;  // Free the array when done! (use delete[], not delete)

    // --- Dynamic 2D array ---
    cout << "\\n===== Dynamic 2D Array =====" << endl;
    int rows = 3, cols = 4;

    // Step 1: Allocate array of row pointers
    int** matrix = new int*[rows];
    // Step 2: Allocate each row
    for (int i = 0; i < rows; i++) {
        matrix[i] = new int[cols];
        for (int j = 0; j < cols; j++) {
            matrix[i][j] = i * cols + j;  // Fill with values
        }
    }

    // Print 2D array
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            cout << matrix[i][j] << "\\t";
        }
        cout << endl;
    }

    // Step 3: Free each row, then the row pointer array
    for (int i = 0; i < rows; i++) {
        delete[] matrix[i];   // Free each row
    }
    delete[] matrix;          // Free the array of pointers

    return 0;
}`,
    codeExplanation: "new int(42) allocates an int on the heap initialized to 42. new int[n] allocates a dynamic array of n ints (n can be determined at runtime). delete frees single allocations, delete[] frees arrays. The 2D array example shows allocating rows of pointers, then columns for each row. Freeing reverses: delete each row first, then the row array.",
    commonMistakes: [
      "Forgetting delete/delete[] — causes memory leak (memory is never returned to the system)",
      "Using delete instead of delete[] for arrays — undefined behavior (may crash or corrupt memory)",
      "Accessing memory after deleting it — dangling pointer (the memory may have been reused)"
    ],
    practiceQuestions: [
      "Create a dynamic array, fill it from user input, and find the average",
      "What is the difference between stack and heap memory?",
      "Allocate a dynamic 2D array and then properly free it"
    ]
  }
];
