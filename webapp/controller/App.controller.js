sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/json/JSONModel",
], (Controller,JSONModel) => {
  "use strict";

  return Controller.extend("app.minningreport.controller.View1", {
      onInit() {
        var oModel = new JSONModel();

        // Load the data from tools.json
        oModel.loadData("/model/mockData/toolsData.json"); // Update the path accordingly

        // Set the model to the view
        this.getView().setModel(oModel);
      }
  });
});