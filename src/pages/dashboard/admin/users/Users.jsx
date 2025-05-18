import { useQuery } from "@tanstack/react-query";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import LoadingSpiner from "../../../../components/shared/loading/LoadingSpiner";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const Users = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: users = [],
    isLoading,
    // refetch,
  } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/users/${user?.email}`);
      return data;
    },
    // enabled: user?.email,
  });
  if (isLoading) return <LoadingSpiner />;
  return (
    <div className="bg-white p-5 rounded-xl">
      {users.length <= 0 ? (
        <div className="w-full min-h-[calc(100vh-200px)] flex justify-center items-center">
          <h2>No user data</h2>
        </div>
      ) : (
        <div>
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th>Sn</th>
                <th>Imaage</th>
                <th>Name</th>
                <th>email</th>
                <th>role</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={user?._id}>
                  <td>{idx + 1}</td>
                  <td>
                    <img
                      className="w-14 h-14 rounded-full"
                      src={user?.image}
                      alt={user.name}
                    />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <div className="flex items-center justify-center gap-2">
                      <button className="btn btn-success">
                        <FaEdit />
                      </button>
                      <button className="btn btn-filled">
                        <FaRegTrashCan />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Users;
