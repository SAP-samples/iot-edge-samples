jQuery.sap.declare("dep.fiori.workorder.block.History");
jQuery.sap.require("sap.uxap.BlockBase");

sap.uxap.BlockBase.extend("dep.fiori.workorder.block.History", {
    metadata: {
        views: {
            Expanded: {
                viewName:"dep.fiori.workorder.block.history",
                type: "XML"
            },
            Collapsed: {
                viewName:"dep.fiori.workorder.block.history",
                type: "XML"
            }
        }
    }
});