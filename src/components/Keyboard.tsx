import { getItem } from 'local-data-storage';
import { themes } from '../settings/settings';

function Keyboard() {
  let theme;

  if (getItem('theme')?.value) {
    theme = themes[getItem('theme')?.value];
  } else {
    theme = themes[0];
  }

  return (
    <div
      className={`flex flex-col border-slate-300 border-2 rounded p-2 ${theme}`}
    >
      <ul className="row-0">
        <li
          className="key bg-pinky border-2 border-pinky"
          id="esc"
        >
          ESC
        </li>
        <li
          className="key bg-pinky border-2 border-pinky"
          id="1"
        >
          1
        </li>
        <li
          className="key bg-ring border-2 border-ring"
          id="2"
        >
          2
        </li>
        <li
          className="key bg-middle border-2 border-middle"
          id="3"
        >
          3
        </li>
        <li
          className="key bg-pointerout border-2 border-pointerout"
          id="4"
        >
          4
        </li>
        <li
          className="key bg-pointerin border-2 border-pointerin"
          id="5"
        >
          5
        </li>
        <li
          className="key bg-pointerin border-2 border-pointerin"
          id="6"
        >
          6
        </li>
        <li
          className="key bg-pointerout border-2 border-pointerout"
          id="7"
        >
          7
        </li>
        <li
          className="key bg-middle border-2 border-middle"
          id="8"
        >
          8
        </li>
        <li
          className="key bg-ring border-2 border-ring"
          id="9"
        >
          9
        </li>
        <li
          className="key bg-pinky border-2 border-pinky"
          id="10"
        >
          0
        </li>
        <li className="key bg-pinky border-2 border-pinky">-</li>
        <li className="key bg-pinky border-2 border-pinky">+</li>
        <li
          className="key bg-pinky border-2 border-pinky w-20"
          id="back"
        >
          BACK
        </li>
      </ul>
      <ul className="row-1">
        <li
          className="key bg-pinky border-2 border-pinky w-20"
          id="tab"
        >
          TAB
        </li>
        <li
          className="key bg-pinky border-2 border-pinky"
          id="Q"
        >
          Q
        </li>
        <li
          className="key bg-ring border-2 border-ring"
          id="W"
        >
          W
        </li>
        <li
          className="key bg-middle border-2 border-middle"
          id="E"
        >
          E
        </li>
        <li
          className="key bg-pointerout border-2 border-pointerout"
          id="R"
        >
          R
        </li>
        <li
          className="key bg-pointerin border-2 border-pointerin"
          id="T"
        >
          T
        </li>
        <li
          className="key bg-pointerin border-2 border-pointerin"
          id="Y"
        >
          Y
        </li>
        <li
          className="key bg-pointerout border-2 border-pointerout"
          id="U"
        >
          U
        </li>
        <li
          className="key bg-middle border-2 border-middle"
          id="I"
        >
          I
        </li>
        <li
          className="key bg-ring border-2 border-ring"
          id="O"
        >
          O
        </li>
        <li
          className="key bg-pinky border-2 border-pinky"
          id="P"
        >
          P
        </li>
        <li className="key bg-pinky border-2 border-pinky">[</li>
        <li className="key bg-pinky border-2 border-pinky">]</li>
        <li className="key bg-pinky border-2 border-pinky">\</li>
      </ul>
      <ul className="row-2">
        <li
          className="key bg-pinky border-2 border-pinky w-24"
          id="caps"
        >
          CAPS
        </li>
        <li
          className="key bg-pinky border-2 border-pinky"
          id="A"
        >
          A
        </li>
        <li
          className="key bg-ring border-2 border-ring"
          id="S"
        >
          S
        </li>
        <li
          className="key bg-middle border-2 border-middle"
          id="D"
        >
          D
        </li>
        <li
          className="key bg-pointerout border-2 border-pointerout"
          id="F"
        >
          F
        </li>
        <li
          className="key bg-pointerin border-2 border-pointerin"
          id="G"
        >
          G
        </li>
        <li
          className="key bg-pointerin border-2 border-pointerin"
          id="H"
        >
          H
        </li>
        <li
          className="key bg-pointerout border-2 border-pointerout"
          id="J"
        >
          J
        </li>
        <li
          className="key bg-middle border-2 border-middle"
          id="K"
        >
          K
        </li>
        <li
          className="key bg-ring border-2 border-ring"
          id="L"
        >
          L
        </li>
        <li className="key bg-pinky border-2 border-pinky">:</li>
        <li className="key bg-pinky border-2 border-pinky">''</li>
        <li
          className="key bg-pinky border-2 border-pinky  w-24"
          id="enter"
        >
          ENTER
        </li>
      </ul>
      <ul className="row-3">
        <li
          className="key bg-pinky border-2 border-pinky w-32"
          id="left-shift"
        >
          SHIFT
        </li>
        <li
          className="key bg-pinky border-2 border-pinky"
          id="Z"
        >
          Z
        </li>
        <li
          className="key bg-ring border-2 border-ring"
          id="X"
        >
          X
        </li>
        <li
          className="key bg-middle border-2 border-middle"
          id="C"
        >
          C
        </li>
        <li
          className="key bg-pointerout border-2 border-pointerout"
          id="V"
        >
          V
        </li>
        <li
          className="key bg-pointerin border-2 border-pointerin"
          id="B"
        >
          B
        </li>
        <li
          className="key bg-pointerin border-2 border-pointerin"
          id="N"
        >
          N
        </li>
        <li
          className="key bg-pointerout border-2 border-pointerout"
          id="M"
        >
          M
        </li>
        <li className="key bg-middle border-2 border-middle">,</li>
        <li className="key bg-ring border-2 border-ring">.</li>
        <li className="key bg-pinky border-2 border-pinky">;</li>
        <li
          className="key bg-pinky border-2 border-pinky w-32"
          id="right-shift"
        >
          SHIFT
        </li>
      </ul>
    </div>
  );
}

export default Keyboard;
