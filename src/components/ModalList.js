import React from 'react';
import Modal from './Modal';
import aoImg from '../assets/img/projects/autoosint.png';
import auctionImg from '../assets/img/projects/auctionbot.png';
import tilsImg from '../assets/img/projects/tils.png';
import sentImg from '../assets/img/projects/sent.png';
import compilerImg from '../assets/img/projects/compiler.png';
import gameImg from '../assets/img/projects/game.png';
import gameplayGif from '../assets/img/projects/gameplay.gif';
import moreGameplayGif from '../assets/img/projects/more_gameplay.gif';

const ModalList = () => {
  const modals = [
    {
        id: 'modal1',
        title: 'AutoOSINT',
        content: (
            <>
                <img src={aoImg} alt="AutoOSINT" className="img-fluid mb-4" />
            </>
        ),
        imageUrl: aoImg 
    },
    {
        id: 'modal2', 
        title: 'Auction Bot', 
        content: (
            <>
                <img src={auctionImg} alt="Auction Bot" className="img-fluid mb-4" />
            </>
        ), 
        imageUrl: auctionImg 
    },
    { 
        id: 'modal3', 
        title: 'TILs Detection', 
        content: (
            <>
                <img src={tilsImg} alt="TILS Detector" className="img-fluid mb-4" />
            </>
        ), 
        imageUrl: tilsImg
    },
    { 
        id: 'modal4', 
        title: 'Sentiment Analysis', 
        content: (
            <>
                <img src={sentImg} alt="Sentiment Classifier" className="img-fluid mb-4" />
            </>
        ), 
        imageUrl: sentImg
    },
    { 
        id: 'modal5', 
        title: 'Mini C Compiler', 
        content: (
            <>
                <img src={compilerImg} alt="Compiler" className="img-fluid mb-4" />
            </>
        ), 
        imageUrl: compilerImg
    },
    { 
        id: 'modal6', 
        title: '2D Infinite Shooter', 
        content: (
            <>
                <img src={gameplayGif} alt="Gameplay GIF" className="img-fluid mb-4" />
                <img src={moreGameplayGif} alt="Gameplay GIF" className="img-fluid mb-4" />
                <p><a href={`${process.env.PUBLIC_URL}/shooter_game.zip`} download>Download the project!</a></p>
            </>
        ), 
        imageUrl: gameImg
    },
  ];

  return (
    <div>
      {modals.map((modal, index) => (
        <div key={index}>
          <div className="portfolio-item" data-bs-toggle="modal" data-bs-target={`#${modal.id}`}>
            <h3>{modal.title}</h3>
            <img src={aoImg} alt={modal.title} />
          </div>
          <Modal title={modal.title} modalId={modal.id}>
            {modal.content}
          </Modal>
        </div>
      ))}
    </div>
  );
};

export default ModalList;
