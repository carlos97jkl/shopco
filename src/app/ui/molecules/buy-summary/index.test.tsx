import { screen, fireEvent, act } from "@testing-library/react";
import BuySummary from "./index";
import { renderWithProviders } from "@/app/utils/test-utils";

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

describe("buy summary", () => {
  const resetForm = jest.fn();
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

  beforeEach(() => {
    renderWithProviders(<BuySummary resetForm={resetForm} />, {
      dataTransaction: mockData,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("it should render the content of the buy summary", () => {
    const contentElement = screen.getByText(mockData.nameProduct);
    expect(contentElement).toBeDefined();
  });

  it("it should call the reset form method", async () => {
    const contentElement = screen.getByRole("button");
    await act(async () => {
      fireEvent.click(contentElement);
    });
    expect(replaceUrl).toHaveBeenCalled();
  });
});
