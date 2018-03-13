const { Menu, app} = require('electron');

let template = [
    {
        label: '菜单一',
        submenu: [
            {
                label: '子菜单one'
            },
            {
                type: 'separator'
            },
            {
                label: '666',
                click: () => {
                    console.log('6666');
                }
            }
        ]
    },

    {
        label: '菜单二',
        submenu: [
            {
                label: '子菜单two'
            }
        ]
    }
];

let menu = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(menu);
app.dock.setMenu(menu); // 在doker中设置menu