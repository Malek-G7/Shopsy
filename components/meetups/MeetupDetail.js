import classes from './MeetupDetail.module.css'

function MeetupDetail(props) {
    return (
        <section className={classes.detail}>
            <img src={props.image} alt={props.title} />
            <div className={classes.description}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <p>Price: $ {props.price}</p>
            </div>
        </section>
    )
}

export default MeetupDetail