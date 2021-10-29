import React from 'react';
import './SectionHeading.css';

const SectionHeading = ({children}) => {
    return (
        <div className="heading py-5">
            <h2>{children}</h2>
        </div>
    );
};

export default SectionHeading;