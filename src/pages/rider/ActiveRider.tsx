/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { useCancelRideMutation, useGetActiveRiderQuery } from "@/redux/features/rider/rider.api";


export default function ActiveRider() {
  const {
    data: activeRide,
    isFetching,
    refetch,
  } = useGetActiveRiderQuery();
  const [cancelRide, { isLoading }] = useCancelRideMutation();
// console.log(activeRide)
  const handleCancel = async () => {
    if (!activeRide?._id) return;
    try {
      const res = await cancelRide({ rideId: activeRide._id }).unwrap();
      toast.success(res.message || "Ride cancelled");
      await refetch();
    } catch (err: any) {
      toast.error(err?.data?.message || "Failed to cancel ride");
      console.log(err)
    }
  };

  const canCancel = activeRide && ["requested"].includes(activeRide.status);

  if (isFetching) {
    return (
      <div className="p-6">
        <Card>
          <CardHeader>
            <CardTitle>Active ride</CardTitle>
          </CardHeader>
          <CardContent>Loading...</CardContent>
        </Card>
      </div>
    );
  }

  if (!activeRide) {
    return (
      <div className="p-6">
        <Card>
          <CardHeader>
            <CardTitle>No active ride</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              You are not currently on any ride.
            </p>
            <Button asChild>
              <Link to="rederDashboard/requestRide">Request a ride</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>Active ride</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-muted-foreground">Pickup</div>
              <div className="font-medium">
                {activeRide.pickupAddress}
              </div>
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Destination</div>
              <div className="font-medium">
                {activeRide.destinationAddress}
              </div>
            </div>
          </div>
          <Separator />
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-muted-foreground">Status</div>
              <div className="font-semibold">
                {activeRide.status.replaceAll("_", " ")}
              </div>
            </div>
            <div>
              <div className="text-muted-foreground">Fare</div>
              <div className="font-semibold">৳ {activeRide.fare ?? 0}</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-muted-foreground">PaymentMethod</div>
              <div className="font-semibold">
                {activeRide.paymentMethod} 
              </div>
            </div>
            <div>
              <div className="text-muted-foreground">Vehicle</div>
              <div className="font-semibold">{activeRide.vehicleType}</div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-3 pt-2">
            {canCancel && (
              <Button
                 variant="destructive"
                onClick={handleCancel}
                disabled={isLoading}
              >
                {isLoading ? "Cancelling..." : "Cancel ride"}
               
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}




