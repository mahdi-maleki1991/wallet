import React from 'react';
import './App.css';
import { useRoutes } from 'react-router-dom';
import { Router } from './Routers';




export default function App() {

    const router = useRoutes(Router)

    return (
        <>
            {router}
        </>
    )

}

