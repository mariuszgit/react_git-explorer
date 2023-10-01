import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const StyledHeader = styled.header`
  padding: 16px 0;
  border-bottom: 1px solid var(--c-gray);
  & .container {
    display: flex;
    align-items: center;
    gap: 4px;
  }
  & img {
    width: 24px;
  }
`;

export const StyledHeroSection = styled.section`
  display: flex;
  flex-direction: column;
  
  align-items: center;
  padding: 48px 0;
  & .content {
    width: 100%;
  }
  & img.hero-image {
    max-width: 60%;
  }

  @media (min-width: 760px) {
    flex-direction: row;
    justify-content: space-between;
    & .content {
      width: 40%;
    }
    & img.hero-image {
      width: 40%
    }
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--c-gray);
  margin-bottom: 24px;
  padding: 0 4px;

  & .Nav__controls {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

