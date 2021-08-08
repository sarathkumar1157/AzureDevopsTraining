public with sharing class recordViewController {
    @AuraEnabled
    public static Boolean getData(String accId) {
        Account acc = [Select id,OwnerId from Account where Id=:accId limit 1];
        if(acc != null)
            if(acc.OwnerId==UserInfo.getUserId())
            {
                //acc.Record_Status__c = 'Viewed';
                update acc;
            }
        return null;
    }
}
