const settingBtn = document.querySelector('.setting');
const settingMenu = document.querySelector('.setting_menu');
const settingDim = document.querySelector('.setting_dim');
const settingCancle = document.querySelector('.setting_cancle');
settingBtn.addEventListener('click', ()=>{
  settingMenu.classList.remove('hidden');
  settingDim.classList.remove('hidden');
})

settingCancle.addEventListener('click', closeSetting)
settingDim.addEventListener('click', closeSetting)

function closeSetting () {
  settingMenu.classList.add('hidden');
  settingDim.classList.add('hidden');
}


// tab
const tabLists = document.querySelectorAll('.tabs li');
const tabBtns = document.querySelectorAll('.tab_btn');

for(const tab of tabBtns){
  tab.addEventListener('click', (event)=>{
    event.preventDefault();
    for(const list of tabLists){
      list.classList.remove('tab_active');
    }
    event.target.parentNode.parentNode.classList.add('tab_active');
    console.log(event.target.parentNode.parentNode);
  })
}