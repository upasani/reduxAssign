import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loginLoading, loginSuccess, loginFailure } from '../Redux/Login/action';
import { useNavigate } from 'react-router-dom';
export const Login = () => {
    const [userName, setUsername] = useState("");
    const [password, setPass] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // console.log(userName, password);
    const handleSubmit = () => {
        const userDetails = {
            userName,
            password
        }
        // alert("In the handle submit")
        dispatch(loginLoading()) //This is set the login loading as a true
        fetch('http://localhost:8080/login', {
            method: "POST",
            body: JSON.stringify(userDetails),
            headers: {
                "Content-type": 'application/json'
            }
        }).then((res) =>res.json())
            .then((res) => {
                console.log(res);
                dispatch(loginSuccess(res.token))
                // alert(res);
                // console.log(res);
                navigate('/');
            })
            .catch((err) => {
                console.log("vaibhav")
                alert(err);
                dispatch(loginFailure())
            })
    }

    return (
        <div>
            <input type="text" placeholder='Enter the username' value={userName}
                onChange={(e) => setUsername(e.target.value)} />
            <br /><br />
            <input type="password" placeholder='Enter the password' value={password}
                onChange={(e) => setPass(e.target.value)} />
            <br /> <br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}