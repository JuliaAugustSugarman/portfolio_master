import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectListAdmin from '../ProjectListAdmin/ProjectListAdmin'
import ProjectForm from '../ProjectForm/ProjectForm'





const mapStateToProps = reduxState => ({
    reduxState,
});

class Admin extends Component {

    

    render() {

        return (
            <div>
                <ProjectForm />
                <ProjectListAdmin />
               
            </div>

        );
    }


}




export default connect(mapStateToProps)(Admin);
