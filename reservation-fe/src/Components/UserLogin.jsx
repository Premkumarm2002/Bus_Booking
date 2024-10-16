import { useState } from "react"
import axios from 'axios'
import { useNavigate, Link } from "react-router-dom"


const UserLogin = () => {
    let [email, setemail] = useState("")
    let [password, setpassword] = useState("")

    let nav = useNavigate()

    function verify(e) {
        e.preventDefault()
        axios.post(`http://localhost:8080/api/admins/verify-by-email?email=${email}&password=${password}`)
            .then((res) => {
                console.log("Login Succesfully");
                nav('/UserHomepage')
                alert('Login successfully')

            })
            .catch((res) => {
                console.log(res);
            })
    }
    return (
        <div className="UserLogin">
            <form onSubmit={verify} action="">
                Email:<input type="text" placeholder="enter a email" required onChange={(e) => { setemail(e.target.value) }} />
                password: <input type="text" placeholder="enter a password" required onChange={(e) => { setpassword(e.target.value) }} />
                <button className='btn btn-danger' >login</button>
            </form>

            <p>Are you new user ? <Link to="/usersignup">Register here</Link> </p>
        </div>
    )
}

export default UserLogin;