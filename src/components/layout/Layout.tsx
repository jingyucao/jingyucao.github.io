import {Fragment} from "react";
import Navigation from "./Navigation";

const Layout = (props: any) => {
    return (
        <Fragment>
            <div data-testid='layoutContainer'>
                <Navigation/>
                <div data-testid='layoutBody'>
                    {props.children}
                </div>
            </div>
        </Fragment>


    )
}

export default Layout;
