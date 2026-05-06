// Problem 1
// Sample Input:
filterEvenNumbers([1, 2, 3, 4, 5, 6]); // Expected Output: [2, 4, 6]

function filterEvenNumbers(arr: number[]): number[] {
  return arr.filter((num) => num % 2 === 0);
}

// Problem 2
// Sample Input:
reverseString('typescript'); // Sample Output: "tpircsepyt";

function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

// Problem 3
// Sample Input 1:
checkType('Hello'); // Sample Output 1: "String"

// Sample Input 2:
checkType(42); // Sample Output 2: "Number"

type StringOrNumber = string | number;

function checkType(value: StringOrNumber): string {
  if (typeof value === 'string') {
    return 'String';
  } else if (typeof value === 'number') {
    return 'Number';
  } else {
    return 'Other';
  }
}

// Problem 4

const user = { id: 1, name: 'John Doe', age: 21 }; // Sample Input:

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

getProperty(user, 'name');

// Problem 5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(
  book: Book,
  isRead: boolean = true,
): Book & { isRead: boolean } {
  return { ...book, isRead };
}

// problem 6

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// Problem 7

function getIntersection(arr1: number[], arr2: number[]): number[] {
  let result: number[] = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result.push(arr1[i]);
      }
    }
  }

  return result;
}
