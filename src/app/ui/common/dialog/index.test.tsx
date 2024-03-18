import { screen, fireEvent } from "@testing-library/react";
import CommonDialog from "./index";
import { renderWithProviders } from "@/app/utils/test-utils";

describe("CommonDialog", () => {
  const mockCloseDialog = jest.fn();
  const mockContent = "Test Content";
  const mockTitle = "Test Dialog";

  beforeEach(() => {
    renderWithProviders(
      <CommonDialog
        closeDialog={mockCloseDialog}
        isOpenDialog
        size="sm"
        title={mockTitle}
      >
        <p>{mockContent}</p>
      </CommonDialog>,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("it should render the content of the dialog", () => {
    const contentElement = screen.getByText("Test Content");
    expect(contentElement).toBeDefined();
  });

  it("it shoould render the title dialog", () => {
    const titleElement = screen.getByText("Test Dialog");
    expect(titleElement).toBeDefined();
  });

  it("it should remder the close button", () => {
    const closeButton = screen.getByRole("button");
    expect(closeButton).toBeDefined();
  });

  it("it should call the close button function", () => {
    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);
    expect(mockCloseDialog).toHaveBeenCalled();
  });
});
