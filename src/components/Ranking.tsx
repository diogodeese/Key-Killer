import { useEffect, useState, ReactNode } from 'react';

// Firebase
import { UserAuth } from '../context/AuthContext.js';
import { Database } from '../firebase.js';
import { onValue, ref } from 'firebase/database';

interface Ranking {
  username?: ReactNode;
  correctKeys?: ReactNode;
  wrongKeys?: ReactNode;
  score?: ReactNode;
  uid?: {
    correctKeys?: string;
    correctKeysPerSecond?: string;
    wrongKeys?: string;
    wrongKeysPerSecond?: string;
    fastestKeyPressed?: string;
    timer?: string;
    username?: string;
    score?: string;
  };
}

function Ranking() {
  const [ranking, setRanking] = useState<Ranking[]>();
  const context = UserAuth();

  useEffect(() => {
    onValue(ref(Database, 'ranking/15'), (snapshot) => {
      const data = snapshot.val();
      setRanking(data);
    });
  }, []);

  if (ranking) {
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
          <tbody>
            {Object.keys(ranking).map((rank: any, key: number) => {
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{ranking[rank].username}</td>
                  <td>{ranking[rank].correctKeys}</td>
                  <td>{ranking[rank].wrongKeys}</td>
                  <td>{Number(ranking[rank].score).toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  } else {
    <div>Error</div>;
  }
}

export default Ranking;
