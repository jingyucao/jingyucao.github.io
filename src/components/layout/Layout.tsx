import {Fragment} from "react";
import Navigation from "./Navigation";

const Layout = (props: any) => {
    return (
        <Fragment>
            <div>
                <Navigation/>
                <div>
                    {props.children}
                </div>
            </div>
        </Fragment>


    )
}

export default Layout;
