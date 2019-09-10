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
// import Background from './Background';


export interface IAppProps { }

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
                    </Switch>
                </main>
            </BrowserRouter>
        )
    }
}

export default App;