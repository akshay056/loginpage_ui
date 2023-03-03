import React,{useState}  from 'react';
import './App.css';
import { Form,Button } from 'react-bootstrap';

const Login  = () => {
    const [username,setName]=useState();
    const [password,setPassword]=useState();
    
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(username);
 
    }
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

                <div className="right_data mt-3 p-5" style={{ width: "100%" }}>
                    <h3 className='text-left col-lg-8'>Sign In</h3>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3 col-lg-8" controlId="formBasicName">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control value={username} onChange={(e)=>setName(e.target.value)} type="name" id="name" name="name" placeholder="Enter User name" />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-8" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)} id="password" name="password"type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <div class="d-flex justify-content-between mb-3 col-lg-8">
                            <Form.Check type="checkbox" label="Remember me" />
                            <Form.Check><a href="#">Forgot password</a></Form.Check></div>
                        </Form.Group>
                        <Button variant="outline-dark">
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