import styled from "styled-components";

interface ButtonProps {
  primaryColor: string;
  secondaryColor: string;
  tertiaryColor: string;
}

const BaseButton = styled.button`
  margin: 5px;
  margin-top: 15px;
`;

export const PrimaryButton = styled(BaseButton).attrs<ButtonProps>((props) => ({
  style: {
    color: props.tertiaryColor,
    backgroundColor: props.secondaryColor,
    border: "solid 4px",
    borderColor: props.primaryColor,
  },
}))<ButtonProps>``;

export const SecondaryButton = styled(BaseButton).attrs<ButtonProps>(
  (props) => ({
    style: {
      color: props.secondaryColor,
      backgroundColor: props.primaryColor,
      border: "none",
      padding: "5px 9px 5px 9px",
    },
  })
)<ButtonProps>``;
