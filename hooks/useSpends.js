import { useEffect, useState } from "react";
import db from "../firebase";
import { doc, getDoc } from "firebase/firestore";



const useSpends = (/*url*/) => {
    const [spends, setSpends] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null)

    async function loadSpends() {
        const docRef = doc(db, "spends", "0");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setSpends(docSnap.data().spend)
            setIsLoaded(true)
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    useEffect(() => {
        const abortController = new AbortController()

        loadSpends()

        return () => abortController.abort()

    }, [/*url*/])

    return { spends, isLoaded, error, setSpends }
}

export default useSpends