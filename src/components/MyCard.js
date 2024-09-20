import React from 'react';
import { Card, Button } from 'react-bootstrap';

const MyCard = ({titleText, bodyText, buttonText}) => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{titleText}</Card.Title>
                <Card.Text>
                   {bodyText}
                </Card.Text>
                <Button className="button" variant="primary">{buttonText}</Button>
            </Card.Body>
        </Card>
    );
};

export default MyCard;