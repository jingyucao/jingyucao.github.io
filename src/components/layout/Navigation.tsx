import {NavLink} from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation = () => {

    const activeStyle = ({isActive}: any) => ({
        borderBottom: isActive ? '2px solid #B08401' : '',
        // backgroundColor: isActive ? '#B08401':'transparent',
        color: isActive ? '#B08401' : '#fafafa'
    })

    return (
        <header>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink style={activeStyle}
                                 to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink style={activeStyle}
                                 to='/aboutme'>About me</NavLink>
                    </li>
                    <li>
                        <NavLink style={activeStyle}
                                 to='/foodapp'>Food Demo</NavLink>
                    </li>
                    <li>
                        <NavLink style={activeStyle}
                                 to='/covidmap'>Covid Demo</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;
