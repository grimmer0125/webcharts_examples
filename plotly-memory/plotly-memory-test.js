const num_lines = 1;
const timespan = 10;
const t_int = 0.01;
const update_interval = 0.066;// 0.033;

const lines = [];
let t = 0;
for (let i = 0; i < num_lines; ++i) {
  lines.push({ x: [], y: [] });

  // 0~10, 0.01, so 1000 times (points).
  for (t = 0; t < timespan; t += t_int) {
    lines[i].x.push(t);
    lines[i].y.push(2 * i + Math.random());
  }
}

Plotly.newPlot('myDiv', lines);
//

const n = update_interval / t_int; // 0.033/0.01 =3.3
const update = {
  x: [],
  y: [],
};

// copy once, 1k data
for (var i = 0; i < num_lines; ++i) {
  lines[i].x = lines[i].x.slice(n); // number of data -=3
  lines[i].y = lines[i].y.slice(n);
}

const t_init = t;
for (var i = 0; i < num_lines; ++i) {
  t = t_init;
  for (j = 0; j < n; ++j, t += t_int) {
    lines[i].x.push(t); // 線的點越來越多, 每0.03s加3個點, 1s: 100 points
    lines[i].y.push(2 * i + Math.random());
  }

  update.x.push(lines[i].x);
  update.y.push(lines[i].y);
}

setInterval(() => {
  Plotly.restyle('myDiv', update);
}, update_interval * 1000);
