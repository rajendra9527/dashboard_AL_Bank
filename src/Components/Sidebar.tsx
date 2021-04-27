import React from 'react'
import {
    Link
} from "react-router-dom";
interface SidebarProps {

}

const sidebarMenu = [
    { link: "mini statement", label: "Mini Statement" },
    { link: "deposit/withdraw", label: "Deposit/Withdraw" },
    { link: "bank-transactions", label: "Bank Transactions" },
]

const Sidebar: React.FC<SidebarProps> = (props) => {
    return <nav className="ui__sidebar__nav" >
        <ul className="ui__sidebar__menu" >
        {
            sidebarMenu.map((menu, idx) => <li key={ idx } >
                <Link to={`/${menu.link}`} > { menu.label } </Link>
            </li>)}
            </ul>    
            </nav>
}

export default Sidebar