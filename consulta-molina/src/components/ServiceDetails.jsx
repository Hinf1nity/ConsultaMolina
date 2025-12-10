import './ServiceDetails.css'
import { FaBrain, FaUserGraduate, FaChalkboardTeacher, FaHandHoldingHeart } from "react-icons/fa";
import { FaUser, FaHeart, FaLaptop, FaChevronDown, FaChevronUp, FaLanguage, FaCamera, FaSchool, FaPaw } from "react-icons/fa";
import { FaClock, FaUsers, FaQuestionCircle, FaPhone, FaCalendarAlt, FaCalendar } from "react-icons/fa";
import { FaHouse, FaRainbow, FaPeopleArrows, FaCircleDollarToSlot, FaC  } from "react-icons/fa6";
import { BsBuildingsFill } from "react-icons/bs";
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ServiceDetails = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const location = useLocation();

  // Desplazarse a la sección específica si hay un hash en la URL
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const psicoterapiaTypes = [
    {
      title: "Psicoterapia Individual",
      description: "Ofrecemos un acompañamiento cálido y confidencial\
      dirigido a adultos que buscan orientación, apoyo\
      emocional o herramientas para fortalecer su bienestar. La \
      psicoterapia individual brinda un espacio cercano y\
      confidencial para abordar desafíos personales, tomar\
      decisiones con mayor claridad y promover el desarrollo\
      integral. Cuando corresponde, realizamos una evaluación\
      diagnóstica y tratamiento de problemáticas específicas.\
      Nuestro enfoque interdisciplinario busca potenciar los\
      recursos de cada persona y generar cambios sostenibles a\
      corto, mediano y largo plazo.",
      icons: [
        { icon: FaClock, tooltip: "Sesiones de 45-60 minutos" },
        { icon: FaQuestionCircle, tooltip: "¿Puedo sacar cita para un familiar?\n\
        Si, sin embargo lo recomendable es que el paciente interesado se ponga en contacto\n\
        ¿Cuánto dura el tratamiento?\n\
        El número de sesiones se determinará dependiendo del objetivo terapéutico " },
        { icon: FaCalendarAlt, tooltip: "Contacto: +591 72564060 | Horarios: Lun-Vie 9AM-6PM" }
      ]
    },
    {
      title: "Terapia de Pareja",
      description: "Ofrecemos un acompañamiento discreto y humano enfocado en la\
      relación conyugal, dirigido a parejas en todas sus etapas: desde el\
      enamoramiento y la convivencia, hasta la crianza de los hijos o\
      procesos de separación. Este espacio brinda apoyo para mejorar la\
      comunicación, resolver conflictos, fortalecer la intimidad y construir\
      acuerdos que favorezcan relaciones más sanas y satisfactorias.\
      Cuando corresponde, se realiza una evaluación diagnóstica para\
      comprender mejor la dinámica de la relación y orientar el\
      tratamiento. El objetivo es ayudar a la pareja a enfrentar sus desafíos\
      de manera conjunta, promoviendo vínculos sólidos basados en el\
      respeto, la confianza y el bienestar mutuo.",
      icons: [
        { icon: FaClock, tooltip: "Sesiones de 45-60 minutos" },
        { icon: FaRainbow, tooltip: "Espacio inclusivo para parejas LGBTQ+" },
        { icon: FaQuestionCircle, tooltip: "¿Quién asiste primero?\n\
          Puede asistir cualquier miembro o la pareja en su conjunto\n\
          ¿A todas las sesiones debemos ir juntos?\n\
          No, depende del desarrollo terapéutico\n\
          ¿La terapia de pareja contempla temáticas de sexualidad?\n\
          Si\n\
          " },
        { icon: FaCalendarAlt, tooltip: "Contacto: +591 72564060 | Horarios: Mar-Jue 4PM-8PM" }
      ]
    },
    {
      title: "Psicoterapia Familiar",
      description: "Ofrecemos un acompañamiento cálido y respetuoso dirigido al sistema\
      familiar, tanto cercano (padres e hijos) como extendido (tíos, abuelos, primos,\
      sobrinos), en las distintas etapas de su desarrollo: desde la conformación de la\
      familia y la crianza de los hijos, hasta la planificación familiar, la emancipación,\
      la desvinculación y el reencuentro de la pareja. Se abordan los desafíos propios\
      de cada etapa, así como las dificultades en familias que atraviesan procesos de\
      desintegración. El objetivo es favorecer un sistema familiar amoroso, capaz de\
      resolver sus problemas de manera constructiva y de mantener relaciones\
      basadas en la comunicación, el apoyo mutuo y la confianza.",
      icons: [
        { icon: FaClock, tooltip: "Sesiones de 45-60 minutos" },
        { icon: FaQuestionCircle, tooltip: "¿Cuántos miembros de la familia pueden ir?\n\
        Todos los integrantes de la familia nuclear y en caso de ser necesario de la familia extendida\n\
        ¿En qué orden debemos asistir?\n\
        Dependiendo la problemática que se quiera tratar\n\
        ¿Las sesiones tienen un costo diferente por número de asistentes a la terapia o a la sesión?\n\
        No, el costo es único" },
        { icon: FaCalendarAlt, tooltip: "Contacto: +591 72564060 | Horarios: Mié 5PM-7PM" }
      ]
    },
    {
      title: "Psicoterapia Infantojuvenil",
      description: "Ofrecemos un acompañamiento humano y respetuoso dirigido a\
      niños, niñas y adolescentes, así como a sus padres, desde las\
      primeras etapas de la crianza hasta los desafíos propios de la\
      transición a la vida adulta. En este espacio se abordan\
      problemáticas conductuales, educativas, emocionales y sociales,\
      con el fin impulsar un desarrollo destacable y equilibrado. Cuando\
      corresponde, se realiza una evaluación seguida de un diagnóstico\
      interdisciplinario que permite diseñar una intervención integral y\
      efectiva. También se trabajan temas relacionados con la\
      orientación en el crecimiento y el desarrollo de la sexualidad,\
      siempre dentro de un entorno respetuoso, seguro y confidencial.",
      icons: [
        { icon: FaClock, tooltip: "Sesiones de 45-60 minutos" },
        { icon: FaPeopleArrows, tooltip: "Para edades de 4 a 17 años" },
        { icon: FaQuestionCircle, tooltip: "¿Quién viene a la primera sesión?\n\
        Menos de 8 años con sus padres y mayores de 12 pueden venir solos\n\
        ¿Se realizan diagnósticos de trastornos u otras enfermedades?\n\
        Si, se realiza una valoración y exploración clínica de los pacientes" },
        { icon: FaCalendarAlt, tooltip: "Contacto: +591 72564060 | Horarios: Lun-Vie 3PM-6PM" }
      ]
    }
  ];

  const psicoterapiaLineaIcons = [
    { icon: FaClock, tooltip: "Sesiones de 45-60 minutos" },
    { icon: FaLanguage, tooltip: "Atención en Español e Inglés" },
    { icon: FaQuestionCircle, tooltip: "¿Debo encender cámara?\nDepende de la comodidad del paciente" },
    { icon: FaCamera, tooltip: "Plataformas: Zoom, Meet, FaceTime, WhatsApp, Discord, Gather" },
    { icon: FaCircleDollarToSlot, tooltip: "Métodos de pago: Transferencia, QR, Binance, PayPal" },
    { icon: FaCalendarAlt, tooltip: "Contacto: +591 72564060 | Horarios: Lun-Vie 9AM-6PM" },
  ];

  const dueloIcons = [
    { icon: FaClock, tooltip: "Sesiones de 45-60 minutos" },
    { icon: FaPaw, tooltip: "Se trabajan duelos por mascotas" },
    { icon: FaQuestionCircle, tooltip: "¿Atiende a personas de la tercera edad?\n\
    Si\n\
    ¿Atiende a niños?\n\
    Si" },
    { icon: FaCalendarAlt, tooltip: "Contacto: +591 72564060 | Horarios: Lun-Vie 9AM-6PM" },
  ];

  const neuropsicologiaIcons = [
    { icon: FaClock, tooltip: "Evaluaciones de 60-90 minutos" },
    { icon: FaPeopleArrows, tooltip: "Para edades de 6 a 12 años" },
    { icon: FaUsers, tooltip: "Se trabaja de forma individual y por parejas" },
    { icon: FaQuestionCircle, tooltip: "¿El programa es solo para atletas?\n\
    No, es para todo deportista que desee mejorar su rendimiento\n\
    ¿Se trabaja en consultorio?\n\
    No, se trabaja es un centro de neuropsicología deportiva" },
    { icon: FaCalendarAlt, tooltip: "Contacto: +591 72564060 | Horarios: Lun-Vie 10AM-5PM" },
  ];

  const vitaeTypes = [
    {
      title: "VITAE - Servicio de Orientación Vocacional",
      description: "En VITAE acompañamos a los estudiantes en uno de los pasos más importantes\
      de su vida: elegir su futuro profesional. Nuestro servicio combina pruebas\
      psicométricas confiables, entrevistas personalizadas y análisis del contexto\
      familiar y social. Seguimos una rigurosidad científica tanto en la selección y\
      aplicación de las pruebas como en su interpretación, garantizando resultados\
      precisos y fundamentados. Con esta información, elaboramos junto al estudiante\
      un plan de vida con metas claras a corto, mediano y largo plazo, que le permite\
      tomar decisiones académicas y profesionales con seguridad y propósito.\
      Contamos con diferentes paquetes que se adaptan a las necesidades de cada\
      persona, ofreciendo una atención sumamente personalizada e integral.",
      icons: [
        { icon: FaClock, tooltip: "Sesiones de 45-60 minutos" },
        { icon: FaUser, tooltip: "El servicio es individual" },
        { icon: FaPeopleArrows, tooltip: "Para edades de 16 a 21 años" },
        { icon: FaSchool, tooltip: "Se hacen descuentos por grupos de personas o por colegios" },
        { icon: FaQuestionCircle, tooltip: "¿Solo puedo tomar las pruebas?\n\
        No, el servicio implica una exploración integral del estudiante\n\
        ¿Cuánto tiempo dura la toma de pruebas?\n\
        Cuatro horas\n\
        ¿Cuánto tiempo dura el servicio completo?\n\
        Depende del plan, entre 1 a 3 semanas" },
        { icon: FaCalendarAlt, tooltip: "Contacto: +591 72564060 | Horarios: Lun-Vie 9AM-6PM" }
      ]
    },
    {
      title: "Charlas y Talleres a Colegios Padres e Hijos",
      description: "Ofrecemos charlas y talleres gratuitos para estudiantes de quinto y sexto\
      de secundaria, así como espacios para padres de familia. En ellos se\
      abordan temas clave de orientación vocacional como la diferencia entre\
      vocación y pasión, la construcción del plan de vida, el rol de la familia en\
      la elección de carrera y herramientas prácticas para tomar decisiones\
      informadas. Estas actividades se realizan directamente en las unidades\
      educativas o en nuestra sede, generando un primer acercamiento a la\
      orientación vocacional y abriendo el camino hacia un futuro con sentido."
    }
  ];

  const juventudIcons = [
    { icon: FaClock, tooltip: "Sesiones de 45-60 minutos" },
    { icon: FaPeopleArrows, tooltip: "Para personas de 16 años para arriba" },
    { icon: BsBuildingsFill, tooltip: "Se trabaja en consultorio y ambientes externos" },
    { icon: FaQuestionCircle, tooltip: "¿Quiénes deben estar presentes en la primera sesión?\n\
    Padres o tutores\n\
    ¿Es necesario contar con un diagnóstico previo?\n\
    Si, para orientar el trabajo de acompañamiento" },
    { icon: FaCalendarAlt, tooltip: "Contacto: +591 72564060 | Horarios: Lun-Vie 3PM-7PM" },
  ];

  const charlasTalleresTypes = [
    {
      title: "Creciendo juntos: de la familia a la independencia",
      description: "Esta charla está dirigida a colegios y a padres de familia con hijos entre los 5 y 12 años de\
      edad.\n\
      Abarca las siguientes temáticas:",
      bullets: [
        "Las esferas del ser humano: bio–psico–social",
        "Manejo de crisis en la vida",
        "Estilos educativos",
        "Problemáticas de la actualidad"
      ],
      finalDescription: " El propósito es ofrecer una mirada integral del niño, entendiendo que atraviesa distintas\
      etapas de desarrollo con sus propios desafíos, y brindar a los padres herramientas para\
      educar desde un estilo equilibrado que favorezca tanto el desempeño social como el\
      académico.\n\
      Después de la charla, los participantes contarán con recursos claros para acompañar de\
      manera más efectiva el crecimiento de sus hijos, fortaleciendo el vínculo familiar y apoyando\
      su desarrollo integral.",
    },
    {
      title: "Manejo escolar del autismo",
      description: "Este taller está dirigido al personal docente de colegios que cuentan con estudiantes dentro\
      del espectro autista.\n\
      Abarca las siguientes temáticas:",
      bullets: [
        "Criterios del autismo",
        "Manejo general del autismo",
        "Manejo de crisis en el autismo",
        "Manejo en aula del autismo"
      ],
      finalDescription: "El taller brinda al profesorado una comprensión clara de la base teórica del espectro autista,\
      junto con herramientas prácticas y eficientes para el manejo general, la atención en crisis y\
      las estrategias de aula.\n\
      Después del taller, los participantes estarán mejor preparados para responder a las\
      necesidades de los estudiantes con TEA, favoreciendo un entorno escolar inclusivo y\
      adaptado.",
    },
    {
      title: "Neuropsicología deportiva",
      description: "Esta charla está dirigida a padres y atletas de distintas disciplinas y tiene como objetivo\
      presentar la oferta de nuestro centro de entrenamiento neuropsicológico, orientado a\
      fortalecer las funciones cognitivas, la regulación emocional y la actitud deportiva de los\
      atletas y deportistas.\n\
      Abarca las siguientes temáticas:",
      bullets: [
        "Presentación del equipo",
        "Las bases de la neuropsicología",
        "Neuropsicología aplicada al deporte",
        "El plan de acción"
      ],
      finalDescription: "Durante la charla, los participantes obtendrán una visión integral que resalta la importancia\
      de complementar el entrenamiento físico y técnico de cada disciplina con el entrenamiento\
      del cerebro del deportista, como base para un desarrollo más completo y un rendimiento\
      óptimo."
    },
    {
      title: "Educar en libertad con autonomía",
      description: "Esta charla está dirigida a colegios y a padres de familia con hijos entre los 5 y 12 años de\
      edad.\n\
      Abarca las siguientes temáticas:",
      bullets: [
        "Qué es la libertad en la crianza",
        "Cómo se logra la autonomía en los hijos",
        "Autonomía en función del desarrollo",
        "Consecuencias del abandono y la sobreprotección",
        "Estilos educativos"
      ],
      finalDescription: "En esta charla se destaca la autonomía como una habilidad esencial para el crecimiento de\
      los niños y el fortalecimiento de la familia. Se muestra cómo promoverla de manera\
      equilibrada, evitando tanto el abandono como la sobreprotección, y favoreciendo que los\
      hijos afronten con seguridad los retos de la vida cotidiana.\n\
      Después de la charla, los participantes comprenderán mejor cómo educar en libertad y\
      acompañar el desarrollo de la independencia en sus hijos."
    },
    {
      title: "Problemas de chicas: el complicado mundo de las mujeres",
      description: "Esta charla está dirigida a padres de hijas entre los 7 y los 17 años.\n\
      Abarca las siguientes temáticas:",
      bullets: [
        "Conociendo a mi hija",
        "Mi hija está cambiando",
        "Mi hija y otras hijas: relaciones entre chicas",
        "Lo resolvamos entre chicas",
        "Mi rol como papá y mamá"
      ],
      finalDescription: "En esta charla se explora la dinámica de las relaciones entre chicas y se brinda a los padres una guía para anticipar y orientar el\
      desenvolvimiento social de sus hijas. Se profundiza en la comprensión de su carácter, pensamientos y emociones, junto con los\
      desafíos propios de la infancia y la adolescencia. También se resalta la importancia del rol y del ejemplo que cumplen papá y\
      mamá en su vida cotidiana.\n\
      Después de la charla, los padres contarán con una mayor claridad para acompañar y apoyar a sus hijas en su crecimiento\
      personal y social.",
    }
  ];

  return (
    <div className="service-details">
      {/* Psicoterapia */}
      <section id='psicoterapia' className="service-section">
        <div className="container">
          <div className="service-header">
            <div className="service-icon">
              <span><FaUser color='white'/></span>
            </div>
            <h2>Psicoterapia</h2>
          </div>
          
          <div className="service-content">
            <div className="service-image">
              <img 
                src="https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Psicoterapia"
              />
            </div>
            <div className="service-info">
              <p className="service-description">
                Ofrecemos diferentes modalidades de psicoterapia adaptadas a las necesidades específicas de cada paciente, desde atención individual hasta terapia familiar y de pareja.
              </p>
              
              <div className="psicoterapia-types">
                {psicoterapiaTypes.map((type, index) => (
                  <div key={index} className="psicoterapia-dropdown">
                    <div 
                      className="dropdown-header"
                      onClick={() => toggleDropdown(index)}
                    >
                      <h4>{type.title}</h4>
                      <span className="dropdown-icon">
                        {openDropdown === index ? <FaChevronUp /> : <FaChevronDown />}
                      </span>
                    </div>
                    {openDropdown === index && (
                      <div className="dropdown-content">
                        <p>{type.description}</p>
                        <div className="therapy-icons">
                          {type.icons.map((iconData, iconIndex) => (
                            <div 
                              key={iconIndex}
                              className="therapy-icon"
                              onMouseEnter={() => setHoveredIcon(`${index}-${iconIndex}`)}
                              onMouseLeave={() => setHoveredIcon(null)}
                            >
                              <iconData.icon />
                              {hoveredIcon === `${index}-${iconIndex}` && (
                                <div className="icon-tooltip">
                                  {iconData.tooltip}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Psicoterapia en Linea */}
      <section className="service-section terapia-familiar" id='psicoterapia-linea'>
        <div className="container">
          <div className="service-header">
            <div className="service-icon familia">
              <span><FaHouse color='white'/></span>
            </div>
            <h2>Psicoterapia en Línea</h2>
          </div>
          
          <div className="service-content reverse">
            <div className="service-info">
              <p className="service-description">
                Ofrecemos un acompañamiento profesional y humano a distancia, dirigido
                a personas desde la adolescencia hasta la tercera edad. Este servicio brinda
                orientación y apoyo en la vida cotidiana, abordando problemáticas
                culturales, sociales, económicas y emocionales, así como el seguimiento de
                tratamientos previamente establecidos y diagnosticados. Resulta
                especialmente útil para quienes atraviesan procesos migratorios,
                experiencias de la vida foránea o cambios educativos y laborales que
                requieren toma de decisiones importantes en la vida adulta. También se
                acompaña a parejas que construyen vínculos interculturales, ayudándolas a
                enfrentar los desafíos que surgen al integrar tradiciones, valores y
                expectativas de distintos países. La psicoterapia en línea facilita el acceso
                desde cualquier lugar del mundo, permitiendo recibir ayuda oportuna,
                trabajar en la prevención y favorecer la detección temprana de dificultades,
                siempre en un espacio seguro, cercano y confidencial.
              </p>
              <div className="therapy-icons">
                {psicoterapiaLineaIcons.map((iconData, iconIndex) => (
                  <div 
                    key={iconIndex}
                    className="therapy-online-icon"
                    onMouseEnter={() => setHoveredIcon(`online-${iconIndex}`)}
                    onMouseLeave={() => setHoveredIcon(null)}
                  >
                    <iconData.icon />
                    {hoveredIcon === `online-${iconIndex}` && (
                      <div className="icon-tooltip">
                        {iconData.tooltip}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="service-image">
              <img 
                src="https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                alt="Psicoterapia en Línea" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Duelo */}
      <section className="service-section terapia-pareja" id="duelo">
        <div className="container">
          <div className="service-header">
            <div className="service-icon pareja">
              <span><FaHeart color='white'/></span>
            </div>
            <h2>Duelo</h2>
          </div>
          
          <div className="service-content">
            <div className="service-image">
              <img 
                src="https://images.pexels.com/photos/4101137/pexels-photo-4101137.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" 
                alt="Terapia de Pareja" 
              />
            </div>
            <div className="service-info">
              <p className="service-description">
                Ofrecemos un acompañamiento cálido y humano en procesos de pérdida,
                dirigido a los integrantes de la familia, y personas cercanas que han sufrido
                la pérdida de un ser querido. Brindamos atención inmediata para contener
                el impacto emocional y familiar, con un espacio centrado en la comprensión,
                la empatía y el apoyo cercano. La terapia de duelo busca ayudar a transitar el
                dolor, afrontar las problemáticas emocionales derivadas y encontrar sentido
                en medio de la pérdida. Se trabaja con un enfoque breve, práctico y sensible,
                ofreciendo herramientas que favorecen la aceptación y el fortalecimiento
                personal en cada etapa del proceso.
              </p>
              
              <div className="therapy-icons">
                {dueloIcons.map((iconData, iconIndex) => (
                  <div 
                    key={iconIndex}
                    className="duelo-icon"
                    onMouseEnter={() => setHoveredIcon(`duelo-${iconIndex}`)}
                    onMouseLeave={() => setHoveredIcon(null)}
                  >
                    <iconData.icon />
                    {hoveredIcon === `duelo-${iconIndex}` && (
                      <div className="icon-tooltip">
                        {iconData.tooltip}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Neuropsicología Deportiva */}
      <section className="service-section terapia-familiar" id='neuropsicologia-deportiva'>
        <div className="container">
          <div className="service-header">
            <div className="service-icon">
              <span><FaBrain color='white'/></span>
            </div>
            <h2>Neuropsicología Deportiva</h2>
          </div>
          
          <div className="service-content">
            <div className="service-info">
              <p className="service-description">
                Ofrecemos un centro de entrenamiento neuropsicológico dirigido a
                deportistas y atletas, desde las edades iniciales hasta el nivel profesional.
                Entrenamos directamente el cerebro del atleta como parte de un proceso
                integral que complementa la preparación física y técnica de su deporte. A
                través de ejercicios especializados se fortalecen funciones como la atención,
                la memoria, la velocidad de procesamiento y respuesta, la inhibición y la
                gestión de la información. Este entrenamiento no solo optimiza el
                rendimiento deportivo, sino que también repercute positivamente en otras
                áreas de la vida, como el desempeño escolar, la madurez y los desafíos del
                día a día. Además, constituye la base para el control de emociones,
                favoreciendo una actitud deportiva madura, equilibrada y adecuada frente a
                los retos de la competencia y del desarrollo personal.
              </p>
              
              <div className="therapy-icons">
                {neuropsicologiaIcons.map((iconData, iconIndex) => (
                  <div 
                    key={iconIndex}
                    className="therapy-icon-neuropsicologia"
                    onMouseEnter={() => setHoveredIcon(`neuropsicologia-${iconIndex}`)}
                    onMouseLeave={() => setHoveredIcon(null)}
                  >
                    <iconData.icon />
                    {hoveredIcon === `neuropsicologia-${iconIndex}` && (
                      <div className="icon-tooltip">
                        {iconData.tooltip}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="service-image">
              <img 
                src="https://images.pexels.com/photos/416809/pexels-photo-416809.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Neuropsicología Deportiva" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* VITAE */}
      <section id='VITAE' className="service-section">
        <div className="container">
          <div className="service-header">
            <div className="service-icon familia">
              <span><FaUserGraduate color='white'/></span>
            </div>
            <h2>VITAE Orientación Vocacional</h2>
          </div>
          
          <div className="service-content">
            <div className="service-image">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Orientación Vocacional"
              />
            </div>
            <div className="service-info">
              <p className="service-description">
                Espacio de acompañamiento para descubrir y potenciar tus intereses, habilidades y metas académicas, brindando herramientas que te ayuden a tomar decisiones informadas sobre tu futuro profesional.
              </p>
              
              <div className="psicoterapia-types">
                {vitaeTypes.map((type, index) => (
                  <div key={index} className="psicoterapia-dropdown">
                    <div 
                      className="dropdown-header"
                      onClick={() => toggleDropdown(index)}
                    >
                      <h4>{type.title}</h4>
                      <span className="dropdown-icon">
                        {openDropdown === index ? <FaChevronUp /> : <FaChevronDown />}
                      </span>
                    </div>
                    {openDropdown === index && (
                      <div className="dropdown-content">
                        <p>{type.description}</p>
                        <div className="therapy-icons">
                          {type.icons && type.icons.map((iconData, iconIndex) => (
                            <div 
                              key={iconIndex}
                              className="therapy-online-icon-mini"
                              onMouseEnter={() => setHoveredIcon(`Orientación Vocacional-${index}-${iconIndex}`)}
                              onMouseLeave={() => setHoveredIcon(null)}
                            >
                              <iconData.icon />
                              {hoveredIcon === `Orientación Vocacional-${index}-${iconIndex}` && (
                                <div className="icon-tooltip">
                                  {iconData.tooltip}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Juventud en la diversidad*/}
      <section className="service-section terapia-familiar" id='juventud-diversidad'>
        <div className="container">
          <div className="service-header">
            <div className="service-icon pareja">
              <span><FaHandHoldingHeart color='white'/></span>
            </div>
            <h2>Juventud en la Diversidad</h2>
          </div>
          
          <div className="service-content">
            <div className="service-info">
              <p className="service-description">
                Ofrecemos atención psicológica especializada a personas con diversidad
                como autismo, síndrome de Down, TDAH y retrasos en el desarrollo.
                Nuestro trabajo se centra en brindar herramientas prácticas y
                personalizadas que favorezcan la autonomía, la comunicación, la
                autorregulación y la adaptación a los retos del día a día. Además,
                acompañamos a las familias y cuidadores a través de espacios de
                psicoeducación, donde reciben recursos y estrategias que les permiten
                comprender mejor a sus seres queridos y apoyarlos en su desarrollo.
                Nuestro enfoque integral busca potenciar el bienestar, la inclusión y la
                calidad de vida de cada persona y su entorno.
              </p>
              
              <div className="therapy-icons">
                {juventudIcons.map((iconData, iconIndex) => (
                  <div 
                    key={iconIndex}
                    className="duelo-icon"
                    onMouseEnter={() => setHoveredIcon(`juventud-${iconIndex}`)}
                    onMouseLeave={() => setHoveredIcon(null)}
                  >
                    <iconData.icon />
                    {hoveredIcon === `juventud-${iconIndex}` && (
                      <div className="icon-tooltip">
                        {iconData.tooltip}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="service-image">
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Juventud en la Diversidad" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Charlas y Talleres */}
      <section id='charlas-talleres' className="service-section">
        <div className="container">
          <div className="service-header">
            <div className="service-icon">
              <span><FaChalkboardTeacher color='white'/></span>
            </div>
            <h2>Charlas y Talleres</h2>
          </div>
          
          <div className="service-content">
            <div className="service-image">
              <img 
                src="https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Charlas y Talleres"
              />
            </div>
            <div className="service-info">
              <p className="service-description">
                Nuestras charlas y talleres están diseñados para brindar espacios de aprendizaje, reflexión y crecimiento personal. Abordamos temas diversos como la independencia familiar, el manejo escolar del autismo, la neuropsicología deportiva, la educación en libertad con autonomía y los desafíos propios de la juventud.
              </p>
              
              <div className="psicoterapia-types">
                {charlasTalleresTypes.map((type, index) => (
                  <div key={index} className="psicoterapia-dropdown">
                    <div 
                      className="dropdown-header"
                      onClick={() => toggleDropdown(index)}
                    >
                      <h4>{type.title}</h4>
                      <span className="dropdown-icon">
                        {openDropdown === index ? <FaChevronUp /> : <FaChevronDown />}
                      </span>
                    </div>
                    {openDropdown === index && (
                      <div className="dropdown-content">
                        <p style={{ whiteSpace: "pre-line" }}>{type.description}</p>
                        {type.bullets && (
                          <div className='service-features'>
                            {type.bullets.map((bullet, bulletIndex) => (
                              <div key={bulletIndex} className="feature-item">
                                <div className="feature-bullet"></div>
                                <span>{bullet}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        <p style={{ whiteSpace: "pre-line"}}>{type.finalDescription}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Adicionales
      <section className="servicios-adicionales">
        <div className="container">
          <h2 className="section-title">Servicios Adicionales</h2>
          <div className="adicionales-grid">
            <div className="adicional-card">
              <div className="adicional-icon">
                <span><FaLaptop color='white'/></span>
              </div>
              <h3>Terapia Remota</h3>
              <p>Sesiones virtuales desde la comodidad de tu hogar</p>
            </div>
            <div className="adicional-card">
              <div className="adicional-icon emergencia">
                <span><FaCalendar color='white'/></span>
              </div>
              <h3>Consultas de Emergencia</h3>
              <p>Atención inmediata en situaciones de crisis</p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}

export default ServiceDetails