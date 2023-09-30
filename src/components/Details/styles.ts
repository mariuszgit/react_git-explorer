import styled from 'styled-components';

export const StyledSection = styled.section`
    display: grid;
    grid-template-columns: 228px auto;
    gap: 24px;
    & div {
        border: 1px solid var(--c-gray);
        border-radius: var(--b-radius);
        padding: 16px;
    }
    & img {
            width: 180px;
            border-radius: 50%;
    }
    & .Details__profile {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
    }
`