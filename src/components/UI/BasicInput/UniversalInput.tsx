import React, {DetailedHTMLProps, InputHTMLAttributes} from 'react';
import styles from './UniversalInput.module.scss'

import icon from '../../../assets/arrow.svg'

type DefaultUniversalInput = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement>
type InputProps = DefaultUniversalInput & {
    color: string
    type:string
}


export const UniversalInput = React.memo( function ({color,type,...rest}:InputProps) {
    const className = `${styles.input} ${styles[`input_${color}`]}`
    return (
            <input type={type} className={className} {...rest}/>
    );
})


