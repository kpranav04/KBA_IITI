const Spi = require("../models/spi_index");
const Ssi = require("../models/ssi_index");
const Sri = require("../models/sri_index");
const cwd = require("../models/cwd_pption_extreme");
const prcptop = require("../models/prcptop_pption_extreme");
const r10 = require("../models/r10_pption_extreme");
const r20 = require("../models/r20_pption_extreme");
const r95 = require("../models/r95_pption_extreme");
const r99 = require("../models/r99_pption_extreme");
const rx1 = require("../models/rx1day_pption_extreme");
const sdii = require("../models/sdii_pption_extreme");





const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "KBA.json");
const graph_data = path.join(__dirname, "graph_data.json");
const ssi_json = path.join(__dirname, "ssi_json.json");
const sri_json = path.join(__dirname, "sri_json.json");
const ssi_json_data = JSON.parse(fs.readFileSync(ssi_json, "utf-8"));
const sri_json_data = JSON.parse(fs.readFileSync(sri_json, "utf-8"));

const ppti = path.join(__dirname, "spi_json.json");
const ppti_data = JSON.parse(fs.readFileSync(ppti, "utf-8"));





function convertMonthToNumber(monthText) {
  const months = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12,
  };

  return months[monthText];
}

const citiesData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
const graphdata_spi = JSON.parse(fs.readFileSync(graph_data, "utf-8"));


module.exports.postSPI = async (req, res, next) => {
  try {

    const { year, month } = req.body;
    const monthNumber = month;
    const da = year + "-" + month + "-01";
    const date = await Ssi.findOne({ date: da });
    const cityInfo = citiesData.find((city) => city.KBA === req.body.location);
    console.log(cityInfo);
    const data = {
      location: req.body.location,
      index: req.body.index,
      latitude: cityInfo.Latitude,
      longitude: cityInfo.Longitude,
    };
   

    const newloc = new Spi({ date: da, data: data });
    const saved = await newloc.save();
   
    // console.log(data);
    res.status(200).json(data);

  
  } catch (err) {
    next(err);
  }
};

module.exports.postSSI = async (req, res, next) => {
  try {
  

    const { year, month } = req.body;

    const monthNumber = month;
    const da = year + "-" + month + "-01";
    const date = await Ssi.findOne({ date: da });
    const cityInfo = citiesData.find((city) => city.KBA === req.body.location);
    console.log(cityInfo);
    const data = {
      location: req.body.location,
      index: req.body.index,
      value: req.body.value,
      latitude: cityInfo.Latitude,
      longitude: cityInfo.Longitude,
    };
    // console.log(data);
   

    const newloc = new Ssi({ date: da, data: data });
    const saved = await newloc.save();
   
    // console.log(data);
    res.status(200).json(data);

 
  } catch (err) {
    next(err);
  }
};

module.exports.postSRI = async (req, res, next) => {
  try {
 
    const { year, month } = req.body;

  const monthNumber = month;
  const da = year + "-" + month + "-01";

    // console.log(dat);
    const date = await Sri.findOne({ date: da });
    const cityInfo = citiesData.find((city) => city.KBA === req.body.location);
    console.log(cityInfo);
    const data = {
      location: req.body.location,
      index: req.body.index,
      value: req.body.value,
      latitude: cityInfo.Latitude,
      longitude: cityInfo.Longitude,
    };
    console.log(data);
   
    console.log(da);
    const newloc = new Sri({ date: da, data: data });
    const saved = await newloc.save();
   
    console.log(data);
    res.status(200).json(data);

   
  } catch (err) {
    next(err);
  }
};

