import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import "../../styles/Leaderboard/Leaderboard.scss";
import axios from "axios";
import backBtn from "../../assets/icons/back.svg";
import { useEffect, useState } from "react";

const Leaderboard = (props) => {
  const { userAuth, user, logout } = props;
  const [fetchComplete, setFetchComplete] = useState(false);
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    axios.get("/leaderboard").then((response) => {
      setLeaderboardData(response.data);
      setFetchComplete(true);
    });
  }, []);

  const fakeUsers = [
    {
      username: "JayCee",
      wins: 20,
      winRate: "69%",
      totalTurns: 800,
      avatar_id: 1,
    },
    {
      username: "picklerick",
      wins: 19,
      winRate: "67%",
      totalTurns: 780,
      avatar_id: 1,
    },
    {
      username: "momotrq94",
      wins: 18,
      winRate: "53%",
      totalTurns: 766,
      avatar_id: 1,
    },
    {
      username: "hi im loki",
      wins: 17,
      winRate: "52%",
      totalTurns: 751,
      avatar_id: 1,
    },
    {
      username: "gagan420",
      wins: 16,
      winRate: "51%",
      totalTurns: 698,
      avatar_id: 1,
    },
    {
      username: "moooooon",
      wins: 15,
      winRate: "50%",
      totalTurns: 677,
      avatar_id: 1,
    },
    {
      username: "ziggy",
      wins: 14,
      winRate: "44%",
      totalTurns: 634,
      avatar_id: 1,
    },
    {
      username: "jordan",
      wins: 13,
      winRate: "42%",
      totalTurns: 622,
      avatar_id: 1,
    },
    {
      username: "potato123",
      wins: 12,
      winRate: "41%",
      totalTurns: 580,
      avatar_id: 1,
    },
    {
      username: "Di like dee",
      wins: 11,
      winRate: "30%",
      totalTurns: 544,
      avatar_id: 1,
    },
  ];
  return (
    <div className="Leaderboard">
      <div className="Homepage"></div>
      <Link to="/">
        <div className="back">
          <img className="back-btn" src={backBtn} alt="back button" />
        </div>
      </Link>
      <Navbar userAuth={userAuth} user={user} logout={logout} />
      <div className="leaderboard-container">
        <h1 className="leaderboard-title">LEADERBOARD</h1>
        <div className="leaderboard-main">
          <section>
            <header>
              <div className="col">Rank</div>
              <div className="col">Username</div>
              <div className="col">Number of Wins</div>
              <div className="col">Win Percentage</div>
              <div className="col">Total moves</div>
            </header>
            <div className="body">
              {fetchComplete &&
                leaderboardData.map((user, i) => (
                  <div className="row" key={i}>
                    <div className="col">{user.rank}</div>
                    <div className="col">{user.username}</div>
                    <div className="col">{user.total_wins}</div>
                    <div className="col">{`${user.win_percentage.toFixed(
                      2
                    )}%`}</div>
                    <div className="col">{user.total_moves}</div>
                  </div>
                ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
