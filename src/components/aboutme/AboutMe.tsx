import classes from './AboutMe.module.css';
import background from './image/profile.png';
import arrowIcon from './image/arrow-color.png';
import Content from "./Content/Content";
import React, {useState} from "react";
import Cart from "../food-demo/Cart/Cart";


const AboutMe = () => {

    // const [modalIsShown, setModalIsShown] = useState(true);
    // const showModalHandler = () => {
    //     setModalIsShown(true);
    // }
    //
    // const hideModalHandler = () => {
    //     setModalIsShown(false)
    // }

    return (
        <div className={classes.aboutMe}>
            {/*{modalIsShown && <Cart onShowModal={showModalHandler} onHideModal={hideModalHandler}/>}*/}
            <img src={background} className={classes.bgImg} alt="background"/>
            <Content/>
        </div>
    )
}

export default AboutMe;
