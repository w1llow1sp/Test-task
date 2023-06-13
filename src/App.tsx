import React, {FC} from 'react';
import { useSelector} from 'react-redux';
import {LanguageBody} from './components/LanguageBodyContainer/LanguageBody/LanguageBody';
import {AppRootState} from './redux/store';
import {LanguageHeader} from './components/LanguageHeaderContainer/LanguageHeader/LanguageHeader';


    export const App: FC = () => {
    const isShow = useSelector<AppRootState,boolean>(state => state.root.isShow)

    return (
        <div className={'container'}>
            <LanguageHeader/>
            {
                isShow
                    ? <LanguageBody/>
                    : <div></div>
            }
        </div>
    )
}

export default App;
