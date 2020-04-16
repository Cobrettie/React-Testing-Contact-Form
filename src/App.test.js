import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm';

test("renders App without crashing", () => {
  render(<App />);
});

test('all fields are visible to user', () => {
  render(<ContactForm />)
  expect(screen.getByTestId('firstNameInput')).toBeVisible()
  expect(screen.getByTestId('lastNameInput')).toBeVisible()
  expect(screen.getByTestId('emailInput')).toBeVisible()
})
