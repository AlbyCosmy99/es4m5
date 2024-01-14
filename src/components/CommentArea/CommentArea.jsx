import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import './CommentArea.css'

export default function CommentArea() {
    const [comment,setComment] = useState('')
    const [finishedComment, setFinishedComment] = useState(false)
    const [showCommentError, setShowCommentError] = useState(false)

    const handleSubmit = (event) => {
        if(!comment) {
            setShowCommentError(true)
        }
        else {
            setShowCommentError(false)
            setFinishedComment(true);
        }
        event.preventDefault(); // Prevents the default form submit action
        
    };

    return (
        <form onSubmit={handleSubmit}>
            {
                finishedComment ? 
                <h5>{comment}</h5> 
                :
                <Container>
                    <Row>
                        <Col sm={6} className="center">
                            <Form.Group className="mb-3" controlId="formBasicComment">
                                <Form.Control 
                                    type="text" 
                                    placeholder="Enter comment"
                                    value={comment}
                                    onChange={e => setComment(e.target.value)}
                                    style={{margin: '1rem'}}
                                />   
                            </Form.Group>
                        </Col>
                        <Col sm={6} className="center">
                            <Button type="submit" variant="primary">SEND</Button>
                        </Col>
                    </Row>
                    {!showCommentError ? '' : (
                        <Form.Text className="text-muted text-danger">
                            Insert comment
                        </Form.Text>
                    )}
                </Container>
            }      
        </form>
    )
}