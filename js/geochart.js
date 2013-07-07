google.load('visualization', '1.1', {'packages': ['geochart']});
google.setOnLoadCallback(drawVisualization);


function drawVisualization() {
  var data = google.visualization.arrayToDataTable([
    ['Country', 'Relationship'],
    ['Bogus', 0],
    ['Austria', {v: 1, f: 'Visited'}],
    ['Germany', {v: 2, f: 'Lived'}],
    ['United States', {v: 2, f: 'Lived'}],
    ['Czech Republic', {v: 1, f: 'Visited'}],
    ['France', {v: 1, f: 'Visited'}],
    ['Netherlands', {v: 1, f: 'Visited'}],
    ['Norway', {v: 1, f: 'Visited'}],
    ['Greece', {v: 1, f: 'Visited'}],
    ['Bulgaria', {v: 2, f: 'Born'}],
    ['Italy', {v: 1, f: 'Visited'}],
    ['Slovenia', {v: 1, f: 'Visited'}],
    ['Slovakia', {v: 1, f: 'Visited'}],
    ['Croatia', {v: 1, f: 'Visited'}],
    ['Belgium', {v: 1, f: 'Visited'}],
    ['Serbia', {v: 1, f: 'Visited'}],
    ['Hungary', {v: 1, f: 'Visited'}],
    ['Poland', {v: 1, f: 'Visited'}]
  ]);

  var geochart = new google.visualization.GeoChart(document.getElementById('visualization'));
  geochart.draw(data, {width: 1280, height: 720, colorAxis: {minValue: 1, maxValue: 100, colors: ['#4FBF43','#4381BF']}});
}