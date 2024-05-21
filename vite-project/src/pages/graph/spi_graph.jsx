import Navbar from "../../components/navbar/navbar";
import axios from "axios";
import Select from "react-select";
import { useState, useEffect } from "react";
import kba from "./KBA.json";
import "./graph.css";
import Plot from "react-plotly.js";
import Footer from "../../components/footer/Footer";

function Graph_spi() {
  const [cred, setCred] = useState({
    year: undefined,
  });
  // const [year,setYear]=useState(1951);
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const arr = [];
  const [D1, setD3] = useState();
  const [D2, setD4] = useState();
  const [D3, setD5] = useState();
  const [D4, setD6] = useState();
  // const handlegetChange=(year)=>{
  const handlegetChange = (e) => {
    setCred((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  // }
  const handlegetdata = async () => {
    console.log(cred.year);
    console.log(selectedOption.value);

    const res = await axios.post("http://localhost:3000/index/graph_spi", {
      year: cred.year,
      location: selectedOption.value,
    });
    console.log(res.data.D3);
    setD3(res.data.D3);
    setD4(res.data.D4);
    setD5(res.data.D5);
    setD6(res.data.D6);
  };
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

  const d1 = "D1";
  const d2 = "D2";
  const d3 = "D3";
  const d4 = "D4";

  return (
    <>
    <Navbar />
    <div style={{borderRadius:"2rem"}} className="bg-gray-100 conti xyz min-h-screen flex flex-col items-center justify-center">
      <div style={{borderRadius:"2rem",marginBottom:"1rem"}} className="bg-white p-4 md:p-8 rounded-lg shadow-md w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
        <h2 className="text-3xl font-bold mb-4">SPI Frequency v/s Category Graph</h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full mb-2 md:w-1/2">
            <label className="flex flex-col">
              <span className="mb-2">Select Location :</span>
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
                className="p-2 rounded border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
              />
            </label>
          </div>
          <div className="w-full mb-2 md:w-1/2">
            <label className="flex flex-col">
              <span className="mb-2">Select Year :</span>
              <select
                className="p-2 rounded border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                required
                onChange={handlegetChange}
                id="year"
              >
                <option value="">Select a year</option>
                {Array.from({ length: 81 }, (_, i) => (
                  <option key={i} value={i + 1950}>
                    {i + 1950}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
        <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-600 transition-colors w-full" onClick={handlegetdata}>Get Graph</button>
      </div>
      <div style={{borderRadius:"2rem"}} className="bg-white mt-8 p-4 md:p-8 rounded-lg shadow-md w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
        <h3 className="text-2xl font-bold mb-4">Frequency v/s Category Graph</h3>
        <div className="w-full">
          <Plot
            id="graphplot"
            data={[
              // {
              //   fill: "tonexty",
              //   type: "scatter",
              //   x: [1, 2, 3, 4],
              //   y: [D1, D2, D3, D4],
              // },
              {
                fill: "tozeroy",
                type: "scatter",
                x: [1, 2, 3, 4],
                y: [D1, D2, D3, D4],
              },
            ]}
            layout={{
              width: '100%',
              height: '100%',
              title: "",
              xaxis: {
                title: "Category",
                ticktext: [d1, d2, d3, d4],
                tickvals: [1, 2, 3, 4],
              },
              margin: {
                l: 50,
                r: 50,
                b: 100,
                t: 100,
                pad: 10,
              },
              paper_bgcolor: "#f8f9fa",
              plot_bgcolor: "#ffffff",
              yaxis: {
                title: "Frequency",
                dtick: 30,
                tickfont: {
                  size: 10,  // Adjust the font size as needed
              },
              },
            }}
          />
        </div>
        <h5>D1 : Frequency of Days when SPI is -0.99 - 1.0 (Near Normal)</h5>
        <h5>D2 : Frequency of Days when SPI is 1.0 - 1.5 (Moderately Wet)</h5>
        <h5>D3 : Frequency of Days when SPI is 1.5 - 2.0 (Very Wet)</h5>
        <h5>D4 : Frequency of Days when SPI is Greater than 2.0 (Extremely Wet)</h5>

      </div>
    </div>
    {/* <Footer/> */}
  </>
  

  
  );
}

export default Graph_spi;
