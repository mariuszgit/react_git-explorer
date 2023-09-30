import styled from "styled-components";

export const StyledModal = styled.div`
  display: block;
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 250px;
  padding: 24px;
  border: 1px solid var(--c-gray);
  border-radius: var(--b-radius);
  background-color: var(--c-gray--light);
  transform: translate(-50%, -50%);
  z-index: 99;
  transition: all 0.25s ease-out;

  &.hidden {
    opacity: 0;
  }

  & button {
    position: absolute;
    right: 8px;
    top: 8px;
    background-color: var(--c-gray);
    padding: 4px;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    cursor: pointer;

    &::before {
      width: 50%;
      height: 2px;
      background-color: var(--c-black);
      content: "";
      display: block;
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translateX(-50%) translateY(-50%) rotate(45deg);
      transform-origin: center center;
    }

    &::after {
      width: 50%;
      height: 2px;
      background-color: var(--c-black);
      content: "";
      display: block;
      left: 50%;
      position: absolute;
      top: 50%;
      transform: translateX(-50%) translateY(-50%) rotate(-45deg);
      transform-origin: center center;
    }
  }
`;
