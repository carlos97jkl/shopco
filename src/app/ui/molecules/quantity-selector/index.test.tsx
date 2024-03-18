import { act, fireEvent, screen } from "@testing-library/react";
import QuantitySelector from "./index";
import { renderWithProviders } from "@/app/utils/test-utils";

describe("form credit card", () => {
  const mockData = {
    cardNumber: "3742 454554 00126",
    cardholderID: "1234567890",
    cardholderName: "John Doe",
    expiryDate: "12/23",
    nameProduct: "Example Product",
    numberOfPayments: 1,
    price: 9.99,
    quantity: 1,
    securityCode: "123",
    total: 9.99,
  };
  let storeData = null;
  beforeEach(() => {
    const { store } = renderWithProviders(<QuantitySelector />, {
      dataTransaction: mockData,
    });
    storeData = store;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("it should render the quantity selector", () => {
    const contentElement = screen.getAllByText("Quantity")[0];
    expect(contentElement).toBeDefined();
  });

  it("it should click on plus button and add one quantity", async () => {
    const contentElement = screen.getAllByRole("button")[1];
    await act(async () => {
      fireEvent.click(contentElement);
    });
    const newValue = screen.getByDisplayValue("2");
    expect(newValue).toBeDefined();
  });
  it("it should click less button and remove  one quantity", async () => {
    const contentElement = screen.getAllByRole("button")[0];
    await act(async () => {
      fireEvent.click(contentElement);
    });
    const newValue = screen.getByDisplayValue("0");
    expect(newValue).toBeDefined();
  });

  it("it should click on less button and must be 0 quantities", async () => {
    const contentElement = screen.getAllByRole("button")[0];
    await act(async () => {
      fireEvent.click(contentElement);
    });
    await act(async () => {
      fireEvent.click(contentElement);
    });
    const newValue = screen.getByDisplayValue("0");
    expect(newValue).toBeDefined();
  });
});
