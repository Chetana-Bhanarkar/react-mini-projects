import Card from "./Card"
import UserProfile from "./UserProfile"

function App() {

  return (
    <>
      <div className="grid grid-cols-12">
        <Card>
          <UserProfile name="Chetana Bhanarkar" role="Frontend Developer" location="Nagpur" skills={['Angular', 'React', 'Typescript', 'Javascript']} />
        </Card>

        <Card>
          <UserProfile name="Akash Khot" role="Backend Developer" location="Nagpur" skills={['Node JS', 'Express Js', 'Nest Js', 'Javascript']} />
        </Card>

        <Card>
          <UserProfile name="Allena D'Souza" role="Fullstack Developer" location="Bangalore" skills={['Angular', 'React', 'Typescript', 'Node JS', 'Express Js', 'Nest Js', 'Javascript']} />
        </Card>
      </div>
    </>
  )
}

export default App
