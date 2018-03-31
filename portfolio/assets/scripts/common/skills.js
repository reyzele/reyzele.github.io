// Skills
class CreateSkill {
  constructor (options) {
    this.s = Snap(options.container);
    const radius = options.width / 3;
    const cx = options.width / 2;
    const cy = options.height / 2;
    this.length = 2 * radius * Math.PI;
    this.percent = options.percent;
    this.s.attr({
      width: options.width,
      height: options.height
    });
    this.baseCircle = this.s.circle(cx, cy, radius);
    this.baseCircle.attr({
      fill: 'none',
      stroke: '#ccc',
      strokeWidth: 15
    });
    this.bgCircle = this.s.circle(cx, cy, radius);
    this.bgCircle.transform('r-90,' + cx + ',' + cy);
    this.bgCircle.attr({
      fill: 'none',
      stroke: '#1bb696',
      strokeWidth: 15,
      strokeDasharray: this.length,
      strokeDashoffset: this.length
    });
  }
  draw () {
    Snap.animate(this.length, (1 - this.percent) * this.length,
      (val) => {
        this.bgCircle.attr({
          strokeDashoffset: val
        });
      }, 1500, mina.easeinout);
  }
}

const html = new CreateSkill({ width: 110, height: 110, container: '#html', percent: 0.9 });
const css = new CreateSkill({ width: 110, height: 110, container: '#css', percent: 0.85 });
const js = new CreateSkill({ width: 110, height: 110, container: '#js', percent: 0.5 });
const php = new CreateSkill({ width: 110, height: 110, container: '#php', percent: 0.3 });
const mySQL = new CreateSkill({ width: 110, height: 110, container: '#mySQL', percent: 0.5 });
const node = new CreateSkill({ width: 110, height: 110, container: '#node', percent: 0.3 });
const mango = new CreateSkill({ width: 110, height: 110, container: '#mango', percent: 0.4 });
const git = new CreateSkill({ width: 110, height: 110, container: '#git', percent: 0.8 });
const gulp = new CreateSkill({ width: 110, height: 110, container: '#gulp', percent: 0.7 });
const bower = new CreateSkill({ width: 110, height: 110, container: '#bower', percent: 0.6 });

$(document).ready(function () {
  skills();
});

$(window).scroll(function () {
  var offset = $('.skills').offset();
  console.log('offset');
  var scrollBottom = offset.top - $(window).height();
  if ($(this).scrollTop() > scrollBottom && $(this).scrollTop() < (scrollBottom + 80)) {
    skills();
  }
});

$('#about-arrow').click(function () {
  skills();
});

var skills = function () {
  html.draw();
  css.draw();
  js.draw();
  php.draw();
  mySQL.draw();
  node.draw();
  mango.draw();
  git.draw();
  gulp.draw();
  bower.draw();
};
