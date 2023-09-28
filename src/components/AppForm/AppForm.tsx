import { FormEventHandler, useRef, useState } from "react"
import { StyledForm, StyledInput, StyledButton } from './styles'
import magnifier from "../../assets/magnifier.svg"

type Props = {
    onFormSubmit: (value: string) => void;
    reset: () => void;
}

export const AppForm = ({ onFormSubmit, reset }: Props) => {
    const [query, setQuery] = useState('');

    const inputRef = useRef<HTMLInputElement>(null)
    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();

          // inputRef.current?.blur()
          // e.target.focus()

        reset();
        onFormSubmit(query);
        console.log(inputRef)
    }

    return (
        <StyledForm onSubmit={handleSubmit} className="AppForm App__form">
            <StyledInput
              ref={inputRef}
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