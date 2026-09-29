let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let curso = document.getElementById("curso").value;

    let mensaje = document.getElementById("mensaje");

    mensaje.innerHTML =
        "✅ Inscripción realizada correctamente.<br><br>" +
        "Alumno: " + nombre + " " + apellido + "<br>" +
        "Curso: " + curso;

});

let curso = document.getElementById("curso");

let ventanaCurso = document.getElementById("ventanaCurso");

let tituloCurso = document.getElementById("tituloCurso");

let descripcionCurso = document.getElementById("descripcionCurso");

let cerrarInfo = document.getElementById("cerrarInfo");

let elegirCurso = document.getElementById("elegirCurso");

let imagenCurso = document.getElementById("imagenCurso");


// DESCRIPCIONES DE LOS CURSOS

let descripciones= {

    "Cesteria":
        "Es el arte de tejer objetos utilizables para la vida cotidiana empleando principalmente materiales de origen vegetal y no solo es una herramienta útil para transportar y almacenar alimentos, instrumento de campo y otros enseres, como decoración, sino que también es un objeto artesanal que demuestra la destreza y el concepto estético de quienes lo crean. Esta practica milenaria, es una de las más antiguas de la humanidad, y no requiere costo alguno, ya que obtenemos la maateria prima de nuestro entorno natural, el cual es totalmente renovable y amigable con la ecología y el medio ambiente,permitiéndonos una rentabilidad del 100%. ",

    "Programacion":
        "Es un espacio donde podes expresar tu creatividad creando aplicaciones, sistemas y herramientas que resuelven problemas reales. Desde desarrollar un simple algoritmo hasta diseñar un software completo, cada linea de codigo es una oportunidad para desplegar tu logica, tu ingenio y tu capacidad de creacion. Empleabilidad y Futuro Asegurado: El mundo digital esta en pleno crecimiento, y cada vez mas empresas, instituciones y emprendimiento necesitan programadores capacitados. Es una de las profesiones con mayor demanda en la catualidad y con exelente proyecciones a futuro.",

    "Mantenimiento de Edificio":
        "Empleabilidad: La industria del mantenimiento de edificios es fundamental para garantizar que las infraestructuras funcionen de manera segura y eficiente. Con este curso, tendrás la oportunidad de ingresar a un campo laborar en constante crecimiento y demanda de profecionales capacitados en el mantenimiento y la gestión de edificaciones. Estabilidad Laboral: Los edificios, ya sean residenciales, comerciales o industriales, requieren un mantenimiento regular para asegurar su funcionamiento adecuado y prolongar su vida útil. Siempre habra una demanda continua de servicios de mantenimiento. ", 

     "Mecanica de Ciclomotor":
        "La mecanica esta presente en la mayoria de los oficios. Pero la mecanica de moto requiere de profecionales capacitados. Con este curso tendrán la oportunidad de entrar en un campo laboral en pleno crecimiento. Estabilidad Laboral: Nos permite trabajar en relacion de dependencia o de forma autónoma. Oportunidad de Desarrollo: Una vez adquirido los conocimientos y habilidades necesarias hay un sin fin de opciones de crecimiento profecional.",

    "Bobinado":
        "Organizar y gestionar las tareas de reparación de los bobinados de las máquinas eléctricas estáticas y dinámicas. Organizar y gestionar las tareas de las máquinas eléctricas estáticas y dinámicas, diagnosticar y ejecutar tareas preventivas y/o correctivas de los bobinados de las máquinas eléctricas estáticas y dinámicas, entregar y controlar la calidad de los trabajos, organizar y gestionar el taller para la prestación de servicios a terceros de bobinados de máquinas eléctricas estáticas y dinámicas.  ",

    "Operador de Carpinteria y Fabricacion de Mobiliarios":
        "La carpinteria esta presente en la vida cotidiana de las personas. Requiere de conocimientos, profecionales capacitados. Con este curso tendrán la oportunidad de entrar en un campo laboral con un pleno crecimiento. Estabilidad Laboral: Nos permite trabajar en relacion de dependencia o de forma autónoma. Oportunidad de desarrollo, una vez adquiridos los conocimientos y habilidades necesarias hay muchísimas oportunidades de crecimiento profecional en el oficio.",

    "Muebles Artesanales":
        "Remodela muebles con técnicas artísticas, realiza diseños acordes y proporcionales al mueble. Elige una paleta cromática acorde al ambiente donde será ubicado el objeto. Protegé el trabajo asegurando durabilidad, calcula materiales y confecciona presupuestos. Puede desempeñar su actividad por su cuenta o en relacion de dependencia, puede delegar su trabajo en otros operarios mediante órdenes escritas u croquis de la tarea. El trabajador es responsable de la calidad de su trabajo y de los materiales que selecciona. Trabajá solo y/o en equipo.",

    "Operador de Informatica para Administracion y Gestion":
        "Operá la computadota utilizando procedimientos de optimización de los sistemas informáticos, buscar información y realizar comunicaciones a través de internet, organizar datos numéricos, realizar cómputos de uso administrativo y comercial, incluyendo decisiones lógicas y graficando resultados o relaciones por medio de una pantalla de cálculo, herramientas para la planificación de tareas y actividades de proyectos entre otras, transcribir comunicaciones de apoyo visual y otros elementos de apoyo al trabajo individual o grupal.",

    "Operador de Planta de Residuos Solidos y Hurbanos":
        "Este curso brindan conocimientos y herramientas para trabajar en plantas destinadas a la recepción, clasificación, separación, tratamiento y acondicionamiento de residuos sólidos urbanos. Durante la capacitación se conocen los distintos tipos de residuos y las formas adecuadas de manipularlos, teniendo en cuenta las normas de seguridad e higiene. Se abordaran prácticas relacionadas conel reciclaje, la recuperación de materiales y el reciclaje, la recuperación de materiales y el cuidado del medio ambiente, promooviendo una correcta gestión de los residuos. La formación permite adquirir conocimientos útiles para desempeñarse en plantas de tratamiento y otros espacios vinculados a la gestión y manejo de residuos. ",

    "Reciclaje":
        "Este curso está diseñado para proporcionar a los participantes una comprensión integral de la gestión adecuada de residuos, desde su clasificación hasta el reciclaje y la disposición final. A través de una formación práctica y actualizada, vas aprender como reducir, clasificar, gestionaar y reciclar los residuos, así como cumplir con la normativa ambiental vigente y aplicar innovaciones tecnologicas en reciclaje",

    "Instalador de Sistemas de Energia Renovable":
        "Este curso brinda los conocimientos y herramientas necesarias para aprender a instalar, mantener y verificar sistemas que utilizan energias renovables, especialmentee aquellos relacionados con la generacion de energia solar. El objetivo es que los estudiantes puedan adquirir conocimientos tecnicos y prácticos que le permitan desempeñarse en tareas relacionadas con la instalación y mantenimiento de sistema de energías renovables, una actividad con creciente importancia debido a la búsqueda de alternativas energéticas más eficientes y sustenciables. "
};

