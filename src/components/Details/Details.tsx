import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { Loader } from "../Loader";
import { Redirect } from "react-router-dom";


export const Details = () => {
    const { isLoading, value, error } = useFetch('abc');
    console.log(isLoading, value);

    return (
        <p>Lorem ipsum</p>
    );
}