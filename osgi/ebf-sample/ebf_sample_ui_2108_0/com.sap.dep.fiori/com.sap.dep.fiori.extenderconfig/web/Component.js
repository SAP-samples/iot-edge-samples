jQuery.sap.declare("dep.fiori.extenderconfig.Component");
jQuery.sap.require("dep.fiori.lib.util.Utilities");

sap.ui.core.UIComponent.extend("dep.fiori.extenderconfig.Component", {
    metadata: {
        manifest: "json",
        manifestFirst: true
    },

    createContent: function() {
        return sap.ui.view("dep-fiori-extenderconfig-main", {
            viewName: "dep.fiori.extenderconfig.app.main",
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