import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #104239;
  border: none;
  padding: 10px 20px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

const Button = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

export default Button;
