import React from "react";

const Resume = (props) => {
    const { resume } = props;

    return (
        <div>
            <h2>General Info</h2>
            {resume.map((general) => {
                return <p>{general.name}, {general.email}, {general.phone}</p>;
            })}
            <h2>School</h2>
            {resume.map((school) => {
                return <p>{school.schoolName}, {school.major}, {school.grad}</p>;
            })}
        </div>
    );
};

export default Resume;