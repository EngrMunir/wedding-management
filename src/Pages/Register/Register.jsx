import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Components/Provider/AuthProvider";



const Register = () => {
    const {createUser} = useContext(AuthContext)

    const handleRegister = e =>{
        e.preventDefault();

        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);


        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password);

        createUser(email, password)
        .then(result=>{
            console.log(result.user);
        })
        .catch(error=>{
            console.error(error)
        })
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
            <div className="text-center">
                <h1 className="text-5xl font-bold">Register now!</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" placeholder="Your name" name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                 <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
            </div>
            <div className="form-control mt-5">
                <button className="btn btn-primary">Register</button>
            </div>
      </form>
      <p className="text-center mb-3">Already registered? <Link className="text-blue-600 font-bold" to='/login'>Login</Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;