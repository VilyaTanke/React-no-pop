import classNames from 'classnames';
import Button from '..//common/Button';

import { ReactComponent as Icon } from '../../assets/LOGOReactNoPop.svg';

import './Header.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../auth/service';

const Header = ({ className, isLogged }) => {
    
    const navigate = useNavigate();
    const logoutConfirm = () => {
        logout();
        navigate('/login')
    };

    return (
        <header className={classNames('header', className)}>
            <div className="header-logo">
                <Icon width="64" height="64" />
            </div>
            <div className="header-navlinks">
                <NavLink className="navlinks" to="/products/new">
                    Crear Anuncio
                </NavLink>
            </div>
            <nav className="header-nav">
                    <Button className="header-button" onClick={logoutConfirm}>Logout</Button>
            </nav>
        </header>
    );
};

export default Header;