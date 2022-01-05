import React,{useEffect} from 'react'
import { useDispatch ,useSelector} from "react-redux";
import { loginUser } from "../../store/user-actions";


const Home = () => {
    const {loginUser}= useSelector((state)=>state.user)
    const dispatch= useDispatch()
    
    useEffect(() => {
        dispatch(loginUser())
    }, [])
    console.log(loginUser)
    return (
        <div>
            
        </div>
    )
}

export default Home
