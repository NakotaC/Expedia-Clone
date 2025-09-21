import firebase_app from "../../01_firebase/config_firebase";
import FlightCard from "./FlightCard";
import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useSearchParams } from "react-router-dom";

export default function FlightList() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchFlights = async () => {
      const db = getFirestore(firebase_app);
      const querySnapshot = await getDocs(collection(db, "flight"));
      const flights = [];
      querySnapshot.forEach((doc) => {
        flights.push({ id: doc.id, ...doc.data() });
      });
      setData(flights);
    };
    fetchFlights();
  }, []);

  useEffect(() => {
    const from = searchParams.get("from");
    const to = searchParams.get("to");

    if (from && to && data.length > 0) {
      const filtered = data.filter(
        (flight) =>
          flight.from.toLowerCase() === from.toLowerCase() &&
          flight.to.toLowerCase() === to.toLowerCase()
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data); // Optionally show all flights if no params
    }
  }, [searchParams, data]);

  return (
    <div>
      {filteredData.length > 0 ? (
        filteredData.map((item) => {
          return (
            <div key={item.id}>
              <FlightCard data={item} />
            </div>
          );
        })
      ) : (
        <p style={{ textAlign: "center", marginTop: "2rem" }}>
          No flights found for the selected route.
        </p>
      )}
    </div>
  );
}