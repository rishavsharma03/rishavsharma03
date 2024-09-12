import React from 'react'
import { useForm } from 'react-hook-form'

const App = () => {
const {register,handleSubmit,reset} = useForm();
//console.log(register())
const onSub = (data) => {
  console.log(data); // Handle form data as needed
  reset(); // Reset form fields to their default values
};

  return (
    <div>
    <form action='' onSubmit={handleSubmit(onSub)}>
      <input {...register('name')} type='text' placeholder='Name' />
      <input {...register('email')} type='email' placeholder='Email' />
      <input type='submit' />
      </form>
    </div>
  )
}

export default App
