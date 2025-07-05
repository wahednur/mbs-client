import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import useAreaSearch from "../../hooks/useAreaSearch";
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

  const [areaData, setAreaData] = useState({});

  const areas = ["Gulshan", "Banani", "Dhanmondi", "Banasree Block-C"];
  useEffect(() => {
    const fetchFlats = async () => {
      try {
        const promises = areas.map((area) => axiosCommon.get(`/area/${area}`));
        const responses = await Promise.all(promises);

        const allData = {};
        responses.forEach((res, index) => {
          allData[areas[index]] = res.data;
        });

        setAreaData(allData);
      } catch (err) {
        console.error("Error fetching area data", err);
      }
    };

    fetchFlats();
  }, []);
  console.log("Area Data:", areaData);
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
  const gulshan = useAreaSearch("Gulshan");
  const flatMap = searchFlat ?? data.flats ?? [];
  console.log(flatMap);
  if (isLoading) return <LoadingSpiner />;
  return (
    <div className="">
      {/* Search form */}
      <div className="container">
        <div className="flex items-center justify-center mt-10 bg-white py-5 rounded-md">
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
      </div>

      {/* Apartment Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 container">
        {flatMap.map((flat) => (
          <FlatCard key={flat?._id} flat={flat} />
        ))}
      </div>

      {/* Pagination */}
      {!searchFlat && (
        <div className="my-8">
          <ReactPaginate
            breakLabel="..."
            nextLabel={<FaArrowRight />}
            previousLabel={<FaArrowLeft />}
            onPageChange={({ selected }) => setPage(selected)}
            pageRangeDisplayed={3}
            pageCount={data.totalPages || 1}
            forcePage={page}
            containerClassName="flex justify-center gap-2 mt-6 text-xl"
            pageClassName="px-3 py-1 border rounded cursor-pointer hover:bg-primary duration-300 hover:text-white  "
            activeClassName="bg-primary text-white "
            previousClassName={`px-3 py-1 flex justify-center items-center border rounded bg-primary text-white cursor-pointer hover:bg-primary duration-300 hover:text-white ${
              page === 0 ? "opacity-50 cursor-not-allowed bg-gray-300" : ""
            }`}
            nextClassName={`px-3 py-1 flex justify-center items-center border rounded bg-primary text-white cursor-pointer hover:bg-primary duration-300 hover:text-white ${
              page + 1 === data.totalPages
                ? "opacity-50 cursor-not-allowed bg-gray-300"
                : "bg-primary"
            }`}
            disabledClassName="opacity-50 cursor-not-allowed bg-gray-300"
          />
        </div>
      )}
      {/* Gulshan Area start  */}
      <div className="mt">
        <div className="space-y-12">
          {areas.map((area) => (
            <div
              key={area}
              className="mt border-t border-primary bg-white pb-16"
            >
              <div className="container">
                <h2 className="text-2xl font-bold text-primary mb-4 py-8 ">
                  {area}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {(areaData[area] || []).map((flat) => (
                    <FlatCard key={flat._id} flat={flat} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Dhanmondi Area end  */}
    </div>
  );
};

export default Apartment;
