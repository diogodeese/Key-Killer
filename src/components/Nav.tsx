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
              className="bg-slate-300 w-44 rounded py-2 px-3 shadow-lg"
            >
              <DropdownMenu.Item className="border-b-[1px] border-slate-400 py-1">
                Game Settings
              </DropdownMenu.Item>
              <DropdownMenu.Item className="py-1">Themes</DropdownMenu.Item>
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
