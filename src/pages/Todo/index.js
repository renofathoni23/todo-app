import React, { useState } from 'react'
import styles from './index.module.scss';
import Item from '../../components/Item';
import ItemBlank from '../../components/ItemBlank';
import Alert from '../../components/Alert';
import Modal from '../../components/Modal';

const Todo = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [data, setData] = useState([]);
    const [input, setInput] = useState('');
    const [alertMessage, setAlertMessage] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);

    const onChangeInput = (e) =>{
        e.preventDefault();
        setInput(e.target.value);
    };


    const addItem = () => {
        if(input.length === 0 || input.length > 100){
            setAlertMessage(true);
        }
        else{
            let newItem = {
                id: Math.random(),
                title: input,
                isDone: false,
            };
            data.splice(0,0,newItem)
            setInput('');
            setIsVisible(!isVisible);
            setAlertMessage(false)
        }
    };

    const finishItem = (id) =>{
        let newData = [...data];
        let index = newData.findIndex(x => x.id === id);
        newData[index].isDone = true;
        newData.splice(newData.length,0,newData.splice(index,1)[0]);
        setData(newData);
    };

    const deleteItem = (id) => {
        let newData = [...data];
        newData = newData.filter(item => item.id !== id)
        setData(newData);
    };

    const changeModalVisible = () => {
        setModalVisible(!modalVisible);
    };

    const clearAllItems = () => {
        let newData = [...data];
        newData.splice(0, newData.length);
        setData(newData);
        setModalVisible(!modalVisible);
    }


  return (
    <>
        <div className={styles.Container}>
            <div className={styles.HeaderContainer}>
                <div className={styles.HeaderContainer__Header}>
                    <div className={styles.HeaderContainer__Header__Title}>
                        Things you should be doing today...
                    </div>
                    <div className={styles.HeaderContainer__Header__ButtonContainer}>
                        {!isVisible && <button className={styles.Button} onClick={() => { setIsVisible(!isVisible)}}>Add New</button>}
                        <button className={styles.ButtonClear} onClick={changeModalVisible}>Clear</button>
                    </div>
                </div>
                { isVisible &&
                    <div className={styles.HeadContainer__InputWrapper}>
                        <div className={styles.HeaderContainer__Input}>
                            <textarea name="postTodo" placeholder="Add new to-do title..." onChange={onChangeInput} className={styles.HeaderContainer__Input__InputText}/>
                            <div className={styles.HeaderContainer__Input__ButtonContainer}>
                                <button className={styles.ButtonCancel} onClick={() => { setIsVisible(!isVisible) ; setAlertMessage(false)}}>Cancel</button>
                                <button className={styles.Button} onClick={addItem}>Create</button>
                            </div>
                        </div>
                        { alertMessage && <Alert></Alert>} 
                    </div>
                }
            </div>

            <div className={styles.ItemWrapper}>
                { data.length === 0 ? <ItemBlank/> : data.map((item,index) => (
                    <Item 
                        key = {index} 
                        item = {item} 
                        finishItem = {e => finishItem(item.id)}
                        deleteItem = {e => deleteItem(item.id)}
                    ></Item>
                ))}
            </div>
        </div>
        { modalVisible && <Modal 
            changeModalVisible={changeModalVisible}
            clearAllItems={clearAllItems}
            >
        </Modal>}
    </>
  )
}

export default Todo