import MeetupList from '../components/meetups/MeetupList'
import { useContext } from "react";
import GlobalContext from "./store/globalContext"
import { useRouter } from 'next/router';
import classes from "/styles/Home.module.css"

function HomePage() {
    const globalCtx = useContext(GlobalContext)
    const router = useRouter()

    let basket = new Array(globalCtx.theGlobalObject.meetings.length)
    
    for (let ii = 0; ii < globalCtx.theGlobalObject.meetings.length; ii++) {
        if (globalCtx.theGlobalObject.basket[ii] == true ) {
            basket.push(globalCtx.theGlobalObject.meetings[ii])
        }
    }    
    return(
    <div>
    <MeetupList meetups={basket} /> 
         <button className = {classes.button}  onClick = {()=> {globalCtx.checkout(); router.push('/')}}  >checkout</button>
        </div>
        
    ) 
}

export default HomePage;