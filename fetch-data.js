document.addEventListener('DOMContentLoaded', function() {
    // Step 1: Define the asynchronous function to fetch user data
    async function fetchUserData() {
        // Step 2: Define the API URL
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        
        // Step 3: Select the data container element
        const dataContainer = document.getElementById('api-data');
        
        // Step 4: Fetch data using try-catch
        try {
            // Fetch the data from the API
            const response = await fetch(apiUrl);
            
            // Convert the response to JSON
            const users = await response.json();
            
            // Clear the existing content (e.g., "Loading user data...")
            dataContainer.innerHTML = '';

            // Step 5: Create and append user list
            const userList = document.createElement('ul');

            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            dataContainer.appendChild(userList);
        } catch (error) {
            // Step 6: Error handling
            dataContainer.innerHTML = ''; // Clear existing content
            dataContainer.textContent = 'Failed to load user data.';
            console.error('Error fetching user data:', error);
        }
    }

    // Step 7: Invoke fetchUserData on DOMContentLoaded
    fetchUserData();
});