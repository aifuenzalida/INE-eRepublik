var timeplots = [];

function onLoad() {
    var eventSource = new Timeplot.DefaultEventSource();
                
    var plotInfo0 = [
       Timeplot.createPlotInfo({
          id: "plot0",
       	  dataSource: new Timeplot.ColumnSource(eventSource,1),
	  valueGeometry: new Timeplot.DefaultValueGeometry({
													   gridColor: "#000000",
													   axisLabelsPlacement: "left",
													   min: 0,
													   max: 250
													   }),
	  timeGeometry: new Timeplot.DefaultTimeGeometry({
													 gridColor: "#000000",
													 axisLabelsPlacement: "top"
													 }),
	  lineColor: "#008e41",
	  fillColor: "#85c226",
	  showValues: true
    })
  ];

 var plotInfo1 = [
       Timeplot.createPlotInfo({
          id: "plot1",
	  dataSource: new Timeplot.ColumnSource(eventSource,2),
	  valueGeometry: new Timeplot.DefaultValueGeometry({
													   gridColor: "#000000",
													   axisLabelsPlacement: "left",
													   min: 0,
													   max: 250
													   }),
	  timeGeometry: new Timeplot.DefaultTimeGeometry({
													 gridColor: "#000000",
													 axisLabelsPlacement: "top"
													 }),
	  lineColor: "#1745ab",
	  fillColor: "#d62b20",
	  showValues: true
    })
  ];
 
  var plotInfo2 = [
       Timeplot.createPlotInfo({
          id: "plot2",
	  dataSource: new Timeplot.ColumnSource(eventSource,3),
	  valueGeometry: new Timeplot.DefaultValueGeometry({
													   gridColor: "#000000",
													   axisLabelsPlacement: "left",
													   min: 0,
													   max: 250
													   }),
	  timeGeometry: new Timeplot.DefaultTimeGeometry({
													 gridColor: "#000000",
													 axisLabelsPlacement: "top"
													 }),
	  lineColor: "#0060d8",
	  fillColor: "#dc0000",
	  showValues: true
    })
  ];
  
   var plotInfo3 = [
       Timeplot.createPlotInfo({
          id: "plot3",
	  dataSource: new Timeplot.ColumnSource(eventSource,4),
	  valueGeometry: new Timeplot.DefaultValueGeometry({
													   gridColor: "#000000",
													   axisLabelsPlacement: "left",
													   min: 0,
													   max: 250
													   }),
	  timeGeometry: new Timeplot.DefaultTimeGeometry({
													 gridColor: "#000000",
													 axisLabelsPlacement: "top"
													 }),
	  lineColor: "#1201ff",
	  fillColor: "#fe0007",
	  showValues: true
    })
  ];
   
    var plotInfo4 = [
       Timeplot.createPlotInfo({
          id: "plot4",
	  dataSource: new Timeplot.ColumnSource(eventSource,5),
	  valueGeometry: new Timeplot.DefaultValueGeometry({
													   gridColor: "#000000",
													   axisLabelsPlacement: "left",
													   min: 0,
													   max: 250
													   }),
	  timeGeometry: new Timeplot.DefaultTimeGeometry({
													 gridColor: "#000000",
													 axisLabelsPlacement: "top"
													 }),
	  lineColor: "#051205",
	  fillColor: "#f70021",
	  showValues: true
    })
  ];
	
	 var plotInfo5 = [
       Timeplot.createPlotInfo({
          id: "plot5",
	  dataSource: new Timeplot.ColumnSource(eventSource,6),
	  valueGeometry: new Timeplot.DefaultValueGeometry({
													   gridColor: "#000000",
													   axisLabelsPlacement: "left",
													   min: 0,
													   max: 250
													   }),
	  timeGeometry: new Timeplot.DefaultTimeGeometry({
													 gridColor: "#000000",
													 axisLabelsPlacement: "top"
													 }),
	  lineColor: "#0000ff",
	  fillColor: "#ff0000",
	  showValues: true
    })
  ];
	 
	 	 var plotInfo6 = [
       Timeplot.createPlotInfo({
          id: "plot6",
	  dataSource: new Timeplot.ColumnSource(eventSource,7),
	  valueGeometry: new Timeplot.DefaultValueGeometry({
													   gridColor: "#000000",
													   axisLabelsPlacement: "left",
													   min: 0,
													   max: 250
													   }),
	  timeGeometry: new Timeplot.DefaultTimeGeometry({
													 gridColor: "#000000",
													 axisLabelsPlacement: "top"
													 }),
	  lineColor: "#0e4ca1",
	  fillColor: "#ffd504",
	  showValues: true
    })
  ];
		 
		 	 var plotInfo7 = [
       Timeplot.createPlotInfo({
          id: "plot7",
	  dataSource: new Timeplot.ColumnSource(eventSource,8),
	  valueGeometry: new Timeplot.DefaultValueGeometry({
													   gridColor: "#000000",
													   axisLabelsPlacement: "left",
													   min: 0,
													   max: 250
													   }),
	  timeGeometry: new Timeplot.DefaultTimeGeometry({
													 gridColor: "#000000",
													 axisLabelsPlacement: "top"
													 }),
	  lineColor: "#002a6b",
	  fillColor: "#e3031d",
	  showValues: true
    })
  ];
			 
			 	 var plotInfo8 = [
       Timeplot.createPlotInfo({
          id: "plot8",
	  dataSource: new Timeplot.ColumnSource(eventSource,9),
	  valueGeometry: new Timeplot.DefaultValueGeometry({
													   gridColor: "#000000",
													   axisLabelsPlacement: "left",
													   min: 0,
													   max: 250
													   }),
	  timeGeometry: new Timeplot.DefaultTimeGeometry({
													 gridColor: "#000000",
													 axisLabelsPlacement: "top"
													 }),
	  lineColor: "#000000",
	  fillColor: "#279637",
	  showValues: true
    })
  ];
				 
				 	 var plotInfo9 = [
       Timeplot.createPlotInfo({
          id: "plot9",
	  dataSource: new Timeplot.ColumnSource(eventSource,10),
	  valueGeometry: new Timeplot.DefaultValueGeometry({
													   gridColor: "#000000",
													   axisLabelsPlacement: "left",
													   min: 0,
													   max: 250
													   }),
	  timeGeometry: new Timeplot.DefaultTimeGeometry({
													 gridColor: "#000000",
													 axisLabelsPlacement: "top"
													 }),
	  lineColor: "#3f6886",
	  fillColor: "#ff7f03",
	  showValues: true
    })
  ];
					 
					 	 var plotInfo10 = [
       Timeplot.createPlotInfo({
          id: "plot10",
	  dataSource: new Timeplot.ColumnSource(eventSource,11),
	  valueGeometry: new Timeplot.DefaultValueGeometry({
													   gridColor: "#000000",
													   axisLabelsPlacement: "left",
													   min: 0,
													   max: 250
													   }),
	  timeGeometry: new Timeplot.DefaultTimeGeometry({
													 gridColor: "#000000",
													 axisLabelsPlacement: "top"
													 }),
	  lineColor: "#436b9f",
	  fillColor: "#fe0000",
	  showValues: true
    })
  ];
            
    timeplots[0] = Timeplot.create(document.getElementById("timeplot0"), plotInfo0);
    timeplots[1] = Timeplot.create(document.getElementById("timeplot1"), plotInfo1);
    timeplots[2] = Timeplot.create(document.getElementById("timeplot2"), plotInfo2);
    timeplots[3] = Timeplot.create(document.getElementById("timeplot3"), plotInfo3);
    timeplots[4] = Timeplot.create(document.getElementById("timeplot4"), plotInfo4);
    timeplots[5] = Timeplot.create(document.getElementById("timeplot5"), plotInfo5);
    timeplots[6] = Timeplot.create(document.getElementById("timeplot6"), plotInfo6);
    timeplots[7] = Timeplot.create(document.getElementById("timeplot7"), plotInfo7);
    timeplots[8] = Timeplot.create(document.getElementById("timeplot8"), plotInfo8);
    timeplots[9] = Timeplot.create(document.getElementById("timeplot9"), plotInfo9);
    timeplots[10] = Timeplot.create(document.getElementById("timeplot10"), plotInfo10);

    timeplots[1].loadText("partidos.txt", ",", eventSource);
}

var resizeTimerID = null;
function onResize() {
    if (resizeTimerID == null) {
        resizeTimerID = window.setTimeout(function() {
            resizeTimerID = null;
            for (var i = 0; i < timeplots.length; i++) {
                timeplots[i].repaint();
            }
        }, 500);
    }
}
