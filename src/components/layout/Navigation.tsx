import {NavLink, NavLinkProps} from 'react-router-dom';
import classes from './Navigation.module.css';

// <NavLink className={navData =>
//     "nav " + (navData.isActive ? "active" : "")
// } to='/welcome'>Home</NavLink>

const Navigation = () => {

    return (
        <header>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink style={({isActive}) => ({borderBottom: isActive ? '2px solid #fff' : ''})}
                                 to='/welcome'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink style={({isActive}) => ({borderBottom: isActive ? '2px solid #fff' : ''})}
                                 to='/about-me'>About me</NavLink>
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
