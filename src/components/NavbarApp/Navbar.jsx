
import {Link} from "react-router-dom";
import s from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.container}>
                <div className={s.logo}>
                    <span>Iommy</span>
                </div>
                <div className={s.navigation}>
                    <Link className={s.nav_link} to="#">Портфолио</Link>
                    <Link className={s.nav_link} to="#">Услуги</Link>
                    <Link className={s.nav_link} to="#">Цены</Link>
                    <Link className={s.nav_link} to="#">Блог</Link>
                    <Link className={s.nav_link} to="#">Контакты</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;