import React, { Component } from 'react';
import Chart from 'react-google-charts';
import axios from 'axios';
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'



import './content.css';


const url = "https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY";

class Content extends Component {
    render() {
        return(
            <div>
                <Graph />
            </div>
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
            <Card>
                <CardContent>
                    <h1>NEO Earth Close Approaches</h1>
                    <p>The following graph shows close approaches to the Earth by near-Earth objects (NEOs). The range is estimated from H.</p>
                    <Chart className="chart"
                        chartType="BarChart"
                        loader={<div>Loading Chart</div>}
                        data={this.makeGraph(this.state)}
                        options={{
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
                    </CardContent>
            </Card>
        )
    }
}

export default Content;