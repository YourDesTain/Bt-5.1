// Функция для обработки вкладок
let currentTabIndex = 0;

let tab = function(){
  let numberTabs = document.querySelectorAll('.number_tab'),
      tabContents = document.querySelectorAll('.tab_content');

      numberTabs.forEach((item, index) => {
        item.addEventListener('click', function() {
            selectNumberTab(index); 
        });
    });

    function selectNumberTab(index) {
      currentTabIndex = index; 
      let tabName = numberTabs[index].getAttribute('data_tab_name');
      numberTabs.forEach(item => {
        if (item.getAttribute('data_tab_name') === tabName) {
          item.classList.add('is-active');
        } else {
          item.classList.remove('is-active');
        }
      });
      tabContents.forEach(content => {
        if (content.id === tabName) {
          content.classList.add('is-active');
        } else {
          content.classList.remove('is-active');
        }
      });
    }
  };
tab();


// Обработчик события для кнопки "Закрыть"
document.getElementById('closeButton').addEventListener('click', function(event) {
  event.preventDefault();
  var panelElements = document.querySelector('.panel_elements');
  panelElements.classList.add('fadeOutAnimation');
  setTimeout(function() {
    panelElements.style.display = 'none'; 
  }, 500);
});

// Анимация выбора вкладок
let numberTabs = document.querySelectorAll('.number_tab');

numberTabs.forEach(tab => {
  tab.addEventListener('click', function() {
    this.classList.add('tab_loading');

    setTimeout(() => {
      this.classList.remove('tab_loading');
    }, 500);
  });
});

// Функция для переключения на предыдущую вкладку
function switchToPreviousTab() {
  let previousIndex = currentTabIndex - 1;
  if (previousIndex >= 0) { 
    let previousTab = document.querySelectorAll('.number_tab')[previousIndex];
    previousTab.click(); 
  }
}

// Функция для переключения на следующую вкладку
function switchToNextTab() {
  let nextIndex = currentTabIndex + 1;
  let totalTabs = document.querySelectorAll('.number_tab').length;
  if (nextIndex < totalTabs) { 
    let nextTab = document.querySelectorAll('.number_tab')[nextIndex];
    nextTab.click(); 
  }
}

document.querySelectorAll('.btn_back').forEach(btn => {
  btn.addEventListener('click', switchToPreviousTab);
});

document.querySelectorAll('.btn_next').forEach(btn => {
  btn.addEventListener('click', switchToNextTab);
});

// Функция для обработки вкладок "Заказчик" и "Поставщик"
let cases = function(){
  let nameCase = document.querySelectorAll('.name_case'),
  caseContent = document.querySelectorAll('.tabs');

  nameCase.forEach(item => {
    item.addEventListener('click', selectNumberTab);
  });

  function selectNumberTab(){
    let tabName = this.getAttribute('data_tab_name');
    nameCase.forEach(item =>{
      if(item === this){
        item.classList.add('is-active');
      } else {
        item.classList.remove('is-active');
      }
    });
    caseContent.forEach(content => {
      if(content.classList.contains(tabName)){
        content.classList.add('is-active');
      } else {
        content.classList.remove('is-active');
      }
    });
  }
};
cases();

document.getElementById('showBtn').addEventListener('click', function() {
  document.querySelector('.checkboxes_container').style.display = 'block';
  document.getElementById('showBtn').style.display = 'none';
  document.getElementById('hideBtn').style.display = 'block';
});

document.getElementById('hideBtn').addEventListener('click', function() {
  document.querySelector('.checkboxes_container').style.display = 'none';
  document.getElementById('showBtn').style.display = 'block';
  document.getElementById('hideBtn').style.display = 'none';
});


document.getElementById("open-model-btn").addEventListener('click', function(){
  document.getElementById("model-add").classList.add("open");
  document.body.classList.add("overflow-none");
});
document.getElementById('open-model-btn-tab4').addEventListener('click',function(){
  document.getElementById('model-add-tab4').classList.add('open');
  document.body.classList.add('overflow-none');
})
document.getElementById("close-model-btn4").addEventListener('click', function(){
  document.getElementById("model-add-tab4").classList.remove("open");
  document.body.classList.remove("overflow-none");
});

