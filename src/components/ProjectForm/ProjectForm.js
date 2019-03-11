import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';




class ProjectForm extends Component {


    state = {
        newProject: {
            name: '',
            description: '',
            thumbnail: '',
            website: '',
            github: '',
            date_completed: 1,
            tag_id: 1,
        }
    }

    handleChangeFor = (propertyName) => (event) => {
        this.setState({
            newProject: {
                ...this.state.newProject,
                [propertyName]: event.target.value,
            },
        });
    }

    addNewProject = event => {
        console.log(event);
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_PROJECT', payload: this.state.newProject })
        this.setState({
            newProject: {
                name: '',
                description: '',
                thumbnail: '',
                website: '',
                github: '',
                date_completed: '',
                tag_id: '',
            }
        });
    }


    render() {

        return (
            <div>


                <form onSubmit={this.addNewProject}>
                    <div className = "thumb"> <input placeholder="thumbnail" type='text' value={this.state.newProject.thumbnail} onChange={this.handleChangeFor('thumbnail')} /></div>
                    <div>
                        <input placeholder="name" type='text' value={this.state.newProject.name} onChange={this.handleChangeFor('name')} />
                        <input placeholder="description" type='text' value={this.state.newProject.description} onChange={this.handleChangeFor('description')} />
                        <input placeholder="tag_id" value={this.state.newProject.tag_id} onChange={this.handleChangeFor('tag_id')} />
                    </div>
                    <div className = "projectBody">
                        <input placeholder="thumbnail" type='text' value={this.state.newProject.thumbnail} onChange={this.handleChangeFor('thumbnail')} />
                        <input placeholder="website" type='text' value={this.state.newProject.website} onChange={this.handleChangeFor('website')} />
                        <input placeholder="github" type='text' value={this.state.newProject.github} onChange={this.handleChangeFor('github')} />
                        <input placeholder="date_completed" type='date' value={this.state.newProject.date_completed} onChange={this.handleChangeFor('date_completed')} />
                    </div>
                    <br />
                    <button className= "addButton"> Add New Project </button>
                </form>
            </div>
        );
    }
}



const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}


export default connect(mapReduxStateToProps)(ProjectForm);
