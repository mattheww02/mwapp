import React from 'react';
import { Button } from 'react-bootstrap';

const MyButton = ({ text, onClick }) => {
    return (
        <Button onClick={onClick}>{ text }</Button>
    );
};

export default MyButton;