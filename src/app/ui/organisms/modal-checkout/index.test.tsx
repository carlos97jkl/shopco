import { act, fireEvent, screen } from "@testing-library/react";
import ModalCheckout from "./index";
import { renderWithProviders } from "@/app/utils/test-utils";
import { get } from "http";

const replaceUrl = jest.fn();

jest.mock("../../../hooks/useReplaceQuery", () => {
  const originalModule = jest.requireActual("../../../hooks/useReplaceQuery");

  //Mock the default export and named export 'foo'
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

  //Mock the default export and named export 'foo'
  return {
    __esModule: true,
    ...originalModule,
    useSearchParams: () => ({
      get: jest.fn(() => ""),
    }),
  };
});

describe("Image viewer", () => {
  beforeEach(() => {
    renderWithProviders(<ModalCheckout />, {
      dialog: true,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("it should render the checkout payment", () => {
    const contentElement = screen.getByText("Checkout payment");
    expect(contentElement).toBeDefined();
  });

  it("it should forward of step", async () => {
    const nextButton = screen.getByText("Next");
    act(() => {
      fireEvent.click(nextButton);
    });
    const summaryTitle = await screen.findByText("Summary");
    expect(summaryTitle).toBeDefined();
  });

  it("it should back step", async () => {
    const nextButton = screen.getByText("Next");
    act(() => {
      fireEvent.click(nextButton);
    });
    const backButton = screen.getByText("Back");
    act(() => {
      fireEvent.click(backButton);
    });
    const summaryTitle = await screen.findByText("Payment data");
    expect(summaryTitle).toBeDefined();
  });
});
