import axios from 'axios'; 
import React, { useReducer } from 'react';
export const contactsContext = React.createContext();





const INIT_STATE = {
    contactsToEdit:{
        name:'',
        surName:'',
        phone:''
    },
    contacts:[]

}

const reducer = (state=INIT_STATE, action)=>{
    switch(action.type){
        case "GET_CONTACTS_DATA":
            return {
                ...state,
                contacts:action.payload
            }

        case "EDIT_TODO": 
        return {
            ...state, 
            contactsToEdit: action.payload}

        default: return state
    }

}



const ContactsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)


    async function addNewContact (newContact){
        await axios.post('http://localhost:8003/contacts', newContact)
        getContactsData();
    }
    
    async function getContactsData(){
        const {data} = await axios('http://localhost:8003/contacts')
        dispatch({
            type:"GET_CONTACTS_DATA",
            payload: data
        })

    }


    // /new/


    const editTodo = async (id) => {
        let {data} = await axios(`http://localhost:8003/contacts/${id}`)
        dispatch({
            type: "EDIT_TODO",
            payload: data
        })
    }

    const saveContacts = async (newContacts, history) => {
        console.log(newContacts);
        try{
            await axios.patch(`http://localhost:8003/contacts/${newContacts.id}`, newContacts)
            history.push('/')
        }catch(error){
            history.push('/error')
        }
    }

    const deleteContacts = async (id) => {
        await axios.delete(`http://localhost:8003/contacts/${id}`)
        getContactsData()
    }



    return (
        <contactsContext.Provider value={{
            contacts:state.contacts,
            contactsToEdit:state.contactsToEdit,
            addNewContact,
            getContactsData,
            editTodo,
            saveContacts,
            deleteContacts
 
        }}>
            {children}
        </contactsContext.Provider>
    );
};

export default ContactsContextProvider;