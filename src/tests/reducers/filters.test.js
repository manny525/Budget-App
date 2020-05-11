import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should dispatch sort by amount filter', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount')
})

test('should sort by date filter', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action = {type: 'SORT_BY_DATE'}
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})

test('should set text filter', () => {
    const action = { type: 'SET_TEXT_FILTER', text: 'bill' };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe('bill');
})

test('should set start date filter', () => {
    const action = {type: 'SET_START_DATE', startDate: moment(0).add(2, 'days')};
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(moment(0).add(2, 'days'))
})

test('should set end date filter', () => {
    const action = {type: 'SET_END_DATE', endDate: moment(0).subtract(2, 'days')};
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(moment(0).subtract(2, 'days'))
})





