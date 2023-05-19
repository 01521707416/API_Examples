const loadData = () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(response => response.json())
        .then(data => displayUsers(data.results[0]))
        .catch(error => console.log(error))
}


const displayUsers = user => {
    console.log(user)
}