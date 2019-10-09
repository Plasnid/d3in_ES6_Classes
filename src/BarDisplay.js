import * as d3 from "d3";

export default class BarDisplay {
    constructor(barData, barHolder, barWidth, barHeight,padding) {
        this.w = barWidth;
        this.h = barHeight;
        this.padding = padding;
        this.barHolder = barHolder;
        //this.dataset = [50, 10, 14, 20, 25];
        this.dataset = barData;
        this.buildChart();
    }
    buildChart() {
        let svg = d3.select(this.barHolder)
            .attr("width", this.w)
            .attr("height", this.h);

        svg.selectAll("rect")
            .data(this.dataset)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * (this.w / this.dataset.length))
            .attr("y", d => this.h - (d))
            .attr("width", this.w / this.dataset.length - this.padding)
            .attr("height", d => d)
            .attr("fill", d => `rgb(${d*10},0,0)`);
    }
}