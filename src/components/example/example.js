import React from 'react';

const Example = ({ whisky }) => (
    <div>
        <img style={{ width: '300px', height: '300px' }} src={whisky.imageUrl} />
        <h3>{whisky.title}</h3>
    </div>
);

export default Example;