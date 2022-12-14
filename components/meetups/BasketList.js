import BasketItem from './BasketItem';
import classes from './MeetupList.module.css';

function BasketList(props) {
  return (
    <div className={classes.container}>
      {props.meetups.map((meetup,index) => (
        <div className={classes.item}>
        <BasketItem
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
