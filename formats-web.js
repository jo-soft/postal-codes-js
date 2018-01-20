'use strict';

const formats = {} ;

formats["10Digits.json"] = require("./formats/10Digits.json");
formats["2Digits.json"] = require("./formats/2Digits.json");
formats["3Digits.json"] = require("./formats/3Digits.json");
formats["4Digits.json"] = require("./formats/4Digits.json");
formats["5Digits.json"] = require("./formats/5Digits.json");
formats["6Digits.json"] = require("./formats/6Digits.json");
formats["7Digits.json"] = require("./formats/7Digits.json");
formats["8Digits.json"] = require("./formats/8Digits.json");
formats["AD.json"] = require("./formats/AD.json");
formats["AI.json"] = require("./formats/AI.json");
formats["AQ.json"] = require("./formats/AQ.json");
formats["AX.json"] = require("./formats/AX.json");
formats["AZ.json"] = require("./formats/AZ.json");
formats["BB.json"] = require("./formats/BB.json");
formats["BH.json"] = require("./formats/BH.json");
formats["BL.json"] = require("./formats/BL.json");
formats["BN.json"] = require("./formats/BN.json");
formats["CA.json"] = require("./formats/CA.json");
formats["FK.json"] = require("./formats/FK.json");
formats["GB.json"] = require("./formats/GB.json");
formats["GF.json"] = require("./formats/GF.json");
formats["GI.json"] = require("./formats/GI.json");
formats["GP.json"] = require("./formats/GP.json");
formats["GS.json"] = require("./formats/GS.json");
formats["HN.json"] = require("./formats/HN.json");
formats["IO.json"] = require("./formats/IO.json");
formats["KY.json"] = require("./formats/KY.json");
formats["LB.json"] = require("./formats/LB.json");
formats["LC.json"] = require("./formats/LC.json");
formats["LT.json"] = require("./formats/LT.json");
formats["LV.json"] = require("./formats/LV.json");
formats["MD.json"] = require("./formats/MD.json");
formats["MF.json"] = require("./formats/MF.json");
formats["MS.json"] = require("./formats/MS.json");
formats["MT.json"] = require("./formats/MT.json");
formats["NC.json"] = require("./formats/NC.json");
formats["NL.json"] = require("./formats/NL.json");
formats["PF.json"] = require("./formats/PF.json");
formats["PL.json"] = require("./formats/PL.json");
formats["PM.json"] = require("./formats/PM.json");
formats["PN.json"] = require("./formats/PN.json");
formats["PT.json"] = require("./formats/PT.json");
formats["RE.json"] = require("./formats/RE.json");
formats["RU.json"] = require("./formats/RU.json");
formats["SH.json"] = require("./formats/SH.json");
formats["SM.json"] = require("./formats/SM.json");
formats["SO.json"] = require("./formats/SO.json");
formats["SZ.json"] = require("./formats/SZ.json");
formats["TC.json"] = require("./formats/TC.json");
formats["US.json"] = require("./formats/US.json");
formats["VA.json"] = require("./formats/VA.json");
formats["VC.json"] = require("./formats/VC.json");
formats["VE.json"] = require("./formats/VE.json");
formats["VG.json"] = require("./formats/VG.json");
formats["WF.json"] = require("./formats/WF.json");
formats["WS.json"] = require("./formats/WS.json");


module.exports = function getFormat(postalCodeFormat){
    return formats[postalCodeFormat];
};