import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total' 

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => {
    return (
        <div>
            <h2>Viewing {expenseCount} {expenseCount==1 ? 'expense' : 'expenses' } totalling ₹{expensesTotal}</h2>
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