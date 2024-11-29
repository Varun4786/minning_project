sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], (Controller, JSONModel) => {
    "use strict";

    return Controller.extend("app.minningreport.controller.View2", {
        onInit() {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.attachRoutePatternMatched(this.onRouteMatched, this);
        },

        onRouteMatched: function (oEvent) {
            var sLocationID = oEvent.mParameters.arguments.id; // Get the LocationID from the route parameters

            // Assuming the Mining data is available in a model
            var oModel = this.getView().getModel(); // Use your model here
            var aMiningData = oModel.getProperty("/drillData"); // Assume data is stored in '/miningData'
            var aMiningData1 = oModel.getProperty("/miningData");

            // Find the mining location that matches the LocationID
            var oMiningLocation = aMiningData.find(function (location) {
                return location.Location_ID === sLocationID; // Match Location_ID
            });

            if (oMiningLocation) {
                // Bind the mining location data to the view
                var oMiningModel = new JSONModel(oMiningLocation); // Create a model for the matched mining location
                this.getView().setModel(oMiningModel, "miningModel"); // Set the mining model on the view
            } else {
                console.log("No mining location found for Location ID:", sLocationID);
            }
        }
    });
});