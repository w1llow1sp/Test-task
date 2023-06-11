import {connect} from "react-redux";
import {LanguageBody} from "./LanguageBody/LanguageBody";
import {LangugesType, searchLanguagesAC, selectTogglerAC} from "../../redux/languages-reducer";
import {AppRootState} from "../../redux/store";
import {Dispatch} from "redux";

// Типизация для пропсов
type mapStateToBody = {
    language:Array<LangugesType>
    searchTerm:string
}

type mapDispatchToBody = {
    selectToggler:(ID: string, isSelect: boolean) => void
    searchLanguages:(searchTerm: string) =>void
}

export type BodyContainerPropsType = mapDispatchToBody & mapStateToBody

// Функции для connect

let mapStateToBody = (state:AppRootState):mapStateToBody => {
    return {
        language:state.root.languages,
        searchTerm:state.root.searchTerm
    }
}


let mapDispatchToBody = (dispatch:Dispatch):mapDispatchToBody => {
    return  {
        selectToggler: (ID:string,isSelect:boolean) => {
            dispatch(selectTogglerAC(ID,isSelect))
        },
        searchLanguages: (searchTerm: string) => {
            dispatch(searchLanguagesAC(searchTerm))
        }
    }
}

export const LanguageBodyContainer = connect(mapStateToBody,mapDispatchToBody)(LanguageBody)