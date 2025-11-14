

export interface IRide {
    _id?: string;
    pickupLocation: ILocation;
    pickupAddress: string;
    destinationLocation: ILocation;
    destinationAddress: string;
    date: Date;
    status: RideStatus;
    rideTimestamps?: IRidetimestamps;
    paymentMethod?: paymentMethod;
    fare: number;
    vehicleType:VehicleType;
    userId?: string;
    driver: string;
    payment?: string;
    createdAt:string;
    updatedAt: string;

}

export interface ILocation {
    lat: number;
    lng: number;

};

export interface IRidetimestamps {
    requestedAt?: Date;
    acceptedAt?: Date;
    pickedUpAt?: Date;
    in_transit?: Date;
    completedAt?: Date;
    cancelledAt?: Date;
}

export type RideStatus =
    | "requested"
    | "accepted"
    | "picked_up"
    | "in_transit"
    | "completed"
    | "cancelled_by_rider"
    | "cancelled_by_driver";
    

export type paymentMethod =
    | "cash"
    | "card";
    
export type VehicleType =
  |"CAR"
  |"BIKE";

