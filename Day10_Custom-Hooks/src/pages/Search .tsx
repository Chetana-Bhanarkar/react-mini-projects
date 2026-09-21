import useSearch from "../hooks/useSearch";

const usersItems = [
    {
        id: 1,
        name: "Aarav Sharma",
        username: "aarav",
        email: "aarav.sharma@gmail.com",
        role: "Admin",
        city: "Pune"
    },
    {
        id: 2,
        name: "Priya Patil",
        username: "priya.p",
        email: "priya.patil@gmail.com",
        role: "User",
        city: "Mumbai"
    },
    {
        id: 3,
        name: "Rahul Deshmukh",
        username: "rahul.d",
        email: "rahul.deshmukh@gmail.com",
        role: "Manager",
        city: "Nagpur"
    },
    {
        id: 4,
        name: "Sneha Joshi",
        username: "sneha.j",
        email: "sneha.joshi@gmail.com",
        role: "User",
        city: "Nashik"
    },
    {
        id: 5,
        name: "Vikram Kulkarni",
        username: "vikram.k",
        email: "vikram.kulkarni@gmail.com",
        role: "Admin",
        city: "Pune"
    },
    {
        id: 6,
        name: "Neha Shah",
        username: "neha.shah",
        email: "neha.shah@gmail.com",
        role: "User",
        city: "Ahmedabad"
    },
    {
        id: 7,
        name: "Rohan Mehta",
        username: "rohan.m",
        email: "rohan.mehta@gmail.com",
        role: "Manager",
        city: "Bangalore"
    },
    {
        id: 8,
        name: "Anjali Verma",
        username: "anjali.v",
        email: "anjali.verma@gmail.com",
        role: "User",
        city: "Delhi"
    },
    {
        id: 9,
        name: "Karan Singh",
        username: "karan.s",
        email: "karan.singh@gmail.com",
        role: "Admin",
        city: "Jaipur"
    },
    {
        id: 10,
        name: "Pooja More",
        username: "pooja.more",
        email: "pooja.more@gmail.com",
        role: "User",
        city: "Aurangabad"
    }
];

const Search = () => {
    const users = usersItems;
    const search = useSearch(users, ["username", "email"])

    return (
        <>
            <input type="text" value={search.items} onChange={(e) => search.setItems(e.target.value)} />

            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            search.filteredItems().map((user, index) => (
                                <tr key={user.id}>
                                    <td>{index + 1}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
};


export default Search;
