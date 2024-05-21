
import { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import MyMap from "../../components/map/map";
import Navbar from "../../components/navbar/navbar";
import './ssi.css';
import './spi.css';

import Select from 'react-select';
import kba from './KBA.json'
import { AuthContext } from "../../hooks/context/AuthContext";
import Footer from "../../components/footer/Footer";
// import DatePicker from "react-datepicker";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import "react-datepicker/dist/react-datepicker.css";

function SRI() {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState({
    location: undefined,
    valuee: undefined,
    index: undefined,

  });

  const [datee, setDate] = useState(new Date());
  const [dateget, setgetDate] = useState(new Date());

  const [index, setIndex] = useState([]);

  const [cred, setCred] = useState({
    month: undefined,
    year: undefined
  })
  const handlegetChange = (e) => {
    setCred((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const [mapData, setMapData] = useState(null);

  const handleChange = (e) => {
    setData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:3000/index/sri_post', { location: selectedOption.value, month: cred.month, year: cred.year, index: data.index });
    console.log(res);
    toast.success("Data Added Successfully");
    setTimeout(() => {
         window.location.reload(false);
    }, 1000);
  };


  const handlegetSubmit = async (e) => {
    e.preventDefault();
    console.log(cred.year);
    console.log(cred.month);

    const response = await axios.post("http://localhost:3000/index/sri_get", {
      month: cred.month,
      year: cred.year,
    });
    console.log(response.data);
    setMapData(response.data);
  };

  ///FILTER
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (inputValue) => {
    setInputValue(inputValue);
  };

  const handleOptionChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setInputValue('');
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

  const colors = [
    'black', 'brown', 'red', 'orange', 'yellow',
    'rgb(156 156 156 / 40%)', 'rgb(185, 249, 110)', 'rgb(179, 209, 110)', 'rgb(60, 188, 61)', 'rgb(0, 158, 30)', 'rgb(99, 112, 248)', 'rgb(99, 112, 248)'
  ];


  return (
    // <div className="flex flex-col md:flex-row justify-center items-center bg-gray-100 min-h-screen">
    <>
    <ToastContainer position="top-center"/>

      <Navbar />

      <div className="bg-100 conti max-h-screen flex w-full flex-col items-center justify-center">
        <div className="bg-white p-5 md:p-8 rounded-lg shadow-md w-full ">


          <div className="containera vxyz flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0">
            {/* <div className="text-lg font-bold">SPI</div> */}
            <div className="w-full md:w-auto">
              <div className="text-lg font-bold mb-4 flex justify-center "><h2 className="text-center heading_ssi">Standardized Runoff Index (SRI)</h2></div>
            

             
            <div className="flex flex-row container123">
              <div className="spi_map  md:w-auto">
                <MyMap dataArray={mapData} />
              </div>
              <div className="filters_spi  rounded-lg shadow-md p-4 md:p-8 w-full md:w-auto">
              {user && (
                <>
                <h3>Add Data</h3>
                  <h6 className="text-lg font-semibold mb-2">Select KBA :</h6>
                  <Select
                    value={selectedOption}
                    onChange={handleOptionChange}
                    onInputChange={handleInputChange}
                    options={options}
                    inputValue={inputValue}
                    isClearable
                    isSearchable
                    placeholder="Search location..."
                    className="w-full mb-3"
                  />
                  <h6 className="text-lg font-semibold mb-4">Enter SRI :</h6>
                  <input
                    className="entry w-full mb-3 p-2 border border-gray-300 rounded"
                    type="number"
                    required
                    onChange={handleChange}
                    placeholder="index"
                    id="index"
                  />
                  <h6 className="text-lg font-semibold mb-2">Select Year :</h6>
                  <select
                    className="entry w-full mb-3 p-2 border border-gray-300 rounded"
                    required
                    onChange={handlegetChange}
                    id="year"
                  >
                    <option value="">Select a year</option>
                    {Array.from({ length: 81 }, (_, i) => (
                      <option key={i} value={i + 1980}>
                        {i + 1980}
                      </option>
                    ))}
                  </select>
                  <h6 className="text-lg font-semibold mb-2">Select Month :</h6>
                  <select
                    className="entry w-full mb-3 p-2 border border-gray-300 rounded"
                    required
                    onChange={handlegetChange}
                    id="month"
                  >
                    <option value="">Select a month</option>
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i} value={`0${i + 1}`.slice(-2)}>
                        {new Date(0, i).toLocaleString('en-US', { month: 'long' })}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={handleSubmit}
                    className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 w-full md:w-auto mb-2"
                  >
                    Add Data
                  </button>
                </>
              )}
              <div className="get_data_box bg-gray-100 rounded-md p-4">
                <h3 className="text-lg font-semibold mb-2">SRI INDEX</h3>
                <h6 className="text-lg font-semibold mb-2">Select Year :</h6>
                <select
                  className="entry w-full mb-3 p-2 border border-gray-300 rounded"
                  required
                  onChange={handlegetChange}
                  id="year"
                >
                  <option value="">Select a year</option>
                  {Array.from({ length: 81 }, (_, i) => (
                    <option key={i} value={i + 1980}>
                      {i + 1980}
                    </option>
                  ))}
                </select>
                <h6 className="text-lg font-semibold mb-2">Select Month :</h6>
                <select
                  className="entry w-full mb-3 p-2 border border-gray-300 rounded"
                  required
                  onChange={handlegetChange}
                  id="month"
                >
                  <option value="">Select a month</option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i} value={`0${i + 1}`.slice(-2)}>
                      {new Date(0, i).toLocaleString('en-US', { month: 'long' })}
                    </option>
                  ))}
                </select>
                <button
                  onClick={handlegetSubmit}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full md:w-auto"
                >
                  Get SRI
                </button>
              </div>
            </div>
            </div>
            <div className="color-scale flex justify-center w-full md:w-auto mb-4">

{colors.map((color, index) => (
  <div key={index} className="color-box-container">
    <div
      className="color-box"
      style={{ backgroundColor: color }}
    ></div>
      {index + 1 == 1 ? <> <div style={{width:"100%"}} className="color-index">-3.0&emsp;&emsp;-2.0</div></> : <></>}
                    {index + 1 == 2 ? <> <div style={{width:"100%"}} className="color-index">&emsp; &emsp; &emsp;-1.6</div></> : <></>}
                    {index + 1 == 3 ? <> <div style={{width:"100%"}} className="color-index"> &emsp; &emsp; &emsp;-1.3</div></> : <></>}
                    {index + 1 == 4 ? <> <div style={{width:"100%"}} className="color-index"> &emsp; &emsp; &emsp; -0.8</div></> : <></>}
                    {index + 1 == 5 ? <> <div style={{width:"100%"}} className="color-index"> &emsp; &emsp; &emsp; -0.5</div></> : <></>}
                    {index + 1 == 6 ? <> <div style={{width:"100%"}} className="color-index"> &emsp; &emsp; &emsp; 0.5</div></> : <></>}
                    {index + 1 == 7 ? <> <div style={{width:"100%"}} className="color-index"> &emsp; &emsp; &emsp; 0.8</div></> : <></>}
                    {index + 1 == 8 ? <> <div style={{width:"100%"}} className="color-index"> &emsp; &emsp; &emsp;1.3</div></> : <></>}
                    {index + 1 == 9 ? <> <div style={{width:"100%"}} className="color-index"> &emsp; &emsp; &emsp;1.6</div></> : <></>}
                    {index + 1 == 10 ? <> <div style={{width:"100%"}} className="color-index"> &emsp; &emsp; &emsp;2.0</div></> : <></>}
                    {index + 1 == 11 ? <> <div style={{width:"100%"}} className="color-index"> &emsp; &emsp; &emsp;3.0</div></> : <></>}
                    {index + 1 == 12 ? <> <div style={{width:"100%"}} className="color-index"></div></> : <></>}

  </div>
))}
</div>
            </div>
            

          </div>
        </div>

      </div>
      <Footer/>
    </>


  );

}

export default SRI;