import React, {useState} from 'react';

const Login =  ({onLogin }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSumit = (e) => {
        e.preventDefault();
        //aqui posso chmar uma API para validar o login
        onLogin({username, email, password});
    };
    return (
        <div className="login-container">
            <h2>Login</h2>
            <form onSumit={handleSumit}>
                <input
                    type ="email"
                    value ={"email"}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                    />
                    <input
                    type ="password"
                    value ={"password"}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                    />
                    <button type="submit">Log in</button>
            </form>
        </div>
    );
};
export default Login;

import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const input = styled.input`
margin: px 0;
padding: 10px;
width: 100px;
border: 1px solid #ccc;
`;

const Button = styled.button`
margin-top: 10px;
padding: 10pox 20px;
background-color: #007bff;
color:white;
border: none;
cursor:pointer;
`;
