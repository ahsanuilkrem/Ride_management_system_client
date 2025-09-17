import { useGetallrideQuery } from "@/redux/features/rider/rider.api";





const AllRide = () => {
    const {data} = useGetallrideQuery({})
    console.log(data)
    return (
        <div>
            All rider
        </div>
    );
};

export default AllRide;