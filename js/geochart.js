google.load('visualization', '1.1', {'packages': ['geochart']});
google.setOnLoadCallback(drawVisualization);


function drawVisualization() {
  var data = google.visualization.arrayToDataTable([
    ['Country', 'Time Factor'],
    ['Austria', 1],
    ['Germany', 2],
    ['United States', 2],
    ['Czech Republic', 1],
    ['France', 1],
    ['Netherlands', 1],
    ['Norway', 1],
    ['Greece', 1],
    ['Bulgaria', 2],
    ['Italy', 1],
    ['Slovenia', 1],
    ['Slovakia', 1],
    ['Croatia', 1],
    ['Belgium', 1],
    ['Serbia', 1],
    ['Hungary', 1],
    ['Poland', 1]
  ]);

  var geochart = new google.visualization.GeoChart(document.getElementById('visualization'));
  geochart.draw(data, {width: 1280, height: 720, colorAxis: {minValue: 1, maxValue: 2, colors: ['#4FBF43','#4381BF']}});
}