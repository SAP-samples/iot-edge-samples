jQuery.sap.declare("dep.fiori.transaction.Component");
jQuery.sap.require("dep.fiori.lib.util.Utilities");

sap.ui.core.UIComponent.extend("dep.fiori.transaction.Component", {
    metadata: {
        manifest: "json",
        manifestFirst: true
    },

    createContent: function() {
        return sap.ui.view("dep-fiori-transaction-main", {
            viewName: "dep.fiori.transaction.app.main",
            type: sap.ui.core.mvc.ViewType.XML,
            viewData: {
                component: this
            }
        });
    },

    init: function() {
        sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
        this.getRouter().initialize();
    }
});