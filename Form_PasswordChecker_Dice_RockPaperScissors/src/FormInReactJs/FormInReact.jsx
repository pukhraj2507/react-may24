
import React, { useState } from 'react';


function FormInReact() {
  const [data , setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    contact: '',
    gender: '',
    subject: '',
    file: null,
    url: '',
    choice: '',
    about: '',
  })

  const handleChange = (event) => {
    const {name, value, type} = event.target
    const newValue = type === 'file' ? event.target.files[0] : value;
    setData({
      ...data,
      [name]: newValue
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data: ", data);
  }

  const handleReset = () => {
    setData({
      firstName: '',
      lastName: '',
      email: '',
      contact: '',
      gender: '',
      subject: '',
      file: null,
      url: '',
      choice: '',
      about: '',
    });
  }

  return (
    <form onSubmit={handleSubmit} onReset={handleReset} className="max-w-sm mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Form in React</h1>
      <div className="mb-4">
        <label htmlFor="firstName" className="block mb-1">
          <b>First Name*</b>
        </label>
        <input 
          type="text"
          id="firstName"
          name="firstName"
          value={data.firstName}
          onChange={handleChange}
          required
          className="border border-gray-400 p-2 w-full rounded"
          placeholder='Enter First Name'
        />
      </div>
      <div className="mb-4">
        <label htmlFor="lastName" className="block mb-1">
          <b>Last Name*</b>
        </label>
        <input 
          type="text"
          id="lastName"
          name="lastName"
          value={data.lastName}
          onChange={handleChange}
          required
          className="border border-gray-400 p-2 w-full rounded"
          placeholder='Enter Last Name'
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-1">
          <b>Email*</b>
        </label>
        <input 
          type="email"
          id="email"
          name="email"
          value={data.email}
          onChange={handleChange}
          required
          className="border border-gray-400 p-2 w-full rounded"
          placeholder='Enter Email'
        />
      </div>
      <div className="mb-4">
        <label htmlFor="contact" className="block mb-1">
          <b>Contact*</b>
        </label>
        <input 
          type="tel"
          id="contact"
          name="contact"
          value={data.contact}
          onChange={handleChange}
          required
          className="border border-gray-400 p-2 w-full rounded"
          placeholder='Enter Mobile Number'
        />
      </div>
      <div className="mb-4">
        <label htmlFor="gender" className="block mb-1">
          <b>Gender*</b>
        </label>
        <div className="flex items-center mb-2">
          <input 
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={data.gender === 'male'}
            onChange={handleChange}
            className="mr-1"
          />
          <label htmlFor="male" className="mr-4">Male</label>
          <input 
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={data.gender === 'female'}
            onChange={handleChange}
            className="mr-1"
          />
          <label htmlFor="female" className="mr-4">Female</label>
          <input 
            type="radio"
            id="other"
            name="gender"
            value="other"
            checked={data.gender === 'other'}
            onChange={handleChange}
            className="mr-1"
          />
          <label htmlFor="other">Other</label>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="subject" className="block mb-1">
          <b>Best Subject*</b>
        </label>
        <select 
          name="subject"
          id="subject"
          value={data.subject}
          onChange={handleChange}
          required
          className="border border-gray-400 p-2 w-full rounded"
        >
          <option value="" disabled>Select your choice</option>
          <option value="english">English</option>
          <option value="maths">Maths</option>
          <option value="physics">Physics</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="file" className="block mb-1">
          <b>Upload Resume</b>
        </label>
        <input 
          type="file" 
          id="file"
          name="file"
          accept=".pdf, .docs, .doc"
          onChange={handleChange}
          className="border border-gray-400 p-2 w-full rounded"
          placeholder='Browse...'
        />
      </div>
      <div className="mb-4">
        <label htmlFor="url" className="block mb-1">
          <b>Enter URL*</b>
        </label>
        <input 
          type="url"
          id="url"
          name="url"
          value={data.url}
          onChange={handleChange}
          required
          className="border border-gray-400 p-2 w-full rounded"
          placeholder='Enter url'
        />
      </div>
      <div className="mb-4">
        <label htmlFor="choice" className="block mb-1">
          <b>Select your choice</b>
        </label>
        <select 
          name="choice"
          id="choice"
          value={data.choice}
          onChange={handleChange}
          className="border border-gray-400 p-2 w-full rounded"
        >
          <option value="" disabled>Select your Ans</option>
          <option value="lorem2">Lorem, ipsum.</option>
          <option value="lorem3">Lorem, ipsum dolor.</option>
          <option value="lorem4">Lorem ipsum dolor sit.</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="about" className="block mb-1">
          <b>About</b>
        </label>
        <textarea 
          name="about"
          id="about"
          value={data.about}
          onChange={handleChange}
          className="border border-gray-400 p-2 w-full rounded"
          placeholder='About your self'
        ></textarea>
      </div>
      <div className="flex justify-between">
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Submit</button>
        <button type="reset" className="bg-gray-400 text-white px-4 py-2 rounded">Reset</button>
      </div>
    </form>
  )
}

export default FormInReact;
``






