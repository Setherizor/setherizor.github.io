<template>
  <div class="resume-wrapper" v-cloak>
    <link rel="stylesheet" href="css/reset.min.css">
    <link rel="stylesheet" href="css/resume.css">
    <section class="profile section-padding">
      <div class="container">
        <div class="picture-resume-wrapper">
          <div class="picture-resume">
            <span>
              <img src="https://preview.ibb.co/jcq15w/DmQmOpt.jpg" alt="Seth" />
            </span>
            <svg version="1.1" viewBox="0 0 350 350">
              <defs>
                <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9" result="cm" />
                </filter>
              </defs>
              <g filter="url(#goo)">
                <circle id="main_circle" class="st0" cx="171.5" cy="175.6" r="130" />
                <circle id="circle" class="bubble0 st1" cx="171.5" cy="175.6" r="122.7" />
                <circle id="circle" class="bubble1 st1" cx="171.5" cy="175.6" r="122.7" />
                <circle id="circle" class="bubble2 st1" cx="171.5" cy="175.6" r="122.7" />
                <circle id="circle" class="bubble3 st1" cx="171.5" cy="175.6" r="122.7" />
                <circle id="circle" class="bubble4 st1" cx="171.5" cy="175.6" r="122.7" />
                <circle id="circle" class="bubble5 st1" cx="171.5" cy="175.6" r="122.7" />
                <circle id="circle" class="bubble6 st1" cx="171.5" cy="175.6" r="122.7" />
                <circle id="circle" class="bubble7 st1" cx="171.5" cy="175.6" r="122.7" />
                <circle id="circle" class="bubble8 st1" cx="171.5" cy="175.6" r="122.7" />
                <circle id="circle" class="bubble9 st1" cx="171.5" cy="175.6" r="122.7" />
                <circle id="circle" class="bubble10 st1" cx="171.5" cy="175.6" r="122.7" />
              </g>
            </svg>
          </div>
          <div class="clearfix"></div>
        </div>
        <div class="name-wrapper">
          <h1>Seth
            <br/>Parrish</h1>
        </div>
        <div class="clearfix"></div>
        <div class="contact-info clearfix">
          <ul class="list-titles">
            <li>Phone</li>
            <li>Email</li>
            <li>Website</li>
            <li>Location</li>
          </ul>
          <ul class="list-content ">
            <li>+336 302 2922</li>
            <li>shparri2@ncsu.edu</li>
            <li>
              <a href="/#/">setherizor.github.io</a>
            </li>
            <li>Raleigh, NC</li>
          </ul>
        </div>
        <br>
        <!-- Education -->
        <div class="contact-presentation">
          <h3 class="bold">Education:</h3>
          <div>
            Bachelors Of Computer Science & Enginerring from North Carolina State University (Almost)
          </div>
        </div>

        <!-- YOUR PRESENTATION RESUME  -->
        <div class="contact-presentation">
          <p>
            <span class="bold">Me,</span> a Driven Student, Lifelong Learner, avid Coder, and Overall Tech Literate Guy.</p>
          <br>
          <p> My objective is to obtain a technology related internship or position to help an organization to advance and succeed,
            while enhancing my personal knowledge and development as a professional.</p>
        </div>
        <div class="contact-social clearfix">
          <ul class="list-titles">
            <li>Twitter</li>
            <li>Codepen</li>
          </ul>
          <ul class="list-content">
            <li>
              <a href="https://twitter.com/Setherizor">@Setherizor</a>
            </li>
            <li>
              <a href="https://codepen.io/Setherizor">Setherizor</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="experience section-padding">
      <!-- Work experience-->
      <div class="container" id="experience">
        <h3 class="experience-title">Experience</h3>
        <div v-for="(i, index) in experience" :key="index" class="experience-wrapper">
          <div class="company-wrapper clearfix">
            <div class="experience-title">{{i.name}}</div> 
            <div class="time">{{i.time}}</div> 
          </div>
          <div class="job-wrapper clearfix">
            <div class="experience-title">{{i.title}}</div> 
            <div class="company-description" :html="i.desc"><p></p></div>
          </div>
        </div>
      </div>
      <!--Skill experience-->
      <div class="section-wrapper clearfix">
        <h3 class="section-title">Skills</h3>
        <ul>
          <li class="skill-percentage">HTML / HTML5</li>
          <li class="skill-percentage">CSS / CSS3</li>
          <li class="skill-percentage">Javascript</li>
          <li class="skill-percentage">Node / Express / Socket.io</li>
          <li class="skill-percentage">Responsive Design</li>
          <li class="skill-percentage">Java</li>
        </ul>
      </div>
      <div class="section-wrapper clearfix">
        <h3 class="section-title">Hobbies</h3>
        <p>In my spare time, I am coding personal projects, games, libraries, helping friends, spending time with my family,
          or 4x4 Offroading</p>
        <br>
        <p>My passion is knowledge, and my tool is my Determination, my goal is "42"</p>
      </div>
      <div class="section-wrapper clearfix">
        <h3 class="section-title">Honors</h3>
        <p>NCSU IT Club, NCSU Photography Club, Randolph County Teen Court Attorney, A ’Quaint Place Cabins Web Marketing &
          Property Manager, Technician at GHS Distributors, Student Leadership Academy at RCC, Phi Theta Kappa Honor Society,
          various community service activities associated with Clean Sweep, and Habitat for Humanity.</p>
      </div>
    </section>
  </div>
