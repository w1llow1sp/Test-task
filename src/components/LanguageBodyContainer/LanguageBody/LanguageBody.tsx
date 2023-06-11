import React, {ChangeEvent, FC, useEffect, useState} from "react";
import {BodyContainerPropsType} from "../LanguageBodyContainer";
import styles from './LanguageBody.module.css'

export const LanguageBody: FC<BodyContainerPropsType> = ({
                                                             language,
                                                             searchTerm,
                                                             searchLanguages,
                                                             selectToggler
                                                         }) => {
    let onInputUpdate = searchLanguages

    const mappedLanguages = language.map((lang) => {
        const inputToggler = (e: ChangeEvent<HTMLInputElement>) => {
            selectToggler(lang.id, e.currentTarget.checked);
        };
        return (
            <div key={lang.id}>
                <img src={lang.picture} alt={lang.lang} />
                <span>{lang.lang}</span>
                <input type="checkbox" checked={lang.isSelect} onChange={inputToggler} />
            </div>
        );
    });
    const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        let searchTerm = e.currentTarget.value
        searchLanguages(searchTerm);
    };


    useEffect(()=>{
        const delayDebounceFunc = setTimeout(()=> {
            onInputUpdate(searchTerm)
        },300)

        return clearTimeout(delayDebounceFunc)
    },[searchTerm])


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


/*    let filteredLanguages = searchTerm.length === 0
        ? language
        : language.filter((lang) =>
            lang.lang.toLowerCase().includes(searchTerm.toLowerCase())
        );*/
