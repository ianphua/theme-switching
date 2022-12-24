import styled from "styled-components";

export const Footer = styled.footer`
  text-align: center;
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.colors.footer};
  color: ${({ theme }) => theme.colors.background};

  a {
    color: ${({ theme }) => theme.colors.background};
  }
`;
