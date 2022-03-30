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
                <div className={styles.contentSectionItems}>
                    <img src={contentImage1} className={styles.contentImage} alt="image 1" />
                    <p>click here to learn more about NFTs and the metaverse</p>
                </div>
            </div>
            <div className={styles.contentSection}>
                <div className={styles.contentSectionItems}>
                    <img src={contentImage2} className={styles.contentImage2} alt="image 2" />
                    <p>click here to learn more about NFTs and the metaverse</p>
                </div>
                <div className={styles.contentSectionItems+' '+ styles.contentSectionText}>
                    <h1>Exclusive NFT Collection</h1>
                    <h4>The Bored Punks of Society NFT collection is our community's status and prestige inside and outside of crypto and the metaverse.The pioneering world-class Filipino NFT collection, and our proof of being part of the leading social club shaping the future with crypto and progressing financial literacy in the Philippines.</h4>
                    <button className={'defaultButton'}><span>Our NFT</span></button>
                </div>
            </div>
            <div className={styles.contentSectionGif}>
                <img src={contentImage3} className={styles.contentGif} alt="image 3" />
            </div>
        </div>
    )
}
