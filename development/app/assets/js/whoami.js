const websites = [
  {
    name: 'Facebook',
    url: 'facebook.com/TheSethParrish',
    icon: 'fa-facebook'
  },
  {
    name: 'Twitter',
    url: 'twitter.com/Setherizor',
    icon: 'fa-twitter'
  },
  {
    name: 'Medium',
    url: 'medium.com/@Setherizor',
    icon: 'fa-medium'
  },
  {
    name: 'Snapchat',
    url: 'www.snapchat.com/add/Setherizor',
    icon: 'fa-snapchat-ghost'
  },
  {
    name: 'Instagram',
    url: 'www.instagram.com/Setherizor/',
    icon: 'fa-instagram'
  },
  {
    name: 'Linkedin',
    url: 'www.linkedin.com/in/thesethparrish/',
    icon: 'fa-linkedin'
  },
  {
    name: 'Google Plus',
    url: 'plus.google.com/+SethParrishTime',
    icon: 'fa-google-plus'
  },
  {
    name: 'Codepen',
    url: 'codepen.io/Setherizor',
    icon: 'fa-codepen'
  },
  {
    name: 'Github',
    url: 'github.com/Setherizor',
    icon: 'fa-github'
  },
  {
    name: 'Devrant',
    url: 'www.devrant.io/users/Setherizor',
    icon: 'fa-code'
  },
  {
    name: 'Personal Site',
    url: 'Setherizor.github.io',
    icon: 'fa-desktop'
  }
]

const putOnPage = (websites) => {
  const parent = document.getElementById('parent')
  websites.forEach((item) => {
    const attach = `<a href="https://${item.url}" rel="noopener" id="child" class="fa ${item.icon} fa-3x"></a>`
    parent.innerHTML += attach
  })
}
putOnPage(websites)