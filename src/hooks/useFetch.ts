import { useEffect, useState } from "react";
import { getRequest } from "../utils/http";

export default function useFetch (url: string) {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        setLoading(true);
        getRequest(url).then((res)=>{
            setData(res.data);
        }).catch((err)=>{
            setError(err);
        }).finally(()=>{
            setLoading(false);
        })
    },[url])

    return {data, loading, error};
}