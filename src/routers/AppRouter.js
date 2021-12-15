import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginScreen from '../components/auth/LoginScreen';
import JournalScreen from '../components/journal/JournalScreen';
import AuthRouter from './AuthRouter';

const AppRouter = () => {
    return (
                <Routes>
                    <Route path="/auth/*" element={ <AuthRouter /> }  />
                    <Route path="/" element={ <JournalScreen /> }  />
                    <Route path="*" element={ <Navigate replace to="/auth/login" /> }  />
                    {/* <Route path="*" element={ <LoginScreen /> }  /> */}
                    
                </Routes>
    )
}

export default AppRouter
