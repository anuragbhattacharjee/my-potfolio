import React from "react";

const Entertainments = () => {
  return (
    <div className="content">
      <ul className="list-unstyled">
        <li>
          <i className="fab fa-hackerrank"></i>{" "}
          <a
            href="https://www.hackerrank.com/anurag07061"
            target="_blank"
            rel="noopener noreferrer"
          >
            HackerRank @anurag07061
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
