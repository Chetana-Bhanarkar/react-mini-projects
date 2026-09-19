import { useState } from "react";
import type { UserType } from "../interface/user.type";
import userService from "../service/user.service";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<UserType>({
        id: 0,
        name: '',
        username: '',
        email: ''
    })

    const [error, setError] = useState<any>({});

    const addUser = async (e: any) => {
        e.preventDefault();
        try {
            const validate = validation();
            if (Object.keys(validate).length) {
                console.log(validate)
                setError(validate);
                return;
            }


            const { name, username, email } = user
            const payload = {
                name, username, email
            }

            const result = await userService.addUser(payload);

            if(result){
                alert('User added successfully');
                navigate('/');
            }
        } catch (error) {

        }
    }

    const validation = () => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        const errors: any = {};

        if (!user.name.trim()) {
            errors.name = "Name is required";
        }

        if (!user.username.trim()) {
            errors.username = "Username is required";
        }

        if (!user.email.trim()) {
            errors.email = "Email is required";
        } else if (!emailRegex.test(user.email)) {
            errors.email = "Enter valid email format";
        };

        return errors;
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value
        }))
    }




    return (
        <>
            <div className="flex min-h-screen flex-col items-center justify-center bg-slate-100">
                <h1 className="mb-6 text-3xl font-bold text-slate-800">
                    Add User
                </h1>
                <form className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg" onSubmit={(e) => addUser(e)}>
                    <div>
                        <label
                            className="font-medium block mb-2"
                            htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter your name"
                            className="w-full rounded-lg border p-3 outline-none focus:ring-2 focus:ring-blue-500"
                            value={user.name}
                            onChange={(e) => handleChange(e)}
                        />
                        {
                            error.name && <p className="text-red-500 mb-3">{error.name}</p>
                        }
                    </div>
                    <div>
                        <label
                            className="font-medium mb-2 block"
                            htmlFor="username">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Enter your username"
                            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                            value={user.username}
                            onChange={(e) => handleChange(e)}
                        />
                        {
                            error.username && <p className="text-red-500 mb-3">{error.username}</p>
                        }
                    </div>
                    <div>
                        <label
                            className="font-medium mb-2 block"
                            htmlFor="email">
                            Email
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            placeholder="Enter your email"
                            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
                            value={user.email}
                            onChange={(e) => handleChange(e)}
                        />
                        {
                            error.email && <p className="text-red-500 mb-3">{error.email}</p>
                        }
                    </div>
                    <div className="text-center my-2">
                        <button className="bg-blue-300 font-medium p-3 rounded-lg">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
};


export default AddUser 