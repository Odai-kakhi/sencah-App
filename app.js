/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'NewApp',
    stores: 'Personnel',
    extend: 'NewApp.Application',

    requires: [
        'NewApp.view.main.Main'
    ],

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    mainView: 'NewApp.view.main.Main',

    //-------------------------------------------------------------------------
    // Most customizations should be made to NewApp.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------


   
});


// var val = Ext.getCmp('firstname').getValue();
// var val1 = Ext.getCmp('email').getValue();
// var val2 = Ext.getCmp('phonenumber').getValue();
// var input = {
//     name: val,
//     email: val1,
//     phone: val2
// }
// var myStore = Ext.getStore('Personnel');

// myStore.add(input)
// // var store = myStore.config.data.items
// // var mainGrid = Ext.getCmp('mainGridId').insert(input)
// // var gridNumber = Ext.getCmp('mainGridId').insert(input)
// // console.log(mainGrid)

// // // store.push(input)
// console.log(myStore.model.prototype.fields)
// // console.log(input)