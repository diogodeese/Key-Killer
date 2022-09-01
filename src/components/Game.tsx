import { useEffect, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { keys, defaultTimer } from '../settings/settings.js';
import Keyboard from './Keyboard.js';

import { getItem } from 'local-data-storage';

// Defining Variables
let correctKeys = 0;
let wrongKeys = 0;
let time: number;
let initialUnix: number;
let finalUnix: number;
let fastestKeyPressed: number;

interface FinalScore {
  timer: number;
  correctKeys: number;
  correctKeysPerSecond?: number;
  wrongKeys: number;
  wrongKeysPerSecond?: number;
  fastestKeyPressed: number;
}

function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function selectRandomKey() {
  let lastKey = document.querySelector('.selected');
  let randomKey = keys[getRandomNumber(0, keys.length - 1)];

  while (lastKey?.textContent === randomKey) {
    randomKey = keys[getRandomNumber(0, keys.length - 1)];
  }

  lastKey?.classList.remove('selected');
  const key = document.getElementById(randomKey);

  if (key) {
    key.classList.add('selected');
  } else {
    console.error('Key value is null');
  }

  initialUnix = Date.now();
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
  fastestKeyPressed = time;
  const [isPlaying, setIsPlaying] = useState(false);
  const [finalScore, setFinalScore] = useState<FinalScore>({
    timer: time,
    correctKeys: 0,
    wrongKeys: 0,
    fastestKeyPressed: fastestKeyPressed,
  });

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
    clearInterval(intervalId);

    if (getItem('timer')?.value) {
      time = getItem('timer')?.value * 60;
    } else {
      time = defaultTimer * 60;
    }

    // Score Screen
    setFinalScore({
      timer: time,
      correctKeys: correctKeys,
      correctKeysPerSecond: correctKeys / time,
      wrongKeys: wrongKeys,
      wrongKeysPerSecond: wrongKeys / time,
      fastestKeyPressed: fastestKeyPressed,
    });

    const scoreTrigger = document.getElementById('scoreScreen');
    scoreTrigger?.click();

    // Reset Scores
    document.querySelector('.selected')?.classList.remove('selected');
    correctKeys = 0;
    wrongKeys = 0;
    fastestKeyPressed = time;
    setIsPlaying(false);
    setTimeout(() => {
      setTimer();
    }, 2000);
  }

  async function test(asd: string) {
    const result = await fetch(asd)
      .then((res) => res.json)
      .then((data) => console.log(data));

    return result;
  }

  useEffect(() => {
    test('https://geolocation-db.com/json/');

    if (!isPlaying) {
      if (getItem('timer')?.value) {
        time = getItem('timer')?.value * 60;
      } else {
        time = defaultTimer * 60;
      }

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
        finalUnix = Date.now();
        const keyTimer = (finalUnix - initialUnix) / 1000;

        if (keyTimer < fastestKeyPressed) {
          fastestKeyPressed = keyTimer;
        }

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
          <Dialog.Content className="border-2 rounded-xl absolute top-[50%] left-[50%] w-[40%] h-[65%] min-w-[560px] min-h-[660px] translate-y-[-50%] translate-x-[-50%] bg-slate-600 px-12 py-12 shadow-2xl">
            <Dialog.Title className="title">Statistics</Dialog.Title>
            <Dialog.Description className="text-lg text-gray-300 mt-4">
              <span className="text-xl">
                The game lasted for {finalScore.timer} seconds!
              </span>
              <br />
              <br />
              {finalScore.correctKeys > 1 ? (
                <>Correct keys</>
              ) : (
                <>Correct key</>
              )}
              : <span className="text-green-300">{finalScore.correctKeys}</span>{' '}
              <br />
              {finalScore.wrongKeys > 1 ? (
                <>Wrong keys</>
              ) : (
                <>Wrong key</>
              )}: <span className="text-red-300">{finalScore.wrongKeys}</span>
              <br />
              <br />
              Correct Keys Per Second:{' '}
              <span className="text-green-300">
                {finalScore.correctKeysPerSecond?.toFixed(2)}
              </span>
              <br />
              Wrong Keys Per Second:{' '}
              <span className="text-red-300">
                {finalScore.wrongKeysPerSecond?.toFixed(2)}
              </span>
              <br />
              <br />
              Fastest Key Pressed:{' '}
              <span className="text-green-300">
                {finalScore.fastestKeyPressed?.toFixed(3)}s
              </span>
            </Dialog.Description>

            <div className="flex absolute bottom-[5%] right-[5%] space-x-4">
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
