import React from "react";
import { Doughnut } from "react-chartjs-2";


const CompletionChart = (props) => {


    const state = {
        labels: ['Remaining','Completed'],
        datasets: [
            {
        label: 'Completion',
        backgroundColor: [
            '#F7F7F7',
            '#2383BE',
        ],
        data: [(100-(props.completionPercentage)), (props.completionPercentage)]
        }
    ]
    }
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

export default CompletionChart;
