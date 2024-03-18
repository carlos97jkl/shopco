import { screen, fireEvent, act } from "@testing-library/react";
import FormCreditCard from "./index";
import { renderWithProviders } from "@/app/utils/test-utils";

describe("form credit card", () => {
  let stateData: any = null;
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
  const paymentInputs = {
    getCVCProps: jest.fn(),
    getCardImageProps: jest.fn(),
    getCardNumberProps: jest.fn(),
    getExpiryDateProps: jest.fn(),
    meta: {},
  };

  const register = jest.fn();

  beforeEach(() => {
    const { store } = renderWithProviders(
      <FormCreditCard
        errors={{}}
        paymentInputs={paymentInputs as any}
        register={register}
      />,
      {
        dataTransaction: mockData,
      },
    );
    stateData = store.getState().dataTransaction;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("it should render the content of the buy summary", () => {
    const contentElement = screen.getAllByText("Credit card number")[0];
    expect(contentElement).toBeDefined();
  });
});
