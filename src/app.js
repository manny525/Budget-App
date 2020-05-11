import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore'
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', note: 'peene ka ki nahane ka?', amount: 100, createdAt: 1500 }));
store.dispatch(addExpense({ description: 'Gas Bill', note: 'jamaila kutriya', amount: 200, createdAt: -1500 }));
store.dispatch(addExpense({ description: 'Rent', note: 'bhada de rey raju?', amount: 109500, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Electricity Bill', note: 'bijli ka taar', amount: 1000, createdAt: 1200 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);    

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
