type Info = {
    name: string,
    role: string,
    experience: string
}

const ProfileInfo = (
    { name, role, experience }: Info
) => {
    return (
        <>
            <div>
                <h4>
                    <p> <span className="text-gray-600">Name : </span>{name}</p>
                </h4>
                <h4>
                    <p> <span className="text-gray-600">Role : </span>{role}</p>
                </h4>
                <h4>
                    <p> <span className="text-gray-600">Experience : </span>{experience}</p>
                </h4>
            </div>
        </>
    )
};


export default ProfileInfo;