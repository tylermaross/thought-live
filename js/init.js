/* @authors awantoch, tross, sheybey */

(function($){
  $(function(){

    const teamInfo = [
      {
        name: 'Andrew Hacker',
        position: 'CEO',
        img: 'ahacker.png',
        details: 'Professor Andrew J. Hacker is Founder and CEO of MistIQ Technologies Inc. and Cybersecurity Expert In Residence at Harrisburg University. As CEO of MistIQ Technologies Inc, Mr. Hacker is building an innovative technology called Smart Data that will help protect consumer privacy while still providing device manufacturers access to use data. Mr. Hacker was the Deputy Chief Information Security Officer for the Commonwealth of Pennsylvania for 6 years. Mr. Hacker has publications in Network World, Information Week, Help Net Security and appears regularly as Cybersecurity Expert on FOX, NBC and CBS news affiliates locally and nationally. Certifications: CISSP, ISSAP, PCI QSA (former), CTGA, CGCIO.'
      },
      {
        name: 'Gil O\'Brien',
        position: 'CMO',
        img: 'gobrien.png',
        details: 'Gil O\'Brien is the Chief Marketing Officer at MistIQ Technologies Inc. He has extensive experience in Finance and Marketing and currently helps Financial Institutions offshore their New York accounting operations to reduce cost. He received his MBA in Marketing from Baruch College - Zicklin School of Business. He excelled as a Financial Advisor with Salomon Smith Barney.'
      },
      {
        name: 'Leah Zimmerman',
        position: 'Project Manager',
        img: 'lzimmerman.png',
        details: 'Ms. Leah Zimmerman is the Project Manager of MistIQ Technologies Inc. and has more than 15 years of IT risk and cyber security experience, a CISSP and RMP. She has vast blockchain knoweldge in Hyperledger, ethereum, encryption, P2P, Coco framework and token marketplaces. She is also proficient in Deep learning, Data Loss Prevention, Privacy and provenance of data, Open source and Cloud computing. She is a member of the PMO for multiple $100M - $1B DoD, CMS, TSA, FBI, IRS IT infrastructure programs including the Key Management Infrastructure Program. She has a strong network planning and scheduling experience, a PSP, EVP and CCP. She is also one of the first graduates of the ACTiVATE® Women’s Entrepreneurship Program a National Science Foundation program that helps women start technology-enabled businesses. Ms. Zimmerman is also a MBDi program graduate in business development. She has managed Green Manor Group LLC for the past eleven years. She is an American Society for Quality senior fellow and Software Quality Engineer and PMI certified Agile Practioner. Ms. Zimmerman holds a Bachelor of Economics from Syracuse University.'
      },
      {
        name: 'Andrew Weiss',
        position: 'Cheif Counsel',
        img: 'aweiss.png',
        details: 'Mr. Andrew Weiss is the Chief Counsel of MistIQ Technologies Inc. He is an attorney specializing in patent law and litigation for the high-tech industry. Mr. Weiss has practiced more than 10 years since earning his JD at USC.'
      },
      {
        name: 'Philip Grim',
        position: 'CTO',
        img: 'pgrim.png',
        details: 'Professor Philip A Grim II is a Lecturer in Computer Science at Harrisburg University of Science and Technology. In addition, Mr. Grim serves as the Chief Technology Officer of MistIQ Technologies Inc, helping to lead the development of the company’s Smart Data and Active Data Transformation Fabric products.Mr. Grim’s career as a professional software engineer has spanned more than 25 years of both military and civilian contractor experience supporting the Department of Defense and the intelligence community. Mr. Grim holds an Associate of Applied Science in Computer Programming Technology from Metropolitan Community College of Omaha, a Bachelor of Science in Computer Information Systems from St. Leo University, and a Master of Science in Analytics from Harrisburg University.'
      },
      {
        name: 'Sam Jones',
        position: 'Lead Software Engineer',
        img: 'sjones.png',
        details: 'Mr. Samuel Jones is the Lead Software Engineer of MistIQ Technologies Inc. He has 13 years of experience building enterprise software for energy utilities, as well as the defense and intelligence communities as a civilian contractor. Mr. Jones\'s experience has included customer information systems, network infrastructure coordination, network traffic visualization, and warehouse and organizational management software, along with his work in Smart Data and microservices with MistIQ Technologies Inc. Mr. Jones holds a Bachelor of Science in Computer Information Science and a Bachelor of Arts in German from Missouri Southern State University as well as CompTIA Security+ certification.'
      },
      {
        name: 'Mattew Hykes',
        position: 'Lead Software Architect',
        img: 'mhykes.png',
        details: 'Mr. Matthew Hykes is the lead software architect at MistIQ Technologies Inc. and has over a decade of experience as a full stack developer and systems architect, leveraging n-tier architectures for web, mobile, and games. He plays a leading role on the software development team and provides the required guidance for taking the company’s technology and products to the next level of functionality, design and scalability. Mr. Hykes has vast knowledge in Hyperledger, Ethereum, blockchain architectures, and smart contracts.'
      },
      {
        name: 'Adrian Jones',
        position: 'Student Software Developer',
        img: 'ajones.png',
        details: 'Adrian Jones is a software developer at MistIQ Technologies Inc. He possesses knowledge in several programming languages such as Java, C#, C++, C, Javascript, and Python. He also possesses knowledge on Statistical Analysis and Differential/Integral Calculus. He has experience developing web applications and computer games as well. He has worked with blockchain development using hyperledger burrow. Mr. Jones knows a lot about different chains such as bitcoin ethereum and hyper ledger burrow and consensus engines like Tendermint. He also knows about different consensus algorithms such as proof of work proof of stake proof of delegated stake. He is currently pursuing his Bachelor of Computer Science with a concentration in Software Engineering.'
      },
      {
        name: 'Alec Wantoch',
        position: 'Student Software Developer',
        img: 'awantoch.png',
        details: 'Alec Wantoch\'s is a software developer at MistIQ Technologies Inc. His field of study is computer science with a focus in cyber security and artificial intelligence and has advanced knowledge in several programming languages including C, C++, C#, Java, JavaScript, Python and Golang. He is knowledgeable in Ethereum, smart contracts, and consensus algorithms. Mr. Wantoch is currently pursuing a Bachelor of Computer Science at the Harrisburg University of Science and Technology.'
      },
      {
        name: 'Samuel Heybey',
        position: 'Student Software Developer',
        img: 'sheybey.png',
        details: 'Sam Heybey is a software developer at MistIQ Technologies Inc. He is a programmer pursuing a degree and career in computer science. He has been programming as a hobby for over a decade in myriad languages including Python, Ruby, Javascript, HTML and CSS, C#, C, PHP, Java, and several purpose-built embedded scripting languages.'
      },
      {
        name: 'Michael Rusling',
        position: 'Student Software Developer',
        img: 'mrusling.png',
        details: 'Michael Rusling is a programmer with MistIQ Technologies Inc, and recently finished his Bachelor\'s in Software Engineering and Analysis. He spent two years as a contracted coder working on Java webapp and front-end web development, and leverages his UI and back-end experience to tackle similar problems today. He has been pursuing personal programming projects for over twelve years, and has experience with Java, HTML/CSS, JS, C#, PHP, and MySQL.'
      },
      {
        name: 'Alexander Korn',
        position: 'Student Software Developer',
        img: 'akorn.png',
        details: 'Alexander Korn is a software developer at MistIQ Technologies Inc. His field of study is Computer Science and Machine Learning. He has a personal academic interest in Artificial Intelligence related fields. Korn has only been programming for a few years but has quickly become a proficient programmer. Languages known are Java, Javascript, Python, HTML, CSS, PHP, R and Common Lisp. He is knowledgeable in Ethereum, Smart Contracts, Consensus Algorithms, and Hyperledger. Mr. Korn is currently pursuing a Bachelor of Computer Science at the Harrisburg University of Science and Technology.'
      },
      {
        name: 'Ramgopal Penumatsa',
        position: 'Student Software Developer',
        img: 'rpenumatsa.png',
        details: 'Ramgopal Penumatsa is a software developer at MistIQ Technologies Inc. and is working on R&D for Blockchain technology and testing the code that is in github by using the Maven tool and acquiring necessary requirements for possible java development. He has 6 months’ experience in Android mobile app development in Bluefrog Mobile Technologies in India. Ramgopal is proficient in C, java SE, java EE, python, javascript, .net and has a strong foundation in data structures and algorithms through which he can write code with any language. He is also knowledgeable in Hyperledger Fabric and Hyperledger Burrow. Mr. Penumatsa holds a BE (Bachelor of Engineering) in Electronics and Communication Engineering from Andhra University in Vishakapatnam, India and is currently pursuing a graduate degree in Computer Information Science at The Harrisburg University of Science and Technology in Harrisburg, Pennsylvania.'
      },
      {
        name: 'Tyler Ross',
        position: 'Student IT Infrastructure Specialist',
        img: 'tross.png',
        details: 'Tyler Ross is the IT Infrastructure Specialist at MistIQ Technologies Inc. He is the CEO of Ross Productions and a cyber security enthusiast. He started college at HACC, Central Pennsylvania\'s Community College, and graduated with an associate’s degree in Computer Information Technology with a focus in cyber security and network administration. When he transferred to the Harrisburg University of Science and Technology, his interest in cyber security and system administration sky rocketed. Throughout his college career, he has had three internships, two jobs, and two projects that all were within the cyber security and system administration fields.'
      },
      {
        name: 'Neelima Bandi',
        position: 'Student Research and Development Specialist',
        img: 'nbandi.png',
        details: 'Neelima Bandi is a research and development specialist at MistIQ Technologies Inc. She worked for Amazon for 3 years as resolution specialist lead for the North America and UK region which constitutes Canada, America and UK Space. She completed a Bachelor\'s of Arts in Electronics and Computer Engineering (ECE) in India from Vignana Bharathi Institute of technology and is currently pursuing her master\'s degree in Information Systems Management and Engineering at the Harrisburg University of Science and Technology.'
      },
      {
        name: 'Karan Raj',
        position: 'Student Research and Development Specialist',
        img: 'kraj.png',
        details: 'Karan Raj is a research and development specialist at MistIQ Technologies Inc. and is knowledgeable in Hyperledger. He worked with Amazon for 3 years as a transportation specialist for Operations of the European region. Mr. Raj completed a Bachelor\'s of Arts from Aurora Scientific Technological and Research Academy in Computer Science Engineering and is currently pursuing his master\’s degree in Information Systems Engineering and Management at the Harrisburg University of Science and Technology.'
      }
    ];

    const selector = $('#team-cards');

    // render team info 
    function renderTeamCard(index, member) {
      return "<div class='col s4 m2'> \
        <div class='card'> \
          <div class='card-image modal-trigger center hoverable' href='#modal" + index + "'> \
            <img src='img/" + member.img +"'> \
          </div> \
          <div class='card-content flow-text valign-wrapper'> \
          <p class='modal-trigger center' href='#modal" + index + "'>" + member.name + ", " + member.position + "</p> \
           <div id='modal" + index + "' class='modal'> \
              <div class='modal-content modal-action modal-close'> \
                <img class='center z-depth-3' src='img/" + member.img +"'> \
                <h4 class='header'>" + member.name + "</h4> \
                <p style='font-size: 18px;'>" + member.details + "</p> \
              </div> \
            </div> \
          </div> \
        </div> \
      </div>"
    }

    teamInfo.forEach(function callback(member, index, array) {
      selector.append(renderTeamCard(index, member));
    });

    $('.modal').modal();
    $('.button-collapse').sideNav();
  });
})(jQuery);

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS('particles', {
  "particles": {
    "number": {
      "value": 42,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "polygon",
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
      "value": 9,
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
      "speed": 2,
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
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
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