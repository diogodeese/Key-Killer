import { useEffect, useRef } from 'react';
import { keys, timer } from '../settings/settings.js';
import Keyboard from './Keyboard.js';

// Defining Variables
let isPlaying: boolean = false;
let correctKeys: number = 0;
let wrongKeys: number = 0;
let time: number = timer * 60;

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function selectRandomKey() {
  document.querySelector('.selected')?.classList.remove('selected');
  const randomKey = keys[getRandomNumber(0, keys.length - 1)];
  const key = document.getElementById(randomKey);

  if (key) {
    key.classList.add('selected');
  } else {
    console.error('Key value is null');
  }
}

function Game() {
  const intervalRef = useRef(0);

  // Timer Interval
  const interval = () => {
    intervalRef.current = setInterval(() => {
      updateTimer();
    }, 1000);
  };

  function updateTimer() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    const timerSpan = document.getElementById('timer');

    if (timerSpan) {
      timerSpan.innerText =
        minutes.toString().padStart(2, '0') +
        ':' +
        seconds.toString().padStart(2, '0');
    }

    if (time <= 0) {
      endGame();
      return;
    }

    time--;
  }

  function startGame() {
    interval();
    selectRandomKey();
    isPlaying = true;
  }

  function endGame() {
    clearInterval(intervalRef.current);
    document.querySelector('.selected')?.classList.remove('selected');
    time = timer * 60;
    console.log('Correct Keys: ' + correctKeys);
    console.log('Wrong Keys: ' + wrongKeys);
    correctKeys = 0;
    wrongKeys = 0;
    isPlaying = false;
  }

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      e.preventDefault();

      // Pressed Key
      const pressedKeyElement = document.getElementById(e.key.toUpperCase());
      const pressedKey = e.key;

      // Current Key
      const currentKeyElement = document.querySelector('.selected');
      const currentKey = currentKeyElement?.textContent?.toLowerCase();

      // Key pressing animation
      pressedKeyElement?.classList.add('hit');
      pressedKeyElement?.addEventListener('animationend', () => {
        pressedKeyElement?.classList.remove('hit');
      });

      if (pressedKey === currentKey) {
        selectRandomKey();
        correctKeys++;
      } else if (pressedKey !== currentKey) {
        wrongKeys++;
      }
    };

    document.addEventListener('keypress', handleKeyPress);

    const intervalId = intervalRef.current;

    return () => {
      clearInterval(intervalId);
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  return (
    <div className="pb-40">
      <div className="flex justify-center items-center pb-8">
        <span
          className="timer"
          id="timer"
        >
          00:00
        </span>
      </div>

      <Keyboard />

      <div className="flex justify-center items-center pt-8">
        <button
          className="start-button"
          onClick={() => {
            startGame();
          }}
          disabled={isPlaying}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}

export default Game;
