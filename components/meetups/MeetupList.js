import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';

function MeetupList(props) {
  return (
    <div className={classes.container}>
      {props.meetups.map((meetup) => (
        <div className={classes.item}>
        <MeetupItem
          key={meetup.meetingId}
          id={meetup.meetingId}
          image={meetup.image}
          title={meetup.title}
          price={meetup.price}
        />
        </div>
      ))}

    </div>

  );
}

export default MeetupList;
