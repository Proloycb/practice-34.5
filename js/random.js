const loadData = () => {
    fetch('https://randomuser.me/api/?results=6')
    .then(res => res.json())
    .then(data => displayUser(data));
}
loadData();

const displayUser = data => {
    const users = data.results;
    const userContainer = document.getElementById('users');
    users.forEach(user => {
        const div = document.createElement('div');
        div.classList.add('user');
        div.innerHTML = `
            <img src="${user.picture.large}" alt="">
            <h4>${user.name.title} ${user.name.first} ${user.name.last}</h4>
            <p>Street: ${user.location.street.number}, ${user.location.street.name}</p>
            <p>City: ${user.location.city}</p>
            <p>Country: ${user.location.country}</p>
            <p>Phone: ${user.phone}</p>
            <p>Coordinates: ${user.location.coordinates.latitude}, ${user.location.coordinates.longitude}</p>
            <p>Timezone: ${user.location.timezone.offset}, ${user.location.timezone.description}</p>
        `;
        userContainer.appendChild(div);
        console.log(user)
    });
}
