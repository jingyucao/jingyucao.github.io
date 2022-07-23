import classes from './Content.module.css';
import educationIcon from "../image/education.png";
import DetailButton from "./DetailButton";
import {ContentProps} from "./Content";

const Education = (props: ContentProps) => {

    const Bachelor = <span className={classes.textThin}>Architecture is the art and science of designing and engineering buildings. <br/>During my Bachelor's, my ability to design and solve practical problems are improved.</span>
    const Master = <span className={classes.textThin}>During my Master's degree at KIT, my enthusiasm for the larger scales was uncovered.<br/> I decided to study to become a landscape architect.</span>

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
                    <div style={{marginTop: '0.5rem'}}>
                        <span className={classes.textThin}> 2013-2016: </span>
                        <span className={classes.textBold}> Karlsruhe Institute of Technology (KIT)</span>
                        <br/>
                        {Master}
                    </div>
                    <div style={{marginTop: '0.5rem'}}>
                        <span className={classes.textThin}>2007-2012: </span>
                        <span className={classes.textBold}>Qingdao University of Technology</span>
                        <br/>
                        {Bachelor}
                    </div>
                </div>
            </div>
            <div className={classes.action} style={{visibility: 'hidden'}}>
                <DetailButton type='button'
                              onClick={props.onShowModal}
                              id='EducationDetails'/>
            </div>
        </li>
    )
}

export default Education;
