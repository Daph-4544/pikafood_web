import {
    HomeIcon,
    ChatBubbleLeftIcon,
    ClipboardIcon,
    WalletIcon,
    HeartIcon,
    Cog8ToothIcon
} from '@heroicons/react/24/outline';

const iconStyle = "h-5 w-5 text-gray-400 hover:text-white"
const  lefRoutes = [
    {
        id: 1,
        name:'Home',
        route: '/home',
        icon: <HomeIcon className={iconStyle} />,
    },
    {
        id: 2,
        name:'Chat',
        route: '/chat',
        icon: <ChatBubbleLeftIcon className={iconStyle} />,
    },
    {
        id: 3,
        name:'Orders',
        route: '/clipboard',
        icon: <ClipboardIcon className={iconStyle} />,
    },
    {
        id: 4,
        name:'Wallet',
        route: '/walletIcon',
        icon: <WalletIcon className={iconStyle} />,
    },
    {
        id: 5,
        name:'Favorite',
        route: '/favorite',
        icon: <HeartIcon className={iconStyle} />,
    },
    {
        id: 6,
        name:'settings',
        route: '/settings',
        icon: <Cog8ToothIcon className={iconStyle} />,
    },
]

export const childRoutes = [
    {
        path:"/home",
        exact:true,
        name:"Home",
        element: Home,
        permission:false,
    }
]