public with sharing class ActivityController {
    
    @AuraEnabled
    public static List<SObject> getOpenActivities(String recId){
        Account openActivitiesList = [SELECT Id, (SELECT Subject, WhoId, IsTask, ActivityDate, Status, Priority, OwnerId FROM OpenActivities) FROM Account WHERE Id = :recId limit 1];
        return openActivitiesList.OpenActivities;
    }

    @AuraEnabled
    public static List<SObject> getActivityHistory(String recId){
        Account activitiesHistoryList = [SELECT Id, (SELECT ActivityDate, Description from ActivityHistories) FROM Account WHERE Id = :recId limit 1];
        return activitiesHistoryList.ActivityHistories;
    }    

}
