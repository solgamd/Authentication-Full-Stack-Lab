import * as React from 'react';
import '../scss/app.scss';
import { StripeProvider, Elements } from 'react-stripe-elements';
import Form from '../components/Form';
import { RouteComponentProps } from 'react-router';

export interface DonateProps extends RouteComponentProps { }

export interface DonateState { }

class Donate extends React.Component<DonateProps, DonateState> {
    render() {
        return (
            <>
                <StripeProvider apiKey="pk_test_J1mNzjTeCV07GvvqPgi4Hpuv00RPyxbNSq">
                    <Elements>
                        <Form goHome={() => this.props.history.replace('/')} />
                    </Elements>
                </StripeProvider>
            </>
        );
    }

}

export default Donate;