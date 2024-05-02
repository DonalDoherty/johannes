import { React, Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

const Login = (setAuth) => {
    const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const { email, password} = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { email, password };

            const response = await fetch(API_URL+"/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            const parseRes = await response.json();
            localStorage.setItem("token", parseRes);

            setAuth.setAuth(true);
        } catch (error) {
            console.error(error.message);
        }
    }


    return (
        <Fragment>
            <h3>Login</h3>
            <form onSubmit={submitForm}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" value={email} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" value={password} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Login</button>
                </div>
            </form>
            <div className="form-group">
                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </Fragment>
    )
}

export default Login