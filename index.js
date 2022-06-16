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
    title: 'The Vamps',
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


function createCard(project) {
  const pCard = document.createElement('article');
  pCard.classList.add('work-card');
  

  const img = document.createElement('img');
  img.classList.add('image-placeholder');
  img.setAttribute('src', project.img)
  img.setAttribute('alt', 'Project thumbnail')
  pCard.appendChild(img);

  if (project.id % 2 === 0) {
    pCard.classList.add('left-block');
    img.classList.add('left-side')
  }

  const pContent = document.createElement('div');
  pContent.classList.add('work-content');
  pCard.appendChild(pContent);

  const pHeader = document.createElement('h3');
  pHeader.classList.add('work-header');
  pHeader.textContent = project.title;
  pContent.appendChild(pHeader);

  const pText = document.createElement('p');
  pText.classList.add('work-p');
  pText.textContent = 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.'
  pContent.appendChild(pText);

  const pTags = document.createElement('ul');
  pTags.classList.add('tags-section');
  pContent.appendChild(pTags);

  project.tags.forEach((_element, index) => {
    const tag = document.createElement('li');
    tag.classList.add('tag');
    pTags.appendChild(tag);

    const anchorTag = document.createElement('a');
    anchorTag.setAttribute('href', '#');

    anchorTag.textContent = project.tags[index];
    tag.appendChild(anchorTag);
  });
  
  const pBtn = document.createElement('button');
  pBtn.setAttribute('type', 'button');
  pBtn.setAttribute('id', project.id)
  pBtn.classList.add('work-card-button');
  pBtn.textContent = 'See Project'
  
  pContent.appendChild(pBtn);

  projectSection.appendChild(pCard);
}

projectCards.forEach(createCard);

const modalContainer = document.getElementById('modal-container');

function createModal(id) {
  projectIdModal = id;
  // Search the project with the same id in the projects array
  const project = projectCards.find((project) => Number(project.id) === Number(id));
  const modal = document.createElement('div');
  modal.setAttribute('id', 'modal');
  modalContainer.appendChild(modal);

  const modalHeaderContainer = document.createElement('div');
  modalHeaderContainer.classList.add('modal-header-container');
  modal.appendChild(modalHeaderContainer);

  const modalHeader = document.createElement('h3');
  modalHeader.classList.add('modal-header');
  modalHeader.textContent = project.title;
  modalHeaderContainer.appendChild(modalHeader)

  const modalClose = document.createElement('div');
  modalClose.classList.add('modal-close');
  modalHeaderContainer.appendChild(modalClose);
  modalClose.addEventListener('click', closeModal); 

  for (let i = 0; i < 3; i+= 1) {
    const closeSpan = document.createElement('span');
    closeSpan.classList.add('line')
    modalClose.appendChild(closeSpan);
  }

  const modalImg = document.createElement('img');
  modalImg.classList.add('modal-image');
  modalImg.setAttribute('src', project.img)
  modalImg.setAttribute('alt', 'Project thumbnail')
  modal.appendChild(modalImg);
  
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');
  modal.appendChild(modalContent);

  const modalP = document.createElement('p');
  modalP.classList.add('modal-p')
  modalP.textContent = project.description;
  modalContent.appendChild(modalP);

  const modalTags = document.createElement('ul');
  modalTags.classList.add('tags-section');
  modalContent.appendChild(modalTags);

  project.tags.forEach((_element, index) => {
    const tag = document.createElement('li');
    tag.classList.add('tag');
    modalTags.appendChild(tag);

    const anchorTag = document.createElement('a');
    anchorTag.setAttribute('href', '#');

    anchorTag.textContent = project.tags[index];
    tag.appendChild(anchorTag);
  });

  const modalBtnContainer = document.createElement('div');
  modalBtnContainer.setAttribute('id', 'modal-btn-container');
  modalContent.appendChild(modalBtnContainer);

  const liveBtn = document.createElement('a');
  liveBtn.setAttribute('id', 'live');
  liveBtn.setAttribute('href', project.link);
  liveBtn.textContent = 'See Live';
  const liveIcon = document.createElement('img');
  liveIcon.setAttribute('src', '/multimedia/live-icon.svg');
  liveIcon.setAttribute('alt', 'Arrow link icon');
  liveBtn.appendChild(liveIcon);
  modalBtnContainer.appendChild(liveBtn);
  const srcBtn = document.createElement('a');
  srcBtn.setAttribute('id', 'source');
  srcBtn.setAttribute('href', project.source);
  srcBtn.textContent = 'See Source';
  const srcIcon = document.createElement('img');
  srcIcon.setAttribute('src', '/multimedia/githubicon.png');
  srcIcon.setAttribute('alt', 'Github icon');
  srcBtn.appendChild(srcIcon);
  modalBtnContainer.appendChild(srcBtn);

}

function cleanModal() {
  const div = document.getElementById('modal-container');
  while (div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

function openModal() {
  modalContainer.classList.add('show');
  window.onclick = function (event) {
    if (event.target === modalContainer) {
      modalContainer.classList.remove('show');
    }
  };
}

function closeModal() {
  modalContainer.classList.remove('show')
};

projectSection.addEventListener('click', (e) => {
  const elementId = e.target.id;
  // Only for button See project
  if (e.target.classList.contains('work-card-button')) {
    cleanModal(modalContainer.id);
    createModal(elementId);
    openModal();
  }
});

// 
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