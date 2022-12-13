import MeetupList from '../components/meetups/MeetupList'
import BasketList from '../components/meetups/BasketList'
import { useContext,useEffect } from "react";
import GlobalContext from "./store/globalContext"
import { useRouter } from 'next/router';
import classes from "/styles/Home.module.css"

function HomePage() {
    const globalCtx = useContext(GlobalContext)
    const router = useRouter()
    let total = 0
    let basket = new Array(globalCtx.theGlobalObject.meetings.length)
    for (let ii = 0; ii < globalCtx.theGlobalObject.meetings.length; ii++) {
        if (globalCtx.theGlobalObject.basket[ii] == true ) {
            basket.push(globalCtx.theGlobalObject.meetings[ii])
        }
    }
    function totalPrice(){
        for (let ii = 0; ii < globalCtx.theGlobalObject.meetings.length; ii++) {
            if (globalCtx.theGlobalObject.basket[ii] == true ) {
                total += Number(globalCtx.theGlobalObject.meetings[ii].price)
            }
        }
        return total
    }
  
    return(
    <div>
        <BasketList meetups={basket} /> 
         <button className = {classes.button}  onClick = {()=> {globalCtx.checkout(); router.push('/')}}  >checkout</button>
         <div className={classes.total}>
         total : $ {totalPrice()} 
         </div>
    </div>
  
    ) 
}

export default HomePage;