import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import FullBody from "../Components/FullBody";

const Mocks = () => {
  return (
    <BrowserRouter>
      <FullBody />
    </BrowserRouter>
  );
};

describe("components render and inputs accept an input", () => {
  it("component renders", async () => {
    render(<Mocks />);
    const title = screen.getByText("Full Body Routine");
    const muscle = screen.getAllByText("FULL BODY")[0];
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

//submit function gives alert error if table is empty. So this mocks it
window.alert = jest.fn();

afterEach(() => {
  window.alert = jest.fn();
});

describe("test buttons", () => {
  it("submit onClick prop when clicked", async () => {
    const adds = jest.fn();
    render(<Mocks onClick={adds()} />);
    fireEvent.click(screen.getByText(/Submit/i));
    await waitFor(() => {
      expect(adds).toHaveBeenCalledTimes(1);
    });
  });

  it("history onClick prop when clicked", async () => {
    const getData = jest.fn();
    render(<Mocks onClick={getData()} />);
    fireEvent.click(screen.getByText(/History/i));
    await waitFor(() => {
      expect(getData).toHaveBeenCalledTimes(1);
    });
  });
});
