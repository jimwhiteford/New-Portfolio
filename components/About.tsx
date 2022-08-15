import React, { useEffect, useState } from "react";
import { database } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const dbInstance = collection(database, "about");

export default function About() {
  const [tempData, setTempData] = useState<object[]>([]);

  const getAbout = () => {
    getDocs(dbInstance).then((data) => {
      setTempData(
        data.docs.map((item) => {
          return { ...item.data() };
        })
      );
    });
  };

  useEffect(() => {
    getAbout();
  }, []);

  return (
    <div>
      {tempData.map((about: any) => {
        return (
          <div>
            <h1 className="flex justify-center mt-20 font-semibold text-4xl">
              {about.head}
            </h1>
            <p className="flex justify-center text-center mt-20 mr-10 ml-10 text-xl">
              {about.blurb}
            </p>
            <p className="flex justify-center text-center mt-10 mr-10 ml-10 text-xl">
              {about.skills}
            </p>
          </div>
        );
      })}
    </div>
  );
}
