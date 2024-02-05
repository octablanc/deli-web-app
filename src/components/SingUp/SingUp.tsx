import Loader from '../Loader/Loader';
import { CustomInput } from './components';
import { CustomInputProps } from './components/interfaces';
import { useSingUpLogic } from './hooks';
import styles from './styles/sing-up.module.css';

export function SingUp() {
    const { fields, disableSumbitButton, onSumbit, loading } = useSingUpLogic();

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Ingresá tus datos para empezar</h2>
            {
                fields?.map(
                    (field:CustomInputProps)=> <CustomInput {...field}/>
                )
            }
            <button disabled={disableSumbitButton} className={styles.button} onClick={onSumbit}>REGISTRARME</button>
            {
                loading && <Loader/>
            }
        </div>
    )
}