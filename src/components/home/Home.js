import React from 'react';
import AddContact from '../addContact/AddContact';
import ContactsList from '../contactsList/ContactsList';

const Home = () => {
    console.log('home')
    return (
        <div>
            <AddContact />
            <ContactsList/>
        </div>
    );
};

export default Home;