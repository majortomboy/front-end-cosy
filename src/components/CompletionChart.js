import React from "react";
import { Doughnut } from "react-chartjs-2";

const state = {
    labels: ['Remaining','Completed'],
    datasets: [
        {
    label: 'Completion',
    backgroundColor: [
        // '#B21F00',
        // '#C9DE00',
        '#F7F7F7',
        '#2FDE00',
        // '#00A6B4',
        // '#6800B4'
    ],
    // hoverBackgroundColor: [
    //     '#501800',
    //     '#4B5000',
    //     // '#175000',
    //     // '#003350',
    //     // '#35014F'
    // ],
    data: [40, 60]
    }
]
}

export default class CompletionChart extends React.Component {
render() {
    return (
        <div>
        <Doughnut
        data={state}
        options={{
            title:{
            display:true,
            text:'Completion status',
            fontSize:20
            },
            legend:{
            display:true,
            position:'right'
            }
        }}
        />
    </div>
    );
}
}
