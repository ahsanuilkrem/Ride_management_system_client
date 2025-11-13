/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAddDriverMutation } from "@/redux/features/driver/driver.api";
import { VEHICLE_TYPE } from "@/types/driver.type";
import { useForm } from "react-hook-form";
import { toast } from "sonner";


const Driver = () => {


    const [addDriver] = useAddDriverMutation();

    const form = useForm({
        defaultValues: {
            phone: "",
            address: "",
            vehicleType: "",
            vehicleNumber: "",
            vehicleModel: "",
            licenseNumber: "",

        },
    });

    const onSubmit = async (data: any) => {
        console.log(data)
        // const userInfo = {
        //   name: data.name,
        //   phone: data.phone,
        //   password: data.password,

        // }

        try {
            const result = await addDriver(data).unwrap();
            console.log(result);
            if (result.success) {
                toast.success("driver created successfully");
            }

        } catch (error) {
            console.error(error);
        }

    };

    return (
        <div className="max-w-3xl mx-auto  my-4">

            <div className="border-2 border-b-gray-400 p-4 rounded-2xl bg-fuchsia-100">
                <h2 className="text-2xl font-semibold py-3">Create a Driver</h2>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        {/* <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="name" {...field} value={field.value || ""} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        /> */}
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone</FormLabel>
                                    <FormControl>
                                        <Input placeholder="phone" {...field} value={field.value || ""} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Address</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Address" {...field} value={field.value || ""} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* Vehicle Type */}
                        <FormField
                            control={form.control}
                            name="vehicleType"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Vehicle Type</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl className="w-full">
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select vehicle type" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {Object.values(VEHICLE_TYPE).map((type) => (
                                                <SelectItem key={type} value={type}>
                                                    {type}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="vehicleNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>VehicleNumber</FormLabel>
                                    <FormControl>
                                        <Input placeholder="vehicleNumber" {...field} value={field.value || ""} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="vehicleModel"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Vehicle Model</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="e.g., Honda Civic, Toyota Camry"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="licenseNumber"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>License Number</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter your driver's license number"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-end">
                            <Button type="submit">Submit</Button>
                        </div>
                    </form>
                </Form>
            </div>

        </div>
    )

};

export default Driver;