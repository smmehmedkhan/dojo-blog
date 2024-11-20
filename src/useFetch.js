import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
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
    }, [url]);

    return { data, isPending, error };
}