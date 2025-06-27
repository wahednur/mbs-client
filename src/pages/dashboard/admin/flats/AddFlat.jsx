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
  const [selectedApartment, setSelectedApartment] = useState(null);
  const [selectedFloor, setSelectedFloor] = useState(null);
  const [selectedFlat, setSelectedFlat] = useState(null);
  console.log(selectedFloor?.floorNumber);
  const { data: apartments = [] } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const { data } = await axiosCommon.get("/apartments");
      return data;
    },
  });

  const { data: apart = {} } = useQuery({
    queryKey: ["apartment"],
    queryFn: async () => {
      const { data } = await axiosCommon.get(
        `/apartment/${selectedApartment?._id}`
      );
      return data;
    },
    // enabled: id,
  });

  const handleAddFlat = async (e) => {
    e.preventDefault();
    const form = e.target;
    const floor = selectedFloor?.floorNumber;
    const flat = selectedFlat;
    const rent = selectedFlat.rent;
    const bed = form.bed.value;
    const bathroom = form.bathroom.value;
    const balcony = form.balcony.value;
    const store = form.store.value;
    const photo = form.image.files[0];
    const image = await imageUpload(photo);

    const newFlat = {
      apartId: apart?._id,
      // apartment: apart,
      floor,
      flat,
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
      setPrevImg("");
    } catch (error) {
      console.log(error);
    }
  };

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
                    onChange={(e) => {
                      const apartmentId = e.target.value;
                      const apartment = apartments.find(
                        (a) => a._id === apartmentId
                      );
                      setSelectedApartment(apartment);
                      setSelectedFloor(null);
                      setSelectedFlat(null);
                    }}
                    className="frm-ctr"
                  >
                    <option value="">Select Apartment</option>
                    {apartments.map((apt) => (
                      <option key={apt._id} value={apt._id}>
                        {apt.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="collum">
                  <label htmlFor="floor">Floor Name</label>
                  {selectedApartment && (
                    <select
                      onChange={(e) => {
                        const floorNo = parseInt(e.target.value);
                        const floor = selectedApartment.floors.find(
                          (f) => f.floorNumber === floorNo
                        );
                        setSelectedFloor(floor);
                        setSelectedFlat(null);
                      }}
                      className="frm-ctr"
                    >
                      <option value="">Select Floor</option>
                      {selectedApartment.floors.map((floor) => (
                        <option
                          key={floor.floorNumber}
                          value={floor.floorNumber}
                        >
                          Floor {floor.floorNumber}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="collum">
                  <label htmlFor="block">Flat Number</label>
                  {selectedFloor && (
                    <select
                      onChange={(e) => {
                        const flatNo = e.target.value;
                        const flat = selectedFloor.flats.find(
                          (f) => f.flatNo === flatNo
                        );
                        setSelectedFlat(flat);
                      }}
                      className="frm-ctr"
                    >
                      <option value="">Select Flat</option>
                      {selectedFloor.flats.map((flat) => (
                        <option key={flat.flatNo} value={flat.flatNo}>
                          {flat.flatNo}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
                <div className="collum">
                  {selectedFlat && (
                    <div className="p-3 text-2xl">
                      <p>
                        <strong>Rent:</strong> {selectedFlat.rent} BDT
                      </p>
                    </div>
                  )}
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
