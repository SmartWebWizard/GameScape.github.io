$(document).ready(function () {
  //Eventos
  $(".btn-dificultad").click(function () {
    comenzarJuego($(this).data("dificultad"));
  });

  $("#dificultad").change(function (e) {
    comenzarJuego(e.target.value);
  });

  $("#btn-introducir").click(function () {
    comprobarValorUsuario();
  });

  $("#btn-otraPalabra").click(function () {
    comenzarJuego(selectDificultad[0].value);
  });

  const palabras = [];
  const palabrasInicialesText = ["manzana", "perro", "playa", "libro", "sol", "gato", "montaña", "ciudad", "luna", "río", "árbol", "casa", "fuego", "nieve", "mar", "camino", "estrella", "nube", "música", "coche", "película", "amigo", "amor", "viaje", "familia", "guitarra", "ordenador", "sueño", "fiesta", "café", "diente", "reloj", "arte", "juego", "avión", "tarjeta", "regalo", "trabajo", "deporte", "color", "hobby", "teléfono", "llave", "maleta", "cámara", "risa", "paz", "historia", "magia", "pintura", "mariposa", "pera", "cine", "sol", "guitarra", "montaña", "libro", "tigre", "ciudad", "nube", "playa", "fresa", "coche", "luna", "isla", "perro", "río", "fuego", "flor", "estrella", "gato", "bosque", "manzana", "avión", "arcoíris", "casa", "sirena", "piano", "colina", "helado", "barco", "elefante", "parque", "nieve", "pelota", "palmera", "amigo", "aroma", "payaso", "mar", "caramelo", "foto", "mono", "pintura", "cascada", "castillo", "pastel", "oasis", "delfín", "buceo", "unicornio", "tortuga", "elefante", "sandía", "cine", "sol", "guitarra", "montaña", "libro", "león", "ciudad", "nube", "playa", "fresa", "coche", "luna", "isla", "perro", "río", "fuego", "flor", "estrella", "gato", "bosque", "manzana", "avión", "arcoíris", "casa", "sirena", "piano", "colina", "helado", "barco", "tigre", "parque", "nieve", "pelota", "palmera", "amigo", "aroma", "payaso", "mar", "caramelo", "foto", "mono", "pintura", "cascada", "castillo", "pastel", "oasis", "delfín", "buceo", "unicornio", "tortuga", "espada", "laguna", "elefante", "globo"];
  const palabrasInicialesPista = ["Fruta deliciosa", "Mejor amigo del hombre", "Lugar de descanso y diversión", "Fuente de conocimiento", "Astro que brilla en el cielo", "Mascota independiente", "Gran elevación natural", "Área urbana", "Satélite natural de la Tierra", "Corriente de agua natural", "Planta de gran tamaño", "Lugar de residencia", "Fenómeno que produce calor y luz", "Precipitación en forma de cristales de hielo", "Gran masa de agua salada", "Vía para desplazarse", "Astro luminoso en el espacio", "Masa visible de gotas de agua en el cielo", "Arte de combinar sonidos", "Medio de transporte personal", "Obra cinematográfica", "Persona cercana y leal", "Sentimiento profundo de afecto", "Trayecto de un lugar a otro", "Grupo de personas relacionadas entre sí", "Instrumento musical de cuerda", "Dispositivo electrónico", "Estado de reposo durante el sueño", "Celebración o reunión festiva", "Bebida estimulante", "Pieza dental", "Instrumento para medir el tiempo", "Manifestación de la creatividad", "Actividad recreativa", "Medio de transporte aéreo", "Tarjeta de felicitación o identificación", "Obsequio dado con motivo de celebración", "Actividad laboral o empleo", "Actividad física o competitiva", "Matiz visual que se percibe", "Pasatiempo o afición", "Dispositivo de comunicación", "Objeto para abrir cerraduras", "Contenedor para transportar pertenencias", "Dispositivo para capturar imágenes", "Expresión de alegría mediante sonidos", "Estado de tranquilidad y armonía", "Relato de sucesos pasados", "Arte de producir efectos sorprendentes", "Creación artística mediante colores y formas",
    "Insecto con hermosas alas", "Fruta de forma redondeada y jugosa", "Lugar para ver películas", "Astro que brilla en el cielo", "Instrumento musical de cuerda", "Gran elevación natural", "Fuente de conocimiento", "Felino salvaje y elegante", "Área urbana densamente poblada", "Masa visible de gotas de agua en el cielo", "Zona costera de arena y mar", "Fruta pequeña y roja", "Medio de transporte personal", "Satélite natural de la Tierra", "Terreno rodeado de agua", "Animal de compañía leal", "Corriente de agua natural", "Fenómeno que produce calor y luz", "Planta con pétalos coloridos", "Objeto celestial que brilla en el cielo nocturno", "Animal doméstico de compañía", "Área cubierta de árboles", "Fruta de forma redonda y colorido rojizo", "Medio de transporte aéreo", "Fenómeno óptico multicolor", "Lugar de residencia", "Criatura mítica con torso humano y cola de pez", "Instrumento musical de teclas", "Elevación de terreno de menor altura que una montaña", "Delicia fría comestible", "Embarcación para navegación en agua", "Animal terrestre de gran tamaño", "Área verde recreativa", "Forma sólida del agua en estado congelado", "Objeto esférico para jugar", "Árbol alto con hojas en forma de abanico", "Persona cercana y leal", "Aroma agradable y distintivo", "Persona que divierte con payasadas", "Extensión de agua salada", "Dulce comestible hecho con azúcar", "Imagen capturada con una cámara", "Mamífero trepador de cola prensil", "Creación artística mediante colores y formas", "Caida de agua en un curso de río", "Residencia fortificada y antigua", "Dulce comestible y esponjoso", "Área con vegetación en medio del desierto", "Mamífero marino inteligente y ágil", "Actividad de bucear bajo el agua", "Criatura mitológica con forma de caballo y cuerno en la frente", "Reptil marino de caparazón duro",
    "Mamífero terrestre de gran tamaño", "Fruta jugosa y refrescante", "Lugar para ver películas", "Astro que brilla en el cielo", "Instrumento musical de cuerda", "Gran elevación natural", "Fuente de conocimiento", "Feroz animal carnívoro", "Área urbana densamente poblada", "Masa visible de gotas de agua en el cielo", "Zona costera de arena y mar", "Fruta pequeña y roja", "Medio de transporte personal", "Satélite natural de la Tierra", "Terreno rodeado de agua", "Animal de compañía leal", "Corriente de agua natural", "Fenómeno que produce calor y luz", "Planta con pétalos coloridos", "Objeto celestial que brilla en el cielo nocturno", "Animal doméstico de compañía", "Área cubierta de árboles", "Fruta de forma redonda y colorido rojizo", "Medio de transporte aéreo", "Fenómeno óptico multicolor", "Lugar de residencia", "Criatura mitológica con parte superior de mujer y parte inferior de pez", "Instrumento musical de teclas", "Elevación de terreno de menor altura que una montaña", "Delicia fría comestible", "Embarcación para navegación en agua", "Feroz animal carnívoro de rayas", "Área verde recreativa", "Forma sólida del agua en estado congelado", "Objeto esférico para jugar", "Árbol alto con hojas en forma de abanico", "Persona cercana y leal", "Aroma agradable y distintivo", "Persona que divierte con payasadas", "Extensión de agua salada", "Dulce comestible hecho con azúcar", "Imagen capturada con una cámara", "Primate trepador de árboles", "Creación artística mediante colores y formas", "Caida de agua en un curso de río", "Residencia fortificada y antigua", "Dulce comestible y esponjoso", "Área con vegetación en medio del desierto", "Mamífero marino inteligente y ágil", "Actividad de bucear bajo el agua", "Criatura mitológica con forma de caballo y cuerno en la frente", "Reptil marino de caparazón duro", "Arma blanca de hoja larga y afilada", "Depósito de agua generalmente poco profundo", "Mamífero terrestre de gran tamaño", "Objeto flotante lleno de aire"
  ];
  const palabrasElegidas = [];
  const palabrasElegidasFacil = [];
  const palabrasElegidasMedia = [];
  const palabrasElegidasDificil = [];

  const inicioJuego = $("#inicioJuego");
  const modificarJuego = $("#modificarJuego");
  const selectDificultad = $("#dificultad");
  const inputPalabraElegida = $("#inputPalabra");
  const pistaPalabra = $("#pistaPalabra");
  const letrasContainer = $("#letras");
  const inputPalabraUsuario = $("#inputPalabraUsuario");
  const inputRespuesta = $("#inputRespuesta");

  for (let index = 0; index < palabrasInicialesText.length; index++) {
    palabras[index] = {
      id: index,
      texto: palabrasInicialesText[index],
      pistas: [palabrasInicialesPista[index]]
    }
  }

  const palabrasFaciles = palabras.filter(palabra => palabra.texto.length <= 4);
  const palabrasMedias = palabras.filter(palabra => palabra.texto.length > 4 && palabra.texto.length <= 7);
  const palabrasDificiles = palabras.filter(palabra => palabra.texto.length > 7);

  function comenzarJuego(dificultad) {
    inicioJuego.hide();
    modificarJuego.show();
    selectDificultad[0].value = dificultad;
    resetearValoresPorDefecto();

    const palabraAleatoria = obtencionPalabraAleatoria(dificultad);


    if (palabraAleatoria && palabraAleatoria.texto !== "No hay mas") {
      pistaPalabra[0].innerHTML = palabraAleatoria.pistas[0];
      inputPalabraElegida.val(palabraAleatoria.texto);
      inputRespuesta.val("");
      generarLetras(palabraAleatoria.texto);
    } else {
      alert("No existen más palabras de esta dificultad, intente con otra dificultad");
    }
  }

  function obtencionPalabraAleatoria(dificultad) {
    var palabraDisponible = false;

    const categoriaSeleccionada = dificultad;
    const palabraAleatoria = obtenerPalabraAleatoria(categoriaSeleccionada);
    //Si no hay palabras elegidas o si no está incluida se pone a true el valor
    if (palabrasElegidas.length === 0) {
      palabraDisponible = true;
    } else {
      if (!palabrasElegidas.includes(palabraAleatoria)) {
        palabraDisponible = true;
      }
    }

    //Si es true se añade, en caso de tope carga la fraseMax y en caso de que sea falso y no llegue al tope se repite la operación
    if (palabraDisponible) {
      palabrasElegidas.push(palabraAleatoria);

      switch (dificultad) {
        case "facil":
          palabrasElegidasFacil.push(palabraAleatoria);
          break;
        case "media":
          palabrasElegidasMedia.push(palabraAleatoria);
          break;
        case "dificil":
          palabrasElegidasDificil.push(palabraAleatoria);
          break;
      }
    } else if ((palabrasElegidasFacil.length === palabrasFaciles.length) || (palabrasElegidasMedia.length === palabrasMedias.length) || (palabrasElegidasDificil.length === palabrasDificiles.length)) {
      console.log("no hay mas");
      palabraAleatoria.texto = "No hay mas";
    } else {
      obtencionPalabraAleatoria(dificultad);
      palabraAleatoria.texto = palabrasElegidas[palabrasElegidas.length - 1].texto;
      palabraAleatoria.pistas = palabrasElegidas[palabrasElegidas.length - 1].pistas;
    }

    return palabraAleatoria;
  }

  function obtenerPalabraAleatoria(categoria) {
    let palabrasCategoria;

    switch (categoria) {
      case "facil":
        palabrasCategoria = palabrasFaciles;
        break;
      case "media":
        palabrasCategoria = palabrasMedias;
        break;
      case "dificil":
        palabrasCategoria = palabrasDificiles;
        break;
      default:
        palabrasCategoria = palabras;
        break;
    }

    const indiceAleatorio = Math.floor(Math.random() * palabrasCategoria.length);
    const palabraAleatoria = palabrasCategoria[indiceAleatorio];


    return palabraAleatoria;
  }

  function generarLetras(palabra) {
    letrasContainer.empty();

    for (let i = 0; i < palabra.length; i++) {
      const span = $("<span>")
        .addClass("underline")
        .appendTo(letrasContainer);
    }
  }

  function comprobarValorUsuario(palabra) {
    const inputUsuario = inputPalabraUsuario.val();

    if (inputUsuario.length === 0) {
      respuestaErronea();
    } else if (remove_accent(inputPalabraElegida.val().toLowerCase()) !== remove_accent(inputUsuario.toLowerCase())) {
      respuestaErronea();
    } else {
      respuestaAcertada()
    }
  }

  function respuestaErronea() {
    inputRespuesta[0].innerHTML = "¡Has fallado!, intentalo de nuevo";
    inputRespuesta[0].style.color = "aliceblue";
    setTimeout(function() {
      inputRespuesta[0].innerHTML = "";
    }, 5000);
  }

  function respuestaAcertada() {
    inputRespuesta[0].innerHTML = "¡Has acertado!";
    inputRespuesta[0].style.color = "aliceblue";
    inputPalabraUsuario[0].style.backgroundColor = "lightskyblue";
  }

  function resetearValoresPorDefecto() {
    inputPalabraUsuario[0].style.backgroundColor = "white";
    inputRespuesta[0].innerHTML = "";
    inputPalabraUsuario.val("");
  }

  function remove_accent (str) {
    var map = {'À': 'A', 'Á': 'A', 'Â': 'A', 'Ã': 'A', 'Ä': 'A', 'Å': 'A', 'Æ': 'AE',
        //'Ç':'C',
        'È': 'E', 'É': 'E', 'Ê': 'E', 'Ë': 'E',
        'Ì': 'I', 'Í': 'I', 'Î': 'I', 'Ï': 'I',
        'Ð': 'D',
        'Ò': 'O', 'Ó': 'O', 'Ô': 'O', 'Õ': 'O', 'Ö': 'O', 'Ø': 'O',
        'Ù': 'U', 'Ú': 'U', 'Û': 'U', 'Ü': 'U',
        'Ý': 'Y',
        'ß': 's',
        'à': 'a', 'á': 'a', 'â': 'a', 'ã': 'a', 'ä': 'a', 'å': 'a',
        'æ': 'ae',
        'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e',
        'ì': 'i', 'í': 'i', 'î': 'i', 'ï': 'i',
        'ò': 'o', 'ó': 'o', 'ô': 'o', 'õ': 'o', 'ö': 'o', 'ø': 'o',
        'ù': 'u', 'ú': 'u', 'û': 'u', 'ü': 'u',
        'ý': 'y', 'ÿ': 'y',
        'Ā': 'A', 'ā': 'a', 'Ă': 'A', 'ă': 'a', 'Ą': 'A', 'ą': 'a',
        'Ć': 'C', 'ć': 'c', 'Ĉ': 'C', 'ĉ': 'c', 'Ċ': 'C', 'ċ': 'c', 'Č': 'C', 'č': 'c',
        'Ď': 'D', 'ď': 'd', 'Đ': 'D', 'đ': 'd',
        'Ē': 'E', 'ē': 'e', 'Ĕ': 'E', 'ĕ': 'e', 'Ė': 'E', 'ė': 'e', 'Ę': 'E', 'ę': 'e', 'Ě': 'E', 'ě': 'e',
        'Ĝ': 'G', 'ĝ': 'g', 'Ğ': 'G', 'ğ': 'g', 'Ġ': 'G', 'ġ': 'g', 'Ģ': 'G', 'ģ': 'g',
        'Ĥ': 'H', 'ĥ': 'h', 'Ħ': 'H', 'ħ': 'h',
        'Ĩ': 'I', 'ĩ': 'i', 'Ī': 'I', 'ī': 'i', 'Ĭ': 'I', 'ĭ': 'i', 'Į': 'I', 'į': 'i', 'İ': 'I', 'ı': 'i',
        'Ĳ': 'IJ', 'ĳ': 'ij',
        'Ĵ': 'J', 'ĵ': 'j',
        'Ķ': 'K', 'ķ': 'k',
        'Ĺ': 'L', 'ĺ': 'l', 'Ļ': 'L', 'ļ': 'l', 'Ľ': 'L', 'ľ': 'l', 'Ŀ': 'L', 'ŀ': 'l', 'Ł': 'L', 'ł': 'l',
        'Ń': 'N', 'ń': 'n', 'Ņ': 'N', 'ņ': 'n', 'Ň': 'N', 'ň': 'n', 'ŉ': 'n',
        'Ō': 'O', 'ō': 'o', 'Ŏ': 'O', 'ŏ': 'o', 'Ő': 'O', 'ő': 'o', 'Œ': 'OE', 'œ': 'oe',
        'Ŕ': 'R', 'ŕ': 'r', 'Ŗ': 'R', 'ŗ': 'r', 'Ř': 'R', 'ř': 'r',
        'Ś': 'S', 'ś': 's', 'Ŝ': 'S', 'ŝ': 's', 'Ş': 'S', 'ş': 's', 'Š': 'S', 'š': 's',
        'Ţ': 'T', 'ţ': 't', 'Ť': 'T', 'ť': 't', 'Ŧ': 'T', 'ŧ': 't',
        'Ũ': 'U', 'ũ': 'u', 'Ū': 'U', 'ū': 'u', 'Ŭ': 'U', 'ŭ': 'u', 'Ů': 'U', 'ů': 'u', 'Ű': 'U', 'ű': 'u', 'Ų': 'U', 'ų': 'u',
        'Ŵ': 'W', 'ŵ': 'w',
        'Ŷ': 'Y', 'ŷ': 'y', 'Ÿ': 'Y',
        'Ź': 'Z', 'ź': 'z', 'Ż': 'Z', 'ż': 'z', 'Ž': 'Z', 'ž': 'z',
        'ſ': 's', 'ƒ': 'f', 'Ơ': 'O', 'ơ': 'o', 'Ư': 'U', 'ư': 'u',
        'Ǎ': 'A', 'ǎ': 'a', 'Ǐ': 'I', 'ǐ': 'i', 'Ǒ': 'O', 'ǒ': 'o',
        'Ǔ': 'U', 'ǔ': 'u', 'Ǖ': 'U', 'ǖ': 'u', 'Ǘ': 'U', 'ǘ': 'u', 'Ǚ': 'U', 'ǚ': 'u', 'Ǜ': 'U', 'ǜ': 'u',
        'Ǻ': 'A', 'ǻ': 'a', 'Ǽ': 'AE', 'ǽ': 'ae',
        'Ǿ': 'O', 'ǿ': 'o'
    };
    var res = '';
    for (var i = 0; i < str.length; i++) {
        var c = str.charAt(i);
        res += map[c] || c;
    }
    return res;
}

});