import Layout from '../components/layout'
import {skills, experiences,projects} from '../profile' 


const Index = () => (
    <Layout>
      
      {/**Header tarjeta */}
    <header className="row">
        <div className="col-md-12">
            <div className="card card-body bg-secondary text-light">
                <div className="row">
                    <div className="col-md-4">
                        <img src="perfil.jpg" className="img-fluid"/>

                    </div>
                    <div className="col-md-8">
                        <h3>Front-End Developer</h3>
                        <h1>Junior Rotela</h1>
                        <p>Estudiante de Ingeniería con
                            conocimientos en Desarrollo
                            de Software y Manejo de
                            Sistemas Informáticos. Experiencia en uso de diferentes herramientas informaticas Para Oficinas, al igual que lenguajes de Programacion Dispuesto a Aprender, Superarse y Crecer Profesionalmente. </p>
                            <a href="./blog" className="btn btn-light">Contactar</a>
                    </div>
                </div>

            </div>

        </div>
    </header>

    {/***Segunda seccion */}
    <div class="row py-2">
                <div className="col-md-4">
                            <div className="card bg-light">
                                    <div className="card-body">
                                        <h1>Habilidades</h1>
                                    
                                            {
                                               skills.map(({ skills, percentage }, i) => (
                                                <div className="py-3" key={i}>
                                                  <h5>{skills}</h5>
                                                  <div className="progress ">
                                                    <div
                                                      className="progress-bar"
                                                      role="progressbar"
                                                      style={{ width: `${percentage}%` }}>

                                                         </div>
                                                    </div>
                                                        </div>
                                                ) )
                                            }
                                        
                                </div>
                            </div>            
                                
                      </div>
                        
                                <div className="col-md-8 py-2">
                            <div className="card bg-light">
                                <div className="card-body">
                                    <h1>Experiencia</h1>
                                    <ul>
                                        {
                                            experiences.map(({titulo,descripcion,desde,hasta}, index) => (
                                                <li key={index}>
                                            <h3>{titulo}</h3>
                                            <h5>{desde}-{hasta}</h5>
                                            <h5></h5>
                                            <p>{descripcion}</p>

                                        </li>
                                            ))
                                        }
                                    </ul>

                                </div>
                            </div>
                        </div>

           
    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div className="card card-body bg-dark">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <h1 className="text-center text-light">Portafolio</h1>
                                            </div>
                                         
                                             {projects.map(({ nombre, descripcion, imagen,URL}, index) => (
                                                <div className="col-md-4 p-2" key={index}>
                                                  <div className="card h-100">
                                                    <div className="overflow">
                                                      <img src={`/${imagen}`}  alt=""
                                                        className="card-img-top" />
                                                    </div>
                                                    <div className="card-body">
                                                      <h3>{nombre}</h3>
                                                      <p>{descripcion}</p>
                                                      <a href={URL}className="btn btn-dark">Visitar</a>
                                                    </div>
                                                  </div>
                                                </div>
                                                
                                              ))}
                                               <div className="col-md-12 mt-4">
                                                    <div className="text-center">
                                                
                                                       <a href="/github" className="btn btn-outline-light">Mas Proyectos</a>
                                                
                                                </div>
                                            </div>
                                              
                                        </div>
                                 </div>
                                 
                            </div>
                    </div>






    </Layout>
)

export default Index;