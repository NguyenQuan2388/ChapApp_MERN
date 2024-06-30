import GenderCheckbox from "./GenderCheckbox";
import { Link, useState } from "react-router-dom";

const SignUp = () => {

    const [inputs, setInputs] = useState({
        fullName: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender:''
    });
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
        <div className="w-full p-6 rounded-lg shadow-md bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <h1 className="text-3xl font-semibold text-center text-gray-300">Sign Up
                <span className="text-blue-500"> ChatApp</span>
            </h1>
            
            <form>
                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Full name</span>
                    </label>
                    <input type="text" placeholder="Your Fullname" className="w-full input input-bordered h-10" 
                    value = {inputs.fullName} onChange={(e) => setInputs({...inputs, fullName: e.target.value})}/>
                </div>

                <div>
                    <label className="label p-2">
                        <span className="text-base label-text">Username</span>
                    </label>
                    <input type="text" placeholder="Your Username" className="w-full input input-bordered h-10"
                    value={inputs.username} onChange={(e) => setInputs({...inputs, username: e.target.value})} />
                </div>

                <div>
                    <label className="label">
                        <span className="text-base label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10"
                    value={inputs.password} onChange={(e) => setInputs({...inputs, password: e.target.value})} />
                </div>

                <div>
                    <label className="label">
                        <span className="text-base label-text">Confirm Password</span>
                    </label>
                    <input type="password" placeholder="Confirm Password" className="w-full input input-bordered h-10" />
                </div>

                <GenderCheckbox/>

                <div>
                    <button className="btn btn-block btn-sm btn-info mt-2">Sign Up</button>
                </div>
                <Link to={"/login"} className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block">Already have an account?</Link>
                
            </form>
        </div>
    </div>
  )
}

export default SignUp;

