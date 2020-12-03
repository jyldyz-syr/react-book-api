import React, {useContext, useEffect} from 'react';
import {contactsContext} from '../../context/ContactsContext'
import {Link} from "react-router-dom";





const ContactsList = () => {
    const {getContactsData, contacts, editTodo, deleteContacts} = useContext(contactsContext);
    useEffect(() => {
    getContactsData()
    },[])


    return (
        <div>
            {contacts.map(item =>(
            <ul key={item.id}>
                <li>{item.name} ,  
                {item.surName} ,  
                {item.phone} 
                    <button onClick={() => deleteContacts(item.id)}>Delete</button>

                    <Link to="/edit">
                        <button onClick={() => editTodo(item.id)}>Edit</button>
                    </Link>
                </li>
            </ul>
            ))}
        </div>
    );
};

export default ContactsList;