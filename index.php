<?php
    /*
    Dada la siguiente estructura:

    1. Mis pokemones
    2. Perfil del pokemon

    Deberemos a través de Javascript Vanilla consumir alguna Free API Rest que nos de información acerca de los pokemones.
    Deberán construirse 2 vistas, donde:

    Vista: Mis pokemones deberá renderizar una lista de 10 pokemones después de haber consumido la API con la función 
    fetch de Javascript
    Vista: Perfil del Pokemon deberá después de un evento click sobre un pokemon renderizar detalles del pokemon seleccionado
    */
?>
<html>
    <head>
        <script src="./js/consultaApi.js"></script>
        <link rel="stylesheet" type="text/css" href="./css/index.css" />
    </head>
    <body>
        <div class="contenedorPokemones">
            <h1>
                <h2>Mis pokemones</h2>
            </h1>
            <div>
                <div id="pokemones">

                </div>
            </div>

            <div id="detallesPokemon">
                
            </div>
        </div>
    </body>
</html>