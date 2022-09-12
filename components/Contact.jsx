import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="w-full h-screen text-black">
      <div className="w-full max-w-[1240px] h-full mx-auto flex justify-center items-center">
        <div className="w-full h-auto p-4">
          <div className="py-8">
            <p className="tracking-widest">Let's meet</p>
            <h1 className="font-bold text-4xl text-red-600">Contact Me</h1>
          </div>

          <div className="w-full max-w-[600px] h-full mx-auto p-8 bg-white rounded-lg text-red-600">
            <form>
              <div className="flex flex-col">
                <label className="">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="bg-transparent border-b-2 border-red-600 p-2 placeholder-red-400"
                />
              </div>

              <div className="flex flex-col">
                <label className="">Phone Number</label>
                <input
                  type="text"
                  placeholder="Your Phone Number"
                  className="bg-transparent border-b-2 border-red-600 p-2 placeholder-red-400"
                />
              </div>

              <div className="flex flex-col">
                <label className="">Email</label>
                <input
                  type="text"
                  placeholder="Your Email"
                  className="bg-transparent border-b-2 border-red-600 p-2 placeholder-red-400"
                />
              </div>

              <div className="flex flex-col">
                <label className="">Message</label>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Write your message here"
                  className="bg-transparent border-b-2 border-red-600 p-2 placeholder-red-400"
                ></textarea>
              </div>

              <button className="w-full flex justify-center bg-red-600 text-white py-4 mt-4 rounded-lg hover:bg-red-800">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
