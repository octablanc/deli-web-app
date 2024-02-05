import { useState } from 'react';
import styles from './styles/CustomInput.module.css';
import { CustomInputProps } from './interfaces';

export function CustomInput({ span, onChange, validation, errorMessage, getError, value }: CustomInputProps) {
    const [error, setError] = useState<boolean>(false);
    const [selected, setSelected] = useState(false);

    const selectedHandlerChange = () => {
        setSelected(!selected);
    }

    const inputHandlerChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        if(onChange)
            onChange(target.value);

        if (validation){
            const validated = validation(target.value);
            setError(validated);
            if(getError)
                getError(validated);
        }
    }

    return (
        <div className={styles.field}>
            <span className={`${styles.inputSpan} ${error ? styles.spanError : selected ? styles.inputSelected : ''}`}>{span}</span>
            <input value={value} className={`${styles.input} ${error ? styles.inputError : ''}`} onFocus={selectedHandlerChange} onBlur={selectedHandlerChange} onChange={inputHandlerChange} />
            {
                error && <span className={styles.errorMessage}>{errorMessage}</span>
            }
        </div>
    );
}