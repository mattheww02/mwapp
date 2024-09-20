import React from 'react';
import Modal from './Modal';
import aoImg from '../assets/img/projects/autoosint.png';
import auctionImg from '../assets/img/projects/auctionbot.png';
import tilsImg from '../assets/img/projects/tils.png';
import sentImg from '../assets/img/projects/sent.png';
import compilerImg from '../assets/img/projects/compiler.png';
import gameImg from '../assets/img/projects/game.png';

const ModalList = () => {
  const modals = [
    { id: 'modal1', title: 'AutoOSINT', content: '', imageUrl: aoImg },
    { id: 'modal2', title: 'Auction Bot', content: '', imageUrl: auctionImg },
    { id: 'modal3', title: 'TILs Detection', content: '', imageUrl: tilsImg},
    { id: 'modal4', title: 'Sentiment Analysis', content: '', imageUrl: sentImg},
    { id: 'modal5', title: 'Mini C Compiler', content: '', imageUrl: compilerImg},
    { id: 'modal6', title: '2D Infinite Shooter', content: '', imageUrl: gameImg},
  ];

  return (
    <div>
      {modals.map((modal, index) => (
        <div key={index}>
          <Modal title={modal.title} content={modal.content} imageUrl={modal.imageUrl} modalId={modal.id} />
        </div>
      ))}
    </div>
  );
};

export default ModalList;
