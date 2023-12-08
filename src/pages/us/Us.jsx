// Us.js
import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const Us = () => {
  const [us, setUs] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://urlsbackend.onrender.com/us");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setUs(data.message); // Assuming your server returns an object with a "message" property
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); // Set loading to false in case of an error
      }
    };

    fetchData();
  }, []);

  return (
    <div className="px-3 md:px-10 lg:px-20">
      <div className="text-center mt-2 flex flex-col gap-10">
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <div className="mt-5">
              <button className="px-10 text-white bg-[#089e1e] py-3 rounded-full text-lg font-[600]">
                Close and Go Back
              </button>
            </div>
            <div
              className="bg-white px-10 py-10 text-center text-[14px] leading-7 font-[300] text-[#282b31] rounded-large"
              style={{ borderRadius: "16px" }}
            >
              <p>{us}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Us;
