public class chartController {
    @AuraEnabled(cacheable=true)
    //public static List<Product_History__c> getobjData(String prodId){
    public static List<dataSetRecords> getobjData(){
        /*return [SELECT Name__c,Product_Code__c,Nett_Weight__c,Unit_Of_Measure__c,Last_Update__c,Product_BU__c,
        Period__c,Period01__c,Period02__c,Period03__c,Period04__c,Period05__c,Period06__c,Period07__c,Period08__c,Period09__c,Period10__c,Period11__c,
        Quantity__c,Quantity01__c,Quantity02__c,Quantity03__c,Quantity04__c,Quantity05__c,Quantity06__c,Quantity07__c,Quantity08__c,Quantity09__c,Quantity10__c,Quantity11__c
        FROM Product_History__c];// where id=:prodId];// WHERE CloseDate >= LAST_N_DAYS:30 AND StageName = 'Closed Won'];*/
        Map<String,List<Decimal>> finalList =  new Map<String,List<Decimal>>();
        for(Product_History__c ph : [SELECT Name,Product_Code__c,Nett_Weight__c,Unit_Of_Measure__c,Last_Update__c,Product_BU__c,Period__c,Period01__c,Period02__c,Period03__c,Period04__c,Period05__c,Period06__c,Period07__c,Period08__c,Period09__c,Period10__c,Period11__c,Quantity__c,Quantity01__c,Quantity02__c,Quantity03__c,Quantity04__c,Quantity05__c,Quantity06__c,Quantity07__c,Quantity08__c,Quantity09__c,Quantity10__c,Quantity11__c
        FROM Product_History__c])
        {
            if(finalList.containsKey(ph.Period__c)) {
                List<Decimal> periodValues = finalList.get(ph.Period__c);
                periodValues.add(ph.Quantity__c);
                finalList.put(ph.Period__c, periodValues);
            } else {
                finalList.put(ph.Period__c, new List<Decimal> { ph.Quantity__c });
            }
            if(finalList.containsKey(ph.Period01__c)) {
                List<Decimal> periodValues = finalList.get(ph.Period01__c);
                periodValues.add(ph.Quantity01__c);
                finalList.put(ph.Period01__c, periodValues);
            } else {
                finalList.put(ph.Period01__c, new List<Decimal> { ph.Quantity01__c });
            }
            if(finalList.containsKey(ph.Period02__c)) {
                List<Decimal> periodValues = finalList.get(ph.Period02__c);
                periodValues.add(ph.Quantity02__c);
                finalList.put(ph.Period02__c, periodValues);
            } else {
                finalList.put(ph.Period02__c, new List<Decimal> { ph.Quantity02__c });
            }
            if(finalList.containsKey(ph.Period03__c)) {
                List<Decimal> periodValues = finalList.get(ph.Period03__c);
                periodValues.add(ph.Quantity03__c);
                finalList.put(ph.Period03__c, periodValues);
            } else {
                finalList.put(ph.Period03__c, new List<Decimal> { ph.Quantity03__c });
            }
            if(finalList.containsKey(ph.Period04__c)) {
                List<Decimal> periodValues = finalList.get(ph.Period04__c);
                periodValues.add(ph.Quantity04__c);
                finalList.put(ph.Period04__c, periodValues);
            } else {
                finalList.put(ph.Period04__c, new List<Decimal> { ph.Quantity04__c });
            }
            if(finalList.containsKey(ph.Period05__c)) {
                List<Decimal> periodValues = finalList.get(ph.Period05__c);
                periodValues.add(ph.Quantity05__c);
                finalList.put(ph.Period05__c, periodValues);
            } else {
                finalList.put(ph.Period05__c, new List<Decimal> { ph.Quantity05__c });
            }
            if(finalList.containsKey(ph.Period06__c)) {
                List<Decimal> periodValues = finalList.get(ph.Period06__c);
                periodValues.add(ph.Quantity06__c);
                finalList.put(ph.Period06__c, periodValues);
            } else {
                finalList.put(ph.Period06__c, new List<Decimal> { ph.Quantity06__c });
            }
            if(finalList.containsKey(ph.Period07__c)) {
                List<Decimal> periodValues = finalList.get(ph.Period07__c);
                periodValues.add(ph.Quantity07__c);
                finalList.put(ph.Period07__c, periodValues);
            } else {
                finalList.put(ph.Period07__c, new List<Decimal> { ph.Quantity07__c });
            }
            if(finalList.containsKey(ph.Period08__c)) {
                List<Decimal> periodValues = finalList.get(ph.Period08__c);
                periodValues.add(ph.Quantity08__c);
                finalList.put(ph.Period08__c, periodValues);
            } else {
                finalList.put(ph.Period08__c, new List<Decimal> { ph.Quantity08__c });
            }
            if(finalList.containsKey(ph.Period09__c)) {
                List<Decimal> periodValues = finalList.get(ph.Period09__c);
                periodValues.add(ph.Quantity09__c);
                finalList.put(ph.Period09__c, periodValues);
            } else {
                finalList.put(ph.Period09__c, new List<Decimal> { ph.Quantity09__c });
            }
            if(finalList.containsKey(ph.Period10__c)) {
                List<Decimal> periodValues = finalList.get(ph.Period10__c);
                periodValues.add(ph.Quantity10__c);
                finalList.put(ph.Period10__c, periodValues);
            } else {
                finalList.put(ph.Period10__c, new List<Decimal> { ph.Quantity10__c });
            }
            if(finalList.containsKey(ph.Period11__c)) {
                List<Decimal> periodValues = finalList.get(ph.Period11__c);
                periodValues.add(ph.Quantity11__c);
                finalList.put(ph.Period11__c, periodValues);
            } else {
                finalList.put(ph.Period11__c, new List<Decimal> { ph.Quantity11__c });
            }
        }
        List<dataSetRecords> finalData = new List<dataSetRecords>();
        for(String str : finalList.keySet())
        {
            dataSetRecords dsr = new dataSetRecords(str,finalList.get(str));
            //dsr.label = str;
            //dsr.qty.addall(finalList.get(str));
            finalData.add(dsr);
        }
        return finalData;
    }

    public with sharing class dataSetRecords {
        @AuraEnabled public String label {get;set;}
        @AuraEnabled public List<Decimal> qty {get;set;}
        public dataSetRecords(String label ,List<Decimal> count){
            this.label  = label ;
            this.qty = count ;
        }
    }
}