// IMAGENES CURSO
let imagenes = {

    "Cesteria": "imagenes/cesteria.jpg",

    "Programacion": "imagenes/programacion.png",

    "Mantenimiento de Edificio": "imagenes/mantenimiento edificio.jpg",

    "Mecanica de Ciclomotor": "imagenes/ciclomotor.jpg",

    "Bobinado": "imagenes/bobinado.jpg",

    "Instalador de Sistemas de Energia Renovable": "imagenes/renovable.jpg",

    "Operador de Carpinteria y Fabricacion de Mobiliarios": "imagenes/carpinteria.jpg",

    "Muebles Artesanales": "imagenes/muebles artesanales.jpg",

    "Operador de Informatica para Administracion y Gestion": "imagenes/gestion.jpg",

    "Operador de Planta de Residuos Solidos y Hurbanos": "imagenes/hurbano.jpg",

    "Reciclaje": "imagenes/reciclaje.png"

    


};


// CUANDO SE SELECCIONA UN CURSO

curso.addEventListener("change", function() {

    let cursoSeleccionado = curso.value;

    if (cursoSeleccionado === "") {
        return;
    }

    tituloCurso.textContent = cursoSeleccionado;

    descripcionCurso.textContent=descripciones[cursoSeleccionado];

        imagenCurso.src=imagenes[cursoSeleccionado];

    ventanaCurso.style.display = "flex";

});


// CERRAR LA VENTANA

cerrarInfo.addEventListener("click", function() {

    ventanaCurso.style.display = "none";

});


// ELEGIR EL CURSO

elegirCurso.addEventListener("click", function() {

    ventanaCurso.style.display = "none";

});

