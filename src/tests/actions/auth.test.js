import { login, logout } from '../../actions/auth';

test('should execute login', () => {
    const uid = '#123'
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })
})

test('should execute logout', () => {
    const action = logout();
    expect(action.type).toBe('LOGOUT')
})
