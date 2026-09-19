import { useEffect, useState } from "react";
import userService from "../service/user.service";
import type { UserType } from "../interface/user.type";
import { useNavigate } from "react-router-dom";

const Users = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState<UserType[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<UserType[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<unknown>();
    const [search, setSearch] = useState<string>('');

    useEffect(() => {
        getUserLsit();
    }, []);


    const getUserLsit = async () => {
        try {
            setLoading(true);
            const result = await userService.getUserList();
            if (result.data.length > 0) {
                setUsers(result.data)
                setFilteredUsers(result.data);
            } else {
                setUsers([]);
                setFilteredUsers([]);
            }
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };


    const deleteUser = async (id: number) => {
        try {
            setLoading(true)
            const result = await userService.deleteUser(id);
            console.log(result);

            setUsers((prev) => prev.filter((user) => user.id !== id));

            setFilteredUsers((prev) => prev.filter((user) => user.id !== id));

        } catch (error) {
            setError(error)
        } finally {
            setLoading(false);
        }
    }


    const navigateToAdd = () => {
        navigate('/add-user');
    }


    const SearchUsers = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(value);
        const filterVal = users.filter((user) =>
            user.username.toLowerCase().includes(value.toLowerCase()) ||
            user.name.toLowerCase().includes(value.toLowerCase()) ||
            user.email.toLowerCase().includes(value.toLowerCase()))

        setFilteredUsers(filterVal);
    }




    return (
        <>
            <div className="flex justify-center">
                <button className="bg-blue-400 p-1 rounded-lg mt-5" onClick={navigateToAdd}>Add User</button>
            </div>
            <div className="flex justify-center align-center mt-5">
                <div>
                    <input type="text" className="bg-gray-200 w-sm outline-none focus:ring-2 focus:ring-blue-300 p-2 rounded-lg" value={search}
                        placeholder="search users by name, email, username"
                        onChange={(e) => SearchUsers(e)}
                    />
                    <div>
                        {
                            loading ? (
                                <span>Loading...</span>
                            ) :
                                (
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Username</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                filteredUsers.map((user, index) => (
                                                    <tr key={user.id}>
                                                        <td>{index + 1}</td>
                                                        <td>{user.username}</td>
                                                        <td>{user.name}</td>
                                                        <td>{user.email}</td>
                                                        <td>
                                                            <button type="button" className="bg-gray-300 p-2 m-1 rounded-lg" onClick={(e) => deleteUser(user.id)}>Delete</button>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table >
                                )}
                    </div >
                </div >
            </div >
        </>
    )
};


export default Users;