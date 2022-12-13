
import classes from './MeetupDetail.module.css'
import GlobalContext from "../../pages/store/globalContext"
import { useContext } from 'react'
import { useRouter } from 'next/router'

function MeetupDetail(props) {
    const globalCtx = useContext(GlobalContext)
    const router = useRouter()

    return (
        <section className={classes.detail}>
            <img src={props.image} alt={props.title} />
            <div className={classes.description}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>Price: $ {props.price}</p>
            <div className={classes.actions}>
                <button onClick = {()=> {globalCtx.addToBasket(props.id); router.push('/')}} className={classes.button}> Add to basket </button>
            </div>
            </div>
        </section>
    )
}

export default MeetupDetail