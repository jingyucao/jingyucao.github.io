import classes from './Hygien.module.css';
import vaccinePic from './vaccine.png';
import facemaskPic from './facemask.png';
import handPic from './washhand.png';
import antisepticPic from './antiseptic.png';
import {useState} from "react";

const Hygien = () => {

    const [choosedImg, setChoosedImg] = useState('');

    const [textIsShown, setTextIsShown] = useState(false);

    const mouseEnterHandler = (event: any) => {
        setChoosedImg(event.target.id)
        setTextIsShown(true);
        // setTimeout(() => {
        //     setTextIsShown(false);
        //     setChoosedImg('');
        // }, 3000);
    }

    const mouseLeaveHandler = (event: any) => {
        setTextIsShown(false);
        setChoosedImg('');
    }

    let content;
    if (choosedImg === 'vaccinePic') {
        content = 'COVID-19 vaccines help our bodies develop immunity to the virus that causes COVID-19. It activates our immune response and helps our bodies learn to fight off the virus. If we are exposed to the virus, our immune system remembers how to fight it.'
    } else if (choosedImg === 'facemaskPic') {
        content = 'COVID-19 can spread through droplets and particles released into the air by speaking, singing, coughing or sneezing, masks are very helpful to prevent the virus from spreading in crowded indoor public places, especially those that contain a mixture of vaccinated and unvaccinated individuals.'
    } else if (choosedImg === 'antisepticPic') {
        content = 'CDC recommends consumers use an alcohol-based hand sanitizer that contains at least 60% alcohol. Cleaning with products containing soap or detergent reduces germs on surfaces by removing contaminants and decreases risk of infection from surfaces.'
    } else if (choosedImg === 'handPic') {
        content = 'Wash your hands often with plain soap and water. The CDC recommends washing your hands often with soap and water for at least 20 seconds, especially after you have been in a public place, or after blowing your nose, coughing, or sneezing.'
    }

    const imgContent = <div className={classes.imgWrapper}>
        <img src={vaccinePic} alt="Vaccination" id='vaccinePic' onClick={mouseEnterHandler}/>
        <img src={facemaskPic} alt="Wear facemask" id='facemaskPic' onClick={mouseEnterHandler}/>
        <img src={antisepticPic} alt="Use antiseptic" id='antisepticPic' onClick={mouseEnterHandler}/>
        <img src={handPic} alt="Wash hands" id='handPic' onClick={mouseEnterHandler}/>
    </div>

    return (
        <div className={classes.wrapper}>
            {!textIsShown && imgContent}
            {textIsShown && <p onMouseOut={mouseLeaveHandler}>{content}</p>}
        </div>
    )
}

export default Hygien;
