import React from "react";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm';

// afterEach(cleanup)

test("renders App without crashing", () => {
  render(<App />);
});

test('all fields are visible to user', () => {
  render(<ContactForm />)
  expect(screen.getByTestId('firstNameInput')).toBeVisible()
  expect(screen.getByTestId('lastNameInput')).toBeVisible()
  expect(screen.getByTestId('emailInput')).toBeVisible()
  expect(screen.getByTestId('messageTextArea')).toBeVisible()
})

test('ensure empty input fields when component mounts', () => {
  const { getByTestId } = render(<ContactForm />)
  const firstNameInput = getByTestId('firstNameInput')
  const lastNameInput = getByTestId('lastNameInput')
  const emailInput = getByTestId('emailInput')
  
  expect(firstNameInput.value).toBe('')
  expect(lastNameInput.value).toBe('')
  expect(emailInput.value).toBe('')
})

test('ensure correct text displays as user types into input fields', () => {
  const { getByTestId } = render(<ContactForm />)
  const firstNameInput = getByTestId('firstNameInput')
  const lastNameInput = getByTestId('lastNameInput')
  const emailInput = getByTestId('emailInput')

  fireEvent.change(firstNameInput, { target: {value: 'Testing firstName input field'} })
  expect(firstNameInput.value).toBe('Testing firstName input field')

  fireEvent.change(lastNameInput, { target: { value: 'Testing lastName input field' } })
  expect(lastNameInput.value).toBe('Testing lastName input field')

  fireEvent.change(emailInput, { target: { value: 'Testing emailInput field' } })
  expect(emailInput.value).toBe('Testing emailInput field')
})
