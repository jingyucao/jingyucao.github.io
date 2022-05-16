import classes from "./Content.module.css";
import Education from "./Education";
import Work from "./Work";
import Programming from "./Programming";

export interface Props {
    onShowModal: (event:any) => void,
}

const Content = (props:Props) => {

    return (
        <ul className={classes.contentList}>
            <Programming onShowModal={props.onShowModal}/>
            <Work onShowModal={props.onShowModal}/>
            <Education onShowModal={props.onShowModal}/>
        </ul>
    )
}

export default Content;
