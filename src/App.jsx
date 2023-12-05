import DisplayData from './components/DisplayData';
import Education from './components/Education';
import Experience from './components/Experience';
import GeneralInfo from './components/GeneralInfo';
import { InfoProvider } from './components/InfoContext';
import '../src/styles/App.css';

export default function App() {

  return (
    <InfoProvider>
      <div className="App">
        <div className='header'>
          <h1>ResumeRanger</h1>
        </div>
        <div className='main'>
          <div>
            <GeneralInfo />
            <Education />
            <Experience />
          </div>
          <div>
            <DisplayData />
          </div>
        </div>
      </div>
    </InfoProvider>
  )
}
