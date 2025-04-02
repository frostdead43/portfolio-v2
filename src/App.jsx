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
          <img src="/assets/images/csharp-logo.jpg" alt='c#-logo'/>
        </div>

        <div className='trait-area'>
          <h4>Traits</h4>
          <h6>Open for collaboration</h6>
          <h6>Very Creative</h6>
          <h6>Code organizator</h6>
          <h6>Hardworking</h6>
          <h6>GIT GUD!</h6>
          <h4>Hobbies</h4>
          <div className='hobbies'>
            <img src="/assets/images/gym.gif" alt="gym gif" />
            <img src="/assets/images/football.gif" alt="football gif" />
            <img src="/assets/images/music.gif" alt="music gif" />
            <img src="/assets/images/reading.gif" alt="reading gif" />
            <img src="/assets/images/playing-games.gif" alt="playing games gif" />
            <img src="/assets/images/coding.gif" alt="coding gif" />
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
    <Castle/>
    <Footer/>
    

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
        audio.volume = 0.1; 
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
    playMenuSound.volume = 0.3;
    playMenuSound(); 
  }

  function playMenuSound() {
    const menuAudio = new Audio("/assets/sounds/choose.mp3");
    menuAudio.volume = 0.3;
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
    showDialog ? (
      <div className="dialog-area" onClick={closeDialog}>
        <div className="dialog">
        <img onClick={closeDialog} style={{marginBottom:"10px"}} src="./assets/images/cancel-button.png"/>
          <img src={projects[selectedIndex].img} alt={projects[selectedIndex].name} />
          <h2>{projects[selectedIndex].name}</h2>
          <p>{projects[selectedIndex].description}</p>
          <div className='links'>
            <a href={projects[selectedIndex].live} target="_blank" rel="noopener noreferrer">Live</a>
            <a href={projects[selectedIndex].github} target="_blank" rel="noopener noreferrer">Github</a>
          </div>
        </div>
      </div>
    ) : (
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
              <div>
              <img onClick={moveUp} className="btn-up" src="/assets/images/project-arrow-buttonUp.png" alt="Up" />
              <img onClick={moveDown} className="btn-down" src="/assets/images/project-arrow-buttonDown.png" alt="Down" />
              </div>
              <div>
              <img onClick={openDialog} className="btnn" src="/assets/images/project-start-button.png" alt="Start" />
              </div>
            </div>
          )}
        </div>
      </div>
    )
  );
}  


function Castle() {
  return(
    <>
     <img className='castle-bg' src="/assets/images/castle-background.png"/>
    </>
  )
}



function Footer() {
  return(
    <footer>
      <div className='upper-footer'>
        <h2>INSERT <br /> COIN</h2>
        <a className='back-to-top' href="#">BACK TO TOP</a>
      </div>

      <div className='middle-footer'>
        <div className='phone'>
          <img src="/assets/images/whatsapp-logo.png" alt="whatsapp footer logo" />
          <span>(+90)507 460 4494</span>
        </div>
        <div className='email'>
          <img src="/assets/images/email-logo.png" alt="email footer logo" />
          <span>makifkucukyilmaz@hotmail.com</span>
        </div>
        <div className='resume'>
          <img src="/assets/images/resume-logo.png" alt="resume footer logo" />
          <a href="assets/resume mehmet-akif.pdf" download="resume mehmet akif.pdf">Download Resume</a>
        </div>
      </div>
      <div className='social-media'>
        <a href="https://www.instagram.com/makifkyilmaz/"><img src="./assets/images/instagram-logo.png" alt="instagram logo" /></a>
        <a href="https://github.com/frostdead43"><img style={{background:"gray", border:"none"}} src="./assets/images/github-logo.png" alt="github logo" /></a>
        <a href="www.linkedin.com/in/mehmet-akif-küçükyılmaz43"><img src="./assets/images/linkedin-logo.png" alt="linkedin logo" /></a>
        <a href="https://x.com/frostdead43"><img src="./assets/images/twitter-logo.png" alt="twitter logo" /></a>
        <a href="https://codepen.io/frostdead43"><img src="./assets/images/codepen-logo.png" alt="codepen logo" /></a>
      </div>

      <div className='bottom-footer'>
        <span class="copyright-holder"> <span class="copyright">&#169;</span> Mehmet Akif Küçükyılmaz 2025</span>
      </div>
    </footer>
  )
}

export default App
