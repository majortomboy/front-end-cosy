import React from "react";
import { Doughnut } from "react-chartjs-2";

const state = {
    // labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
        {
    label: 'Rainfall',
    backgroundColor: [
        '#F7F7F7',
        '#2FDE00',
        // '#B21F00',
        // '#00A6B4',
        // '#6800B4'
    ],
    // hoverBackgroundColor: [
    //     '#501800',
    //     '#4B5000',
    //     '#175000',
    //     '#003350',
    //     '#35014F'
    // ],
    data: [50, 50]
    }
]
}

export default class BudgetChart extends React.Component {
render() {
    return (
        <div>
        <Doughnut
        data={state}
        options={{
            title:{
            display:true,
            text:'Budget',
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
