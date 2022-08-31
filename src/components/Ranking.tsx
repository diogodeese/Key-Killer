function Ranking() {
  return (
    <div className="w-screen flex items-center justify-center">
      <table className="min-w-[60%]">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Correct Keys</th>
            <th>Wrong Keys</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Maria </td>
            <td>15</td>
            <td>15</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Francisco Chang</td>
            <td>14</td>
            <td>15</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Roland Mendel</td>
            <td>13</td>
            <td>15</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Helen Bennett</td>
            <td>11</td>
            <td>15</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Ola </td>
            <td>9</td>
            <td>15</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Ranking;
