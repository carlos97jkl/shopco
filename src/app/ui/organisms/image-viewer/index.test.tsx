import { act, fireEvent, screen } from "@testing-library/react";
import ImageViewer from "./index";
import { renderWithProviders } from "@/app/utils/test-utils";

describe("Image viewer", () => {
  const images = [
    "https://i.imgur.com/9LFjwpI.jpeg",
    "https://i.imgur.com/vzrTgUR.jpeg",
    "https://i.imgur.com/p5NdI6n.jpeg",
  ];

  beforeEach(() => {
    renderWithProviders(<ImageViewer imageList={images} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("it should render the quantity selector", () => {
    const contentElement = screen.getByTestId("product-image");
    expect(contentElement).toBeDefined();
  });
});
