
import { Container, Row, Col, Tab } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
import Nav from 'react-bootstrap/Nav';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import proj1 from '../assets/img/servis.png';
import proj2 from '../assets/img/tono.png';
import proj3 from '../assets/img/roomreserve.png';
import proj4 from '../assets/img/firedots.png';
import proj5 from '../assets/img/elaina.png';
import proj6 from '../assets/img/alowes.png';
import proj7 from '../assets/img/nasa.png';
import proj8 from '../assets/img/depsthink.png';
import proj9 from '../assets/img/saluddigna.png';

export const Projects = () => {

    const mobiles = [
        {
            title: "Servismedicamp",
            imgUrl: proj1,
        },

        {
            title: "Motivacion secu",
            imgUrl: proj2,
        },

        {
            title: "Room reserve",
            imgUrl: proj3,
        },

        {
            title: "Firedots",
            imgUrl: proj4,
        },

        {
            title: "Elaina",
            imgUrl: proj5,
        },

        {
            title: "Alowes Marketing Solutions",
            imgUrl: proj6,
        },

        {
            title: "Pocket U",
            imgUrl: proj7,
        },

        {
            title: "Depsthink",
            imgUrl: proj8,
        },
        {
            title: "Healthy Hive",
            imgUrl: proj9,
        },

    ];

    const webs = [
        {
            title: "Servismedicamp",
            imgUrl: proj1,
        },

        {
            title: "Motivacion secu",
            imgUrl: proj2,
        },

        {
            title: "Room reserve",
            imgUrl: proj3,
        },

        {
            title: "Firedots",
            imgUrl: proj4,
        },

        {
            title: "Elaina",
            imgUrl: proj5,
        },

        {
            title: "Alowes Marketing Solutions",
            imgUrl: proj6,
        },

        {
            title: "Pocket U",
            imgUrl: proj7,
        },

        {
            title: "Depsthink",
            imgUrl: proj8,
        },
        {
            title: "Healthy Hive",
            imgUrl: proj9,
        },

    ];

    const responsive = {
        superLargeDesktop: {
            breakpoint: {
                max: 4000,
                min: 3000
            },
            items: 5
        },

        desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 3
        },


        tablet: {
            breakpoint: {
                max: 1024,
                min: 464
            },
            items: 2
        },

        mobile: {
            breakpoint: {
                max: 464,
                min: 0
            },
            items: 1
        },

    };

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <div className="project-bx">

                            <div className="container" id="project-bx-text">
                                <h2 style={{ color: '#fff' }}>
                                    Projects
                                </h2>
                                <p style={{ color: '#fff' }}>At Softdone, we develop:</p>
                            </div>

                            <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                    <Nav.Item>
                                        <Nav.Link eventKey="first">Mobile Development</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="second">Web Development</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane eventKey="first">
                                        <Row>
                                            {
                                                <Carousel responsive={responsive} infinite={true} className="project-slider">
                                                    {
                                                        mobiles.map((project, index) => {
                                                            return (
                                                                <div className="item"
                                                                    key={index}>
                                                                    <img src={project.imgUrl} alt="anImage" />
                                                                    <h5>{project.title}</h5>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </Carousel>
                                            }
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="second">
                                        <Row>
                                            {
                                                <Carousel responsive={responsive} infinite={true} className="project-slider">
                                                    {
                                                        webs.map((web, index) => {
                                                            return (
                                                                <div className="item"
                                                                    key={index}>
                                                                    <img src={web.imgUrl} alt="anImage" />
                                                                    <h5>{web.title}</h5>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </Carousel>
                                            }
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

// import { Row, Container, Col, Tab } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
// import Nav from 'react-bootstrap/Nav';
// import project_img_1 from '../assets/img/onWeb_ControlEscolar.jpg';
// import doMas_img_1 from '../assets/img/onWeb_DoMas_Layer.png';

// import redom_img_1 from '../assets/img/onWeb_R8_PWA_Customer.png';
// import redom_img_2 from '../assets/img/onWeb_R8_Web_Shop.png';
// import redom_img_3 from '../assets/img/onWeb_R8_Mobile_App_Ambassor.png';

// import cruciart_img_1 from '../assets/img/Test-Image.png';


// import project_img_2 from '../assets/img/onWeb_creandoHeroes.jpg';
// import project_img_3 from '../assets/img/onWeb_PortalAgenda.jpg';


// import my_project_img_1 from '../assets/img/projects_Hackaton.jpg';
// import my_project_img_2 from '../assets/img/projects_DoMas.jpg';
// import my_project_img_3 from '../assets/img/projects_MexAnt.jpg';



// export const Projects = () => {

//     const onWeb = [
//         {
//             title: "Test",
//             description: "TEST",
//             imgUrl: cruciart_img_1,
//             projectUrl: "",
//         },
//         {
//             title: "Test",
//             description: "TEST",
//             imgUrl: cruciart_img_1,
//             projectUrl: "",
//         },
//         {
//             title: "Test",
//             description: "TEST",
//             imgUrl: cruciart_img_1,
//             projectUrl: "",
//         },
//         {
//             title: "Test",
//             description: "TEST",
//             imgUrl: cruciart_img_1,
//             projectUrl: "",
//         },
// {
//     title: "RedOm8 Mobile App",
//     description: "The RedOm8 mobile application is designed for internal sellers who pretend to offer service to customers, assigning balance with multiple payment methods, adding more actors as customers or sellers to the network, all from a single application. Created with Flutter, Firebase, Odoo, Python",
//     imgUrl: redom_img_3,
//     projectUrl: "https://redom8.com/",
// },
// {
//     title: "Do Mas",
//     description: "Do Mas is a mobile focused project solution to provide for the end user a pet products store, also the sellers can control the products and orders. Created with Flutter, Firebase.",
//     imgUrl: doMas_img_1,
//     projectUrl: "https://play.google.com/store/apps/details?id=com.doMas.android.abc",
// },
// {
//     title: "Ciudadanos RedOm8",
//     description: "The RedOm8 Citizens application based on the PWA (Progressive Web App) structure offers end users, i.e. those who use the telephone service, a platform to monitor their usage, acquire services, register new lines or check their history of purchases. Created with Quasar, VueJS, Firebase, Odoo, Python.",
//     imgUrl: redom_img_1,
//     projectUrl: "https://ciudadanos.vercel.app/#/",
// },
// {
//     title: "RedOm8",
//     description: "The RedOm8 web platform is the main reference of the company where the service is described, its services can be purchased and the other tools of the ecosystem can be visualized. Created with NextJs, Firebase, Odoo and Python.",
//     imgUrl: redom_img_2,
//     projectUrl: "https://redom8.com/",
// },


// {
//     title: "Control Escolar",
//     description: "A control system for postgraduate programs taught at the UASLP, it is used by all stakeholders involved in the educational process.",
//     imgUrl: project_img_1,
//     projectUrl: "https://ambiental.uaslp.mx/controlescolar",
// },

// {
//     title: "Portal Agenda Ambiental",
//     description: "Web portal linking to events, meetings, publications, activities and other information exclusive to the  department 'Agenda Ambiental' of the UASLP.",
//     imgUrl: project_img_3,
//     projectUrl: "https://ambiental.uaslp.mx/",
// },

// {
//     title: "Creando Héroes",
//     description: "Web platform that belongs to a civil association 'Creando Héroes' that connects potential donors to individuals and any group that is looking to cover a necessity.",
//     imgUrl: project_img_2,
//     projectUrl: "https://creandoheroes.com.mx/",
// },


//     ];

//     const myProjects = [
//         {
//             title: "Test",
//             description: "TEST",
//             imgUrl: cruciart_img_1,
//             projectUrl: "",
//         },
//         {
//             title: "Test",
//             description: "TEST",
//             imgUrl: cruciart_img_1,
//             projectUrl: "",
//         },
//         {
//             title: "Test",
//             description: "TEST",
//             imgUrl: cruciart_img_1,
//             projectUrl: "",
//         },
// {
//     title: "Hackaton Nasa Space Apps 2022",
//     description: "Programming contest held globally to propose real solutions to Earth and space problems provided for NASA using real information.",
//     imgUrl: my_project_img_1,
//     projectUrl:"https://2022.spaceappschallenge.org/challenges/2022-challenges/steam/teams/devsthink/project",
// },

// {
//     title: "Do Mas",
//     description: "Mobile platform to manage the inventory of a pet store, as well as the option to shop through a common user and communication between customer and buyer.",
//     imgUrl: my_project_img_2,
//     projectUrl:"https://www.figma.com/file/LI6do5Wg3uqFoUMOcGmDdZ/Do-Mas-(API-PC)?node-id=0%3A1",
// },

// {
//     title: "Mex Ant",
//     description: "Web platform on all kinds of ants in Mexico, on the same site is proposed a regional map search, a search engine by species and a forum to share information on current or new species.",
//     imgUrl: my_project_img_3,
//     projectUrl:"https://www.figma.com/file/71EhW4qS4121LUOpiMzND9/MockUp-MexAnt-DominguezPerezUlisesUriel?node-id=0%3A1",
// },

//     ];

//     return (
//         <section className="project" id="projects">
//             <Container>
//                 <Row>
//                     <Col>
//                         <h2>Explore Our Work</h2>
//                         {/* <p>Here are all the projects that I have contributed until now, please feel free to check them out, I hope you like them and I am always open to suggestions for improvement.</p> */}


//                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
//                             <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
//                                 <Nav.Item>
//                                     <Nav.Link eventKey="first">Job Collaborations</Nav.Link>
//                                 </Nav.Item>
//                                 <Nav.Item>
//                                     <Nav.Link eventKey="second">Personal proyects</Nav.Link>
//                                 </Nav.Item>
//                             </Nav>

//                             <Tab.Content>
//                                 <Tab.Pane eventKey="first">
//                                     <Row>
//                                         {
//                                             onWeb.map((project, index) => {
//                                                 return (
//                                                     <ProjectCard
//                                                         key={index}
//                                                         {...project}></ProjectCard>
//                                                 )
//                                             })
//                                         }
//                                     </Row>
//                                 </Tab.Pane>
//                                 <Tab.Pane eventKey="second">
//                                 <Row>
//                                         {
//                                             myProjects.map((project, index) => {
//                                                 return (
//                                                     <ProjectCard
//                                                         key={index}
//                                                         {...project}></ProjectCard>
//                                                 )
//                                             })
//                                         }
//                                     </Row>
//                                 </Tab.Pane>
//                             </Tab.Content>
//                         </Tab.Container>
//                     </Col>
//                 </Row>
//             </Container>
//         </section>







//     )
// }
