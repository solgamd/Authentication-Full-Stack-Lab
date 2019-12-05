import * as React from 'react';
import '../scss/app.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from '../views/Home';
import Details from '../views/Details';
import NewPost from '../views/NewPost';
import Edit from '../views/Edit';
import Login from '../views/Login';
import Admin from '../views/Admin';
import Donate from '../views/Donate';
import Contact from '../views/Contact';
import Register from '../views/Register';

export interface IAppProps { }

console.log(
    "%cWELCOME TO MY APP %cGreetings! You may notice some pages are blocked by authentication. I'm making updates to allow individual user registration, so stay tuned! If you want to test a form, try Contact or Donate. \n \nTo test Donate page: \n \nFill out your name, dollar amount, and use \'424242...\' repetitively for ALL card information inputs.",
    "background: #0091eb; color: white; font-size: 17px; padding: 2px",
    "color: #0091eb; padding: 1px; font-size: 14px")

class App extends React.Component<IAppProps> {

    render() {
        return (
            <BrowserRouter>
            <Navbar />
                <main className="container">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/:id/details" component={Details} />
                        <Route exact path="/new" component={NewPost} />
                        <Route exact path="/:id/edit" component={Edit} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/admin" component={Admin} />
                        <Route exact path="/donate" component={Donate} />
                        <Route exact path="/contact" component={Contact} />
                        {/* <Route exact path="/register" component={Register} /> */}
                    </Switch>
                </main>
            </BrowserRouter>
        )
    }
}

export default App;