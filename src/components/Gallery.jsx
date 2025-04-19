import { Container } from 'react-bootstrap'
import { FaImages, FaUsers, FaChalkboardTeacher, FaUserTie, FaMicrophone, FaHandshake, FaHeartbeat, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import './Gallery.css'

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    { 
      title: 'Sustainable Development Goals (SDGs) Project ', 
      url: 'sus.jpeg',
      icon: <FaUsers className="gallery-item-icon" />
    },
    { 
      title: 'National Child Protection Authority works ', 
      url: 'ini.jpeg',
      icon: <FaChalkboardTeacher className="gallery-item-icon" />
    },
    { 
      title: 'Health Promotion Initiatives - FIELD WORK ', 
      url: 'hea.jpeg',
      icon: <FaUserTie className="gallery-item-icon" />
    },
    { 
      title: 'COMMUNITY & SOCIAL WORK ', 
      url: 'soci.jpeg',
      icon: <FaMicrophone className="gallery-item-icon" />
    },
    { 
      title: 'Extracurricular Activities', 
      url: 'spo.jpeg',
      icon: <FaHeartbeat className="gallery-item-icon" />
    },
    { 
      title: 'Other ', 
      url: 'other.jpeg',
      icon: <FaHandshake className="gallery-item-icon" />
    }
  ]

  const openModal = (item) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  }

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  }

  return (
    <section id="gallery" className="py-5">
      <Container>
        <h2 className="section-title text-center" data-aos="fade-up">
          <FaImages className="section-icon gallery-icon" />
          Gallery
        </h2>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className="gallery-item" 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              onClick={() => openModal(item)}
            >
              <div className="gallery-item-content">
                <div className="gallery-item-image">
                  <img src={item.url} alt={item.title} />
                  <div className="gallery-item-overlay">
                    <div className="gallery-item-icon-wrapper">
                      {item.icon}
                    </div>
                  </div>
                </div>
                <div className="gallery-item-title">
                  <h3>{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <div className="gallery-modal" onClick={closeModal}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                <FaTimes />
              </button>
              <div className="modal-image-container">
                <img src={selectedImage.url} alt={selectedImage.title} />
              </div>
              <div className="modal-title">
                <div className="modal-icon">{selectedImage.icon}</div>
                <h3>{selectedImage.title}</h3>
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}

export default Gallery