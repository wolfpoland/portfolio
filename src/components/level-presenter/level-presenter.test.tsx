import { afterEach, expect, it, vi } from "vitest";
import { cleanup, render, screen } from "@testing-library/react";
import { LevelPresenter } from "./level-presenter";

afterEach(cleanup);

it("should render the level presenter component", () => {
  render(<LevelPresenter levelCount={5} filledLevels={0} />);
});

it("should render nothing when levelCount is equal zero", async () => {
  render(<LevelPresenter levelCount={0} filledLevels={0} />);

  const presenterContainer = await screen.findByTestId(
    "level-presenter-container",
  );

  expect(presenterContainer.children.length).toBe(0);
});

it("should raise error when filledLevels is greater then levelCount", async () => {
  const consoleSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
  const renderComponent = () =>
    render(<LevelPresenter levelCount={0} filledLevels={1} />);

  expect(renderComponent).toThrowError(
    "filledLevels cannot be greater then levelCount in LevelPresenter component",
  );
  consoleSpy.mockRestore();
});

it("should render 5 levels when levelCount is equal 5", async () => {
  render(<LevelPresenter levelCount={5} filledLevels={0} />);

  const presenterContainer = await screen.findAllByTestId(
    "level-presenter-level",
  );

  expect(presenterContainer.length).toBe(5);
});

it("should render 5 filled levels when filledLevels is equal 5", async () => {
  render(<LevelPresenter levelCount={5} filledLevels={5} />);

  const presenterContainer = await screen.findAllByTestId(
    "level-presenter-level-filled",
  );

  expect(presenterContainer.length).toBe(5);
});

it("should render 3 filled levels when filledLevels is equal 3", async () => {
  render(<LevelPresenter levelCount={5} filledLevels={3} />);

  const presenterContainer = await screen.findAllByTestId(
    "level-presenter-level-filled",
  );

  expect(presenterContainer.length).toBe(3);
});

it("should render 2 levels when filledLevels is equal 3", async () => {
  render(<LevelPresenter levelCount={5} filledLevels={3} />);

  const presenterContainer = await screen.findAllByTestId(
    "level-presenter-level",
  );

  expect(presenterContainer.length).toBe(2);
});

it("should render max scale label", async () => {
  render(<LevelPresenter levelCount={1} filledLevels={1} />);

  const maxScale = await screen.findByTestId("level-presenter-max-scale");

  expect(maxScale.textContent).toEqual("Master");
});

it("should render min scale label", async () => {
  render(<LevelPresenter levelCount={1} filledLevels={1} />);

  const minScale = await screen.findByTestId("level-presenter-min-scale");

  expect(minScale.textContent).toEqual("Rookie");
});

