const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];

generateTeam();

function generateTeam(){
    for(let member of team){
        createTeamMember(member);
    }
} 



function createTeamMember (member) {

    const teamContainer = document.querySelector('.team-container');
    let prevcontent = teamContainer.innerHTML;
    
    const {name, role, image} = member;

    prevcontent += 
    ` 
    <div class="team-card">
      <div class="card-image">
        <img
          src="img/${image}"
          alt="${name}"
        />
      </div>
      <div class="card-text">
        <h3>${name}</h3>
        <p>${role}</p>
      </div>
    </div>
  `;

  
    teamContainer.innerHTML= prevcontent;
}