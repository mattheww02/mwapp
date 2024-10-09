import React from 'react';
import aoImg from '../assets/img/projects/autoosint.png';
import auctionImg from '../assets/img/projects/auctionbot.png';
import tilsImg from '../assets/img/projects/tils.png';
import sentImg from '../assets/img/projects/sent.png';
import compilerImg from '../assets/img/projects/compiler.png';
import gameImg from '../assets/img/projects/game.png';
import chessImg from '../assets/img/projects/chessbot.png';
import physicsImg from '../assets/img/projects/physics.png';
import boardImg from '../assets/img/projects/board.png';

const Projects = () => {
  return (
    <section class="page-section portfolio" id="projects">
            <div class="container">
            
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Projects</h2>
                
                <div class="divider-custom">
                    <div class="divider-custom-line" style={{ maxWidth: "15rem" }}></div>
                </div>
             
                <div class="row justify-content-center">
               
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#modal1">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white">Automated Image Geolocation</div>
                            </div>
                            <img class="img-fluid" src={aoImg} alt="..." />
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#modal9">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white">Online Whiteboard App</div>
                            </div>
                            <img class="img-fluid" src={boardImg} alt="..." />
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#modal7">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white">AI Chess Engine</div>
                            </div>
                            <img class="img-fluid" src={chessImg} alt="..." />
                        </div>
                    </div>
                   
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#modal2">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white">Auction Bid Optimisation</div>
                            </div>
                            <img class="img-fluid" src={auctionImg} alt="..." />
                        </div>
                    </div>
             
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#modal3">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white">Digital Pathology Neural Network</div>
                            </div>
                            <img class="img-fluid" src={tilsImg} alt="..." />
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#modal8">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white">Physics Simulation</div>
                            </div>
                            <img class="img-fluid" src={physicsImg} alt="..." />
                        </div>
                    </div>
                 
                    <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#modal4">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white">Sentiment Analysis of News Articles</div>
                            </div>
                            <img class="img-fluid" src={sentImg} alt="..." />
                        </div>
                    </div>
                 
                    <div class="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#modal5">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white">Recursive Descent C Compiler</div>
                            </div>
                            <img class="img-fluid" src={compilerImg} alt="..." />
                        </div>
                    </div>
                 
                    <div class="col-md-6 col-lg-4">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#modal6">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white">2D Shooter Game</div>
                            </div>
                            <img class="img-fluid" src={gameImg} alt="..." />
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default Projects;