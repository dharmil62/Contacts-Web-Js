import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';
``
const ContactList = (props) => {

    const inputEl = useRef("");

    const deleteContactHandler = (id) => {
        props.getContactId(id);
    };
    const renderContactList = props.contacts.map((contact) => {
        return <ContactCard contact={contact} clickHandler={deleteContactHandler} key={contact.id} />;
    });

    const getSearchTerm = () => {
        props.searchKeyword(inputEl.current.value);
    };

    return (
        <div class="main" style={{ paddingTop: '100px' }}>
            <h2>
                Contact List
                <Link to="add">
                    <button className="ui button blue right" style={{ float: 'right' }}>Add Contact</button>
                </Link>
            </h2>
            <div className="ui search" style={{ paddingTop: "20px" }}>
                <div className="ui icon input">
                    <input ref={inputEl} type="text" placeholder="Search Contacts" className="prompt" value={props.term} onChange={getSearchTerm} />
                    <i className="search icon"></i>
                </div>
            </div>
            <div className="ui celled list" style={{ paddingTop: '25px' }}>{renderContactList.length > 0 ? renderContactList : "No Contacts Available ..."}</div>
        </div>

    );
};

export default ContactList;