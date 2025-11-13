/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useGetmyHistoryQuery } from "@/redux/features/rider/rider.api";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpDown, Bike, Car, CreditCard, Eye, MapPin, Search } from "lucide-react";
import type { IRide } from "@/types/ride.type";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";


const formatTime = (dateString: string | Date) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

const statusConfig = {
  requested: {
    label: "requested",
    color: "bg-yellow-100 text-yellow-800 border-yellow-200",
  },
  accepted: {
    label: "accepted",
    color: "bg-blue-100 text-blue-800 border-blue-200",
  },
  picked_up: {
    label: "Picked Up",
    color: "bg-purple-100 text-purple-800 border-purple-200",
  },
  in_transit: {
    label: "In Transit",
    color: "bg-indigo-100 text-indigo-800 border-indigo-200",
  },
  completed: {
    label: "Completed",
    color: "bg-green-100 text-green-800 border-green-200",
  },
   cancelled_by_driver: {
    label: "cancelled_by_driver",
    color: "bg-red-100 text-red-800 border-red-200",
  },
  cancelled_by_rider: {
    label: "Cancelled",
    color: "bg-gray-100 text-gray-800 border-gray-200",
  },
};


const vehicleTypeConfig = {
  CAR: {
    label: "Car",
    icon: Car,
    color: "bg-blue-100 text-blue-800 border-blue-200",
  },
  BIKE: {
    label: "Bike",
    icon: Bike,
    color: "bg-green-100 text-green-800 border-green-200",
  },
};

