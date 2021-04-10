import React from "react"
import { Button, Card } from "react-bootstrap"
import closeup from './closeup.jpg'; // Tell webpack this JS file uses this image

export const OpenScreen = ({onStart}: any) => {
    return <div className="screen">
        <Card style={{ width: '38rem' }}>
            <Card.Img variant="top" src={closeup} />
            <Card.Body>
                <Card.Title> משחק הנמלה</Card.Title>
            <Card.Text>שחקו וענו על השאלות </Card.Text>
            <Button variant="primary" onClick={onStart} size="lg">התחל משחק חדש</Button>
        </Card.Body>
        </Card>
  </div>
}
