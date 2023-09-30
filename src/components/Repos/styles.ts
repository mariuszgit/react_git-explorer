import { css, styled } from 'styled-components';
type StyledSectionProps = {
    grid: boolean
}
export const StyledSection = styled.section<StyledSectionProps>`
display: grid;
gap: 24px;
${props => props.grid && css`
    grid-template-columns: 50% 50%;
`}
`

type Props = {
    active: boolean
}

export const StyledArticle = styled.article<Props>`
    opacity: ${props => props.active ? '100%' : '80%'};
    background-color: var(--c-gray--light);
    outline: ${props => props.active ? '4px solid var(--c-cyan)' : ''};
    padding: 24px 16px;
    border: 1px solid var(--c-gray);
    border-radius: var(--b-radius);
    transition: opacity .25s ease-out;
    cursor: pointer;

    & header {
        display: flex;
        gap: 16px;
        align-items: center;
        & img {
            width: 32px;
            border-radius: 50%;
        }
    }

    & main {
        
    }

    & footer {
        display: flex;
        gap: 24px;
    }

    &:hover {
        outline: 4px solid var(--c-cyan);
        opacity: 100%;
    }
    
`;