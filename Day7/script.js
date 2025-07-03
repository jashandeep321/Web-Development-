const userContainer=document.getElementById("userContainer");
const Btn=document.getElementById("btn");

function fetchUsers(){
    userContainer.innerHTML="Loading.....";

    fetch('https://dummyjson.com/users')
    .then(response=>{
        if(!response.ok) throw new Error("404");
        return response.json();
    })
    .then(data => {
      userContainer.innerHTML = ''; // Clear previous content

      data.users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'user-card';
        card.innerHTML = `
          <img src="${user.image}" alt="${user.firstName}" />
          <h2>${user.firstName} ${user.lastName}</h2>
          <p><strong>Age:</strong> ${user.age} | <strong>Gender:</strong> ${user.gender}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
          <p><strong>Address:</strong> ${user.address.address}, ${user.address.city}, ${user.address.country}</p>
          <p><strong>Blood Group:</strong> ${user.bloodGroup}</p>
        `;
        userContainer.appendChild(card);
      });
    })
     .catch(error => {
      console.error(error);
      userContainer.innerHTML = `<p style="color:red;">Error: Could not load users. Check your internet connection.</p>`;
    });
}



Btn.addEventListener("click", fetchUsers);

fetchUsers();