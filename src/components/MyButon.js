import React from 'react';
import { Button } from 'react-bootstrap';

const MyButton = ({ text, onClick }) => {
    return (
        <Button className="btn btn-primary my-button" onClick={onClick}>{ text }</Button>
    );
};

export default MyButton;