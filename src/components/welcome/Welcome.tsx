import background from './image/background.jpg';
import classes from './Welcome.module.css';
import linkedinLogo from './image/linkedin-logo.png';
import linkedinBlueLogo from './image/linkedin-blue.png';
import githubLogo from './image/github-icon.png';
import githubGirlLogo from './image/github-girl.png';

const Welcome = () => {
    return (
        <div className={classes.welcome}>
            <img src={background} className={classes.bgImg}/>
            <h1>Welcome To My Page</h1>
            <div className={classes.logo}>
                <a href="https://www.linkedin.com/in/jingyu-cao-7457a4169/">
                    <div className={classes.logoCard}>
                        <img className={classes.linkedinLogoItem} src={linkedinLogo} alt="Linkedin"/>
                        <img className={classes.linkedinLogoTop} src={linkedinBlueLogo} alt="Linkedin"/>
                    </div>
                </a>
                <a href="https://github.com/jingyucao">
                    <div className={classes.logoCard}>
                        <img className={classes.githubLogoItem} src={githubLogo} alt="Github"/>
                        <img className={classes.githubLogoTop} src={githubGirlLogo} alt="Github"/>
                    </div>

                </a>

            </div>
        </div>
    )
}

export default Welcome;
