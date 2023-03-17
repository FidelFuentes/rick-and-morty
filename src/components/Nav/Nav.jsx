import SearchBar from "../SearchBar/SearchBar";
import styles from './Nav.module.css'
import React from "react";

import { Link } from "react-router-dom";
import { symbol } from "prop-types";


export default function Nav({onSearch}){
    return(
        <div className={styles.nav}>
            <nav >
              
               <div className={styles.div}>
                <Link to='/favorites'>
                    <div>
                    <p className={styles.p}>Favorites</p>
                    </div>
                    
                </Link>
                <div>
                <Link to="/about">
                    <p className={styles.p}>About</p>
                </Link>
                </div>
                <div>
                <Link to='/home'>
                    <p className={styles.p}>Home</p>
                </Link>
                </div>
                </div>
                <div className={styles.search}> 
                <SearchBar onSearch={onSearch}/>
               </div>
            </nav>

        </div>
    )
}