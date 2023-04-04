import React from 'react'
import styles from './index.module.scss';
import active from '../../assets/State=Active.png';
import inactive from '../../assets/State=Inactive.png';
import deleteIcon from '../../assets/Vector.png';

const Item =({item, finishItem, deleteItem})=> {
  return (
    <div className={!item?.isDone ? styles.Container : `${styles.Container} ${styles.ReduceOpacity}`}>
        <div className={styles.ItemContainer}>
            <div className={styles.ItemComponent}>
                <button className={styles.Button} onClick={finishItem}>
                    <img src={item?.isDone ? active : inactive} alt='check' className={styles.Image}></img>
                </button>
                <div className={styles.ItemTitle}>
                    {item?.title}
                </div>
            </div>
            <button className={styles.Button} onClick={deleteItem}>
                <img src={deleteIcon} alt='centang' className={styles.Image}></img>
            </button>
        </div>
    </div>
  )
}

export default Item;