import * as React from 'react';
import '../scss/app.scss';
import { injectStripe, ReactStripeElements, CardElement } from 'react-stripe-elements';

export interface FormProps extends ReactStripeElements.InjectedStripeProps {
    goHome: any
}

export interface FormState {
    name: string,
    amount: string
}

class Form extends React.Component<FormProps, FormState> {

    constructor(props: FormProps) {
        super(props);
        this.state = {
            name: "",
            amount: ""
        }
    }

    handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            let { token } = await this.props.stripe.createToken({ name: this.state.name });
            let amount = this.state.amount;
            await fetch('/api/donate', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ token, amount })
            });
            alert('Thanks for donating!');
            this.props.goHome();
        } catch (error) {
            throw error;
        }
    }

    render() {
        return (
            <>
                <h2 className="row justify-content-center mt-3 text-secondary">Donate to This Blog</h2>
                <h6 className="row justify-content-center mt-5">You know you wanna give me all the monies!</h6>

                <main className="container justify-content-center mt-3">
                    <section className="col-8 offset-2 border rounded shadow">
                        <form
                            className="form-group mt-3"
                            onSubmit={this.handleSubmit}>
                            <label>Name</label>
                            <input
                                type="text"
                                className="input-group my-1 p-1 border rounded"
                                value={this.state.name}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ name: e.target.value })}
                            />
                            <label className="mt-4">Amount</label>
                            <input
                                type="text"
                                className="input-group my-1 p-1 border rounded"
                                value={this.state.amount}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ amount: e.target.value })}
                            />
                            <label className="mt-4">Debit/Credit Card</label>
                            <CardElement className="p-2 border" />
                            <button className="btn btn-primary mt-3 border shadow">Charge My Card</button>
                        </form>
                    </section>
                </main>
            </>
        );
    }
}

export default injectStripe(Form);

