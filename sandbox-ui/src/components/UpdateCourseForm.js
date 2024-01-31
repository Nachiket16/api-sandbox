import React, { useState, useEffect } from "react";
import { Form, FormGroup, Input, Button, Container } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const UpdateCourseForm = () => {
    const navigate = useNavigate();

  const { id } = useParams(); // Get the course ID from the route parameters

  const [course, setCourse] = useState({
    id: "",
    title: "",
    description: ""
  });

  useEffect(() => {
    // Fetch the course data using the ID and set it in the state
    axios.get(`${base_url}/courses/${id}`)
      .then((response) => {
        const { id, title, description } = response.data;
        setCourse({ id, title, description });
      })
      .catch((error) => {
        console.error("Error fetching course data:", error);
      });
  }, [id]); // Fetch the course data when the component mounts and when the ID changes

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Update the course on the server
    axios.put(`${base_url}/courses/${id}`, course)
      .then((response) => {
        console.log(response);
        toast.success("Course updated successfully");
        navigate('/view-courses');

      })
      .catch((error) => {
        console.error("Error updating course:", error);
        toast.error("Failed to update the course");
      });
  };

  return (
    <div>
      <h1 className="text-center my-3">Update Course</h1>
      <Form style={{ marginLeft: '20px', marginRight: '20px' }} onSubmit={handleFormSubmit}>
        <FormGroup>
          <label>ID</label>
          <Input type="text" value={course.id} readOnly />
        </FormGroup>
        <FormGroup>
          <label>Title</label>
          <Input type="text" value={course.title} onChange={(e) => setCourse({ ...course, title: e.target.value })} />
        </FormGroup>
        <FormGroup>
          <label>Description</label>
          <Input type="textarea" value={course.description} onChange={(e) => setCourse({ ...course, description: e.target.value })} style={{ height: 130 }} />
        </FormGroup>
        <Container className="text-center">
          <Button type="submit" color="success">Update</Button>
        </Container>
      </Form>
    </div>
  );
};

export default UpdateCourseForm;
