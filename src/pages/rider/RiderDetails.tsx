

// const RiderDetails = () => {
//     return (
//         <div>
//             Ridre details
//         </div>
//     );
// };

// export default RiderDetails;


/* eslint-disable @typescript-eslint/no-explicit-any */

import { useGetmyHistoryQuery } from "@/redux/features/rider/rider.api";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";

const RiderDetails = () => {
  const { data:users } = useUserInfoQuery({})
    const user = users?.data
    
  const { data, isLoading, isError } = useGetmyHistoryQuery({
    userId:user?._id
  });

  const rides = data?.data || [];

console.log("rides", rides)
  

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong. Please try again later.</p>;

  return (
  
      <div className="bg-white rounded shadow p-4">
        {rides.length === 0 ? (
          <p>No rides found.</p>
        ) : (
          <ul>
            {rides?.map((ride: any) => (
              <li key={ride._id} className="border-b py-3">
                <p>
                     <strong>Timestamps</strong>
                </p>
                <p>
                   
                  <strong>requestedAt:</strong> {ride.rideTimestamps.requestedAt}
                 
                </p>
                <p>
                    <strong>Driver info</strong>
                </p>
                <p>
                  <strong>name:</strong> {ride.driver.name}
                  
                </p>
                <p>
                  <strong>Phone:</strong> {ride.driver.phone} 
                  
                </p>
                <p>
                  <strong>Address:</strong> {ride.driver.location}
                  
                </p>
                <p>
                <strong>Status:</strong> {ride.status} 
                </p>

                  <p>
                  <strong>updatedAt:</strong> {ride.updatedAt}  
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
  );
};

export default RiderDetails;

