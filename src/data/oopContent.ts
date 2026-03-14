import { Topic } from "./types";

export const oopTopics: Topic[] = [
  {
    id: "oop-concepts",
    title: "OOP Concepts Overview",
    explanation: "Object-Oriented Programming organizes code around objects that contain data (attributes) and behavior (methods). The four pillars are: Encapsulation (bundling data with methods), Abstraction (hiding complexity), Inheritance (deriving new classes from existing ones), and Polymorphism (one interface, many forms).\n\nOOP models real-world entities, making code modular, reusable, and maintainable.",
    syntax: `// ===== Four Pillars of OOP =====

// --- 1. ENCAPSULATION ---
// Bundle data + methods together, control access with private/public
class MyClass {
private:
    int data;          // Hidden data (only the class can access this)
public:
    void setData(int d) { data = d; }  // Controlled access (public method)
    int getData() { return data; }      // Read the hidden data safely
};

// --- 2. ABSTRACTION ---
// Hide complex details, show only what's needed (the "interface")
class Shape {
public:
    virtual double area() = 0;  // Pure virtual = "you MUST implement this"
    // Shape is ABSTRACT — can't create Shape objects directly
    // But derived classes (Circle, Rectangle) MUST define area()
};

// --- 3. INHERITANCE ---
// Create new classes from existing ones (reuse + extend)
class Animal { };                    // Base class (parent)
class Dog : public Animal { };      // Derived class (child) — IS-A Animal

// --- 4. POLYMORPHISM ---
// One interface, many forms — call the RIGHT version at runtime
Animal* pet = new Dog();   // Base pointer, derived object
pet->speak();              // Calls DOG's speak(), not Animal's!
// This is "runtime polymorphism" via virtual functions`,
    example: `// ===== All Four Pillars in One Example =====
#include <iostream>
using namespace std;

// --- ABSTRACTION + INHERITANCE: Base class with virtual function ---
class Animal {
protected:
    string name;   // 'protected' = accessible by derived classes
public:
    // Constructor: initializes the name
    Animal(string n) : name(n) {}

    // Virtual function: CAN be overridden by derived classes
    // This enables POLYMORPHISM
    virtual void speak() {
        cout << name << " makes a sound" << endl;
    }

    // Virtual destructor: ensures proper cleanup through base pointers
    virtual ~Animal() {}
};

// --- INHERITANCE: Dog "is-a" Animal ---
class Dog : public Animal {
public:
    // Call the parent constructor to initialize 'name'
    Dog(string n) : Animal(n) {}

    // OVERRIDE: Dog provides its own version of speak()
    void speak() override {
        cout << name << " says Woof!" << endl;
    }
};

// --- INHERITANCE: Cat "is-a" Animal ---
class Cat : public Animal {
public:
    Cat(string n) : Animal(n) {}

    void speak() override {
        cout << name << " says Meow!" << endl;
    }
};

int main() {
    // --- POLYMORPHISM: Base pointer, derived objects ---
    // We use Animal* but the actual objects are Dog and Cat
    Animal* pets[] = {
        new Dog("Buddy"),   // Animal* pointing to Dog
        new Cat("Whiskers"), // Animal* pointing to Cat
        new Dog("Rex")       // Animal* pointing to Dog
    };

    // The CORRECT speak() is called based on actual object type!
    for (int i = 0; i < 3; i++) {
        pets[i]->speak();   // Polymorphic call
        delete pets[i];     // Clean up
    }

    return 0;
}
// Output:
// Buddy says Woof!
// Whiskers says Meow!
// Rex says Woof!`,
    codeExplanation: "Animal is a base class with a virtual speak() method. Dog and Cat inherit from Animal and override speak() with their own versions. Through base class pointers (Animal*), the correct derived version is called at runtime — this is polymorphism. Protected members are accessible by derived classes but not from outside.",
    commonMistakes: [
      "Confusing the four OOP pillars — each has a distinct purpose and implementation",
      "Creating classes for everything — sometimes simple functions are better",
      "Not using virtual for polymorphism — without it, the base version is always called"
    ],
    practiceQuestions: [
      "Explain the four pillars of OOP with real-world examples",
      "When should you use OOP vs procedural programming?",
      "Design a class hierarchy for a shape system"
    ]
  },
  {
    id: "class-and-object",
    title: "Class & Object",
    explanation: "A class is a blueprint defining attributes (member variables) and behaviors (member functions). An object is an instance of a class. Classes have access specifiers: public (accessible everywhere), private (class only), and protected (class + derived).\n\nBy default, class members are private. Use public for the interface and private for internal data.",
    syntax: `// ===== Class Definition =====
class ClassName {
private:
    // Private members — only accessible INSIDE the class
    int secretData;         // Other code can't touch this directly

public:
    // Public members — accessible from ANYWHERE
    void setData(int d) {   // "Setter" — controlled way to modify data
        secretData = d;
    }
    int getData() {          // "Getter" — controlled way to read data
        return secretData;
    }

protected:
    // Protected members — accessible by this class AND derived classes
    // Not accessible from outside
    int inheritableData;
};

// ===== Creating Objects =====
ClassName obj;          // Create an object (instance) of ClassName
obj.setData(42);        // Call public method using dot (.) operator
int val = obj.getData(); // val = 42

// ===== Access Specifier Summary =====
// private:   Only the class itself can access (DEFAULT for class)
// public:    Anyone can access
// protected: Class + derived classes can access
// Note: struct defaults to public, class defaults to private`,
    example: `// ===== Class & Object — Complete Example =====
#include <iostream>
using namespace std;

class Student {
private:
    // These are PRIVATE — can only be accessed through public methods
    string name;
    int age;
    double gpa;

public:
    // --- Setter: Controlled way to set all data at once ---
    void setInfo(string n, int a, double g) {
        name = n;
        age = a;
        // Validation: GPA must be between 0 and 4
        if (g >= 0 && g <= 4.0) {
            gpa = g;
        } else {
            cout << "Invalid GPA! Setting to 0." << endl;
            gpa = 0;
        }
    }

    // --- Display: Print all student info ---
    void display() {
        cout << "Name: " << name
             << ", Age: " << age
             << ", GPA: " << gpa << endl;
    }

    // --- Getter: Return the GPA value ---
    double getGPA() { return gpa; }

    // --- Check if student is on honor roll ---
    bool isHonorRoll() {
        return gpa >= 3.5;  // true if GPA is 3.5 or higher
    }
};

int main() {
    // --- Create objects (instances of Student) ---
    Student s1, s2, s3;   // Three separate Student objects

    // --- Set their data using the public method ---
    s1.setInfo("Alice", 20, 3.8);
    s2.setInfo("Bob", 22, 3.5);
    s3.setInfo("Charlie", 19, 2.9);

    // --- Display each student ---
    cout << "===== Student Records =====" << endl;
    s1.display();   // Name: Alice, Age: 20, GPA: 3.8
    s2.display();   // Name: Bob, Age: 22, GPA: 3.5
    s3.display();   // Name: Charlie, Age: 19, GPA: 2.9

    // --- Check honor roll ---
    cout << "\\n===== Honor Roll =====" << endl;
    cout << "Alice: " << (s1.isHonorRoll() ? "Yes" : "No") << endl;    // Yes
    cout << "Bob: " << (s2.isHonorRoll() ? "Yes" : "No") << endl;      // Yes
    cout << "Charlie: " << (s3.isHonorRoll() ? "Yes" : "No") << endl;  // No

    // s1.name = "Dave";  // ❌ ERROR! 'name' is private
    // s1.gpa = 4.0;      // ❌ ERROR! 'gpa' is private

    return 0;
}
// Output:
// ===== Student Records =====
// Name: Alice, Age: 20, GPA: 3.8
// Name: Bob, Age: 22, GPA: 3.5
// Name: Charlie, Age: 19, GPA: 2.9
//
// ===== Honor Roll =====
// Alice: Yes
// Bob: Yes
// Charlie: No`,
    codeExplanation: "Student class has private data (name, age, gpa) and public methods to set, display, and query them. s1, s2, and s3 are independent objects — each has its own copy of the member variables. The private access specifier prevents direct access from outside, forcing the use of public methods with validation.",
    commonMistakes: [
      "Trying to access private members directly from outside the class — use getters/setters",
      "Forgetting the semicolon after the class closing brace — class definition ends with };",
      "Confusing class with struct — struct defaults to public, class defaults to private"
    ],
    practiceQuestions: [
      "Create a BankAccount class with deposit and withdraw methods",
      "What is the difference between class and struct in C++?",
      "Create an array of 5 Student objects"
    ]
  },
  {
    id: "constructors",
    title: "Constructors",
    explanation: "Constructors are special member functions called automatically when an object is created. They initialize member variables. The constructor has the same name as the class and no return type.\n\nTypes: default (no params), parameterized (with params), copy (copies another object), and initializer list (efficient initialization).",
    syntax: `// ===== Three Types of Constructors =====
class Box {
    int width, height;
public:
    // --- 1. DEFAULT constructor (no parameters) ---
    // Called when you create: Box b;
    Box() : width(0), height(0) {
        // Initializer list ": width(0), height(0)" sets values
        // This is the PREFERRED way to initialize members
    }

    // --- 2. PARAMETERIZED constructor (with parameters) ---
    // Called when you create: Box b(5, 3);
    Box(int w, int h) : width(w), height(h) {
        // w and h are parameters passed by the caller
    }

    // --- 3. COPY constructor (copies another object) ---
    // Called when you create: Box b2 = b1;  or  Box b2(b1);
    Box(const Box& other) : width(other.width), height(other.height) {
        // 'other' is the object being copied
        // const& means we promise not to modify it
    }
};

// ===== Initializer List vs Body Assignment =====
// ✅ Preferred (initializer list):
//    Box(int w) : width(w) {}
// ❌ Less efficient (assignment in body):
//    Box(int w) { width = w; }`,
    example: `// ===== Constructors — Complete Example =====
#include <iostream>
using namespace std;

class Rectangle {
    double width, height;
public:
    // --- Default constructor: creates a 1×1 rectangle ---
    Rectangle() : width(1), height(1) {
        cout << "  Default constructor called (1×1)" << endl;
    }

    // --- Parameterized constructor: custom size ---
    Rectangle(double w, double h) : width(w), height(h) {
        cout << "  Parameterized constructor called ("
             << w << "×" << h << ")" << endl;
    }

    // --- Copy constructor: copies another Rectangle ---
    Rectangle(const Rectangle& r) : width(r.width), height(r.height) {
        cout << "  Copy constructor called (copying "
             << r.width << "×" << r.height << ")" << endl;
    }

    // --- Calculate area ---
    double area() { return width * height; }

    // --- Display dimensions ---
    void display() {
        cout << "  " << width << " × " << height
             << " = area " << area() << endl;
    }
};

int main() {
    cout << "Creating r1 (default):" << endl;
    Rectangle r1;                // Calls DEFAULT constructor
    r1.display();                // 1 × 1 = area 1

    cout << "\\nCreating r2 (5×3):" << endl;
    Rectangle r2(5, 3);          // Calls PARAMETERIZED constructor
    r2.display();                // 5 × 3 = area 15

    cout << "\\nCreating r3 (copy of r2):" << endl;
    Rectangle r3 = r2;           // Calls COPY constructor
    r3.display();                // 5 × 3 = area 15

    cout << "\\nCreating r4 (10×7):" << endl;
    Rectangle r4(10, 7);         // Parameterized
    r4.display();                // 10 × 7 = area 70

    return 0;
}
// Output:
// Creating r1 (default):
//   Default constructor called (1×1)
//   1 × 1 = area 1
//
// Creating r2 (5×3):
//   Parameterized constructor called (5×3)
//   5 × 3 = area 15
//
// Creating r3 (copy of r2):
//   Copy constructor called (copying 5×3)
//   5 × 3 = area 15
//
// Creating r4 (10×7):
//   Parameterized constructor called (10×7)
//   10 × 7 = area 70`,
    codeExplanation: "Three constructor types are demonstrated. r1 uses the default constructor (1×1), r2 uses parameterized (5×3), and r3 copies r2's values using the copy constructor. The initializer list (: width(w), height(h)) is the preferred, most efficient way to initialize member variables.",
    commonMistakes: [
      "Defining a parameterized constructor removes the implicit default constructor — add it manually if needed",
      "Using assignment in constructor body instead of initializer list — less efficient for non-trivial types",
      "Confusing copy constructor with assignment operator — copy is for creation, = is for existing objects"
    ],
    practiceQuestions: [
      "Create a class with all three constructor types",
      "What happens if you only define a parameterized constructor and try Box b;?",
      "When is the copy constructor called automatically?"
    ]
  },
  {
    id: "destructor",
    title: "Destructor",
    explanation: "A destructor is called automatically when an object goes out of scope or is deleted. It has the same name as the class prefixed with ~ and takes no parameters. Destructors clean up resources: freeing memory, closing files, releasing locks.\n\nIf your class uses dynamic memory (new), you must write a destructor with delete.",
    syntax: `// ===== Destructor Syntax =====
class MyClass {
public:
    // Constructor: called when object is CREATED
    MyClass() {
        cout << "Object created!" << endl;
    }

    // Destructor: called when object is DESTROYED
    // Same name as class, but with ~ prefix
    // No parameters, no return type, only ONE per class
    ~MyClass() {
        cout << "Object destroyed!" << endl;
        // Clean up resources here:
        // - delete dynamically allocated memory
        // - close file handles
        // - release network connections
    }
};

// ===== When is the destructor called? =====
// 1. When a local object goes out of scope (end of block {})
// 2. When delete is called on a dynamically allocated object
// 3. When the program ends (for global objects)`,
    example: `// ===== Destructor — Complete Example =====
#include <iostream>
using namespace std;

class DynamicArray {
    int* data;     // Pointer to dynamically allocated memory
    int size;
public:
    // Constructor: allocate memory
    DynamicArray(int s) : size(s) {
        data = new int[size];  // Allocate array on heap
        cout << "Array of " << size << " elements created" << endl;
    }

    // Destructor: free memory to prevent leaks
    ~DynamicArray() {
        delete[] data;  // Free the heap memory
        cout << "Array destroyed, memory freed!" << endl;
        // Without this destructor, the memory would LEAK
    }

    // Set a value at an index
    void set(int idx, int val) {
        if (idx >= 0 && idx < size) {
            data[idx] = val;
        }
    }

    // Get a value at an index
    int get(int idx) {
        return (idx >= 0 && idx < size) ? data[idx] : -1;
    }
};

int main() {
    cout << "===== Entering scope =====" << endl;
    {
        // Object created here → constructor runs
        DynamicArray arr(5);
        arr.set(0, 42);
        arr.set(1, 99);
        cout << "Value at 0: " << arr.get(0) << endl;  // 42
        cout << "Value at 1: " << arr.get(1) << endl;  // 99
        cout << "===== Leaving scope =====" << endl;
    }  // ← arr goes out of scope here → DESTRUCTOR runs automatically!

    cout << "\\n===== After scope =====" << endl;
    cout << "Memory has been freed!" << endl;

    return 0;
}
// Output:
// ===== Entering scope =====
// Array of 5 elements created
// Value at 0: 42
// Value at 1: 99
// ===== Leaving scope =====
// Array destroyed, memory freed!
//
// ===== After scope =====
// Memory has been freed!`,
    codeExplanation: "DynamicArray allocates heap memory in the constructor with new int[size]. The destructor frees it with delete[] data. When the block scope ends (at the closing }), the destructor runs automatically, preventing memory leaks. Without the destructor, the allocated memory would never be returned to the system.",
    commonMistakes: [
      "Not writing a destructor when class uses dynamic memory (new) — causes memory leak",
      "Calling the destructor manually — it's called automatically, calling it twice causes double-delete crash",
      "Not following the Rule of Three: if you write a destructor, also write copy constructor and copy assignment operator"
    ],
    practiceQuestions: [
      "Write a class that manages a file handle (open in constructor, close in destructor)",
      "What is the Rule of Three and why does it matter?",
      "In what order are destructors called for multiple objects?"
    ]
  },
  {
    id: "encapsulation",
    title: "Encapsulation",
    explanation: "Encapsulation bundles data and methods that operate on that data within a class, and restricts direct access to the data using access specifiers. External code interacts only through public methods (getters/setters).\n\nThis protects data integrity by controlling how data is accessed and modified, and allows internal implementation to change without affecting external code.",
    syntax: `// ===== Encapsulation =====
// Key idea: HIDE the data, EXPOSE controlled access

class Account {
private:
    double balance;     // HIDDEN — no one can touch this directly

public:
    // GETTER: Read-only access to balance
    double getBalance() {
        return balance;
    }

    // Controlled modification with VALIDATION
    void deposit(double amt) {
        if (amt > 0) {          // Validate: only positive amounts
            balance += amt;
        } else {
            cout << "Invalid deposit amount!" << endl;
        }
    }

    void withdraw(double amt) {
        if (amt > 0 && amt <= balance) {  // Validate: enough funds?
            balance -= amt;
        } else {
            cout << "Invalid withdrawal!" << endl;
        }
    }
    // No setBalance() — we DON'T want anyone to set it directly!
};

// ===== Why encapsulation matters =====
// Without it:  account.balance = -1000;  // 🔴 Negative balance!
// With it:     account.withdraw(1000);   // ✅ Validated!`,
    example: `// ===== Encapsulation — Complete Example =====
#include <iostream>
using namespace std;

class Temperature {
private:
    double celsius;  // Internal data — stored in Celsius only

public:
    // Constructor with default value
    Temperature(double c = 0) : celsius(c) {}

    // --- SETTER with validation ---
    void setCelsius(double c) {
        // Absolute zero is -273.15°C — nothing can be colder!
        if (c >= -273.15) {
            celsius = c;           // Valid temperature
        } else {
            cout << "  ❌ Invalid! Temperature can't be below -273.15°C" << endl;
        }
    }

    // --- GETTERS — return temperature in different units ---
    double getCelsius() { return celsius; }

    double getFahrenheit() {
        return celsius * 9.0 / 5.0 + 32;  // Conversion formula
    }

    double getKelvin() {
        return celsius + 273.15;           // Conversion formula
    }
};

int main() {
    // --- Create a Temperature object ---
    Temperature t(100);  // 100°C (boiling point of water)

    cout << "===== Temperature Conversions =====" << endl;
    cout << t.getCelsius() << "°C = "
         << t.getFahrenheit() << "°F = "
         << t.getKelvin() << "K" << endl;
    // Output: 100°C = 212°F = 373.15K

    // --- Try invalid temperature ---
    cout << "\\nSetting to -300°C:" << endl;
    t.setCelsius(-300);  // ❌ Below absolute zero!

    // --- Set valid temperature ---
    cout << "\\nSetting to 37°C (body temperature):" << endl;
    t.setCelsius(37);
    cout << "Body temp: " << t.getFahrenheit() << "°F" << endl;  // 98.6°F

    // t.celsius = -500;  // ❌ COMPILE ERROR! celsius is private

    return 0;
}
// Output:
// ===== Temperature Conversions =====
// 100°C = 212°F = 373.15K
//
// Setting to -300°C:
//   ❌ Invalid! Temperature can't be below -273.15°C
//
// Setting to 37°C (body temperature):
// Body temp: 98.6°F`,
    codeExplanation: "celsius is private — it can only be modified through setCelsius() which validates the input (rejects temperatures below absolute zero). Getters provide read access in multiple units (Celsius, Fahrenheit, Kelvin). The class controls all access to its internal state — this IS encapsulation.",
    commonMistakes: [
      "Making all members public — defeats the purpose of encapsulation (no protection)",
      "Providing setters for every field — only expose what's truly needed",
      "Not validating input in setters — the whole point is controlled access"
    ],
    practiceQuestions: [
      "Create an encapsulated BankAccount class with transaction validation",
      "Why is encapsulation considered a pillar of OOP?",
      "When should you NOT provide a setter for a private member?"
    ]
  },
  {
    id: "abstraction",
    title: "Abstraction",
    explanation: "Abstraction hides complex implementation details and exposes only the essential interface. In C++, it's achieved through abstract classes (with pure virtual functions) and interfaces.\n\nA class with at least one pure virtual function (= 0) is abstract and cannot be instantiated — derived classes must implement all pure virtual functions.",
    syntax: `// ===== Abstraction with Abstract Classes =====

class Shape {
public:
    // PURE VIRTUAL functions (= 0) — NO implementation here
    // Any class with pure virtual functions is ABSTRACT
    virtual double area() = 0;      // Derived classes MUST implement this
    virtual void draw() = 0;        // Derived classes MUST implement this
    virtual ~Shape() {}             // Virtual destructor (always do this!)

    // Abstract classes CAN have regular methods too
    void display() {
        cout << "Area: " << area() << endl;  // Calls the derived version!
    }
};

// ===== Rules =====
// ❌ Shape s;           // Can't create abstract class objects!
// ✅ Shape* s = new Circle();  // CAN use pointers to abstract class
// ✅ Derived classes MUST implement ALL pure virtual functions
//    or they'll be abstract too!`,
    example: `// ===== Abstraction — Complete Example =====
#include <iostream>
using namespace std;

// --- ABSTRACT base class ---
// Defines the INTERFACE (what shapes can do)
// Does NOT define HOW (that's for derived classes)
class Shape {
public:
    // Pure virtual functions — derived classes MUST implement these
    virtual double area() = 0;
    virtual string type() = 0;
    virtual ~Shape() {}

    // Regular method that uses the virtual functions
    void display() {
        cout << type() << " — Area: " << area() << endl;
    }
};

// --- CONCRETE class: Circle implements Shape ---
class Circle : public Shape {
    double radius;
public:
    Circle(double r) : radius(r) {}

    // Implement the pure virtual functions
    double area() override {
        return 3.14159 * radius * radius;  // π × r²
    }
    string type() override {
        return "Circle (r=" + to_string((int)radius) + ")";
    }
};

// --- CONCRETE class: Square implements Shape ---
class Square : public Shape {
    double side;
public:
    Square(double s) : side(s) {}

    double area() override {
        return side * side;  // side²
    }
    string type() override {
        return "Square (s=" + to_string((int)side) + ")";
    }
};

// --- CONCRETE class: Triangle implements Shape ---
class Triangle : public Shape {
    double base, height;
public:
    Triangle(double b, double h) : base(b), height(h) {}

    double area() override {
        return 0.5 * base * height;  // ½ × base × height
    }
    string type() override {
        return "Triangle (b=" + to_string((int)base) +
               ", h=" + to_string((int)height) + ")";
    }
};

int main() {
    // --- Create an array of Shape POINTERS ---
    // We can treat ALL shapes uniformly through the Shape interface!
    Shape* shapes[] = {
        new Circle(5),        // Circle with radius 5
        new Square(4),        // Square with side 4
        new Triangle(6, 3)    // Triangle with base 6, height 3
    };

    cout << "===== Shape Areas =====" << endl;
    for (int i = 0; i < 3; i++) {
        shapes[i]->display();  // Calls the RIGHT version for each shape!
        delete shapes[i];      // Clean up
    }

    // Shape s;  // ❌ ERROR! Can't create abstract class objects

    return 0;
}
// Output:
// ===== Shape Areas =====
// Circle (r=5) — Area: 78.5398
// Square (s=4) — Area: 16
// Triangle (b=6, h=3) — Area: 9`,
    codeExplanation: "Shape is abstract — it defines the interface (area, type) without implementation. Circle, Square, and Triangle provide concrete implementations. We use Shape pointers to treat different shapes uniformly — the right area() and type() are called for each shape automatically (polymorphism).",
    commonMistakes: [
      "Trying to instantiate an abstract class — Shape s; causes a compiler error",
      "Forgetting to override all pure virtual functions in derived class — it becomes abstract too",
      "Missing virtual destructor in base class — causes memory leaks when deleting through base pointers"
    ],
    practiceQuestions: [
      "Create an abstract Vehicle class with start() and stop() pure virtual functions",
      "What is the difference between abstraction and encapsulation?",
      "Can an abstract class have non-virtual (regular) methods?"
    ]
  },
  {
    id: "inheritance",
    title: "Inheritance",
    explanation: "Inheritance allows a class (derived/child) to inherit members from another class (base/parent). The derived class gets all non-private members and can add new ones or override existing ones.\n\nIt promotes code reuse and establishes an 'is-a' relationship. Use public inheritance for interface inheritance and private/protected for implementation inheritance.",
    syntax: `// ===== Inheritance Syntax =====

// --- Base class (parent) ---
class Base {
public:
    int publicVar;        // Inherited as public
    void publicMethod() { }
protected:
    int protectedVar;     // Inherited as protected
private:
    int privateVar;       // NOT inherited (only Base can access)
};

// --- Derived class (child) ---
// ": public Base" means "inherit publicly from Base"
class Derived : public Base {
public:
    void derivedMethod() {
        publicVar = 10;     // ✅ Can access public members
        protectedVar = 20;  // ✅ Can access protected members
        // privateVar = 30; // ❌ Cannot access private members!
    }
};

// ===== Calling base class constructor =====
// Use initializer list to call the parent constructor
class Child : public Parent {
public:
    Child(int x) : Parent(x) {   // Call Parent's constructor first
        // Then do Child-specific initialization
    }
};`,
    example: `// ===== Inheritance — Complete Example =====
#include <iostream>
using namespace std;

// --- Base class: Vehicle ---
class Vehicle {
protected:
    string brand;    // Accessible by derived classes
    int year;
public:
    // Constructor
    Vehicle(string b, int y) : brand(b), year(y) {
        cout << "  Vehicle constructor called" << endl;
    }

    // Public method — inherited by all derived classes
    void info() {
        cout << "  " << brand << " (" << year << ")" << endl;
    }
};

// --- Derived class: Car "IS-A" Vehicle ---
class Car : public Vehicle {
    int doors;    // Car-specific data
public:
    // Car constructor MUST call Vehicle constructor first
    Car(string b, int y, int d) : Vehicle(b, y), doors(d) {
        cout << "  Car constructor called" << endl;
    }

    void details() {
        info();  // Call inherited method from Vehicle
        cout << "  Doors: " << doors << endl;
    }
};

// --- Another derived class: Motorcycle ---
class Motorcycle : public Vehicle {
    bool hasSidecar;
public:
    Motorcycle(string b, int y, bool sc) : Vehicle(b, y), hasSidecar(sc) {
        cout << "  Motorcycle constructor called" << endl;
    }

    void details() {
        info();  // Inherited from Vehicle
        cout << "  Sidecar: " << (hasSidecar ? "Yes" : "No") << endl;
    }
};

int main() {
    cout << "Creating Car:" << endl;
    Car c("Toyota", 2023, 4);
    c.details();           // Uses Car's details + inherited info()

    cout << "\\nCreating Motorcycle:" << endl;
    Motorcycle m("Harley", 2022, true);
    m.details();           // Uses Motorcycle's details + inherited info()

    cout << "\\nCalling inherited method directly:" << endl;
    c.info();              // ✅ Inherited from Vehicle — works!

    return 0;
}
// Output:
// Creating Car:
//   Vehicle constructor called
//   Car constructor called
//   Toyota (2023)
//   Doors: 4
//
// Creating Motorcycle:
//   Vehicle constructor called
//   Motorcycle constructor called
//   Harley (2022)
//   Sidecar: Yes
//
// Calling inherited method directly:
//   Toyota (2023)`,
    codeExplanation: "Car and Motorcycle inherit from Vehicle using public inheritance. Their constructors call Vehicle's constructor first (via initializer list) to initialize inherited members. Both can use Vehicle's info() method directly. The construction order is always: base first, then derived.",
    commonMistakes: [
      "Trying to access private members of base class from derived — use protected instead",
      "Not calling the base class constructor — it must be called explicitly if it has parameters",
      "Using inheritance for 'has-a' relationships — use composition instead (a Car HAS-A Engine)"
    ],
    practiceQuestions: [
      "Create a Person → Employee → Manager inheritance chain",
      "What is the difference between public, private, and protected inheritance?",
      "When should you use composition over inheritance?"
    ]
  },
  {
    id: "types-of-inheritance",
    title: "Types of Inheritance",
    explanation: "C++ supports five types: Single (one base, one derived), Multiple (multiple bases), Multilevel (chain A→B→C), Hierarchical (one base, multiple derived), and Hybrid (combination).\n\nMultiple inheritance can cause the Diamond Problem when two bases share a common grandparent. Use virtual inheritance to solve it.",
    syntax: `// ===== Types of Inheritance =====

// --- 1. SINGLE: One parent, one child ---
class A {};
class B : public A {};         // B inherits from A

// --- 2. MULTILEVEL: Chain of inheritance ---
class A {};
class B : public A {};         // B inherits from A
class C : public B {};         // C inherits from B (which inherits from A)
// C gets members from BOTH A and B

// --- 3. HIERARCHICAL: One parent, multiple children ---
class Shape {};
class Circle : public Shape {};     // Circle IS-A Shape
class Rectangle : public Shape {};  // Rectangle IS-A Shape

// --- 4. MULTIPLE: Multiple parents, one child ---
class Engine {};
class Electric {};
class HybridCar : public Engine, public Electric {};
// HybridCar gets members from BOTH

// --- 5. DIAMOND PROBLEM (Multiple inheritance issue) ---
//    Animal
//   /      \\
// Mammal  WingedAnimal
//   \\      /
//     Bat
// Problem: Bat has TWO copies of Animal!
// Solution: Use 'virtual' inheritance
class Mammal : virtual public Animal {};       // Virtual!
class WingedAnimal : virtual public Animal {}; // Virtual!
class Bat : public Mammal, public WingedAnimal {}; // Only ONE Animal copy`,
    example: `// ===== Diamond Problem & Virtual Inheritance =====
#include <iostream>
using namespace std;

// --- Base class ---
class Animal {
public:
    string name;
    Animal() : name("Unknown") {}
    void eat() { cout << name << " is eating" << endl; }
};

// --- Two classes inherit from Animal VIRTUALLY ---
// 'virtual public' means: share a SINGLE copy of Animal
class Mammal : virtual public Animal {
public:
    void breathe() { cout << name << " is breathing" << endl; }
};

class WingedAnimal : virtual public Animal {
public:
    void fly() { cout << name << " is flying" << endl; }
};

// --- Bat inherits from BOTH Mammal and WingedAnimal ---
// Without 'virtual', Bat would have TWO copies of Animal — ambiguous!
// With 'virtual', there's only ONE copy — no ambiguity!
class Bat : public Mammal, public WingedAnimal {
public:
    void info() {
        name = "Batty";    // Only ONE 'name' — no ambiguity!
        eat();              // Only ONE eat() — no ambiguity!
        breathe();          // From Mammal
        fly();              // From WingedAnimal
    }
};

int main() {
    Bat b;
    cout << "===== Bat (Diamond Problem Solved) =====" << endl;
    b.info();

    return 0;
}
// Output:
// ===== Bat (Diamond Problem Solved) =====
// Batty is eating
// Batty is breathing
// Batty is flying`,
    codeExplanation: "Bat inherits from both Mammal and WingedAnimal, which both inherit from Animal. Without virtual inheritance, eat() would be ambiguous (two copies of Animal). With 'virtual public', only one Animal sub-object exists — so there's no ambiguity when calling eat() or accessing name.",
    commonMistakes: [
      "Not using virtual inheritance for diamond problem — causes ambiguity errors",
      "Overusing multiple inheritance — prefer interfaces and composition",
      "Confusing multilevel (A→B→C chain) with multiple (A+B→C) inheritance"
    ],
    practiceQuestions: [
      "Draw a diagram of each inheritance type",
      "What is the Diamond Problem and how does virtual inheritance solve it?",
      "Design a class hierarchy using hierarchical inheritance"
    ]
  },
  {
    id: "polymorphism",
    title: "Polymorphism",
    explanation: "Polymorphism means 'many forms'. Compile-time polymorphism includes function overloading and operator overloading. Runtime polymorphism uses virtual functions and base class pointers/references.\n\nRuntime polymorphism lets you write code that works with base class pointers but calls the correct derived class methods — enabling extensible, flexible designs.",
    syntax: `// ===== Polymorphism =====

// --- Compile-time (static) polymorphism ---
// Decided at compile time: function overloading, operator overloading
int add(int a, int b);          // Overloaded by type
double add(double a, double b);

// --- Runtime (dynamic) polymorphism ---
// Decided at runtime: virtual functions + base pointers
class Base {
public:
    virtual void action() {          // 'virtual' enables runtime polymorphism
        cout << "Base action" << endl;
    }
    virtual ~Base() {}               // Always make destructor virtual!
};

class Derived : public Base {
public:
    void action() override {         // 'override' = replace base version
        cout << "Derived action" << endl;
    }
};

// --- The magic: Base pointer, Derived behavior ---
Base* ptr = new Derived();  // Pointer type: Base, Object type: Derived
ptr->action();              // Calls DERIVED::action() at runtime!
// Without 'virtual', it would call Base::action() — WRONG!`,
    example: `// ===== Polymorphism — Complete Example =====
#include <iostream>
using namespace std;

// --- Abstract base class: Payment ---
class Payment {
public:
    // Pure virtual: derived classes MUST implement this
    virtual void process(double amount) = 0;
    virtual string name() = 0;
    virtual ~Payment() {}
};

// --- Derived: CreditCard payment ---
class CreditCard : public Payment {
public:
    void process(double amount) override {
        cout << "  💳 Credit card charged: $" << amount << endl;
    }
    string name() override { return "Credit Card"; }
};

// --- Derived: PayPal payment ---
class PayPal : public Payment {
public:
    void process(double amount) override {
        cout << "  📧 PayPal payment: $" << amount << endl;
    }
    string name() override { return "PayPal"; }
};

// --- Derived: Cash payment ---
class Cash : public Payment {
public:
    void process(double amount) override {
        cout << "  💵 Cash received: $" << amount << endl;
    }
    string name() override { return "Cash"; }
};

// --- This function works with ANY payment type! ---
// It doesn't know or care which specific type it is
void checkout(Payment* p, double amount) {
    cout << "Processing " << p->name() << ":" << endl;
    p->process(amount);  // Calls the CORRECT version at runtime!
}

int main() {
    CreditCard cc;
    PayPal pp;
    Cash cash;

    // Same function, different behaviors!
    checkout(&cc, 99.99);    // Credit card
    checkout(&pp, 49.50);    // PayPal
    checkout(&cash, 25.00);  // Cash

    return 0;
}
// Output:
// Processing Credit Card:
//   💳 Credit card charged: $99.99
// Processing PayPal:
//   📧 PayPal payment: $49.50
// Processing Cash:
//   💵 Cash received: $25`,
    codeExplanation: "checkout() takes a Payment pointer and calls process(). At runtime, the correct derived class version is called based on the actual object type. This lets you add new payment types (Bitcoin, BankTransfer) without modifying checkout() — just create a new class that extends Payment.",
    commonMistakes: [
      "Forgetting the 'virtual' keyword on base class methods — without it, base version is always called",
      "Missing virtual destructor in base class — causes memory leaks when deleting through base pointers",
      "Object slicing — assigning derived to base BY VALUE loses derived data (use pointers/references)"
    ],
    practiceQuestions: [
      "Implement a notification system with Email, SMS, and Push classes",
      "What is object slicing and how do you prevent it?",
      "Explain compile-time vs runtime polymorphism with examples"
    ]
  },
  {
    id: "function-overriding",
    title: "Function Overriding",
    explanation: "Function overriding occurs when a derived class provides a specific implementation for a method already defined in the base class. The method must have the same name, return type, and parameters.\n\nUse the 'override' keyword (C++11) to explicitly mark overriding functions — this catches errors if the base signature doesn't match.",
    syntax: `// ===== Function Overriding =====

class Base {
public:
    // The base version — can be overridden by derived classes
    virtual void show() {
        cout << "Base version" << endl;
    }
};

class Derived : public Base {
public:
    // OVERRIDE: Replace the base class version
    // 'override' keyword (C++11) ensures we're actually overriding
    void show() override {
        cout << "Derived version" << endl;
    }
};

// ===== Overriding vs Overloading =====
// OVERRIDING: Same name, same params, different class (inheritance)
//   → Replaces base version at RUNTIME
// OVERLOADING: Same name, different params, same class
//   → Different function at COMPILE time

// ===== The 'override' keyword is important! =====
// Without 'override':
//   void shw() { }  // Typo! Creates NEW function instead of overriding
// With 'override':
//   void shw() override { }  // ❌ COMPILER ERROR: no function to override
//   → Catches the bug!`,
    example: `// ===== Function Overriding — Complete Example =====
#include <iostream>
using namespace std;

class Employee {
public:
    // Virtual functions — CAN be overridden
    virtual double salary() { return 30000; }
    virtual void role() { cout << "General Employee" << endl; }
    virtual ~Employee() {}
};

// --- Manager overrides both methods ---
class Manager : public Employee {
public:
    double salary() override { return 70000; }  // Different salary
    void role() override { cout << "Manager" << endl; }
};

// --- Intern overrides both methods ---
class Intern : public Employee {
public:
    double salary() override { return 15000; }
    void role() override { cout << "Intern" << endl; }
};

// --- Director overrides and calls base version ---
class Director : public Employee {
public:
    double salary() override { return 120000; }
    void role() override {
        cout << "Director (also an ";
        Employee::role();  // Call the BASE version explicitly!
        // Output: "Director (also an General Employee)"
    }
};

int main() {
    // Create array of Employee pointers to different types
    Employee* team[] = {
        new Manager(),
        new Intern(),
        new Employee(),  // Regular employee — uses base version
        new Director()
    };

    cout << "===== Team Info =====" << endl;
    for (auto e : team) {
        e->role();          // Calls the CORRECT overridden version!
        cout << "  Salary: $" << e->salary() << "\\n" << endl;
        delete e;
    }

    return 0;
}
// Output:
// ===== Team Info =====
// Manager
//   Salary: $70000
//
// Intern
//   Salary: $15000
//
// General Employee
//   Salary: $30000
//
// Director (also an General Employee)
//   Salary: $120000`,
    codeExplanation: "Manager, Intern, and Director override salary() and role() from Employee. Through base class pointers (Employee*), the correct overridden version is called for each object at runtime. Director demonstrates calling the base version explicitly with Employee::role(). The 'override' keyword ensures the signature matches.",
    commonMistakes: [
      "Accidentally overloading instead of overriding — wrong parameter types create a NEW function",
      "Not making base method virtual — without virtual, static binding is used (always calls base version)",
      "Forgetting 'override' keyword — a mismatched signature silently creates a new method instead of overriding"
    ],
    practiceQuestions: [
      "Override a draw() method for Circle, Rectangle, and Triangle",
      "What is the difference between overloading and overriding?",
      "What happens if you remove the virtual keyword from the base?"
    ]
  },
  {
    id: "virtual-functions",
    title: "Virtual Functions",
    explanation: "Virtual functions enable runtime polymorphism through a mechanism called the vtable (virtual table). When a function is declared virtual, the compiler creates a vtable for the class containing pointers to the correct function implementations.\n\nPure virtual functions (= 0) make a class abstract. Virtual destructors ensure proper cleanup when deleting through base pointers.",
    syntax: `// ===== Virtual Functions =====

class Base {
public:
    // --- Regular virtual function ---
    // Has a default implementation, CAN be overridden
    virtual void func() {
        cout << "Base version" << endl;
    }

    // --- Pure virtual function (= 0) ---
    // NO implementation here, MUST be overridden
    // Makes the class ABSTRACT (can't create objects)
    virtual void pureFunc() = 0;

    // --- Virtual destructor ---
    // ALWAYS make destructor virtual in base classes!
    // Without it: deleting through base pointer skips derived destructor
    virtual ~Base() {}
};

// ===== How it works: vtable =====
// Each class with virtual functions has a "vtable" (hidden table)
// The vtable contains pointers to the correct function versions
// When you call ptr->func(), it looks up the vtable at RUNTIME
// This is why it's called "dynamic dispatch" or "late binding"`,
    example: `// ===== Virtual Functions — Complete Example =====
#include <iostream>
using namespace std;

// --- Abstract base class (has pure virtual functions) ---
class Logger {
public:
    // Pure virtual: each logger type implements this differently
    virtual void log(string msg) = 0;

    // Virtual destructor: ensures proper cleanup
    virtual ~Logger() {}

    // Regular methods that USE the virtual function
    // These work for ALL logger types automatically!
    void info(string msg) {
        log("[INFO] " + msg);     // Calls the RIGHT log() at runtime
    }
    void error(string msg) {
        log("[ERROR] " + msg);    // Calls the RIGHT log() at runtime
    }
    void warning(string msg) {
        log("[WARNING] " + msg);
    }
};

// --- ConsoleLogger: prints to screen ---
class ConsoleLogger : public Logger {
public:
    void log(string msg) override {
        cout << "📺 " << msg << endl;  // Prints to console
    }
};

// --- FileLogger: (simulated) writes to file ---
class FileLogger : public Logger {
public:
    void log(string msg) override {
        cout << "📁 (File) " << msg << endl;  // Would write to file
    }
};

int main() {
    // --- Use ConsoleLogger ---
    Logger* logger = new ConsoleLogger();
    logger->info("Application started");     // Uses ConsoleLogger::log
    logger->error("Something went wrong");
    logger->warning("Low disk space");
    delete logger;

    cout << endl;

    // --- Switch to FileLogger (same interface!) ---
    logger = new FileLogger();
    logger->info("Saving data");             // Uses FileLogger::log
    logger->error("File not found");
    delete logger;

    // Logger l;  // ❌ ERROR! Logger is abstract (has pure virtual)

    return 0;
}
// Output:
// 📺 [INFO] Application started
// 📺 [ERROR] Something went wrong
// 📺 [WARNING] Low disk space
//
// 📁 (File) [INFO] Saving data
// 📁 (File) [ERROR] File not found`,
    codeExplanation: "Logger is abstract with pure virtual log(). ConsoleLogger and FileLogger provide concrete implementations. The info(), error(), and warning() methods call log() — which version runs depends on the actual object type at runtime (Template Method pattern). You can easily add new logger types without changing existing code.",
    commonMistakes: [
      "Not declaring destructor virtual in a base class — causes memory leaks on delete through base pointer",
      "Calling virtual functions from constructors — calls the BASE version, not the derived (object isn't fully constructed yet)",
      "Performance concern: virtual calls have a slight overhead from vtable lookup (usually negligible)"
    ],
    practiceQuestions: [
      "How does the vtable mechanism work internally?",
      "Why should destructors be virtual in base classes?",
      "Can you have a virtual constructor? Why or why not?"
    ]
  },
  {
    id: "friend-function",
    title: "Friend Function",
    explanation: "A friend function is not a member of a class but has access to its private and protected members. Declared using the 'friend' keyword inside the class. Friend functions break encapsulation intentionally for specific use cases.\n\nCommon uses: operator overloading (especially << and >>), utility functions that need access to private data of multiple classes.",
    syntax: `// ===== Friend Functions =====

class MyClass {
private:
    int secret = 42;    // Private — normally inaccessible

    // Declare a FRIEND function — it can access private members
    friend void reveal(MyClass& obj);
};

// Define the friend function OUTSIDE the class
// It's NOT a member function — no MyClass:: prefix
void reveal(MyClass& obj) {
    cout << obj.secret;  // ✅ Can access private member! (because it's a friend)
}

// ===== Common use: Overloading << operator =====
class Box {
    int size;
    // Make operator<< a friend so it can access private 'size'
    friend ostream& operator<<(ostream& os, const Box& b);
};

// Now we can do: cout << myBox;
ostream& operator<<(ostream& os, const Box& b) {
    os << "Box(size=" << b.size << ")";  // Access private 'size'
    return os;
}`,
    example: `// ===== Friend Function — Complete Example =====
#include <iostream>
using namespace std;

class Box {
private:
    double length, width;  // Private data — normally hidden

public:
    Box(double l, double w) : length(l), width(w) {}

    // Declare FRIENDS — they can access private members
    friend double area(const Box& b);
    friend ostream& operator<<(ostream& os, const Box& b);
};

// --- Friend function: calculate area ---
// NOT a member of Box, but CAN access private length and width
double area(const Box& b) {
    return b.length * b.width;  // ✅ Accessing private members!
}

// --- Friend operator: enable cout << box ---
// Allows: cout << myBox; (prints "5x3")
ostream& operator<<(ostream& os, const Box& b) {
    os << b.length << "×" << b.width;  // ✅ Accessing private members!
    return os;  // Return stream for chaining: cout << a << b;
}

int main() {
    Box b1(5.0, 3.0);
    Box b2(10.0, 7.5);

    // --- Use the << operator (friend) ---
    cout << "Box 1: " << b1 << endl;   // Box 1: 5×3
    cout << "Box 2: " << b2 << endl;   // Box 2: 10×7.5

    // --- Use the area function (friend) ---
    cout << "Area of Box 1: " << area(b1) << endl;   // 15
    cout << "Area of Box 2: " << area(b2) << endl;   // 75

    return 0;
}
// Output:
// Box 1: 5×3
// Box 2: 10×7.5
// Area of Box 1: 15
// Area of Box 2: 75`,
    codeExplanation: "area() and operator<< are friend functions — they can access Box's private length and width even though they're not member functions. The << overload lets us print Box objects with cout directly (cout << b1). Friends are declared inside the class but defined outside.",
    commonMistakes: [
      "Overusing friend functions — breaks encapsulation, use sparingly",
      "Thinking friend functions are member functions — they're not (no 'this' pointer, no Box:: prefix)",
      "Forgetting that friendship is not inherited or transitive — friends of parent are NOT friends of child"
    ],
    practiceQuestions: [
      "Overload the + operator as a friend to add two objects",
      "Is friendship transitive? (if A is friend of B, and B of C, is A friend of C?)",
      "When is a friend function preferable to a member function?"
    ]
  },
  {
    id: "static-members",
    title: "Static Members",
    explanation: "Static members belong to the class itself, not to any specific object. A static variable is shared by all instances — there's only one copy. Static functions can only access static members (they have no 'this' pointer).\n\nStatic members are useful for counters, configuration, singleton pattern, and utility functions.",
    syntax: `// ===== Static Members =====

class Counter {
private:
    static int count;       // DECLARATION — shared by ALL objects
                            // There's only ONE copy, not one per object

public:
    Counter() {
        count++;            // Every new object increments the SAME counter
    }

    ~Counter() {
        count--;            // Every destroyed object decrements it
    }

    // STATIC function — can only access static members
    // Called on the CLASS, not on an object: Counter::getCount()
    static int getCount() {
        return count;
        // Cannot access non-static members here (no 'this' pointer)
    }
};

// IMPORTANT: Static members MUST be defined outside the class!
int Counter::count = 0;  // This line is REQUIRED (allocates the memory)

// ===== Usage =====
Counter a, b, c;
cout << Counter::getCount();  // 3 (called on the CLASS, not an object)`,
    example: `// ===== Static Members — Complete Example =====
#include <iostream>
using namespace std;

class Student {
private:
    string name;
    int id;

    // STATIC: shared across ALL Student objects
    static int totalStudents;   // Total count of students
    static int nextId;          // Auto-incrementing ID counter

public:
    // Constructor: runs for EACH new Student
    Student(string n) : name(n), id(nextId++) {
        // nextId++ gives current value and THEN increments
        // So first student gets id=1, second gets id=2, etc.
        totalStudents++;
        cout << "  Created: " << name << " (ID: " << id << ")" << endl;
    }

    // Destructor: runs when a Student is destroyed
    ~Student() {
        totalStudents--;
        cout << "  Destroyed: " << name << endl;
    }

    void display() {
        cout << "  ID " << id << ": " << name << endl;
    }

    // STATIC function: access without an object
    static int getTotal() {
        return totalStudents;
        // Cannot access 'name' or 'id' here (they belong to objects)
    }
};

// REQUIRED: Define static members outside the class
int Student::totalStudents = 0;   // Initialize to 0
int Student::nextId = 1;          // IDs start from 1

int main() {
    cout << "Initial count: " << Student::getTotal() << endl;  // 0

    cout << "\\nCreating students:" << endl;
    Student s1("Alice");    // ID: 1
    Student s2("Bob");      // ID: 2
    Student s3("Charlie");  // ID: 3

    cout << "\\nTotal students: " << Student::getTotal() << endl;  // 3

    cout << "\\nAll students:" << endl;
    s1.display();  // ID 1: Alice
    s2.display();  // ID 2: Bob
    s3.display();  // ID 3: Charlie

    {
        Student s4("Dave");  // ID: 4 — created in inner scope
        cout << "\\nTotal (with Dave): " << Student::getTotal() << endl;  // 4
    }  // s4 destroyed here

    cout << "\\nTotal (after Dave left): " << Student::getTotal() << endl;  // 3

    return 0;
}
// Output:
// Initial count: 0
//
// Creating students:
//   Created: Alice (ID: 1)
//   Created: Bob (ID: 2)
//   Created: Charlie (ID: 3)
//
// Total students: 3
//
// All students:
//   ID 1: Alice
//   ID 2: Bob
//   ID 3: Charlie
//
//   Created: Dave (ID: 4)
// Total (with Dave): 4
//   Destroyed: Dave
//
// Total (after Dave left): 3`,
    codeExplanation: "totalStudents and nextId are shared across all Student objects — they belong to the CLASS, not to individual objects. Each new Student increments both. getTotal() is static — called on the class (Student::getTotal()), not on an object. When Dave goes out of scope, the destructor decrements totalStudents.",
    commonMistakes: [
      "Forgetting to define static members outside the class — you'll get a linker error",
      "Trying to access non-static members from a static function — static functions have no 'this' pointer",
      "Thinking each object has its own copy of static members — there's only ONE copy shared by all"
    ],
    practiceQuestions: [
      "Implement a Singleton pattern using static members",
      "Why must static members be defined outside the class?",
      "Can a static function be virtual? Why or why not?"
    ]
  }
];
