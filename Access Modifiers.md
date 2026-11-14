# Access Modifiers in TypeScript

Access modifiers control where class properties and methods can be accessed from.

TypeScript has 3 access modifiers:

1. public
2. private
3. protected

There is also readonly 

---

## 1. `public`

- It is the default modifier.
- It can be accessed from anywhere: inside and outside the class, in child classes.

## 2. `protected`

- It can be accessed nside the class and  its child classes.
- It cannot be accessed from outside the class.

## 3. `private`

- It can be accessed only inside the same  class (child class can't).
- It cannot be accessed from outside the class.

## `readonly`

- it contols values cannot change after decleared

---



## Code Example

```ts

class Employee {
  constructor(
    public name: string,           // Access from anywhere
    private salary: number,       // Only inside Employee
    protected department: string, // Employee and child classes
    readonly id: number           // Cannot  reassigned
  ) {}

  showSalary() {
    return this.salary; // Private access inside class
  }
}

class Manager extends Employee { // Child of Employee
  showDetails() {
    return `${this.name} works in ${this.department}`;   // name is public  department is protected access by child class
  }
}

const emp = new Employee("Mir", 24000, "SWE", 101);
const manager = new Manager("Adil", 24000, "AI/ML", 102);

console.log(emp.name);              // Public
console.log(emp.showSalary());      // Private (through method)
console.log(manager.showDetails()); // Protected
console.log(emp.id);                // Readonly

// console.log(emp.salary);       // Error: private
// console.log(manager.department); // Error: protected
// emp.id = 103;                   // Error: readonly

```

---

## Conclution

We use access modifier for prevent error and maintain privacy  . it control who can see and access a perameter and who can edit. we will use modifier befor the perameter . 
