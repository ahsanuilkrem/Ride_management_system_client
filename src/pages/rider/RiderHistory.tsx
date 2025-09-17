



/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useGetmyHistoryQuery } from "@/redux/features/rider/rider.api";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";

const RiderHistory = () => {
  const { data:users } = useUserInfoQuery({})
    const user = users?.data
    
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    status: "",
    search: "",
    startDate: "",
    endDate: "",
    minFare: "",
    maxFare: "",
  });

  const { data, isLoading, isError } = useGetmyHistoryQuery({
    userId:user?._id,
    page,
    limit: 5,
    ...filters,
  });

  const rides = data?.data || [];
  const meta = data?.meta;
console.log("rides", rides)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPage(1); // reset to page 1 on filter change
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong. Please try again later.</p>;

  return (
    <div className="max-w-3xl mx-auto px-4">
      <h1 className="text-2xl font-semibold mb-4">My Ride History</h1>

      {/* Filters */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          name="search"
          placeholder="Search by location"
          value={filters.search}
          onChange={handleInputChange}
          className="border px-3 py-2 rounded w-full"
        />
        <select
          name="status"
          value={filters.status}
          onChange={handleInputChange}
          className="border px-3 py-2 rounded w-full"
        >
          <option value="">All Status</option>
          <option value="completed">Completed</option>
          <option value="cancelled_by_rider">Cancelled by Rider</option>
          <option value="cancelled_by_driver">Cancelled by Driver</option>
          <option value="no_driver_available">No Driver</option>
        </select>
        <input
          type="date"
          name="startDate"
          value={filters.startDate}
          onChange={handleInputChange}
          className="border px-3 py-2 rounded w-full"
        />
        <input
          type="date"
          name="endDate"
          value={filters.endDate}
          onChange={handleInputChange}
          className="border px-3 py-2 rounded w-full"
        />
        <input
          type="number"
          name="minFare"
          value={filters.minFare}
          onChange={handleInputChange}
          placeholder="Min Fare"
          className="border px-3 py-2 rounded w-full"
        />
        <input
          type="number"
          name="maxFare"
          value={filters.maxFare}
          onChange={handleInputChange}
          placeholder="Max Fare"
          className="border px-3 py-2 rounded w-full"
        />
      </div>

      {/* Ride List */}
      <div className="bg-white rounded shadow p-4">
        {rides.length === 0 ? (
          <p>No rides found.</p>
        ) : (
          <ul>
            {rides?.map((ride: any) => (
              <li key={ride._id} className="border-b py-3">
                <p>
                  <strong>Pickup:</strong> {ride.pickupAddress}
                 
                </p>
                <p>
                  <strong>Destination:</strong> {ride.destinationAddress}
                  
                </p>
                <p>
                  <strong>Status:</strong> {ride.status}
                </p>
                <p>
                  <strong>Date:</strong>{" "}
                  {new Date(ride.date).toLocaleDateString()}
                </p>
                  <p>
                  <strong>Fare: </strong>{ride?.payment.amount} Taka
                  
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Pagination */}
      {meta?.total > 5 && (
        <div className="mt-4 flex gap-2 flex-wrap">
          {Array.from({ length: Math.ceil(meta.total / meta.limit) }, (_, idx) => (
            <button
              key={idx}
              onClick={() => setPage(idx + 1)}
              className={`px-3 py-1 border rounded ${
                page === idx + 1 ? "bg-blue-500 text-white" : "bg-gray-100"
              }`}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default RiderHistory;

