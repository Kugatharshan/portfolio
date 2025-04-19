import { Container } from 'react-bootstrap'
import { FaBriefcase, FaBuilding, FaChild, FaHeartbeat,FaPeopleCarry,FaUserGraduate,FaBook,FaHandsHelping,FaUniversity } from 'react-icons/fa'
import { BiTimeFive } from 'react-icons/bi'
import { MdLocationOn } from 'react-icons/md'
import { useState } from 'react'
import './Experience.css'
import './style.css'
import SectionDivider from "./SectionDivider";

function Experience() {
  const [expandedRole, setExpandedRole] = useState(null);

  const experiences = [
    {
      id: 'g17',
      title: 'G17 University Ambassador – Sustainable Development Goals (SDGs)',
      company: 'G17 University',
      period: '2024-2025',
      icon: <FaBuilding />,
      description: 'Planned and implemented sustainable development skill projects focusing on education, climate action, and economic sustainability.',
      details: [
        'Planned and implemented a one-year sustainable skill development project, helping 50 students, 5 teachers, and 15 university students improve leadership, teamwork, and decision-making skills.',
        'Organized community-based SDG awareness programs to promote sustainable lifestyles and strengthen community resilience.',
        'Created initiatives focused on education, climate action, economic sustainability, gender equality, and equity.',
        'Designed and carried out the SkillUp Sri Lanka project, a youth leadership and sustainable development program.',
        'Trained students and educators in team building, communication, and goal setting.'
      ],
      color: '#F39C12'
    },
    {
      id: 'ncpadistrict',
      title: 'National Child Protection Authority University Ambassador',
      company: 'National Child Protection Authority',
      period: '2024-2025',
      icon: <FaChild />,
      description: 'Focused on child protection through community engagement and awareness programs.',
      details: [
        'District Leader – National Child Protection Authority, University Ambassador Program (2024-2025)',
        'Organising Committee Member & Resource Pool Member – National Summit on Child Protection 2025',
        'Founder – Child Protection Club, Rajarata University of Sri Lanka.',
        'Conducted child protection awareness campaigns in schools and communities.'
      ],
      color: '#50C878'
    },
    {
      id: 'healthpromotion',
      title: 'Health Promotion Society Member',
      company: 'Rajarata University',
      period: '2021-2025',
      icon: <FaHeartbeat />,
      description: 'Focused on developing and implementing public health campaigns and community workshops.',
      details: [
        'Developed and implemented public health awareness campaigns through digital content and social media platforms.',
        'Conducted workshops on nutrition, mental health, disease prevention, gender equality, sexual and reproductive health, family health, and violence prevention to enhance community well-being.',
        'Partnered with Anuradhapura Teaching Hospital to organise Diabetes Awareness Campaigns.',
        'Provided health and hygiene education, cognitive development, and variety of interest sessions for primary school children.',
        'Organized charity shop events and fundraising activities to support ongoing health promotion initiatives.',
        'Journal Club Member – Department of Health Promotion.',
        'Supported event photography, videography, and video editing to capture key moments for documentation, promotional materials, and digital health awareness campaigns.'
      ],
      color: '#E74C3C'
    }
  ];

  const FieldExperiences = [
    {
      id: 'wellaragama',
      title: 'Community Health Field Worker',
      company: 'Mihintale District – Wellaragama Village',
      period: '2022–2025',
      icon: <FaPeopleCarry />, // You can choose another relevant icon if preferred
      description: 'Worked closely with rural communities to improve overall health and well-being through sustainable community engagement.',
      details: [
        'Engaged with a rural community of 349 individuals in Wellaragama village, Mihintale District.',
        'Targeted key issues including Non-communicable diseases (NCDs), poor Early Childhood Care & Development (ECCD) practices, and low academic engagement among children.',
        'Conducted community-based initiatives to address alcohol and tobacco consumption.',
        'Promoted sustainable behavioral changes through direct community interaction and education.'
      ],
      color: '#1ABC9C'
    },
    {
      id: 'studentwellbeing',
      title: 'University Student Well-being Facilitator',
      company: 'Rajarata University of Sri Lanka',
      period: '2022–2024',
      icon: <FaUserGraduate />,
      description: 'Collaborated with students to enhance university well-being through better time management and digital productivity.',
      details: [
        'Worked with a student group of 25 to promote academic well-being and time efficiency.',
        'Focused on improving daily routines, organizational skills, and healthy tech usage habits.',
        'Helped foster a positive and enthusiastic learning environment for university students.',
        'Designed sessions on time management and digital balance for academic success.'
      ],
      color: '#2980B9'
    }
  ];


  const communityExperiences = [
    {
      id: 'kaluthavalai-usa',
      title: 'President – Kaluthavalai University Students’ Association',
      company: 'Kaluthavalai University Students’ Association',
      period: '2024–2025',
      icon: <FaUniversity />,
      description: 'Led educational and social initiatives to improve student support and community engagement.',
      details: [
        'Provided educational support, including academic guidance and career mentoring for students.',
        'Organised seminars and workshops on career development to help students transition into professional fields.',
        'Established a community library, improving access to educational resources in the village.',
        'Led educational projects, including tutoring programs and skills-based training for students.'
      ],
      color: '#8E44AD'
    },
    {
      id: 'seeda-kaluthavalai',
      title: 'Volunteer – SEEDA Kaluthavalai',
      company: 'SEEDA Kaluthavalai',
      period: '3 years',
      icon: <FaHandsHelping />,
      description: 'Provided educational and social support services to underprivileged students and contributed to community well-being.',
      details: [
        'Provided educational and social support services to underprivileged students.',
        'Participated in environmental development projects to enhance community well-being.',
        'Assisted vulnerable populations in accessing resources and support services.'
      ],
      color: '#27AE60'
    },
    {
      id: 'educational-society',
      title: 'Member – Educational Development Society, Kaluthavalai',
      company: 'Educational Development Society, Kaluthavalai',
      period: '6 years',
      icon: <FaBook />,
      description: 'Dedicated to improving educational opportunities for underprivileged students and fostering holistic student development.',
      details: [
        'Provided quality education as a free service for underprivileged students.',
        'Organised sports events, and promoted ethical values to foster holistic student development.'
      ],
      color: '#3498DB'
    }
  ];
  
  

  return (
    <section id="experience" className="experience-section">
      <Container>
        <div className="experience-header" data-aos="fade-down">
          <h2 className="section-title">
            <FaBriefcase className="title-icon" />
             Experience
          </h2>
          <p className="skills-section-subtitle mb-4">
    A summary of my professional experiences, highlighting the roles and responsibilities that have allowed me to apply my knowledge in public health, health promotion, and community development. Through hands-on work, I have gained valuable insights into health management, behavioral health, and public health advocacy, preparing me to drive positive change within diverse organizations and communities.
</p>

        </div>

        <div className="title-container">
            <span className="icon-wrapper">
                <FaBuilding   className="title-icon" />
            </span>
            <h2 className="title">PROFESSIONAL EXPERIENCE</h2>
            <div className="underline"></div>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {experiences.map((exp, index) => (
  <div 
    key={exp.id}
    className={`timeline-item ${expandedRole === exp.id ? 'expanded' : ''}`}
    data-aos="fade-up"
    data-aos-delay={index * 100}
  >
    <div 
      className="timeline-marker"
      style={{'--marker-color': exp.color}}
      onClick={() => setExpandedRole(expandedRole === exp.id ? null : exp.id)}
    >
      <div className="marker-icon">
        {exp.icon}
      </div>
      <div className="marker-pulse"></div>
    </div>

    <div className="timeline-content">
      <div className="role-header">
        <h3>{exp.title}</h3>
        <div className="company-info">
          <span className="company-name">
            <MdLocationOn /> {exp.company}
          </span>
          <span className="period">
            <BiTimeFive /> {exp.period}
          </span>
        </div>
      </div>

      {/* Insert description here */}
      <div className="role-description">
        <p>{exp.description}</p>
      </div>

      <div className="role-details">
        <ul className="responsibilities">
          {exp.details.map((detail, i) => (
            <li key={i}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
))}
        </div>


        <div  className="title-container">
            <span className="icon-wrapper">
                <FaBuilding   className="title-icon" />
            </span>
            <h2 className="title">Field EXPERIENCE</h2>
            <div className="underline"></div>
        </div>

{FieldExperiences.map((exp, index) => (
  <div 
    key={exp.id}
    className={`timeline-item ${expandedRole === exp.id ? 'expanded' : ''}`}
    data-aos="fade-up"
    data-aos-delay={index * 100}
  >
    <div 
      className="timeline-marker"
      style={{ '--marker-color': exp.color }}
      onClick={() => setExpandedRole(expandedRole === exp.id ? null : exp.id)}
    >
      <div className="marker-icon">
        {exp.icon}
      </div>
      <div className="marker-pulse"></div>
    </div>

    <div className="timeline-content">
      <div className="role-header">
        <h3>{exp.title}</h3>
        <div className="company-info">
          <span className="company-name">
            <MdLocationOn /> {exp.company}
          </span>
          <span className="period">
            <BiTimeFive /> {exp.period}
          </span>
        </div>
      </div>

      <div className="role-description">
        <p>{exp.description}</p>
      </div>

      {exp.details && exp.details.length > 0 && (
        <div className="role-details">
          <ul className="responsibilities">
            {exp.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
))}

        <section >
<div  className="title-container">
            <span className="icon-wrapper">
                <FaBuilding   className="title-icon" />
            </span>
            <h2 className="title">Field EXPERIENCE</h2>
            <div className="underline"></div>
        </div>

        {communityExperiences.map((exp, index) => (
  <div 
    key={exp.id}
    className={`timeline-item ${expandedRole === exp.id ? 'expanded' : ''}`}
    data-aos="fade-up"
    data-aos-delay={index * 100}
  >
    <div 
      className="timeline-marker"
      style={{ '--marker-color': exp.color }}
      onClick={() => setExpandedRole(expandedRole === exp.id ? null : exp.id)}
    >
      <div className="marker-icon">
        {exp.icon}
      </div>
      <div className="marker-pulse"></div>
    </div>

    <div className="timeline-content">
      <div className="role-header">
        <h3>{exp.title}</h3>
        <div className="company-info">
          <span className="company-name">
            <MdLocationOn /> {exp.company}
          </span>
          <span className="period">
            <BiTimeFive /> {exp.period}
          </span>
        </div>
      </div>

      <div className="role-description">
        <p>{exp.description}</p>
      </div>

      {exp.details && exp.details.length > 0 && (
        <div className="role-details">
          <ul className="responsibilities">
            {exp.details.map((detail, i) => (
              <li key={i}>{detail}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
))}
</section>
      </Container>
      <SectionDivider />
    </section>
  )
}

export default Experience