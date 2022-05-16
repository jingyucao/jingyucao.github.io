import Modal from "../../UI/Modal";
import WorkCarousel from "./WorkCarousel";
import React from "react";
import ProgrammingCarousel from "./ProgrammingCarousel";
import EducationCarousel from "./EducationCarousel";

interface Props {
    onShowModal?: () => void,
    onHideModal?: () => void,
    selectedID?: string
}

const Details = (props: Props) => {

    let content;

    if (props.selectedID === 'WorkDetails') {
        content = <WorkCarousel/>
    }else if(props.selectedID === 'ProgrammingDetails'){
        content = <ProgrammingCarousel/>
    }else if(props.selectedID === 'EducationDetails'){
        content = <EducationCarousel/>
    }else {
        content = <p>Can't find the information, please try again!</p>
    }

    return (
        <Modal onHideModal={props.onHideModal}>
            {content}
        </Modal>
    )
}

export default Details;
