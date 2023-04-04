import React from 'react'
import styles from './index.module.scss';

const Alert = () => {
    // const tooManyInput = () =>{
    //     return(
    //         <div className={styles.Text}>Title must be shorter than or equal to 100 characters.</div>
    //     )
    // }

    // const zeroInput = () =>{
    //     return(
    //         <div className={styles.Text}>You havent write the Title</div>
    //     )
    // }

    return(
        <div className={styles.Text}>Title must be shorter than or equal to 100 characters.</div>
    )
}

export default Alert