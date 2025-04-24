module.exports = {
    // Only discover tests in your source folder.
    roots: ['<rootDir>/src'],
  
    // Map the alias "@" to your src folder.
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1'
    },
  
    // Ignore tests in the compiled lib folder.
    testPathIgnorePatterns: ['<rootDir>/lib/'],
  
    // Use babel-jest to transform JavaScript/JSX files.
    transform: {
      '^.+\\.(js|jsx)$': 'babel-jest'
    },
  };