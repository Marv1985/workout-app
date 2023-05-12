import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
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

describe("Router navigation", () => {
  it("5 day split navigating", async () => {
    renderWithRouter(<ChooseProgramIndex />, { route: "/FiveDaySplit" });
    await waitFor(() => {
      expect(screen.getByText("CHEST")).toBeInTheDocument();
    });
  });

  it("4 day split navigating", async () => {
    renderWithRouter(<ChooseProgramIndex />, { route: "/FourDaySplit" });
    await waitFor(() => {
      expect(screen.getByText("CHEST + TRI'S")).toBeInTheDocument();
    });
  });

  it("Legs/push/pull navigating", async () => {
    renderWithRouter(<ChooseProgramIndex />, { route: "/LegsPushPull" });
    await waitFor(() => {
      expect(screen.getByText("PULL")).toBeInTheDocument();
    });
  });

  it("A/B Split navigating", async () => {
    renderWithRouter(<ChooseProgramIndex />, { route: "/ABSplit" });
    const text = screen.getAllByText("A")[0];
    await waitFor(() => {
      expect(text).toBeInTheDocument();
    });
  });

  it("Full body navigating", async () => {
    renderWithRouter(<ChooseProgramIndex />, { route: "/FullBodySplit" });
    const text = screen.getAllByText("FULL BODY")[0];
    await waitFor(() => {
      expect(text).toBeInTheDocument();
    });
  });
});

describe("Header component", () => {
  it("Check component renders", async () => {
    render(<Mocks />);
    const text = screen.getByRole("heading", { level: 1 });
    await waitFor(() => {
      expect(text).toHaveTextContent("WORKOUT PROGRAMS");
    });
  });
});

describe("Instructions component", () => {
  it("Check component renders", async () => {
    render(<Mocks />);
    const para = screen.getByText(/workout to store your progress/i);
    await waitFor(() => {
      expect(para).toBeInTheDocument();
    });
  });
});

describe("Check that Routines components Render", () => {
  it("check 1st component renders and link works", async () => {
    render(<Mocks />);
    const text = screen.getByText(/5 Day Body Part Split/i);
    await waitFor(() => {
      expect(text).toBeInTheDocument();
    });
  });
  it("check 2nd component renders and link works", async () => {
    render(<Mocks />);
    const text = screen.getByText(/4 Day Body Part Split/i);
    await waitFor(() => {
      expect(text).toBeInTheDocument();
    });
  });
  it("check 3rd component renders and link works", async () => {
    render(<Mocks />);
    const text = screen.getByText("Legs / Push / Pull");
    await waitFor(() => {
      expect(text).toBeInTheDocument();
    });
  });
  it("check 4th component renders and link works", async () => {
    render(<Mocks />);
    const text = screen.getByText("A / B Routine");
    await waitFor(() => {
      expect(text).toBeInTheDocument();
    });
  });
  it("check 5th component renders and link works", async () => {
    render(<Mocks />);
    const text = screen.getByText("Full Body");
    await waitFor(() => {
      expect(text).toBeInTheDocument();
    });
  });
});

describe("Check that Routine components Images render", () => {
  it("Check 1st component image renders", async () => {
    render(<Mocks />);
    const image = screen.getByAltText("5 day split");
    await waitFor(() => {
      expect(image).toHaveAttribute("src", "platform_1200.webp");
    });
  });
  it("Check 2nd component image renders", async () => {
    render(<Mocks />);
    const image = screen.getByAltText("4 day split");
    await waitFor(() => {
      expect(image).toHaveAttribute("src", "olypic_plates1000.jpg");
    });
  });
  it("Check 3rd component image renders", async () => {
    render(<Mocks />);
    const image = screen.getByAltText("legs push pull");
    await waitFor(() => {
      expect(image).toHaveAttribute("src", "gym2048.jpeg");
    });
  });
  it("Check 4th component image renders", async () => {
    render(<Mocks />);
    const image = screen.getByAltText("a b split");
    await waitFor(() => {
      expect(image).toHaveAttribute("src", "kettlebells.jpg");
    });
  });
  it("Check 5th component image renders", async () => {
    render(<Mocks />);
    const image = screen.getByAltText("full body split");
    await waitFor(() => {
      expect(image).toHaveAttribute("src", "protein2940.jpg");
    });
  });
});

describe("Check that routine components links", () => {
  it("check 1st image link", async () => {
    render(<Mocks />);
    const link = screen.getByRole("link", { name: /5 Day Body Part Split/i });
    await waitFor(() => {
      expect(link).toHaveAttribute("href", "/FiveDaySplit");
    });
  });
  it("check 2nd image link", async () => {
    render(<Mocks />);
    const link = screen.getByRole("link", { name: /4 Day Body Part Split/i });
    await waitFor(() => {
      expect(link).toHaveAttribute("href", "/FourDaySplit");
    });
  });
  it("check 3rd image link", async () => {
    render(<Mocks />);
    const link = screen.getByRole("link", { name: /legs push pull/i });
    await waitFor(() => {
      expect(link).toHaveAttribute("href", "/LegsPushPull");
    });
  });
  it("check 4th image link", async () => {
    render(<Mocks />);
    const link = screen.getByRole("link", { name: /a b split/i });
    await waitFor(() => {
      expect(link).toHaveAttribute("href", "/ABSplit");
    });
  });
  it("check 5th image link", async () => {
    render(<Mocks />);
    const link = screen.getByRole("link", { name: /full body/i });
    await waitFor(() => {
      expect(link).toHaveAttribute("href", "/FullBodySplit");
    });
  });
});

describe("Check that Logout menu renders and links", () => {
  it("component renders", async () => {
    render(<Mocks />);
    const text = screen.getByText(/Home/i);
    await waitFor(() => {
      expect(text).toBeInTheDocument();
    });
  });
  it("check home link work", async () => {
    render(<Mocks />);
    const link = screen.getByRole("link", { name: /Home/i });
    await waitFor(() => {
      expect(link).toHaveAttribute("href", "/ChooseProgram");
    });
  });
  it("check logout link work", async () => {
    render(<Mocks />);
    const link = screen.getByRole("link", { name: /Logout/i });
    await waitFor(() => {
      expect(link).toHaveAttribute("href", "/");
    });
  });
});
