import { useEffect, useState } from 'react';
import { timer } from '../settings/settings';

const settingsSections = ['Game', 'Themes', 'Account'];

function Game() {
  const timerOptions = [0.5, 1, 1.5];
  const [index, setIndex] = useState(timerOptions.indexOf(timer));

  function changeTimer() {
    if (timerOptions.length - 1 === index) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
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
      <div>
        <button
          className="button"
          onClick={changeTimer}
        >
          Timer
        </button>
        <span
          className="ml-12 text-xl"
          id="timer"
        >
          {timerOptions[index]}
        </span>
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
