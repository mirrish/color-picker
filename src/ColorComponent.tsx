import styled from "styled-components";
import { PrimaryButton, SecondaryButton } from "./Buttons";
import { Color } from "./Color";
import { hasOkayContrast } from "./util";

const Square = styled.div.attrs((props) => ({
  style: {
    backgroundColor: props.color,
  },
}))`
  cursor: pointer;
`;

const ColorSquare = styled(Square)`
  height: 300px;
  position: relative;
`;

const InnerSquare = styled(Square)`
  position: absolute;
  top: 30px;
  left: 30px;
  right: 30px;
  bottom: 30px;
`;

const Text = styled.div.attrs((props) => ({
  style: {
    color: props.color,
  },
}))`
  padding: 5px;
`;

interface ColorComponentProps {
  primary: Color;
  secondary?: Color;
  tertiary?: Color;
  onClick?: (color: Color) => void;
}

const ColorComponent = ({
  primary,
  secondary,
  tertiary,
  onClick,
}: ColorComponentProps) => {
  if (tertiary && secondary) {
    if (!hasOkayContrast(secondary.color, tertiary.color, "AA")) {
      return null;
    }
  }
  if (secondary && primary) {
    if (!hasOkayContrast(primary.color, secondary.color, "min")) {
      return null;
    }
  }
  const handleOnClick = () => {
    navigator.clipboard.writeText(
      `${primary.color}\n${secondary?.color}\n${tertiary?.color}\n`
    );
    onClick && onClick(tertiary ?? secondary ?? primary);
  };
  return (
    <ColorSquare onClick={handleOnClick} color={primary.color}>
      {secondary && (
        <InnerSquare color={secondary.color}>
          {tertiary && (
            <Text color={tertiary.color}>
              <h1>Titel</h1>
              <span>
                <b>Fet stil</b>
                och lite test text här
              </span>
              <span>
                <PrimaryButton
                  primaryColor={primary.color}
                  secondaryColor={secondary.color}
                  tertiaryColor={tertiary.color}
                >
                  Button1
                </PrimaryButton>
                <SecondaryButton
                  primaryColor={primary.color}
                  secondaryColor={secondary.color}
                  tertiaryColor={tertiary.color}
                >
                  Button2
                </SecondaryButton>
              </span>
            </Text>
          )}
        </InnerSquare>
      )}
    </ColorSquare>
  );
};

export default ColorComponent;
