import React, { Component } from 'react';
import Chart from 'react-google-charts';
import data from '../data/neo.json';

// Access the NEO data from json file
const neo = data.near_earth_objects;

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
        this.makeGraph = this.makeGraph.bind(this);
        this.state = {neo};
    }

    makeGraph(array) {
        const neoResult = [['Neo name', 'Min Estimate Diameter(km)', 'Max Estimate Diameter(km)']];
        for (var x in array){
            neoResult.push([array[x].name, array[x].estimated_diameter.kilometers.estimated_diameter_min, array[x].estimated_diameter.kilometers.estimated_diameter_max]);
        }
        return neoResult
    }

    render() {
        return (
            <div style={{ display: 'flex', maxWidth: 900 }}>
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
            </div>
        )
    }
}

export default Content;