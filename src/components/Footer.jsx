import React from 'react'
import styles from '../css/Footer.module.css'


const Footer = () => {
    return (
        <div className={styles.footer}>
                <p>
                    © 2021 The Coin Bubble  ||  Bored Punks of Society, All Rights Reserved.  ||  boredpunksociety@gmail.com
                </p>
            <div className={styles.footerLinks}>
                <a href=''>Twitter</a>
                <span>|</span>
                <a href=''>Discord</a>
                <span>|</span>
                <a href=''>Spotify</a>
                <span>|</span>
                <a href=''>Fackbook</a>
            </div>
        </div>
    )
}

export default Footer