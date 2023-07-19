

// ================= toggle icon navbar ===============
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

menuIcon.onclick =()=> {
    if(navbar.style.display !='none'){
        navbar.style.display='none';
        menuIcon.classList.remove('bx-x');
        }else{
            menuIcon.classList.toggle('bx-x');
            navbar.style.display='block';
           
    }

    // navbar.classList.toggle('active');
}
 

// =================Scroll section ovtive line===============
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

Window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};



//================ sticky navbar============

let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);



/* ---- For Gallery section-------================================ */



/* ---- For Contact Section-------================================ */

document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  // Fetch form data
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  function sendEmail() {
    Email.send({
    Host: "smtp.gmail.com",
    Username : "name",
    // Password : "<email password>"
    To : 'uim.abhishek.yadav@gmail.com',
    From : "email",
    Subject : "new enqiry",
    Body : "massage",
    }).then(
      message => alert("mail sent successfully")
    );
  }

  // Perform form validation here if needed

  // Send the form data to your server or perform any desired action
  // For this example, we'll just log the data to the console
  console.log('Name: ' + name);
  console.log('Email: ' + email);
  console.log('Message: ' + message);

  // Reset the form fields
  document.getElementById('contact-form').reset();
});

    
/* ---- particles.js config -------================================ */

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 90,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
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
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1,
        "direction": "none",
        "random": false,
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
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
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
  
  
  /* ---- stats.js config ---- */
  
  var count_particles, stats, update;
  stats = new stats;
  stats.setMode(0);
  stats.domElement.style.position = 'absolute';
  stats.domElement.style.left = '0px';
  stats.domElement.style.top = '0px';
  document.body.appendChild(stats.domElement);
  count_particles = document.querySelector('.js-count-particles');
  update = function() {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
      count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
  };
  requestAnimationFrame(update);

