import styled from 'styled-components';

export const StyledDiv = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.9);
    z-index: 199;
  
    & .content {
      border-radius: 50%;
      width: 2em;
      height: 2em;
      margin: 1em auto;
      border: 4px solid var(--c-gray);
      border-left-color: var(--c-cyan);
      animation: load8 1.2s infinite linear;
    }

    @keyframes load8 {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
`