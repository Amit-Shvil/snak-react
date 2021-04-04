import React from "react"
import { Button, Card, Col, Container, Row } from "react-bootstrap"

export const OpenScreen = ({onStart}: any) => {
    return <div className="screen">
        <Card style={{ width: '38rem' }}>
            <Card.Img variant="top" src="./closeup.jpg" />
            <Card.Body>
                <Card.Title> משחק הנמלה</Card.Title>
            <Card.Text>שחקו וענו על השאלות </Card.Text>
            <Button variant="primary" onClick={onStart} size="lg">התחל משחק חדש</Button>
        </Card.Body>
        </Card>
  </div>
}