import Education from './components/Education';
import Experience from './components/Experience';
import GeneralInfo from './components/GeneralInfo';

export default function App() {

  return (
    <div className="App">
      <h1>ResumeRanger</h1>
      <GeneralInfo />
      <Education />
      <Experience />
    </div>
  )
}
