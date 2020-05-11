import { setStartDate, setEndDate, sortByAmount, sortByDate, setTextFilter } from '../../actions/filters';
import moment from 'moment';

test('should set start date', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should set end date', () => {
    const action = setEndDate(moment(1500))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(1500)
    })
})

test('should sort by date', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('should sort by amount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('should set text filter with value', () => {
    const action = setTextFilter('bill');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'bill'
    })
})

test('should set text filter with default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})