import { useState } from 'react';
export const Login = () => {
    const [userName, setUsername] = useState("");
    const [password, setPass] = useState('');
    console.log(userName, password);

    return (
        <div>
            <form action="">
                <input type="text" placeholder='Enter the username' value={userName}
                    onChange={(e) => setUsername(e.target.value)} />
                <br /><br />
                <input type="password" placeholder='Enter the password' value={password}
                    onChange={(e) => setPass(e.target.value)} />
            </form>
        </div>
    )
}