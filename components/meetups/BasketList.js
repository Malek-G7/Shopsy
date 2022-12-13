import BasketItem from './BasketItem';
import classes from './MeetupList.module.css';

function BasketList(props) {
  let quantity = new Array(props.meetups.length) 
  quantity.fill(0)
  return (
    <div className={classes.container}>
      {props.meetups.map((meetup) => (
        <div className={classes.item}>
        <BasketItem
          key={meetup.meetingId}
          id={meetup.meetingId}
          image={meetup.image}
          title={meetup.title}
          price={meetup.price}
          quantity = {meetup.quantity}
        />
        </div>
      ))}

    </div>

  );
}

export default BasketList;
