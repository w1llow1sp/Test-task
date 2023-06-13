
import React, {FC, useCallback} from "react";
import styles from './LanguageHeader.module.css'
import {v1} from 'uuid';
import {VisibilityTogglerAC} from '../../../redux/languages-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootState} from '../../../redux/store';

export const LanguageHeader  = React.memo( function () {
    const dispatch = useDispatch()
    // dispatch functions
    const visibilityToggler  = useCallback(
        () => {
            dispatch(VisibilityTogglerAC())
        },
        [dispatch],
    );
    // datas from store
    const selectedLanguages = useSelector<AppRootState,Array<string>>(state => state.root.selectedLanguages)

    const isIconFlipped = useSelector<AppRootState,boolean>(state => state.root.isIconFlipped)



    let mappedSelectedLanguages = selectedLanguages.map((select) => {
        return (
            <span key={v1()} className={styles.card}>
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
} )
