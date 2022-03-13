import classes from './AboutMe.module.css';
import background from './profile.png';
import arrowIcon from './arrow.png'

const AboutMe = () => {
    return (
        <div className={classes.aboutMe}>
            <img src={background} className={classes.bgImg}/>
            <div className={classes.left}>
                <div className={classes.resize}></div>
                <div className={classes.content}>
                    <div className={classes.contentItem}>
                        hello world!
                    </div>
                    <div className={classes.contentItem}>
                        <div className={classes.contentText} >hello world!</div>
                        <div className={classes.contentText} >hello world!</div>
                    </div>
                    <div className={classes.contentItem}>
                        hello world!
                    </div>
                </div>
            </div>
            <div className={classes.right}>
                <img className={classes.arrowIcon} src={arrowIcon} alt="->"/>
                <p>Scroll for details.</p>
            </div>
        </div>
    )
}

export default AboutMe;
