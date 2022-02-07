import HomeIcon from './HomeIcon';

import BasicIcon from './BasicIcon';

import AddressIcon from './AddressIcon';

import ContactIcon from './ContactIcon';

export const SideBarData = [{
        title: 'home page',
        icon: < HomeIcon / > ,
        urlAddress: '/home'
    },

    {
        title: 'basic details:',
        icon: < BasicIcon / > ,
        urlAddress: '/basic'
    },

    {
        title: 'address details:',
        icon: < AddressIcon / > ,
        urlAddress: '/address'
    },

    {
        title: 'contact details:',
        icon: < ContactIcon / > ,
        urlAddress: '/contact'
    }
];