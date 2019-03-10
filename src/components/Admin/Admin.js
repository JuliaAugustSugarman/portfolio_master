import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectListAdmin from '../ProjectListAdmin/ProjectListAdmin'
import ProjectForm from '../ProjectForm/ProjectForm'
import { Link } from 'react-router-dom';





const mapStateToProps = reduxState => ({
    reduxState,
});

class Admin extends Component {

   

    render() {
        
        return (
            <div>
                <Link to='/'>Back to Project Page</Link>
                <ProjectForm />
                <ProjectListAdmin />
               
            </div>

        );
    }


}




export default connect(mapStateToProps)(Admin);
