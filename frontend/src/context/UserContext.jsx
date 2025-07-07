import React, { Children } from "react";

export const UserContext = createContext();

const UserProvider = ({ Children }) => {
    const [user, setUser ] = useState(null);
    const [loading, setLoading ] = useState(true);

    useEffect(() => {
        if(user) return

        const accessToken = localStorage.getItem("token")
        if(!accessToken) {
            setLoading(false)
            return;
        }
        const fetchUser = async () => {
        try{
            const respone = await 
        }
        catch(error){

        }
    }  
    })
}