import Container from '../components/container.js';
import axios from 'axios';
import ReCaptchaV2 from 'react-google-recaptcha';
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
        nickname: '',
        token: null
    })

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if(state.token === null) {
            alert('You must validate the captcha')
        }

        axios.post('http://localhost:3000/api/users',  state)
    }

    const handleToken = (input) => {
        setState({
            ...state,
            token: input
        })
    }

    const handleExpire = () => {
        setState({
            ...state,
            token: null
        })
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
                    <ReCaptchaV2 
                        sitekey="6LeTb28bAAAAABnKX98id7Eqd2RGeLBIv6cuRMtm"
                        onChange={handleToken}
                        onExpire={handleExpire}
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