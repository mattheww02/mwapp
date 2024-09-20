import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MyCard from './MyCard'; // Import MyCard component

const MyGrid = () => {
    return (
        <Container>
            <Row>
                <Col md={4}><MyCard /></Col>
                <Col md={4}><MyCard /></Col>
                <Col md={4}><MyCard /></Col>
            </Row>
        </Container>
    );
};

export default MyGrid;