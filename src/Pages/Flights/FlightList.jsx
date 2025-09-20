import React, { useEffect, useState } from "react";
import FlightCard from "./FlightCard";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import firebase_app from "../../01_firebase/config_firebase";

export default function FlightList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      const db = getFirestore(firebase_app);
      const querySnapshot = await getDocs(collection(db, "flight"));
      const flights = [];
      querySnapshot.forEach((doc) => {
        flights.push({ id: doc.id, ...doc.data() });
      });
      console.log("Fetched flights:", flights);
      setData(flights);
    };
    fetchFlights();
  }, []);

  return (
    <div>
      {data.length > 0 &&
        data.map((item) => {
          return (
          <div key={item.id}>
            <FlightCard data={item} />
          </div>
          );
        })}
    </div>
  );
}
