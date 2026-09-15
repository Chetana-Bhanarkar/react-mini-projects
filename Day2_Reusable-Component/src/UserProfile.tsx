type UserDetails = {
    name: string,
    role: string,
    location: string,
    skills: string[]
}

const UserProfile = ({ name, role, location, skills }: UserDetails) => {
    return (
        <>
            <h3 className="text-center text-gray-600 text-2xl italic mb-5">{name}</h3>
            <div>
                <label htmlFor="role" className="text-gray-600 italic">Role : </label>
                <span id="role">{role}</span>
            </div>
            <div>
                <label htmlFor="location" className="text-gray-600 italic">Location : </label>
                <span id="location">{location}</span>
            </div>
            <div>
                <label htmlFor="skills" className="text-gray-600 italic">Skills : </label>
                <span>
                    {
                        skills.length > 0 &&
                        (
                            skills.map((skill, index) => (
                                <span key={index}>
                                    {skill}
                                    {
                                        index < skills.length - 1 && (', ')
                                    }
                                </span>
                            ))
                        )
                    }
                </span>
            </div>
        </>
    )
};

export default UserProfile;