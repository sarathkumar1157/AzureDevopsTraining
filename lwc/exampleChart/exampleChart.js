import { LightningElement,wire,track} from 'lwc';
//importing the Chart library from Static resources
import chartjs from '@salesforce/resourceUrl/ChartJs'; 
import { loadScript } from 'lightning/platformResourceLoader';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
//importing the apex method.
import getobjData from '@salesforce/apex/chartController.getobjData';

export default class FourthLwc extends LightningElement {
   @wire(getobjData, {})
   getobjData({error,data})
   {
      console.log('-Data------->'+data);
      if(data)
      {
         var i = 0;
         for(var key in data)
         {
            console.log('-----in For--->'+key+'---'+data[key].qty+'-----'+data[key].label);
            this.updateChart(data[key].qty,data[key].label,i);
            i++;
         }
         //console.log('---Lables--->'+JSON.stringify(this.config.data));
         this.error=undefined;
      }
      else if(error)
      {
         this.error = error;
         //this.accounts = undefined;
      }
   }
   chart;
   chartjsInitialized = false;
   config={
      type: 'bar',
      data: {
         datasets: [
            {
               data: [

               ],
               backgroundColor: "#7cc8e6",
               label: '',
            },
            {
               data: [

               ],
               backgroundColor: "#7cc8e6",
               label: '',
            },
            {
               data: [

               ],
               backgroundColor: "#7cc8e6",
               label: '',
            },
            {
               data: [

               ],
               backgroundColor: "#7cc8e6",
               label: '',
            },
            {
               data: [

               ],
               backgroundColor: "#7cc8e6",
               label: '',
            },
            {
               data: [

               ],
               backgroundColor: "#7cc8e6",
               label: '',
            },
            {
               data: [

               ],
               backgroundColor: "#7cc8e6",
               label: '',
            },
            {
               data: [

               ],
               backgroundColor: "#7cc8e6",
               label: '',
            },
            {
               data: [

               ],
               backgroundColor: "#7cc8e6",
               label: '',
            },
            {
               data: [

               ],
               backgroundColor: "#7cc8e6",
               label: '',
            },
            {
               data: [

               ],
               backgroundColor: "#7cc8e6",
               label: '',
            },
            {
               data: [

               ],
               backgroundColor: "#7cc8e6",
               label: '',
            }
         ],
         labels:[]
      },
      options: {
      }
   };
   renderedCallback()
   {
      if(this.chartjsInitialized)
   {
      return;
   }
   this.chartjsInitialized = true;
   Promise.all([
      loadScript(this,chartjs)
   ]).then(() =>{
      const ctx = this.template.querySelector('canvas.bar').getContext('2d');
      //this.chart = new window.Chart(ctx, this.config);
      console.log();
      this.chart = new window.Chart(ctx, this.config);
   })
   .catch(error =>{
      this.dispatchEvent(
         new ShowToastEvent({
         title : 'Error loading ChartJS',
         message : error.message,
         variant : 'error',
         }),
      );
   });
   }
   updateChart(count,label,numb)
   {
      this.config.data.labels.push(label);
      //this.config.data.datasets.push
      /*this.config.data.datasets.forEach((dataset)=> {
         dataset.data = count;
         dataset.label = label;
         dataset.backgroundColor = '#7cc8e6';
      });
      this.config.data.datasets.forEach((dataset) => {
         dataset.data.push(count);
      });*/
      this.config.data.datasets[numb].data.push(count); 
      this.config.data.datasets[numb].backgroundColor = '#7cc8e6';
      this.config.data.datasets[numb].label = label;
      
      this.chart.update();
   }
}