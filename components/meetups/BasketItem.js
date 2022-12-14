import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import { useRouter } from 'next/router';
import GlobalContext from "../../pages/store/globalContext"
import { useContext } from 'react'
function BasketItem(props) {
const globalCtx = useContext(GlobalContext)

  
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <p>Price: ${props.price}</p>
          <p>quantity: {props.quantity}</p>
        </div>
        <div className={classes.icons}>
        <button onClick = {()=> {globalCtx.incrementQuantity(props.price)}}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={classes.icon}>
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          </button>
        <button onClick = {()=> {globalCtx.decrementQuantity(props.price)}}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class={classes.icon}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 12h-15" />
        </svg>
        </button>
        </div>
        
      </Card>
      
    </li>
  );
}

export default BasketItem;
