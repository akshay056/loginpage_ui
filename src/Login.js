import React,{useState} from "react";
import './App.css';
import { Form,Button } from 'react-bootstrap';
import swal from 'sweetalert';

async function loginUser(credentials) 
{
    return fetch('https://172.29.91.71/api/home/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
}

const Login  = () => {
    const [email,setName]=useState("");
    const [password,setPassword]=useState("");
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(email);
      const response = await loginUser({
        email,
        password
      });
      if ('isSuccess' in response) {
        swal("Success", response.message, "Logged in", {
          buttons: false,
          timer: 2000,
        })
          .then((value) => {
            localStorage.setItem('isSuccess', response['Yes']);
            localStorage.setItem('message', response['User Login Successful']);
            localStorage.setItem('email', JSON.stringify(response['email']));
            window.location.href = "https://javascript.plainenglish.io/basic-react-login-using-external-api-e33322e480cd";
          });
      } else {
        swal("Failed", response.message, "error");
      }
    }

    /*
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(username);
 
    }*/
    return(
        <>
            
        <div className="container mt-3">
            <section className='d-flex justify-content-between'>
                <div className="left_data mt-3 p-3"style={{ width: "80%" }}>
                    <h2>About NFT Reality</h2><br/>
                    <p class='fw-bold'>A perfect way to say "kudos"</p>
                    <p>Reward and incentivize employee with a digital kudos system using blockchain based NFTs . Employees earn unique ,digital tokens for outstanding work,which can be redeemed for rewards or traded in the open market.</p>
                    <p><a href="#">Read More.</a></p>
                </div>

                <div className="right_data mt-3 p-3" style={{ width: "100%" }}>
                    <h2 className='text-left col-lg-8'>Sign In</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3 col-lg-8" controlId="formBasicName">
                            <Form.Label>User Email</Form.Label>
                            <Form.Control required value={email} onChange={(e)=>setName(e.target.value)} type="email" name="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control required value={password} onChange={(e)=>setPassword(e.target.value)} name="password"type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <div className="d-flex justify-content-between mb-3 col-lg-8">
                            <Form.Check type="checkbox" label="Remember me" />
                            <Form.Check><a href="#">Forgot password</a></Form.Check></div>
                        </Form.Group>
                        <Button type="submit" onClick={handleSubmit} variant="outline-dark">
                            Sign in
                        </Button>
                    </Form>
                </div>
            </section>
        </div>
                </>
    )
}
export default Login;