import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa'
import react from 'react'

const sublinks = [
    {
        page: 'menu',
        links: [
            { label: 'prices', icon: <FaCreditCard />, url: '/products' },
            { label: 'pictures', icon: <FaCreditCard />, url: '/products' },
            {
                label: 'items', icon: <FaCreditCard />, url: '/products'
            },

        ],
    },
    {
        page: 'contacts',
        links: [
            {
                label: 'phone', icon: <FaBook />, url:
                    '/products'
            },
            {
                label: 'email address', icon: <FaBook />, url: '/products'
            },
            {
                label: 'social links', icon: <FaBook />, url: '/products'
            },
            {
                label: 'billing', icon: <FaBook />, url: '/products'
            }
        ],
    },
    {
        page: 'gallery',
        links: [
            {
                label: 'about',
                icon: <FaBriefcase />,
                url: '/products'
            },
            {
                label: 'customer reviews', icon: <FaBriefcase />, url: '/products'
            },
        ],
    },
];


export default sublinks;

