import axios from "axios";
import React, { useEffect, useState } from "react";

const TestPage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get("http://localhost:8080/hello", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.status === 200) {
          const data1 = response.data;
          setData(data1);
          console.log("Data:", data1);
          // Handle the data received from the server
        } else {
          throw new Error("Network response was not ok.");
        }
      } catch (error) {
        console.error(
          "There has been a problem with your Axios request:",
          error.message
        );
        // Handle errors
      }
    }
    fetchData();
  }, []);

  return (
    <cente>
      <h1>Welcome {data?.user?.username}</h1>
    </cente>
  );
};

export default TestPage;
