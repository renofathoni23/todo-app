import React from 'react'
import styles from './index.module.scss';

const Modal = ({changeModalVisible, clearAllItems}) => {
    return(
        <div className={styles.Container}>
            <div className={styles.ModalContainer}>
                <div className={styles.ModalContainer__Title}>Confirm to clear all todos?</div>
                <div className={styles.ModalContainer__ButtonContainer}>
                    <button className={styles.ButtonCancel} onClick={changeModalVisible}>Cancel</button>
                    <button className={styles.ButtonConfirm} onClick={clearAllItems}>Confirm</button>
                </div>
            </div>
        </div>
    )
}

export default Modal