document.getElementById("close-model-btn").addEventListener('click', function(){
  document.getElementById("model-add").classList.remove("open");
  document.body.classList.remove("overflow-none");
});

document.getElementById('btn-add-tab3').addEventListener('click', function() {
  document.getElementById("model-add").classList.remove("open");
  document.body.classList.remove("overflow-none");
  document.getElementById('tab3-1').classList.add('hidden');
  document.getElementById('tab3-2').classList.remove('hidden');
});





function showLoadingModal() {
  document.getElementById('loadingModal').style.display = 'block';
}

function hideLoadingModal() {
  document.getElementById('loadingModal').style.display = 'none';
}

function loadDataFromServer() {
  showLoadingModal(); 


  setTimeout(function() {

    hideLoadingModal(); 
  }, 1000);
}


let loadDataButton = document.getElementById('btn-add-tab3');


loadDataButton.addEventListener('click', function() {
    loadDataFromServer();
});
loadDataButton.addEventListener('click', function() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth' 
  });
});

document.getElementById('cancel-tabs3').addEventListener('click', function() {
  document.getElementById('tab3-1').classList.toggle('hidden');
  document.getElementById('tab3-2').classList.toggle('hidden');
  window.scrollTo({
    top: 0,
    behavior: 'smooth' 
});
});
document.getElementById('cancel-tabs3-3').addEventListener('click', function() {
  document.getElementById('tab3-2').classList.toggle('hidden');
  document.getElementById('tab3-3').classList.toggle('hidden');
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
});
document.getElementById('save-tabs3-3').addEventListener('click', function() {
  document.getElementById('tab3-3').classList.toggle('hidden');
  document.getElementById('tab3-1').classList.toggle('hidden');
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
});

document.getElementById('save-tabs3').addEventListener('click', function() {
  document.getElementById('tab3-2').classList.toggle('hidden');
  document.getElementById('tab3-3').classList.toggle('hidden');
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
});
});


let cancelTabs3 = document.getElementById('cancel-tabs3');
cancelTabs3.addEventListener('click', function() {
    loadDataFromServer();
});
cancelTabs3.addEventListener('click', function() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
});

//TAB 5
function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.classList.toggle("show");
}

function selectName(name, type, credentials, trust) {
  var inputField = document.getElementsByClassName('input_podpisant')[0];
  var typeField1 = document.querySelector('.defType');
  var typeField2 = document.querySelector('.defCredentials');
  var typeField3 = document.querySelector('.defCredentialsTrust'); 
  inputField.value = name;
  typeField1.textContent = type;
  typeField2.textContent = credentials;
  typeField3.textContent = trust;
}

window.onclick = function(event) {
  if (!event.target.matches('.input_podpisant') && !event.target.matches('.dropdown-content')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// TAB 6

function handleFileSelect(event) {
  const selectedFiles = event.target.files;
  let selectedFileNamesElement;
  if (event.target.id === 'fileInput1') {
    selectedFileNamesElement = document.getElementById('selectedFileNames1');
  } else if (event.target.id === 'fileInput2') {
    selectedFileNamesElement = document.getElementById('selectedFileNames2');
  } else if (event.target.id === 'fileInput3') {
    selectedFileNamesElement = document.getElementById('selectedFileNames3');
  }
  if (selectedFiles.length > 0) {
    let fileNames = '';
    for (let i = 0; i < selectedFiles.length; i++) {
      fileNames += selectedFiles[i].name + '<br>';
    }
    selectedFileNamesElement.innerHTML = 'Выбраны файлы:<br>' + fileNames;

  } else {
    selectedFileNamesElement.textContent = 'Не выбраны файлы';
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // Получаем ссылку на документ
  var documentURL = "document/act_example.pdf";

  // Создаем iframe
  var iframe = document.createElement('iframe');
  iframe.src = documentURL;
  iframe.style.width = '100%';
  iframe.style.height = '600px';
  iframe.style.border = 'none';

  // Получаем div, в который мы хотим встроить документ
  var container = document.getElementById('documentContainer');

  // Добавляем iframe в div
  container.appendChild(iframe);
});