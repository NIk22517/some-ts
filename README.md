# Some Class

This TypeScript class provides utility methods for handling arrays, strings, numbers, booleans, and objects.

## Running the Code

To run the TypeScript file directly and see the output in the terminal:

1. Make sure you have Node.js and ts-node installed globally on your machine. You can install them using npm:

   ```bash
   npm install -g typescript ts-node

Execute the TypeScript file using ts-node:
   
   
    ts-node Some.ts
   


## Usage

### Array Method

The `Array` method checks if the input is an array. If it is, it returns the input array; otherwise, it returns the provided default value or an empty array if no default value is provided.

#### Examples:

```typescript
console.log(Some.Array()); // Output: []

console.log(Some.Array([1, 2, 3])); // Output: [1, 2, 3]

console.log(Some.Array([{ name: "abc," }, { name: "abc," }, { name: "abc," }])); // Output: [{ name: "abc," }, { name: "abc," }, { name: "abc," }]
```

### String Method

The `String` method converts the input to a string if it's a number, boolean, or string. If the input is already a string, it returns the input string. If no input is provided, it returns the provided default value or an empty string if no default value is provided.

#### Examples:

```typescript
console.log(Some.String()); // Output: ""

console.log(Some.String(76474)); // Output: "76474"

console.log(Some.String(true)); // Output: "true"

console.log(Some.String("String")); // Output: "String"
```

### Number Method

The `Number` method converts the input to a number if it's a string representation of a number and can be successfully converted using `Number(num)`. If the input is already a number, it returns the input number. If no input is provided, it returns the provided default value or 0 if no default value is provided.

#### Examples:

```typescript
console.log(Some.Number()); // Output: 0

console.log(Some.Number("123")); // Output: 123

console.log(Some.Number(456)); // Output: 456

console.log(Some.Number("not a number", 789)); // Output: 789
```

### Boolean Method

The `Boolean` method converts the input to a boolean. It handles boolean values, string representations of boolean values ("true" and "false"), and numeric values (0 and 1). If no input is provided, it returns the provided default value or `false` if no default value is provided.

#### Examples:

```typescript
console.log(Some.Boolean()); // Output: false

console.log(Some.Boolean(true)); // Output: true

console.log(Some.Boolean("true")); // Output: true

console.log(Some.Boolean("false")); // Output: false

console.log(Some.Boolean(1)); // Output: true

console.log(Some.Boolean(0)); // Output: false

console.log(Some.Boolean(2, true)); // Output: true
```

### Object Method

The `Object` method returns the input object if it's a valid non-array object and not null. If no input is provided, it returns the provided default value or an empty object if no default value is provided.

#### Examples:

```typescript
console.log(Some.Object()); // Output: {}

console.log(Some.Object({ key: "value" })); // Output: { key: "value" }

console.log(Some.Object(null, { defaultKey: "defaultValue" })); // Output: { defaultKey: "defaultValue" }

console.log(Some.Object([])); // Output: {}
```
