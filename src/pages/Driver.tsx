import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAddDriverMutation } from "@/redux/features/driver/driver.api";
import { useForm } from "react-hook-form";
import { toast } from "sonner";


const Driver = () => {


    const [addDriver] = useAddDriverMutation();

    const form = useForm({
        defaultValues: {
            name: "",
            phone: "",
            location: "",
            vehicleNumber: "",

        },
    });

    const onSubmit = async (data) => {
        console.log(data)
        // const userInfo = {
        //   name: data.name,
        //   phone: data.phone,
        //   password: data.password,

        // }

        try {
            const result = await addDriver(data).unwrap();
            console.log(result);
            if(result.success){
                 toast.success("driver created successfully");
            }
           
        } catch (error) {
            console.error(error);
        }

    };

    return (
        <div className="max-w-md mx-auto  my-4">
            
            <div className="border-2 border-b-gray-400 p-4 rounded-2xl bg-fuchsia-100">
                <h2 className="text-2xl font-semibold py-3">Create a Driver</h2>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
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
                        />
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
                            name="location"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Location</FormLabel>
                                    <FormControl>
                                        <Input placeholder="location" {...field} value={field.value || ""} />
                                    </FormControl>
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