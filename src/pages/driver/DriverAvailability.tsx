
// import { useState } from "react";
// import { useAvailabilityUpdateMutation } from "@/redux/features/driver/driver.api";


// const DriverAvailability = () => {


//   const [availability, setAvailability] = useState<"online" | "offline">("offline");

//   const [updateAvailability, { isLoading }] = useAvailabilityUpdateMutation();



//   const handleToggle = async () => {
//     const newStatus = availability === "online" ? "offline" : "online";

//     try {
//       const response = await updateAvailability({ driverId, availability: newStatus }).unwrap();
//       setAvailability(response.data.availability); // optional
//       alert(`Status updated to ${response.data.availability}`);
//     } catch (error) {
//       console.error("Update failed:", error);
//     }
//   };

//   return (
//     <div>
//       <h3>Update Availability </h3>
//       <button onClick={handleToggle} disabled={isLoading} className="">
//         {availability === "online" ? "offline" : "online"}
//       </button>

//     </div>
//   );
// };

// export default DriverAvailability;




const DriverAvailability = () => {
  return (
    <div>
      dgfdgt
    </div>
  );
};

export default DriverAvailability;