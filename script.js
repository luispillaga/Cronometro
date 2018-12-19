var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
var centesimas2 = 0;
var segundos2 = 0;
var minutos2 = 0;
var horas2 = 0;
var contlap=0;
var stopButton = '<button id="stop" class="btn" onclick="parar();">Stop</button>';
var lapButton = '<button id="lap" class="btn" onclick="addLap();">Lap</button>';
function inicio () {
    $('#start').hide();
    $('#reset').hide();
    if ( $("#stop").length ) {
        $('#stop').show();
    }else{
        $('#reset').before(stopButton);
    }
    if ( $("#lap").length ) {
        $('#lap').show();
    }else{
        $('#stop').after(lapButton);
    }
	control = setInterval(cronometro,10);
    control2 = setInterval(cronometro2,10);
}
function reinicio () {
    location.reload();
}
function parar () {
	clearInterval(control);
    clearInterval(control2);
    $('#stop').hide();
    $('#start').html('Resume');
    $('#start').show();
    $('#lap').hide();
    $('#reset').show();

}
function addLap(){
    var existe = contlap;
    contlap ++;
    var cen = document.getElementById("Centesimas2").innerHTML;
    var seg = document.getElementById("Segundos2").innerHTML;
    var min = document.getElementById("Minutos2").innerHTML;
    var hor = document.getElementById("Horas2").innerHTML;
    centesimas2 = 0;
    segundos2 = 0;
    minutos2= 0;
    horas2= 0;
    Centesimas2.innerHTML = ":00";
    Segundos2.innerHTML = ":00";
    Minutos2.innerHTML = ":00";
    Horas2.innerHTML = "00";
    var text = hor + min + seg + cen;
    var lap = '<div id="lap'+contlap+'" class="contenedor-laps"><h1 class="lap-tittle">Lap '+contlap+'</h1><h1 class="lap-text">'+text+'</h1><hr style="width: 70%;"></div>';
    if(existe!=0){
        $('#lap'+existe).before(lap);
        console.log("Aqui");
    }else{
        $('#laps').append(lap);
        console.log("Aqui2");
    } 
    console.log("Aqui3");
    
}
function cronometro () {
	if (centesimas < 99) {
		centesimas++;
		if (centesimas < 10) { centesimas = "0"+centesimas }
		Centesimas.innerHTML = ":"+centesimas;
	}
	if (centesimas == 99) {
		centesimas = -1;
	}
	if (centesimas == 0) {
		segundos ++;
		if (segundos < 10) { segundos = "0"+segundos }
		Segundos.innerHTML = ":"+segundos;
	}
	if (segundos == 59) {
		segundos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0) ) {
		minutos++;
		if (minutos < 10) { minutos = "0"+minutos }
		Minutos.innerHTML = ":"+minutos;
	}
	if (minutos == 59) {
		minutos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
		horas ++;
		if (horas < 10) { horas = "0"+horas }
		Horas.innerHTML = horas;
	}
}
function cronometro2 () {
	if (centesimas2 < 99) {
		centesimas2++;
		if (centesimas2 < 10) { centesimas2 = "0"+centesimas2 }
        Centesimas2.innerHTML = ":"+centesimas2;
	}
	if (centesimas2 == 99) {
		centesimas2 = -1;
	}
	if (centesimas2 == 0) {
		segundos2 ++;
		if (segundos2 < 10) { segundos2 = "0"+segundos2 }
        Segundos2.innerHTML = ":"+segundos2;
	}
	if (segundos2 == 59) {
		segundos2 = -1;
	}
	if ( (centesimas2 == 0)&&(segundos2 == 0) ) {
		minutos2++;
		if (minutos2 < 10) { minutos2 = "0"+minutos2 }
		Minutos2.innerHTML = ":"+minutos2;
	}
	if (minutos2 == 59) {
		minutos2 = -1;
	}
	if ( (centesimas2 == 0)&&(segundos2 == 0)&&(minutos2 == 0) ) {
		horas2 ++;
		if (horas2 < 10) { horas2 = "0"+horas2 }
		Horas2.innerHTML = horas2;
	}
}