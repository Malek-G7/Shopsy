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
      </Card>
      <button onClick = {()=> {globalCtx.incrementQuantity(3)}}></button>
    </li>
  );
}

export default BasketItem;
