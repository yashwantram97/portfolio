import Carousel from "react-multi-carousel";
import ProgressBar from 'react-bootstrap/ProgressBar';
import "react-multi-carousel/lib/styles.css";
import './style.css'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import dsa from '../images/dsa.jpg';
import aws from '../images/aws.png';
import proctor from '../images/proctor.jpg';
import scrapper from '../images/scrapper.jpg';
import ai from '../images/ai.jpg';
import sd from '../images/systemdesign.png'


export default function ProjectsAndSkills(props){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    const openInNewTab = (url) => {
      const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
      if (newWindow) newWindow.opener = null
    }

    const Card = (props) => {
        let button = <></>
        if (props.isCertificate){
          button =  <>
                      <Button variant="primary" onClick={() => openInNewTab(props.certificateLink)}>Download</Button>
                    </>
        }else if(props.isProject){
          button = <>
                    <Button variant="primary mx-2" onClick={() => openInNewTab(props.githubLink)}>Github</Button>
                    <Button variant="primary" onClick={() => openInNewTab(props.demoLink)}>Demo</Button>
                  </>          
        }else if(props.inProgress){
          button =  <>
                      <Button variant="primary" disabled>In progress</Button>
                    </>
        }

        return (
            <>
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top skill-img" src={props.thumbnail} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title card-text">{props.title}</h5>
                    <p className="card-text">{props.content}</p>
                    {
                      button
                    }
                </div>
            </div>
            </>
        )
    }

      return (
          <div className="container my-5 text-center" id="skill-tag">
            <div className="heading my-5">
                <h1 className="project-cert-heading underline-dark">
                    Projects and Certifications
                </h1>
            </div>
            <Carousel 
                responsive={responsive}
                itemClass="carousel-item-padding-40-px"
                autoPlay={props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={10000}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                transitionDuration={500}
                className="carousel my-5"
            >
                <div className="carousel-card">
                  <Card 
                  isCertificate={true}
                  title="Algoexpert - DSA"
                  content="Solved more than 125+ DSA problems across various topics and certifies by algoexpert team in 
                  data structures and algorithm."
                  certificateLink='https://certificate.algoexpert.io/AE-8a7a13333b'
                  thumbnail={dsa}
                  />
                </div>
                <div className="carousel-card">
                  <Card isProject={true}
                  title="Exam Proctor"
                  content="Created an fully automated Exam Proctor backed by AI system. You will be able to create content and take
                  exams. In case of any mal practice AI system will identify and terminate the exam."
                  githubLink='https://github.com/yashwantram97/Slat-Edu'
                  demoLink='https://youtu.be/mS7rEv2oSk8'
                  thumbnail={proctor}
                  />
                </div>
                <div className="carousel-card">
                  <Card isProject={true}
                  title="Youtube Scapper"
                  content="Created a youtube scrapper when the scrapper will collected you recently uploaded video and data's like the
                  impressions it created and comments and will show it in you dashboard."
                  githubLink='https://github.com/yashwantram97/youtube-scrapper'
                  demoLink='https://youtu.be/JGmLGclV0MY'
                  thumbnail={scrapper}
                  />
                </div>
                <div className="carousel-card">
                  <Card inProgress={true}
                  title="System Design"
                  content="Since system design has become the integrale part of software development, I have started to learn in depth about
                  system design and design patterns in software development."
                  thumbnail={sd}
                  />
                </div>
                <div className="carousel-card">
                  <Card
                  inProgress={true}
                  title="AWS Developer Certification"
                  content="Even though I have used various cloud services in AWS like EC2, S3 and many more I felt like I could leant more by 
                  preparing and craction the associate AWS developer certificate. So I am working on it now."
                  thumbnail={aws}
                  />
                </div>
                <div className="carousel-card">
                  <Card
                  inProgress={true}
                  title="Data Science Bootcamp"
                  content="I truely believe we have just touched the surface of AI and there is lot more to come in future. So I am spending a 
                  good quality time in learning new concepts in AI and developing projects on it and keeping up with trend."
                  thumbnail={ai}
                  />
                </div>
            </Carousel>

            <div className="my-5">
              <div className="heading my-5">
                  <h1 className="skill-head underline-dark">
                    Skills
                  </h1>
              </div>
              <div className="container text-left my-5 skill">

                  <div className="skill-level my-4">
                    <div className="skill-level-text d-flex justify-content-start">

                      <span className="show-skills-sm">
                      <DropdownButton id="dropdown-basic-button" bsPrefix="skill-dropdown-heading" title="Backend">
                        <Dropdown.Item >Flask</Dropdown.Item>
                        <Dropdown.Item >Fast Api</Dropdown.Item>
                        <Dropdown.Item >Spring boot</Dropdown.Item>
                        <Dropdown.Item >Node js</Dropdown.Item>
                      </DropdownButton>
                      </span>


                      <h4 className="show-skills-lg mx-3">
                        Backend
                      </h4>
                      <span className="show-skills-lg">
                        <Button className="mx-2" href="#" variant="secondary" size="sm" disabled>
                          flask
                        </Button>
                        <Button className="mx-2" href="#" variant="secondary" size="sm" disabled>
                          Fast Api
                        </Button>
                        <Button className="mx-2" href="#" variant="secondary" size="sm" disabled>
                          Spring Boot
                        </Button>
                        <Button className="mx-2" href="#" variant="secondary" size="sm" disabled>
                          Node js
                        </Button>
                      </span>
                    </div>
                    <ProgressBar animated now={80} />
                  </div>

                  <div className="skill-level my-4">
                  <div className="skill-level-text d-flex justify-content-start">
                      <span className="show-skills-sm">
                      <DropdownButton id="dropdown-basic-button" bsPrefix="skill-dropdown-heading" title="Frontend">
                        <Dropdown.Item >HTML</Dropdown.Item>
                        <Dropdown.Item >CSS</Dropdown.Item>
                        <Dropdown.Item >React JS</Dropdown.Item>
                      </DropdownButton>
                      </span>


                      <h4 className="show-skills-lg mx-3">
                        Frontend
                      </h4>
                      <span className="show-skills-lg">
                        <Button className="mx-2" href="#" variant="secondary" size="sm" disabled>
                          HTML
                        </Button>
                        <Button className="mx-2" href="#" variant="secondary" size="sm" disabled>
                          CSS
                        </Button>
                        <Button className="mx-2" href="#" variant="secondary" size="sm" disabled>
                          React JS
                        </Button>
                      </span>
                    </div>
                    <ProgressBar animated now={60} />
                  </div>

                  <div className="skill-level my-4">
                  <div className="skill-level-text d-flex justify-content-start">
                      <span className="show-skills-sm">
                      <DropdownButton id="dropdown-basic-button" bsPrefix="skill-dropdown-heading" title="Database">
                        <Dropdown.Item >Mysql</Dropdown.Item>
                        <Dropdown.Item >Psql</Dropdown.Item>
                        <Dropdown.Item >Mongo DB</Dropdown.Item>
                      </DropdownButton>
                      </span>


                      <h4 className="show-skills-lg mx-3">
                        Database
                      </h4>
                      <span className="show-skills-lg">
                        <Button className="mx-2" href="#" variant="secondary" size="sm" disabled>
                          Mysql
                        </Button>
                        <Button className="mx-2" href="#" variant="secondary" size="sm" disabled>
                          Psql
                        </Button>
                        <Button className="mx-2" href="#" variant="secondary" size="sm" disabled>
                          Mongo DB
                        </Button>
                      </span>
                    </div>
                    <ProgressBar animated now={70} />
                  </div>

                  <div className="skill-level my-4">
                  <div className="skill-level-text d-flex justify-content-start">
                      <span className="show-skills-sm">
                      <DropdownButton id="dropdown-basic-button" bsPrefix="skill-dropdown-heading" title="CICD And Cloud">
                        <Dropdown.Item >Docker</Dropdown.Item>
                        <Dropdown.Item >Docker Compose</Dropdown.Item>
                        <Dropdown.Item >Github Actions</Dropdown.Item>
                        <Dropdown.Item >AWS</Dropdown.Item>
                      </DropdownButton>
                      </span>


                      <h4 className="show-skills-lg mx-3">
                        CICD And Cloud
                      </h4>
                      <span className="show-skills-lg">
                        <Button className="mx-2" href="#" variant="secondary" size="sm" disabled>
                          Docker
                        </Button>
                        <Button className="mx-2" href="#" variant="secondary" size="sm" disabled>
                          Docker-compose
                        </Button>
                        <Button className="mx-2" href="#" variant="secondary" size="sm" disabled>
                          Github Actions
                        </Button>
                        <Button className="mx-2" href="#" variant="secondary" size="sm" disabled>
                          AWS
                        </Button>
                      </span>
                    </div>
                    <ProgressBar animated now={50} />
                  </div>

                  <div className="skill-level my-4">
                  <div className="skill-level-text d-flex justify-content-start">
                      <span className="show-skills-sm">
                      <DropdownButton id="dropdown-basic-button" bsPrefix="skill-dropdown-heading" title="Artificial Intelligence">
                        <Dropdown.Item >Machine Learning</Dropdown.Item>
                        <Dropdown.Item >Deep Learning</Dropdown.Item>
                      </DropdownButton>
                      </span>


                      <h4 className="show-skills-lg mx-3">
                        Artificial Intelligence
                      </h4>
                      <span className="show-skills-lg">
                        <Button className="mx-2" href="#" variant="secondary" size="sm" disabled>
                          Machine Learning
                        </Button>
                        <Button className="mx-2" href="#" variant="secondary" size="sm" disabled>
                          Deep Learning
                        </Button>
                      </span>
                    </div>
                    <ProgressBar animated now={50} />
                  </div>

                </div>
            </div>
          </div>
      )
}