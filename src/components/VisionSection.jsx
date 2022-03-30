import React from 'react'
import styles from '../css/Vision.module.css'


const VisionSection = () => {
    return (
        <div className='mainBg'>
            <div className={styles.visionSection + ' container'}>
                <div className={styles.visionHeading}>
                    <div className={styles.visionColoredBg}>
                    </div>
                    <h2>Your one-stop Filipino community committed to educating, investing, and thriving in this new digital world we are building with crypto and the future of the internet; THE METAVERSE.</h2>
                </div>
                <div className={styles.visionTitleSection}>
                    <span className={ styles.visionTItle}>OUR VISION</span>
                </div>
                <div  className={styles.visionSectionContentHorz}>
                    <div className={styles.visionSectionContentVert}>
                        <h3>Leading Filipino NFT community</h3>
                        <p>shaping the future with crypto and financial literacy in the Philippines.</p>
                    </div>
                    <div className={styles.visionSectionContentVert}>
                        <h3>Onboard and welcome</h3>
                        <p>people and serve as their foundation to the world of cryptocurrencies, NFTs, metaverse, and investing.</p>
                    </div>
                    <div className={styles.visionSectionContentVert}>
                        <h3>Leading Filipino NFT community</h3>
                        <p>helping each other learn, connect, and thrive in this fast emerging industry.</p>
                    </div>
                </div>

                {/* Vision Content  */}
                <div className={styles.visionContent +" container "}>
                    <div className={styles.visionTitleSection}>
                        <span className={ styles.visionTItle2}>OUR NFT</span>
                    </div>
                    <div  className={styles.visionSectionContentHorz}>
                        <div className={styles.visionSectionContentVert2}>
                            <p>One of the pioneering Filipino NFT pfp collectibles showcasing pop culture, memes, and iconic art style that will be metaverse-ready and living on the <b>Polygon Network.</b> </p>
                        </div>
                        <div className={styles.visionSectionContentVert2}>
                            <p>A status and prestige, bringing social awareness on our movement and making an impact on our society by helping bridge the gap to financial literacy in the Philippines.</p>
                        </div>
                    </div>
                </div>

                {/* Event Section  */}
                <div className={styles.eventSection}>
                    <h3>Community Events & Giveaways</h3>
                    <div className={styles.visionSectionContentHorz}>
                        <div className={styles.eventIcon}>
                            <img className={styles.eventIconBg} src="https://static.wixstatic.com/media/3ee487_244d670f59314788844525998dabe6f7~mv2.png/v1/fill/w_275,h_154,al_c,usm_0.66_1.00_0.01,enc_auto/PS5%20Giveaway.png" alt="PS5 Giveaway" />
                            <h3>Twitter Giveaways</h3>
                        </div>
                        <div className={styles.eventIcon}>
                            <img className={styles.eventIconBg} src="https://static.wixstatic.com/media/3ee487_f2607ddb3d4148c4a9dceecc548ca283~mv2.png/v1/fill/w_275,h_154,al_c,usm_0.66_1.00_0.01,enc_auto/Join%20Discord.png" alt="Discord Invite Contest" />
                            <h3>Discord Events</h3>
                        </div>
                    </div>
                </div>
            </div>

            {/* Banner */}
            <div className={styles.bannerSection}>
                <div className={styles.bannerSectionContent+" container"}>
                    <div>
                        <p className={styles.bannerTitle}>Help us build the community!</p>
                        <p className={styles.bannerSubTitle}>Have any questions, inquiries, or suggestions? Hop on to the community Discord server for more information!</p>
                    </div>
                    <div className={styles.bannerBtnSection}>
                        <button className={styles.bannerBtn}>join the movement</button>
                        <div className={styles.svgIcons}>
                                <svg className={styles.svgIcon} preserveAspectRatio="none" data-bbox="20.5 40.5 159 119" viewBox="20.5 40.5 159 119" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="img" aria-labelledby="svgcid--nmmzx0sgv2f4"><title id="svgcid--nmmzx0sgv2f4">Join the Filipino NFT scene - Bored Punks of Society</title>
                                    <g>
                                        <path d="M100 74.5l-5.678 5.667-56.786 56.666 5.678 5.667L100 85.578l56.786 56.922 5.678-5.667-56.786-56.666L100 74.5z"></path>
                                        <path d="M100 108.5l-5.678 5.667-39.75 39.667 5.678 5.666L100 119.833l39.749 39.667 5.679-5.666-39.75-39.667L100 108.5z"></path>
                                        <path d="M105.678 46.166L100 40.5l-5.678 5.666L20.5 119.833l5.678 5.667L100 51.877l73.822 73.623 5.678-5.667-73.822-73.667z"></path>
                                    </g>
                                </svg>
                            <div>
                            </div>
                                <svg className={styles.svgIcon} preserveAspectRatio="none" data-bbox="20.5 40.5 159 119" viewBox="20.5 40.5 159 119" height="200" width="200" xmlns="http://www.w3.org/2000/svg" data-type="shape" role="img" aria-labelledby="svgcid--nmmzx0sgv2f4"><title id="svgcid--nmmzx0sgv2f4">Join the Filipino NFT scene - Bored Punks of Society</title>
                                    <g>
                                        <path d="M100 74.5l-5.678 5.667-56.786 56.666 5.678 5.667L100 85.578l56.786 56.922 5.678-5.667-56.786-56.666L100 74.5z"></path>
                                        <path d="M100 108.5l-5.678 5.667-39.75 39.667 5.678 5.666L100 119.833l39.749 39.667 5.679-5.666-39.75-39.667L100 108.5z"></path>
                                        <path d="M105.678 46.166L100 40.5l-5.678 5.666L20.5 119.833l5.678 5.667L100 51.877l73.822 73.623 5.678-5.667-73.822-73.667z"></path>
                                    </g>
                                </svg>
                            <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VisionSection