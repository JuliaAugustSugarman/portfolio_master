import React, { Component } from 'react';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const styles = {

    form: {
        maxWidth: '1000px',
        maxHeight: '1000px',
        minWidth: '300px',
        padding: '40px',
        margin: 'auto',
        marginTop: '20px',

    },

    text: {
        color: 'a09f49',
    },

    input: {
        margin: '12px',
    },

}




class Home extends Component {


    homeList() {
        return this.props.projects.map(project =>
            <tr className="projectDisplay" key={project.id}>
                <td> {project.name} </td>
                <td> {project.description}</td>
                <td> {project.thumbnail}</td>
                <td> {project.website}</td>
                <td> {project.github}</td>
                <td> {project.date_completed}</td>
                <td> {project.tag_id}</td>
            </tr>
        )
    }
   

    render() {
        const classes = this.props.classes;

        return (
            <div>

                <Paper className={classes.form}>
                    <Typography variant='h4' className={classes.text}>Project List</Typography>
                <table>
                    <tbody className="hometable">
                        {this.homeList()}
                    </tbody>
                </table>
                </Paper>
            </div>

        );
    }


}



const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}


export default withStyles(styles)(
    connect(mapReduxStateToProps)(Home)
);