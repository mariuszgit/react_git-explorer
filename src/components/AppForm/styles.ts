import styled from 'styled-components';

export const StyledForm = styled.form`
  padding: 4px;
  border: 1px solid var(--c-gray);
  border-radius: var(--b-radius);
  margin-bottom: 64px;
  display: flex;

  &:focus-within {
    outline: 4px solid var(--c-cyan--light);
    border: 1px solid var(--c-cyan);
  }
`;

export const StyledInput = styled.input`
  padding: 8px 16px;
  font-family: 'Raleway', sans-serif;
  font-size: 16px;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 52px;
  height: 52px;
  background-color: var(--c-cyan);
  border-radius: var(--b-radius);
  transition: all .15s ease-in-out;
  cursor: pointer;

    &:hover {
        filter: brightness(1.05);
    }
    & img {
      pointer-events: none;
    }
`;