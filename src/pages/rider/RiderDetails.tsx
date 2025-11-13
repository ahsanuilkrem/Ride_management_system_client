/* eslint-disable react-hooks/exhaustive-deps */


// import { useGetmyHistoryQuery } from "@/redux/features/rider/rider.api";
// import { useUserInfoQuery } from "@/redux/features/auth/auth.api";

// const RiderDetails = () => {
//   const { data:users } = useUserInfoQuery({})
//     const user = users?.data

//   const { data, isLoading, isError } = useGetmyHistoryQuery({
//     userId:user?._id
//   });

//   const rides = data?.data || [];

// console.log("rides", rides)


//   if (isLoading) return <p>Loading...</p>;
//   if (isError) return <p>Something went wrong. Please try again later.</p>;

//   return (

//       <div className="bg-white rounded shadow p-4">
//         {rides.length === 0 ? (
//           <p>No rides found.</p>
//         ) : (
//           <ul>
//             {rides?.map((ride: any) => (
//               <li key={ride._id} className="border-b py-3">
//                 <p>
//                      <strong>Timestamps</strong>
//                 </p>
//                 <p>

//                   <strong>requestedAt:</strong> {ride.rideTimestamps.requestedAt}

//                 </p>
//                 <p>
//                     <strong>Driver info</strong>
//                 </p>
//                 <p>
//                   <strong>name:</strong> {ride.driver.name}

//                 </p>
//                 <p>
//                   <strong>Phone:</strong> {ride.driver.phone} 

//                 </p>
//                 <p>
//                   <strong>Address:</strong> {ride.driver.location}

//                 </p>
//                 <p>
//                 <strong>Status:</strong> {ride.status} 
//                 </p>

//                   <p>
//                   <strong>updatedAt:</strong> {ride.updatedAt}  
//                 </p>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//   );
// };

// export default RiderDetails;


import { useState, useEffect } from "react";
import { useParams, useNavigate, } from "react-router";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  ArrowLeft,
  MapPin,
  Car,
  Bike,
  DollarSign,
  Clock,
  User,
  Phone,
  Mail,
  Calendar,
  Navigation,
  Route,
} from "lucide-react";
import type { IRide } from "@/types/ride.type";



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

