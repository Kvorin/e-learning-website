import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";
import Wrapper from "../assets/wrappers/Score";

const Score = () => {
  const [pointsTable, setPointsTable] = useState([]);
  const tableCollectionRef = collection(db, "scoreBoard");

  //se preiau datele din table firebase , iar apoi este initializata variabila pointsTable cu un obiect creat din aceste date
  useEffect(() => {
    const getTable = async () => {
      const data = await getDocs(tableCollectionRef);
      setPointsTable(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getTable();
  }, []);

  return (
    <Wrapper>
      <h1 className="title">Latest Results</h1>
      <table className="content-table">
        <thead>
          <tr>
            <th>Test</th>
            <th>Type</th>
            <th>Email</th>
            <th>Points</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {pointsTable.map((row) => (
            <tr key={row.id}>
              <td>{row.test}</td>
              <td>{row.tip}</td>
              <td>{row.email}</td>
              <td>{row.points}</td>
              <td>{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default Score;
