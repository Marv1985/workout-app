import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import LogOut from "../LogOut";
import { BrowserRouter } from "react-router-dom";
import * as userEvent from "@testing-library/user-event";
import RouteSwitch from "../../RouteSwitch/RouteSwitch";

const Mocks = () => {
  return (
    <BrowserRouter>
      <LogOut />
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
  const user = userEvent.default.setup();
  return {
    user: user,
    ...render(ui, { wrapper: RouteSwitch }),
  };
};

describe("Component renders and links work", () => {
  it("menu renders", async () => {
    render(<Mocks />);
    const link = screen.getByRole("link", { name: /Home/i });
    await waitFor(() => {
      expect(link).toHaveAttribute("href", "/ChooseProgram");
    });
  });

  it("logout navigating", async () => {
    renderWithRouter(<LogOut />, { route: "/" });
    await waitFor(() => {
      expect(screen.getAllByText("Sign Up")[0]).toBeInTheDocument();
    });
  });
  it("Choose program navigating", async () => {
    renderWithRouter(<LogOut />, { route: "/ChooseProgram" });
    await waitFor(() => {
      expect(screen.getAllByText("WORKOUT PROGRAMS")[0]).toBeInTheDocument();
    });
  });
});
