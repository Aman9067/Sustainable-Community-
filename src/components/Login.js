import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div className="flex   items-center justify-center min-h-screen  bg-gradient-to-l from-red-300 via-blue-300 to-yellow-200 shadow-2xl shadow-black-black">
        
      <div className="md:w-[500px] bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Login</h2>
        <form action="#" method="POST" className="space-y-6">

          <div>
            <label type="email"className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"id="email"name="email"
              className="w-full mt-1 px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"placeholder="Enter your email"required/>
          </div>



          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600">Password
            </label>
             
             <input type="password" id="password" name="password" className="w-full mt-1 px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none" placeholder="Enter your password"required/>
         
          </div>


          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input type="checkbox" id="remember" name="remember" className="h-4 w-4 text-blue-600 border-gray-300 rounded"/>

              <label For="remember" className="ml-2 text-sm text-gray-600"> Remember me
              </label>


            </div>
            < Link to="#"  className="text-sm text-blue-600 hover:underline">
              Forgot password?
            </Link>
          </div>
          
           <Link to="/home">
             <button type="submit" className="w-full py-2 delay-700 px-4 md:mt-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:bg-green-500 focus:ring-blue-400">
            Login
          </button>
          </Link>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4"> Don't have an account?{' '}
          <Link to="#" className="text-blue-600 hover:underline">
            Sign up
          </Link>
          </p>

        
      </div>
    </div>
  );
};

export default Login;
