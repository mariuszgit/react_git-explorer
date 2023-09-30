import { FormEventHandler, useRef, useState } from "react"
import { StyledForm, StyledInput, StyledButton } from './styles'
import magnifier from "../../assets/magnifier.svg"

type Props = {
    onFormSubmit: (value: string) => void;
    reset: () => void;
}

export const AppForm = ({ onFormSubmit, reset }: Props) => {
    const [query, setQuery] = useState('');

    const buttonRef = useRef<HTMLButtonElement>(null)
    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        buttonRef.current?.blur();
        reset();
        onFormSubmit(query);
        setQuery('');
    }

    return (
        <StyledForm onSubmit={handleSubmit} className="AppForm App__form">
            <StyledInput
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Enter username"
              className="AppForm__input"
            />
            <StyledButton 
              type="submit"
              disabled={!!!(query)}
              className="AppForm__btn"
              ref={buttonRef}
            >
              <img src={magnifier} alt="Search" />
            </StyledButton>
        </StyledForm>
    )
}