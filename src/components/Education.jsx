/* eslint-disable no-unused-vars */
import { Container } from 'react-bootstrap';
import { FaGraduationCap, FaGlobe ,FaLanguage ,FaChild ,FaAward,FaHandsHelping,FaUsersCog ,FaCertificate, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { BiBookOpen, BiTimeFive } from 'react-icons/bi';
import './Education.css';
import SectionDivider from "./SectionDivider";
import 'aos/dist/aos.css';

function Education() {

  const milestones = [
    {
      id: 'health-promotion',
      title: 'BSc in Health Promotion',
      institution: 'Rajarata University of Sri Lanka',
      duration: '4 Years',
      period: '2021 - 2025',
      details: (
        <ul>
          <li>Health Promotion Concepts & Strategies – Understanding the history, evolution, and fundamental principles of health promotion.</li>
          <li>Community Engagement & Leadership – Strategies to mobilize and empower communities for sustainable health improvements.</li>
          <li>Social Structure & Social Influence – Analyzing how societal norms, behaviors, and structures impact public health.</li>
          <li>Sustainable Health Promotion & Future Directions – Exploring long-term strategies for sustainable community health interventions.</li>
          <li>Public Health Policy & Legislation – Understanding policies that govern public health and their impact on communities.</li>
        </ul>
      ),
      skills: ['Health Promotion', 'Community Engagement', 'Public Health Policy'],
      icon: <FaGraduationCap />
    },
    {
      id: 'child-psych-diploma',
      title: 'Diploma in Child and Educational Psychology',
      institution: 'Institute of Psychology',
      duration: '1 Year',
      period: '2022 - 2023',
      details: (
        <ul>
          <li>Introduction to Psychology</li>
          <li>Early Childhood Development</li>
          <li>Advanced Child Psychology</li>
          <li>The Developing Child and Mental Illness</li>
          <li>Counselling for Children</li>
          <li>Motivation and Emotions</li>
        </ul>
      ),
      icon: <FaChild  />
    },
    {
      id: 'counselling-diploma',
      title: 'Diploma in Counselling Psychology',
      institution: 'Transmind Institute of Training and Development (Pvt) Ltd',
      duration: '1 Year',
      period: '2022 - 2023',
      details: (
        <ul>
          <li>Introduction to Psychology</li>
          <li>Introduction to Counselling</li>
          <li>Basic Counselling Skills</li>
          <li>Professional Ethics in Counselling</li>
          <li>Advanced Counselling Skills and Techniques</li>
          <li>Therapy and Treatment</li>
        </ul>
      ),
      
      icon: <FaHandsHelping />
    },
    {
      id: 'hrm-diploma',
      title: 'Diploma in Human Resource Management',
      institution: 'CASED Institute',
      duration: '1 Year',
      period: '2024 - 2025',
      details: (
        <ul>
          <li>Importance of Human Resource Management (HRM)</li>
          <li>Functions of HRM</li>
          <li>Roles and Responsibilities of HRM</li>
          <li>Compensation and Motivation</li>
          <li>Payroll Management System</li>
          <li>Handling Confidential Information</li>
        </ul>
      ),
      skills: ['HR Management', 'Payroll Systems', 'Confidentiality Handling'],
      icon: <FaUsersCog />
    },
    {
      id: 'sinhala-diploma',
      title: 'Diploma in Sinhala',
      institution: 'CASED Institute',
      duration: '1 Year',
      period: '2014 - 2015',
      details: (
        <ul>
          <li>Focused on Sinhala language proficiency including grammar, writing, and communication skills.</li>
        </ul>
      ),
      skills: ['Sinhala Language', 'Communication', 'Writing Skills'],
      icon: <FaLanguage />
    },
    {
      id: 'english-diploma',
      title: 'Diploma in English (UK Pearson Assured)',
      institution: 'ESOFT Metro Campus',
      duration: 'Completed',
      period: 'July 2020',
      details: (
        <ul>
          <li>Enhanced English language proficiency in reading, writing, speaking, and listening.</li>
          <li>Completed a UK Pearson Assured program emphasizing global English standards.</li>
        </ul>
      ),
      skills: ['English Proficiency', 'Communication', 'Academic Writing'],
      icon: <FaGlobe />
    }
    
  ];
  

  return (
    <section id="education" className="edu-roadmap-section">
      <Container>
        <h2 className="section-title"><FaGraduationCap className="title-icon" /> Education Journey</h2>
        <p className="skills-section-subtitle mb-4">
        An overview of my academic journey, showcasing the degrees and certifications that have shaped my understanding and skills in public health, health promotion, psychology, and management. These qualifications have provided me with the foundation to make a positive impact in the community through evidence-based practices and research.
          </p>
        <div className="edu-roadmap-container">
          <div className="edu-roadmap-path"></div>
          {milestones.map((milestone, index) => (
            <div
              key={milestone.id}
              className="edu-roadmap-milestone"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="edu-milestone-dot">{milestone.icon}</div>

              <div className="edu-milestone-content">
                <h3>{milestone.title}</h3>
                {milestone.institution && <p><FaMapMarkerAlt /> {milestone.institution}</p>}
                {milestone.duration && <p><BiTimeFive /> {milestone.duration}</p>}
                {milestone.period && <p><FaCalendarAlt /> {milestone.period}</p>}
                {milestone.details && <p>{milestone.details}</p>}
                {milestone.skills && <ul>{milestone.skills.map((skill, i) => <li key={i}>{skill}</li>)}</ul>}
                {milestone.achievement && <div><FaAward /> {milestone.achievement}</div>}
              </div>
            </div>
          ))}
        </div>
      </Container>
      <SectionDivider />
    </section>
  );
}

export default Education;
