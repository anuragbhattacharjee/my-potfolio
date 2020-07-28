import React from "react";

const Entertainments = () => {
  return (
    <div className="content">
      <ul className="list-unstyled">
        <li>
          <a
            href="https://www.codewars.com/users/anuragbhattacharjee"
            target="_blank"
            rel="noopener noreferrer"
          >
            Codewars:
            <img
              src="https://www.codewars.com/users/anuragbhattacharjee/badges/micro"
              alt="@anuragbhattacharjee"
            ></img>
          </a>
        </li>
        <li>
          <i className="fab fa-hackerrank"></i>{" "}
          <a
            href="https://www.hackerrank.com/anurag07061"
            target="_blank"
            rel="noopener noreferrer"
          >
            HackerRank @anuragon2
          </a>
        </li>
        <li>
          <i className="fa fa-chess-knight"></i>
          <a
            href="https://leetcode.com/progress/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            LeetCode @AnuragOn2
          </a>
        </li>
        <li>
          <i className="fas fa-laptop"></i>{" "}
          <a
            href="https://uhunt.onlinejudge.org/id/71494"
            target="_blank"
            rel="noopener noreferrer"
          >
            uHunt @anuragkuet
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Entertainments;
