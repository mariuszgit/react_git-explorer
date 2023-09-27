import { FormEventHandler, useRef, useState } from "react"
import { StyledForm, StyledInput, StyledButton } from './styles'
import magnifier from "../../assets/magnifier.svg"

type Props = {
    onFormSubmit: (value: string) => void;
    reset: () => void;
}

export const AppForm = ({ onFormSubmit, reset }: Props) => {
    const [query, setQuery] = useState('');

    const inputRef = useRef(null)
    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        if (inputRef.current) {
          console.log(inputRef.current)
        }
        reset();
        onFormSubmit(query);
    }

    return (
        <StyledForm onSubmit={handleSubmit} className="AppForm App__form" ref={inputRef}>
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
            >
              <img src={magnifier} alt="Search" />
            </StyledButton>
        </StyledForm>
    )
}