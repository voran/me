google.load('visualization', '1.1', {'packages': ['geochart']});
google.setOnLoadCallback(drawVisualization);


function drawVisualization() {
  var data = google.visualization.arrayToDataTable([
    ['Country', 'Relevance', {type: 'string', role: 'tooltip'}],
    ['Bogus', 0],
    ['Austria', 1, 'Visited'],
    ['Germany', 2, 'Lived'],
    ['United States', 2, 'Lived'],
    ['Czech Republic', 1, 'Visited'],
    ['France', 1, 'Visited'],
    ['Netherlands', 1, 'Visited'],
    ['Norway', 1, 'Visited'],
    ['Greece', 1, 'Visited'],
    ['Bulgaria', 2, 'Born'],
    ['Italy', 1, 'Visited'],
    ['Slovenia', 1, 'Visited'],
    ['Slovakia', 1, 'Visited'],
    ['Croatia', 1, 'Visited'],
    ['Belgium', 1, 'Visited'],
    ['Serbia', 1, 'Visited'],
    ['Hungary', 1, 'Visited'],
    ['Poland', 1, 'Visited']
  ]);

  var geochart = new google.visualization.GeoChart(document.getElementById('visualization'));
  geochart.draw(data, {width: 1280, height: 720, colorAxis: {minValue: 1, maxValue: 2, colors: ['#4FBF43','#4381BF']}});
}