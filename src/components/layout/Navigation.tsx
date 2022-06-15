import {NavLink} from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation = () => {

    const activeStyle = ({isActive}: any) => ({
        borderBottom: isActive ? '2px solid #F1C40F' : '',
        // backgroundColor: isActive ? '#B08401':'transparent',
        color: isActive ? '#F1C40F' : '#fafafa'
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
                                 to='/foodapp'>Food Delivery</NavLink>
                    </li>
                    <li>
                        <NavLink style={activeStyle}
                                 to='/coviddata'>Covid Data</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;
