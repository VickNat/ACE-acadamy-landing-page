import { useFormik } from 'formik';
import React from 'react'

const ContactUs: React.FC = () => {

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      message: ""
    },
    onSubmit: (values) => {
      alert(values.email);
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className='h-screen w-screen bg-gradient-to-r from-primary-200 to-primary-100 flex flex-col items-center gap-y-10 justify-center'>

      <h2 className='font-bold text-3xl text-center text-white capitalize md:text-6xl'>Connect with us</h2>

      <div className='flex flex-col justify-center items-center gap-y-6 w-full'>
        <input
          id="name"
          name="name"
          placeholder='Your name'
          className='bg-transparent border border-white py-3.5 px-3 rounded-xl w-10/12 md:w-6/12 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-primary-100::placeholder text-primary-200::placeholder'
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <input
          id="email"
          name="email"
          type="email"
          placeholder='Your email'
          className='bg-transparent border border-white py-3.5 px-3 rounded-xl w-10/12 md:w-6/12 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-primary-100::placeholder text-primary-200::placeholder'
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </div>

      <textarea
        name="message"
        id="message"
        placeholder='Your message'
        className='bg-transparent border border-white py-3.5 px-3 rounded-xl w-10/12 md:w-6/12 text-white focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-primary-100::placeholder text-primary-200::placeholder'
        onChange={formik.handleChange}
        value={formik.values.message}
        rows={10}
        cols={30}
      ></textarea>

      <button
        type="submit"
        className="text-white border border-white bg-gradient-to-t from-primary-200 to-primary-100 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 md:px-12 md:py-4 md:text-lg py-2.5 text-center me-2 mb-2">
        Send
      </button>
    </form>
  )
}

export default ContactUs