import classes from "./Content.module.css";
import computerIcon from "../image/computer.png";
import DetailButton from "./DetailButton";
import {ContentProps} from "./Content";

const Programming = (props: ContentProps) => {

    const introduction = <span>
        <span className={classes.textThin}>Hey, Nice to meet you! I am </span>
        <span className={classes.textBold}>Jingyu Cao. <br/></span>
        <span className={classes.textThin}>I am a </span>
        <span className={classes.textBold}>Frontend Developer</span>
        <span className={classes.textThin}> and a Landscape Architect. <br/>
            I build websites with a focus on responsiveness, accessibility and pleasing aesthetics.<br/>
        </span>
        </span>

    const technologies = <span>
        <span className={classes.textBold}>Technologies: </span>
        <span className={classes.textThin}>
        REACT, Javascript, Typescript, HTML5, CSS3, CSS Modules, Git, Github, ESLint, Prettier<br/>
        Firebase, REST, Jest, React Testing Library, Storybook, Agile Methodology <br/>
        </span>
        </span>

    const design = <span>
        <span className={classes.textBold}>Design: </span>
        <span className={classes.textThin}>Photoshop, Indesign, Illustrator, Vectorworks, AutoCAD, Sketchup, Rhino, Vray, C4D</span>
        </span>

    return (
        <li data-testid='programmingComponent'>
            <div>
                <div className={classes.theme}>
                    <img className={classes.icon} src={computerIcon} alt="icon"/>
                    <div className={classes.content}>
                        <span className={classes.contentText}>Programming</span>
                        <br/>
                        <span className={classes.contentThin}>2020-2022</span>
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
