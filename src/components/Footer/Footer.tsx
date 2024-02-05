import { ReactElement } from "react";
import styles from './styles/footer.module.css';
import deliLogo from '../../../assets/deli-logo3.png';
import facebookLogo from '../../../assets/facebook-logo.png';
import instagramLogo from '../../../assets/instagram-logo.png';
import youtubeLogo from '../../../assets/youtube-logo.png';

export function Footer(): ReactElement{

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
            <img className={styles.logo} src={deliLogo} height={24}/>
                <div className={styles.socialMedias}>
                    <img className={styles.icon} src={facebookLogo} height={43} onClick={()=> window.open('https://www.facebook.com/deli.sistema/', '_blank')}/>
                    <img className={styles.icon} src={instagramLogo} height={43} onClick={()=> window.open('https://www.instagram.com/deli.sistema/', '_blank')}/>
                    <img className={styles.icon} src={youtubeLogo} height={43} onClick={()=> window.open('https://www.youtube.com/@deli.sistema', '_blank')}/>
                </div>
            </div>
        </footer>
    );
}