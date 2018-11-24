function ValidateCTT (mc)
{
	var Area = mc.getProperty("Area");
	var CELBranchDealerId = mc.getProperty("CELBranchDealerId");
	var Description = mc.getProperty("Description");
	var PrimarySymptomCode = mc.getProperty("PrimarySymptomCode");
	var ServiceNumber = mc.getProperty("ServiceNumber");
	var Status = mc.getProperty("Status");	
	var CreatedBy = mc.getProperty("CreatedBy");
	var SubArea = mc.getProperty("SubArea");
	var isValidCtt = true;
	if(Area ==""||Area =="null"||CELBranchDealerId==""||CELBranchDealerId=="null"||
			Description==""||Description=="null"||PrimarySymptomCode==""||PrimarySymptomCode=="null"||
			ServiceNumber==""||ServiceNumber=="null"||Status==""||Status=="null"||CreatedBy==""||CreatedBy=="null"
				||SubArea==""||SubArea=="null")
	{
	isValidCtt = false; 
	}
	
	mc.setProperty("isValidCtt", isValidCtt);	
}


function ValidategetCTT (mc)
{
    var srnumber=mc.getProperty("srnumber");
	var isValidgetCtt = true;
	if(srnumber ==""||srnumber =="null")
	{
	isValidgetCtt = false; 
	}
	
	mc.setProperty("isValidgetCtt", isValidgetCtt);	
}