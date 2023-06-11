import React, {FC} from 'react';
import {mapStateToProps} from "./ConnectedApp";
import {LanguageHeaderContainer} from "./components/LanguageHeaderContainer/LanguageHeaderContainer";
import {LanguageBodyContainer} from "./components/LanguageBodyContainer/LanguageBodyContainer";


export const App: FC<mapStateToProps> = ({isShow}) => {

    return (
        <div className={'container'}>
            <LanguageHeaderContainer/>
            {
                isShow === true
                    ? <LanguageBodyContainer/>
                    : <div></div>
            }
        </div>
    )
}

export default App;
