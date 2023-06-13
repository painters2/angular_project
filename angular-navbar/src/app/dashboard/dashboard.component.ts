import { Component, NgZone, ViewChild } from "@angular/core";



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  chartOptions = {
	  animationEnabled: true,
	  title: {
		text: "Expense Overview"
	  },
	  data: [{
		type: "pie",
		startAngle: -90,
		indexLabel: "{name}: {y}",
		yValueFormatString: "#,###.##'%'",
		dataPoints: [
		  { y: 12.5, name: "Travel" },
		  { y: 13.5, name: "Education" },
		  { y: 14.5, name: "Health care" },
		  { y: 13.5, name: "Shopping" },
      { y: 20.5, name: "Grocery" },
		  { y: 12.5, name: "Entertainment" },
		  { y: 13.5, name: "Food" },
		]
	  }]
	}	
 
}
