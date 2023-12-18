import DisplayData from './components/DisplayData';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { GeneralInfo } from './components/GeneralInfo';
import { InfoProvider } from './components/InfoContext';
import '../src/styles/App.css';

export default function App() {

  return (
    <InfoProvider>
      <div className="app-container">
        <header className='header'>
          <h1>ResumeRanger</h1>
        </header>
        <main className='main-content'>
          <section className='editor-section'>
            <GeneralInfo />
            <Education />
            <Experience />
          </section>
          <section className='preview-section'>
            <DisplayData />
          </section>
        </main>
      </div>
    </InfoProvider>
  )
}
