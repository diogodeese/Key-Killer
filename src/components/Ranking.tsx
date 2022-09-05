import { useEffect, useState } from 'react';

// Firebase
import { UserAuth } from '../context/AuthContext.js';
import { Database } from '../firebase.js';
import { onValue, ref } from 'firebase/database';

interface Ranking {
  uid: {
    correctKeys?: string;
    correctKeysPerSecond?: string;
    wrongKeys?: string;
    wrongKeysPerSecond?: string;
    fastestKeyPressed?: string;
    timer?: string;
    username?: string;
  };
}

function Ranking() {
  const [ranking, setRanking] = useState();
  const context = UserAuth();

  useEffect(() => {
    onValue(ref(Database, 'ranking/15'), (snapshot) => {
      const data = snapshot.val();
      setRanking(data);
    });
  }, []);

  if (ranking) {
    Object.keys(ranking).map((rank) => {
      console.log(rank);
    });
    return (
      <div className="w-screen flex items-center justify-center">
        <table className="min-w-[60%]">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Player</th>
              <th>Correct Keys</th>
              <th>Wrong Keys</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    );
  } else {
    <div>Error</div>;
  }
}

export default Ranking;
