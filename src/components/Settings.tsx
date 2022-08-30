import { useState } from 'react';

const settingsSections = ['Game', 'Themes', 'Account'];

function Game() {
  return <div className="w-[50%] text-center px-12 py-6">Game Settings</div>;
}

function Themes() {
  return <div className="w-[50%] text-center px-12 py-6">Theme Settings</div>;
}

function Account() {
  return <div className="w-[50%] text-center px-12 py-6">Account Settings</div>;
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
