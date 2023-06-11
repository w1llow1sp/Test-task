import {connect} from "react-redux";
import {LanguageHeader} from "../LanguageHeaderContainer/LanguageHeader/LanguageHeader";
import {AppRootState} from "../../redux/store";
import {Dispatch} from "redux";
import {VisibilityTogglerAC} from "../../redux/languages-reducer";
// Типизация для пропсов
type mapStateToProps = {
    selectedLanguages:Array<string>
    isIconFlipped:boolean
}

type mapDispatchToProps = {
    visibilityToggler:() => void
}

export type HeadContainerPropsType = mapDispatchToProps & mapStateToProps

// Функции для connect

let mapStateToProps = ( state:AppRootState):mapStateToProps => {
    return {
        selectedLanguages:state.root.selectedLanguages,
        isIconFlipped:state.root.isIconFlipped
    }
}

let mapDispatchToProps = (dispatch:Dispatch):mapDispatchToProps => {
    return {
        visibilityToggler:()=> {
            dispatch(VisibilityTogglerAC())
        }
    }
}

export const LanguageHeaderContainer = connect(mapStateToProps,mapDispatchToProps)(LanguageHeader)