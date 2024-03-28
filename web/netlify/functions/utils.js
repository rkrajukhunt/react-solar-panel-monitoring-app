function random(min, max) {
  return (Math.random() * (max - min + 1) + min).toFixed(2);
}

module.exports = { random };
