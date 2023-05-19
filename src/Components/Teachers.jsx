import React from "react";
// import { Link } from 'react-router-dom'
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import classes from "../styles/Intro.module.css";
import classesTeachers from "../styles/Teachers.module.css";

function Teachers({ data }) {
  if (!Object.keys(data).length) return null;

  return (
    <div className={classes.container}>
      <p className={classes.titleText}>OUR TEACHERS</p>
      <div style={{ padding: "0 8vmin 5vmin " }}>
        <div className={classesTeachers.teachersContainer}>
          {data?.map((teacher, index) => {
            const imageUrl = "https://" + teacher?.images?.fields?.file?.url;
            return (
              <div key={index} className={classesTeachers.teacherBox}>
                <img src={imageUrl} width="100%" alt={teacher.name} />
                <p className={classesTeachers.teacherName}>{teacher.name}</p>
                <div className={classesTeachers.teacherText}>{documentToReactComponents(teacher.bio)}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Teachers;
