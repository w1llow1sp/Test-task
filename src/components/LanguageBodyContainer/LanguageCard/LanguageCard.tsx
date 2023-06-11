import React, {ChangeEvent} from 'react';
import styles from './Card.module.css'
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
            <div>
            <img src={lang.picture} alt={lang.lang} />
            <span>{lang.lang}</span>
            </div>
            <input
                type="checkbox"
                checked={lang.isSelect}
                onChange={inputToggler} />
        </div>
    );
})


