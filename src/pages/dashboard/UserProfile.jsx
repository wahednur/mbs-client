import useAuth from "../../hooks/useAuth";
import useRole from "../../hooks/useRole";

const UserProfile = () => {
  const { user } = useAuth();
  const [role] = useRole();
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-200px)] ">
      <div className="w-full md:w-1/2 bg-white rounded-2xl p-8">
        <div className="">
          <img
            className="w-full md:w-8/12 aspect-square mx-auto rounded-full"
            src={user?.photoURL}
            alt=""
          />
          <h2 className="text-2xl mt-6">Name: {user?.displayName}</h2>
          <p>Email: {user?.email}</p>
          <p>
            Role: <span className="capitalize"> {role}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