export default function RiderDetails() {


  const { userId } = useParams<{ userId: string }>();
  const navigate = useNavigate();
  const [ride, setRide] = useState<IRide | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  console.log(setRide)

  useEffect(() => {
    if (userId) {
      fetchRideDetails();
    }
  }, [userId]);

  const fetchRideDetails = async () => {
    try {
      setIsLoading(true);
      setError(null);


    } catch (err) {
      setError("Failed to load ride details");
      console.error("Error fetching ride details:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string | Date) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatTime = (dateString: string | Date) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };


  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          <p className="text-muted-foreground">Loading ride details...</p>
        </div>
      </div>
    );
  }

  if (error || !ride) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error || "Ride not found"}</p>
          <Button onClick={() => navigate(-1)}>Go Back</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate(-1)}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Ride Details</h1>
          <p className="text-muted-foreground">
            Complete information about your ride #{ride._id?.slice(-6)}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Ride Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Route className="h-5 w-5" />
                Ride Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Status and Basic Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">
                    Status
                  </label>
                  <Badge
                    variant="outline"
                    className={`mt-1 ${statusConfig[ride.status as keyof typeof statusConfig]
                        ?.color
                      }`}
                  >
                    {
                      statusConfig[ride.status as keyof typeof statusConfig]
                        ?.label
                    }
                  </Badge>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">
                    Vehicle Type
                  </label>
                  <Badge
                    variant="outline"
                    className={`mt-1 ${vehicleTypeConfig[
                        ride.vehicleType as keyof typeof vehicleTypeConfig
                      ]?.color
                      }`}
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
                </div>
              </div>

              {/* Route Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Route Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
                    <MapPin className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="font-medium text-green-900">
                        Pickup Location
                      </div>
                      <div className="text-sm text-green-700">
                        {ride.pickupAddress}
                      </div>
                      <div className="text-xs text-green-600 mt-1">
                        Coordinates:{" "}
                        {ride.destinationLocation.lat}{""}{ride.destinationLocation.lng}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-0.5 h-8 bg-gray-300"></div>
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                    <MapPin className="h-5 w-5 text-red-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <div className="font-medium text-red-900">
                        Destination
                      </div>
                      <div className="text-sm text-red-700">
                        {ride.destinationAddress}
                      </div>
                      <div className="text-xs text-red-600 mt-1">
                        Coordinates:{" "}
                        {ride.destinationLocation.lat}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ride Timeline */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Ride Timeline</h3>
                <div className="space-y-4">
                  {ride.rideTimestamps?.requestedAt && (
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="font-medium">Ride Requested</div>
                        <div className="text-sm text-muted-foreground">
                          {formatDate(ride.rideTimestamps?.requestedAt)}
                        </div>
                      </div>
                      <div className="text-sm font-mono text-muted-foreground">
                        {formatTime(ride.rideTimestamps?.requestedAt)}
                      </div>
                    </div>
                  )}

                  {ride.rideTimestamps?.acceptedAt && (
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="font-medium">Driver Accepted</div>
                        <div className="text-sm text-muted-foreground">
                          {formatDate(ride.rideTimestamps?.acceptedAt)}
                        </div>
                      </div>
                      <div className="text-sm font-mono text-muted-foreground">
                        {formatTime(ride.rideTimestamps?.acceptedAt)}
                      </div>
                    </div>
                  )}

                  {ride.rideTimestamps?.pickedUpAt && (
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="font-medium">Passenger Picked Up</div>
                        <div className="text-sm text-muted-foreground">
                          {formatDate(ride.rideTimestamps?.pickedUpAt)}
                        </div>
                      </div>
                      <div className="text-sm font-mono text-muted-foreground">
                        {formatTime(ride.rideTimestamps?.pickedUpAt)}
                      </div>
                    </div>
                  )}

                  {ride.rideTimestamps?.completedAt && (
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                      <div className="flex-1">
                        <div className="font-medium">Ride Completed</div>
                        <div className="text-sm text-muted-foreground">
                          {formatDate(ride.rideTimestamps?.completedAt)}
                        </div>
                      </div>
                      <div className="text-sm font-mono text-muted-foreground">
                        {formatTime(ride.rideTimestamps?.completedAt)}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Driver Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Driver Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="font-medium">
                    Driver #{ride.driver?.slice(-6) || "N/A"}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Professional driver with excellent rating
                  </div>
                  <div className="flex items-center gap-4 mt-2 text-sm">
                    <div className="flex items-center gap-1">
                      <Phone className="h-3 w-3" />
                      <span className="text-muted-foreground">
                        {ride.userId}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Mail className="h-3 w-3" />
                      <span className="text-muted-foreground">
                        driver@rideexpress.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Ride Summary */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Navigation className="h-5 w-5" />
                Ride Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-green-50 rounded-lg border border-green-200">
                  <DollarSign className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-900">
                    ${ride.fare?.toFixed(1)}
                  </div>
                  <div className="text-xs text-green-700">Total Faresfdsf</div>
                </div>
                <div className="text-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <MapPin className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-900">
                    {ride.paymentMethod}
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Ride ID</span>
                  <span className="font-mono text-sm font-medium">
                    #{ride?._id?.slice(-6)}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Requested
                  </span>
                  <span className="text-sm font-medium">
                    {ride.rideTimestamps?.requestedAt
                      ? formatDate(ride.rideTimestamps?.requestedAt)
                      : "—"}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Completed
                  </span>
                  <span className="text-sm font-medium">
                    {ride.rideTimestamps?.completedAt
                      ? formatDate(ride.rideTimestamps.completedAt)
                      : "—"}
                  </span>
                </div>
                {ride.rideTimestamps?.requestedAt && ride.rideTimestamps.completedAt && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Duration
                    </span>
                    <span className="text-sm font-medium">
                      {Math.round(
                        (new Date(ride.rideTimestamps.completedAt).getTime() -
                          new Date(ride.rideTimestamps.requestedAt).getTime()) /
                        (1000 * 60)
                      )}{" "}
                      min
                    </span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button className="w-full" variant="outline">
                <Phone className="h-4 w-4 mr-2" />
                Contact Driver
              </Button>
              <Button className="w-full" variant="outline">
                <Navigation className="h-4 w-4 mr-2" />
                View Route
              </Button>
              <Button className="w-full" variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule Similar Ride
              </Button>
            </CardContent>
          </Card>
          <div className="flex justify-end gap-3 mt-8">
            <Button
              variant="outline"
              // onClick={() => setShowDetailsModal(false)}
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

