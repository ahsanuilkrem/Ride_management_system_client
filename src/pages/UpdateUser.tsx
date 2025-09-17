
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useUserInfoQuery, useUpdateUserMutation } from "@/redux/features/auth/auth.api"
import { useEffect } from "react"


// ✅ Validation Schema
const userUpdateSchema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().min(6, "Phone number is too short"),

})

// {  className, ...props }: React.HTMLAttributes<HTMLDivElement>
const UpdateUser = () => {

  const { data, isLoading } = useUserInfoQuery({})
  const user = data?.data

  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation()
  console.log(user?._id)

  const form = useForm<z.infer<typeof userUpdateSchema>>({
    resolver: zodResolver(userUpdateSchema),
    defaultValues: {
      name: "",
      phone: "",
    
    },
  })

       useEffect(() => {
    if (data) {
      form.reset({
        name: data.name ,
        phone: data.phone,
       
      })
    }
  }, [data, form])


  const onSubmit = async (data: z.infer<typeof userUpdateSchema>) => {

    try {
     const res = await updateUser( {userId: user?._id, ...data}).unwrap()
      console.log(res)
      alert("Profile updated successfully!")
    } catch (error) {
      console.log(error)
      alert("Failed to update profile.")
    }
  }

  // const isAdmin = user?.role === "admin"

  if (isLoading) return <div>Loading...</div>
// {cn("max-w-5xl mx-auto mt-10 bg-white p-2 rounded-md shadow", className)} {...props}
  return (
    <div className="w-2xl mx-auto mt-10 bg-white p-2 rounded-md shadow">
      <h2 className="text-2xl font-semibold mb-6">Update Profile</h2>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Name field */}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
              
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Phone Number */}
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="Phone Number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          
          

          <Button type="submit" disabled={isUpdating} className="w-full">
            {isUpdating ? "Updating..." : "Update Profile"}
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default UpdateUser;
