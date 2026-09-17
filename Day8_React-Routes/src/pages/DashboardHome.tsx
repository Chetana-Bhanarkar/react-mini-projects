const DashboardHome = () => {
    const stats = [
        {
            title: "Total Users",
            value: "1,250",
            description: "Registered users",
        },
        {
            title: "Products",
            value: "320",
            description: "Total products",
        },
        {
            title: "Orders",
            value: "845",
            description: "Orders this month",
        },
        {
            title: "Revenue",
            value: "₹1,25,000",
            description: "This month",
        },
    ];

    return (
        <div className="min-h-[calc(100vh-72px)] bg-slate-100 p-8">

            {/* Header */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-slate-800">
                    Dashboard
                </h1>

                <p className="mt-2 text-slate-500">
                    Welcome back! Here's an overview of your application.
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <div
                        key={stat.title}
                        className="rounded-2xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >
                        <p className="text-sm font-medium text-slate-500">
                            {stat.title}
                        </p>

                        <h2 className="mt-3 text-3xl font-bold text-slate-800">
                            {stat.value}
                        </h2>

                        <p className="mt-2 text-sm text-slate-400">
                            {stat.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Welcome Card */}
            <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white shadow-lg">
                <h2 className="text-2xl font-bold">
                    Welcome to your Dashboard 👋
                </h2>

                <p className="mt-2 text-blue-100">
                    Use the navigation above to manage users and products.
                </p>
            </div>
        </div>
    );
};

export default DashboardHome;
