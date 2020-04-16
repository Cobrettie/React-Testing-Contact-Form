import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import ContactForm from './components/ContactForm';

test("renders App without crashing", () => {
  render(<App />);
});

it('renders without crashing', () => {
  const wrapper = render(
    <span>Hello World</span>
  )
  const element = wrapper.queryByText(/hello/i)
  expect(element).toBeTruthy()
  expect(element).toBeInTheDocument()
  expect(element).toBeVisible()
})

test('all required fields have text', () => {
  render(<ContactForm />)
  const firstNameInput = screen.getByTestId('firstNameInput')
  expect(firstNameInput).toBeInTheDocument()
})
