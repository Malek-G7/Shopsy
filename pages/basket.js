import MeetupList from '../components/meetups/MeetupList'
import BasketList from '../components/meetups/BasketList'
import { useContext,useState } from "react";
import GlobalContext from "./store/globalContext"
import { useRouter } from 'next/router';
import classes from "/styles/Home.module.css"

function basket() {
    const globalCtx = useContext(GlobalContext)
    const router = useRouter()
    let total = 0
    let basket = new Array(globalCtx.theGlobalObject.meetings.length)
    for (let ii = 0; ii < globalCtx.theGlobalObject.meetings.length; ii++) {
        if (globalCtx.theGlobalObject.basket[ii] == true ) {
            basket.push(globalCtx.theGlobalObject.meetings[ii])
        }
    }
    for (let ii = 0; ii < globalCtx.theGlobalObject.meetings.length; ii++) {
        if (globalCtx.theGlobalObject.basket[ii] == true ) {
            total += ( Number(globalCtx.theGlobalObject.meetings[ii].price) * Number(globalCtx.theGlobalObject.meetings[ii].quantity) )
        }
    }
  
    return(
    <div>
        <BasketList meetups={basket} /> 
         <button className = {classes.button}  onClick = {()=> {globalCtx.checkout(); router.push('/')}}  >checkout</button>
         total : $ {total} 
    </div>
  
    ) 
}

export default basket;