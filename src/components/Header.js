import React, { cloneElement } from 'react';

const Header = () => {
    return (
        <div className="ui fixed menu" style={{paddingLeft:"580px"}}>
            <div className="ui container center">
                <h1>Contact Manager</h1>
            </div>
        </div>
    );
};

export default Header;