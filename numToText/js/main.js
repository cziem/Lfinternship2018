
var rectify = document.getElementById('rectify');

rectify.addEventListener('click', function () {
    console.log('clicked');
 });

function getNum() {
    var usrNum = document.getElementById('num').textContent;
    var num = +usrNum;
    console.log(num);
}

