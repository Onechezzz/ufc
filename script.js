function MyAdd(){

  var newLi = document.createElement('td');
  newLi.innerHTML = 'Нова комірка!';

  list.appendChild(newLi);


  }
  function MyAdd1(){

    var div = document.createElement('div');
div.className = "alert alert-success";//Для стилів
div.innerHTML = "<strong>Ура!</strong> Ви додали елемент.";
divID.appendChild(div);
}
function message(){
	alert('Ваш коментар успішно відправлений');
  }
  function thanks(){
  alert('Дякуюємо за вашу оцінку');
  }

function validate_form ( )
{
	valid = true;

        if ( document.contact_form.signupemail.value == "" )
        {
                alert ( "Будь-ласка введіть ваш email" );
                valid = false;
        }



        if ( document.contact_form.signinname.value == "" )
        {
                alert ( "Будь-ласка введіть ваше ім'я" );
                valid = false;
        }

        return valid;
}

  function showError(container, errorMessage) {
    container.className = 'error';
    var msgElem = document.createElement('span');
    msgElem.className = "error-message";
    msgElem.innerHTML = errorMessage;
    container.appendChild(msgElem);
  }

  function resetError(container) {
    container.className = '';
    if (container.lastChild.className == "error-message") {
      container.removeChild(container.lastChild);
    }
  }

  function validate(form) {
    var elems = form.elements;

    resetError(elems.from.parentNode);
    if (!elems.from.value) {
      showError(elems.from.parentNode, ' Вкажіть від кого.');
    }

    resetError(elems.password.parentNode);
    if (!elems.password.value) {
      showError(elems.password.parentNode, ' Вкажіть пароль.');
    } else if (elems.password.value != elems.password2.value) {
      showError(elems.password.parentNode, ' Паролі не співпадають.');
    }

    resetError(elems.to.parentNode);
    if (!elems.to.value) {
      showError(elems.to.parentNode, ' Вкажіть, куди ви надсилаєте звернення.');
    }

    resetError(elems.message.parentNode);
    if (!elems.message.value) {
      showError(elems.message.parentNode, ' Відсутній текст.');
    }

  }

google.load("visualization", "1", {packages:["corechart"]});
   google.setOnLoadCallback(drawChart);
   function drawChart() {
    var data = google.visualization.arrayToDataTable([
     ['Рік', 'Біспінг', 'Джонс'],
     ['2012', 4, 6],
     ['2015', 15, 13],
     ['2018', 22, 21]
    ]);
    var options = {
     title: 'Кількість перемог',
     hAxis: {title: 'Рік'},
     vAxis: {title: ''}
    };
    var chart = new google.visualization.ColumnChart(document.getElementById('portfolio'));
    chart.draw(data, options);
   }

   function CreateImage() {
    var cnvs = document.getElementById("canvas1");
    var ctxt = cnvs.getContext("2d");
    var x = 0;
    function animation() {
       ctxt.clearRect(0,0,150,150);
       ctxt.fillRect(x,50,50,50);
       x = x + 0.2;
       if ( x > 100) { x = 0; }
       setTimeout(animation, 10)
    }
    animation();
 }
 CreateImage();

 (function(){
    let div = document.getElementById('test'),
    style = div.style;

   //div.className="css-class css-class-new"
   // div.className = div.className.replace(" css-class", "")
    /*div.classList.add("css-class");//Додає елемент(тут додається саме клас)
    div.classList.add("css-class-new");//Додає ще один класс
    div.classList.remove('css-class');//Забирає елемент
    div.classList.toggle('css-class');//Перемикач, якщо класс був видалений, то додає. Якщо був доданий, то видаляє
  */
 })();

 function addProps1(){
  let div = document.getElementById('test'),
  style = div.style;
  div.classList.remove('css-class-new');
  div.classList.add("css-class");
 }
 function addProps2(){
  let div = document.getElementById('test'),
  style = div.style;
  div.classList.remove('css-class');
  div.classList.add("css-class-new");
}
 function removeProps(){
  let div = document.getElementById('test'),
  style = div.style;
  div.classList.remove('css-class');
  div.classList.remove('css-class-new');
 }

//jQuery
$('#jbutton').click(function(){

  $('#signup').show();

});
