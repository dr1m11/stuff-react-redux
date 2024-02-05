import React from 'react';
import styles from '../../styles/Footer.module.css'
import {Link} from "react-router-dom";
import {Routes} from "../../utils/routes";
import Stuff from "../../images/logo.svg";

const Footer = () => {
    return (<section className={styles.footer}>
            <div className={styles.logo}>
                <Link to={Routes.HOME}>
                    <img src={Stuff} alt={"Logo"}/>
                </Link>
            </div>

            <div className={styles.rights}>
                Developed by <a href={"https://github.com/dr1m11"} target="_blank" rel="noreferrer">dr1m11</a>
            </div>

            <div className={styles.socials}>
                <a href="https://instagram.com" target="_blank" rel="noreferrer">
                    <svg className="icon">
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#instagram`}/>
                    </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                    <svg className="icon">
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#facebook`}/>
                    </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                    <svg className="icon">
                        <use xlinkHref={`${process.env.PUBLIC_URL}/sprite.svg#youtube`}/>
                    </svg>
                </a>
            </div>
        </section>);
};

export default Footer;