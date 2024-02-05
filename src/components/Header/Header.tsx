import { ReactElement } from "react";
import styles from './styles/header.module.css';
import DeliLogo from '../../../assets/deli-logo2.png';

export default function Header(): ReactElement{

    return (
        <header className={styles.headerContent}>
            <img src={DeliLogo}/>
        </header>
    );
}