import React from 'react'
import styles from '../css/Hero.module.css'
import heroImage from '../assets/hero-image.png'


const Hero = () => {
    return (
        <div className={styles.hero+" container"}>
            <div className={styles.heroMain }>
                <div className={styles.heroContent}>
                    <span className={styles.heroTitle}>APE DIPPIES</span>
                    <div className={styles.btnSection}>
                        <div className={'buttonBgColored defaultButton'}><span>join the movement</span></div>
                        <div className={'defaultButton'}><span>Our NFT</span></div>
                        <div>
                            <img className={'cursor'} src="https://static.wixstatic.com/media/aeb686ff41244d85bc1232fcf7325ec0.png/v1/fill/w_28,h_28,al_c,usm_0.66_1.00_0.01,enc_auto/aeb686ff41244d85bc1232fcf7325ec0.png" alt="Twitter" />
                            <img className={'cursor'} src="https://static.wixstatic.com/media/3ee487_550a5b6295e34ab8a80c4f81e6c9412b~mv2.png/v1/fill/w_28,h_28,al_c,usm_0.66_1.00_0.01,enc_auto/3ee487_550a5b6295e34ab8a80c4f81e6c9412b~mv2.png" alt=" Opensea" />
                        </div>
                    </div>
                    <div className={styles.heroContentInfo}>
                        <div className={styles.heroContentInfoText}>
                            <span>Members</span>
                            <span className={styles.heroContentInfoTextLg}>30000+</span>
                        </div>
                        <div className={styles.infoDivder}></div>
                        <div className={styles.heroContentInfoText}>
                            <span>Ape Dippies</span>
                            <span className={styles.heroContentInfoTextLg}>2222</span>
                        </div>
                    </div>
                </div>
                <div className={styles.heroImageBg}>
                    <img src={heroImage} className={styles.heroImage} alt="hero image" />
                </div>
            </div>
            <p className={styles.heroText}>The hippie movement rocked the world, defining a generation of flower power and star children. A radical revolution. Where people set aside the woes and worries of the world, to find their spiritual center and get back to their natural roots.”</p>

            <div className={styles.heroBanner}>
                <h1>educate.</h1>
                <h1>invest.</h1>
                <h1>thrive.</h1>
            </div>

        </div>
    )
}

export default Hero