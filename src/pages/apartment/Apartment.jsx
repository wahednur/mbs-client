import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosCommon from "../../hooks/useAxiosCommon";
import useRole from "../../hooks/useRole";
import LoadingSpiner from "./../../components/shared/loading/LoadingSpiner";
import FlatCard from "./FlatCard";
const Apartment = () => {
  const { user } = useAuth();
  const axiosCommon = useAxiosCommon();
  const [searchFlat, setSearchFlat] = useState();
  const [page, setPage] = useState(0); // starts from 0
  const flatsPerPage = 6;
  const [role] = useRole();
  const navigate = useNavigate();

  const { data = {}, isLoading } = useQuery({
    queryKey: ["flats", page],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/flats", {
        params: { page: page + 1, limit: flatsPerPage },
      });
      return data;
    },
  });

  const handleSearch = async (e) => {
    e.preventDefault();
    const form = e.target;
    const min = form.min.value;
    const max = form.max.value;

    const { data } = await axiosCommon.get("/searching", {
      params: { min, max },
    });

    setSearchFlat(data);
  };

  const flatMap = searchFlat ?? data.flats ?? [];

  if (isLoading) return <LoadingSpiner />;
  return (
    <div className="container">
      {/* Search form */}
      <div className="flex items-center justify-center mt-10">
        <form onSubmit={handleSearch}>
          <div className="flex justify-between items-center gap-6">
            <input
              type="number"
              className="frm-ctr"
              placeholder="Minimum price"
              name="min"
            />
            <input
              type="number"
              className="frm-ctr"
              placeholder="Maximum price"
              name="max"
            />
            <button type="submit" className="btn btn-filled h-10">
              <FiSearch />
            </button>
          </div>
        </form>
      </div>

      {/* Apartment Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 ">
        {flatMap.map((flat) => (
          <FlatCard key={flat?._id} flat={flat} />
        ))}
      </div>

      {/* Pagination */}
      {!searchFlat && (
        <div className="my-8">
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next >"
            previousLabel="< Prev"
            onPageChange={({ selected }) => setPage(selected)}
            pageRangeDisplayed={3}
            pageCount={data.totalPages || 1}
            forcePage={page}
            containerClassName="flex justify-center gap-2 mt-6 text-xl"
            pageClassName="px-3 py-1 border rounded cursor-pointer hover:bg-primary duration-300 hover:text-white  "
            activeClassName="bg-primary text-white "
            previousClassName={`px-3 py-1 border rounded bg-primary text-white cursor-pointer hover:bg-primary duration-300 hover:text-white ${
              page === 0 ? "opacity-50 cursor-not-allowed bg-gray-300" : ""
            }`}
            nextClassName={`px-3 py-1 border rounded bg-primary text-white cursor-pointer hover:bg-primary duration-300 hover:text-white ${
              page + 1 === data.totalPages
                ? "opacity-50 cursor-not-allowed bg-gray-300"
                : "bg-primary"
            }`}
            disabledClassName="opacity-50 cursor-not-allowed bg-gray-300"
          />
        </div>
      )}
    </div>
  );
};

export default Apartment;
