import {Fragment} from "react";
import Navigation from "./Navigation";
import classes from './Layout.module.css';
import background from './background.jpg';

const Layout = (props: any) => {
    return (
        <Fragment>
            <div className={classes.page}>
                <Navigation/>
                <div>
                    {props.children}
                </div>
            </div>
        </Fragment>


    )
}

export default Layout;
