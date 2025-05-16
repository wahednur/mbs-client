import { useState } from "react";
import { toast } from "sonner";
import Button from "../../../../components/shared/buttons/Button";
import DashSiteTitle from "../../../../components/shared/site-title/DashSiteTitle";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import useCitiData from "../../../../hooks/useCitiData";
import { imageUpload } from "../../../../utils/utils";

const AddApartment = () => {
  const { user } = useAuth();
  const [cities] = useCitiData();
  const [cityCorp, setCityCorp] = useState("Dhaka North");
  const [area, setArea] = useState("");
  const [gas, setGas] = useState("");
  const [electicity, setElecticity] = useState("");
  const [lift, setLift] = useState("");
  const [genarator, setGenarator] = useState("");
  const [prevImg, setPrevImg] = useState("");

  const cityCorps = [
    ...new Set(cities.map((feature) => feature.city_corporation)),
  ];

  const axiosSecure = useAxiosSecure();

  const handleAddApartment = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const flatQty = form.flatQty.value;
    const state = form.state.value;
    // const cityCorporation = cityCorp
    // const area = area
    const road = form.road.value;
    const appartmentNo = form.appartmentNo.value;
    const description = form.description.value;
    // const gas = form.name.value;
    // const elec = form.name.value;
    // const lift = form.name.value;
    const garage = form.garage.value;
    const photo = form.image.files[0];
    const image = await imageUpload(photo);
    // const ganarator = form.name.value;

    const newApartment = {
      name,
      flatQty,
      state,
      cityCorp,
      area,
      road,
      appartmentNo,
      description,
      gas,
      electicity,
      genarator,
      lift,
      garage,
      image,
      user: {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      },
    };
    try {
      await axiosSecure.post(`/apartments/${user?.email}`, newApartment);
      toast.success(
        <p>
          <span className="text-primary">{name} </span> Added Successfully
        </p>
      );
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="w-full bg-white p-5 rounded-xl">
      <DashSiteTitle title={"Add apartment"} />
      <h2 className="text-2xl md:text-3xl font-bold text-center">
        Add apartment
      </h2>
      <form onSubmit={handleAddApartment} action="w-full">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-7/12 ">
            <div className="collum">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your apartment name"
                className="frm-ctr"
                required
              />
            </div>
            <div className="collum mb-5">
              <label htmlFor="flatQty">Total Flat Number</label>
              <input
                type="number"
                name="flatQty"
                placeholder="Enter your total flat number"
                className="frm-ctr"
                required
              />
            </div>
            <div className="p-4 border rounded-xl border-primary/30 relative top-5">
              <p className="absolute -top-4 left-3 bg-white px-5">Address</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="collum">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    name="state"
                    placeholder="Dhaka"
                    className="frm-ctr"
                    disabled
                    value={"Dhaka"}
                  />
                </div>
                <div className="collum">
                  <label htmlFor="cityCorp">City Corporation</label>
                  <select
                    name="cityCorp"
                    onChange={(e) => setCityCorp(e.target.value)}
                    className="frm-ctr"
                  >
                    {cityCorps.map((city, idx) => (
                      <option key={idx}>{city}</option>
                    ))}
                  </select>
                </div>
                <div className="collum">
                  <label htmlFor="area">Area</label>
                  <select
                    name="area"
                    className="frm-ctr"
                    onChange={(e) => setArea(e.target.value)}
                  >
                    {cities
                      .filter((f) => f.city_corporation === cityCorp)
                      .map((area) => (
                        <option key={area.name}>{area.name}</option>
                      ))}
                  </select>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="collum">
                  <label htmlFor="road">Road No</label>
                  <input
                    type="text"
                    name="road"
                    placeholder="Road number"
                    className="frm-ctr"
                    required
                  />
                </div>
                <div className="collum">
                  <label htmlFor="appartmentNo">Apartment No</label>
                  <input
                    type="text"
                    name="appartmentNo"
                    placeholder="Apartment number"
                    className="frm-ctr"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="collum mt-10">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                rows={5}
                className="frm-ctr"
                required
              ></textarea>
            </div>
            <div className="flex gap-6">
              <div className="collum">
                <label htmlFor="gas">Gas</label>
                <select
                  name="gas"
                  onChange={(e) => setGas(e.target.value)}
                  className="frm-ctr"
                >
                  <option>Line gash post paid</option>
                  <option>Line gash prepaid</option>
                  <option>Cylinder Gas</option>
                </select>
              </div>
              <div className="collum">
                <label htmlFor="elect">Electricity</label>
                <select
                  name="elect"
                  onChange={(e) => setElecticity(e.target.value)}
                  className="frm-ctr"
                >
                  <option>Post Paid</option>
                  <option>Prepaid</option>
                </select>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="collum">
                <label htmlFor="genarator">Genarator</label>
                <select
                  name="ganarator"
                  onChange={(e) => setGenarator(e.target.value)}
                  className="frm-ctr"
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div className="collum">
                <label htmlFor="lift">Lift</label>
                <select
                  name="lift"
                  onChange={(e) => setLift(e.target.value)}
                  className="frm-ctr"
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div className="collum">
                <label htmlFor="garage">Garage No</label>
                <input
                  type="number"
                  className="frm-ctr"
                  name="garage"
                  placeholder="Enter total garage"
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="collum mt-10">
              <label htmlFor="image">
                <span className="block mb-2 text-sm bg-primary/80 text-white p-2 rounded-md text-center">
                  Select Image:
                </span>
                <img className="w-24 mx-auto mt-6" src={prevImg} alt="" />
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
            <div className="mt-10">
              <Button
                title={"Add Apartment"}
                btnType={"btn-filled w-full"}
                submit={"submit"}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddApartment;
