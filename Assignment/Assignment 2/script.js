const userIdInput = document.getElementById('userIdInput');
const userIdButton = document.getElementById('userIdButton');
const userDisplay = document.getElementById('userDisplay');

userIdButton.addEventListener('click', () => {
  const userId = userIdInput.value;
  const url = `https://jsonplaceholder.typicode.com/users/${userId}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((user) => {
      userDisplay.innerHTML = `
        <h2>${user.name}</h2>
        <p>Email: ${user.email}</p>
        <p>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}</p>
      `;
    })
    .catch((error) => {
      console.log(error);
      userDisplay.innerHTML = 'Error fetching user details';
    });
});