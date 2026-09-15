import { useState } from "react";

interface UserForm {
    name: string,
    email: string,
    password: string,
    gender: string,
    country: string,
    skills: string[]
};


interface FormErrors {
    name?: string;
    email?: string;
    password?: string;
    gender?: string;
    country?: string;
    skills?: string;
}

const RegistrationForm = () => {
    const [user, setUser] = useState<UserForm>({
        name: '',
        email: '',
        password: '',
        gender: '',
        country: '',
        skills: []
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [show, setShow] = useState<'password' | 'text'>('password')


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser((prev) => ({
            ...prev,
            [name]: value
        }))
    };

    const handleCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setUser((prev) => ({
            ...prev,
            country: value
        }))
    };

    const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;

        setUser((prev) => ({
            ...prev,
            skills: checked ?
                [...prev.skills, value] :
                prev.skills.filter((skill: string) => skill != value)

        }))
    };


    const showHidePassword = () => {
        setShow(prev => prev === 'password' ? 'text' : 'password');
    }

    const Validations = () => {
        let errors: FormErrors = {};
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!user.name.trim()) {
            errors.name = "Name is required.";
        } else if (user.name.trim().length < 3) {
            errors.name = "Requires Name length should be greater that 3 words.";
        };

        if (!user.email.trim()) {
            errors.email = "Email is required";
        } else if (!emailRegex.test(user.email)) {
            errors.email = 'Requires valid email format';
        }

        if (!user.password.trim()) {
            errors.password = 'Password is required';
        } else if (!passwordRegex.test(user.password)) {
            errors.password = "Requires at least 8 characters, 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character";
        }

        if (!user.gender.trim()) {
            errors.gender = 'Please Select your gender';
        }

        if (!user.country.trim()) {
            errors.country = 'Please select your country';
        }

        if (user.skills.length <= 0) {
            errors.skills = "Please select your skills";
        }


        return errors;
    }

    const submitRegistration = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        let validation = Validations();
        if (Object.keys(validation).length > 0) {
            setErrors(validation);
            return;
        };

        console.log(user);
    };


    return (
        <>
            <div className='min-h-screen bg-gray-100 flex items-center justify-center p-5'>
                <form className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg" onSubmit={submitRegistration}>
                    <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Registration Form</h2>



                    {/* Name */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            placeholder="Enter your name"
                            name="name"
                            type="text"
                            value={user.name}
                            onChange={e => handleChange(e)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            id="name"
                        />
                        {errors.name && (
                            <span className="text-red-500 text-sm">
                                {errors.name}
                            </span>
                        )}

                    </div>



                    {/* Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            placeholder="Enter your email"
                            name="email"
                            type="text"
                            value={user.email}
                            id="email"
                            onChange={e => handleChange(e)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                        {
                            errors.email && (
                                <span className="text-red-500 text-sm">
                                    {errors.email}
                                </span>
                            )
                        }
                    </div>




                    {/* Password */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <div className="flex">
                            <input
                                placeholder="Enter your password"
                                name="password"
                                type={show}
                                id="password"
                                value={user.password}
                                onChange={e => handleChange(e)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            />
                            <button type="button" className="bg-gray-200 px-3 rounded mx-1 ouline-none" onClick={showHidePassword}>
                                {show === 'password' ? 'Show' : 'Hide'}
                            </button>
                        </div>                {
                            errors.password && (
                                <span className="text-red-500 text-sm">
                                    {errors.password}
                                </span>
                            )
                        }
                    </div>



                    {/* Gender */}
                    <div className="mb-4">
                        <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                        <div className="mb-4">
                            <div className="flex gap-5">
                                <label className="flex items-center gap-2">
                                    <input type="radio" value='male' name="gender" checked={user.gender === 'male'} onChange={e => handleChange(e)} />
                                    Male
                                </label>

                                <label className="flex items-center gap-2">
                                    <input type="radio" value='female' name="gender" checked={user.gender === 'female'} onChange={e => handleChange(e)} />
                                    Female
                                </label>

                                <label className="flex items-center gap-2">
                                    <input type="radio" value='other' name="gender" checked={user.gender === 'other'} onChange={e => handleChange(e)} />
                                    Other
                                </label>
                            </div>
                        </div>
                        {
                            errors.gender && (
                                <span className="text-red-500 text-sm">
                                    {errors.gender}
                                </span>
                            )
                        }
                    </div>




                    {/* Country */}
                    <div className="mb-4">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                        <select
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg
                       outline-none focus:ring-2 focus:ring-blue-500" value={user.country} onChange={handleCountry}
                        >
                            <option value="" hidden>Select Country</option>
                            <option value="india">India</option>
                            <option value="usa">USA</option>
                            <option value="uk">UK</option>
                        </select>
                        {
                            errors.country && (
                                <span className="text-red-500 text-sm">
                                    {errors.country}
                                </span>
                            )
                        }
                    </div>



                    {/* skills */}
                    <div className="mb-4">
                        <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">Skills</label>
                        <div className="flex items-center gap-5">
                            <label className="flex items-center gap-2">
                                <input type="checkbox" value={'Angular'} name="skills" onChange={e => handleSkillsChange(e)} />
                                Angular
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" value={'React'} name="skills" onChange={e => handleSkillsChange(e)} />
                                React
                            </label>
                            <label className="flex items-center gap-2">
                                <input type="checkbox" value={'Node JS'} name="skills" onChange={e => handleSkillsChange(e)} />
                                Node JS
                            </label>
                        </div>
                        {
                            errors.skills && (
                                <span className="text-red-500 text-sm">
                                    {errors.skills}
                                </span>
                            )
                        }
                    </div>



                    {/* submit button */}
                    <div className="flex justify-center">
                        <button className="p-2 rounded-lg bg-blue-400 text-light-200">Register</button>
                    </div>
                </form>
            </div>
        </>
    )
};


export default RegistrationForm; 