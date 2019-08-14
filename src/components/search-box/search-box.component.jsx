import React from 'react';

import './search-box.styles.css';

export const SearchBox = ({ placeholder, handelChange }) => {
    return (
        <div>
            <input className='search'
                type="search"
                placeholder={placeholder}
                onChange={handelChange}
            />
        </div>
    )
}