import react from "react";
import { useState, useContext } from 'react';

const AppContext = react.createContext()

const AppProvider = () => {
const [isSidebarOpen, setIsSidebarOpen] =useState()
const [isSubmenuOpen, SetIsSubmenuOpen] = useState()
const [page, setPage] = useState({page: '', links: []})
const [location, setLocation] = useState({})








}