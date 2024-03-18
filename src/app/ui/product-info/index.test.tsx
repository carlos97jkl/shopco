import { act, fireEvent, screen } from "@testing-library/react";
import ProductInfo from "./index";
import { renderWithProviders } from "@/app/utils/test-utils";

describe("Image viewer", () => {
  const info = {
    title: "title",
    price: "price",
    description: "description",
  };
  beforeEach(() => {
    renderWithProviders(<ProductInfo {...info} />, {
      dialog: true,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("it should render the checkout payment", () => {
    const contentElement = screen.getByText("title");
    expect(contentElement).toBeDefined();
  });
});
