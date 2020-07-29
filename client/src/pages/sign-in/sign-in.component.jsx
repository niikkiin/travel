import React, {useState} from 'react'

// styled components
import { SignInPageContainer } from 'pages/sign-in/sign-in.styles';

// components
import { FormInput } from 'components/form-input/form-input.component';
import { CustomButton } from 'components/custom-button/custom-button.component';
import { Link } from 'react-router-dom';

export const SignInPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = async (e) => {
		e.preventDefault();

	};

  return (
    <SignInPageContainer>
      <h1 className='title'>Sign In</h1>
      <form className='form' onSubmit={(e) => handleSubmit(e)} noValidate>
        <FormInput
          type='email'
          label='Email Address'
          name='email'
          handleChange={(e) => handleChange(e)}
          value={email}
          required
        />
        <FormInput
          type='password'
          label='Password'
          name='password'
          handleChange={(e) => handleChange(e)}
          value={password}
          required
        />
        <CustomButton type='submit' disabled={!email || !password}>
          Log In
        </CustomButton>
      </form>
      <div className="link-to-register">Don't have an account yet? <Link to='/register' className="register">Register now</Link></div>
    </SignInPageContainer>
  )
}
