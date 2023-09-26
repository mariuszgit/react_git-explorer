import { FormEventHandler, useState } from "react"
import './AppForm.scss'

type Props = {
    onFormSubmit: (value: string) => void
}

export const AppForm = ({ onFormSubmit }: Props) => {
    const [query, setQuery] = useState('');

    const handleSubmit: FormEventHandler = (e) => {
        e.preventDefault();
        onFormSubmit(query);
    }

    return (
        <form onSubmit={handleSubmit} className="AppForm App__form">
            <input 
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Enter username"
              className="AppForm__input"
            />
            <button 
              type="submit"
              disabled={!!!(query)}
              className="AppForm__btn"
            >
              Search
            </button>
        </form>
    )
}