import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is my dashboard page
    </div>
);
const AddExpensePage = () => (
    <div>
        This is my add expense page
    </div>
);
const EditExpensePage = () => (
    <div>
        This is my edit expense page
    </div>
);
const HelpExpensePage = () => (
    <div>
        This is my help expense page
    </div>
);

const NotFoundPage = () => (
    <div>
        404! Not Found
    </div>
)
const routes = (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit" component={EditExpensePage}/>
            <Route path="/help" component={HelpExpensePage}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </BrowserRouter>
);

const Layout = (props) => {
    return (
        <div>
            <p>header</p>
            {props.children}
            <p>footer</p>
        </div>
    );
}

ReactDOM.render(routes, document.getElementById('app'));
