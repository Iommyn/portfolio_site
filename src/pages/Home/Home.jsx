import React from 'react';
import Navbar from "../../components/NavbarApp/Navbar.jsx";
import s from './Home.module.css'
import {Link} from "react-router-dom";
import avatar from '../../assets/img/avatar.png'
const Home = () => {
    return (
        <>
         <Navbar/>
            <section>
                <div className={s.wrapper}>
                    <div className={s.information}>
                        <h1 className={s.title}>Frontend-Разработчик ⎯ <br/> Евгений</h1>
                        <h3 className={s.description}>Разрабатываю стильные продающие <br/> сайты для бизнеса</h3>
                        <div className={s.button}><Link to='#'>Смотреть портфолио 🠊 </Link></div>
                    </div>
                    <div className={s.animate_avatar}>
                        <img className={s.avatar} src={avatar}/>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;