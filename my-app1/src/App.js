import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import ReactDOM from 'react-dom';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import logo from './1.png';
import logo1 from './5.PNG';
import './index.css';
import genre from './genre';
import book from './book';
import main from './main';

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>А почитать?</h1>
                    <ul className="header">
                        <li><NavLink to="/index">Главная</NavLink></li>
                        <li><NavLink to="/genre">Жанры</NavLink></li>
                        <li><NavLink to="/book">Книги</NavLink></li>

                    </ul>
                   <div className="content">
                   <Route path="/index" component={main} />
                   <Route path="/genre" component={genre} />
                   <Route path="/book" component={book} />
                </div>
                </div>
            </HashRouter>
          
        );
    }
}

export default Main;