import React, { useContext, useEffect, useState } from 'react';
import { contactsContext } from '../../context/ContactsContext';



const EditTodo = (props) => {

    
    const { contactsToEdit, saveContacts } = useContext(contactsContext);
    console.log(contactsToEdit);
    const [newEditItem1, setNewEditItem1] = useState(contactsToEdit.name);
    const [newEditItem2, setNewEditItem2] = useState(contactsToEdit.surName);
    const [newEditItem3, setNewEditItem3] = useState(contactsToEdit.phone);
    const [newEditItem4, setNewEditItem4] = useState(contactsToEdit.id);
    
    useEffect (() => {
        setNewEditItem1(contactsToEdit.name)
        setNewEditItem2(contactsToEdit.surName)
        setNewEditItem3(contactsToEdit.phone)
        setNewEditItem4(contactsToEdit.id)

    }, [contactsToEdit])


    let name=newEditItem1
    let surName = newEditItem2
    let phone=newEditItem3
    let id=newEditItem4



    return (
        <div>
            {contactsToEdit? 
            <> 
                <input  value={newEditItem1} onChange= {(e)=> setNewEditItem1(e.target.value)} />
                <input  value={newEditItem2} onChange= {(e)=> setNewEditItem2(e.target.value)} />
                <input value={newEditItem3}  onChange= {(e)=> setNewEditItem3(e.target.value)}/>

                <button onClick={() => saveContacts({name, surName, phone, id}, props.history)}>Save</button>
            </>
            : <h1>Loading</h1>}
        </div>
    ); 
};

export default EditTodo;