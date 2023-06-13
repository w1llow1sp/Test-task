import React, {FC, useCallback} from 'react';
import {mapStateToProps} from "./ConnectedApp";
import {LanguageHeaderContainer} from "./components/LanguageHeaderContainer/LanguageHeaderContainer";
import {useDispatch, useSelector} from 'react-redux';
import {LanguageBody} from './components/LanguageBodyContainer/LanguageBody/LanguageBody';
import {AppRootState} from './redux/store';


    export const App: FC<mapStateToProps> = () => {
    const isShow = useSelector<AppRootState,boolean>(state => state.root.isShow)

    return (
        <div className={'container'}>
            <LanguageHeaderContainer/>
            {
                isShow === true
                    ? <LanguageBody/>
                    : <div></div>
            }
        </div>
    )
}

export default App;
