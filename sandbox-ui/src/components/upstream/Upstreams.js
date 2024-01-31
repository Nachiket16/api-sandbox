import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Course from "../Course";

import base_url from "../../api/bootapi";
import axios from "axios";

const Allcourses = () => {

    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/courses`)
            .then((response) => {
                toast.success("course has loaded")
                setCourses(response.data)
            },
                (error) => {
                    console.log(error);
                    toast.error("Something went Wrong")
                }
            )
    }
    useEffect(() => {
        console.log("inside use effect")
        getAllCoursesFromServer();
    }, []);

    const [courses,setCourses] = useState([]); //Hook->
    return (
        <div style={{ marginBottom: '20px' }}>
            <h1 className="text-center my-3">Upstreams</h1>
            <p>List of upstreams</p>
            {
                courses.length > 0 ? courses.map((item) => (
                    <div style={{marginBottom: '5px'}}>
                    <Course key={item.id} course={item} />
                    </div>
                )) : "No course Found"
            }
        </div>
    );
}

export default Allcourses;