module.exports.getSPIdataMONTH = async (req, res, next) => {
  const { year, month } = req.body;
 
  const monthNumber = month;
  const da = year + "-" + month + "-01";
  console.log(da);
 
  try {

    const data = await Spi.find({
      
      date: da,
    });
    console.log(data);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

module.exports.getSPIdata = async (req, res, next) => {
  const dates = req.body.dateget;
  const date = dates.split("T")[0];
  // console.log(date);
 
  try {

    const data = await Spi.find({
      date: date,
    });
    console.log(data);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

module.exports.getSSIdata = async (req, res, next) => {
  const { year, month } = req.body;
 
  const monthNumber = month;
  const da = year + "-" + month + "-01";

  try {
  

    const data = await Ssi.find({
      date: da,
    });
    console.log(data);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

module.exports.getSRIdata = async (req, res, next) => {
  const { year, month } = req.body;
  
  const monthNumber = month;
  const da = year + "-" + month + "-01";
  // console.log(da);
 
  try {
 
    const data = await Sri.find({
      date: da,
    });
    console.log(data);
    res.json(data);
  } catch (err) {
    next(err);
  }
};


//SPI
module.exports.getDataByLocationDateIndex_spi = async (req, res, next) => {
  try {
    const { location, date,Index} = req.body;
    console.log("___________")
    console.log(location, date);

    const date1 = date.split("T")[0];
    console.log(date1);

    const filter = {};
    if(date && location){
      if (date) filter['date'] = date1;
      if (location || Index) {
        if (location) filter["data.location"] = location;
        if (Index) filter["data.index"] = Index;
      }
  
      console.log(filter);
  
      const filteredData = await Spi.find(filter).lean();
      console.log(filteredData)
      res.json(filteredData);
      return ;

    }
    if(date && !location){
      if (date) filter['date'] = date1;
      const filteredData = await Spi.find(filter).lean();
      // console.log(filteredData)
      res.json(filteredData);
            
    }
    else{
      res.json([]);

    }
   
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports.editData_spi = async (req, res, next) => {

  try {
    const dataq={
      index:parseInt(req.body.data.index),
      value:req.body.data.value
    }
    const updatedData = await Spi.findByIdAndUpdate(
      req.body.id,
      { $set:{ 'data.index': dataq.index,
      'data.value': dataq.value }, },
      { new: true }
    );
    console.log("edited")
    console.log(updatedData)
    res.status(200).json(updatedData);
  }
  catch (err) {
    next(err);
  }
};
// DELETE 
module.exports.deleteData_spi = async (req, res, next) => {
  const ide = req.body.id;

  try {
    await Spi.findByIdAndDelete(ide);
    res.status(200).json("User has been deleted.");
  }
  catch (err) {
    next(err);
  }

};

//SRI
module.exports.getDataByLocationDateIndex_sri = async (req, res, next) => {
  try {
    const { location, date,Index} = req.body;
    console.log("___________")
    console.log(location, date);

    const date1 = date.split("T")[0];
    console.log(date1);

    const filter = {};
    if(date && location){
      if (date) filter['date'] = date1;
      if (location || Index) {
        if (location) filter["data.location"] = location;
        if (Index) filter["data.index"] = Index;
      }
  
      console.log(filter);
  
      const filteredData = await Sri.find(filter).lean();
      console.log(filteredData)
      res.json(filteredData);
      return ;

    }
    if(date && !location){
      if (date) filter['date'] = date1;
      const filteredData = await Sri.find(filter).lean();
      // console.log(filteredData)
      res.json(filteredData);
            
    }
    else{
      res.json([]);

    }
   
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports.editData_sri = async (req, res, next) => {

  try {
    const dataq={
      index:parseInt(req.body.data.index),
      value:req.body.data.value
    }
    const updatedData = await Sri.findByIdAndUpdate(
      req.body.id,
      { $set:{ 'data.index': dataq.index,
      'data.value': dataq.value }, },
      { new: true }
    );
    // console.log("edited")
    // console.log(updatedData)
    res.status(200).json(updatedData);
  }
  catch (err) {
    next(err);
  }
};
// DELETE User
module.exports.deleteData_sri = async (req, res, next) => {
  const ide = req.body.id;

  try {
    await Sri.findByIdAndDelete(ide);
    res.status(200).json("User has been deleted.");
  }
  catch (err) {
    next(err);
  }

};

//SSI
module.exports.getDataByLocationDateIndex_ssi = async (req, res, next) => {
  try {
    const { location, date,Index} = req.body;
    console.log("___________")
    console.log(location, date);

    const date1 = date.split("T")[0];
    console.log(date1);

    const filter = {};
    if(date && location){
      if (date) filter['date'] = date1;
      if (location || Index) {
        if (location) filter["data.location"] = location;
        if (Index) filter["data.index"] = Index;
      }
  
      console.log(filter);
  
      const filteredData = await Ssi.find(filter).lean();
      console.log(filteredData)
      res.json(filteredData);
      return ;

    }
    if(date && !location){
      if (date) filter['date'] = date1;
      const filteredData = await Ssi.find(filter).lean();
      // console.log(filteredData)
      res.json(filteredData);
            
    }
    else{
      res.json([]);

    }
   
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports.editData_ssi = async (req, res, next) => {

  try {
    const dataq={
      index:parseInt(req.body.data.index),
      value:req.body.data.value
    }
    const updatedData = await Ssi.findByIdAndUpdate(
      req.body.id,
      { $set:{ 'data.index': dataq.index,
      'data.value': dataq.value }, },
      { new: true }
    );
    console.log("edited")
    console.log(updatedData)
    res.status(200).json(updatedData);
  }
  catch (err) {
    next(err);
  }
};
// DELETE User
module.exports.deleteData_ssi = async (req, res, next) => {
  const ide = req.body.id;

  try {
    await Ssi.findByIdAndDelete(ide);
    res.status(200).json("User has been deleted.");
  }
  catch (err) {
    next(err);
  }

};

// GET GRAPH SPI
module.exports.graph_spi = async (req, res, next) => {
  const year = req.body.year;
  const location = req.body.location;
  // console.log(req.body);


  try {
    const filteredObjects = graphdata_spi[year].find(obj => obj.place_name === location);
    // console.log(filteredObjects);
    res.status(200).json(filteredObjects);
  }
  catch (err) {
    next(err);
  }

};

//POSTING SSI DATA
module.exports.graph_ssi_data_pushing = async (req, res, next) => {
  try {
    for (const date in ssi_json_data) {
      if (ssi_json_data.hasOwnProperty(date)) {
        console.log("Date:", date);
        // Get the location-value mapping for the current date
        const locationValueMap = ssi_json_data[date];

        // Iterate over the location-value mappings
        for (const location in locationValueMap) {
          if (locationValueMap.hasOwnProperty(location)) {
            const value = locationValueMap[location];
            const cityInfo = citiesData.find((city) => city.KBA === location);
            if(cityInfo){
              const data = {
                location: location,
                index: value,
                latitude: cityInfo.Latitude,
        longitude: cityInfo.Longitude,
              };
              console.log(data);
              const newloc = new Ssi({ date: date, data: data });
              const saved = await newloc.save();
              console.log(data);
            }
         
          }
        }
      }
    }
    res.status(400).json("done");
  } catch (err) {
    console.error("Error parsing JSON:", err);
  }
};
//POSTING SRI DATA

module.exports.graph_sri_data_pushing = async (req, res, next) => {
  try {
    for (const date in sri_json_data) {
      if (sri_json_data.hasOwnProperty(date)) {
        console.log("Date:", date);
        // Get the location-value mapping for the current date
        const locationValueMap = sri_json_data[date];

        // Iterate over the location-value mappings
        for (const location in locationValueMap) {
          if (locationValueMap.hasOwnProperty(location)) {
            const value = locationValueMap[location];
            const cityInfo = citiesData.find((city) => city.KBA === location);
            if(cityInfo){
                const data = {
                location: location,
                index: value,
                latitude: cityInfo.Latitude,
                longitude: cityInfo.Longitude,
              };
              console.log(data);
              const newloc = new Sri({ date: date, data: data });
              const saved = await newloc.save();
              console.log(data);
            }
          
          }
        }
      }
    }
    res.status(400).json("done sri");
  } catch (err) {
    console.error("Error parsing JSON:", err);
  }
};
// POSTING PRECIPATION ETREMES INDExes

module.exports.extreme_ppti = async (req, res, next) => {
  try {
    for (const date in ppti_data) {
      if (ppti_data.hasOwnProperty(date)) {
        console.log("Date:", date);
        // Get the location-value mapping for the current date
        const locationValueMap = ppti_data[date];

        // Iterate over the location-value mappings
        for (const location in locationValueMap) {
          if (locationValueMap.hasOwnProperty(location)) {
            const value = locationValueMap[location];
            const cityInfo = citiesData.find((city) => city.KBA === location);
            if(cityInfo){
                const data = {
                location: location,
                index: value,
                latitude: cityInfo.Latitude,
                longitude: cityInfo.Longitude,
              };
              console.log(data);
              const newloc = new Spi({ date: date, data: data });
              const saved = await newloc.save();
              console.log(data);
            }
          
          }
        }
      }
    }
    res.status(400).json("done cwd");
  } catch (err) {
    console.error("Error parsing JSON:", err);
  }
};

// PRECIPITION Extremes

module.exports.getCWDdata = async (req, res, next) => {
  const { year } = req.body;

  try {
   
    const data = await cwd.find({
      date: year,
    });
    // console.log(data);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

module.exports.getprcptopdata = async (req, res, next) => {
  const { year } = req.body;

  try {
   
    const data = await prcptop.find({
      date: year,
    });
    // console.log(data);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

module.exports.getr10data = async (req, res, next) => {
  const { year } = req.body;

  try {
   
    const data = await r10.find({
      date: year,
    });
    // console.log(data);
    res.json(data);
  } catch (err) {
    next(err);
  }
};
module.exports.getr20data = async (req, res, next) => {
  const { year } = req.body;

  try {
   
    const data = await r20.find({
      date: year,
    });
    // console.log(data);
    res.json(data);
  } catch (err) {
    next(err);
  }
};
module.exports.getr95data = async (req, res, next) => {
  const { year } = req.body;

  try {
   
    const data = await r95.find({
      date: year,
    });
    // console.log(data);
    res.json(data);
  } catch (err) {
    next(err);
  }
};
module.exports.getr99data = async (req, res, next) => {
  const { year } = req.body;

  try {
   
    const data = await r99.find({
      date: year,
    });
    // console.log(data);
    res.json(data);
  } catch (err) {
    next(err);
  }
};
module.exports.getrx1data = async (req, res, next) => {
  const { year } = req.body;

  try {
   
    const data = await rx1.find({
      date: year,
    });
    // console.log(data);
    res.json(data);
  } catch (err) {
    next(err);
  }
};
module.exports.getsdiidata = async (req, res, next) => {
  const { year } = req.body;

  try {
   
    const data = await sdii.find({
      date: year,
    });
    // console.log(data);
    res.json(data);
  } catch (err) {
    next(err);
  }
};



module.exports.postsdiidata = async (req, res, next) => {
  try {
    const { year} = req.body;
      const date = await sdii.findOne({ date: year });
      const cityInfo = citiesData.find((city) => city.KBA === req.body.location);
      // console.log(cityInfo);
      const data = {
        location: req.body.location,
        index: req.body.index,
        value: req.body.value,
        latitude: cityInfo.Latitude,
        longitude: cityInfo.Longitude,
      };
     
      const newloc = new sdii({ date: year, data: data });
      const saved = await newloc.save();
     
      // console.log(data);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
};
module.exports.postprcptopdata = async (req, res, next) => {
  try {
    const { year} = req.body;
      const date = await prcptop.findOne({ date: year });
      const cityInfo = citiesData.find((city) => city.KBA === req.body.location);
      // console.log(cityInfo);
      const data = {
        location: req.body.location,
        index: req.body.index,
        value: req.body.value,
        latitude: cityInfo.Latitude,
        longitude: cityInfo.Longitude,
      };
     
      const newloc = new prcptop({ date: year, data: data });
      const saved = await newloc.save();
     
      // console.log(data);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
};
module.exports.postcwddata = async (req, res, next) => {
  try {
    const { year} = req.body;
      const date = await cwd.findOne({ date: year });
      const cityInfo = citiesData.find((city) => city.KBA === req.body.location);
      // console.log(cityInfo);
      const data = {
        location: req.body.location,
        index: req.body.index,
        value: req.body.value,
        latitude: cityInfo.Latitude,
        longitude: cityInfo.Longitude,
      };
     
      const newloc = new cwd({ date: year, data: data });
      const saved = await newloc.save();
     
      // console.log(data);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
};
module.exports.postr10data = async (req, res, next) => {
  try {
    const { year} = req.body;
      const date = await sdii.findOne({ date: year });
      const cityInfo = citiesData.find((city) => city.KBA === req.body.location);
      // console.log(cityInfo);
      const data = {
        location: req.body.location,
        index: req.body.index,
        value: req.body.value,
        latitude: cityInfo.Latitude,
        longitude: cityInfo.Longitude,
      };
     
      const newloc = new r10({ date: year, data: data });
      const saved = await newloc.save();
     
      // console.log(data);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
};
module.exports.postr20data = async (req, res, next) => {
  try {
    const { year} = req.body;
      const date = await sdii.findOne({ date: year });
      const cityInfo = citiesData.find((city) => city.KBA === req.body.location);
      // console.log(cityInfo);
      const data = {
        location: req.body.location,
        index: req.body.index,
        value: req.body.value,
        latitude: cityInfo.Latitude,
        longitude: cityInfo.Longitude,
      };
     
      const newloc = new r20({ date: year, data: data });
      const saved = await newloc.save();
     
      // console.log(data);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
};
module.exports.postr95data = async (req, res, next) => {
  try {
    const { year} = req.body;
      const date = await sdii.findOne({ date: year });
      const cityInfo = citiesData.find((city) => city.KBA === req.body.location);
      // console.log(cityInfo);
      const data = {
        location: req.body.location,
        index: req.body.index,
        value: req.body.value,
        latitude: cityInfo.Latitude,
        longitude: cityInfo.Longitude,
      };
     
      const newloc = new r95({ date: year, data: data });
      const saved = await newloc.save();
     
      // console.log(data);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
};
module.exports.postr99data = async (req, res, next) => {
  try {
    const { year} = req.body;
      const date = await r99.findOne({ date: year });
      const cityInfo = citiesData.find((city) => city.KBA === req.body.location);
      // console.log(cityInfo);
      const data = {
        location: req.body.location,
        index: req.body.index,
        value: req.body.value,
        latitude: cityInfo.Latitude,
        longitude: cityInfo.Longitude,
      };
     
      const newloc = new r99({ date: year, data: data });
      const saved = await newloc.save();
     
      // console.log(data);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
};
module.exports.postrx1data = async (req, res, next) => {
  try {
    const { year} = req.body;
      const date = await rx1.findOne({ date: year });
      const cityInfo = citiesData.find((city) => city.KBA === req.body.location);
      // console.log(cityInfo);
      const data = {
        location: req.body.location,
        index: req.body.index,
        value: req.body.value,
        latitude: cityInfo.Latitude,
        longitude: cityInfo.Longitude,
      };
     
      const newloc = new rx1({ date: year, data: data });
      const saved = await newloc.save();
     
      // console.log(data);
      res.status(200).json(data);
    } catch (err) {
      next(err);
    }
};