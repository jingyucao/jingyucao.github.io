import {NavLink} from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation = () => {

    const activeStyle = ({isActive}: any) => ({
        borderBottom: isActive ? '2px solid #B08401' : '',
        color: isActive ? '#fafafa' : '#959794'
    })

    return (
        <header>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink style={activeStyle}
                                 to='/website/welcome'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink style={activeStyle}
                                 to='/website/aboutme'>About me</NavLink>
                    </li>
                    <li>
                        <NavLink style={activeStyle}
                                 to='/website/foodapp'>Food Demo</NavLink>
                    </li>
                    <li>
                        <NavLink style={activeStyle}
                                 to='/website/covidmap'>Covid Demo</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Navigation;
