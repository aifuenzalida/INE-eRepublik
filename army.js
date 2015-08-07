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
													   min: 2,
													   max: 5
													   }),
	  timeGeometry: new Timeplot.DefaultTimeGeometry({
													 gridColor: "#000000",
													 axisLabelsPlacement: "top"
													 }),
	  lineColor: "#000000",
	  fillColor: "#959595",
	  roundValues: false,
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
													   max: 3000
													   }),
	  timeGeometry: new Timeplot.DefaultTimeGeometry({
													 gridColor: "#000000",
													 axisLabelsPlacement: "top"
													 }),
	  lineColor: "#000000",
	  fillColor: "#959595",
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
													   max: 200
													   }),
	  timeGeometry: new Timeplot.DefaultTimeGeometry({
													 gridColor: "#000000",
													 axisLabelsPlacement: "top"
													 }),
	  lineColor: "#000000",
	  fillColor: "#959595",
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
													   max: 100
													   }),
	  timeGeometry: new Timeplot.DefaultTimeGeometry({
													 gridColor: "#000000",
													 axisLabelsPlacement: "top"
													 }),
	  lineColor: "#000000",
	  fillColor: "#959595",
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
													   max: 125
													   }),
	  timeGeometry: new Timeplot.DefaultTimeGeometry({
													 gridColor: "#000000",
													 axisLabelsPlacement: "top"
													 }),
	  lineColor: "#000000",
	  fillColor: "#959595",
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
													   max: 60
													   }),
	  timeGeometry: new Timeplot.DefaultTimeGeometry({
													 gridColor: "#000000",
													 axisLabelsPlacement: "top"
													 }),
	  lineColor: "#000000",
	  fillColor: "#959595",
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
													   max: 70
													   }),
	  timeGeometry: new Timeplot.DefaultTimeGeometry({
													 gridColor: "#000000",
													 axisLabelsPlacement: "top"
													 }),
	  lineColor: "#000000",
	  fillColor: "#959595",
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
													   max: 50
													   }),
	  timeGeometry: new Timeplot.DefaultTimeGeometry({
													 gridColor: "#000000",
													 axisLabelsPlacement: "top"
													 }),
	  lineColor: "#000000",
	  fillColor: "#959595",
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
													   max: 20
													   }),
	  timeGeometry: new Timeplot.DefaultTimeGeometry({
													 gridColor: "#000000",
													 axisLabelsPlacement: "top"
													 }),
	  lineColor: "#000000",
	  fillColor: "#959595",
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

    timeplots[1].loadText("ejercito.txt", "|", eventSource);
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