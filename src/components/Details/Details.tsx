import { useFetch } from "../../hooks/useFetch";
import { Loader } from "../Loader";
import './Details.scss';


export const Details = () => {
    const { isLoading, value, error } = useFetch('abc');
    console.log(isLoading, value);
    return (
        <p>Lorem ipsum</p>
    );
}