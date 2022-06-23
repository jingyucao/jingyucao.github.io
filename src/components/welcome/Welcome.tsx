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
            <div className={classes.introduction}>
                <div className={classes.middleFont}>Hello World, I am</div>
                <div className={classes.bigFont}>JINGYU CAO</div>
                {/*<div className={classes.smallFont}>I am a Self-taught Frontend Developer.<br/>I build websites with a focus on responsiveness, accessibility and pleasing aesthetics.</div>*/}
            </div>
            <div className={classes.logo}>
                <a href="https://www.linkedin.com/in/jingyu-cao-7457a4169/">
                    <div className={classes.logoCard} data-testid='logoCard'>
                        <img className={classes.linkedinLogoItem} src={linkedinLogo} alt="Linkedin"
                             data-testid='whiteLinkedinLogo'/>
                        <img className={classes.linkedinLogoTop} src={linkedinBlueLogo} alt="Linkedin"
                             data-testid='colorLinkedinLogo'/>
                    </div>
                </a>
                <a href="https://github.com/jingyucao">
                    <div className={classes.logoCard}>
                        <img className={classes.githubLogoItem} src={githubLogo} alt="Github"
                             data-testid='whiteGithubLogo'/>
                        <img className={classes.githubLogoTop} src={githubGirlLogo} alt="Github"
                             data-testid='colorGithubLogo'/>
                    </div>
                </a>

            </div>
        </div>
    )
}

export default Welcome;
