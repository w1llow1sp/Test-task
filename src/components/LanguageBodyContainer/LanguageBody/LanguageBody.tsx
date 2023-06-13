import React, {ChangeEvent, FC, useCallback, useEffect, useState} from "react";
import styles from './LanguageBody.module.css'
import {LanguageCard} from '../LanguageCard/LanguageCard';
import {useDispatch, useSelector} from 'react-redux';
import {
    LangugesType,
    searchLanguagesAC,
    selectedLanguagesAC,
    selectTogglerAC,
} from '../../../redux/languages-reducer';
import {AppRootState} from '../../../redux/store';

export const LanguageBody = React.memo( function () {
    const dispatch = useDispatch()

    // dispatch functions
    const selectToggler = useCallback(
        (ID: string, isSelect: boolean) => {
            dispatch(selectTogglerAC(ID,isSelect))
        },
        [dispatch],
    );
     const searchLanguages  = useCallback(
         (searchTerm: string) => {
             dispatch(searchLanguagesAC(searchTerm))
         },
         [dispatch],
     );

    // datas from store
    const language  = useSelector<AppRootState,Array<LangugesType>>(state => state.root.languages)

    console.log(language)

    const searchTerm = useSelector<AppRootState,string>(state => state.root.searchTerm)

    const selectedLang  = useCallback(
        () => {
            dispatch(selectedLanguagesAC())
        },
        [dispatch],
    );


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
})