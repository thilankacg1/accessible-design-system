import "@testing-library/jest-dom";
import { configureAxe } from "jest-axe";

configureAxe({
  rules: {
    // Disable colour-contrast in tests
    // (test backgrounds are transparent)
    "color-contrast": { enabled: false },
  },
});