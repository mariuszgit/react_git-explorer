import { styled } from 'styled-components';

export const StyledSection = styled.section`
display: flex;
flex-direction: column;
gap: 24px;
`

type Props = {
    active: boolean;
}

export const StyledArticle = styled.article<Props>`
width: 100%;
    opacity: ${props => props.active ? '100%' : '80%'};
    background-color: var(--c-gray--light);
    outline: ${props => props.active ? '4px solid var(--c-cyan)' : ''};
    padding: 24px 16px;
    border: 1px solid var(--c-gray);
    border-radius: var(--b-radius);
    transition: opacity .25s ease-out;
    cursor: pointer;

    &:hover {
        outline: 4px solid var(--c-cyan);
        opacity: 100%;
    }

    & .content {
        display: flex;
        align-items: center;
        gap: 24px;
    }

    & .image {
        width: 52px;
        border-radius: 50%;
    }
    & .info {
        display: flex;
        flex-direction: column;
    }
    & .footer {
        display: flex;
        gap: 48px;
    }
    
`;