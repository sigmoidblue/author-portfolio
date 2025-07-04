import React from 'react'

const Contact = () => {
  return (
    // <div className="min-h-screen text-grey flex flex-col justify-center items-center p-8">
    //   <div className="max-w-5xl w-full flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">

    <div className="min-h-screen text-grey flex flex-col items-center p-8">

      {/* Main Content */}
      <main className="flex flex-col items-center w-full max-w-xl">
        <h2 className="text-4xl font-semibold mt-10 mb-6 py-8">Contact</h2>
        <p className="text-center mb-4">
          I am available for general questions/comments/concerns as well as potential
          employment opportunities in writing, editing, or teaching/tutoring.
        </p>
        <p className="text-center mb-4">
          You can also tweet me <a href="#" className="underline"> @twthandle</a>.
        </p>
        {/* <p className="text-center mb-6">
          For other matters, please be in touch with my agent, Kent Wolf:
          <a href="mailto:kent@neonliterary.com" className="underline"> kent@neonliterary.com</a>.
        </p> */}

        {/* Form */}
        <form className="w-full space-y-4">
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full px-4 py-2 bg-[#FECACA] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 bg-[#FECACA] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>
          <textarea
            name="message"
            rows="5"
            placeholder="Message"
            className="w-full px-4 py-2 bg-[#FECACA] border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#005B41] hover:bg-gray-600 text-grey font-bold py-2 rounded-md transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </main>
    </div>
  )
}

export default Contact