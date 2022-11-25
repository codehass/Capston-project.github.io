document.querySelector('.hamburger').addEventListener('click', () => {
  document.querySelector('.menu-ele').classList.add('show');
  document.querySelector('.list-header').classList.add('show');
  document.querySelector('.hamburger').classList.add('hidden');
  document.querySelector('.close-menu').classList.add('show-menu');
});

document.querySelector('.close-menu').addEventListener('click', () => {
  document.querySelector('.menu-ele').classList.remove('show');
  document.querySelector('.menu-ele').classList.add('hidden');
  document.querySelector('.close-menu').classList.remove('show-menu');
  document.querySelector('.hamburger').classList.remove('hidden');
  document.querySelector('.list-header').classList.remove('show');
});

const speakers = [
  {
    img: 'images/progil1.PNG',
    name: 'Roger Rohatgi',
    title: 'Vice President, Global Head of Design, BP United States',
    description:
      'with 25 years of experience successfully leading and managing products projects and teams to innovate develop and createdynamic digital initiatives',
  },
  {
    img: 'images/profil2.PNG',
    name: 'Rob Bencer',
    title:
      'Airport Experience & Intelligent Airport, United Airlines United States',
    description:
      'Digital Technology, United Airlines Airport Experience & Intelligent Airport, is responsible for providing vision, direction and leadership for technology applications.',
  },
  {
    img: 'images/profil3.PNG',
    name: 'Julia Liang',
    title: 'VP of Technology, Goldman Sachs',
    description:
      'Julia Liang is a passionate, strategic technology leader with extensive experience leading digital transformations in fortune 100 companies',
  },
  {
    img: 'images/profil4.PNG',
    name: 'lberto Prado',
    title: 'Head of R&D Digital & Partnerships, Unilever Netherlands',
    description:
      'Alberto is the Head Digital Innovation R&D at Unilever. In that capacity, he leads the Digital R&D organisation with the aim of digitising the R&D process',
  },
  {
    img: 'images/profil5.PNG',
    name: 'Katie DeGraaf ',
    title:
      'Senior Vice President, Product & Telematics, General Motors United States',
    description:
      'Katie DeGraaf brings her passion for making our roads safer to General Motors in her role leading product and telematics for OnStar Insurance.',
  },
  {
    img: 'images/profil6.PNG',
    name: 'Heather Laurence',
    title: 'Director of Program Management Expedia Group',
    description:
      'Heather Laurence is a Director of Program Management at Expedia Group with more than 15 years in the profession and over 4 years in the AI & Machine Learning space.',
  },
];

speakers.forEach((element) => {
  document.querySelector('.flex-spe').innerHTML += `
  <div class="card-spe">
            <img src="${element.img}" alt="speaker" />
            <div class="info-spe">
              <h3>${element.name}</h3>
              <h4>${element.title}</h4>
              <p>
              ${element.description}
              </p>
            </div>
          </div>
  `;
});
