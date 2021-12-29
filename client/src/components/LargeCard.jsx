import React from "react";
import Card  from "react-bootstrap/Card";
import { ListGroup } from "react-bootstrap";

function LargeCard () {




    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Header>Activity Name: </Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Activity Type: </ListGroup.Item>
                    <ListGroup.Item>Participants: </ListGroup.Item>
                    <ListGroup.Item>Accessibility: </ListGroup.Item>
                    <ListGroup.Item>Posts: </ListGroup.Item>
                </ListGroup>
            </Card>
        </div>
    )
}

export default LargeCard; 