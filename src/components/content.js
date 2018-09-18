import React, { Component } from 'react';
import Chart from 'react-google-charts';
import axios from 'axios';
// import data from '../data/neo.json';

const url = "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY";

// const neo = data.near_earth_objects;

class Content extends Component {
    render() {
        return(
            <div>
                <p>Content component works</p>
                <Graph />
            </div>
        )
    }
}


class Graph extends Component {
    constructor(props){
        super(props);
        // this.makeGraph = this.makeGraph.bind(this);
        // this.state = {};
    }

    // makeGraph(array) {
    //     const neoResult = [['Neo name', 'Min Estimate Diameter(km)', 'Max Estimate Diameter(km)']];
    //     for (var x in array){
    //         neoResult.push([array[x].name, array[x].estimated_diameter.kilometers.estimated_diameter_min, array[x].estimated_diameter.kilometers.estimated_diameter_max]);
    //     }
    //     return neoResult
    // }

    componentDidMount() {
        axios.get(url)
        .then(res => {
            const neo = res.data.near_earth_objects;
            this.setState(neo);
            console.log(neo);
        })
        .catch((err) => {
            console.log(err)
        } )
    }

    render() {
        return (
            {/* <div style={{ display: 'flex', maxWidth: 900 }}>
                <Chart
                    width={900}
                    height={600}
                    chartType="BarChart"
                    loader={<div>Loading Chart</div>}
                    data={this.makeGraph(neo)}
                    options={{
                    title: 'Distance difference of NEO',
                    chartArea: { width: '30%' },
                    hAxis: {
                        title: 'Min Estimated Diameter(km)',
                        minValue: 0,
                    },
                    vAxis: {
                        title: 'Neo names',
                    },
                    }}
                    legendToggle
                />
            </div> */}
        )
    }
}

export default Content;