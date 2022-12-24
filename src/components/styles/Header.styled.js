import styled from "styled-components";

export const Header = styled.h1`
  text-align: center;
  font-weight: bold;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.header};
  font-weight: bold;
`;
