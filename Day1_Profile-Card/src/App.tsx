import ProfileInfo from "./UserProfile/ProfileInfo"
import Skills from "./UserProfile/Skills"
import Status from "./UserProfile/Status"

function App() {
  return (
    <>
      <div className="flex justify-center min-h-screen items-center">
        <div className="bg-gray-200 p-5 m-5 rounded-2xl">
          <h3 className="text-gray-700 text-4xl font-semibold italic">My Profile</h3>
          <div className="my-3">
            <ProfileInfo name="Chetana Bhanarkar" role="Frontend Developer" experience="3 Years of Experience" />
          </div>

          <div className="my-3">
            <Skills skills={['Angular', 'React', 'TypeScript', 'JavaScript', 'MySql']} />
          </div>

          <div className="my-3">
            <Status status={true}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
