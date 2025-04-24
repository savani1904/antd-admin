import { defineConfig } from 'umi';
import { resolve } from 'path';

export default defineConfig({
  // Set up runtime aliases – this tells Umi (and Jest) that
  // imports starting with "@/..." refer to files in the src folder.
  alias: {
    '@': resolve(__dirname, '../src'),
  },

  // Umi test configuration. This block is used by Umi when running "umi test"
  // It instructs Jest (through Umi) how to resolve module aliases and where to find tests.
  test: {
    // Use jsdom as the testing environment for DOM testing.
    environment: 'jsdom',

    // The moduleNameMapper directive ensures that imports matching the alias pattern
    // are mapped to the correct location in your source folder.
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },

    // Specify the root directory for tests. This will force Jest to look only
    // in your source folder (and ignore compiled output in lib, for example).
    roots: ['<rootDir>/src'],

    // Ignore any test files that might exist in the lib folder.
    testPathIgnorePatterns: ['<rootDir>/lib/'],

    // You may adjust testMatch (or other Jest options) as needed.
    testMatch: [
      '**/?(*.)+(spec|test).[tj]s?(x)',
    ],
  },
});