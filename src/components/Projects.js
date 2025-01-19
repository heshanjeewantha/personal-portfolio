import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/cricket.webp";
import projImg2 from "../assets/img/Screenshot 2024-06-29 004742.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "CricSL - Cricket Management System",
      description: "MERN Stack",
      imgUrl: projImg3,
      link: "https://github.com/heshanjeewantha/online-cricket-managment-system-MERNSTACK",
      date: "Year 2, Semester 2",
      skills: "React.js · MongoDB · Express.js · Node.js",
    },
    {
      title: "User Management System",
      description: "React.js & Spring Boot",
      imgUrl: projImg3,
      link: "https://github.com/heshanjeewantha/Full-Stack-Spring-Boot-and-React-CRUD",
      date: "Nov 2024",
      skills: "React.js · Spring Boot · Spring Framework · Bootstrap",
    },
    {
      title: "Note Express",
      description: "Task Management Application (Kotlin)",
      imgUrl: projImg3,
      link: "https://github.com/heshanjeewantha/NoteExpress-Androidapp",
      date: "May 2024",
      skills: "Kotlin · SQLite · Android Studio",
    },
    {
      title: "Online Recipe Management System",
      description: "PHP, MySQL, HTML, CSS",
      imgUrl: projImg3,
      link: "https://github.com/heshanjeewantha/IWT-PROJECT-",
      date: "Apr 2023 - May 2023",
      skills: "PHP · HTML5 · CSS · PhpMyAdmin · MySQL",
    },
    {
      title: "Battleship Blitz",
      description: "Kotlin Game Development",
      imgUrl: projImg3,
      link: "https://github.com/heshanjeewantha/ship-game-kotlin",
      date: "Year 2, Semester 2",
      skills: "Kotlin · Android Studio · Game Development",
    },
    {
      title: "ChannelFast",
      description: "Java MVC · MySQL · Apache Tomcat · HTML5",
      imgUrl: projImg3,
      link: "https://github.com/heshanjeewantha/channelfast--java",
      date: "Year 2, Semester 1",
      skills: "Java MVC · MySQL · Apache Tomcat · HTML5",
    },
    {
      title: "GARBAGE MANAGEMENT SYSTEM",
      description: "react.js,node js,express js,MongoDB",
      imgUrl: projImg3,
      link: "https://github.com/heshanjeewantha/csse-update",
      date: "Year 3, Semester 1",
      skills:  "react.js .expressjs .MongoDB",
    },
    {
      title: "free e learning  App",
      description: "flutter,node.js,mongodb",
      imgUrl: projImg3,
      link: "https://github.com/heshanjeewantha/e-learning-app-flutter",
      date: "Year 3, Semester 1",
      skills:  "flutter,node.js,mongodb",
    },
   
   
   ,
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={isVisible ? "animate__animated animate__fadeIn" : ""}
                >
                  <h2>Projects & Certificates</h2>
                  <p>
                    Below are some of the noteworthy projects I have worked on . 
                    Click on the images to explore the details and source code of each project.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? "animate__animated animate__slideInUp" : ""}
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <Col md={4} key={index}>
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <ProjectCard {...project} />
                                </a>
                              </Col>
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <a 
                          href="https://www.linkedin.com/in/heshan-jeewantha-83a707289/details/certifications/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{ color: 'purple', fontSize: 'large' }}
                        >
                           To see certificates, click here
                        </a>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Other relevant details coming soon...</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="Background Design"
      ></img>
    </section>
  );
};
