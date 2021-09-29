import { CashIcon, GroupIcon, HomeIcon, UserIcon } from "components/common/icons";
import BankCard from "components/common/icons/bankCard";

export const BOTTOM_TAB = {
    ACTIVE_COLOR: '#3b82f6',
    ITEMS: [
        {
            title: 'Home',
            path: 'home',
            icon: HomeIcon
        },
        {
            title: 'Chi phí',
            path:'costs',
            icon: CashIcon
        },
        {
            title: 'Group',
            path: 'group',
            icon: GroupIcon
        },
        {
            title: 'Profile',
            path: 'profile',
            icon: UserIcon
        }
    ]
}


export const HOME_FUNC = [
    {
        title: 'Thanh toán',
        path: 'pay',
        icon: BankCard
    },
    {
        title: 'Tiền',
        path: 'money',
        icon: null
    },
]