# tsc

`tsc` is the compiler of TypeScript. Browsers and Node.js cannot run TypeScript files directly. `tsc` converts `.ts` files into `.js` files, and then the browser runs the converted JavaScript file. It also checks for errors during compilation.

---

# tsconfig.json

It is the configuration file of TypeScript. It controls how TypeScript files will be compiled. It also controls the folder structure.

## Example

```json
{
  "compilerOptions": {
    // File layout
    "rootDir": "./src",   // Location of .ts files
    "outDir": "./dist",   // Where .js files will be saved

    "module": "esnext",   // Module output system
    "target": "esnext",   // Output the latest JS version

    "strict": true,       // Strict type checking

    "skipLibCheck": true,
    "moduleDetection": "force" // Every file is a module
  }
}
```

---

# Conclusion

To use TypeScript files, we convert `.ts` to `.js` using `tsc`. We control the compilation with `tsconfig.json`.