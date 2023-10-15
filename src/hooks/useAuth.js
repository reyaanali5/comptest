import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase';


export default function useAuth() {
    const [user, setUser] = useState(null); //user is null by default

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => { //inputs auth service which will trigger everytime user logs in/out
            console.log('got user: ', user);
            if (user) { //if user has a value
                setUser(user); //user is loged in
            } else {
                setUser(null); //else null
            }
        });
        return unsub;// it will remove this event when component unmounts
    }, [])

    return { user }
}