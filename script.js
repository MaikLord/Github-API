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
    const followers = document.getElementById('followers')
    const public_repos = document.getElementById('public_repos')


    fetch(apiUrl + user)
        .then((response) => response.json())
        .then((data => {
            console.log(data)
            name.innerHTML = data.login
            avatar.src = data.avatar_url
            bio.innerHTML = data.bio
            userUrl.href = data.html_url
            followers.innerHTML = `Followers: ${data.followers}`
            public_repos.innerHTML = `Rublic Repositories: ${data.public_repos}`

            fetchRepo(user)
        }))


}
fetchUrl('maiklord');


const fetchRepo = (user) => {

    if (user == "" || null) {
        user = 'maiklord'
    }

    let repoUrl = `https://api.github.com/users/${user}/repos?per_page=100`;


    fetch(repoUrl)
        .then((resRepo) => resRepo.json())
        .then((dataRepo => {


            document.getElementById('repositories').innerHTML = `
            
                <ul>
                    <a href="${dataRepo[0].html_url}"><li>${dataRepo[0].name} - Stars : ${dataRepo[0].stargazers_count} - Number of Views: ${dataRepo[0].watchers_count}</li></a>
                    <a href="${dataRepo[1].html_url}"><li>${dataRepo[1].name} - Stars : ${dataRepo[1].stargazers_count} - Number of Views: ${dataRepo[1].watchers_count}</li></a>
                    <a href="${dataRepo[2].html_url}"><li>${dataRepo[2].name} - Stars : ${dataRepo[2].stargazers_count} - Number of Views: ${dataRepo[2].watchers_count}</li></a>
                    <a href="${dataRepo[3].html_url}"><li>${dataRepo[3].name} - Stars : ${dataRepo[3].stargazers_count} - Number of Views: ${dataRepo[3].watchers_count}</li></a>
                    <a href="${dataRepo[4].html_url}"><li>${dataRepo[4].name} - Stars : ${dataRepo[4].stargazers_count} - Number of Views: ${dataRepo[4].watchers_count}</li></a>
                    <a href="${dataRepo[5].html_url}"><li>${dataRepo[5].name} - Stars : ${dataRepo[5].stargazers_count} - Number of Views: ${dataRepo[5].watchers_count}</li></a>
                    <a href="${dataRepo[6].html_url}"><li>${dataRepo[6].name} - Stars : ${dataRepo[6].stargazers_count} - Number of Views: ${dataRepo[6].watchers_count}</li></a>
                    <a href="${dataRepo[7].html_url}"><li>${dataRepo[7].name} - Stars : ${dataRepo[7].stargazers_count} - Number of Views: ${dataRepo[7].watchers_count}</li></a>
                </ul>
            
            `
            console.log(dataRepo)
        }))
}

function handle(e) {
    if (e.keyCode === 13) {
        e.preventDefault(); // Ensure it is only this code that runs

        fetchUrl(input.value) || fetchRepo(input.value);
    }
}



