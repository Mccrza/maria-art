$(document).ready(function () {
  var pic = $("img:first");
  var images = [
    "images/ships-wheel.jpg",
    "images/messy-paints-on-tarp-small.jpg",
    "images/wood-chisel-closeup-small.jpg",
    "images/turtle-wood-carving-small.jpg",
    "images/thumb-pallette-small.jpg",
    "images/three-polaroids.jpg",
    "images/sculpture-molds.jpg",
    "images/red-orange-splash.jpg",
    "images/red-and-blue-resin-small.jpg",
    "images/purple-and-orange-resin-small.jpg",
    "images/pink-swirls.jpg",
    "images/pineapple-photo.jpg",
    "images/painted-boxes.jpg",
    "images/octopus-painting.jpg",
    "images/marias-hands-small.jpg",
    "images/goldfish-epoxy-small.jpg",
    "images/double-vision-mason-jars.jpg",
    "images/bricks.jpg",
    "images/airplane-polaroid.jpg",
    "images/abstract-small.jpg"
  ];

  var i = 0;
  setInterval(function () {
    // Returns 0, 1, 2, 3, 0, 1, 2, ....
    i = (i + 1) % images.length;
    pic.fadeOut(250, function () {
      $(this).attr("src", images[i]);
      $(this).fadeIn(1050);
    });
  }, 5000);
});
