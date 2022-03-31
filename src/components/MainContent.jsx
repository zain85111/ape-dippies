import React from 'react'
import styles from '../css/Content.module.css'
import contentImage1 from '../assets/charImg1.png'
import contentImage2 from '../assets/charImg2.png'
import contentImage3 from '../assets/Screen_02.gif'



export const MainContent = () => {
    return (
        <div className={styles.contentBg}>
            <img className={'polyImg'} src="https://static.wixstatic.com/media/3ee487_81cf6a29614946aeb19f146a9a62d0b0~mv2.png/v1/fill/w_180,h_181,al_c,usm_0.66_1.00_0.01,enc_auto/15.png" alt="Bored Punks of Society - Filipino NFT" />
            <div className={'container ' }>
                <div className={styles.contentSection}>
                    <div className={styles.contentSectionItems  }>
                        <span className={styles.contentSectionTextHeading}>
                            <span  className={styles.contentSectionTextHeadingTitle}>Exclusive</span>
                            <span className={styles.contentSectionTextHeadingTitle+' '+styles.contentSectionTextColored}>NFT</span>
                            <span className={styles.contentSectionTextHeadingTitle}>Collection</span>
                        </span>
                        <span className={styles.contentSectionTextSub}>The Bored Punks of Society NFT collection is our community's status and prestige inside and outside of crypto and the metaverse.</span>
                        <span className={styles.contentSectionTextSub}> The pioneering world-class Filipino NFT collection, and our <b>proof</b> of being part of the leading social club shaping the future with crypto and progressing financial literacy in the Philippines.</span>
                        <button className={'defaultButton'}><span>Our NFT</span></button>
                    </div>
                    <div className={styles.contentSectionItems + ' ' + styles.contentImageBg1}>
                        <img src={contentImage1} className={styles.contentImage} alt="image 1" />
                        <p className='cursor'>click here to learn more about NFTs and the metaverse</p>
                    </div>
                </div>
                <div className={styles.contentSection}>
                    <div className={styles.contentSectionItems + ' '+ styles.contentImageBg2}>
                        <img src={contentImage2} className={styles.contentImage2} alt="image 2" />
                    </div>
                    <div className={styles.contentSectionItems  }>
                        <div className={styles.contentSectionTextHeading}>
                            <span className={styles.contentSectionTextHeadingTitle+' '+styles.contentSectionTextColored}>Invest</span>
                            <span  className={styles.contentSectionTextHeadingTitle}>and</span>
                            <span className={styles.contentSectionTextHeadingTitle+' '+styles.contentSectionTextColored}>Thrive</span>
                        </div>
                        <span className={styles.contentSectionTextSub}>As a community, we invest not only on projects with great potential but also on ourselves and the community we have built together by discovering, learning, and discussing topics that will help us improve and take advantage of these new opportunities in the space.</span>
                        <span className={styles.contentSectionTextSub}> We leave no man behind. Our brand aims to help Filipinos find their success in this fast emerging future that is being built. We will thrive together as one educated, financially literate, Bored Punks of Society.</span>
                    </div>
                </div>
                <div className={styles.contentSectionGif}>
                    <img src={contentImage3} className={styles.contentGif} alt="image 3" />
                </div>
            </div>
        </div>
    )
}
