import styled from "styled-components";

export const Form = styled.form`
  & > * {
    margin: 5px 0px;
  }
`;

export const Button = styled.button`
  box-sizing: border-box;
  border: none;
  padding: 10px 20px;
  font-size: 0.875rem;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
  cursor: pointer;
  background-color: #0080ff;
  color: #fff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12);

  &:active {
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
  }

  &:hover {
    background-color: #046bcc;
  }

  &:focus {
    outline: none;
  }
`;
