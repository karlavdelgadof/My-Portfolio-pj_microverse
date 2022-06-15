const projectCards = [
  {
    id: 1,
    title: 'Multi - Post stories',
    img: '/multimedia/pj-img.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    tags: ['html', 'Ruby on rails', 'css'],
    link: 'https://karlavdelgadof.github.io/My-Portfolio-pj_microverse/',
    source: 'https://github.com/karlavdelgadof/My-Portfolio-pj_microverse'
  },
  {
    id: 2,
    title: 'Multi - Post stories',
    img: '/multimedia/pj-img.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    tags: ['html', 'Ruby on rails', 'css'],
    link: 'https://karlavdelgadof.github.io/My-Portfolio-pj_microverse/',
    source: 'https://github.com/karlavdelgadof/My-Portfolio-pj_microverse'
  },
  {
    id: 3,
    title: 'Multi - Post stories',
    img: '/multimedia/pj-img.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    tags: ['html', 'Ruby on rails', 'css'],
    link: 'https://karlavdelgadof.github.io/My-Portfolio-pj_microverse/',
    source: 'https://github.com/karlavdelgadof/My-Portfolio-pj_microverse'
  },
  {
    id: 4,
    title: 'Multi - Post stories',
    img: '/multimedia/pj-img.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    tags: ['html', 'Ruby on rails', 'css'],
    link: 'https://karlavdelgadof.github.io/My-Portfolio-pj_microverse/',
    source: 'https://github.com/karlavdelgadof/My-Portfolio-pj_microverse'
  }
];

const projectSection = document.querySelector('.recent-works');
let pBtn;


function createCard(projectCards) {
  const pCard = document.createElement('article');
  pCard.classList.add('work-card');

  const img = document.createElement('img');
  img.classList.add('image-placeholder');
  img.setAttribute('src', projectCards.img)
  img.setAttribute('alt', 'Project thumbnail')
  pCard.appendChild(img);

  if (projectCards.id % 2 === 0) {
    pCard.classList.add('left-block');
    img.classList.add('left-side')
  }



  const pContent = document.createElement('div');
  pContent.classList.add('work-content');
  pCard.appendChild(pContent);

  const pHeader = document.createElement('h3');
  pHeader.classList.add('work-header');
  pHeader.textContent = projectCards.title;
  pContent.appendChild(pHeader);

  const pText = document.createElement('p');
  pText.classList.add('work-p');
  pText.textContent = 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.'
  pContent.appendChild(pText);

  const pTags = document.createElement('ul');
  pTags.classList.add('tags-section');
  pContent.appendChild(pTags);

  projectCards.tags.forEach((_element, index) => {
    const tag = document.createElement('li');
    tag.classList.add('tag');
    pTags.appendChild(tag);

    const anchorTag = document.createElement('a');
    anchorTag.setAttribute('href', '#');

    anchorTag.textContent = projectCards.tags[index];
    tag.appendChild(anchorTag);

  })
  
  pBtn = document.createElement('button');
  pBtn.setAttribute('type', 'button');
  pBtn.classList.add('work-card-button');
  pBtn.textContent = 'See Project'

  pContent.appendChild(pBtn);



  projectSection.appendChild(pCard);
}

projectCards.forEach(createCard);

pBtn.addEventListener('click', () => {
  
})
// const modal = document.getElementById('modal-container');
// const projectImg = document.getElementById('pj-img');
// const content = document.getElementById('modal-content');
// const btnLive = document.getElementById('live');
// const btnSrc = document.getElementById('source');
// const btn1 = document.getElementById('p1')

// btn1.addEventListener('click', () => {
//   modal.classList.add('show');
// });


// From here - Mobile-menu functionality

const hmgIcon = document.querySelector('.hmg-menu');
const overlayMenu = document.querySelector('.overlay-menu');
const closeBtn = document.querySelector('.close');

hmgIcon.addEventListener('click', () => {
  hmgIcon.classList.toggle('active');
  overlayMenu.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
  hmgIcon.classList.toggle('active');
  overlayMenu.classList.toggle('active');
});

document.querySelectorAll('.link').forEach((n) => n
  .addEventListener('click', () => {
    hmgIcon.classList.remove('active');
    overlayMenu.classList.remove('active');
  }));

document.querySelectorAll('.close').forEach((n) => n
  .addEventListener('click', () => {
    hmgIcon.classList.remove('active');
    overlayMenu.classList.remove('active');
  }));