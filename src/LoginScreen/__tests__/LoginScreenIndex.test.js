import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import LoginScreenIndex from "../LoginScreenIndex";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import RouteSwitch from "../../RouteSwitch/RouteSwitch";

const Mocks = () => {
  return (
    <BrowserRouter>
      <LoginScreenIndex />
    </BrowserRouter>
  );
};

//deal with scroll.top warning
window.scrollTo = jest.fn();
afterEach(() => {
  jest.resetAllMocks();
});
afterAll(() => {
  jest.clearAllMocks();
});

/* Router navigation helper function */
const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: RouteSwitch }),
  };
};

describe("component renders", () => {
  it("signup component renders", async () => {
    render(<Mocks />);
    const link = screen.getAllByText(/Sign Up/i)[0];
    await waitFor(() => {
      expect(link).toBeInTheDocument();
    });
  });
  it("login component renders", async () => {
    render(<Mocks />);
    const link = screen.getByText(/Login/i);
    fireEvent.click(link);
    const login = screen.getAllByText(/Login/i)[0];
    await waitFor(() => {
      expect(login).toBeInTheDocument();
    });
  });
  it("Check background image renders", async () => {
    render(<Mocks />);
    const image = screen.getByAltText("background");
    await waitFor(() => {
      expect(image).toHaveAttribute("src", "barbell.webp");
    });
  });
});

describe("inputs accept correct input", () => {
  test("name input accepts letters", async () => {
    render(<Mocks />);
    const input = screen.getByPlaceholderText("User name");
    fireEvent.change(input, { target: { value: "Marv" } });
    await waitFor(() => {
      expect(input.value).toBe("Marv");
    });
  });
});
test("email accepts email format", async () => {
  render(<Mocks />);
  const input = screen.getByPlaceholderText("Email");
  fireEvent.change(input, { target: { value: "marv@marv.com" } });
  await waitFor(() => {
    expect(input.value).toBe("marv@marv.com");
  });
});
test("password accepts input", async () => {
  render(<Mocks />);
  const input = screen.getByPlaceholderText("Password");
  fireEvent.change(input, { target: { value: "blah123" } });
  await waitFor(() => {
    expect(input.value).toBe("blah123");
  });
});
test("confirm password accepts input", async () => {
  render(<Mocks />);
  const input = screen.getByPlaceholderText("Confirm password");
  fireEvent.change(input, { target: { value: "blah123" } });
  await waitFor(() => {
    expect(input.value).toBe("blah123");
  });
});

describe("buttons navigate correctly", () => {
  it("buttons navigate", async () => {
    renderWithRouter(<LoginScreenIndex />, { route: "/ChooseProgram" });
    await waitFor(() => {
      expect(screen.getByText("WORKOUT PROGRAMS")).toBeInTheDocument();
    });
  });
});
