import { useNavigate } from "react-router-dom";

const Users = () => {
    const navigate = useNavigate();

    const gotoUserDetails = () => {
        navigate('/user/1');
    }
    return (
        <div className="min-h-[calc(100vh-72px)] bg-slate-100 p-8">
            <div className="rounded-2xl bg-white p-8 shadow-md">
                <h1 className="text-3xl font-bold text-slate-800">
                    Users
                </h1>

                <p className="mt-2 text-slate-500">
                    manage users here.
                </p>

                <button
                    className="w-auto rounded-lg bg-blue-600 px-2 py-2 mt-4
                       font-semibold text-white shadow-md 
                       transition duration-300 
                       hover:bg-blue-300 hover:shadow-lg 
                       active:scale-95"

                    onClick={gotoUserDetails}
                >
                    Go To User Details
                </button>
            </div>
        </div>
    );
};

export default Users;