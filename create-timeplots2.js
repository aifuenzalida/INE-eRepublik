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
													   min: 0.015,
													   max: 0.035
													   }),
	  timeGeometry: new Timeplot.DefaultTimeGeometry({
													 gridColor: "#000000",
													 axisLabelsPlacement: "top"
													 }),
	  lineColor: "#e4ac00",
	  fillColor: "#f7d670",
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
													   min: 35,
													   max: 55
													   }),
	  timeGeometry: new Timeplot.DefaultTimeGeometry({
													 gridColor: "#000000",
													 axisLabelsPlacement: "top"
													 }),
	  lineColor: "#a50707",
	  fillColor: "#ff6c6c",
	  roundValues: false,
	  showValues: true
    })
  ];
 
           
    timeplots[0] = Timeplot.create(document.getElementById("timeplot0"), plotInfo0);
    timeplots[1] = Timeplot.create(document.getElementById("timeplot1"), plotInfo1);

    timeplots[1].loadText("moneda.txt", "|", eventSource);
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
