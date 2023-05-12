import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import LegsPushPull from "../Components/LegsPushPull";

const Mocks = () => {
  return (
    <BrowserRouter>
      <LegsPushPull />
    </BrowserRouter>
  );
};

describe("components render and inputs accept an input", () => {
  it("component renders", async () => {
    render(<Mocks />);
    const title = screen.getByText("Legs Push Pull");
    const muscle = screen.getByText("LEGS");
    await waitFor(() => {
      expect(title).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(muscle).toBeInTheDocument();
    });
  });

  it("All inputs accept and input value", async () => {
    render(<Mocks />);
    const input = screen.getAllByLabelText("num");

    await waitFor(() => {
      input.forEach((input) => {
        fireEvent.change(input, { target: { value: "Marv" } });
        expect(input.value).toBe("Marv");
      });
    });
  });
});

//submit function gives alert error if table is empty. So this mocks it
window.alert = jest.fn();

afterEach(() => {
  window.alert = jest.fn();
});
describe("test buttons", () => {
  it("submit button renders", async () => {
    render(<Mocks />);
    const button = screen.getByRole("button", { name: "History" });
    await waitFor(() => {
      expect(button).toBeInTheDocument();
    });
  });
  it("history button renders", async () => {
    render(<Mocks />);
    const button = screen.getByRole("button", { name: "Submit" });
    await waitFor(() => {
      expect(button).toBeInTheDocument();
    });
  });
});
