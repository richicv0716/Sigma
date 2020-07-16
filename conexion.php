<?php
$servidor='178.128.146.252';
$usuario='admin_sigmauser';
$clave='pfaDKIJyPF';
$dbname='admin_sigmatest';

$conexion = new mysqli ($servidor, $usuario, $clave, $dbname);
if ($conexion->connect_errno){
    echo "Error al conectarse($conexio->connect_errno)";
}
?>