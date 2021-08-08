import { LightningElement,api } from 'lwc';
import getOpenActivities from '@salesforce/apex/ActivityController.getOpenActivities';
import getActivityHistory from '@salesforce/apex/ActivityController.getActivityHistory';
const columnsOA = [], dataOA = [], columnsAH = [], dataAH = [];
const OAlength = false, AHlength = false;

export default class RecordIdTable extends LightningElement {
    @api recordId;
    columnsOA = columnsOA;
    dataOA = dataOA;
    columnsAH = columnsAH;
    dataAH = dataAH;
    OAtitle = 'Open Activities (';
    AHtitle = 'Activity History (';

    connectedCallback(){
        getOpenActivities({recId: this.recordId})
        .then(result => {
            this.dataOA = result;
            this.OAlength = this.dataOA.length > 0;
            this.OAtitle = this.OAtitle + this.dataOA.length + ')'; 
            this.columnsOA = [
                { label: 'Subject', fieldName: 'Subject', type: 'text' },
                { label: 'WhoId', fieldName: 'WhoId', type: 'text' },
                { label: 'IsTask', fieldName: 'IsTask', type: 'boolean' },
                { label: 'Status', fieldName: 'Status', type: 'text' },
                { label: 'Activity Date', fieldName: 'ActivityDate', type: 'date' },
            ];
            console.log('-----OA----'+JSON.stringify(this.dataOA));
        });

        getActivityHistory({recId: this.recordId})
        .then(result => {
            this.dataAH = result;
            this.AHlength = this.dataAH.length > 0;
            this.AHtitle = this.AHtitle + this.dataAH.length + ')';
            this.columnsAH = [
                { label: 'Activity Date', fieldName: 'ActivityDate', type: 'date' },
                { label: 'Description', fieldName: 'Description', type: 'text' },
                //{ label: 'Phone', fieldName: 'phone', type: 'phone' },
                //{ label: 'Balance', fieldName: 'amount', type: 'currency' },
                //{ label: 'CloseAt', fieldName: 'closeAt', type: 'date' },
            ];
            console.log('-----OA----'+JSON.stringify(this.dataAH));
        });
    }
}