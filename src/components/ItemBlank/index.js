import React from 'react'
import styles from './index.module.scss';

function ItemBlank() {
  return (
    <div className={styles.Container}>
        <div className={styles.Container__Text}>
            Nothing to-do yet.
        </div>
    </div>
  )
}

export default ItemBlank