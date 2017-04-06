var log = console.log;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.strokeStyle = '#28d1fa';
ctx.lineWidth = 17;
ctx.lineCap = 'round';
ctx.shadowBlur = 15;
ctx.shadowColor = '#28d1fa'; 

var width = canvas.getAttribute('width');
var height = canvas.getAttribute('height');
var widthHalf = width / 2;
var heightHalf = height / 2;

var gradient = ctx.createRadialGradient(250, 250, 5, 250, 250, 300);
gradient.addColorStop(0, '#09303a');
gradient.addColorStop(1, '#000000');

function degToRad(degree) {
  var factor = Math.PI / 180;
  return degree * factor;
}

function renderTime() {
  
  var now = new Date();
  var today = now.toDateString();
  var time = now.toLocaleTimeString();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var milliseconds = now.getMilliseconds();
  var newSeconds = seconds + (milliseconds / 1000);

  // Background
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  // Hours
  ctx.beginPath();
  ctx.arc(widthHalf, heightHalf, 140, degToRad(270), degToRad((hours * 30) - 90));
  ctx.stroke();

  // Minutes
  ctx.beginPath();
  ctx.arc(widthHalf, heightHalf, 170, degToRad(270), degToRad((minutes * 6) - 90));
  ctx.stroke();

  // Seconds
  ctx.beginPath();
  ctx.arc(widthHalf, heightHalf, 200, degToRad(270), degToRad((newSeconds * 6) - 90));
  ctx.stroke();

  // Date
  ctx.font = 'bold 25px Arial';
  ctx.fillStyle = '#28d1fa';
  ctx.fillText(today, 175, heightHalf);

  // Time
  ctx.font = '25px Arial';
  ctx.fillStyle = '#28d1fa';
  ctx.fillText(time, 175, heightHalf + 30);
}

setInterval(renderTime, 33);
