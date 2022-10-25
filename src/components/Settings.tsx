import { useEffect, useState } from 'react';
import { setItem, getItem } from 'local-data-storage';
import { timerOptions, defaultTimer, themes } from '../settings/settings';
import * as RadioGroup from '@radix-ui/react-radio-group';

// Themes
import defaultTheme from '../assets/theme-default.png';
import neonTheme from '../assets/theme-neon.png';
import goldTheme from '../assets/theme-gold.png';
import prideTheme from '../assets/theme-pride.png';
import natureTheme from '../assets/theme-nature.png';

const settingsSections = ['Game', 'Themes'];

function Game() {
  let initialIndex;

  if (getItem('timer')?.value) {
    initialIndex = getItem('timer')?.value;
  } else {
    initialIndex = defaultTimer;
  }

  const [index, setIndex] = useState(timerOptions.indexOf(initialIndex));

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
      <h2 className="title">Game Settings</h2>
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
  const themePreview = [
    defaultTheme,
    neonTheme,
    goldTheme,
    prideTheme,
    natureTheme,
  ];

  let theme;

  if (getItem('theme')?.value) {
    theme = themes[getItem('theme')?.value];
  } else {
    theme = themes[0];
  }

  return (
    <div className="flex flex-col w-[50%] text-start px-12 py-6 space-y-10">
      <h2 className="title">Themes</h2>

      <RadioGroup.Root
        defaultValue="default"
        aria-label="View density"
      >
        <div className="flex flex-wrap gap-8">
          {themes.map((theme, key) => {
            return (
              <div
                key={key}
                className="border rounded p-2"
              >
                <div className="w-full justify-center align-middle">
                  <RadioGroup.Item
                    value="unchecked"
                    id={key.toString()}
                    className="radio-item"
                  >
                    <RadioGroup.Indicator className="radio-indicator" />
                  </RadioGroup.Item>
                  <label
                    htmlFor={key.toString()}
                    className="text-white text-lg font-semibold pl-4 capitalize"
                  >
                    {theme.toString().split('theme-')}
                  </label>
                </div>
                <img
                  src={themePreview[key]}
                  width={370}
                  alt="Theme"
                />
              </div>
            );
          })}
        </div>{' '}
      </RadioGroup.Root>
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
    </div>
  );
}

export default Settings;
