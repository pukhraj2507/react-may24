/* eslint-disable no-unused-vars */

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandRock, faHandPaper, faHandScissors } from '@fortawesome/free-solid-svg-icons';

class RockPaperScissor extends Component {
  constructor(props){
    super(props);
    this.state = {
        playerVal: null,
        computerVal: null,
        playerScore: 0,
        computerScore: 0,
    };
  }

  logic = (playerVal, computerVal) => {
    if (playerVal === computerVal){
        return 0;
    } else if((playerVal === 'ROCK' && computerVal === 'SCISSORS') || 
            (playerVal === 'SCISSORS'&& computerVal === 'PAPER') ||
            (playerVal === 'PAPER' && computerVal === 'ROCK')
    ){
        return 1;
    } else {
        return -1;
    }
  };

  decision = (playerChoice) => {
    const choices = ['ROCK', 'PAPER', 'SCISSORS'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const value = this.logic(playerChoice, computerChoice);
    if (value === 1){
        console.log("Hello");
        this.setState({
            playerVal: playerChoice,
            computerVal: computerChoice,
            playerScore: this.state.playerScore + 1
        });
    } else if(value === -1) {
        console.log("Lorem");
        this.setState({
            playerVal: playerChoice,
            computerVal: computerChoice,
            computerScore: this.state.computerScore + 1
        });
    } else {
        console.log("Ipsum");
        this.setState({
            computerVal: computerChoice,
            playerVal: playerChoice
        });
    }
  
  };

  render(){
    const {playerVal, computerVal, playerScore, computerScore} = this.state;
    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl mb-4">Welcome to Rock, Paper, Scissors Game</h1>
            <div className="flex justify-center space-x-4">
                <button onClick={() => this.decision('ROCK')} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    <FontAwesomeIcon icon={faHandRock} />
                    <span className="ml-2">Rock</span>
                </button>
                <button onClick={() => this.decision('PAPER')} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    <FontAwesomeIcon icon={faHandPaper} />
                    <span className="ml-2">Paper</span>
                </button>
                <button onClick={() => this.decision('SCISSORS')} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    <FontAwesomeIcon icon={faHandScissors} />
                    <span className="ml-2">Scissors</span>
                </button>
            </div>
            <div className="mt-8">
                <p className="text-lg">Your Choice: {playerVal}</p>
                <p className="text-lg">Computer Choice: {computerVal}</p>
                <h2 className="text-2xl mt-4">Your Score: {playerScore}</h2>
                <h2 className="text-2xl">Computer Score: {computerScore}</h2>
            </div>
        </div>
    );
  }
}

export default RockPaperScissor;
