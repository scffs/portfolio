import React from 'react';

const MySelect = ({options, defaultOption, tag, onChange}) => {
    return (
        <select value={tag}
                onChange={event => onChange(event.target.value)}
                name="categories" id="categories" style={{marginBottom: '25px', padding: '5px'}}
        >
            <option value="0">{defaultOption}</option>
            {
                options.map(option =>
                    <option key={option.tag} value={option.tag}>{option.name}</option>
                )
            }
        </select>
    );
};

export default MySelect;