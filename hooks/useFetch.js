import { useFocusEffect, useIsFocused } from "@react-navigation/core";
import { useCallback, useEffect, useState } from "react";

const useFetch = (url) => {
    const isFocused = useIsFocused();
    const [data, setData] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null)
    
    useFocusEffect(useCallback(()  =>{

        const abortController = new AbortController()
        console.log('in effect')
        fetch(url, { signal: abortController.signal }).then(res => {
            if (!res.ok) throw Error('Cannot fetch data.')
            return res.json()
        }).then((data) => {
           setData(data)
            console.log(data)
           setIsLoaded(true)
            setError(null);
        }).catch(err => {
            if (err.name === 'AbortError') {
                console.log('Fetch Aborted')
            } else {
                setError(err.message)
                setIsLoaded(true)
            }

        })

        return () => abortController.abort()

    }, [ url]))
    
    return { data, isLoaded, error, setData }
}

export default useFetch