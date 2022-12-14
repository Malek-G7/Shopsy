import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import { useRouter } from 'next/router';

function MeetupItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push('/' + props.id);
  }

  return (
    <li className={classes.item}>
      <Card>
      <div className={classes.title}>
      <h3>{props.title}</h3>
      </div>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.price}>
          <p>Price: ${props.price}</p>
          <p>quantity: {props.quantity}</p>
        </div>
        
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Description</button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
