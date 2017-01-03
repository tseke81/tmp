import React from 'react';
import Assessment from 'material-ui/svg-icons/action/assessment';
import GridOn from 'material-ui/svg-icons/image/grid-on';
import Web from 'material-ui/svg-icons/av/web';

const data = {
  menus: [
    { text: 'Daily Plan', icon: <Assessment/>, link: '/daily-plan' },
    { text: 'Depot Plan', icon: <Web/>, link: '/depot-plan' },
    { text: 'MTS Lookup', icon: <GridOn/>, link: '/daily-plan' },
    { text: 'Location Lookup', icon: <GridOn/>, link: '/daily-plan' }
  ]
};

export default data;
