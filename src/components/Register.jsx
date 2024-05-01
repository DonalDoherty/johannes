import { React, Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

const Register = (setAuth) => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        registrationKey: ""
    });

    const { firstName, lastName, email, password, confirmPassword, registrationKey } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            if (password !== confirmPassword) {
                console.error("Passwords do not match");
                return;
            }
            const body = { firstName, lastName, email, password, registrationKey };

            const response = await fetch("http://localhost:3001/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });

            const parseRes = await response.json();
            
            localStorage.setItem("token", parseRes);

            setAuth(true);
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <Fragment>
            <h3>Register</h3>
            <form onSubmit={submitForm}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" className="form-control" id="firstName" name="firstName" placeholder="Enter your first name" value={firstName} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" className="form-control" id="lastName" name="lastName" placeholder="Enter your last name" value={lastName} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" className="form-control" id="email" name="email" placeholder="Enter your email" value={email} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Enter your password" value={password} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" value={confirmPassword} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="registrationKey">Registration Key:</label>
                    <input type="text" className="form-control" id="registrationKey" name="registrationKey" placeholder="Enter your registration key" value={registrationKey} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Register</button>
                </div>
            </form>
            <div className="form-group">
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </div>
        </Fragment>
    )
}

export default Register