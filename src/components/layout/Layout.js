import Header from './Header';

import './Layout.css';

const Layout = ({ children, title, ...props }) => (
    <div className="layout">
        <Header className="layaout-header bordered" {...props}/>
        <main className="layaout-main bordered">
            <h2 className="layaout-title bordered">{title}</h2>
            <section className="layaout-content">{children}</section>
        </main>
        <footer className="layout-footer bordered">© 2022 VilyaSoft </footer>
    </div>
);

export default Layout;