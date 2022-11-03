import styled from "styled-components";

export const FooterContainer = styled.footer`
  /* background-color: ${({ theme }) => theme.color.secondary}; */
  background-color: ${({ theme }) => theme.color.navfooter};
  color: ${({ theme }) => theme.color.black};
  width: 100%;
  padding: 3rem 0 3rem 0;
  overflow: hidden;
  display: flex;
  align-items: center;

  span {
    color: ${({ theme }) => theme.color.primary};
  }
`;
export const FooterContent = styled.div`
  max-width: 120rem;
  width: 90%;
  margin: 0 auto;

  p {
    font-family: "Exo", sans-serif;
  }
`;