const RiderHistory = () => {
  
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({
    status: "",
    search: "",
    date: "",
    fare:"",
    vehicleType: "",
   
  });

  const [selectedRide, setSelectedRide] = useState<IRide | null>(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  
  const { data, isLoading, isError } = useGetmyHistoryQuery({ });
  const rides = data?.data || [];
  const meta = data?.meta;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setPage(1); // reset to page 1 on filter change
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // const clearFilters = () => {
  //   setFilters({
  //     search: "",
  //     status: "all",
  //     vehicleType: "all",
  //     fare: "all",
  //     date: "all",
  //     page: 1,
  //     limit: filters.limit,
  //   });
  // };
  
  // const handleSort = (key: string) => {
  //   setFilters((f) => ({
  //     ...f,
  //     sortBy: key,
  //     sortOrder: f.sortBy === key && f.sortOrder === "asc" ? "desc" : "asc",
  //   }));
  // };

   const handleViewDetails = (ride: IRide) => {
    setSelectedRide(ride);
    setShowDetailsModal(true);
  
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong. Please try again later.</p>;

  return (
    <div className="w-full mx-auto space-y-6">
      <h1 className="text-3xl font-extrabold mb-4">My Ride History</h1>

      {/* Filters */}
      <Card className="p-2">
        <h2 className="text-3xl font-bold">Filters & Search</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div>
          <input
          type="text"
          name="search"
          placeholder="Search by location"
          value={filters.search}
          onChange={handleInputChange}
          className="border px-3 py-2 rounded w-full"
        />
        </div>
        <div>
         
          <select
          name="status"
          value={filters.status}
          onChange={handleInputChange}
          className="border px-3 py-2 rounded w-full"
        >
          <option value="">All Status</option>
          <option value="requested">Requested</option>
          <option value="acceptedAt">AcceptedAt</option>
          <option value="pickedUpAt">PickedUpAt</option>
           <option value="in_transit">In_transit</option>
          <option value="completedAt">Completed</option>
          <option value="cancelled_by_rider">Cancelled_by_rider</option>
          <option value="cancelled_by_driver">Cancelled_by_driver</option>
        </select>
        </div>
        
        <div>
          <input
          type="date"
          name="date"
          value={filters.date}
          onChange={handleInputChange}
          className="border px-3 py-2 rounded w-full"
        />
        </div>
     
       <div>
         <input
          type="number"
          name="fare"
          value={filters.fare}
          onChange={handleInputChange}
          placeholder="Fare"
          className="border px-3 py-2 rounded w-full"
        />
       </div>
        
      </div>
      </Card>
    
      {/* Table */}
      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="border-b bg-muted/40">
                <tr>
                  <th className="px-4 py-3">Ride Info</th>
                  <th className="px-4 py-3">Locations</th>
                  <th className="px-4 py-3">Fare </th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Vehicle</th>
                  <th
                    // className="px-4 py-3 cursor-pointer select-none"
                    // onClick={() => handleSort("createdAt")}
                  >
                    {/* <div className="inline-flex items-center gap-1.5">
                      Date
                      {filters.sortBy === "createdAt" ? (
                        <span className="text-xs">
                          {filters.sortOrder === "asc" ? "↑" : "↓"}
                        </span>
                      ) : (
                        <ArrowUpDown className="h-3.5 w-3.5" />
                      )}
                    </div> */}
                    Date
                  </th>
                  <th className="px-4 py-3 text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {rides.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="py-10 text-center">
                      <div className="flex flex-col items-center gap-2 text-muted-foreground">
                        <Search className="h-8 w-8" />
                        <p>No rides found. Try adjusting filters.</p>
                        <Button
                        //  variant="outline" onClick={clearFilters}
                         >
                          Clear Filters
                        </Button>
                      </div>
                    </td>
                  </tr>
                ) : (
                  rides.map((ride: IRide) => (
                    <tr
                      key={ride._id}
                      className="border-b hover:bg-muted/40 transition-colors"
                    >
                      {/* Ride Info */}
                      <td className="px-4 py-3">
                        <div className="flex flex-col gap-1">
                          <div className="font-medium text-sm">
                            #{ride._id ? ride._id.slice(-6) : "N/A"}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            Driver:{" "}
                            {ride.driver ? ride.driver.slice(-6) : "N/A"}
                          </div>
                        </div>
                      </td>

                      {/* Locations */}
                      <td className="px-4 py-3">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-start gap-2">
                            <MapPin className="h-3 w-3 text-green-600 mt-1 flex-shrink-0" />
                            <div className="text-xs">
                              <div className="font-medium">From</div>
                              <div className="text-muted-foreground truncate max-w-[150px]">
                                {ride.pickupAddress}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <MapPin className="h-3 w-3 text-red-600 mt-1 flex-shrink-0" />
                            <div className="text-xs">
                              <div className="font-medium">To</div>
                              <div className="text-muted-foreground truncate max-w-[150px]">
                                {ride.destinationAddress}
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Fare & Distance */}
                      <td className="px-4 py-3">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-1">
                            <span className="font-medium">
                              {ride.fare?.toFixed(1)}
                            </span>
                             <FaBangladeshiTakaSign className="h-3 w-3 text-green-600" />
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {ride.paymentMethod?.toUpperCase()}
                          </div>
                        </div>
                      </td>

                      {/* Status */}
                      <td className="px-4 py-3">
                        <Badge
                           variant="outline"
                          className={
                            statusConfig[
                              ride.status as keyof typeof statusConfig
                            ]?.color
                          }
                         >
                          {
                            statusConfig[
                              ride.status as keyof typeof statusConfig
                            ]?.label
                          }

                        </Badge>
                        {ride.status}
                      </td>

                      {/* Vehicle */}
                      <td className="px-4 py-3">
                        <Badge
                          variant="outline"
                          className={
                            vehicleTypeConfig[
                              ride.vehicleType as keyof typeof vehicleTypeConfig
                            ]?.color
                          }
                        >
                          {ride.vehicleType === "CAR" ? (
                            <Car className="h-3 w-3 mr-1" />
                          ) : (
                            <Bike className="h-3 w-3 mr-1" />
                          )}
                          {
                            vehicleTypeConfig[
                              ride.vehicleType as keyof typeof vehicleTypeConfig
                            ]?.label
                          }
                        </Badge>
                      </td>

                      {/* Date */}
                      <td className="px-4 py-3 text-sm text-muted-foreground">
                        {formatDate(ride.createdAt)}
                      </td>

                      {/* Actions */}
                      
                      <td className="px-4 py-3 text-right">
                        <Button
                          variant="outline"
                          size="sm"
                           onClick={() => handleViewDetails(ride)}
                          className="flex items-center gap-2"
                        >
                          <Eye className="h-4 w-4" />
                          Details
                        </Button>
                      </td>
                      
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

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

         {/* Ride Details Modal */}
      {showDetailsModal && selectedRide && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-background rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Ride Details</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowDetailsModal(false)}
                >
                  ✕
                </Button>
              </div>

              <div className="space-y-6">
                {/* Basic Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Ride ID
                    </label>
                 

                    <p className="font-mono text-sm">
                      #{selectedRide._id ? selectedRide._id.slice(-6) : "N/A"}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Status
                    </label>
                    <Badge
                      variant="outline"
                      className={
                        statusConfig[
                          selectedRide.status as keyof typeof statusConfig
                        ]?.color
                      }
                    >
                      {
                        statusConfig[
                          selectedRide.status as keyof typeof statusConfig
                        ]?.label
                      }
                    </Badge>
                  </div>
                </div>

                {/* Locations */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Route Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">
                        Pickup Location
                      </label>
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-green-600" />
                          <span className="font-medium">
                            {selectedRide.pickupAddress}
                          </span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Latitude:{" "}
                          {selectedRide.pickupLocation.lat}{",  "}
                          Lnggitude:{" "}
                          {selectedRide.pickupLocation.lng}
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-muted-foreground">
                        Destination
                      </label>
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-red-600" />
                          <span className="font-medium">
                            {selectedRide.destinationAddress}
                          </span>
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Latitude:{" "}
                          {selectedRide.destinationLocation.lat}{",  "}
                          Lnggitude:{" "}
                          {selectedRide.destinationLocation.lng}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ride Details */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <FaBangladeshiTakaSign className="h-6 w-6 text-green-600 mx-auto mb-2" />
                    <div className="flex items-center justify-center gap-1">
                      <FaBangladeshiTakaSign />
                      <div className="text-2xl font-bold">
                        {selectedRide.fare?.toFixed(2)}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Total Fare
                    </div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <CreditCard className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold">
                      {selectedRide.paymentMethod?.toUpperCase()}
                    </div>
                    <div className="text-xs text-muted-foreground">
                    PaymentMethod
                    </div>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    {selectedRide.vehicleType === "CAR" ? (
                      <Car className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                    ) : (
                      <Bike className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                    )}
                    <div className="text-lg font-bold">
                      {
                        vehicleTypeConfig[
                          selectedRide.vehicleType as keyof typeof vehicleTypeConfig
                        ]?.label
                      }
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Vehicle Type
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                  <div className="space-y-4">
                <h3 className="text-lg font-semibold">Ride Timeline</h3>
                <div className="space-y-4">
                  {selectedRide.rideTimestamps?.requestedAt && (
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="font-medium">Ride Requested</div>
                        <div className="text-sm text-muted-foreground">
                          {formatDate(selectedRide.rideTimestamps?.requestedAt)}
                        </div>
                      </div>
                      <div className="text-sm font-mono text-muted-foreground">
                        {formatTime(selectedRide.rideTimestamps?.requestedAt)}
                      </div>
                    </div>
                  )}

                  {selectedRide.rideTimestamps?.acceptedAt && (
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="font-medium">Driver Accepted</div>
                        <div className="text-sm text-muted-foreground">
                          {formatDate(selectedRide.rideTimestamps?.acceptedAt)}
                        </div>
                      </div>
                      <div className="text-sm font-mono text-muted-foreground">
                        {formatTime(selectedRide.rideTimestamps?.acceptedAt)}
                      </div>
                    </div>
                  )}

                  {selectedRide.rideTimestamps?.pickedUpAt && (
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="font-medium">Passenger Picked Up</div>
                        <div className="text-sm text-muted-foreground">
                          {formatDate(selectedRide.rideTimestamps?.pickedUpAt)}
                        </div>
                      </div>
                      <div className="text-sm font-mono text-muted-foreground">
                        {formatTime(selectedRide.rideTimestamps?.pickedUpAt)}
                      </div>
                    </div>
                  )}

                  {selectedRide.rideTimestamps?.completedAt && (
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      <div className="flex-1">
                        <div className="font-medium">Ride Completed</div>
                        <div className="text-sm text-muted-foreground">
                          {formatDate(selectedRide.rideTimestamps?.completedAt)}
                        </div>
                      </div>
                      <div className="text-sm font-mono text-muted-foreground">
                        {formatTime(selectedRide.rideTimestamps?.completedAt)}
                      </div>
                    </div>
                  )}
                </div>
              </div>

                {/* Driver Info */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">
                    Driver ID
                  </label>
                  <p className="font-mono text-sm bg-muted/50 p-2 rounded">
                    {selectedRide.driver}
                  </p>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-8">
                <Button
                  variant="outline"
                  onClick={() => setShowDetailsModal(false)}
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}


    </div>
    );
};

export default RiderHistory;

