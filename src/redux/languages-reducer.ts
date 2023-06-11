import {v1} from "uuid";
import RU from "../assets/flags/RU.png";
import EN from "../assets/flags/EN.png";
import EN1 from "../assets/flags/EN1.png";
import DE from "../assets/flags/DE.png";
import IT from "../assets/flags/IT.png";
import PL from "../assets/flags/PL.png";


export type LangugesType = {
    id: string,
    picture: string
    lang: string
    isSelect: boolean
}

export type InitialStateType = {
    languages: Array<LangugesType>
    searchTerm: string
    isShow: boolean
    isIconFlipped: boolean
    selectedLanguages:Array<string>
}

export type ActionsType =
    ReturnType<typeof VisibilityTogglerAC> |
    ReturnType<typeof selectTogglerAC> |
    ReturnType<typeof selectedLanguagesAC> |
    ReturnType<typeof searchLanguagesAC>


const initialState: InitialStateType = {
    languages: [
        {id: v1(), picture: RU, lang: 'Русский', isSelect: false},
        {id: v1(), picture: EN, lang: 'Английский', isSelect: true},
        {id: v1(), picture: EN1, lang: 'Английский', isSelect: false},
        {id: v1(), picture: DE, lang: 'Немецкий', isSelect: true},
        {id: v1(), picture: IT, lang: 'Итальянский', isSelect: false},
        {id: v1(), picture: PL, lang: 'Польский', isSelect: false}
    ],
    searchTerm: '',
    isShow: false,
    isIconFlipped: false,
    selectedLanguages:['Английский','Немецкий']
}
export const languageReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case "VISIBILITY_TOGGLER":
            return {
                ...state,
                isShow: !state.isShow,
                isIconFlipped: !state.isIconFlipped
            }
        case "SELECT_TOGGLER":
            return {
                ...state,
                languages: state.languages.map(lang =>
                    lang.id === action.ID
                        ? {...lang, isSelect: action.isSelect}
                        : lang)
            }
        case 'SEARCH_LANGUAGES':
            return {
                ...state,
                searchTerm: action.searchTerm,
                languages: state.languages.filter((lang) =>
                    lang.lang.toLowerCase().includes(action.searchTerm.toLowerCase())
                )
            };
        case "SELECTED_LANG":
            return {
                ...state,
                selectedLanguages:state.languages.filter
                (lang=>lang.isSelect).map(lang => lang.lang)
            }
        default:
            return state


    }
}

export const VisibilityTogglerAC = () => {
    return {
        type: 'VISIBILITY_TOGGLER'
    } as const
}

export const selectTogglerAC = (ID: string, isSelect: boolean) => {
    return {
        type: 'SELECT_TOGGLER',
        ID,
        isSelect
    } as const
}

export const searchLanguagesAC = (searchTerm: string) => {
    return {
        type: 'SEARCH_LANGUAGES',
        searchTerm
    } as const;
};

export const selectedLanguagesAC = () => {
    return {
        type: 'SELECTED_LANG'
    } as const
}

