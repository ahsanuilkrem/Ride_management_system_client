import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ReactNode } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

// type UserType = {
//     _id: string;
//     role: string;
//     isActive: string;
//     isBlocked: string;
// };

// type UpdateModalProps = {
//     user: UserType;
// };

const formSchema = z.object({
    isBlocked: z.string()
});



interface IProps {
    children: ReactNode;
    onConfirm: () => void;
   
}

//  { user }: UpdateModalProps

export function UpdateModal({ children, onConfirm, }: IProps) {

    

    const form = useForm<z.infer<typeof formSchema>>({
         resolver: zodResolver(formSchema),
        defaultValues: {
            isBlocked: "",
        },
    });

    const onSubmit = async (data: z.infer<typeof formSchema>) => {

        onConfirm()
        console.log(data)

        // const payload = {
        //     _id: user._id,
        //     isBlocked: data,

        // };

        // try {
        //     const res = await users(data).unwrap();
        //     console.log(res)
        // } catch (error) {
        //     console.log(error)
        // }
    };


    return (
        <Dialog>
            <form id="updateUser">
                <DialogTrigger asChild>
                    {children}
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>User Update Action</DialogTitle>
                    </DialogHeader>

                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="isBlocked"
                                render={({ field }) => (
                                    <FormItem className="flex-1">
                                        <FormLabel>BLOCKED</FormLabel>
                                        <Select
                                            onValueChange={field.onChange}
                                            defaultValue={field.value}

                                        >
                                            <FormControl>
                                                <SelectTrigger className="w-full">
                                                    <SelectValue />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent>

                                                <SelectGroup>
                                                    <SelectItem value="BLOCKED">BLOCKED</SelectItem>
                                                    <SelectItem value="UNBLOCKED">UNBLOCKED </SelectItem>

                                                </SelectGroup>


                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" >Save changes</Button>
                        </form>
                    </Form>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>

                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
