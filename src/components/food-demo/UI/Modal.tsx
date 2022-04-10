import classes from './Modal.module.css';
import {Fragment} from "react";
import ReactDom from "react-dom";

interface Props {
    onHideCart?: any
    children?: any
}

const Backdrop = (props: Props) => {
    return <div className={classes.backdrop} onClick={props.onHideCart}/>
}

const ModalOverlay = (props: Props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    )
}

const portalElement = document.getElementById('overlay-root') as HTMLDivElement;

const Modal = (props: Props) => {
    return (
        <Fragment>
            {ReactDom.createPortal(<Backdrop onHideCart={props.onHideCart}/>, portalElement)}
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </Fragment>
    )
}

export default Modal;
