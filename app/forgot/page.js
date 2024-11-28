"use client"
import React, { useState } from "react";
import axios from 'axios';
import Forgot from '../components/forgot';

export default function ForgotPage() {
    return (
        <div className="flex justify-center items-center flex-col h-screen bg-amber-100">
            <Forgot />
        </div>
    );
}