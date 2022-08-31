import { useEffect, useRef, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { keys, timer } from '../settings/settings.js';
import Keyboard from './Keyboard.js';

import { getItem } from 'local-data-storage';

// Defining Variables
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

function setTimer() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  const timerSpan = document.getElementById('timer');

  if (timerSpan) {
    timerSpan.innerText =
      minutes.toString().padStart(2, '0') +
      ':' +
      seconds.toString().padStart(2, '0');
  }
}

function Game() {
  let intervalId: NodeJS.Timer;
  const intervalRef = useRef(0);
  const [finalCorrectKeys, setFinalCorrectKeys] = useState(0);
  const [finalWrongKeys, setFinalWrongKeys] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Timer Interval
  const interval = () => {
    intervalId = setInterval(() => {
      updateTimer();
    }, 1000);
  };

  function updateTimer() {
    setTimer();

    if (time <= 0) {
      endGame();
      return;
    }

    time--;
  }

  function startGame() {
    interval();
    selectRandomKey();
    setIsPlaying(true);
  }

  function endGame() {
    // Clear Interval
    clearInterval(intervalRef.current);
    time = timer * 60;

    // Score Screen
    setFinalCorrectKeys(correctKeys);
    setFinalWrongKeys(wrongKeys);

    const scoreTrigger = document.getElementById('scoreScreen');
    scoreTrigger?.click();

    // Reset Scores
    document.querySelector('.selected')?.classList.remove('selected');
    correctKeys = 0;
    wrongKeys = 0;
    setIsPlaying(false);
    setTimeout(() => {
      setTimer();
    }, 2000);
  }

  useEffect(() => {
    if (!isPlaying) {
      console.log(timer);
      console.log(getItem('timer')?.value);
      if (getItem('timer')?.value !== timer)
        time = getItem('timer')?.value * 60;

      setTimer();
    }

    const handleKeyPress = (e: KeyboardEvent) => {
      e.preventDefault();

      // Pressed Key
      const pressedKeyElement = document.getElementById(e.key.toUpperCase());
      const pressedKey = e.key.toLowerCase();

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
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    return () => {
      clearInterval(intervalId);
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  return (
    <div className="pb-40 no-select">
      <Dialog.Root>
        <Dialog.Trigger id="scoreScreen" />
        <Dialog.Portal>
          <Dialog.Content className="border-2 rounded-xl absolute top-[50%] left-[50%] min-w-[40%] min-h-[65%] translate-y-[-50%] translate-x-[-50%] bg-slate-600 px-12 py-12 shadow-2xl">
            <Dialog.Title className="text-2xl font-bold text-white">
              Here's your score!
            </Dialog.Title>
            <Dialog.Description className="text-lg text-gray-300 mt-4">
              During the game you have pressed{' '}
              <span className="text-green-300">
                <span id="correctKeys">{finalCorrectKeys}</span>{' '}
                {finalCorrectKeys > 1 ? <>Correct keys</> : <>Correct key</>}
              </span>{' '}
              and{' '}
              <span className="text-red-300">
                <span id="wrongKeys">{finalWrongKeys}</span>{' '}
                {finalWrongKeys > 1 ? <>Wrong keys</> : <>Wrong key</>}
              </span>
              .
            </Dialog.Description>
            <div className="flex absolute bottom-[5%] right-[5%] space-x-4">
              <Dialog.Root>
                <Dialog.Trigger>
                  <button className="button">Share Score</button>
                </Dialog.Trigger>
                <Dialog.Portal>
                  <Dialog.Content className="border-2 rounded-xl absolute top-[50%] left-[50%] w-[20%] h-[25%] translate-y-[-50%] translate-x-[-50%] bg-slate-600 px-8 py-6 shadow-2xl">
                    <Dialog.Title className="text-2xl font-bold text-white">
                      Sharing your score!
                    </Dialog.Title>
                    <Dialog.Description className="text-lg text-gray-300 mt-4">
                      By sharing your score you delete previous scores that
                      you've shared, so that only 1 score per person can be on
                      the ranking table.
                    </Dialog.Description>
                    <div className="flex absolute bottom-[5%] right-[5%] space-x-4">
                      <Dialog.Close asChild>
                        <button className="button">Cancel</button>
                      </Dialog.Close>
                      <button className="button">Confirm</button>
                    </div>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>

              <Dialog.Close asChild>
                <button className="button">Close</button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <div className="flex justify-center items-center pb-8">
        <span
          className="timer"
          id="timer"
        >
          00:00
        </span>
      </div>

      <Keyboard />

      <div className="flex justify-center items-center pt-8 ">
        <button
          className="button disabled:bg-slate-500"
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
