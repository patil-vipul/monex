import { useEffect, useState } from "react";
import db from "../firebase";
import { doc, getDoc } from "firebase/firestore";



const useBalance = (/*url*/) => {
    const [balance, setBalance] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null)

    async function loadBalance() {
        const docRef = doc(db, "balances", "0");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setBalance(docSnap.data().balance)
            setIsLoaded(true)
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    useEffect(() => {
        const abortController = new AbortController()

        loadBalance()

        return () => abortController.abort()

    }, [/*url*/])

    return { balance, isLoaded, error, setBalance }
}

export default useBalance