import React from 'react';
import aoImg from '../assets/img/projects/autoosint.png';
import auctionImg from '../assets/img/projects/auctionbot.png';
import tilsImg from '../assets/img/projects/tils.png';
import sentImg from '../assets/img/projects/sent.png';
import compilerImg from '../assets/img/projects/compiler.png';
import gameImg from '../assets/img/projects/game.png';

const Projects = () => {
  const projectList = [
    {
      title: 'Automated Geolocation OSINT',
      description: 'A deep learning system to identify and geolocate street signs, car number plates, and landmarks.',
      link: 'https://github.com/your-project',
    },
    {
      title: 'Sentiment Analysis of Political News Articles',
      description: 'A deep learning model that predicts sentiment with 95% accuracy.',
      link: 'https://github.com/your-project',
    }
  ];

  return (
    <section class="page-section portfolio" id="projects">
            <div class="container">
            
                <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">Projects</h2>
                
                <div class="divider-custom">
                    <div class="divider-custom-line" style={{ maxWidth: "15rem" }}></div>
                </div>
             
                <div class="row justify-content-center">
               
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal1">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white">Automated Image Geolocation</div>
                            </div>
                            <img class="img-fluid" src={aoImg} alt="..." />
                        </div>
                    </div>
                   
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal2">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white">Auction Bid Optimisation</div>
                            </div>
                            <img class="img-fluid" src={auctionImg} alt="..." />
                        </div>
                    </div>
             
                    <div class="col-md-6 col-lg-4 mb-5">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal3">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white">Digital Pathology Neural Network</div>
                            </div>
                            <img class="img-fluid" src={tilsImg} alt="..." />
                        </div>
                    </div>
                 
                    <div class="col-md-6 col-lg-4 mb-5 mb-lg-0">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal4">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white">Sentiment Analysis of News Articles</div>
                            </div>
                            <img class="img-fluid" src={sentImg} alt="..." />
                        </div>
                    </div>
                 
                    <div class="col-md-6 col-lg-4 mb-5 mb-md-0">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal5">
                            <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                <div class="portfolio-item-caption-content text-center text-white">Recursive Descent C Compiler</div>
                            </div>
                            <img class="img-fluid" src={compilerImg} alt="..." />
                        </div>
                    </div>
                 
                    <div class="col-md-6 col-lg-4">
                        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#portfolioModal6">
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