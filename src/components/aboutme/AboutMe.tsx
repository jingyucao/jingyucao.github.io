import classes from './AboutMe.module.css';
import background from './image/profile.png';
import arrowIcon from './image/arrow-color.png';
import Content from "./Content";
import React, {useEffect, useRef, useState} from "react";


const AboutMe = () => {

    const divRef = useRef<HTMLUListElement | null | undefined>();

    const [width, setWidth] = useState<any>();

    const getListSize = () => {
        // @ts-ignore
        const newWidth = divRef.current.clientWidth;
        setWidth(newWidth);
    };

    useEffect(() => {
        getListSize();
        console.log(width)
    }, [width]);

    // useEffect(() => {
    //     const divElement = document.getElementById(`${classes.right}`) as EventTarget;
    //     divElement.addEventListener("resize", getListSize);
    //     console.log(divElement);
    // }, []);

    useEffect(() => {
        window.addEventListener("resize", getListSize);
    }, []);

    return (
        <div className={classes.aboutMe}>
            <img src={background} className={classes.bgImg} alt="background"/>
            <div className={classes.left}>
                <div id={classes.resize}/>
                <div className={classes.content}>
                    <Content/>
                    {/*<ContentChangeTest/>*/}
                </div>
            </div>
            <div id={classes.right} ref={divRef as React.RefObject<HTMLDivElement>}>
                <img className={classes.arrowIcon} src={arrowIcon} alt="->"/>
                <p>Scroll for details.</p>
            </div>
        </div>
    )
}

export default AboutMe;
