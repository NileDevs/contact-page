import React from 'react';
import logo from '../../logo.svg';

    const Contact = () => (
    <>
  <div class="flex mb-4 bg-yellow-400 sm:bg-yellow-400 md:bg-yellow-400 lg:bg-yellow-400 xl:yellow-400 h-auto">
  <div class="w-1/2">
    <div class="w-full max-w-xs px-1 pt-10 pb-8 mb-4 pl-5">
        <form class="bg-white shadow-md rounded px-10 pt-12 pb-10 mb-4 h-auto">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Username
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"></input>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"></input>
            <p class="text-red-500 text-xs italic">Please choose a password.</p>
          </div>
            <button class="bg-yellow-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Subscribe
            </button>
          </form>
          <div className="mt-12">
          <h1>Follow us on: </h1>
          <div class="flex mt-2">
                <button class="bg-white hover:bg-black text-yellow-dark font-semibold hover:text-white py-2 px-3 border border-yellow hover:border-transparent rounded-full mr-2">
                  Facebook
                </button>
                <button class="bg-white hover:bg-black text-yellow-dark font-semibold hover:text-white py-2 px-3 border border-yellow hover:border-transparent rounded-full mr-2">
                  Twitter
                </button>
                <button class="bg-white hover:bg-black text-yellow-dark font-semibold hover:text-white py-2 px-3 border border-gray hover:border-transparent rounded-full mr-2">
                  LinkedIn
                </button>
                <button class="bg-white hover:bg-black text-yellow-dark font-semibold hover:text-white py-2 px-3 border border-blue hover:border-transparent rounded-full mr-2">
                  Instagram
                </button>
  
          </div>
          </div>
      </div>

  </div>
  <div class="w-1/2">
    <img src="https://image.freepik.com/free-vector/if-us-who-quote-watercolour-stain_23-2148337899.jpg" />
  </div>
</div>

  <div className="inset-x-0.bottom-0 inset-y-0.left-0">
      <p class="text-center text-gray-1000 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>   
   </>
    );


export default Contact;