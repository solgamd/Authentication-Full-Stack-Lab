import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { json, SetAccessToken } from '../utils/api';


export interface RegisterProps extends RouteComponentProps { }
export interface RegisterState {
    email: string,
    password: string,
    // name: string
}

class Register extends React.Component<RegisterProps, RegisterState> {
    constructor(props: RegisterProps) {
        super(props);
        this.state = {
            email: '',
            password: '',
            // name: ''
        }
    }

    async handleRegister(e: React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        try {
            let result = await json(`/auth/register`, 'POST', this.state);
            SetAccessToken(result.token, { userid: result.userid, role: result.role });
            this.props.history.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        return (
            <section className="row justify-password-center justify-content-center">
                <article className="col-8">
                    <h2 className="row mt-4 justify-password-center justify-content-center text-secondary">Register</h2>
                    <form className="form-group p-3 shadow border rounded bg-white">
                        <label>Email</label>
                        <input
                            value={this.state.email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value })}
                            type="text"
                            className="form-control"
                        />
                        <label className="mt-4">Password</label>
                        <input
                            value={this.state.password}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ password: e.target.value })}
                            type="password"
                            className="form-control"
                        />
                        <button
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleRegister(e)}
                            className="btn btn-primary btn-block mt-3 shadow-lg">Register</button>
                    </form>
                </article>
            </section>

        );
    }
};

export default Register;