const managerHTML = function (manager) {
    return `
        <div class="card employee-card">
  <div class="card-header">
      <h2 class="card-title">${manager.name}</h2>
      <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.role}</h3>
  </div>
  <div class="card-body">
      <ul class="list-group">
          <li class="list-group-item">ID: ${manager.id}</li>
          <li class="list-group-item">Email: <a href="mailto:jane@company.com">${emanager.mail}</a></li>
          <li class="list-group-item">Office number: ${manager.officeNumber}</li>
      </ul>
  </div>
</div>`;
};

const engineerHTML = function (engineer) {
    return `
    <div class="card employee-card">
<div class="card-header">
    <h2 class="card-title">${engineer.name}</h2>
    <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.role}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: <a href="mailto:dave@company.com">${engineer.email}</a></li>
        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}" target="_blank" rel="noopener noreferrer">${github}</a></li>
    </ul>
</div>
</div>`;
};

const internHTML = function (intern) {
    return `
    <div class="card employee-card">
    <div class="card-header">
        <h2 class="card-title">${intern.name}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.role}</h3>
    </div>
    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <a href="mailto:pete@company.com">${intern.email}</a></li>
            <li class="list-group-item">School: ${intern.school}</li>
        </ul>
    </div>
</div>`;
};

genHTML = (input) => {
    pageArray = [];

    for(let i = 0; i < input.length; i++){
        const employee = input[1];
        const role = employee.getRole();

        if(role === "Manager"){
            const manCard = managerHTML(employee)
            pageArray.push(manCard)
        }else if(role === "Engineer"){
            const engCard = engineerHTML(employee)
            pageArray.push(engCard)
        }else if(role === "Intern"){
            const intCard = internHTML(employee)
            pageArray.push(intCard)
        }
    }

    const empCards = pageArray.join('');

    const genTeam = teamHTML(empCards);
    return genTeam;
}

const teamHTML = function (empCards){
    return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
  </head>

  <body>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 mb-3 team-heading jumbotron bg-dark text-white">
          <h1 class="text-center">My Team</h1>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="team-area col-12 d-flex justify-content-center">
        <-- Team -->
        ${empCards}
        </div>
      </div>
    </div>
  </body>
</html>
    `;
}

module.exports = genHTML;