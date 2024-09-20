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
import aoGuiImg from '../assets/img/projects/ao_ui.png';
import aoInput from '../assets/img/projects/ao_input.png';

const ModalList = () => {
  const modals = [
    {
        id: 'modal1',
        title: 'AutoOSINT',
        content: (
            <>
                <p>
                    AutoOSINT is a user-friendly desktop app capable of performing image geolocation OSINT by identifying various visual clues 
                    in an image. This includes detecting famous landmarks, road signs, mountains and car number plates.
                </p>
                <img src={aoInput} alt="AutoOSINT Results Page" className="img-fluid mb-4" />
                <p>
                    It's built with Electron, Django and React to make it easily portable to the web.
                    We used APIs from cloud services including AWS, GCP and Azure to make the image analysis process fast and robust.
                </p>
                <img src={aoGuiImg} alt="AutoOSINT Results Page" className="img-fluid mb-4" />
                <p>
                    Integration with OpenStreetMaps allows users to use an interactive map to see AutoOSINT's predictions as they're calculated.
                </p>
                <p>
                    Take a look at our <a href={`${process.env.PUBLIC_URL}/auto_osint_final_report.pdf`}>final report</a>, 
                    or my <a href={`${process.env.PUBLIC_URL}/auto_osint_solo_report.pdf`}>individual report</a>. 
                    You can also view our Github repo <a href="https://gitfront.io/r/danfredrickson/3uR1cB4TDZx5/AutomatedOSINT/">here</a>.
                </p>
            </>
        ),
        imageUrl: aoImg 
    },
    {
        id: 'modal2', 
        title: 'Auction Bot', 
        content: (
            <>
                <p>
                    <img src={auctionImg} alt="Auction Bot" className="img-fluid mb-4" />
                    View the report <a href={`${process.env.PUBLIC_URL}/auction_bot_report.pdf`}>here</a>.
                </p>
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
          <Modal title={modal.title} modalId={modal.id}>
            {modal.content}
          </Modal>
        </div>
      ))}
    </div>
  );
};

export default ModalList;
