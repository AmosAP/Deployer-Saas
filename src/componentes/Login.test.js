import {render, screen, fireEvent} from '@testing-library/react';
import Login from './Login';

test('renders login form', () => {
    render(<Login onLogin={jest.fn()} />);
    expect(screen.getByplaceholderTxt('Email')).toBeInTheDocument();
    expect(screen.getByplaceholderText('Password')).toBeInTheDocument();
});

test('calls onLogin with correct data on form submit', () => {
    const onLogin = jest.fn();
    render(<Login onLogin ={onLogin} />);

    fireEvent.change(screen.getByplaceholderText('Email'), {target: {value: 'test@example.com'}});
    fireEvent.change(screen.getByplaceholderText('Password'), {target: {value: 'password123'}});
    fireEvent.submit(screen.getByRole('form'));

    expect(onLogin).toHaveBeenCalledWith({
        email: 'test@example.com', password: 'password123'});
});