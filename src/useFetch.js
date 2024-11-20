import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortController.signal})
                .then(res => {
                    if (!res.ok) {
                        throw Error("Didn't find that resource on database.");
                    } 
                    return res.json();
                })
                .then(d => {
                    setData(d);
                    setIsPending(false);
                    setError(false);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('Fetch aborted');
                    } else {
                        setError(err.message)
                        setIsPending(false);
                    }
                });
        }, 1000);

        return () => abortController.abort();
    }, [url]);

    return { data, isPending, error };
}