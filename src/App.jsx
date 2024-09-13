import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const App = () => {
const {register,handleSubmit,reset} = useForm();
const [formData, setFormData] = useState(null)
//console.log(register())
const onSub = (data) => {

  console.log(data); // Handle form data as needed
  reset(); // Reset form fields to their default values
  setFormData(data)
};

  return (
    <div>
    <form action='' onSubmit={handleSubmit(onSub)}>
      <input {...register('name')} type='text' placeholder='Name' />
      <input {...register('email')} type='email' placeholder='Email' />
      <input type='submit' />
     
      </form>
      <div>
      {formData && (
        <div>
          <h2>Submitted Data:</h2>
          <p><strong>Name:</strong> {formData.name}</p>
          <p><strong>Email:</strong> {formData.email}</p>
        </div>
      )}
      </div>
      
    </div>
  )
}

export default App
