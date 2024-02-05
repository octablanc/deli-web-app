import { ReactElement } from "react";
import Header from "../Header/Header";
import { Footer } from "../Footer";
import styles from './styles/Layout.module.css';

export function Layout({ children } : { children: ReactElement }){
    return (
        <div className={styles.layout}>
            <Header/>
            <main className={styles.container}>
                <div className={styles.content}>
                    {children}
                </div>
            </main>
            <Footer/>
        </div>
    );
}