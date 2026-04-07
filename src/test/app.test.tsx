import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Index from "@/pages/Index";

describe("portfolio app", () => {
  it("renders the main sections without placeholder project links", () => {
    const { container } = render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: /experience/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /technical proficiency/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /let's connect/i })).toBeInTheDocument();

    const placeholderLinks = Array.from(container.querySelectorAll("a")).filter(
      (link) => link.getAttribute("href") === "#",
    );

    expect(placeholderLinks).toHaveLength(0);
  });
});
