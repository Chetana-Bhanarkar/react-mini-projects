import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const navItems = [
        { name: "Dashboard", path: "/dashboard" },
        { name: "Users", path: "/dashboard/users" },
        { name: "Products", path: "/dashboard/products" }
    ];


    const logout = () => {
        localStorage.clear();
        navigate('/login')
    }

    return (
        <nav className="flex items-center justify-between bg-slate-900 px-8 py-4 shadow-lg">
            {/* Logo */}
            <div className="text-2xl font-bold text-white">
                My<span className="text-blue-400">App</span>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-2">
                {navItems.map((item) => (
                    <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === "/dashboard"}
                        className={({ isActive }) =>
                            `rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-300 ${isActive
                                ? "bg-blue-600 text-white shadow-md"
                                : "text-slate-500 hover:bg-slate-800 hover:text-white"
                            }`
                        }
                    >
                        {item.name}
                    </NavLink>
                ))}
                <button onClick={logout}
                    className="ml-2 rounded-lg bg-red-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-red-600 hover:shadow-md active:scale-95" > Logout </button>
            </div>
        </nav>
    );
};

export default Navbar;
