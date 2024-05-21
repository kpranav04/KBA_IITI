const express=require("express");
const {postSPI,getSPIdata, postSSI, getSSIdata, postSRI, getSRIdata, getSPIdataMONTH, getDataByLocationDateIndex, deleteData_spi, editData_spi, getDataByLocationDateIndex_spi, deleteData_ssi, editData_ssi, getDataByLocationDateIndex_ssi,deleteData_sri, editData_sri, getDataByLocationDateIndex_sri, graph_spi,graph_ssi_data_pushing,graph_sri_data_pushing, extreme_ppti, getCWDdata, getsdiidata, getr10data, getr20data, getr95data, getr99data, getrx1data, getprcptopdata, postsdiidata, postrx1data, postr99data, postr95data, postr20data, postr10data, postprcptopdata, postcwddata}= require("../controllers/index");


const router=express.Router();
// router.post("/ssi_posting", graph_ssi_data_pushing);
// router.post("/sri_posting", graph_sri_data_pushing);
router.post("/ppti_push", extreme_ppti);


router.post("/cwd_get", getCWDdata);
router.post("/sdii_get", getsdiidata);
router.post("/r10_get", getr10data);
router.post("/r20_get", getr20data);
router.post("/r95_get", getr95data);
router.post("/r99_get", getr99data);
router.post("/rx1_get", getrx1data);
router.post("/prcptop_get", getprcptopdata);

router.post("/sdii_post", postsdiidata);
router.post("/rx1_post", postrx1data);
router.post("/r99_post", postr99data);
router.post("/r95_post", postr95data);
router.post("/r20_post", postr20data);
router.post("/r10_post", postr10data);
router.post("/prcptop_post", postprcptopdata);
router.post("/cwd_post", postcwddata);






router.post("/spi_post", postSPI);
router.post("/spi_get", getSPIdataMONTH);
router.post("/spi_get_daily", getSPIdata);
router.post("/ssi_post", postSSI);
router.post("/ssi_get", getSSIdata);
router.post("/sri_post", postSRI);
router.post("/sri_get", getSRIdata);
router.post("/filters_spi", getDataByLocationDateIndex_spi);
router.put("/edit_spi", editData_spi );
router.put("/delete_spi", deleteData_spi);
router.post("/filters_sri", getDataByLocationDateIndex_sri);
router.put("/edit_sri", editData_sri );
router.put("/delete_sri", deleteData_sri);
router.post("/filters_ssi", getDataByLocationDateIndex_ssi);
router.put("/edit_ssi", editData_ssi);
router.put("/delete_ssi", deleteData_ssi);
router.post("/graph_spi", graph_spi);

module.exports=router;