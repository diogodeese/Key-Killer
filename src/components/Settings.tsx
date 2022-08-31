import { useEffect, useState } from 'react';
import { setItem, getItem } from 'local-data-storage';

const settingsSections = ['Game', 'Themes', 'Account'];

function Game() {
  const timerOptions = [0.5, 1, 1.5];
  const [index, setIndex] = useState(
    timerOptions.indexOf(getItem('timer')?.value)
  );

  function incrementTimer() {
    if (timerOptions.length - 1 === index) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function decrementTimer() {
    if (index === 0) {
      setIndex(timerOptions.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function saveTimer() {
    let timer = timerOptions[index];

    setItem('timer', { value: timer }, true);
  }

  useEffect(() => {
    function setTimer() {
      let time = timerOptions[index] * 60;
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

    setTimer();
  }, [index]);

  return (
    <div className="flex flex-col w-[50%] text-start px-12 py-6 space-y-10">
      <h2 className="settings-title">Game Settings</h2>
      <div className="flex flex-col space-y-4">
        <p className="text-lg text-slate-200">Change the game timer</p>
        <div className="flex space-x-4">
          <button
            className="button"
            onClick={decrementTimer}
          >
            &#60;
          </button>
          <p
            className="text-4xl text-slate-200 mt-1"
            id="timer"
          >
            {timerOptions[index]}
          </p>
          <button
            className="button"
            onClick={incrementTimer}
          >
            &#62;
          </button>
        </div>
        <button
          className="button correct w-[220px]"
          onClick={saveTimer}
        >
          Set Timer
        </button>
      </div>
    </div>
  );
}

function Themes() {
  return (
    <div className="flex flex-col w-[50%] text-start px-12 py-6 space-y-10">
      <h2 className="settings-title">Themes</h2>
    </div>
  );
}

function Account() {
  return (
    <div className="flex flex-col w-[50%] text-start px-12 py-6 space-y-10">
      <h2 className="settings-title">Account Settings</h2>

      <div className="flex flex-col text-start space-y-3">
        <p className="text-lg text-slate-200">
          Clearing your score will remove you from the ranking table
        </p>
        <button className="button warning">Clear Scores</button>
      </div>

      <div className="flex flex-col text-start space-y-3">
        <p className="text-lg text-slate-200">Logout from your account</p>
        <button className="button danger">Logout</button>
      </div>
    </div>
  );
}

function Settings() {
  const [settingsSection, setSettingsSection] = useState('Game');

  return (
    <div className="flex justify-center w-screen">
      <div className="flex flex-col w-[20%] text-center border-r-2 px-8 py-6 2xl:w-[15%]">
        {settingsSections.map((section, key) => {
          return (
            <button
              key={key}
              className="button mb-4"
              onClick={() => {
                setSettingsSection(section);
              }}
            >
              {section}
            </button>
          );
        })}
      </div>

      {settingsSection === 'Game' && <Game />}

      {settingsSection === 'Themes' && <Themes />}

      {settingsSection === 'Account' && <Account />}
    </div>
  );
}

export default Settings;
