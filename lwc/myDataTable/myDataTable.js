import { LightningElement, api, wire } from 'lwc';
//import getOTIFs from '@salesforce/apex/AccountOTIFSHandler.getOTIFS';
const columns = [], oTIFS = [];
//const complaints = [], openComplaintsRecord=[], closedComplaintsRecord=[];
//var closedSizeTxt='';
//var openSizeTxt='';

export default class Otifdatatable extends LightningElement {
    @api recordId;
    oTIFS = oTIFS;
    columns = columns;

    connectedCallback(){

        //getOTIFs({briefId: this.recordId})
        getOTIFs()
        .then(result => {
            console.log('Result==>',JSON.stringify(result));
            
            this.columns = result.headerWrappers;
            this.oTIFS = result.materialValues;
            console.log('--result Length---'+JSON.stringify(this.columns));
            console.log('--OTIF Length---'+JSON.stringify(this.oTIFS));
            //oTIFS = Object.keys(oTIFS).map(key=> ({ key: key, ...oTIFS[key] }));
            //return fields;
            console.log('Inside Result Block OTIFS==>',this.oTIFS);
            //console.log('Inside Result Block OTIFS==>',this.oTIFS.Material);

            console.log('Inside Result Block column headers==>',this.columns);

            /*console.log('Inside Result Block OTIFS==>',this.oTIFS.Material);
            var date = new Date();
            date.setDate(1);
            console.log('date-'+date);
            var lastMonths = [],
                monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
            for (var i = 0; i < 11; i++) {
                //console.log('Month number-'+date.getMonth());
                var str= date.getFullYear()+'';
                str= str.match(/\d{2}$/);
                lastMonths.push(monthNames[date.getMonth()]+ '-' + str);
                date.setMonth(date.getMonth() - 1);
            }
            lastMonths = lastMonths.reverse();
            console.log(lastMonths);*/
            this.error = undefined;
        })
        .catch(error => {
            this.error = error;
            console.log('this.error==>',this.error);
            console.log('Inside error block OTIFS==>',this.oTIFS);
            this.oTIFS = undefined;
        });

        }
}