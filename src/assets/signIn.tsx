import React from 'react';


const App: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white p-8 shadow-lg rounded-lg w-96">
            <h2 className="text-2xl font-bold text-center mb-4">Sign In</h2>
            <form  className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded"
                required
              />
              <input
                type="password"
                placeholder="Password"
                className="border p-2 rounded"
                required
              />
              <button type="submit" className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700">
                Login
              </button>
            </form>

          </div>
        </div>
      );

};

export default App;