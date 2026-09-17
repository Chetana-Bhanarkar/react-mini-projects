import { useEffect } from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
    const {id} = useParams();

    useEffect(() => {
        console.log(id);
    },[id]);


    const user = {
        name: "John Doe",
        email: "john.doe@example.com",
        role: "Admin",
        status: "Active",
        phone: "+91 98765 43210",
        joinedDate: "15 September 2026",
    };

    return (
        <div className="min-h-[calc(100vh-72px)] bg-slate-100 p-8">

            {/* Page Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-800">
                    User Details
                </h1>

                <p className="mt-2 text-slate-500">
                    View user information.
                </p>
            </div>

            {/* User Card */}
            <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl bg-white shadow-lg">

                {/* Profile Header */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-8 text-white">
                    <div className="flex items-center gap-5">

                        {/* Avatar */}
                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-2xl font-bold text-blue-600 shadow-md">
                            JD
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold">
                                {user.name}
                            </h2>

                            <p className="mt-1 text-blue-100">
                                {user.email}
                            </p>
                        </div>
                    </div>
                </div>

                {/* User Information */}
                <div className="p-8">

                    <h3 className="mb-6 text-lg font-semibold text-slate-800">
                        Personal Information
                    </h3>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                        {/* Email */}
                        <div>
                            <p className="text-sm text-slate-400">
                                Email
                            </p>
                            <p className="mt-1 font-medium text-slate-700">
                                {user.email}
                            </p>
                        </div>

                        {/* Phone */}
                        <div>
                            <p className="text-sm text-slate-400">
                                Phone
                            </p>
                            <p className="mt-1 font-medium text-slate-700">
                                {user.phone}
                            </p>
                        </div>

                        {/* Role */}
                        <div>
                            <p className="text-sm text-slate-400">
                                Role
                            </p>

                            <span className="mt-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                                {user.role}
                            </span>
                        </div>

                        {/* Status */}
                        <div>
                            <p className="text-sm text-slate-400">
                                Status
                            </p>

                            <span className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                                ● {user.status}
                            </span>
                        </div>

                        {/* Joined Date */}
                        <div>
                            <p className="text-sm text-slate-400">
                                Joined Date
                            </p>

                            <p className="mt-1 font-medium text-slate-700">
                                {user.joinedDate}
                            </p>
                        </div>

                    </div>

                    {/* Actions */}
                    <div className="mt-8 flex gap-3 border-t border-slate-200 pt-6">

                        <button
                            className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 active:scale-95"
                        >
                            Edit User
                        </button>

                        <button
                            className="rounded-lg bg-red-50 px-5 py-2.5 text-sm font-medium text-red-600 transition hover:bg-red-100 active:scale-95"
                        >
                            Delete User
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
