import axios from "axios";
import React, {useEffect, useState} from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import base_url from "../../api/bootapi";
import { toast } from "react-toastify";

const Webhooks = () =>{

    const [course, setCourse] = useState({});
    //form handeler function

    const handleForm = (e)=>{
        console.log(course);
        postDatatoServer(course );
        e.preventDefault();
    }
    //Creating funtion to post data on server

    const postDatatoServer = (course) => {
        axios.post(`${base_url}/courses`,course)
        .then((response)=>{
                console.log(response)
                toast.success("course added successfully")
            },(error)=>{
                console.log(error)
                toast.warn("failed to add course")
            }
        )
    }
    
    return(
        <div>
            <h1 className="text-center my-3">{"Fill The Course Details"}</h1>
            <Form style={{marginLeft:'20px', marginRight:'20px'}}
                onSubmit={handleForm}>
                <FormGroup>
                    <label>{"Course Id"}</label>
                    <Input 
                        type="text" 
                        placeholder="Enter Here" 
                        name="userId" 
                        id="userId"
                        onChange={(e)=>{
                            setCourse({...course, id: e.target.value})
                        }}
                         />
                </FormGroup>
                <FormGroup>
                    <label for="title">{"Course title"}</label>
                    <Input type="text" placeholder="Enter Title" name="title" id="title"
                    onChange={(e)=>{
                        setCourse({...course, title:e.target.value})
                    }} />
                </FormGroup>
                <FormGroup>
                    <label for="description">{"Course description"}</label>
                    <Input type="textarea" placeholder="Enter description" name="description" id="description" style={{height: 130}}
                    onChange={(e)=>{
                        setCourse({...course, description:e.target.value})
                    }}
                    />
                </FormGroup>
                <Container className="text-center">
                    <Button type="submit" color="success">{"Add Course"}</Button>
                </Container>
            </Form>
        </div>
    )
}

export default Webhooks;