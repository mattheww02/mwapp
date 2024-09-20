import React from 'react';
import Modal from './Modal';
import aoImg from '../assets/img/projects/autoosint.png';
import auctionImg from '../assets/img/projects/auctionbot.png';
import tilsImg from '../assets/img/projects/tils.png';
import tilsOverlayImg from '../assets/img/projects/digipath_overlay.png';
import sentImg from '../assets/img/projects/sent.png';
import compilerImg from '../assets/img/projects/compiler.png';
import gameImg from '../assets/img/projects/game.png';
import gameplayGif from '../assets/img/projects/gameplay.gif';
import moreGameplayGif from '../assets/img/projects/more_gameplay.gif';
import rocketGameplayGif from '../assets/img/projects/rocket.gif';
import aoGuiImg from '../assets/img/projects/ao_ui.png';
import aoInput from '../assets/img/projects/ao_input.png';
import sentMap from '../assets/img/projects/sent_map.png';
import sentGraph from '../assets/img/projects/sent_graph.png';

const ModalList = () => {
  const modals = [
    {
        id: 'modal1',
        title: 'AutoOSINT',
        content: (
            <>
                <p style={{ textAlign: "justify" }}>
                    AutoOSINT is a user-friendly desktop app capable of performing image geolocation OSINT by identifying various visual clues 
                    in an image. This includes detecting famous landmarks, road signs, mountains and car number plates.
                </p>
                <img src={aoInput} alt="AutoOSINT Results Page" className="img-fluid mb-4" />
                <p style={{ textAlign: "justify" }}>
                    It's built with Electron, Django and React to make it easily portable to the web.
                    We used APIs from cloud services including AWS, GCP and Azure to make the image analysis process fast and robust.
                </p>
                <img src={aoGuiImg} alt="AutoOSINT Results Page" className="img-fluid mb-4" />
                <p style={{ textAlign: "justify" }}>
                    Integration with OpenStreetMaps allows users to use an interactive map to see AutoOSINT's predictions as they're calculated.
                </p>
                <p style={{ textAlign: "justify" }}>
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
                <img src={auctionImg} alt="Auction Bot" className="img-fluid mb-4" />
                <p style={{ textAlign: "justify" }}>
                    This bot is a Python script designed to play an auction game. The rules to the game are as follows:
                </p>
                <p style={{ textAlign: "justify" }}>
                    <ul>
                        <li>There are 200 rounds. Each round, a painting is put up for sale. The order in which the paintings are sold is decided randomly at the start of the game.</li>
                        <li>Each agent starts the game with a budget of 1001. Every agent bids simultaneously, once per round. The highest bidder each round wins the painting and pays the amount they bid.</li>
                        <li>The game ends when a player's painting collection includes paintings from artists such that they have three paintings each from two artists and one each from another two.</li>
                    </ul>
                    Agents have access only to their and their opponents' current budgets and collections, as well as the order in which the paintings will be sold.
                    My bot takes a unique approach to the game: first, it constructs a dependency graph to calculate which paintings will allow it to win in the fewest number of rounds.
                    Next, it applies the critical path method (CPM) and the program evaluation and review technique (PERT) to adjust bids for each painting based on its criticality for winning the game.
                </p>   
                <p style={{ textAlign: "justify" }}>
                    This strategy, inspired by project management techniques, was extremely successful and was able to defeat most other bot strategies - thanks to its ability to appropriately prioritise and balance both short and long-term success.
                    View the report <a href={`${process.env.PUBLIC_URL}/auction_bot_report.pdf`}>here</a> to read about the strategy in more detail.
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
                <p style={{ textAlign: "justify" }}>
                    Tumour infiltrating lymphocytes (TILs) are white blood cells that leave the bloodstream to attack cancerous tumours.
                    Their presence is often associated with better outcomes for patients.
                    This project involved building a machine learning pipeline in Python to detect the presence of TILs in a tissue sample in order to help doctors give prognoses to cancer patients.
                </p>
                <img src={tilsOverlayImg} alt="Annotated TILS Regions" className="img-fluid mb-4" />
                <p style={{ textAlign: "justify" }}>
                    The training set used consists of a small number of multi-gigabit labelled images.
                    To address the small number of samples, the images were split into segments in a bootstrap-aggregating ('bagging') approach.
                    The image segments were then used to train a convolutional neural network with PyTorch.
                    Finally, results were aggregated using a random forest regression model from Scikit-learn.
                </p>
                <p style={{ textAlign: "justify" }}>
                    After training, the pipeline was able to achieve impressive results on the validation data.
                    To see further details, read the report <a href={`${process.env.PUBLIC_URL}/digipath_report.pdf`}>here</a>.
                </p>
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
                <p style={{ textAlign: "justify" }}>
                    For my undergraduate dissertation, I built a sentiment classifier for political news articles.
                    It takes a combined approach with Word2Vec semantic word embeddings, an autoencoder and a random forest classifier.
                    Findings were visualised using tools from MatPlotLib and Tableau.
                </p>
                <img src={sentGraph} alt="Sentiment Classifier" className="img-fluid mb-4" />
                <p style={{ textAlign: "justify" }}>
                    There is lots of information we can extract from the model's outputs.
                    For example, we can use text summarisation to filter the articles by location.
                    This can give us insight into how different authors and publishers feel about different places in the world.
                </p>
                <img src={sentMap} alt="Sentiment Map" className="img-fluid mb-4" />
                <p style={{ textAlign: "justify" }}>
                    The entire data pipeline was implemented using Python: Scikit-learn, Pandas, BeautifulSoup and TensorFlow.
                    Read more about the implementation in the final report <a href={`${process.env.PUBLIC_URL}/sentiment_analysis_report.pdf`}>here</a>.
                </p>
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
                <p style={{ textAlign: "justify" }}>
                    This project involved using C++ to build an LL(2) recursive descent parser and compiler for a subset of the C programming language.
                    The parser implements logical and arithmetic operations, variable assignments, function declarations and definitions and control flow statements.
                    It also produces an abstract syntax tree as a visual aid for the user.
                    This project was achieved using the LLVM library for C++.
                </p>
                <p>
                    Download the project <a href={`${process.env.PUBLIC_URL}/c_compiler.zip`} download>here</a>.
                </p>
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
                <img src={rocketGameplayGif} alt="Gameplay GIF" className="img-fluid mb-4" />
                <p style={{ textAlign: "justify" }}>
                    Fight enemies, explore dungeons and find powerful weapons in this infinite 2D shooting game!
                    Select one of five characters with special attributes to fight robots, skeletons and plants in an endless series of procedurally generated levels.
                    The levels get progressively harder as more enemies appear, but the player also has the chance to find and pick up better weapons including shotguns, miniguns, rocket launchers and flame throwers.
                    There are eight different weapons and two environment types, each of which features unique level generation procedures.
                    Players who get a high score are able to post it to the locally-stored scoreboard.
                </p>
                <p style={{ textAlign: "justify" }}>
                    This project was created using the MonoGame framework for C#.
                    It features efficient implementations of level generation, sprite animation, collision detection, enemy pathfinding and field of vision to provide a fun and responsive user experience. <a href={`${process.env.PUBLIC_URL}/shooter_game.zip`} download>Click here</a> to download it!
                </p> 
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
