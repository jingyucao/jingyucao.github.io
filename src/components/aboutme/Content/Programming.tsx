import classes from "./Content.module.css";
import computerIcon from "../image/computer.png";
import DetailButton from "./DetailButton";
import {ContentProps} from "./Content";

const Programming = (props: ContentProps) => {

    const introduction = <span>
        <span className={classes.textTime}>I am a </span>
        <span className={classes.textAchive}>Self-taught Frontend Developer</span>
        <span className={classes.textTime}> since the beginning of the pandemic. <br/>
            I build websites with a focus on responsiveness, accessibility and pleasing aesthetics.<br/>
        </span>
        </span>

    const technologies = <span>
        <span className={classes.textAchive}>Technologies: </span>
        <span className={classes.textTime}>
        REACT, Javascript, Typescript, HTML, CSS, Git, Github, Redux<br/>
        Firebase, REST, Unit-Test, Storybook, Agile Methodology <br/>
        </span>
        </span>

    const design = <span>
        <span className={classes.textAchive}>Design: </span>
        <span className={classes.textTime}>Photoshop, Indesign, Illustrator, Vectorworks, AutoCAD, C4D</span>
        </span>

    return (
        <li>
            <div>
                <div className={classes.theme}>
                    <img className={classes.icon} src={computerIcon} alt="icon"/>
                    <div className={classes.content}>
                        <span className={classes.contentText}>Programming</span>
                        <br/>
                        <span className={classes.contentTime}>2020-2022</span>
                    </div>
                </div>
                <div className={classes.text}>
                    {introduction}
                    <div style={{marginTop: '0.5rem'}}>
                        {technologies}
                        {design}
                    </div>
                </div>
            </div>
            <div className={classes.action}>
                <DetailButton type='button' onClick={props.onShowModal} id='ProgrammingDetails'/>
            </div>
        </li>
    )
}

export default Programming;
