import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {type: 'REMOVE_EXPENSE', id: expenses[1].id};
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[2]]);
})

test('should not remove expense if id no found', () => {
    const action = {type: 'REMOVE_EXPENSE', id: 'abcd'};
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
})

test('should add an expense', () => {
    const expense = {
        id: '4',
        description: 'malamal weekly',
        note: '',
        amount: '1400000.10',
        createdAt: moment(0).add(1, 'days').valueOf()
    };
    const action = {type: 'ADD_EXPENSE', expense};
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense])
})

test('should edit expense by id', () => {
    const action = {type: 'EDIT_EXPENSE', id: expenses[1].id, updates: {amount: 250}}
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(250)
})

test('should not edit expense if id not found', () => {
    const action = {type: 'EDIT_EXPENSE', id: '-1', updates: {amount: 250}}
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})

test('should set expenses', () => {
    const action = { type: 'SET_EXPENSES', expenses: [expenses[1]] }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
})
