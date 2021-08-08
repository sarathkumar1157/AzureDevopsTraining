public with sharing class oppBreifsController {
    @AuraEnabled
    public static List<Opportunity> getAllOpps(String recId){
        List<Opportunity> allOpps = [SELECT Id, Name, Account.Name FROM Opportunity WHERE Id = :recId limit 1];
        return allOpps;
    }
}