</template>

<script>
const exp = [
  {
    name: "Parrish Devs",
    time: "Jan 2016 - Present",
    title: "Freelance Web Designer & Developer",
    desc:
      "I work as a freelancer for business & personal related projects. I also, group open source contributions under this experience"
  },
  {
    name: "The Grand Overland",
    time: "Aug 2014 - Present",
    title: "Technical Director / Tour Guide / Land Manager",
    desc:
      "<ul><li>Created / Maintained off-highway trails, with the purpose of training civilian and military personnel in the advanced usage of Off-Highway Vehicles.</li><br><li>Personally, developed website and online presence for the needs of the business. </li><br><li>Learned to operate heavy machinery, drive advanced trails, service vehicles, prepare equipment / courses, and organize entertaining, enjoyable, and educational events.</li></ul>"
  },
  {
    name: "Student Digital Team",
    time: "Aug 2015 - June 2016",
    title: "Project Manager / Team Member",
    desc:
      "<ul><li>Worked with a team on a county-wide project to properly represent the ideals and people of Randolph Early College High School to incoming students from the local and surrounding counties.</li><br><li>Was responsible for pitching the project to the school board, and county superintendent, recruiting team members, preparing film sets, ensuring production quality remained high, managing the project’s budget, delegating appropriate tasks, and final publishing.</li><br><li>Learned critical teamwork skills, the production process, the importance of following a very strict schedule, and being able to motivate others to do.</li></ul>"
  },
  {
    name: "AIM – Arts In Ministry",
    time: "January 2010 – August 2016",
    title: "Team Supervisor / Member / Teacher",
    desc:
      "<ul><li>Organized events, and performances for venues from local nursing homes and churches, to the stage at Downtown Disney in Orlando, FL.</li><br><li>Choreographed performances and served as director for the team’s productions.</li><br><li>Learned valuable managerial skills in client relations, interpersonal communication, time management, motivation, scheduling, inspiration, and event planning.</li></ul>"
  }
];

export default {
  name: "resume",
  data() {
    return {
      experience: exp
    };
  },
  mounted: function() {
    var select = function(s) {
      return document.querySelector(s);
    };
    function randomBetween(min, max) {
      var number = Math.floor(Math.random() * (max - min + 1) + min);
      return number !== 0 ? number : 0.5;
    }

    var tl = new TimelineMax();
    for (var i = 0; i < 10; i++) {
      var t = TweenMax.to(select(".bubble" + i), randomBetween(1, 1.5), {
        x: randomBetween(12, 15) * randomBetween(-1, 1),
        y: randomBetween(12, 15) * randomBetween(-1, 1),
        repeat: -1,
        repeatDelay: randomBetween(0.2, 0.5),
        yoyo: true,
        ease: Elastic.easeOut.config(1, 0.5)
      });
      tl.add(t, (i + 1) / 0.6);
    }
    tl.seek(50);
  }
};
</script>