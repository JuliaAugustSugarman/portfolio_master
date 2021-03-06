import React, { Component } from 'react';
import { connect } from 'react-redux';








class ProjectListAdmin extends Component {
    componentDidMount() {
        this.getProject();
    }
    getProject(){
        this.props.dispatch({ type: 'FETCH_PROJECT'})
    }

    adminList() {
        return this.props.projects.map(project =>
            <tr className="adminList" key={project.id}>
                <td className="table"> {project.name} </td>
                <td className="table"> <button onClick= {this.onDelete(project.id)} className="deleteButton">Delete</button> </td>
            </tr>
        )
    }
    onDelete = (id) => () => {
        console.log('deleting id', id);
        this.props.dispatch({ type: 'DELETE_PROJECT', payload: id});
    }


    render() {
 
        return (
            <div>
                 <center>
                <table>
                    <tbody>
                        {this.adminList()}
                    </tbody>
                </table>
                 </center >
            </div>

        );
    }


}



const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}


export default connect(mapReduxStateToProps)(ProjectListAdmin);