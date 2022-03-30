import React from 'react'
import styles from '../css/Content.module.css'
import contentImage1 from '../assets/charImg1.png'
import contentImage2 from '../assets/charImg2.png'
import contentImage3 from '../assets/Screen_02.gif'



export const MainContent = () => {
    return (
        <div className={'container' }>
            <div className={styles.contentSection}>
                <div className={styles.contentSectionItems+' '+ styles.contentSectionText}>
                    <h1>Exclusive NFT Collection</h1>
                    <h4>The Bored Punks of Society NFT collection is our community's status and prestige inside and outside of crypto and the metaverse.The pioneering world-class Filipino NFT collection, and our proof of being part of the leading social club shaping the future with crypto and progressing financial literacy in the Philippines.</h4>
                    <button className={'defaultButton'}><span>Our NFT</span></button>

                </div>
                <div className={styles.contentSectionItems + ' ' + styles.contentImageBg1}>
                    <img src={contentImage1} className={styles.contentImage} alt="image 1" />
                    <p>click here to learn more about NFTs and the metaverse</p>
                </div>
            </div>
            <div className={styles.contentSection}>
                <div className={styles.contentSectionItems + ' '+ styles.contentImageBg1}>
                    <img src={contentImage2} className={styles.contentImage2} alt="image 2" />
                </div>
                <div className={styles.contentSectionItems+' '+ styles.contentSectionText}>
                    <h1>Invest and Thrive</h1>
                    <h4>As a community, we invest not only on projects with great potential but also on ourselves and the community we have built together by discovering, learning, and discussing topics that will help us improve and take advantage of these new opportunities in the space. We leave no man behind. Our brand aims to help Filipinos find their success in this fast emerging future that is being built. We will thrive together as one educated, financially literate, Bored Punks of Society.</h4>
                </div>
            </div>
            <div className={styles.contentSectionGif}>
                <img src={contentImage3} className={styles.contentGif} alt="image 3" />
            </div>
        </div>
    )
}
