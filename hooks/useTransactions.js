import { useEffect, useState } from "react";
import db from "../firebase";
import { collection, getDocs } from "firebase/firestore";



const useTransactions = (/*url*/) => {
    const [transactions, setTransactions] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null)

    async function loadTransactions() {
        const querySnapshot = await getDocs(collection(db, "transactions"));
        console.log(querySnapshot.docs)
        let t = querySnapshot.docs.map(doc => {
            let d = doc.data();
            d.id = doc.id
            d.timestamp = d.timestamp.toMillis()
            return d
        })
        setTransactions(t)
        setIsLoaded(true)
    }

    useEffect(() => {
        const abortController = new AbortController()

        loadTransactions()

        return () => abortController.abort()

    }, [/*url*/])

    return { transactions, isLoaded, error, setTransactions }
}

export default useTransactions