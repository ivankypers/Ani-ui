import React from "react";
import styles from './Header.module.scss'
import Link from "next/link";


const Header: React.FC = () => {

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <Link href={'/'}>
                    <div className='font-black text-2xl italic'>Ani-ui</div>
                    <div></div>
                </Link>
                <nav>
                    <ul>
                        <li>
                            <Link href="/dashboard">
                                Docs
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header