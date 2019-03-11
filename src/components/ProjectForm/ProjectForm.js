import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {

    form: {
        maxWidth: '700px',
        minWidth: '300px',
        padding: '40px',
        margin: 'auto',
        marginTop: '20px',
        
    },

    text: {
        color: 'white',
    },

    input: {
        margin: '12px',
    },

    button: {
        width: '100%',
    }
}




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
        const classes = this.props.classes;

        return (
            <div>

                <Paper className={classes.form}>
                    <Typography variant='h4' className={classes.text}>Create New Plant</Typography>
                <form onSubmit={this.addNewProject}>
                    <select value={this.state.newProject.thumbnail} onChange={this.handleChangeFor('thumbnail')}>
                        <option value=" " >Add Image</option>
                        <option >Flower Varieties</option>
                        <option>Gallery of my Life</option>
                        <option >Feedback Form</option>
                        <option >Fruit Basket</option>
                        <option >Calculator</option>
                        <option >To Do List</option>

                    </select><br />
                    {/* <div className = "thumb"> <input placeholder="thumbnail" type='text' value={this.state.newProject.thumbnail} onChange={this.handleChangeFor('thumbnail')} /></div> */}
                    <div>
                        <input placeholder="name" type='text' value={this.state.newProject.name} onChange={this.handleChangeFor('name')} />
                        <input placeholder="description" type='text' value={this.state.newProject.description} onChange={this.handleChangeFor('description')} />
                        {/* <input placeholder="tag_id" value={this.state.newProject.tag_id} onChange={this.handleChangeFor('tag_id')} /> */}
                        <select value={this.state.newProject.tag} onChange={this.handleChangeFor('tag')}>
                            <option value="1">Platform</option>
                            <option value="2">React</option>
                            <option value="3">jQuery</option>
                            <option value="4">Node</option>
                            <option value="5">SQL</option>
                            <option value="6">Redux</option>
                            <option value="7">HTML</option>
                        </select><br />
                    </div>
                    
                    <div className = "projectBody">
                        <input placeholder="website" type='text' value={this.state.newProject.website} onChange={this.handleChangeFor('website')} />
                        <input placeholder="github" type='text' value={this.state.newProject.github} onChange={this.handleChangeFor('github')} />
                        <input placeholder="date_completed" type='date' value={this.state.newProject.date_completed} onChange={this.handleChangeFor('date_completed')} />
                    </div>
                    <br />
                    <button className= "addButton"> Add New Project </button>
                </form>
                </Paper>
            </div>
        );
    }
}



const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}


export default withStyles(styles)(
    connect(mapReduxStateToProps)(ProjectForm)
);
