import React, {FC} from "react";
import styles from './LanguageHeader.module.css'
import {HeadContainerPropsType} from "../LanguageHeaderContainer";

export const LanguageHeader:FC<HeadContainerPropsType> = ({selectedLanguages,visibilityToggler,isIconFlipped}) => {
    let mappedSelectedLanguages = selectedLanguages.map((select) => {
        return (
            <span key={select.indexOf(select)} className={styles.card}>
                {select}
                <button onClick={()=>{}} className={styles.buttonCross}>
                    <span className={styles.cross}> X </span>
                </button>
            </span>
        )
    })

    return (

        <div className={styles.headerContainer}>
            <h2>Язык</h2>
            <div className={styles.sectionContainer}>
                <div className={styles.leftContainer}>
                    {mappedSelectedLanguages}
                </div>
                <div className={styles.rightContainer}>
                    <button onClick={visibilityToggler} className={styles.button}>
                        <div className={`${styles.icon} ${isIconFlipped ? styles.flipped : ""}`} />
                    </button>
                </div>

            </div>

        </div>

    )
}