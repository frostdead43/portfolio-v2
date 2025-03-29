import { useState,useEffect } from 'react'
import retroSound from "/assets/sounds/retro.wav";
import './styles/App.css'
import "./styles/reset.css"

function App() {
  const [screen, setScreen] = useState("start");

  return (
    <>
     {screen === "start" && <StartApp setScreen={setScreen}/>}
     {screen === "loading" && <Loading />}
     {screen === "main" && <Main />}
    </>
  )
}



function StartApp({setScreen}) {

  function setLoading() {
    setScreen("loading");
    setTimeout(() => {
      setScreen("main");
    }, 3000);
  }

  return(
  <div className='welcome-page'>
    <h2>Press Start For New Game!</h2>
    <button onClick={setLoading}><img src="/assets/images/start-button.png"/></button>
  </div>
  )
 
}

function Loading() {
  return (
    <div className="loading-screen">
      <h2>Loading...</h2>
      <h6>Please do not turn off your computer while opening this website.</h6>
      <div className='gif-area'>
        <img src="./assets/images/shovel-knight.gif"/>
        <img src="./assets/images/death-knight.gif"/>
        <img src="./assets/images/running-kid.gif"/>
      </div>
    </div>
  )
}


function Main() {
  return (
    <>
    <header>
      <a href="#">Mako</a>
      <div className='header-avatar'>
      <img className='avatar' src="./assets/images/avatar.png"/>
        <div>
          <span>-P1-</span>
          <div className='hearts'>
          <img src="./assets/images/heart-icon.png"/>
          <img src="./assets/images/heart-icon.png"/>
          <img src="./assets/images/heart-icon.png"/>
          </div>
        </div>
      </div>
      <button className='question-mark'>?</button>
    </header>

    <div className='content'>
      <div className='categories'>
      <a href=""><img src="./assets/images/about-icon.png"/></a>
      <a href=""><img style={{padding: "6px"}} src="/assets/images/certificates-icon.png"/></a>
      <a href=""><img style={{padding: "6px"}} src="/assets/images/projects-icon.png"/></a>
      <a href=""><img src="./assets/images/contact-icon.png"/></a>
      </div>
      <div className='welcome-area'>
        <h1>Welcome To My <span>RETRO</span> Portfolio</h1>
      </div>
      <AboutArea/>

      <div className='stats-area'>
        <div>
          <h2>Stats</h2>
          <div className='level-exp'>
            <h5>Level: 27</h5>
            <h5>2736/2750 XP</h5>
          </div>
          <div className="level-bar">
            <div className="w3-green"></div>
          </div>
        </div>
        <div className='languages-area'>
          <img src="/assets/images/html5-logo.jpg" alt='html5-logo'/>
          <img src="/assets/images/javascript-logo.jpg" alt='js-logo'/>
          <img src="/assets/images/react-logo.jpg" alt='react-logo'/>
          <img src="/assets/images/git-logo.jpg" alt='git-logo'/>
          <img src="/assets/images/nextjs-logo.jpg" alt='nextjs-logo'/>
          <img src="/assets/images/python-logo.jpg" alt='python-logo'/>
          <img src="/assets/images/nodejs-logo.jpg" alt='nodejs-logo'/>
          <img style={{backgroundColor: "white"}} src="/assets/images/supabase-logo.png" alt='supabase-logo'/>
        </div>

        <div className='trait-area'>
          <h4>Hobbies</h4>
          <div className='hobbies'>
            <img src="/assets/images/gym.gif" alt="gym gif" />
            <img src="/assets/images/music.gif" alt="music gif" />
            <img src="/assets/images/reading.gif" alt="reading gif" />
            <img src="/assets/images/playing-games.gif" alt="playing games gif" />
          </div>
        </div>
      </div>
    </div>

    <div className='certificate-area'>
      <div className='parchment'>
      <h2>MY CERTIFICATES</h2>
      <h6>Completed Quests</h6>
        <a href="https://www.btkakademi.gov.tr/portal/course/algoritma-programlama-ve-veri-yapilarina-giris-12565"><p>Algorithm Programming and Introduction to Data</p></a>
        <a href="https://www.btkakademi.gov.tr/portal/course/sifirdan-ileri-seviye-python-programlama-5877"><p>Advanced Python Programming From Zero</p></a>
        <p>Software Developer Training Camp - Python & Selenium</p>
        <p>100 Days Of Code - 2023 Web Development Bootcamp</p>
        <p>AcunMedya Basic FrontEnd - Javascript </p>
        <h6>Active Quests</h6>
        <p>AcunMedya FrontEnd Software Expertise Bootcamp with React</p>
      </div>
    </div>

    <Projects/>

    </>
  )
}

