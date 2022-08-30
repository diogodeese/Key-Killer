import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { AiFillTrophy, AiFillSetting } from 'react-icons/ai';

function Nav() {
  return (
    <div className="w-screen flex">
      <div className="w-1/2 ml-[10%] text-left">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger className="button">
            <AiFillSetting className="text-2xl" />
          </DropdownMenu.Trigger>
          <DropdownMenu.Portal>
            <DropdownMenu.Content
              loop={true}
              sideOffset={8}
              className="bg-slate-200 w-44 rounded p-2"
            >
              <DropdownMenu.Item>Game Settings</DropdownMenu.Item>
              <DropdownMenu.Item>Themes</DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        </DropdownMenu.Root>
      </div>
      <div className="w-1/2 mr-[10%] text-right">
        <button className="button">
          <AiFillTrophy className="text-2xl" />
        </button>
      </div>
    </div>
  );
}

export default Nav;
