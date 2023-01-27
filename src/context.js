import react from "react";
import { useState, useContext } from 'react';
import sublinks from "./data";
const AppContext = react.createContext()

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, SetIsSubmenuOpen] = useState(false);
    const [page, setPage] = useState({ page: '', links: [] });
    const [location, setLocation] = useState({});

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const openSubmenu = (text, coordinates) => {
   const page = sublinks.find((link)=> link.page === text);
   setPage(page);
   setLocation(coordinates);
   SetIsSubmenuOpen(true);
    };

    const closeSubmenu = () =>{
        SetIsSubmenuOpen(false);
    }

    return (
        <AppContext.Provider value={{
            isSidebarOpen,
            openSidebar,
            closeSidebar,
            isSubmenuOpen,
            openSubmenu,
            closeSubmenu,
            page, location
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}