import React,{useState} from 'react'
import { useForm } from 'react-hook-form'
import './App.css';

function App() {
  const [state, setState] = useState({
    email:"",
    password:""  
  })
  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) =>{
    console.log(data)
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-constrol">
          <label>Email:</label>
          <input type="text"
            name="email"
            ref = {register({
              required:"Email is required",
              pattern: {
                value : /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message:"Email must be valid"
              }
            })}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="form-constrol">
          <label>Password:</label>
          <input type="password"
            name="password"
            ref = {register({
              required: "Passsword is required",
              minLength:{
                value: 6,
                message:"Password should be atleast 6 character long"
              }
            })}
          />
          {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div className="form-control">
          <label></label>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default App;
