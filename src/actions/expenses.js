import uuid from 'uuid'
import database from '../firebase/firebase';
import expenses from '../reducers/expenses';

//add expense
export const addExpense = (expense) => ({
    type: "ADD_EXPENSE",
    expense
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {
            description = '', note = '', amount = 0, createdAt = 0
        } = expenseData
        const expense = { description, note, amount, createdAt }
        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }))
        })
    }   
}

//remove expense
export const removeExpense = (id) => ({
    type: "REMOVE_EXPENSE",
    id
})

export const startRemoveExpense = (id) => {
    return (dispatch, toState) => {
        const uid = toState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense(id))
        })
    }
}

//edit expenses
export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
})

export const startEditExpense = (id, updates) => {
    return (dispatch, toState) => {
        const uid = toState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates))
        })
    }
}

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
})

export const startSetExpenses = () => {
    return (dispatch, toState) => {
        const uid = toState().auth.uid;
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
        const expenses = []
        snapshot.forEach((expenseSnapshot) => {
          expenses.push({
            id: expenseSnapshot.key,
            ...expenseSnapshot.val()
          })
        })
        dispatch(setExpenses(expenses));
        })
    }   
}

