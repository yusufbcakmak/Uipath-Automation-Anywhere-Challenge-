
function fillForm(e, jsonString) {
    // Parsing jsonString to json Object
  var jsonData = JSON.parse(jsonString)
    // maping json object with for loop, until jsonData length
    for (let i = 0; i < jsonData.length; i++) {
        // Filling inputs with inputs id
        document.getElementById("customerName").value = jsonData[i]["Company Name"]
        document.getElementById("customerID").value = jsonData[i]["Customer ID"]
        document.getElementById("primaryContact").value = jsonData[i]["Primary Contact"]
        document.getElementById("street").value = jsonData[i]["Street Address"]
        document.getElementById("city").value = jsonData[i]["City"]
        document.getElementById("zip").value = jsonData[i]["Zip"]
        document.getElementById("email").value = jsonData[i]["Email Address"]
        const $select = document.querySelector('#state');
        $select.value = jsonData[i]["State"]

        // click radio, checkbox and submit button
        if (jsonData[i]["Offers Discounts"]=="YES") {
            document.getElementById("activeDiscountYes").click()
        }else {
            document.getElementById("activeDiscountNo").click()
        }
        
        if (jsonData[i]["Non-Disclosure On File"]=="YES") {
            document.getElementById("NDA").click()
        }
        document.getElementById("submit_button").click()
        
    }
    
    // Get result value until load on screen
    while (resultRate == "" || resultRate ==null){
        var resultTime = document.getElementById("processing-time").innerText
        var resultRate = document.getElementById("accuracy").innerText
        
     }
    //  return results for uipath injectJs output parameter.
    return (resultTime + "-"+ resultRate)

    // github ysfckmk
}
