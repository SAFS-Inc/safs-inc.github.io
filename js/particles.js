/* ---- particles.js config ---- */
particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 95,
        "density": {
          "enable": false,
          "value_area": 315.65905665290904
        }
      },
      "color": {
        "value": "#15d72b"
      },
      "shape": {
        "type": "edge",
        "stroke": {
          "width": 2,
          "color": "#a116cd"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3.945738208161363,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 31.168831168831172,
          "size_min": 0,
          "sync": true
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#24f017",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 11.22388442605866,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "bubble"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 243.62316369040352,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 69,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });
