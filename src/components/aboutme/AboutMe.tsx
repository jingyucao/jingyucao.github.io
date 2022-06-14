import classes from './AboutMe.module.css';
import background from './image/profile.png';
import Content from "./Content/Content";
import React, {useState} from "react";
import Details from "./Carousel/Details";


const AboutMe = () => {

    const [modalIsShown, setModalIsShown] = useState(false);
    const [selectedID, setSelectedID] = useState('');

    const showModalHandler = (event: any) => {
        setModalIsShown(true);
        setSelectedID(event.target.id);
    }

    const hideModalHandler = () => {
        setModalIsShown(false)
        setSelectedID('');
    }

    return (
        <div className={classes.aboutMe}>
            {modalIsShown && <Details onHideModal={hideModalHandler} selectedID={selectedID}/>}
            <Content onShowModal={showModalHandler}/>
            <div className={classes.bgColor}/>
            <img src={background} className={classes.bgImg} alt="background"/>
        </div>
    )
}

export default AboutMe;
