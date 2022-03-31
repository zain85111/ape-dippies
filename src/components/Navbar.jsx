import React from 'react'
import styles from '../css/Navbar.module.css'

function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.content }>
                <a href="" className={ styles.active +" "+styles.navLink }>Home</a>
                <a href="" className={styles.navLink }>Utility</a>
                <a href="" className={styles.navLink }>About Us</a>
                <a href="" className={styles.navLink }>JOIN THE MOVEMENT</a>

                <div>
                    <img className={styles.navImg+' cursor margin-right'} src="https://static.wixstatic.com/media/3ee487_24c46d2335e74f07aeabf0ee35da789d~mv2.png/v1/fill/w_38,h_38,al_c,usm_0.66_1.00_0.01,enc_auto/3ee487_24c46d2335e74f07aeabf0ee35da789d~mv2.png" alt="Twitter Icon" />
                    <img className={styles.navImg+' cursor'} src="https://static.wixstatic.com/media/3ee487_e5ed8539c57a4ddcb393b0cdf34ab359~mv2.png/v1/fill/w_38,h_38,al_c,usm_0.66_1.00_0.01,enc_auto/3ee487_e5ed8539c57a4ddcb393b0cdf34ab359~mv2.png" alt=" Discord" />
                </div>
            </div>
        </div>
    )
}

export default Navbar