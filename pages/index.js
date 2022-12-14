import MeetupList from '../components/meetups/MeetupList'
import { useContext } from "react";
import GlobalContext from "./store/globalContext"
import classes from '../styles/Home.module.css'

function HomePage() {
    const globalCtx = useContext(GlobalContext)

    if (globalCtx.theGlobalObject.dataLoaded == true) {
        return(
            <div>
            <div className={classes.welcome}>
            <h1>Welcome to Shopsy!</h1>
            </div>
            <MeetupList meetups={globalCtx.theGlobalObject.meetings} />
            </div>
        ) 
    }
    return <div>Loading data from database, please wait . . . </div>
}

export default HomePage;