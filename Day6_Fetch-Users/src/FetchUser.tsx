import axios from "axios";
import { useEffect, useState } from "react";

interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    website: string
}

const FetchUser = () => {
    const [userData, setUserData] = useState<User[]>([]);
    const [filteredData, setFilteredData] = useState<User[]>([]);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [searchItem, setSearchItem] = useState<string>('');


    useEffect(() => {
        getAllUsers();
    }, [])

    const getAllUsers = async () => {
        try {
            
            const result = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUserData(result.data);
            setFilteredData(result.data);

        } catch (error) {
            setError('Data not found, something went happens.');
        } finally {
            setLoading(false);
        }
    };

    const searchUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchItem(value);

        const filteredData = userData.filter((prev) =>
            prev.name.toLowerCase().includes(value.toLowerCase()) ||
            prev.username.toLowerCase().includes(value.toLowerCase()) ||
            prev.email.toLowerCase().includes(value.toLowerCase())
        )

        setFilteredData(filteredData);

        console.log(filteredData);
    }

    return (
        <>
            <div className="flex justify-center align-center mt-5">
                <input
                    placeholder="Search User"
                    type="text"
                    className="bg-blue-100 focus:ring-2 focus:ring-blue-500 outline-none min-w-md p-2 rounded-lg "
                    value={searchItem}
                    onChange={(e) => searchUser(e)}
                />
            </div>
            <div className="flex justify-center align-center mt-5">
                {

                    !loading ? (
                        filteredData.length > 0 ? (
                            <table>
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Website</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        filteredData.map((user, index) => (
                                            <tr key={user.id}>
                                                <td>{index + 1}</td>
                                                <td>{user.name}</td>
                                                <td>{user.username}</td>
                                                <td>{user.email}</td>
                                                <td>{user.website}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        ) : (
                            <p>No Data Found</p>
                        )
                    ) : (
                        <p>Loading...</p>
                    )
                }
            </div >
        </>
    )
};


export default FetchUser;