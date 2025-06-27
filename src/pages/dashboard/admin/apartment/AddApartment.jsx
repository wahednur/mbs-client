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
  const [electricity, setElectricity] = useState("");
  const [lift, setLift] = useState("");
  const [generator, setGenerator] = useState("");
  const [prevImg, setPrevImg] = useState("");
  const [floors, setFloors] = useState([]);
  const [totalFlats, setTotalFlats] = useState(0);

  const cityCorps = [
    ...new Set(cities.map((feature) => feature.city_corporation)),
  ];

  const axiosSecure = useAxiosSecure();

  const handleAddApartment = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const state = form.state.value;

    const road = form.road.value;
    const apartmentNo = form.apartmentNo.value;
    const description = form.description.value;
    const garage = form.garage.value;
    const service = form.service.value;
    const photo = form.image.files[0];
    const image = await imageUpload(photo);
    availableFlat: totalFlats;

    const newApartment = {
      name,
      totalFlats,
      availableFlat,
      floors,
      state,
      cityCorp,
      area,
      road,
      apartmentNo,
      description,
      gas,
      electricity,
      generator,
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
      form.reset();
      setPrevImg("");
    } catch (error) {
      toast.error(error);
    }
  };

  const handleFloorGenerate = (floorCount) => {
    const temp = Array.from({ length: floorCount }, (_, i) => ({
      floorNumber: i + 1,
      flats: [],
    }));
    setFloors(temp);
  };

  const updateFlatCount = (floorNumber, flatCount) => {
    const updatedFloors = floors.map((floor) =>
      floor.floorNumber === floorNumber
        ? {
            ...floor,
            flats: Array.from({ length: flatCount }, (_, i) => ({
              flatNo: `${floorNumber}${String.fromCharCode(65 + i)}`,
              space: 0,
              rent: 0,
            })),
          }
        : floor
    );

    setFloors(updatedFloors);
    calculateTotalFlats(updatedFloors);
  };

  const updateFlatDetail = (floorNumber, flatIdx, key, value) => {
    setFloors((prev) =>
      prev.map((floor) =>
        floor.floorNumber === floorNumber
          ? {
              ...floor,
              flats: floor.flats.map((flat, i) =>
                i === flatIdx ? { ...flat, [key]: value } : flat
              ),
            }
          : floor
      )
    );
  };

  const calculateTotalFlats = (floors) => {
    const count = floors.reduce((sum, floor) => sum + floor.flats.length, 0);
    setTotalFlats(count);
  };
  console.log(totalFlats);
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
                  <label htmlFor="apartmentNo">Apartment No</label>
                  <input
                    type="text"
                    name="apartmentNo"
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
            <div className="collum mb-5">
              <label htmlFor="totalFloor">Total Floor</label>
              <input
                type="number"
                name="totalFloor"
                placeholder="Enter total floor number"
                className="frm-ctr"
                onChange={(e) => handleFloorGenerate(parseInt(e.target.value))}
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-6">
              {floors.map((floor, idx) => (
                <div key={idx} className="border p-3 rounded mb-3">
                  <h4>Floor {floor.floorNumber}</h4>
                  <input
                    type="number"
                    placeholder="Number of flats"
                    className="frm-ctr mb-2"
                    onChange={(e) =>
                      updateFlatCount(
                        floor.floorNumber,
                        parseInt(e.target.value)
                      )
                    }
                  />
                  {floor.flats.map((flat, fIdx) => (
                    <div key={fIdx} className="flex gap-2 mb-1">
                      <input
                        type="text"
                        placeholder="Flat No"
                        className="frm-ctr"
                        value={flat.flatNo}
                        onChange={(e) =>
                          updateFlatDetail(
                            floor.floorNumber,
                            fIdx,
                            "flatNo",
                            e.target.value
                          )
                        }
                      />

                      <input
                        type="number"
                        placeholder="Space (sqft)"
                        className="frm-ctr"
                        onChange={(e) =>
                          updateFlatDetail(
                            floor.floorNumber,
                            fIdx,
                            "space",
                            parseInt(e.target.value)
                          )
                        }
                      />
                      <input
                        type="number"
                        placeholder="Rent"
                        className="frm-ctr"
                        onChange={(e) =>
                          updateFlatDetail(
                            floor.floorNumber,
                            fIdx,
                            "rent",
                            parseInt(e.target.value)
                          )
                        }
                      />
                    </div>
                  ))}
                </div>
              ))}
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
                  onChange={(e) => setElectricity(e.target.value)}
                  className="frm-ctr"
                >
                  <option>Post Paid</option>
                  <option>Prepaid</option>
                </select>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="collum">
                <label htmlFor="generator">Generator</label>
                <select
                  name="generator"
                  onChange={(e) => setGenerator(e.target.value)}
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
            <div className="collum">
              <label htmlFor="service">Service Charge</label>
              <input
                type="number"
                className="frm-ctr"
                name="service"
                placeholder="Service charge"
                required
              />
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
