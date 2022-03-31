import React from 'react'
import styles from '../css/About.module.css'
import roadmapImage from '../assets/image.png'

const AboutSection = () => {
    return (
        <div className={styles.aboutSection}>
            <img className='circleImg' src="https://static.wixstatic.com/media/3ee487_06a094103bac42be8f84b90672b07203~mv2.png/v1/fill/w_183,h_183,al_c,usm_0.66_1.00_0.01,enc_auto/12.png" alt="Bored Punks of Society - Pinoy NFT" />
            <div className={styles.aboutSectionContent+" container"}>
                <div >
                    <span className={styles.aboutSectionTitle}>Why own BPOS NFT?</span> 
                    <p className={styles.aboutSectionSubTitle}>the pioneering and world-class Filipino NFT collection</p> 
                </div>
                <div className={styles.aboutSectionContentHorz}>
                    <div className={styles.aboutSectionContentVert}>
                        <img className={styles.aboutSectionIcon} src="https://static.wixstatic.com/media/3ee487_31f4f470ce1d42289f8d0e69cf879c37~mv2.png/v1/fill/w_66,h_66,al_c,usm_0.66_1.00_0.01,enc_auto/Bored%20Punks%20of%20Society%20achievements.png" alt=" Society achievements" ></img>
                        <p className={styles.aboutSectionCardText}>Top NFT Collection in the Polygon Network</p>
                    </div>
                    <div className={styles.aboutSectionContentVert}>
                        <img className={styles.aboutSectionIcon} src="https://static.wixstatic.com/media/3ee487_31f4f470ce1d42289f8d0e69cf879c37~mv2.png/v1/fill/w_66,h_66,al_c,usm_0.66_1.00_0.01,enc_auto/Bored%20Punks%20of%20Society%20achievements.png" alt=" Society achievements" ></img>
                        <p className={styles.aboutSectionCardText}>First Filipino-based NFT Collection to get sold out.</p>
                    </div>
                    <div  className={styles.aboutSectionContentVert}>
                        <img className={styles.aboutSectionIcon} src="https://static.wixstatic.com/media/3ee487_31f4f470ce1d42289f8d0e69cf879c37~mv2.png/v1/fill/w_66,h_66,al_c,usm_0.66_1.00_0.01,enc_auto/Bored%20Punks%20of%20Society%20achievements.png" alt=" Society achievements" ></img>
                        <p className={styles.aboutSectionCardText}>75+ Partnerships and Affiliations Nationwide</p>
                    </div>
                </div>
                <p className={styles.aboutSectionCardText}>We are the pioneering Filipino NFT brand x exclusive social club for crypto enthusiasts, financial educators, and passionate individuals committed to helping each other learn, connect, and thrive in this vast world of web 3.0.</p>
                <div className={styles.aboutSectionContentHorz}>
                    <div className={styles.aboutSectionContentVert}>
                        <h2 className={styles.aboutSectionCardTitle}>Benefits</h2>
                        <span className={styles.aboutSectionCardText2}>Exclusive perks and discounts from 75+ brand partners and affiliates such as <b>Anytime Fitness</b> , <b>Hilton Manila</b>, and <b>Hyatt Regency Manila</b>.</span>
                        <p></p>
                        <span className={styles.aboutSectionCardText2}> Exclusive members will also have access to exclusive channels and participate on exclusive events and giveaways.</span>
                    </div>
                    <div className={styles.aboutSectionContentVert}>
                        <h2 className={styles.aboutSectionCardTitle}>Connections</h2>
                        <p className={styles.aboutSectionCardText2}>BPOS has a wide network of connections of crypto enthusiasts, professionals, sophisticated investors, corporate executives, licensed financial advisors, influencers, passionate individuals, and notable people in the space you can learn and thrive with.</p>
                        <span className={styles.aboutSectionCardLink} >Ape Dippie Notable People</span>
                        
                    </div>
                    <div className={styles.aboutSectionContentVert}>
                        <h2 className={styles.aboutSectionCardTitle}>Prestige</h2>
                        <span className={styles.aboutSectionCardText2}>A status and prestige inside and outside of the Philippine NFT scene.</span>
                        <p></p>
                        <span className={styles.aboutSectionCardText2}> Your verifiable proof of being part of the premier Filipino NFT social club that is making an impact on our society and bridging the gap to financial literacy in the Philippines..</span>
                    </div>
                </div>
                <div></div>
                <button className={'buttonBgColored defaultButton'}><span>Get an Ape Dippie</span></button>
            </div>
            <div className='roadmapDeo'>
                <img className='circleImg2' src="https://static.wixstatic.com/media/3ee487_06a094103bac42be8f84b90672b07203~mv2.png/v1/fill/w_183,h_183,al_c,usm_0.66_1.00_0.01,enc_auto/12.png" alt="Filipino Metaverse NFT - Bored Punks of Society" />
                <img className='loopImg' src="https://static.wixstatic.com/media/3ee487_510b48f98f8d48f0968b396439b89451~mv2.png/v1/fill/w_245,h_245,al_c,usm_0.66_1.00_0.01,enc_auto/13.png" alt="Filipino Metaverse NFT - Bored Punks of Society" />
            </div>
            <div className={styles.roadmapBg}>
                <img src={roadmapImage} className={styles.oadmapImage} alt="image 4" />
            </div>
            <img className='halfLoop' src="https://static.wixstatic.com/media/3ee487_10ad204dcf47430c808a672123f7e57f~mv2.png/v1/fill/w_150,h_150,al_c,usm_0.66_1.00_0.01,enc_auto/14.png" alt="NFT Philippines - Bored Punks of Society"></img>
        </div>
    )
}

export default AboutSection