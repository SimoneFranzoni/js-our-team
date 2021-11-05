const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: '..\img\wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: '..\img\angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: '..\img\walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: '..\img\angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: '',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: '',
    },
];

generateTeam();

function generateTeam(){
    for(let i = 0; i < team.length; i++){
        console.log(team[i]);
        createTeamMember (team[i]);
    }
} 



function createTeamMember (team) {

    const teamContainer = document.querySelector('.team-container');
    let prevcontent = teamContainer.innerHTML;
 /*
    prevcontent += 
    '  
    <div class="team-card">
        <div class="card-image">
            <img
                src="img/${member.image}"
                alt="${member.name}"
            />
        </div>
        <div class="card-text">
            <h3>${member.name}</h3>
            <p>${member.role}</p>
        </div>
    </div>
    ';
  */
    teamContainer.innerHTML= prevcontent;
}