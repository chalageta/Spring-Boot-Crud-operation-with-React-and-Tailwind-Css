import { AiOutlineSend } from 'react-icons/ai'; // Import the send icon

const ContactUs = () => {
  return (
  <div className="font-[sans-serif]">
      <div className="bg-gradient-to-r from-blue-700 to-blue-300 w-full h-60">
        <img 
        src="https://z-p3-scontent.fadd2-1.fna.fbcdn.net/v/t39.30808-6/247336997_620527085985606_6550078635234019167_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=dF5Agp0WvmkQ7kNvgGXrGV-&_nc_ht=z-p3-scontent.fadd2-1.fna&_nc_gid=AqD4kMgqhqRuh2oZ4Luzvgz&oh=00_AYDMtGkgYFUdrPA4VvOjroy3m45rJD9kJq45ygcLoDPqJg&oe=671C3335" alt="Banner Image" className="w-full h-full object-cover" />
      </div>

      <div className="-mt-28 mb-6 px-4">
        <div className="mx-auto max-w-6xl shadow-lg p-8 relative bg-white rounded-md">
          <h2 className="text-xl text-gray-800 font-bold">Contact Us </h2>

          <form className="mt-8 grid sm:grid-cols-2 gap-6">
            <div>
              <label className="text-gray-800 text-sm block mb-2">Your Name</label>
              <input type='text' placeholder='Enter Name'
                className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]" />
            </div>
            <div>
              <label className="text-gray-800 text-sm block mb-2">Your Email</label>
              <input type='email' placeholder='Email'
                className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]" />
            </div>
            <div>
              <label className="text-gray-800 text-sm block mb-2">Your Number</label>
              <input type='email' placeholder='Phone No.'
                className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]" />
            </div>
            <div>
              <label className="text-gray-800 text-sm block mb-2">Website</label>
              <input type='text' placeholder='Website'
                className="w-full rounded-md py-2.5 px-4 border border-gray-300 text-sm outline-[#007bff]" />
            </div>
            
            <div className="col-span-full">
              <label className="text-gray-800 text-sm block mb-2">Message</label>
              <textarea placeholder='Message' rows="6"
                className="w-full rounded-md px-4 border border-gray-300 text-sm pt-3 outline-[#007bff]"></textarea>
            </div>
            <div className="col-span-full">
                                <h6 className="text-sm text-gray-800">Select Subject</h6>
                                <div className="flex max-lg:flex-col gap-6 mt-4">
                                    <div className="flex items-center">
                                        <input id="radio1" type="radio" name="value1" className="hidden peer" checked />
                                        <label htmlFor="radio1"
                                            className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden">
                                            <span className="border-[4px] border-[#011c2b] rounded-full w-full h-full"></span>
                                        </label>
                                        <p className="text-sm text-gray-500 ml-4">General Inquiry</p>
                                    </div>

                                    <div className="flex items-center">
                                        <input id="radio2" type="radio" name="value1" className="hidden peer" />
                                        <label htmlFor="radio2"
                                            className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden">
                                            <span className="border-[4px] border-[#011c2b] rounded-full w-full h-full"></span>
                                        </label>
                                        <p className="text-sm text-gray-500 ml-4">Technical Support</p>
                                    </div>

                                    <div className="flex items-center">
                                        <input id="radio3" type="radio" name="value1" className="hidden peer" />
                                        <label htmlFor="radio3"
                                            className="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden">
                                            <span className="border-[4px] border-[#011c2b] rounded-full w-full h-full"></span>
                                        </label>
                                        <p className="text-sm text-gray-500 ml-4">Website Feedback</p>
                                    </div>
                                </div>
                            </div>
            <div className="flex items-center col-span-full">
              <input id="checkbox1" type="checkbox"
                className="w-4 h-4 mr-3 shrink-0" />
              <label htmlFor="checkbox1" className="text-sm text-gray-500">I agree to the <a href="javascript:void(0);" className="underline">Terms and Conditions</a> and <a href="javascript:void(0);" className="underline">Privacy Policy</a></label>
            
            </div>

                        
            <button type='button'
              className="text-white w-max bg-[#007bff] hover:bg-blue-600 tracking-wide rounded-md text-sm px-6 py-3 mt-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' className="mr-2 inline" viewBox="0 0 548.244 548.244">
                <path fill-rule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clip-rule="evenodd" data-original="#000000" />
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
