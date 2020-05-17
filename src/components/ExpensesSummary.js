import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total' 

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    return (
        <div className='page-header'>
            <div className='content-container'>
                <h1 className='page-header__title'>Viewing <span>{expenseCount}</span> {expenseCount==1 ? 'expense' : 'expenses' } totalling <span>₹{expensesTotal}</span></h1>
                <div className='page-header__actions'>
                    <Link className='button' to='/create'>Add Expense</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }
};

export default connect(mapStateToProps)(ExpensesSummary);