import React, {ChangeEvent, useCallback} from 'react';
import styles from './Card.module.css'
import {selectedLanguagesAC} from '../../../redux/languages-reducer';
import {useDispatch} from 'react-redux';
export type LanguageCardPropsType = {
    id: string,
    picture: string
    lang: string
    isSelect: boolean
    onChange:(ID: string, isSelect: boolean) => void
}


export const LanguageCard = React.memo((lang:LanguageCardPropsType) => {

    const inputToggler = (e: ChangeEvent<HTMLInputElement>) => {
        lang.onChange(lang.id, e.currentTarget.checked);
    };

    return (
        <div key={lang.id} className={styles.container}>
            <div className={styles.some}>
            <img src={lang.picture} alt={lang.lang} />
                <label htmlFor={lang.id}>{lang.lang}
                </label>
            </div>
            <input
                className={styles.checkbox}
                type="checkbox"
                checked={lang.isSelect}
                id={lang.id}
                onChange={inputToggler} />

        </div>
    );
})


