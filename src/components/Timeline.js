import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './style.css'
import {TbSchool} from 'react-icons/tb'
import {MdWorkOutline} from 'react-icons/md'

export default function Timeline(){
    return(
        <div className='timeline text-center p-5'>

            <div className='container'>
                <h1 className='timeline-heading underline-light'>Career Journey</h1>
            </div>

            <VerticalTimeline
                lineColor='#222222'
            >
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#5A61ED', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #5A61ED' }}
                    date="2022 - present"
                    iconStyle={{ background: '#222222', color: '#fff' }}
                    icon={<MdWorkOutline />}
                >
                    <h3 className="vertical-timeline-element-title">Software Engineer @Tech Mahindra</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bangalore</h4>
                    <br/>
                    <p>
                        Building new tools to manage and automate internal process.
                        <br/>
                        <br/>
                        <strong>Skills</strong> - python | react | mysql
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#5A61ED', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #5A61ED' }}
                    date="2019 - 2022"
                    iconStyle={{ background: '#222222', color: '#fff' }}
                    icon={<MdWorkOutline />}
                >
                    <h3 className="vertical-timeline-element-title">Software Developer @Heptagon Technologies</h3>
                    <h4 className="vertical-timeline-element-subtitle">Coimbatore</h4>
                    <p>
                        Helped few fortune 500 companies in thier Journey of digital 
                        transformation.Built few AI systems like Facial recognition, OCR, Custom object detection.
                        <br/>
                        <br/>
                        <strong>Skills</strong> - python | docker | mysql | opencv | deep learning
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#5A61ED', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #5A61ED' }}
                    date="2018 - 2019"
                    iconStyle={{ background: '#222222', color: '#fff' }}
                    icon={<MdWorkOutline />}
                >
                    <h3 className="vertical-timeline-element-title">Data Analyst - Intern @Heptagon Technologies</h3>
                    <h4 className="vertical-timeline-element-subtitle">Coimbatore</h4>
                    <p>
                        Build custom object detection for finding logos in uniform. Explore various AI models and how
                        to custom train them.
                        <br/>
                        <br/>
                        <strong>Skills</strong> - python | opencv | deep learning
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: '#5A61ED', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #5A61ED' }}
                    date="2015 - 2019"
                    iconStyle={{ background: '#222222', color: '#fff' }}
                    icon={<TbSchool/>}
                >
                    <h3 className="vertical-timeline-element-title">B.E Computer Science @SREC</h3>
                    <h4 className="vertical-timeline-element-subtitle">Coimbatore</h4>
                    <p>
                    Had a very good experience in learning computer science fundamentals and 
                    basic programming.
                    <br/>
                        <br/>
                        <strong>Skills</strong> - computer science fundamentals | basic programming
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}