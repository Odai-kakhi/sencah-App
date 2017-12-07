/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */



Ext.define('NewApp.view.main.Main', {

    stores: '[Personnel]',

    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'NewApp.view.main.MainController',
        'NewApp.view.main.MainModel',
        'NewApp.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [
            {
                xtype: 'mainlist'

            },
            {
                xtype: 'button',
                text: 'Dlete',
                style: {
                    margin: '10px',
                    width: '340px'
                },
                handler: function () {
                    // var myStore = Ext.getStore('Personnel');
                    // var store = myStore.config.data.items
                    // var field = myStore.config.fields
                    // var rec = myStore.getAt(myStore.data.length-1)
                    var mainGrid = Ext.getCmp('mainGridId')
                    var gridNumber = Ext.getCmp('mainGridId').getStore().count()
                    console.log(gridNumber - 1)
                    mainGrid.getStore().removeAt(gridNumber - 1)

                }
            },
            {
                xtype: 'button',
                text: 'Add',
                style: {
                    margin: '10px',
                    width: '340px'
                },

                listeners: {
                    click: {
                        element: 'el', 
                        fn: function () {
                            console.log('click el')
                            Ext.create('Ext.window.Window', {
                                title: 'ADD',
                                height: 250,
                                width: 500,
                                layout: 'fit',

                                items: [
                                    {
                                        xtype: 'form',
                                        bodyPadding: 20,
                                        items: [
                                            {
                                                xtype: 'textfield',
                                                name: 'firstname',
                                                fieldLabel: 'first name',
                                                id: 'firstname'
                                            },
                                            {
                                                xtype: 'textfield',
                                                name: 'Email',
                                                fieldLabel: 'Email',
                                                id: 'email'
                                            },
                                            {
                                                xtype: 'textfield',
                                                name: 'phone number',
                                                fieldLabel: 'phone number',
                                                id: 'phonenumber',

                                            },
                                            {
                                                xtype: 'container',
                                                layout: {
                                                    type: 'hbox',
                                                    align: 'middle',
                                                    pack: 'center'
                                                },
                                                items: [
                                                    {
                                                        xtype: 'button',
                                                        iconCls: "add-button",
                                                        flex: 1,
                                                        formBind: true,
                                                        itemId: 'add',
                                                        text: 'ADD',
                                                        style: {
                                                            margin: '10px'
                                                        },
                                                        handler: function () {
                                                            var val = Ext.getCmp('firstname').getValue();
                                                            var val1 = Ext.getCmp('email').getValue();
                                                            var val2 = Ext.getCmp('phonenumber').getValue();
                                                            var grid = Ext.getCmp('mainGridId')
                                                            var store = grid.getStore()
                                                            console.log(store)
                                                            var fields = store.model.prototype.fields
                                                            console.log(fields)
                        
                                                            
                                                            store.add({
                                                                name: val,
                                                                email: val1,
                                                                phone: val2
                                                            });
                                                           

                                                        },
                                                        

                                                    }
                                                    
                                                ]
                                            }
                                        ]
                                    }
                                ]


                            }).show();
                            
                        }
                        
                    }
                }
            },
            {
                xtype: 'button',
                text: 'Edit',
                style: {
                    margin: '10px',
                    width: '340px'
                },
                listeners: {
                    click: {
                        element: 'el', //bind to the underlying el property on the panel
                        fn: function () {
                            console.log('click el')
                            Ext.create('Ext.window.Window', {
                                title: 'Udate',
                                height: 250,
                                width: 500,
                                layout: 'fit',
                                items: [
                                    {
                                        xtype: 'form',
                                        bodyPadding: 20,
                                        items: [
                                            {
                                                xtype: 'textfield',
                                                name: 'firstname',
                                                fieldLabel: 'first name'
                                            },
                                            {
                                                xtype: 'textfield',
                                                name: 'last name',
                                                fieldLabel: 'last name'
                                            },
                                            {
                                                xtype: 'textfield',
                                                name: 'phone number',
                                                fieldLabel: 'phone number'
                                            },
                                            {
                                                xtype: 'container',
                                                layout: {
                                                    type: 'hbox',
                                                    align: 'middle',
                                                    pack: 'center'
                                                },
                                                items: [
                                                    {
                                                        xtype: 'button',
                                                        flex: 1,
                                                        formBind: true,
                                                        itemId: 'Edit',
                                                        text: 'Edit',
                                                        style: {
                                                            margin: '10px'
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]


                            }).show();

                        }
                    }
                }


            }]
    },
    {
        title: 'Users',
        iconCls: 'fa-user',
        bind: {
            html: '{loremIpsum}'
        }
    },
    {
        title: 'Groups',
        iconCls: 'fa-users',
        bind: {
            html: '{loremIpsum}'
        }
    },
    {
        title: 'Settings',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        },
    },
    {
        title: 'Settings2',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        },
    }
    ]
});


// Ext.create('Ext.Button', {
//     text: 'Click me',
//     renderTo: Ext.getBody(),
//     handler: function () {
//         alert('You clicked the button!');
//     }
// });




