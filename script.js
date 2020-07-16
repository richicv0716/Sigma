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