import { useState, useEffect } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
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
                    setError(err.massage)
                    setIsPending(false);
                });
        }, 2000);
    }, [url]);

    return { data, isPending, error };
}