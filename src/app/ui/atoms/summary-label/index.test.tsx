import { fireEvent } from "@testing-library/react";
import SummaryLabel from "./index";
import { renderWithProviders } from "@/app/utils/test-utils";

const mockLabel = "Mock Label";
const mockValue = "Mock Value";

describe("summary label", () => {
  it("it should have a text with the mock label", () => {
    const element = renderWithProviders(
      <SummaryLabel label={mockLabel} value={mockValue} />,
    );
    const labelValue = element.getByText(`${mockLabel}:`);
    expect(labelValue).toBeDefined();
  });

  it("it should have a text with the value label", () => {
    const element = renderWithProviders(
      <SummaryLabel label={mockLabel} value={mockValue} />,
    );
    const labelValue = element.getByText(mockValue);
    expect(labelValue).toBeDefined();
  });
});
