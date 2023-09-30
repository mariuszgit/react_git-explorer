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
  justify-content: space-between;
  align-items: center;
  padding: 48px 0;
  & .content {
    width: 40%;
  }

  & img.hero-image {
    max-width: 40%;
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

export const StyledItem = styled.div``;
export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 16px;
  background-color: var(--c-cyan);
  border: 1px solid var(--c-gray);
  border-bottom: none;
  border-radius: var(--b-radius) var(--b-radius) 0 0;
  transition: all 0.15s ease-in-out;
  &:hover {
    filter: brightness(1.05);
  }
`;