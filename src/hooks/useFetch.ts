import { useEffect, useRef, useState } from "react"


type Data<T> = {
    isLoading: boolean;
    value: T | null;
    error: Error | null;
} 

export const useFetch = <T>(url: string): Data<T> => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [value, setValue] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const fetchRef = useRef<AbortController | null>(null);
    

    useEffect(() => {
        const abortCtrl = new AbortController();
        if (fetchRef.current) {
            fetchRef.current = abortCtrl;
        }

        console.log(url);
        if (!url) return;
        const fetchData = async () => {
            try {
                const res = await fetch(`https://api.github.com/users/${url}`, { signal: abortCtrl.signal });
                console.log(`https://api.github.com/users/${url}`)
                const json = await res.json();
                setValue(json);
            } catch (err) {
                setError(err as Error)
            } finally {
                setIsLoading(false)

            }
        }

        setIsLoading(true);
        fetchData();
        return () => {
            abortCtrl.abort();
        }
    }, [url]);

    return { isLoading, value, error};

}