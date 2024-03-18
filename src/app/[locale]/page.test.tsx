import { act, fireEvent, screen } from "@testing-library/react";
import Page from "./page";
import { renderWithProviders } from "@/app/utils/test-utils";

const replaceUrl = jest.fn();

jest.mock("../hooks/useReplaceQuery", () => {
  const originalModule = jest.requireActual("../hooks/useReplaceQuery");

  return {
    __esModule: true,
    ...originalModule,
    default: () => {
      return { replaceUrl };
    },
  };
});

jest.mock("next/navigation", () => {
  const originalModule = jest.requireActual("next/navigation");

  return {
    __esModule: true,
    ...originalModule,
    useSearchParams: () => ({
      get: jest.fn(() => ""),
    }),
  };
});

describe("Image viewer", () => {
  const info = {
    title: "title",
    price: "price",
    description: "description",
  };
  beforeEach(async () => {
    renderWithProviders(await Page(), {
      dialog: true,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("it should render the checkout payment", () => {
    const contentElement = screen.getByText("About this article:");
    expect(contentElement).toBeDefined();
  });
});
