import * as d3 from 'd3';

export default class LineDisplay {
    constructor() {
        this.h = 350;
        this.w = 400;
        this.monthlySales = [{
                "month": 10,
                "sales": 100
            },
            {
                "month": 20,
                "sales": 130
            },
            {
                "month": 30,
                "sales": 250
            },
            {
                "month": 40,
                "sales": 300
            },
            {
                "month": 50,
                "sales": 265
            },
            {
                "month": 60,
                "sales": 225
            },
            {
                "month": 70,
                "sales": 180
            },
            {
                "month": 80,
                "sales": 120
            },
            {
                "month": 90,
                "sales": 145
            },
            {
                "month": 100,
                "sales": 130
            }
        ];
        this.lineFun = d3.line()
            .x(d => d.month * 3)
            .y(d => this.h - d.sales)
            .curve(d3.curveLinear); //can also be b-spline by using the term basis

        this.buildLineChart();
    }
    buildLineChart() {
        let svg = d3.select("#lineSpace")
            .attr("width", this.w)
            .attr("height", this.h);
        let viz = svg.append("path")
            .attr("d", this.lineFun(this.monthlySales))
            .attr("stroke", "purple")
            .attr("stroke-width",2)
            .attr("fill", "none")
        let labels = svg.selectAll("text")
            .data(this.monthlySales)
            .enter()
            .append("text")
            .text(d => d.sales)
            .attr("x",d => (d.month * 3) - 25)
            .attr("y",d => this.h - d.sales)
            .attr("font-size", "12px")
            .attr("font-family", "sans-serif")
            .attr("fill", "#666")
            .attr("text-anchor", "start")
            .attr("dy", "0.35em")
            .attr("font-weight",(d, i) => {
                if (i === 0 || i === (this.monthlySales.length - 1)) {
                    return "bold";
                } else {
                    return "normal";
                }
            })
    }
}