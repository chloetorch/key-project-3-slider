const entities = [
   {
      projectBlockText: `<div>
      <h3 class="projects__block-title">City:</h3>
      <p class="projects__block-text">Rostov-on-Don,<br>
         LCD admiral</p>
   </div>
   <div>
      <h3 class="projects__block-title">apartment area:</h3>
      <p class="projects__block-text">81 m2</p>
   </div>
   <div>
      <h3 class="projects__block-title">Repair time:</h3>
      <p class="projects__block-text">3.5 months</p>
   </div>
   <div>
      <h3 class="projects__block-title">Repair Cost:</h3>
      <p class="projects__block-text">Upon request</p>
   </div>`
         img: 'images/windowchair.jpg'
   },
   {
      projectBlockText: `<div>
      <h3 class="projects__block-title">City:</h3>
      <p class="projects__block-text">Sovhi,<br>
         LCD admiral</p>
   </div>
   <div>
      <h3 class="projects__block-title">apartment area:</h3>
      <p class="projects__block-text">81 m2</p>
   </div>
   <div>
      <h3 class="projects__block-title">Repair time:</h3>
      <p class="projects__block-text">3.5 months</p>
   </div>
   <div>
      <h3 class="projects__block-title">Repair Cost:</h3>
      <p class="projects__block-text">Upon request</p>
   </div>`
   img: 'https://s1.stc.all.kpcdn.net/putevoditel/projectid_103889/images/tild3463-3139-4630-b563-646166616434__20180225_gaf_uw8_101.jpg'
   },
   {
      projectBlockText: 'Третий кот',
      img: 'https://images.unsplash.com/photo-1591871937573-74dbba515c4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
   }
]



const projectBlockText = document.querySelector('.projectBlockText')
const img = document.querySelector('.change-img-js')

const setEntity = (index) => {
   projectBlockText.innerHTML = entities[index].projectBlockText
   img.style.backgroundImage = `url(${entities[index].img})`
}

const prev = document.querySelector('.back-arrow-js')
const next = document.querySelector('.forward-arrow-js')
let currentIndex = 0

prev.addEventListener('click', () => {
   setEntity(currentIndex - 1);
   currentIndex -= 1;
})
next.addEventListener('click', () => {
   setEntity(currentIndex + 1);
   currentIndex += 1;
})