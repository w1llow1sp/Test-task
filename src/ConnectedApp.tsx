import React from 'react';
import {connect} from "react-redux";
import {AppRootState} from "./redux/store";
import {languageReducer} from "./redux/languages-reducer";


type mapStateToProps = {
    isShow:boolean
}

const mapStateToProps = (state:AppRootState):mapStateToProps => {
    return {
        isShow: state.root.isShow
    };
};


const AppCopy = connect()()
