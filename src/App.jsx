import { FaTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { useRef } from "react";
import './App.css'
import { useDispatch } from "react-redux";

function App() {
  
  document.body.style.backgroundColor = "#0D0714"

  const name = useRef(null);
  const email = useRef(null);
  const age = useRef(null);

  const dispatch = useDispatch();

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validate = (name, email, age) => {
    if (name.trim().length > 3) {
      alert("name is empty")
      return false
    }

    if (email.trim().length < 3) {
      alert("Email is empty");
      return false;
    }

    const emailValid = validateEmail(email);
    if (!emailValid) {
      alert("Email is empty");
      return false;
    }

    if (age < 0 || age > 160) {
      alert("age is empty")
      return false
    }

    if (!Number(age)) {
      alert("age is empty")
      return false
    }

    return true
  }

  function handleClick(e) {
    e.preventDefault();

    const isValid = validate(name, email, age);

    if (isValid) {
      const user = {
        name: name.current.value,
        age: age.current.value,
        id: Date.now(),
      }

      dispatch({type: "USER_ADD", payload: user});
    }

  }

  return (
    <>
      <div className='container mx-auto w-1/2'>
          <div className="bg-gray-500 pt-1 px-4 mt-10 rounded-2xl" style={{backgroundColor: ' #1D1825'}}>
            <div className="flex justify-center mt-10 mb-10">
              <form onSubmit={handleClick} className='flex flex-col gap-4 w-1/2'>
                <h1 className="text-center text-white font-bold text-4xl">User info</h1>
                <input ref={name} className='text-white bg-transparent outline-none border-2 rounded-md px-3 py-1' type="text" name="" id="" placeholder='Enter name' />
                <input ref={email} className='text-white bg-transparent outline-none border-2 rounded-md px-3 py-1' type="email" name="" id="" placeholder="Enter email" />
                <input ref={age} className='text-white bg-transparent outline-none border-2 rounded-md px-3 py-1' type="number" name="" id="" placeholder='Enter age' />
                <button className='bg-green-600 rounded-md py-2 font-bold text-white transition duration-300 hover:bg-green-800'>SAVE</button>
              </form>
            </div>

            <div className='flex flex-col gap-4 pb-10'>
              <table className='w-full border text-left'>
                <thead>
                  <tr>
                    <th className='border text-center text-white'>N_</th>
                    <th className='border text-center text-white'>Name</th>
                    <th className="border text-center text-white">Email</th>
                    <th className='border text-center text-white'>Age</th>
                    <th className='border text-center text-white'>Actions</th>
                  </tr>
                </thead>
                
                <tbody>
                  <tr>
                    <td className='border text-center text-white'>1</td>
                    <td className='border text-center text-white'>John</td>
                    <td className="border text-center text-white">test@gmail.com</td>
                    <td className='border text-center text-white'>20</td>
                    <td className="border text-center text-white">
                        <div className='flex gap-3'>
                          <FaTrashAlt className="cursor-pointer" />
                          <FaRegEdit className="cursor-pointer" />
                        </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
      </div>
    </>
  )
}

export default App
