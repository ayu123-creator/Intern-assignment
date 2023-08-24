
import  { useState } from 'react';
import { Button, TextField } from '@mui/material';
import  {useNavigate}  from 'react-router-dom';

function FirstPage() {
  const navigate =useNavigate() ;
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleNext = () => {
    if (name && phoneNumber && email) {
      const userDetails = { name, phoneNumber, email };
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
      navigate('/second');
    } else {
      alert('Please fill all the fields.');
    }
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      <TextField label="Name" value={name}  type='text' onChange={(e) => setName(e.target.value)} style={{marginTop:'1rem'}} />
      <TextField label="Phone Number" type='number' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} style={{marginTop:'1rem'}} />
      <TextField label="Email" type='email' value={email} onChange={(e) => setEmail(e.target.value)} style={{marginTop:'1rem'}}/>
      <Button variant="contained" onClick={handleNext} style={{marginTop:'1rem'}}>Submit</Button>
    </div>
  );
}

export default FirstPage;


