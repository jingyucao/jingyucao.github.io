import classes from "./Content.module.css";
import Education from "./Education";
import Work from "./Work";
import Programming from "./Programming";
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
        <ul className={classes.contentList}>
            <Programming/>
            <Work/>
            <Education/>
        </ul>
    )
}

export default Content;
