import React, { useContext, useEffect, useState } from 'react';
import { contactsContext } from '../../context/ContactsContext';



const EditTodo = (props) => {

    
    const { contactsToEdit, saveContacts } = useContext(contactsContext);
    const [editItem, setEditItem ] = useState(contactsToEdit)



    useEffect (() => {
      setEditItem(contactsToEdit)
    }, [contactsToEdit])

    function handle(e){
        let obj={
            ...editItem, 
            [e.target.name]: e.target.value
        }
        setEditItem(obj)
    }


    return (
        <div>
            {editItem? 
            <> 
                <input name="name"  onChange = {handle}  value={editItem.name}/>
                <input name="surName"  onChange = {handle}  value={editItem.surName}/>
                <input name="phone"  onChange = {handle} value={editItem.phone}/>

                <button onClick={() => saveContacts(editItem, props.history)}>Save</button>
            </>
            : <h1>Loading</h1>}
        </div>
    ); 
};

export default EditTodo;