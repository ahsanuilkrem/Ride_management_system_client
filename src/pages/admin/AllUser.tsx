
import { UpdateModal } from "@/components/modules/admin/UpdateModal";
import { Button } from "@/components/ui/button";
import { Table, TableBody,  TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useAllUserQuery, useUpdateUserMutation } from "@/redux/features/auth/auth.api";

const AllUser = () => {
    const { data, isLoading, error } = useAllUserQuery({});
     const [updateuser] = useUpdateUserMutation(undefined)
    console.log(data)
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading users</div>;

  

const handleUpdateUser = async (userId: string, ) => {
       try {
            const res = await updateuser(userId).unwrap();
            console.log(res)
        } catch (error) {
            console.log(error)
        }
}
     

    return (
        <div>
            <h1>All Users</h1>
            <div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Email</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>ACTIVE</TableHead>
                            <TableHead>UNBLOCKED</TableHead>
                            <TableHead className="text-right">ACTION</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data && data?.length > 0 ? (
                            data?.map((item: {_id: string; email:string; phone: string; role:string; isActive: string; isBlocked: string}) => (
                                <TableRow key={item._id}>
                                    <TableCell className="font-medium">{item.email}</TableCell>
                                    <TableCell>{item?.phone}</TableCell>
                                    <TableCell>{item?.role}</TableCell>
                                    <TableCell>{item?.isActive}</TableCell>
                                    <TableCell>{item?.isBlocked}</TableCell>
                                    <TableCell className="text-right"> 
                                       <UpdateModal onConfirm={() => handleUpdateUser(item._id)}>
                                          <Button variant="outline">Update Blocked</Button>
                                       </UpdateModal>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <div>No users found.</div>
                        )}
                    </TableBody>
                </Table>

            </div>
        </div>
    );
};

export default AllUser;


