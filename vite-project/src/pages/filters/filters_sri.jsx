import Navbar from "../../components/navbar/navbar";
// import "./filters.css";
// import "./css.css";
import React, { useEffect, useState,useContext } from "react";
import axios from "axios";
import Select from "react-select";
import kba from "./KBA.json";
import Tabble from "./table_sri";
import { AuthContext } from "../../hooks/context/AuthContext";
import Footer from "../../components/footer/Footer";
const AppWithFilter = () => {
  const [filteredData, setFilteredData] = useState();
  const [editEnabled, setEditEnabled] = useState(true);
  const [editData, setEditData] = useState({ });
  const {user}=useContext(AuthContext);

  const handleFilteEffect = async () => {
    const location = "";
    const date = "";
    const Index = "";
    const res = await axios.post("http://localhost:3000/index/filters_sri", {
      location: location,
      date: date,
      Index: Index,
    });
    // console.log(res);
    setFilteredData(res.data);
  };

  // useEffect(() => {
  //   handleFilteEffect();
  // }, []);
  
  const [locations, setLocations] = useState("");
  const handleFilter = async (e) => {
    e.preventDefault();
    // const location = document.getElementById("location").value;
    if (selectedOption) setLocations(selectedOption.value);

    // console.log(selectedOption);
    const date = document.getElementById("date").value;
    // const Index = document.getElementById("index").value;
    // console.log(location, date, Index);
    const res = await axios.post("http://localhost:3000/index/filters_sri", {
      location: locations,
      date: date,
     
    });
    // console.log(res);
    setFilteredData(res.data);
  };
  const handleChange = (e) => {
    setEditData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  ///FILTER
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (inputValue) => {
    setInputValue(inputValue);
  };

  const handleOptionChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setInputValue("");
  };

  // Filter options based on input value
  const filteredOptions = kba.filter((option) =>
    option.KBA.toLowerCase().startsWith(inputValue.toLowerCase())
  );

  // Map options for react-select format
  const options = filteredOptions.map((option) => ({
    value: option.KBA,
    label: option.KBA,
  }));
  //FILTER ENDS
 

  return (
    <>
    <Navbar />
    <div style={{borderRadius:"2rem"}} className="flex conti flex-col p-5 mt-5 items-center">
    <h1 className="text-2xl font-bold mb-4" style={{color:"white",fontWeight:"bold"}}>Standardized Runoff Index (SRI)</h1>
    <div className="flex flex-wrap gap-4 mb-4 justify-center items-center">
        <label className="flex flex-col">
            <span className="mb-1" style={{color:"white",fontWeight:"bold",fontSize:"1.5rem"}}>Select KBA:  </span>
            <Select
                value={selectedOption}
                onChange={handleOptionChange}
                onInputChange={handleInputChange}
                options={options}
                inputValue={inputValue}
                isClearable
                isSearchable
                placeholder="Search location..."
                id="location"
                className="p-2 mb-2 rounded border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 "
            />
        </label>
        <div className="flex gap-4">
            <label className="flex flex-col">
                <span className="mb-2" style={{color:"white",fontWeight:"bold",fontSize:"1.5rem"}}>Select Date:  </span>
                <input type="date" className="p-2 mb-2 rounded border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50" id="date" />
            </label>
            {/* <label className="flex flex-col">
                <span className="mb-2">Index:  </span>
                <input type="text" className="p-2 mb-2 rounded border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 " id="index" />
            </label> */}
        </div>
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleFilter}>Apply Filters</button>
    </div>
</div>



    <div className="p-4">
        <div 
        className="overflow-x-auto">
            <table className="w-full border-collapse border border-black-300 bg-gray-100">
                <thead className=" border-black" style={{ backgroundColor:  "gray" }}>
                    <tr className="bg-gray-200 border-black">
                        <th className="p-2 border-black">Location</th>
                        <th className="p-2 border-black">Index</th>
                        <th className="p-2 border-black">Date</th>
                        {user && <th className="p-2 border-black">Actions</th>}
                    </tr>
                </thead>
                <tbody className=" border-black">
                {filteredData  ? (
    filteredData.map((item, index) => (
        <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "white" : "#bdbebd" }}>
            <Tabble item={item}/>
        </tr>
    ))
) : (
    // You might want to handle the case when filteredData is empty differently,
    // for example, showing a message indicating no data found.
    <tr>
        <td colSpan="NUMBER_OF_COLUMNS">No data found</td>
    </tr>
)}

                </tbody>
            </table>
        </div>
    </div>
    <Footer/>
</>



  );
};

export default AppWithFilter;
