const linksSocialMedia = {
  github: 'raisa-design',
  youtube: 'jakelinygracielly',
  facebook: 'raisa.alves.545',
  instagram: 'raisa_almeidaaa',
  linkedin: 'raisa-almeida-7ab060191'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    if (social == 'linkedin') {
      li.children[0].href = `https://${social}.com/in/${linksSocialMedia[social]}`
    } else {
      li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
    }
  }
}

changeSocialMediaLinks()

var speed = 120
var cont = 0

function typeWriter(content) {
  userBio.textContent = ''
  function write() {
    if (cont < content.length) {
      userBio.textContent += content.charAt(cont)
      cont++
      setTimeout(write, speed)
    } else {
      userBio.textContent = ''
      cont = 0
      write()
    }
  }
  write()
}

function getGithubProfilesInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github} `

  //alert(url)

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      typeWriter(data.bio)
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
      document.getElementById('userImage').classList.add('animate-image')
    })
}

getGithubProfilesInfos()

function changeBackground(dark) {
  if (dark == true) {
    main.classList.remove('bg-light')
    main.classList.add('bg-dark')
    btnLight.classList.remove('btn-hide')
    btnLight.classList.add('btn-show')
    btnDark.classList.remove('btn-show')
    btnLight.classList.add('btn-hide')
  } else {
    main.classList.remove('bg-dark')
    main.classList.add('bg-light')
    btnDark.classList.remove('btn-hide')
    btnDark.classList.add('btn-show')
    btnLight.classList.remove('btn-show')
    btnLight.classList.add('btn-hide')
  }
}
