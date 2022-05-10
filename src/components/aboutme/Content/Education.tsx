import classes from './Content.module.css';
import educationIcon from "../image/work.png";
import DetailButton from "./DetailButton";

const Education = () => {
    return (
        <li>
            <div>
                <div className={classes.theme}>
                    <img className={classes.icon} src={educationIcon} alt="icon"/>
                    <div className={classes.content}>
                        <span className={classes.contentText}>Education</span>
                        <br/>
                        <span className={classes.contentTime}>2008-2016</span>
                    </div>
                </div>
                <div className={classes.text}>
                    <span className={classes.textTime}>2007-2012: </span>
                    <span className={classes.textAchive}>Qingdao University of Technology</span>
                    <br/>
                    <span className={classes.textTime}>Bachelor of Architecture</span>
                    <br/>
                    <span className={classes.textTime}>2013-2016: </span>
                    <span className={classes.textAchive}> Karlsruhe Institute of Technology (KIT)</span>
                    <br/>
                    <span className={classes.textTime}>Master of Architecture</span>
                </div>
            </div>
            <div className={classes.actionHidden} >
                <DetailButton type='button'/>
            </div>
        </li>
    )
}

export default Education;
