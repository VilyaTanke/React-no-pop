import classNames from 'classnames';
import Button from '..//common/Button';

import logo, { ReactComponent as Icon } from '../../assets/LOGOReactNoPop.svg';

import './Header.css';

const Header = ({ className, isLogged }) => {
    return (
        <header className={classNames('header', className)}>
            <div className="header-logo">
                <img src={logo} alt="React-no-pop" />
                <Icon width="32" height="32" />
            </div>
            <nav className="header-nav">
                {isLogged ? (
                    <Button className="header-button">Logout</Button>
                ) : (
                    <Button variant="primary" className="header-button">
                        Login
                    </Button>
                )}
            </nav>
        </header>
    );
};

export default Header;