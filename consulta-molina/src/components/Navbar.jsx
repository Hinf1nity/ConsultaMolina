import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'
import IsoLogo from '../assets/Molina_Isologo-transparente-2.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToSection = (sectionId) => {
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const handleNavClick = (item) => {
    if (item.path && item.path.startsWith("/servicios")) {
      setIsMenuOpen(false)
      return
    }
    if (item.path !== '/profesionales') {
      return
    }
    setIsMenuOpen(false)
    
    const sectionMap = {
      '/quienes-somos': 'quienes-somos',
      '/mision-vision': 'mision-vision',
      '/valores': 'valores',
      '/profesionales': 'profesionales',
      '/ubicacion-contacto': 'ubicacion-contacto'
    }
    
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionMap[item.path] } })
    } else {
      scrollToSection(sectionMap[item.path])
    }
  }

  const goHome = () => {
    setIsMenuOpen(false)
    navigate('/')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 1160); // si es menor o igual a 1160px lo consideramos móvil
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    if (location.state?.scrollTo) {
      // small timeout to ensure DOM is ready
      setTimeout(() => {
        scrollToSection(location.state.scrollTo)
      }, 50)
    }
  }, [location])

  const navItems = [
    { 
      name: 'Psicoterapia', 
      dropdown: [
        { name: 'Psicoterapia Individual', path: '/servicios#psicoterapia' },
        { name: 'Psicoterapia de Pareja', path: '/servicios#psicoterapia' },
        { name: 'Psicoterapia Familiar', path: '/servicios#psicoterapia' },
        { name: 'Psicoterapia Infantojuvenil', path: '/servicios#psicoterapia' },
        { name: 'Duelo', path: '/servicios#duelo' },
      ]
    },
    { 
      name: 'Psicoterapia en Línea', 
      path: '/servicios#psicoterapia-linea',
    },
    { 
      name: 'Profesionales', 
      path: '/profesionales',
    },
    { 
      name: 'Neuropsicología Deportiva', 
      path: '/servicios#neuropsicologia-deportiva',
    },
    { 
      name: 'Orientación Vocacional', 
      dropdown: [
        { name: 'VITAE - Servicio de Orientación Vocacional', path: '/servicios#VITAE' },
        { name: 'Charlas y Talleres a Colegios Padres e Hijos', path: '/servicios#VITAE' },
      ]
    },
    { 
      name: 'Juventud en la Diversidad', 
      path: '/servicios#juventud-diversidad',
    },
    {
      name: 'Charlas y Talleres',
      dropdown: [
        { name: 'Creciendo juntos: de la familia a la independencia', path: '/servicios#charlas-talleres' },
        { name: 'Manejo escolar del autismo', path: '/servicios#charlas-talleres' },
        { name: 'Neuropsicología deportiva', path: '/servicios#charlas-talleres' },
        { name: 'Educar en libertad con autonomía', path: '/servicios#charlas-talleres' },
        { name: 'Problemas de chicas: el complicado mundo de las mujeres', path: '/servicios#charlas-talleres' },
      ]
    }
  ]

  const handleDropdownEnter = (index) => {
    if (!isMobile) {
      setActiveDropdown(index)
    }
  }

  const handleDropdownLeave = () => {
    if (!isMobile) {
      setActiveDropdown(null)
    }
  }

  const handleDropdownClick = (index) => {
    if (isMobile) {
      setActiveDropdown(activeDropdown === index ? null : index)
    }
  }

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <div className="logo">
              <img src={IsoLogo} alt="Molina Isologo" className="logo-image-navbar" onClick={goHome}/>
          </div>
        </Link>
        
        <div className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item, index) => (
            <div key={index} className="nav-item"
              onMouseEnter={() => handleDropdownEnter(index)}
              onMouseLeave={handleDropdownLeave}
              onClick={() => handleDropdownClick(index)}
            >
            <a 
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                onClick={() => {
                  setActiveDropdown(null)
                  {item.path ? navigate(item.path) : '#'}
                  handleNavClick(item)
                }}
              >
              {item.name}
              {item.dropdown && (
                <svg className="dropdown-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              )}
            </a>
            {item.dropdown && (
              <div className={`dropdown-menu ${activeDropdown === index ? 'active' : ''}`}>
                {item.dropdown.map((dropdownItem, dropdownIndex) => (
                  <a
                    key={dropdownIndex}
                    className='dropdown-link'
                    onClick={() => {
                      setIsMenuOpen(false)
                      navigate(dropdownItem.path)
                    }}
                  >
                    {dropdownItem.name}
                  </a>
                ))}
              </div>
            )}
            </div>
          ))}
        </div>

        <div 
          className={`navbar-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar