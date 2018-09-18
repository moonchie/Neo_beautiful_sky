import React, { Component } from 'react';
import Chart from 'react-google-charts';
import axios from 'axios';


import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';


const url = "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY";

class Content extends Component {
    render() {
        return(
            <Card>
            <CardHeader
                title="Summary of all the Neo's"
                subtitle="There are 20 neo in total"
                actAsExpander={true}
                showExpandableButton={true}
                />
                <Graph />
            </Card>
        )
    }
}


class Graph extends Component {
    constructor(props){
        super(props);
        this.makeGraph = this.makeGraph.bind(this);
        this.state = {};
    }

    makeGraph(array) {
        const neoResult = [['Neo name', 'Min Estimate Diameter(km)', 'Max Estimate Diameter(km)']];
        for (var x in array){
            neoResult.push([array[x].name, array[x].estimated_diameter.kilometers.estimated_diameter_min, array[x].estimated_diameter.kilometers.estimated_diameter_max]);
        }
        return neoResult
    }

    componentDidMount() {
        axios.get(url)
        .then(res => {
            const data = res.data.near_earth_objects;
            this.setState(data);
            console.log(data);
        })
        .catch((err) => {
            console.log(err)
        } )
    }

    render() {
        return (
            <div style={{ display: 'flex', maxWidth: 900 }}>
                <Chart
                    width={600}
                    height={900}
                    chartType="BarChart"
                    loader={<div>Loading Chart</div>}
                    data={this.makeGraph(this.state)}
                    options={{
                    title: 'Distance difference of NEO',
                    chartArea: { width: '50%' },
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