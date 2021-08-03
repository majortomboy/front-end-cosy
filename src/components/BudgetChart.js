import { React, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import ToBuyList from "./ToBuyList";


const BudgetChart = (props) => {

    const state = {
        labels: ['Remaining', 'Spent'],
        datasets: [
            {
        label: 'Budget',
        backgroundColor: [
            '#F7F7F7',
            '#2383BE'
        ],
        data: [(props.budget-props.itemTotal), props.itemTotal]
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

export default BudgetChart;
