import { render, screen } from "@testing-library/react";
import page from "./page1.js";

test("renders learn react link", () => {
  render(<welcome />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
