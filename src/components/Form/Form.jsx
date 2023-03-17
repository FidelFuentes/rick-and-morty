import { useState } from 'react';
import styles from './Form.module.css'
import validate from './Validation.js'

const Form = ({login}) => {

    const [userData, setUserData] = useState({ username: '', password: '' });
    const [errors, setErrors]= useState({username:'', password:''})

    const handleInputChange = (event) =>{

        const value = event.target.value
        const name = event.target.name

        setUserData({
            ...userData,[name] : value,
        })
        validate({
            ...userData,[name] : value,
        },setErrors,errors)
    }

    const submitHandler = (event)=>{

        event.preventDefault()
        login(userData)

    }

    return(
        <form onSubmit={submitHandler} >
            <div className={styles.form}>
            <div>

            <label htmlFor="username">UserName: </label>

            <input type="text" name="username" value={userData.username} onChange={handleInputChange} />
            
            <p>{errors.username}</p>

            </div>

            <div>

            <label htmlFor="password">Password: </label>

            <input type="text" name="password" value={userData.password} onChange={handleInputChange}/>

            <p>{errors.password}</p>

            </div>

            <button type="submit"> LOGIN</button>
            </div>
        </form>
    )
}

export default Form