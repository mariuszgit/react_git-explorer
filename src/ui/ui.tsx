import styled from 'styled-components';

type Props = {
    active?: boolean;
}

export const StyledButton = styled.button<Props>`
    background-color: white;
    padding: 4px;
    border: 1px solid var(--c-gray);
    border-radius: var(--b-radius);
    outline: ${props => (props.active) ? '4px solid var(--c-cyan)' : 'none'};
    cursor: pointer;
    & img {
        width: 24px;
        vertical-align: bottom;
    }
    &:hover {
        outline: 4px solid var(--c-cyan);
    }
`