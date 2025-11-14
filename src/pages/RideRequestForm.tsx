/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  Form, FormField, FormItem, FormLabel, FormControl, FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Select, SelectTrigger, SelectValue, SelectContent, SelectItem
} from "@/components/ui/select";
import {
  Popover, PopoverTrigger, PopoverContent
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import { useRequestRiderMutation } from "@/redux/features/rider/rider.api";
import z from "zod";
import { locationSchema, paymentMethods } from "@/types";
import { format, formatISO } from "date-fns";
import { useGetDriverQuery } from "@/redux/features/driver/driver.api";



const formSchema = z.object({
  pickupLocation: locationSchema,
  pickupAddress: z.string({message:"address must be required"}),
  destinationLocation: locationSchema,
  destinationAddress: z.string({message:"address must be required"}),
  date: z.date({ message: "Date is required" }),
  vehicleType: z.enum(["CAR", "BIKE"]),
  driver: z.string(),
  paymentMethod: z.enum(["cash", "card"]),
});



const RideRequestForm = () => {
  const {data: driverData, isLoading: driverLoading } = useGetDriverQuery(undefined);
  const [requestRider] = useRequestRiderMutation();
  const navigate = useNavigate();
  
  const driverOption = driverData?.map((item: { _id: string; name: string,} )=> ({
    value : item._id,
    label : item.name,
  
  }))
// licenseNumber
  const form = useForm<z.infer<typeof formSchema>>({
    
    resolver: zodResolver(formSchema),
    defaultValues: {
      pickupLocation:{ lat: 0, lng: 0, },
      pickupAddress: "",
      destinationLocation: { lat: 0, lng: 0,},
      destinationAddress: "",
      date: new Date(),
      vehicleType: "CAR",
      driver: "",
      paymentMethod: "cash",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
  
    const payload = {
      ...data,
      date: formatISO(data.date),
      
    };
  
    try {
      const result = await requestRider(payload).unwrap();
      if (result.success) {
        toast.success("Ride requested successfully!");
        form.reset();
      }
      
    } catch (err: any) {
      if (err.data?.message === "no token recievd") {
        navigate("/login");
      }
      toast.error(err.data?.message || "Failed to request ride");
    }
  };

  return (
    <div className="max-w-screen-md mx-auto p-4 bg-fuchsia-100 rounded-2xl border sm:px-3 border-gray-300 mt-8">
      <h3 className="text-2xl font-semibold mb-4">Get a Ride</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

          {/* Pickup Location */}
          <FormField
            control={form.control}
            name="pickupLocation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pickup Location</FormLabel>
                <div className="flex  gap-4">
                  <Input
                    type="number"
                    placeholder="Latitude"
                    value={field.value.lat}
                    onChange={(e) =>
                      field.onChange({ ...field.value, lat: parseFloat(e.target.value) })
                    }
                  />
                  <Input
                    type="number"
                    placeholder="Longitude"
                    value={field.value.lng}
                    onChange={(e) =>
                      field.onChange({ ...field.value, lng: parseFloat(e.target.value) })
                    }
                  />
                    
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

           {/* Pickup address*/}
          <FormField
            control={form.control}
            name="pickupAddress"
            rules={{ required: "Pickup address is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Pickup Address</FormLabel>
                <FormControl>
                  <Input placeholder="Enter pickup Address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />


          {/* Destination Location */}
          <FormField
            control={form.control}
            name="destinationLocation"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Destination Location</FormLabel>
                <div className="flex gap-4">
                  <Input
                    type="number"
                    placeholder="Latitude"
                    value={field.value.lat}
                    onChange={(e) =>
                      field.onChange({ ...field.value, lat: parseFloat(e.target.value) })
                    }
                  />
                   <Input
                    type="number"
                    placeholder="Longitude"
                    value={field.value.lng}
                    onChange={(e) =>
                      field.onChange({ ...field.value, lng: parseFloat(e.target.value) })
                    }
                  />
                
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

        
               {/* destination Address */}
           <FormField
            control={form.control}
            name="destinationAddress"
            rules={{ required: "destination Address is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>destination Address</FormLabel>
                <FormControl>
                  <Input placeholder="end destination Address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />



          {/* Date Picker */}
          <div className="flex gap-4">
          <FormField
            control={form.control}
            name="date"
            rules={{ required: "Date is required" }}
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl className="w-full">
                      <Button
                        variant={"outline"}
                        className={cn(
                          "pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? format(field.value, "PPP") : <span>Select date</span>}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className=" p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={new Date(field.value)}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date < new Date(new Date().setDate(new Date().getDate() - 1))
                      }
                      captionLayout="dropdown"
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />         

           <FormField
                  control={form.control}
                  name="vehicleType"
                  render={({ field }) => (
                    <FormItem className="flex-1">
                      <FormLabel>Vehicle type</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl className="w-full">
                          <SelectTrigger>
                            <SelectValue placeholder="Select vehicle" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="CAR">Car</SelectItem>
                          <SelectItem value="BIKE">Bike</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

          </div>

          {/* Driver data */}

          <FormField
          control={form.control}
          name="driver"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormLabel>Driver</FormLabel>
              <Select 
              onValueChange={field.onChange} 
              defaultValue={field.value}
              disabled={driverLoading}>
                <FormControl className="w-full">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Driver" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {
                    driverOption?.map((item: {label:string, value:string} ) => (
                      <SelectItem value={item.value}>{item.label}</SelectItem>
                    )) 
                  }
                  
                  
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />


          {/* Payment Method */}
          <FormField
            control={form.control}
            name="paymentMethod"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Payment Method</FormLabel>
                <FormControl>
                  <div className="flex flex-wrap gap-4">
                    {paymentMethods.map(({ label, value }) => (
                      <label key={value} className="inline-flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          value={value}
                          checked={field.value === value}
                          onChange={() => field.onChange(value)}
                          className="accent-fuchsia-500"
                        />
                        <span>{label}</span>
                      </label>
                    ))}
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit */}
          <Button type="submit" variant="default" className="w-full">
            Request Ride
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default RideRequestForm;

