/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm } from 'react-hook-form';
import { PrimaryBtn, OutlinedBtn2 } from 'styling/Button';
import { Tagline, Headline5, Error } from '../styling/Text';

const Community = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  }; // your form submit function which will invoke after successful validation

  console.log(watch('example')); // you can watch individual input by pass the name of the input

  return (
    <section className="sectionCommunity">
      <Tagline>Community</Tagline>
      <Headline5>Sign up & join our community to get started today</Headline5>
      <div className="communityCard" style={{ backgroundImage: 'linear-gradient(6deg, #DCD2F1 7%, rgba(255, 255, 255, 0) 50%), url("../images/longstretch.jpg")' }} />
      <div className="signUpWrapper">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="nameInput">
            <fieldset className="name">
              <legend>First Name</legend>
              <input {...register('firstName', { required: true, pattern: /^[A-Za-z]+$/i })} />
            </fieldset>
            {errors?.firstName?.type === 'required' && <Error>Please enter your name</Error>}
            {errors?.firstName?.type === 'pattern' && (<Error>Alphabetical characters only</Error>)}
            <fieldset className="name">
              <legend>Last Name</legend>
              <input {...register('lastName', { required: true, pattern: /^[A-Za-z]+$/i })} />
            </fieldset>
            {errors?.lastName?.type === 'required' && <Error>Please enter your name</Error>}
            {errors?.lastName?.type === 'pattern' && (<Error>Alphabetical characters only</Error>)}
          </div>
          <fieldset>
            <legend>Email</legend>
            <input type="email" {...register('email', { required: true, pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i })} />
          </fieldset>
          {errors?.email?.type === 'required' && <Error>Please enter your email</Error>}
          {errors?.lastName?.type === 'pattern' && (<Error>Please enter a valid email</Error>)}
          <fieldset>
            <legend>Password</legend>
            <input type="password" {...register('password', { required: true, minLength: { value: 6 } })} />
          </fieldset>
          {errors.password && (<Error>Password must be six or more characters</Error>)}
          <PrimaryBtn className="formBtn" type="submit">Create account</PrimaryBtn>
        </form>
        <p className="accountText">Already have an account? <span className="login">Login</span></p>
        <span className="orText"><p className="line" /><p>Or</p><p className="line" /></span>
        <div className="signInBtnWrapper">
          <OutlinedBtn2 type="button">
            <span className="signInBtn"><img alt="apple icon" src="../images/apple-logo.png" />Sign in with Apple</span>
          </OutlinedBtn2>
          <OutlinedBtn2 type="button">
            <span className="signInBtn"><img alt="google icon" src="../images/google-logo.png" />Sign in with Google</span>
          </OutlinedBtn2>
        </div>
      </div>
    </section>
  )
};

export default Community;