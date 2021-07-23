import React from "react";

const project = {
    id: 1,
    title: "She-Ra",
    series: "She-Ra and The Princesses of Power",
    due_date: "07-31-2021",
    budget: 150.25,
    completed: false
}

function Project(props) {
    return (
        <div class="card">
            <img src="http://placehold.it/900x400" class="card-img-top" alt=""></img>
            <div class="card-body">
                <p class="card-text fw-bold">{project.title}</p>
                <p class="card-text fst-italic">{project.series}</p>
            </div>
        </div>
    );
    }

export default Project;
