import React from 'react'
import styles from '../css/About.module.css'
import roadmapImage from '../assets/image.png'

const AboutSection = () => {
    return (
        <div className={styles.aboutSection}>
            <div className={styles.aboutSectionContent+" container"}>
                <div >
                    <span className={styles.aboutSectionTitle}>Why own BPOS NFT?</span> 
                    <p className={styles.aboutSectionSubTitle}>the pioneering and world-class Filipino NFT collection</p> 
                </div>
                <div className={styles.aboutSectionContentHorz}>
                    <div className={styles.aboutSectionContentVert}>
                        <img src="https://static.wixstatic.com/media/3ee487_31f4f470ce1d42289f8d0e69cf879c37~mv2.png/v1/fill/w_66,h_66,al_c,usm_0.66_1.00_0.01,enc_auto/Bored%20Punks%20of%20Society%20achievements.png" alt=" Society achievements" ></img>
                        <p>Top NFT Collection in the Polygon Network</p>
                    </div>
                    <div className={styles.aboutSectionContentVert}>
                        <img src="https://static.wixstatic.com/media/3ee487_31f4f470ce1d42289f8d0e69cf879c37~mv2.png/v1/fill/w_66,h_66,al_c,usm_0.66_1.00_0.01,enc_auto/Bored%20Punks%20of%20Society%20achievements.png" alt=" Society achievements" ></img>
                        <p>First Filipino-based NFT Collection to get sold out.</p>
                    </div>
                    <div className={styles.aboutSectionContentVert}>
                        <img src="https://static.wixstatic.com/media/3ee487_31f4f470ce1d42289f8d0e69cf879c37~mv2.png/v1/fill/w_66,h_66,al_c,usm_0.66_1.00_0.01,enc_auto/Bored%20Punks%20of%20Society%20achievements.png" alt=" Society achievements" ></img>
                        <p>75+ Partnerships and Affiliations Nationwide</p>
                    </div>
                </div>
                <p>We are the pioneering Filipino NFT brand x exclusive social club for crypto enthusiasts, financial educators, and passionate individuals committed to helping each other learn, connect, and thrive in this vast world of web 3.0.</p>
                <div className={styles.aboutSectionContentHorz}>
                    <div className={styles.aboutSectionContentVert}>
                        <h1>Benefits</h1>
                        <p>Exclusive perks and discounts from 75+ brand partners and affiliates such as Anytime Fitness, Hilton Manila, and Hyatt Regency Manila.Exclusive members will also have access to exclusive channels and participate on exclusive events and giveaways.</p>
                    </div>
                    <div className={styles.aboutSectionContentVert}>
                        <h1>Connections</h1>
                        <p>BPOS has a wide network of connections of crypto enthusiasts, professionals, sophisticated investors, corporate executives, licensed financial advisors, influencers, passionate individuals, and notable people in the space you can learn and thrive with.</p>
                    </div>
                    <div className={styles.aboutSectionContentVert}>
                        <h1>Prestige</h1>
                        <p>A status and prestige inside and outside of the Philippine NFT scene.Your verifiable proof of being part of the premier Filipino NFT social club that is making an impact on our society and bridging the gap to financial literacy in the Philippines..</p>
                    </div>
                </div>
                <div></div>
                <button className={'buttonBgColored defaultButton'}><span>Get an Ape Dippie</span></button>
            </div>
            <img src={roadmapImage} className={styles.oadmapImage} alt="image 4" />
        </div>
    )
}

export default AboutSection