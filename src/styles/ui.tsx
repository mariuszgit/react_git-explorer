import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
  $active?: boolean;
};

export const StyledButton = styled.button<Props>`
  display: none;
  background-color: white;
  padding: 4px;
  border-radius: var(--b-radius);
  cursor: pointer;
  border: ${(props) =>
    props.$active ? "1px solid var(--c-cyan)" : "1px solid var(--c-gray)"};
  outline: ${(props) =>
    props.$active ? "4px solid var(--c-cyan--light)" : "none"};
  & img {
    width: 24px;
    vertical-align: bottom;
  }
  &:hover {
    outline: 4px solid var(--c-cyan--light);
  }
  @media (min-width: 760px) {
    display: block;
  }
`;

export const StyledTab = styled(Link)`
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
