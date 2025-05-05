const tab1button = document.getElementById("tab1")
const tab2button = document.getElementById("tab2")
const tab3button = document.getElementById("tab3")
const tab4button = document.getElementById("tab4")

const tab1content = document.getElementById('tab1-content')
const tab2content = document.getElementById('tab2-content')
const tab3content = document.getElementById('tab3-content')
const tab4content = document.getElementById('tab4-content')

console.log(tab1button)

const clear = () => {
    tab1button.className = 'unselected';
    tab2button.className = 'unselected';
    tab3button.className = 'unselected';
    tab4button.className = 'unselected';

    tab1content.className = 'hide-tab';
    tab2content.className = 'hide-tab';
    tab3content.className = 'hide-tab';
    tab4content.className = 'hide-tab';
}

tab1button.addEventListener('click', () => {
  clear();
  tab1button.className = 'selected';
  tab1content.className = 'show-tab';
})

tab2button.addEventListener('click', () => {
  clear();
  tab2button.className = 'selected';
  tab2content.className = 'show-tab';
})
tab3button.addEventListener('click', () => {
  clear();
  tab3button.className = 'selected';
  tab3content.className = 'show-tab';
})
tab4button.addEventListener('click', () => {
  clear();
  tab4button.className = 'selected';
  tab4content.className = 'show-tab';
})
