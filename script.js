function validar(){
var nom, cor, tel, asu,men,exresion;
nom=document.getElementById("nombre").value;
cor=document.getElementById("correo").value;
 exresion=/\w+@\w+\.+[a-z]/;
if( (nom === "")||(cor === ""))
{
alert(" Todos los campos son obligatorios ")
return false;
}
else if(nom.length>50)
{
alert("El nombre es muy largo")
return false;
}

else if(cor.length>30)
{
alert("El nombre es muy largo");
return false;
}
else if(!exresion.test(cor))
{
alert("El correo no es valido");
return false;
}
}

function borrar()
{
    
   var selectBox = document.getElementById("ciudad");
   selectBox.selectedIndex = -1;

}




var handle_dependent_selects = function($parent) {
    var $child = document.getElementById($parent.getAttribute('data-child-id')),
        $selected = $parent.options[$parent.selectedIndex],
        parent_val = $selected.value;

    for (var i=0; i<$child.options.length; i++) {
        var $option = $child.options[i];
        if($option.value != '') {
            $option.setAttribute('hidden',true);
        }
    };

    if(parent_val) {
        var child_options = $selected.getAttribute('data-child-options'),
            child_options_array = child_options.split('|#');
        
        for (i=0; i<$child.options.length; i++) {
            var $option = $child.options[i];
            if ($option.value == "") {
                $option.innerText = "--------";
                continue;
            }
            if(child_options_array.indexOf($option.value) != -1) {
                $option.removeAttribute('hidden');
            }
        };

    } else {
        var show_text = $child.getAttribute('data-text-if-parent-empty');
        if(!show_text) {
            show_text = 'Select ' + $parent.name;
        }
        for (i=0; i<$child.options.length; i++) {
            var $option = $child.options[$child.selectedIndex];
            if ($option.value == "") {
                $option.innerText = '- ' + show_text + ' -';
                break;
            }
        };
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var $parents = document.getElementsByClassName('dependent-selects__parent');
    for (var i=0; i<$parents.length; i++) {
        handle_dependent_selects($parents[i]);
        $parents[i].addEventListener('change', function() {
            handle_dependent_selects(this)
        })
    }
}, false);



  var json = `{
	"Amazonas": ["Leticia","El encanto","La Chorrera","La Pedrera","Miritiparaná","Puerto Alegría","Puerto Arica","Puerto Nariño","Puerto Santader"],
	"Atlántico": ["Baranoa","Baranoa","Barranquilla","Campo de la Cruz","Candelaría","Galapa","San Juan de Acosta","Luruaco","Malambo","Manatí","Palmar de Varela","Piojo","Polo Nuevo","Ponedera","Puerto Colombia","Repelón","Sabanagrande","Sabanalarga","Santa Lucía","Santo Tomás","Soledad","Suan","Tubara","Usiacurí"],
	"Caquetá": ["Albania","Belén de los Andaquíes","Cartagena del Chaira","Curillo","El Doncello","El Paujil","Florencia","La Montañita","Milan","Morelia","Puerto Rico","San José de Fragua","San Vicente del Caguán","Solano","Solita","Valparaíso"],
	"Cesar": ["Aguachica","Agustín Codazzi","Astrea","Becerril","Bosconia","Chimichagua","Chiriguaná","Curumaní","El Copey","El Paso","Gamarra","González","La Gloria","La Jagua","Ibirico","Manaure","Pailitas","Pelaya","Pueblo Bello","Río de Oro","Robles la Paz","San Alberto","San Diego","San Martín","Tamalameque","Valledupar"],
	"Chocó": ["Acandi","Alto Baudo","Atrato","Bagado","Bahía Solano","Belén de bajirá","Bajo Baudo","Bojayá","Cantón de San Pablo","Carmen del Darién","Certeguí","Condoto","El Carmen","Istmina","Jurado","Litoral del San Juan","Lloró","Medio Atrato","Medio Baudo","Medio San Juan","Novita","Nuquí","Quibdó","Río Iro","Río Quito","Riosucio","San José del Palmar","Sipí","Tado","Unguía","Unión Panamericana"],
	"Córdoba": ["Ayapel","Buenavista","Canalete","Cerete","Chima","Chinu","Ciénaga de Oro","Cotorra","La Apartada","Lorica","Los Córdobas","Momil","Moñitos","Montelibano","Montería","Planeta Rica","Pueblo Nuevo","Puerto Escondido","Puerto Libertador","Purísima","Sahagun","San Andrés","Sotavento","San Antero","San Bernardo Viento","San Carlos","San Pelayo","Tierralta","Tuchin","Valencia"],
	"Guainía": ["Inírida","Barranco Minas","Cacahual","La Guadalupe","Mapiripana","Morichal","Pana Pana","Puerto Colombia","San Felipe"],
	"Guaviare": ["Calamar","El Retorno","Miraflores","San José del Guaviare"],
	"Huila": ["Acevedo","Agrado","Aipe","Algeciras","Altamira","Baraya","Campoalegre","Colombia","Elias","Garzón","Gigante","Guadalupe","Hobo","Íquira","Isnos","La Argentina","La Plata","Nataga","Neiva","Oporapa","Paicol","Palermo","Palestina","Pital","Pitalito","Rivera","Saladoblanco","San Agustín","Santa María","Suaza","Tarqui","Tello","Teruel","Tesalia","Timana","Villavieja","Yaguará"],
	"La Guajira": ["Riohacha","Albania","Barranca","Dibulla","Distracción","El Molino","Fonseca","La Jagua del Pilar","Maicao","Manaure","San Juan del Cesar","Urumita","Villa Nueva"],
	"Putumayo": ["Colón","Mocoa","Orito","Puerto Asís","Puerto Caicedo","Puerto Guzman","Leguizamo","San Francisco","San Miguel","Santiago","Sibundoy","Valle del Guamuez","Villagarzón"],
	"Quindío": ["Armenia","Buenavista","Calarca","Circasia","Córdoba","Filandia","Genova","La Tebaida","Montenegro","Pijao","Quimbaya","Salento"],
	"San Andrés y Providencia": ["Providencia","San Andrés y Providencia"],
	"Sucre": ["Buenavista","Caimito","Chalán","Colosó","Coveñas","Corozal","El Roble","Galeras","Guaranda","La Unión","Los Palmitos","Majagual","Morroa","Ovejas","Palmito","Sampués","San Benito Abad","San Juan de Betulia","San Marcos","San Onofre","San Pedro","Sincé","Sincelejo","Sucre","Tolú","Toluviejo"],
	"Tolima": ["Alpujarra","Alvarado","Ambalema","Anzoátegui","Ataco","Cajamarca","Carmen de Apicalá","Casabianca","Chaparral","Coello","Coyaima","Cunday","Dolores","Espinal","Falán","Flandes","Fresno","Guamo","Guayabal","Herveo","Honda","Ibagué","Icononzo","Lérida","Líbano","Mariquita","Melgar","Murillo","Natagaima","Ortega","Palocabildo","Piedras","Planadas","Prado","Purificación","Rioblanco","Roncesvalles","Rovira","Saldaña","San Antonio","San Luis","Santa Isabel","Suárez","Valle de San Juan","Venadillo","Villahermosa","Villarrica"],
	"Vaupés": ["Cacarú","Mitú","Papunaua","Pacoa","Taraira","Yavaraté"],
	"Vichada": ["Cumaribó","La Primavera","Puerto Carreño","Santa Rosalia"]
}`;

  var obj = JSON.parse(json);
  console.log(obj);
  /*
    let dropdown = document.getElementById('departamento');
    dropdown.selectedIndex = 1;

  */
  var txt = "", txt2 = "", txt3 = "", txt4 = "";
  txt += "<select>"
  i = 0;

  for (x in obj) {
    var arrayDeCadenas = Object.keys(obj) + " ";
    txt2 = arrayDeCadenas.split(",");
    var arrayDeCadenas2 = obj[x] + "";
    txt += "<option data-child-options='" + arrayDeCadenas2.split(',').join('|#') + "'>" + txt2[i];

    i++;
  }
  txt += "</select>"
  document.getElementById("departamento").innerHTML = txt;

  txt = "", txt2 = "";
  txt += "<select> <option>--------</option>"
  i = 0;
  for (x in obj) {
    arrayDeCadenas = obj[x] + " ";
    txt2 = arrayDeCadenas.split(",");

    for (let index = 0; index < txt2.length; index++) {
      txt += "<option >" + txt2[index];

    }

    i++;
  }
  txt += "</select>"
  document.getElementById("ciudad").innerHTML = txt;
