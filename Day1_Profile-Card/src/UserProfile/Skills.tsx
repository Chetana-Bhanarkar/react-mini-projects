type userSkills = {
    skills: string[]
}

const Skills = ({ skills }: userSkills) => {
    return (
        <>
            <h3 className="text-gray-600">Skills : </h3>
            {
                skills.map((skill: string, index: number) => (
                    <span key={skill}>
                        {skill}
                        {
                            index < skills.length - 1 && <br />
                        }
                    </span>

                ))
            }
        </>
    )
};


export default Skills;