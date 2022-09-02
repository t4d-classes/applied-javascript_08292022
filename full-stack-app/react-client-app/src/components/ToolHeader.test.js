import React from "react";

import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import { ToolHeader } from "./ToolHeader";

test("snapshot ToolHeader component", () => {
  expect(
    renderer.create(<ToolHeader headerText="The Tool" />).toJSON()
  ).toMatchSnapshot();
});

describe("ToolHeader component", () => {
  test("should render ToolHeader component", () => {
    render(
      <ToolHeader headerText="The Tool" />
    );

    // does not check a specific element, just looks for the text
    expect(screen.getByText("The Tool")).toBeInTheDocument();

    // role "heading" selects the <h1> not the <header>
    expect(screen.getByRole("heading").textContent).toBe("The Tool");
  });
});
