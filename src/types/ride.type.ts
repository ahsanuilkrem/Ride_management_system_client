

export interface IRide {
    _id?: string;
    pickupLocation: ILocation;
    pickupAddress: string;
    destinationLocation: ILocation;
    destinationAddress: string;
    date: Date;
    time: string;
    status?: RideStatus;
    rideTimestamps?: IRidetimestamps;
    paymentMethod?: paymentMethod;
    user?: string;
    driver: string;
    payment?: string;
    createdAt:string;

}

export interface ILocation {
    lat: number;
    lng: number;

};

export interface IRidetimestamps {
    requestedAt?: Date;
    acceptedAt?: Date;
    pickedUpAt?: Date;
    inTransitAt?: Date;
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
    | "cancelled_by_driver"
    | "no_driver_available";

export type paymentMethod =
    | "cash"
    | "card"
    | "wallet";

