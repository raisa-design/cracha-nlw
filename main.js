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

function getGithubProfilesInfos(){
 const url = `https://api.github.com/users/${linksSocialMedia.github} `
 
  //alert(url)

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent= data.name
    userBio.textContent=data.bio
    userLink.href=data.html_url
    userImage.src=data.avatar_url
    userLogin.textContent=data.login
  })
}

getGithubProfilesInfos()