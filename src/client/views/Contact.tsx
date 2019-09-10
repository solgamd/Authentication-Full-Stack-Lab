import * as React from 'react';

export interface ContactProps { }

export interface ContactState {
    email: string,
    subject: string,
    message: string
}

class Contact extends React.Component<ContactProps, ContactState> {
    constructor(props: ContactProps) {
        super(props);
        this.state = {
            email: "",
            subject: "",
            message: ""
        };
    }

    onSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await fetch('/api/contact', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(this.state)
            });
            alert('Submitted!');
            this.setState({ email: '', subject: '', message: '' });
        } catch (error) {
            throw error;
        }
    }

    render() {
        return (
            <main className="container col-md-8">
                <h2 className="row mt-4 justify-content-center text-secondary">Get In Touch With Me</h2>
                <h6 className="row justify-content-center mt-5">Send me your comments or questions about my blog.</h6>
                <form
                    className="form-group mt-5 border rounded p-3 shadow"
                    onSubmit={this.onSubmit}>
                    <label>Email</label>
                    <input
                        type="text"
                        value={this.state.email}
                        className="input-group mb-3"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value })} />
                    <label>Subject</label>
                    <input
                        type="text"
                        value={this.state.subject}
                        className="input-group mb-3"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ subject: e.target.value })} />

                    <label>Message</label>
                    <textarea
                        value={this.state.message}
                        rows={10}
                        className="form-control"
                        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => this.setState({ message: e.target.value })} />
                    <button className="btn btn-primary mt-3 shadow">Send Email</button>
                </form>
            </main>
        );
    }
}

export default Contact;