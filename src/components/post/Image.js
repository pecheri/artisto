import React from 'react';
import PropTypes from 'prop-types';

export default function Image({ imageSrc }) {
    return (
        <div className="flex w-full justify-center pt-2 pb-2">
            <img src={imageSrc} className="w-full" />
        </div>
    );
}

Image.propTypes = {
    imageSrc: PropTypes.string.isRequired,
};
