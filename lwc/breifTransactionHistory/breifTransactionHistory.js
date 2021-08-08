import {LightningElement, api, wire, track} from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import getobjData from '@salesforce/apex/chartController.getobjData';
export default class RecordsBarChart extends LightningElement {
@track chartConfiguration;
@api recordId;

//@wire(getobjData, {recordId: '$recordId'})
@wire(getobjData, {})
getobjData({error, data}) {
if (error) {
this.error = error;
console.log('error => ' + JSON.stringify(error));
this.chartConfiguration = undefined;
} else if (data) {
let chartAmtData = [];
let chartAmt1Data = [];
let chartAmt10Data = [];
let chartAmt11Data = [];
let chartAmt2Data = [];
let chartAmt3Data = [];
let chartAmt4Data = [];
let chartAmt5Data = [];
let chartAmt6Data = [];
let chartAmt7Data = [];
let chartAmt8Data = [];
let chartAmt9Data = [];
let chartLabels = [];

/*chartAmt3Data.push(prodHist.Quantity01__c);
chartAmt3Data.push(prodHist.Quantity10__c);
chartAmt3Data.push(prodHist.Quantity09__c);
chartAmt3Data.push(prodHist.Quantity08__c);
chartAmt3Data.push(prodHist.Quantity07__c);
chartAmt3Data.push(prodHist.Quantity06__c);
chartAmt3Data.push(prodHist.Quantity05__c);
chartAmt3Data.push(prodHist.Quantity04__c);
chartAmt3Data.push(prodHist.Quantity03__c);
chartAmt3Data.push(prodHist.Quantity02__c);*/
data.forEach(prodHist => {
chartAmtData.push(prodHist.Quantity__c);
chartAmt1Data.push(prodHist.Quantity01__c);
chartAmt10Data.push(prodHist.Quantity10__c);
chartAmt11Data.push(prodHist.Quantity11__c);
chartAmt9Data.push(prodHist.Quantity09__c);
chartAmt8Data.push(prodHist.Quantity08__c);
chartAmt7Data.push(prodHist.Quantity07__c);
chartAmt6Data.push(prodHist.Quantity06__c);
chartAmt5Data.push(prodHist.Quantity05__c);
chartAmt4Data.push(prodHist.Quantity04__c);
chartAmt3Data.push(prodHist.Quantity03__c);
chartAmt2Data.push(prodHist.Quantity02__c);

if(chartLabels.indexOf(prodHist.Period__c)===-1)
chartLabels.push(prodHist.Period__c);
if(chartLabels.indexOf(prodHist.Period01__c)===-1)
chartLabels.push(prodHist.Period01__c);   
if(chartLabels.indexOf(prodHist.Period10__c)===-1)
chartLabels.push(prodHist.Period10__c);
if(chartLabels.indexOf(prodHist.Period11__c)===-1)
chartLabels.push(prodHist.Period11__c);
if(chartLabels.indexOf(prodHist.Period09__c)===-1)
chartLabels.push(prodHist.Period09__c);
if(chartLabels.indexOf(prodHist.Period08__c)===-1)
chartLabels.push(prodHist.Period08__c);
if(chartLabels.indexOf(prodHist.Period07__c)===-1)
chartLabels.push(prodHist.Period07__c);
if(chartLabels.indexOf(prodHist.Period06__c)===-1)
chartLabels.push(prodHist.Period06__c);
if(chartLabels.indexOf(prodHist.Period05__c)===-1)
chartLabels.push(prodHist.Period05__c);
if(chartLabels.indexOf(prodHist.Period04__c)===-1)
chartLabels.push(prodHist.Period04__c);
if(chartLabels.indexOf(prodHist.Period03__c)===-1)
chartLabels.push(prodHist.Period03__c);
if(chartLabels.indexOf(prodHist.Period02__c)===-1)
chartLabels.push(prodHist.Period02__c);

}); 

this.chartConfiguration = {
type: 'bar',
data: {
labels: dataMAap.labelsforChart,
datasets: [
{
label: chartLabels[0],
//barPercentage: 0.5,
//barThickness: 6,
//maxBarThickness: 8,
//minBarLength: 2,
backgroundColor: "#7cc8e6",
data: chartAmt1Data,
},
{
label: chartLabels[1],
backgroundColor: "green",
data: chartAmt4Data,
},
{
label: chartLabels[2],
backgroundColor: "blue",
data: chartAmt5Data,
},
{
label: chartLabels[3],
backgroundColor: "red",
data: chartAmt6Data,
},
{
label: chartLabels[4],
backgroundColor: "orange",
data: chartAmt7Data,
},
{
label: chartLabels[5],
backgroundColor: "yellow",
data: chartAmt8Data,
},
{
label: chartLabels[6],
backgroundColor: "black",
data: chartAmt9Data,
},
{
label: chartLabels[7],
backgroundColor: "gray",
data: chartAmt10Data,
},
{
label: chartLabels[8],
backgroundColor: "pink",
data: chartAmt11Data,
},
{
label: chartLabels[9],
backgroundColor: "white",
data: chartAmtData,
},
{
label: chartLabels[10],
backgroundColor: "#8635cc",
data: chartAmt3Data,
},
{
label: chartLabels[11],
backgroundColor: "#631247",
data: chartAmt2Data,
},
],
},
options: {
},
};
console.log('Lables => ', chartLabels);
console.log('data => ', data);
this.error = undefined;
}
}

}