import educationIcon from './image/education.png';
import workIcon from './image/work.png';
import computerIcon from './image/computer.png';
import classes from "./Content.module.css";
// import React, {useEffect, useRef, useState} from "react";

const Content = () => {
    //
    // const listRef = useRef<HTMLUListElement | null | undefined>();
    //
    // const [width, setWidth] = useState<any>();
    //
    // const getListSize = () => {
    //     // @ts-ignore
    //     const newWidth = listRef.current.clientWidth;
    //     setWidth(newWidth);
    // };
    //
    // const ulElement = document.getElementById(`${classes.contentItems}`) as EventTarget;
    // console.log(ulElement);
    //
    // useEffect(() => {
    //     getListSize();
    //     console.log(width)
    // }, [ulElement,width]);
    //
    // useEffect(() => {
    //     if (ulElement !== null) {
    //         ulElement.addEventListener("resize", getListSize);
    //     }
    // }, [ulElement]);
    //
    //  ref={listRef as React.RefObject<HTMLUListElement>}

    // // useEffect(() => {
    // //     window.addEventListener("resize", getListSize);
    // // }, []);

    return (
        <ul id={classes.contentItems}>

            <li className={classes.programming}>
                <div className={classes.contentTheme}>
                    <img className={classes.icon} src={computerIcon} alt="icon"/>
                    <div className={classes.contentTime}>2019-2022</div>
                </div>
                <div className={classes.contentText}>
                    Skills: html, css, javascript, react, typescript, unit-test, storybook ect.

                </div>
            </li>
            <li className={classes.work}>
                <div className={classes.contentTheme}>
                    <img className={classes.icon} src={workIcon} alt="icon"/>
                    <div className={classes.contentTime}>2016-2022</div>
                </div>
                <div className={classes.contentText}>
                    2016-2019: A24 Landschaft <br/>
                    2020-2022: Atelier Loidl Landschaft
                </div>
            </li>
            <li className={classes.education}>
                <div className={classes.contentTheme}>
                    <img className={classes.icon} src={educationIcon} alt="icon"/>
                    <div className={classes.contentTime}>2007-2016</div>
                </div>
                <div className={classes.contentText}>
                    2007-2012: Bachelor in Architecture<br/>
                    2020-2022: Master in Architecture
                </div>
            </li>
        </ul>
    )
}

export default Content;
