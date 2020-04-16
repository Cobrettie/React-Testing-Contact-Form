import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

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