function AboutArea() {
  const text = "Hi Everyone. I'm Mehmet Akif and I'm a Frontend Developer. I decided to become a software developer thanks to my passion for computers that started from my childhood. I am studying at AcunMedya Academy right now. I'm currently learning Javascript, ReactJs, and NextJs. My biggest dream is to make my own narrative game.";

  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);


  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);

        const audio = new Audio(retroSound);
        audio.volume = 0.0; 
        audio.play();
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <div className="about-area">
      <div className="about-text">
        <h4>Player 1</h4>
        <p>{displayedText}</p>
        <div className='about-bottom'>
          <div className='about-flex'>
            <h3>50</h3>
            <h5>Ammo</h5>
          </div>
          <div className='about-flex' >
            <h3>100%</h3>
            <h5>Health</h5>
          </div>
          <div className='about-flex'>
            <h3>0%</h3>
            <h5>Armor</h5>
          </div>
          <div>
           <img className='makif' src="./assets/images/akif-avatar.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}



function Projects() {
  const [projects, setProjects] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    async function getData() {
      const data = await fetch("/assets/data/data.json").then(res => res.json());
      setProjects(data);
    }
    getData();
  }, []);

  function openDialog() {
    setShowDialog(true);
    selectMenuSound();
  }

  function closeDialog() {
    setShowDialog(false);
    selectMenuSound(); 
  }

  function moveUp() {
    setSelectedIndex(prev => (prev === 0 ? projects.length - 1 : prev - 1));
    playMenuSound();
  }

  function moveDown() {
    setSelectedIndex(prev => (prev === projects.length - 1 ? 0 : prev + 1));
    playMenuSound(); 
  }

  function playMenuSound() {
    const menuAudio = new Audio("/assets/sounds/choose.mp3");
    menuAudio.play();
  }

  function selectMenuSound() {
    const selectAudio = new Audio("/assets/sounds/select.mp3");
    selectAudio.play();
  }

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "ArrowUp") {
        moveUp(); 
      } else if (e.key === "ArrowDown") {
        moveDown(); 
      } else if (e.key === "Enter" && projects.length > 0) {
        openDialog();
      } else if (e.key === "Escape") {
        closeDialog();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [projects]);

  return (
    <div className="project-area">
      <h3>MY PROJECTS 9999 IN 1</h3>
      <h5>USE <span>ARROWS</span> AND SEL. <span>ENTER</span> BUTTON</h5>
      <div className="projects">
        <ol>
          {projects.map((item, index) => (
            <li key={index}>
              {index === selectedIndex ? "→" : " "}
              <span style={{ marginLeft: "10px" }}>{item.name}</span>
            </li>
          ))}
        </ol>
        {!showDialog && (
          <div className="buttons">
            <img onClick={moveUp} className="btn-up" src="/assets/images/project-arrow-buttonDown.png" alt="" />
            <img onClick={moveDown} className="btn-down" src="/assets/images/project-arrow-buttonUp.png" alt="" />
            <img onClick={closeDialog} className="btnn" src="/assets/images/project-close-button.png" alt="" />
            <img onClick={openDialog} className="btnn" src="/assets/images/project-start-button.png" alt="" />
          </div>
        )}
      </div>
      {showDialog && (
        <div className="dialog-area" onClick={closeDialog}>
          <div className="dialog">
            <img src={projects[selectedIndex].img} />
            <h2>{projects[selectedIndex].name}</h2>
            <p>{projects[selectedIndex].description}</p>
            <div className='links'>
              <a href={projects[selectedIndex].live}>Live</a>
              <a href={projects[selectedIndex].github}>Github</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App
