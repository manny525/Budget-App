import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            amount: props.expense ? (props.expense.amount).toString() : '',
            note: props.expense ? props.expense.note : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: '',
            buttonText: props.expense ? 'Save Expense' : 'Add Expense' 
        }    
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }))
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}$/)) {
            this.setState(() => ({ amount }))
        }
    }
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({createdAt: createdAt}))
        }
    }
    onFocusChange = ({ focused }) => {
        this.setState (() => ({ calenderFocused: focused }))
    }
    onSubmit = ((e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({error: '**Please provide description and amount'}))
        } else {
            this.setState(() => ({error: ''}))
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    })
    render() {
        return (
            <form className='form' onSubmit={this.onSubmit}>
                {this.state.error && <p className='form__error'>{this.state.error}</p>}
                <input
                    className='text-input'
                    type='text'
                    placeholder='Description'
                    autoFocus
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />
                <input 
                    className='text-input'
                    type='text'
                    placeholder='Amount'
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />
                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={(day) => false}
                    displayFormat={'DD/MM/YYYY'}
                />
                <textarea
                    className='textarea'
                    placeholder='Add a note for your expense(optional)'
                    value={this.state.note}
                    onChange={this.onNoteChange}
                />
                <div>
                    <button className='button'>{this.state.buttonText}</button>
                </div>
            </form>
        )
    }
} 