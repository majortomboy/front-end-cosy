import React, { Component } from 'react';
import axios from 'axios';

class ImgUpload extends Component {

state = {
    title: '',
    series: '',
    due_date: '',
    budget: '',
    completed: false,
    photo: '',
};

handleChange = (e) => {
    this.setState({
    [e.target.id]: e.target.value
    })
};

handleImageChange = (e) => {
    this.setState({
    photo: e.target.files[0]
    })
};

handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    let form_data = new FormData();
    form_data.append('photo', this.state.photo, this.state.photo.name);
    form_data.append('title', this.state.title);
    form_data.append('due_date', this.state.due_date);
    form_data.append('series', this.state.series);
    form_data.append('budget', this.state.budget);
    let url = 'http://localhost:8000/projects/';
    axios.post(url, form_data, {
    headers: {
        'content-type': 'multipart/form-data'
    }
    })
        .then(res => {
        console.log(res.data);
        })
        .catch(err => console.log(err))


};

render() {
    return (
    <div className="modal">
        <form onSubmit={this.handleSubmit}>
        <p>
            <input type="text" placeholder='Title' id='title' value={this.state.title} onChange={this.handleChange} required/>
        </p>
        <p>
        <input type="text" placeholder='Series' id='series' value={this.state.series} onChange={this.handleChange} required/>
        </p>
        <p>
        <input type="date" placeholder='Due Date' id='due_date' value={this.state.due_date} onChange={this.handleChange} required/>
        </p>
        <p>
        <input type="number" placeholder='Budget' id='budget' value={this.state.budget} onChange={this.handleChange} required/>
        </p>
        <p>
        Completed
        <input type="checkbox" id='completed' value={this.state.completed} onChange={this.handleChange} required/>
        </p>
        <p>
        <input type="file"
                id="photo"
                accept="image/png, image/jpeg" onChange={this.handleImageChange} required/>
        </p>
        <input type="submit"/>
        </form>
    </div>
    );
}
}

export default ImgUpload;
