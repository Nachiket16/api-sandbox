import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardSubtitle,
  CardText,
  CardFooter,
  Container,
} from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Course = ({ course, onCourseDeleted, onCourseUpdated }) => {
    const navigate = useNavigate();
  useEffect(() => {
    document.title = "Course";
  }, []);

  const handleUpdate = (e) => {
    console.log(course);
    navigate(`/update-course/${course.id}`);
  };

  const handleDelete = (e) => {
    console.log(course);
    deleteFromServer(course);
  };

  const deleteFromServer = (course) => {
    axios.delete(`${base_url}/courses/${course.id}`).then(
      (response) => {
        console.log(response);
        toast.success("course deleted successfully");
        setTimeout(()=>{
            window.location.reload();
        },1000)
      },
      (error) => {
        console.log(error);
        toast.warn("failed to delete the course");
      }
    );
  };

  return (
    <Card className="text-center">
      <CardBody>
        <CardSubtitle tag="h3">{course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <Container className="text-center">
          <Button color="danger" onClick={handleDelete}>
            Delete
          </Button>{" "}
          <Button color="warning" onClick={handleUpdate}>
            Update
          </Button>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Course;
