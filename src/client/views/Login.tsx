import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import { json, SetAccessToken, User } from '../utils/api';

export interface LoginProps extends RouteComponentProps { }
export interface LoginState {
    email: string,
    password: string,
    loginStatus: boolean
}

class Login extends React.Component<LoginProps, LoginState> {

    constructor(props: any) {
        super(props);
        this.state = {
            email: '',
            password: '',
            loginStatus: false
        };
    }

    private alert: JSX.Element = null;
    private loggingIn: boolean = false;

    componentDidMount() {
        if(User && User.role == 'admin') {
            this.props.history.push('/admin');
        } 
    };

    async handleLoginSubmit(e: any) {
        e.preventDefault();

        this.setState({ loginStatus: false });

        if(this.loggingIn) return;

        let login: { email: string, password: string } = {
            email: this.state.email,
            password: this.state.password
        }
        try {
            this.loggingIn = true;
            let result = await json('/auth/login', 'POST', login);

            if (result) {
                SetAccessToken(result.token, { userid: result.userid, role: result.role })
                if (result.role === 'admin') {
                    this.props.history.push('/admin');
            } else {
                console.log("Invalid credentials");
                this.props.history.push('/');
            }
            } else {
                this.setState({ loginStatus: true })
            }
        } catch (error) {
            this.setState({ loginStatus: true })
            throw error;
        } finally {
            this.loggingIn = false;
        }
    }
    render() {
        if (this.state.loginStatus) {
            this.alert = <div className='alert alert-danger my-2 p-2' role='alert'>Invalid Credentials</div>
        }
        return (
            <section className="row justify-password-center justify-content-center">
                <article className="col-8">
                    <h2 className="row mt-4 justify-password-center justify-content-center">Login</h2>
                    <form className="form-group p-3 shadow border rounded">
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
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleLoginSubmit(e)}
                            className="btn btn-primary btn-block mt-3 shadow-lg">Login</button>
                        {this.alert}
                    </form>
                </article>
            </section>
        );
    }
}

export default Login;