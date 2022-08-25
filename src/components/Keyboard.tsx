import { useEffect, useState } from 'react';

const keys = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

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

function keyboard() {
  const [isPlaying, setIsPlaying] = useState(false);

  const timer = 1.5;
  let time = timer * 60;

  function updateTimer() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    const timerSpan = document.getElementById('timer');

    if (!timerSpan) return;
    timerSpan.innerText =
      minutes.toString().padStart(2, '0') +
      ':' +
      seconds.toString().padStart(2, '0');

    time--;

    if (time <= 0) {
      endGame();
      return;
    }
  }

  setInterval(() => {
    updateTimer();
  }, 1000);

  function startGame() {
    selectRandomKey();
    setIsPlaying(true);
  }

  function endGame() {
    document.querySelector('.selected')?.classList.remove('selected');
    setIsPlaying(false);
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
      }
    };

    document.addEventListener('keypress', handleKeyPress);

    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, []);

  return (
    <div>
      {isPlaying && (
        <div className="flex justify-center items-center pb-8">
          <span
            className="timer"
            id="timer"
          >
            00:00
          </span>
        </div>
      )}

      <div className="flex flex-col border-slate-300 border-2 rounded p-2">
        <ul className="row-0">
          <li
            className="pinky"
            id="esc"
          >
            ESC
          </li>
          <li
            className="pinky"
            id="1"
          >
            1
          </li>
          <li
            className="ring"
            id="2"
          >
            2
          </li>
          <li
            className="middle"
            id="3"
          >
            3
          </li>
          <li
            className="pointer1st"
            id="4"
          >
            4
          </li>
          <li
            className="pointer2nd"
            id="5"
          >
            5
          </li>
          <li
            className="pointer2nd"
            id="6"
          >
            6
          </li>
          <li
            className="pointer1st"
            id="7"
          >
            7
          </li>
          <li
            className="middle"
            id="8"
          >
            8
          </li>
          <li
            className="ring"
            id="9"
          >
            9
          </li>
          <li
            className="pinky"
            id="10"
          >
            0
          </li>
          <li className="pinky">-</li>
          <li className="pinky">+</li>
          <li
            className="pinky w-20"
            id="back"
          >
            BACK
          </li>
        </ul>
        <ul className="row-1">
          <li
            className="pinky w-20"
            id="tab"
          >
            TAB
          </li>
          <li
            className="pinky"
            id="Q"
          >
            Q
          </li>
          <li
            className="ring"
            id="W"
          >
            W
          </li>
          <li
            className="middle"
            id="E"
          >
            E
          </li>
          <li
            className="pointer1st"
            id="R"
          >
            R
          </li>
          <li
            className="pointer2nd"
            id="T"
          >
            T
          </li>
          <li
            className="pointer2nd"
            id="Y"
          >
            Y
          </li>
          <li
            className="pointer1st"
            id="U"
          >
            U
          </li>
          <li
            className="middle"
            id="I"
          >
            I
          </li>
          <li
            className="ring"
            id="O"
          >
            O
          </li>
          <li
            className="pinky"
            id="P"
          >
            P
          </li>
          <li className="pinky">[</li>
          <li className="pinky">]</li>
          <li className="pinky">\</li>
        </ul>
        <ul className="row-2">
          <li
            className="pinky w-24"
            id="caps"
          >
            CAPS
          </li>
          <li
            className="pinky"
            id="A"
          >
            A
          </li>
          <li
            className="ring"
            id="S"
          >
            S
          </li>
          <li
            className="middle"
            id="D"
          >
            D
          </li>
          <li
            className="pointer1st"
            id="F"
          >
            F
          </li>
          <li
            className="pointer2nd"
            id="G"
          >
            G
          </li>
          <li
            className="pointer2nd"
            id="H"
          >
            H
          </li>
          <li
            className="pointer1st"
            id="J"
          >
            J
          </li>
          <li
            className="middle"
            id="K"
          >
            K
          </li>
          <li
            className="ring"
            id="L"
          >
            L
          </li>
          <li className="pinky">:</li>
          <li className="pinky">''</li>
          <li
            className="pinky w-24"
            id="enter"
          >
            ENTER
          </li>
        </ul>
        <ul className="row-3">
          <li
            className="pinky w-32"
            id="left-shift"
          >
            SHIFT
          </li>
          <li
            className="pinky"
            id="Z"
          >
            Z
          </li>
          <li
            className="ring"
            id="X"
          >
            X
          </li>
          <li
            className="middle"
            id="C"
          >
            C
          </li>
          <li
            className="pointer1st"
            id="V"
          >
            V
          </li>
          <li
            className="pointer2nd"
            id="B"
          >
            B
          </li>
          <li
            className="pointer2nd"
            id="N"
          >
            N
          </li>
          <li
            className="pointer1st"
            id="M"
          >
            M
          </li>
          <li className="middle">,</li>
          <li className="ring">.</li>
          <li className="pinky">;</li>
          <li
            className="pinky w-32"
            id="right-shift"
          >
            SHIFT
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center pt-8">
        <button
          className="start-button"
          onClick={() => {
            startGame();
          }}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}

export default keyboard;
