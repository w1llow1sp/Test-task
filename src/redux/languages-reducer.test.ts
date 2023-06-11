import {v1} from "uuid";
import RU from "../assets/flags/RU.png";
import EN from "../assets/flags/EN.png";
import EN1 from "../assets/flags/EN1.png";
import DE from "../assets/flags/DE.png";
import IT from "../assets/flags/IT.png";
import PL from "../assets/flags/PL.png";
import {
    languageReducer,
    searchLanguagesAC,
    selectedLanguagesAC,
    selectTogglerAC,
    VisibilityTogglerAC
} from './languages-reducer';


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
    selectedLanguages: Array<string>
}

const initialState: InitialStateType = {
    languages: [
        {id: '1', picture: RU, lang: 'Русский', isSelect: false},
        {id: '2', picture: EN, lang: 'Английский', isSelect: true},
        {id: '3', picture: EN1, lang: 'Английский', isSelect: false},
        {id: '4', picture: DE, lang: 'Немецкий', isSelect: true},
        {id: '5', picture: IT, lang: 'Итальянский', isSelect: false},
        {id: '6', picture: PL, lang: 'Польский', isSelect: false}
    ],
    searchTerm: '',
    isShow: false,
    isIconFlipped: false,
    selectedLanguages: ['Английский', 'Немецкий']
}

beforeEach(() => {
        return initialState
    }
)


test('Visibility toggler should work correctly', () => {
    let initialState1 = initialState
    let initialState2 = {...initialState, isShow: true}

    const action = VisibilityTogglerAC()

    const endState1 = languageReducer(initialState1, action)
    const endState2 = languageReducer(initialState2, action)

    expect(endState1.isShow).toBe(true)
    expect(endState2.isShow).toBe(false)
})

test('selectTogglerAC should work correctly', () => {
    let initialState1 = initialState
    let initialState2 = initialState
    let initialState3 = initialState


    const action1 = selectTogglerAC('1', true)
    const action2 = selectTogglerAC('2', false)
    const action3 = selectTogglerAC('3', true)

    const newAction = selectedLanguagesAC()

    const middleEndState1 = languageReducer(initialState1, action1)
    const endState1 = languageReducer(middleEndState1, newAction)

    const middleEndState2 = languageReducer(initialState2, action2)
    const endState2 = languageReducer(middleEndState2, newAction)

    const middleEndState3 = languageReducer(initialState3, action3)
    const endState3 = languageReducer(middleEndState3, newAction)

    expect(endState1.languages[0].isSelect).toBe(true)
    expect(endState1.selectedLanguages.length).toBe(3)
    expect(initialState1).not.toEqual(endState1)

    expect(endState2.languages[1].isSelect).toBe(false)
    expect(endState2.selectedLanguages.length).toBe(1)
    expect(initialState2).not.toEqual(endState2)

    expect(endState3.languages[2].isSelect).toBe(true)
    expect(endState3.selectedLanguages.length).toBe(3)
    expect(initialState2).not.toEqual(endState2)
})

test('searchLanguagesAC should work correctly', () => {
    let initialState1 = initialState
    let initialState2 = initialState
    let initialState3 = initialState
    let initialState4 = initialState


    const action1 = searchLanguagesAC('а')
    const action2 = searchLanguagesAC('А')
    const action3 = searchLanguagesAC('с')
    const action4 = searchLanguagesAC('С')


    const endState1 = languageReducer(initialState1, action1)
    const endState2 = languageReducer(initialState2, action2)
    const endState3 = languageReducer(initialState3, action3)
    const endState4 = languageReducer(initialState4, action4)


    expect(endState1.languages.length).toBe(3)
    expect(endState1.searchTerm).toBe('а')
    expect(initialState1).not.toEqual(endState1)

    expect(endState2.languages.length).toBe(3)
    expect(endState2.searchTerm).toBe('А')
    expect(initialState2).not.toEqual(endState2)

    expect(endState3.languages.length).toBe(5)
    expect(endState3.searchTerm).toBe('с')
    expect(initialState3).not.toEqual(endState3)

    expect(endState4.languages.length).toBe(5)
    expect(endState4.searchTerm).toBe('С')
    expect(initialState4).not.toEqual(endState4)
})


