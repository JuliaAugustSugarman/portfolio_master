import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProjectForm from '../ProjectForm/ProjectForm';
import ProjectListAdmin from '../ProjectListAdmin/ProjectListAdmin';



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