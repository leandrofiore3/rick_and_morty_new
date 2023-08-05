import { useState } from "react";
import validation from "../Validation/Validation";
import styles from "./Form.module.css";

export default function Form ({ login }){

    const [errors, setErrors] = useState({});
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
    }

    return(
        <form>
            <label htmlFor="email" style={{ color: "white"}}>EMAIL</label>
            <br />
            <input type="email" name='email' value={userData.email} onChange={handleChange}/>
            {errors.email && <p style={{ color: "red"}}>{errors.email}</p>}
            <hr />
            <label htmlFor="password" style={{ color: "white"}}>PASSWORD</label>
            <br />
            <input type="text" name="password" value={userData.password} onChange={handleChange}/>
            {errors.password && <p style={{ color: "red"}}>{errors.password}</p>}
            <hr />
            <button type="submit" onClick={handleSubmit}>SUBMIT</button>
        </form>
    )
}