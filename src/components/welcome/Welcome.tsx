import background from './background.jpg';
import classes from './Welcome.module.css';

const Welcome = () => {
    return (
        <div>
            <img src={background} className={classes.img}/>
            Hello World
        </div>
    )
}

export default Welcome;
