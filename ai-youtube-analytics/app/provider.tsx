"use client"

import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'


function Provider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const { user } = useUser();
    useEffect(() => {
        user 
    }, [user]);

    // const createNewUser = async () => {
    //     const result = await axios.post('/api/user');
    //     console.log("error",result)
    // }
    useEffect(() => {
  axios.post('/api/user').then(res => console.log(res.data)).catch(err => console.error(err));
}, []);


    return (
        <div>
            {children}
        </div>
    )
}



export default Provider

