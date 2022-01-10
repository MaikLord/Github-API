// const userName = prompt('Qual seu nick no github ?')

const input = document.getElementById('searchUser')
const userName = input.value


let apiUrl = `https://api.github.com/users/`;

const fetchUrl = (user) => {

    if (user == "" || null) {
        user = 'maiklord'
    }

    const name = document.getElementById('user')
    const avatar = document.getElementById('avatar')
    const bio = document.getElementById('bio')
    const userUrl = document.getElementById('userUrl')


    fetch(apiUrl + user)
        .then((response) => response.json())
        .then((data => {
            console.log(data)
            name.innerHTML = data.login
            avatar.src = data.avatar_url
            bio.innerHTML = data.bio
            userUrl.href = data.html_url

        }))


}
fetchUrl('maiklord');


const fetchRepo = (user) => {

    let repoUrl = `https://api.github.com/users/${user}/repos?per_page=100`;

    const repos0 = document.getElementById('repos0')
    const repos1 = document.getElementById('repos1')
    const repos2 = document.getElementById('repos2')
    const repos3 = document.getElementById('repos3')
    const repos4 = document.getElementById('repos4')
    const repos5 = document.getElementById('repos5')
    const repos6 = document.getElementById('repos6')

    const repoUrl0 = document.getElementById('repoUrl0')
    const repoUrl1 = document.getElementById('repoUrl1')
    const repoUrl2 = document.getElementById('repoUrl2')
    const repoUrl3 = document.getElementById('repoUrl3')
    const repoUrl4 = document.getElementById('repoUrl4')
    const repoUrl5 = document.getElementById('repoUrl5')
    const repoUrl6 = document.getElementById('repoUrl6')

    const repoStars0 = document.getElementById('reposStars0')

    fetch(repoUrl)
        .then((resRepo) => resRepo.json())
        .then((dataRepo => {
            console.log(dataRepo)
            repos0.innerText = dataRepo[0].name
            repos1.innerHTML = dataRepo[1].name
            repos2.innerHTML = dataRepo[2].name
            repos3.innerHTML = dataRepo[3].name
            repos4.innerHTML = dataRepo[4].name
            repos5.innerHTML = dataRepo[5].name
            repos6.innerHTML = dataRepo[6].name

            repoUrl0.href = dataRepo[0].html_url
            repoUrl1.href = dataRepo[1].html_url
            repoUrl2.href = dataRepo[2].html_url
            repoUrl3.href = dataRepo[3].html_url
            repoUrl4.href = dataRepo[4].html_url
            repoUrl5.href = dataRepo[5].html_url
            repoUrl6.href = dataRepo[6].html_url

            repoStars0.innerHTML = dataRepo[0].stargazers_count
        }))
}
fetchRepo(user)
