import { screen } from "@testing-library/react";
import SnackBar from "./index";
import { renderWithProviders } from "@/app/utils/test-utils";

describe("snackbar", () => {
  const mockDialog = {
    show: true,
    message: "Test Message",
  };

  beforeEach(() => {
    renderWithProviders(<SnackBar />, {
      alert: mockDialog,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("it should render the content of the snackbar", () => {
    const contentElement = screen.getByText(mockDialog.message);
    expect(contentElement).toBeDefined();
  });
});
