import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should remove expense', () => {
    const action = removeExpense('123abc')
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('should edit expense', () => {
    const action = editExpense('1234dance', { note: 'uthale rey baba' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '1234dance',
        updates: {
            note: 'uthale rey baba'
        }
    })
})

test('should  add expense with provided values', () => {
    const expenseData = {
        description: 'Stipend',
        amount: 50000,
        createdAt: 150000,
        note: 'paisa aa gaya bois'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('should add expense with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})


