import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url: string) => {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get(url)
            .then((response) => {
                setData(response.data)
            })
            .catch((error) => {
                console.log(error)
            }).finally(() => {
                setLoading(false);
            })
    }, [])
    return [data, loading]
}

export default useFetch;