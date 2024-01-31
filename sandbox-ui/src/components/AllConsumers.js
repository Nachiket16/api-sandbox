import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import Course from "./Course";

import base_url from "../api/bootapi";
import axios from "axios";
import Consumers from "./Consumers";

const AllConsumers = () => {
    const getAllCoursesFromServer = () => {
        axios.get(`${base_url}/v1/consumers/`)
            .then((response) => {
                console.log("Consumers : ",response)
                toast.success("course has loaded")
                setConsumers(response.data)
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

    const [consumers, setConsumers] = useState([]);

    return (
        <div style={{ marginBottom: '20px' }}>
        <h1 className="text-center my-3">All Consumers</h1>
        <p>List of consumers are as follows</p>
        {consumers.length > 0 ? (
          consumers.map((consumer) => (
            <div key={consumer.consumerId} style={{ marginBottom: '15px' }}>
              <Consumers consumer={consumer} />
            </div>
          ))
        ) : (
          <p>No consumers found</p>
        )}
      </div>
    );
}

export default AllConsumers;