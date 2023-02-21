import styled, { css } from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface IButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green'
}

export const ButtonContainer = styled.button<IButtonContainerProps>`
  width: 100px;
  height: 40px;
  border: 0;
  margin: 0.5rem;

  background-color: ${props => props.theme.primary};

  /* ${props => {
    return css`
      background-color: ${buttonVariants[props.variant]}
    `
  }} */
`