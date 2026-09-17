import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const gotoDashboard = () => {
        let randomGenerator = generateToken();
        localStorage.setItem('token', randomGenerator);
        navigate('/dashboard');
    }

    const generateToken = () => {
        return Math.random().toString(36).substring(2, 15);
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token){
            navigate('/dashboard');
        }
    }, [])
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
                <div className="w-full max-w-md rounded-2xl bg-white p-8 text-center shadow-xl">

                    <h1 className="mb-3 text-3xl font-bold text-gray-800">
                        Welcome Back 👋
                    </h1>

                    <p className="mb-8 text-gray-500">
                        Hey, we are in the Login page
                    </p>

                    <button
                        className="w-full rounded-lg bg-blue-600 px-6 py-3 
                       font-semibold text-white shadow-md 
                       transition duration-300 
                       hover:bg-blue-700 hover:shadow-lg 
                       active:scale-95"

                       onClick={gotoDashboard}
                    >
                        Go To Dashboard
                    </button>
                </div>
            </div>
        </>
    )
};


export default Login;