document.getElementById('regForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    if (!validateForm()) {
        return false;  
    }


    displayValues();
});

function validateForm() {

    let name = document.getElementById('name');
    if (name.value.trim() === '' || !/^[a-zA-Z\s]+$/.test(name.value) || name.value.length > 25) {
        alert('Name must be alphabetic and not exceed 25 characters.');
        name.focus();
        return false;
    }

    let age = document.getElementById('age');
    if (age.value === '' || age.value < 18 || age.value > 23) {
        alert('Age must be a number between 18 and 23.');
        age.focus();
        return false;
    }
    let skills = document.querySelectorAll('input[name="skills[]"]:checked');
    if (skills.length < 2) {
        alert('Please select at least two technical skills.');
        return false;
    }

    return true;
}

function displayValues() {

    let name = document.getElementById('name').value;
    let id = document.getElementById('id').value;
    let password = document.getElementById('password').value;
    let email = document.getElementById('email').value;
    let age = document.getElementById('age').value;
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let address = document.getElementById('address').value;
    let phone = document.getElementById('phone').value;
    let branch = document.getElementById('branch').value;

    let skills = [];
    document.querySelectorAll('input[name="skills[]"]:checked').forEach(skill => {
        skills.push(skill.value);
    });

    let newWindow = window.open('', '_blank');
    newWindow.document.write('<h2>Registration Details</h2>');
    newWindow.document.write('<p><b>Name:</b> ' + name + '</p>');
    newWindow.document.write('<p><b>ID:</b> ' + id + '</p>');
    newWindow.document.write('<p><b>Password:</b> ' + password + '</p>');
    newWindow.document.write('<p><b>Email:</b> ' + email + '</p>');
    newWindow.document.write('<p><b>Age:</b> ' + age + '</p>');
    newWindow.document.write('<p><b>Gender:</b> ' + gender + '</p>');
    newWindow.document.write('<p><b>Address:</b> ' + address + '</p>');
    newWindow.document.write('<p><b>Phone:</b> ' + phone + '</p>');
    newWindow.document.write('<p><b>Branch:</b> ' + branch + '</p>');
    newWindow.document.write('<p><b>Technical Skills:</b> ' + skills.join(', ') + '</p>');
}