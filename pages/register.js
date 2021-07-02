import Container from '../components/container.js';
import axios from 'axios'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postTodo } from '../store/actions/postActions.js';

const Login = () => {
    const dispatch = useDispatch();

    const [state, setState] = useState({
        email: '',
        name: '',
        surname: '',
        password: '',
        nickname: ''
    })

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/api/users',  state)
    }

    return (
        <Container>

            <h1>Register</h1>
            <hr/>

            <div>
            </div>

            <div>
                <form
                    className="form"
                    onSubmit={(e) => {handleSubmit(e)}}
                >
                    <label>Email</label>
                    <input 
                        type='email'
                        name='email'
                        onChange={(e) => {handleChange(e)}}
                        value={state.email}
                    />
                    <hr/>
                    <label>Name</label>
                    <input 
                        type='text'
                        name='name'
                        onChange={(e) => {handleChange(e)}}
                        value={state.name}  
                    />
                    <label>Surname</label>
                    <input 
                        type='text'
                        name='surname'
                        onChange={(e) => {handleChange(e)}}
                        value={state.surname}  
                    />
                    <hr/>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        onChange={(e) => {handleChange(e)}}
                        value={state.password}
                    />
                    <hr/>
                    <label>Nickname</label>
                    <input
                        type="text"
                        name="nickname"
                        onChange={(e) => {handleChange(e)}}
                        value={state.nickname}
                    />
                    <hr/>
                    <button type='submit'>submit</button>
                </form>
                <hr/>
            </div>

        </Container>
    )
}

export default Login;