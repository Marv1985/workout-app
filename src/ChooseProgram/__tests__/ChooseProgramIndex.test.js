import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";
import ChooseProgramIndex from "../ChooseProgramIndex";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import RouteSwitch from "../../RouteSwitch/RouteSwitch";

const Mocks = () => {
  return (
    <BrowserRouter>
      <ChooseProgramIndex />
    </BrowserRouter>
  );
};

/* Router navigation helper function */
const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: RouteSwitch }),
  };
};

describe("Router navigation", () => {
  it("5 day split click link navigating", async () => {
    const { user } = renderWithRouter(<ChooseProgramIndex />);
    expect(screen.getByText(/5 Day Body Part Split/i)).toBeInTheDocument();
    await user.click(screen.getByText(/5 Day Body Part Split/i));
    const text = screen.getByText("CHEST");
    expect(text).toBeInTheDocument();
  });

  it("4 day split navigating", async () => {
    renderWithRouter(<ChooseProgramIndex />, { route: "/FourDaySplit" });
    expect(screen.getByText("CHEST + TRI'S")).toBeInTheDocument();
  });

  it("Legs/push/pull navigating", async () => {
    renderWithRouter(<ChooseProgramIndex />, { route: "/LegsPushPull" });
    expect(screen.getByText("PULL")).toBeInTheDocument();
  });

  it("A/B Split navigating", async () => {
    renderWithRouter(<ChooseProgramIndex />, { route: "/ABSplit" });
    const text = screen.getAllByText("A")[0];
    expect(text).toBeInTheDocument();
  });

  it("Full body navigating", async () => {
    renderWithRouter(<ChooseProgramIndex />, { route: "/FullBodySplit" });
    const text = screen.getAllByText("FULL BODY")[0];
    expect(text).toBeInTheDocument();
  });
});

describe("Header component", () => {
  it("Check component renders", () => {
    render(<Mocks />);
    const text = screen.getByRole("heading", { level: 1 });
    expect(text).toHaveTextContent("WORKOUT PROGRAMS");
  });
});

describe("Instructions component", () => {
  it("Check component renders", () => {
    render(<Mocks />);
    const para = screen.getByText(/workout to store your progress/i);
    expect(para).toBeInTheDocument();
  });
});

describe("Check that Routines components Render", () => {
  it("check 1st component renders and link works", () => {
    render(<Mocks />);
    const text = screen.getByText(/5 Day Body Part Split/i);
    expect(text).toBeInTheDocument();
  });
  it("check 2nd component renders and link works", () => {
    render(<Mocks />);
    const text = screen.getByText(/4 Day Body Part Split/i);
    expect(text).toBeInTheDocument();
  });
  it("check 3rd component renders and link works", () => {
    render(<Mocks />);
    const text = screen.getByText("Legs / Push / Pull");
    expect(text).toBeInTheDocument();
  });
  it("check 4th component renders and link works", () => {
    render(<Mocks />);
    const text = screen.getByText("A / B Routine");
    expect(text).toBeInTheDocument();
  });
  it("check 5th component renders and link works", () => {
    render(<Mocks />);
    const text = screen.getByText("Full Body");
    expect(text).toBeInTheDocument();
  });
});

describe("Check that Routine components Images render", () => {
  it("Check 1st component image renders", () => {
    render(<Mocks />);
    const image = screen.getByAltText("5 day split");
    expect(image).toHaveAttribute("src", "platform_1200.webp");
  });
  it("Check 2nd component image renders", () => {
    render(<Mocks />);
    const image = screen.getByAltText("4 day split");
    expect(image).toHaveAttribute("src", "olypic_plates1000.jpg");
  });
  it("Check 3rd component image renders", () => {
    render(<Mocks />);
    const image = screen.getByAltText("legs push pull");
    expect(image).toHaveAttribute("src", "gym2048.jpeg");
  });
  it("Check 4th component image renders", () => {
    render(<Mocks />);
    const image = screen.getByAltText("a b split");
    expect(image).toHaveAttribute("src", "kettlebells.jpg");
  });
  it("Check 5th component image renders", () => {
    render(<Mocks />);
    const image = screen.getByAltText("full body split");
    expect(image).toHaveAttribute("src", "protein2940.jpg");
  });
});

describe("Check that routine components links", () => {
  it("check 1st image link", () => {
    render(<Mocks />);
    const link = screen.getByRole("link", { name: /5 Day Body Part Split/i });
    expect(link).toHaveAttribute("href", "/FiveDaySplit");
  });
  it("check 2nd image link", () => {
    render(<Mocks />);
    const link = screen.getByRole("link", { name: /4 Day Body Part Split/i });
    expect(link).toHaveAttribute("href", "/FourDaySplit");
  });
  it("check 3rd image link", () => {
    render(<Mocks />);
    const link = screen.getByRole("link", { name: /legs push pull/i });
    expect(link).toHaveAttribute("href", "/LegsPushPull");
  });
  it("check 4th image link", () => {
    render(<Mocks />);
    const link = screen.getByRole("link", { name: /a b split/i });
    expect(link).toHaveAttribute("href", "/ABSplit");
  });
  it("check 5th image link", () => {
    render(<Mocks />);
    const link = screen.getByRole("link", { name: /full body/i });
    expect(link).toHaveAttribute("href", "/FullBodySplit");
  });
});

describe("Check that Logout menu renders and links", () => {
  it("component renders", () => {
    render(<Mocks />);
    const text = screen.getByText(/Home/i);
    expect(text).toBeInTheDocument();
  });
  it("check home link work", () => {
    render(<Mocks />);
    const link = screen.getByRole("link", { name: /Home/i });
    expect(link).toHaveAttribute("href", "/");
  });
  it("check logout link work", () => {
    render(<Mocks />);
    const link = screen.getByRole("link", { name: /Logout/i });
    expect(link).toHaveAttribute("href", "/LoginScreen");
  });
});
