import React from "react";
import InicioStyle from "./InicioStyle.css";


function Cartita(props){
    return (
        <>
            <div className="cartita">
                <h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16">
                <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                </svg>
                </h2>
                <h6>{props.name}</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at rutrum nulla, eu fringilla felis. Phasellus id tellus nibh. Morbi nec bibendum turpis.</p>
            </div>
        </>
    )
}

class Inicio extends React.Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
             <>
                <div id="carouselExampleCaptions " className="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src="https://image.shutterstock.com/image-photo/engineer-technician-watching-team-workers-600w-1493369789.jpg" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <div className="carrusel">
                            <h2>MEET YOUR</h2>
                            <h2>HOME SERVICE</h2>
                            <h2>EXPERTS</h2>
                            <p>WE ARE LICENSED PROFESIONAL WITH OVER 21 YEARS EXPERIENCE</p>
                            <span>GET AN ESTIMATE</span>
                            </div>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src="https://image.shutterstock.com/image-photo/two-specialists-inspect-commercial-industrial-600w-1712804020.jpg" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <div className="carrusel">
                            <h2>HANDYMAN</h2>
                            <h2>REMODELING</h2>
                            <h2>SERVICES</h2>
                            <p>WE ARE LICENSED PROFESIONAL WITH OVER 21 YEARS EXPERIENCE</p>
                            <span>GET AN ESTIMATE</span>
                            </div>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src="https://image.shutterstock.com/image-photo/female-worker-road-construction-600w-724291249.jpg" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <div className="carrusel">
                            <h2>WE GUARANTEE</h2>
                            <h2>THE HIGHEST</h2>
                            <h2>QUALITY</h2>
                            <h2>WORKMANSHIP</h2>
                            <p>WE ARE LICENSED PROFESIONAL WITH OVER 21 YEARS EXPERIENCE</p>
                            <span>GET AN ESTIMATE</span>
                            </div>
                        </div>
                        </div>
                        <div className="carousel-item">
                        <img src="https://image.shutterstock.com/image-photo/three-industrial-engineers-talk-factory-600w-761908036.jpg" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <div className="carrusel">
                            <h2>HANDYMAN</h2>
                            <h2>REMODELING</h2>
                            <h2>SERVICES</h2>
                            <p>WE ARE LICENSED PROFESIONAL WITH OVER 21 YEARS EXPERIENCE</p>
                            <span>GET AN ESTIMATE</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                <div className="container divSec">
                    <div className="row">
                        <div className="col">
                            <h4>What We Do</h4>
                            <h2>THE BEST HANDYMAN NEAR YOU</h2>    
                        </div>
                        <div className="col">
                            <h3>OUR MISSION</h3>
                            <p>Our goal is to design places that make a positive difference in the world. Thats why people are at the heart of everything we do.</p>  
                            <h3>OUR VISION</h3>
                            <p>Our work enlivens neighborhoods, builds communities, energizes the citizenry, and respects and protects our planet.</p>
                        </div>
                        <div className="col">
                            <h5>if you have any questions or need help, feel free to contact our team</h5>
                            <h6>+(84) 1755 -123688</h6>
                            <span>SCHEDULE A SERVICE</span>   
                        </div>    
                    </div>
                </div>
                <div className="container divTer">
                    <div className="row">
                        <div className="col">
                           <div className="cuad uno">
                               <div>
                                <h4>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-exchange" viewBox="0 0 16 16">
                                <path d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z"/>
                                </svg>
                                </h4>
                                <h4>MANTAIN</h4> 
                                
                                </div>
                            </div>
                            
                        </div>
                        <div className="col ">
                            <div className="cuad dos">
                                <div>
                                <h4>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hammer" viewBox="0 0 16 16">
                                <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5.009 5.009 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334z"/>
                                </svg>
                                </h4>
                                <h4>IMPROVE</h4>
                                
                                </div>
                            </div>
                        </div>
                        <div className="col ">
                            <div className="cuad tres">
                                <div>
                                <h4>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cone" viewBox="0 0 16 16">
                                    <path d="M7.03 1.88c.252-1.01 1.688-1.01 1.94 0l2.905 11.62H14a.5.5 0 0 1 0 1H2a.5.5 0 0 1 0-1h2.125L7.03 1.88z"/>
                                </svg>
                                </h4>
                                <h4>REPAIR</h4>
                                </div>
                            </div>
                        </div>    
                    </div>    
                </div>
                <div className="cuarto">
                    <h3>Why Chose Us </h3>
                    <h5>CORE VALUES</h5>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                            <Cartita name="VERIFIED PROFESSIONALS"/>  
                            </div>
                            <div className="col">
                            <Cartita name="INSURED WORK"/>   
                            </div>
                            <div className="col">
                            <Cartita name="SATISFACTION GUARANTEED"/>  
                            </div>
                            <div className="col">
                              <Cartita name="EASY PAYMENT"/>  
                            </div>    
                        </div>    
                    </div>    
                </div>
                <div className="quinto">
                    <h6>Our Works</h6>
                    <h2>RECENTLY COMPLETED PROJECTS</h2>
                    <div className="row">
                       <div className="col">
                        <div>
                         <img src="https://demo2wpopal.b-cdn.net/fixtor/wp-content/uploads/2021/09/projects-1-600x480.jpg"/>
                         <h3>HOUSE PAINTING</h3>
                         <span>SEPTEMBRE 15,2021</span>    
                        </div>   
                        </div>
                       <div className="col">
                       <div>
                         <img src="https://demo2wpopal.b-cdn.net/fixtor/wp-content/uploads/2021/09/projects-2-600x480.jpg"/>
                         <h3>WINDOW FIX</h3>
                         <span>SEPTEMBRE 15,2021</span>    
                        </div>   
                        </div>     
                    </div>    
                </div>
             </>
        );
    }
}

export default Inicio;