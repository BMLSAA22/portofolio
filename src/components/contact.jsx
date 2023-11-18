
import './style/connect.css';
import React, { useEffect } from 'react';
import Typed from 'typed.js';
const Contact = () => {
    
  
    return (
      <div className='contact'>
        <div>
            <h1>Lets connect</h1>
            <p Style="width:100%">I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
            <div class="socials flex flex-row gap-2"><a href="github.com"><img alt="Github Icon" loading="lazy" width="48" height="48" decoding="async" data-nimg="1" Style="background-color:white;color:white" src="assets/github.svg"/></a><a href="linkedin.com"><img alt="Linkedin Icon" loading="lazy" width="48" height="48" decoding="async" data-nimg="1" Style="background-color:white;color:white" src="assets/linkedin.svg"/></a></div>
        </div>
        <div>
            
            <h1 class="text-white block mb-2 text-sm font-medium">your email</h1>
            <input type="email" placeholder="example@xyz.com"name="email" id="" class="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"/>
            <h1>your subject</h1>

            <input placeholder='write something' name="" id="" class="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"/>
            
            <h1>Message</h1>
            <textarea name="message" id="message" class="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Let's talk about..."></textarea>
            
            <button type="submit" class="hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">Send Message</button>

        </div>
    </div>
  );
}

export default Contact;
