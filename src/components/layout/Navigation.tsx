import {NavLink} from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation = () => {
    return (
        <header>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to='/welcome'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about-me'>About me</NavLink>
                    </li>
                    <li>
                        <NavLink to='/food-demo'>Food Demo</NavLink>
                    </li>
                    <li>
                        <NavLink to='/covid-demo'>Covid Demo</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;
