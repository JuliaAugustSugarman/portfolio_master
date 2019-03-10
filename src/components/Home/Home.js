import React, { Component } from 'react';
import { connect } from 'react-redux';







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

        return (
            <div>
                <table>
                    <tbody>
                        {this.homeList()}
                    </tbody>
                </table>
            </div>

        );
    }


}



const mapReduxStateToProps = (reduxState) => {
    return reduxState;
}


export default connect(mapReduxStateToProps)(Home);