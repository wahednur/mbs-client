import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";
import useAuth from "../../../../hooks/useAuth";
import useAxiosCommon from "../../../../hooks/useAxiosCommon";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { imageUpload } from "../../../../utils/utils";
import ApartmentInfo from "../apartment/ApartmentInfo";
import Button from "./../../../../components/shared/buttons/Button";

const AddFlat = () => {
  const { user } = useAuth();
  const axiosCommon = useAxiosCommon();
  const axiosSecure = useAxiosSecure();
  const [apartment, setApartment] = useState("");
  const [apartmentId, setApartmentId] = useState("");
  const [prevImg, setPrevImg] = useState("");
  const { data: apartments = [] } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/apartments");
      return data;
    },
  });

  const { data: apart = {} } = useQuery({
    queryKey: ["apartment", apartmentId],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/apartment/${apartmentId}`);
      return data;
    },
    // enabled: id,
  });

  const handleAddFlat = async (e) => {
    e.preventDefault();
    const form = e.target;
    const floor = form.floor.value;
    const block = form.block.value;
    const rent = form.rent.value;
    const bed = form.bed.value;
    const bathroom = form.bathroom.value;
    const balcony = form.balcony.value;
    const store = form.store.value;
    const photo = form.image.files[0];
    const image = await imageUpload(photo);

    const newFlat = {
      apartment: apart,
      floor,
      block,
      rent,
      bed,
      bathroom,
      balcony,
      store,
      image,
    };
    try {
      await axiosSecure.post(`/flats/${user?.email}`, newFlat);
      toast.success(`Flat added successfully`);
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  console.log(apartmentId, apartment);
  return (
    <div className="bg-white p-5 rounded-xl">
      <h1 className="dash-title">Add Flat</h1>
      <div className="w-full mt-10">
        <form onSubmit={handleAddFlat} className="w-full">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-8/12">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="collum">
                  <label htmlFor="apartment">Apartment</label>
                  <select
                    className="frm-ctr"
                    onChange={(e) => {
                      const selectId = e.target.value;
                      setApartmentId(selectId);
                      const selectApartment = apartments.find(
                        (app) => app._id === selectId
                      );
                      setApartment(selectApartment?.name);
                    }}
                  >
                    <option value="">Select apartment</option>
                    {apartments.map((app) => (
                      <option key={app._id} value={app?._id}>
                        {app?.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="collum">
                  <label htmlFor="floor">Floor Name</label>
                  <input
                    type="text"
                    placeholder="Floor Name"
                    className="frm-ctr"
                    name="floor"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="collum">
                  <label htmlFor="block">Block</label>
                  <input type="text" name="block" className="frm-ctr" />
                </div>
                <div className="collum">
                  <label htmlFor="rent">Rent</label>
                  <input type="number" name="rent" className="frm-ctr" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="collum">
                  <label htmlFor="bed">Bed Room</label>
                  <input type="number" name="bed" className="frm-ctr" />
                </div>
                <div className="collum">
                  <label htmlFor="bathroom">Bathroom</label>
                  <input type="number" name="bathroom" className="frm-ctr" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="collum">
                  <label htmlFor="balcony">Balcony</label>
                  <input type="number" name="balcony" className="frm-ctr" />
                </div>
                <div className="collum">
                  <label htmlFor="store">Store Room</label>
                  <input type="number" name="store" className="frm-ctr" />
                </div>
              </div>
              <div className="collum mt-10">
                <label htmlFor="image">
                  <span className="block mb-2 text-sm bg-primary/80 text-white p-2 rounded-md text-center">
                    Select Image:
                  </span>
                  <img className="w-1/2 mx-auto mt-6" src={prevImg} alt="" />
                </label>
                <input
                  required
                  type="file"
                  id="image"
                  name="image"
                  accept="image/*"
                  onChange={(e) =>
                    setPrevImg(URL.createObjectURL(e.target.files[0]))
                  }
                />
              </div>
              <div className="flex justify-center items-center mt-6">
                <Button
                  title={"Add Flat"}
                  btnType={"btn-filled"}
                  submit={"submit"}
                />
              </div>
            </div>
            <div className="w-full md:w-4/12">
              <h4 className="text-2xl">Apartment information</h4>
              <div>
                <ApartmentInfo apart={apart} />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFlat;
