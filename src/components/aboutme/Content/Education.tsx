import classes from './Content.module.css';
import educationIcon from "../image/education.png";
import DetailButton from "./DetailButton";
import {ContentProps} from "./Content";

const Education = (props: ContentProps) => {

    const Bachelor = <span className={classes.textThin}>Architecture is the art and science of designing and engineering large structures or buildings. <br/>During my Bachelor, both my artistic ability and mathematical proficiency are improved.</span>
    const Master = <span className={classes.textThin}>During my Master degree at KIT, <br/>my enthusiasm for the larger scales was uncovered.<br/> I decided to study to become a landscape architect.</span>

    return (

        <li data-testid='educationComponent'>
            <div>
                <div className={classes.theme}>
                    <img className={classes.icon} src={educationIcon} alt="icon"/>
                    <div className={classes.content}>
                        <span className={classes.contentText}>Education</span>
                        <br/>
                        <span className={classes.contentThin}>2007-2016</span>
                    </div>
                </div>
                <div className={classes.text}>
                    <span className={classes.textThin}>2007-2012: </span>
                    <span className={classes.textBold}>Qingdao University of Technology</span>
                    <br/>
                    {Bachelor}
                    <br/>
                    <div style={{marginTop: '0.5rem'}}>
                        <span className={classes.textThin}> 2013-2016: </span>
                        <span className={classes.textBold}> Karlsruhe Institute of Technology (KIT)</span>
                        <br/>
                        {Master}
                    </div>
                </div>
            </div>
            <div className={classes.action}>
                <DetailButton type='button'
                              onClick={props.onShowModal}
                              id='EducationDetails'/>
            </div>
        </li>
    )
}

export default Education;
