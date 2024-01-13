import { React, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart,signInSuccess, signInFailure } from '/home/mahnbonnie187/mern-real-estate/client/src/redux/user/userSlice.js';
import OAuth from '../components/OAuth';


export default function SignIn() {

  const [formData, setFormData ] = useState({})
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData
    ({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart())
      const res = await fetch('api/auth/signin',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if(data.success === false) {
      dispatch(signInFailure(data.message));
      return;
    }
      dispatch(signInSuccess(data));
      navigate('/');
      
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };
  return (
    <div className='mt-5 bg-[white] max-w-[570px] mx-auto w-full rounded-lg shadow-md md:p-10'>
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form onSubmit={handleSubmit} action="" className="flex flex-col gap-4">
        <input type="mail" placeholder='Email' className='border-b focus:outline-none p-3 rounded-lg border-b-blue-900 focus:border-b-blue-900' id='email' onChange={handleChange}/>
        <input type="password" placeholder='Password' className='border-b focus:outline-none p-3 rounded-lg border-b-blue-900 focus:border-b-blue-900' id='password' onChange={handleChange}/>
        <button
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:bg-slate-600 disabled:opacity-80"> 
          Sign In
        </button>
        <OAuth />
      </form>
      <div className="flex gap-2 mt-5">
        <p>Don't have an account?</p>
        <Link to={"/sign-up"}>
          <span className="text-blue-700">Sign Up</span>
        </Link>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};
