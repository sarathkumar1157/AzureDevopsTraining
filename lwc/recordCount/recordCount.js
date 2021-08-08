import { LightningElement,wire,api} from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import getData from '@salesforce/apex/recordViewController.getData';
export default class RecordCount extends LightningElement {
    @api recordId;

    connectedCallback(){
        getData({accId: this.recordId})
        .then(result => {});
    }
}