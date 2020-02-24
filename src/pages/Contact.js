import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Omni from '../components/Omni';
import Axios from 'axios'
import { motion } from 'framer-motion';


class Contact extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            disabled: true,
        });

        Axios.post('/api/email', this.state)
            .then(res => {
                if (res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })
            .catch(err => {
                this.setState({
                    disabled: false,
                    emailSent: false
                });
            });
    }

    render() {
        return (
            <div>
                <motion.div exit={{ opacity: 0 }} animate={{
                    x: 0,
                    backgroundColor: "#2193b0",
                    boxShadow: "30px 30px 0 rgba(0, 0, 0, 0.5)",
                    position: "fixed",

                }}>
                    <Omni title={this.props.title} />
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="phone">Phone</Form.Label>
                            <Form.Control id="phone" name="phone" type="phone" value={this.state.phone} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange} />
                        </Form.Group>

                        <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                            Send
                    </Button>

                        {this.state.emailSent === true && <p className="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline error-msg">Email Not Sent</p>}

                    </Form>
                </motion.div>
            </div>
        )
    }
}

export default Contact;