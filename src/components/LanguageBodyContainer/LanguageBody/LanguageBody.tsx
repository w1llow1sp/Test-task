import React, {ChangeEvent, FC, useEffect, useState} from "react";
import {BodyContainerPropsType} from "../LanguageBodyContainer";
import styles from './LanguageBody.module.css'
import {LanguageCard} from '../LanguageCard/LanguageCard';

export const LanguageBody: FC<BodyContainerPropsType> = ({
                                                             language,
                                                             searchTerm,
                                                             searchLanguages,
                                                             selectToggler,
                                                             selectedLang
                                                         }) => {

    const mappedLanguages = language.map(lang => {
        selectedLang()
        return (
            <LanguageCard key={lang.id}
            id={lang.id}
            picture={lang.picture}
            onChange={selectToggler}
            lang={lang.lang}
            isSelect={lang.isSelect}/>
        );
    });
    const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        let searchTerm = e.currentTarget.value
        searchLanguages(searchTerm);
    };

    return (
        <div className={styles.container}>
            <div className={styles.searchBar}>
                <input
                    className={styles.searchInput}
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchInputChange}
                    placeholder="Поиск"
                />
            </div>
            {mappedLanguages}
        </div>
    );
};
