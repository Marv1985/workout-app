import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import LoginScreenIndex from "../LoginScreenIndex";
import { BrowserRouter } from "react-router-dom";

const Mocks = () => {
  return (
    <BrowserRouter>
      <LoginScreenIndex />
    </BrowserRouter>
  );
};

describe("component renders", () => {
  it("component renders", () => {
    render(<Mocks />);
    const link = screen.getAllByText(/Sign Up/i)[0];
    expect(link).toBeInTheDocument();
  });
  it("Check background image renders", () => {
    render(<Mocks />);
    const image = screen.getByAltText("background");
    expect(image).toHaveAttribute("src", "barbell.webp");
  });
});

describe("inputs accept correct input", () => {
  test("name input accepts letters", () => {
    render(<Mocks />);
    const input = screen.getByPlaceholderText("User name");
    fireEvent.change(input, { target: { value: "Marv" } });
    expect(input.value).toBe("Marv");
  });
  test("email accepts email format", () => {
    render(<Mocks />);
    const input = screen.getByPlaceholderText("Email");
    fireEvent.change(input, { target: { value: "marv@marv.com" } });
    expect(input.value).toBe("marv@marv.com");
  });
  test("password accepts input", () => {
    render(<Mocks />);
    const input = screen.getByPlaceholderText("Password");
    fireEvent.change(input, { target: { value: "blah123" } });
    expect(input.value).toBe("blah123");
  });
  test("confirm password accepts input", () => {
    render(<Mocks />);
    const input = screen.getByPlaceholderText("Confirm password");
    fireEvent.change(input, { target: { value: "blah123" } });
    expect(input.value).toBe("blah123");
  });
});
