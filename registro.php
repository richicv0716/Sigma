<?php 
include ('conexion.php');

$name = $_POST["nombre"];
$email = $_POST["correo"];
$state = $_POST["departamento"];
$city = $_POST["ciudad"];


$insertar = "INSERT INTO contacts( name, email, state, city) VALUES ( '$name', '$email', '$state', '$city')";

$resultado = mysqli_query($conexion, $insertar);
if(!$resultado){
    echo "error al registrarse";
}else{
    echo "Registro correcto";
}

mysqli_free_result($resultado);
mysqli_close($conexion);