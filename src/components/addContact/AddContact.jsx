import React, {useContext, useState} from 'react';
import {contactsContext} from "../../context/ContactsContext";


const AddContact = () => {
    const [contact, setContact] = useState({})
    const {addNewContact} = useContext(contactsContext)
    function handleInputValue(e){
        let obj= {
            ...contact,
            [e.target.name]:e.target.value 
        }
        console.log(obj)
        setContact(obj)
        console.log(obj)

    }
    return (
        <div>
            <input name="name" placeholder="name"onChange={handleInputValue} type="text"/>
            <input name="surName" placeholder="surName"onChange={handleInputValue} type="text"/>
            <input name="phone" placeholder="phone"onChange={handleInputValue} type="text"/>
            <button onClick={ ()=> addNewContact(contact)}>Add</button>
        </div>
    );
};

export default AddContact;