import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = reduxState => ({
    reduxState,
});

class ProjectListAdmin extends Component {

    // componentDidMount() {
    //     this.getproject();
    //     // use component did mount to dispatch an action to request the plantList from the API
    // }

    // getPlants() {
    //     this.props.dispatch({ type: 'FETCH_PLANTS' })
    // }//get function


    render() {
        return (
            <div>
                
                    {/* {this.props.reduxState.projectlist.map((plant) => <PlantItem key={plant.id} plantData={plant} />)} */}
              
            </div>
        );
    }
}






export default connect(mapStateToProps)(ProjectListAdmin);
