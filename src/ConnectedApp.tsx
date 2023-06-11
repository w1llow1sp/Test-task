import React from 'react';
import {connect} from "react-redux";
import {AppRootState} from "./redux/store";
import App from "./App";


export type mapStateToProps = {
    isShow:boolean
}

const mapStateToProps = (state:AppRootState):mapStateToProps => {
    return {
        isShow: state.root.isShow
    };
};


export const ConnectedApp = connect(mapStateToProps)(App)
