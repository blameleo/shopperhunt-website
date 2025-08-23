"use client";

import { useEffect } from "react";
import axios from "axios";

const PageVisitsRecorder = () => {
    useEffect(() => {
        const recordPageVisit = async () => {
            try {
                await axios.post("https://apidev.shopperhunt.com/api/v1/visits/record");
            } catch (error) {
                console.error("Error recording page visit ❌", error);
            }
        };

        recordPageVisit();
    }, []);

    return null;
};

export default PageVisitsRecorder;
