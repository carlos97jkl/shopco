import { fireEvent } from "@testing-library/react";
import ButtonImage from "./index";
import { renderWithProviders } from "@/app/utils/test-utils";

const onClickMock = jest.fn();
const mockUrl = "https://i.imgur.com/9LFjwpI.jpeg";

describe("ButtonImage", () => {
  it("renders the button with the provided image", () => {
    const element = renderWithProviders(
      <ButtonImage
        isImageSelected={false}
        onClick={onClickMock}
        url={mockUrl}
      />,
    );
    const buttonImage = element.getByAltText("Image selector");
    expect(buttonImage).toBeDefined();
  });

  it("calls the onClick function when the button is clicked", () => {
    const onClickMock = jest.fn();
    const element = renderWithProviders(
      <ButtonImage
        isImageSelected={false}
        onClick={onClickMock}
        url={mockUrl}
      />,
    );
    const buttonImage = element.getByAltText("Image selector");
    fireEvent.click(buttonImage);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("it should have a image focus class when isimageselected is true", () => {
    const onClickMock = jest.fn();
    const element = renderWithProviders(
      <ButtonImage
        isImageSelected={true}
        onClick={onClickMock}
        url={mockUrl}
      />,
    );
    const buttonImage = element.getByTestId("button-image");
    expect(buttonImage.className).toBe("divImage imageFocus");
  });
});
