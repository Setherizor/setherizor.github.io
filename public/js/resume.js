const exp = [
  {
    name: 'Parrish Devs',
    time: 'Jan 2016 - Present',
    title: 'Freelance Web Designer & Developer',
    desc: 'I work as a freelancer for business & personal related projects. I also, group open source contributions under this experience'
  },
  {
    name: 'The Grand Overland',
    time: 'Aug 2014 - Present',
    title: 'Technical Director / Tour Guide / Land Manager',
    desc: '<ul><li>Created / Maintained off-highway trails, with the purpose of training civilian and military personnel in the advanced usage of Off-Highway Vehicles.</li><br><li>Personally, developed website and online presence for the needs of the business. </li><br><li>Learned to operate heavy machinery, drive advanced trails, service vehicles, prepare equipment / courses, and organize entertaining, enjoyable, and educational events.</li></ul>'
  },
  {
    name: 'Student Digital Team',
    time: 'Aug 2015 - June 2016',
    title: 'Project Manager / Team Member',
    desc: '<ul><li>Worked with a team on a county-wide project to properly represent the ideals and people of Randolph Early College High School to incoming students from the local and surrounding counties.</li><br><li>Was responsible for pitching the project to the school board, and county superintendent, recruiting team members, preparing film sets, ensuring production quality remained high, managing the project’s budget, delegating appropriate tasks, and final publishing.</li><br><li>Learned critical teamwork skills, the production process, the importance of following a very strict schedule, and being able to motivate others to do.</li></ul>'
  },
  {
    name: 'AIM – Arts In Ministry',
    time: 'January 2010 – August 2016',
    title: 'Team Supervisor / Member / Teacher',
    desc: '<ul><li>Organized events, and performances for venues from local nursing homes and churches, to the stage at Downtown Disney in Orlando, FL.</li><br><li>Choreographed performances and served as director for the team’s productions.</li><br><li>Learned valuable managerial skills in client relations, interpersonal communication, time management, motivation, scheduling, inspiration, and event planning.</li></ul>'
  }
]
const anchor = document.getElementById('experience')
exp.forEach(e => {
  var n = document.createElement('div')
  n.className = 'experience-wrapper'
  n.innerHTML = `
    <div class="experience-wrapper">
          <div class="company-wrapper clearfix">
            <div class="experience-title">${e.name}</div> 
            <div class="time">${e.time}</div> 
          </div>

          <div class="job-wrapper clearfix">
            <div class="experience-title">${e.title}</div> 
            <div class="company-description"><p>${e.desc}</p></div>
          </div>
    </div>`
  anchor.appendChild(n)
})

var select = function (s) {
  return document.querySelector(s)
}
function randomBetween (min, max) {
  var number = Math.floor(Math.random() * (max - min + 1) + min)
  return number !== 0 ? number : 0.5
}

var tl = new TimelineMax()
for (var i = 0; i < 10; i++) {
  var t = TweenMax.to(select('.bubble' + i), randomBetween(1, 1.5), {
    x: randomBetween(12, 15) * randomBetween(-1, 1),
    y: randomBetween(12, 15) * randomBetween(-1, 1),
    repeat: -1,
    repeatDelay: randomBetween(0.2, 0.5),
    yoyo: true,
    ease: Elastic.easeOut.config(1, 0.5)
  })
  tl.add(t, (i + 1) / 0.6)
}
tl.seek(50)
