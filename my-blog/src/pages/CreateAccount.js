import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const CreateAccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const createAccout = async () => {
    try {
      if (password !== confirmPassword){
        setError('Password and confirm passowrd do not match');
        return;
      }

      await createUserWithEmailAndPassword(getAuth(), email, password)
      navigate('/articles');

    } catch (error) {
      setError(error.message);
    }
  }
  
  return (
    <>
    {error && <p className='error'>{error}</p>}
      <h1> Create Account</h1>
      <input 
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={e => setEmail(e.target.value)}/>
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={e => setPassword(e.target.value)}/>
      <input 
        type="password"
        placeholder="Re-enter your passwor"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}/>
      <button onClick={createAccout}>Create Account</button>
      <Link to="/login">
        <p className='create-account-text'>Already have an account? Log in here.</p>
      </Link>
    </>
  )
}

export default CreateAccount;