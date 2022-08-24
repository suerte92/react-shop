import React from 'react';

const Button = () => (
        <div>
            <h1>{name}</h1>
        </div>
);


// -------------------------- también.
import React from 'react'

const Button = () => <ButtonRed />;

// ó

const Button = ({ text }) => <ButtonRed text={text} />;


