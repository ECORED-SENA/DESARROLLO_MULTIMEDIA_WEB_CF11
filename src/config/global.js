export default {
  global: {
    componenteFormativo:
      'Codificación de los elementos del proyecto multimedia',
    descripcionCurso:
      'A través del conocimiento de los lenguajes de programación es posible llegar a la construcción de elementos que se harán visibles, por medio de navegadores que permitirán al usuario entender y utilizar las herramientas para solucionar los problemas que se presenten dentro del uso de las interfaces.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Entornos y herramientas de codificación para el desarrollo de proyectos <em>web</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Entornos de desarrollo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Entorno de ejecución multiplataforma',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Kit de Desarrollo de Software- SDK',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Lenguajes de programación',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Fundamentos de programación',
            hash: 't_1_5',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Herramientas de programación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Metodologías ágiles de desarrollo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Metodologías ágiles de desarrollo y marcos de trabajo para la gestión de proyectos multimedia',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Servicios <em>web</em>',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   icono: 'fas fa-sitemap',
      //   titulo: 'Síntesis',
      //   nombreRuta: 'sintesis',
      //   desarrolloContenidos: true,
      // },
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Lenguajes de Programación',
      referencia:
        'MDN <em>web</em> Docs. (s.f.). Referencia de Atributos HTML.',
      tipo: 'Sitio <em>web</em>',
      link: 'https://developer.mozilla.org/es/docs/Web/HTML/Attributes',
    },
    {
      tema: 'Fundamentos de Programación',
      referencia:
        '<em>Digital Learning</em>. (2019). Ventanas emergentes y pop up.',
      tipo: 'Video',
      link: 'https://player.vimeo.com/video/163927259',
    },
    {
      tema: 'Herramientas de Programación',
      referencia: 'EDTeam. (2018). <em>FrameWork</em> vs Librería.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=A-iKX8Shge4',
    },
    {
      tema: 'Metodologías ágiles de desarrollo',
      referencia:
        'BettaTech. (2019). Scrum y Metodologías Ágiles en ingeniería informática.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=DT2NEBCAPHw',
    },
    {
      tema: 'Metodologías agiles ágiles de desarrollo',
      referencia:
        'Innovación y estrategia tecnológica en ingeniería UPNA. (2018) Metodologías ágiles SCRUM y KANBAN.',
      tipo: 'video',
      link: 'https://www.youtube.com/watch?v=AAZtxEFWqDI',
    },
    {
      tema: 'Base de datos',
      referencia:
        'Edteam. (2020) ¿Cómo diseñar una base de datos? ¿Cuáles son las etapas?',
      tipo: 'video',
      link: 'https://www.youtube.com/watch?v=WU1tUV_krtA',
    },
  ],
  glosario: [
    {
      termino: 'ASCII',
      significado:
        'código estándar para el intercambio de información, basado en el alfabeto latino, permite una comunicación entre computadores y humanos.',
    },
    {
      termino: '<em>BackEnd</em>',
      significado:
        'parte interna de la creación de las páginas <em>web</em>, la parte lógica y la capa de código y programación encargada a conectar los servidores y los dispositivos.',
    },
    {
      termino: '<em>Backlog</em>',
      significado:
        'lista de trabajo ordenado por prioridades para el equipo de desarrollo que se obtiene de la hoja de ruta y sus requisitos. Los elementos más importantes se muestran al principio del <em>backlog</em> del producto para que el equipo sepa qué hay que entregar primero (Atlassian, 2021).',
    },
    {
      termino: 'C++',
      significado:
        'lenguaje de programación enfocado a la manipulación de objetos.',
    },
    {
      termino: '<em>FrameWorks</em>',
      significado:
        'o marco de trabajo, es un conjunto de conceptos y prácticas para enfocar una problemática, que sirve como referencia para próximos problemas (Ceolevel, 2019).',
    },
    {
      termino: '<em>FrontEnd</em>',
      significado:
        'parte visible de una aplicación o página <em>web</em>; la parte a la que el usuario tiene acceso, desde su diseño hasta su contenido. ',
    },
    {
      termino: 'Kanban',
      significado:
        'sistema basado en el funcionamiento de los supermercados que reduce la procrastinación en todas las áreas de la empresa (Rock Content, 2019).',
    },
    {
      termino: '<em>Restful</em>',
      significado:
        'arquitectura para aplicaciones basadas en redes (como internet), sus siglas significan <em>Representational State Transfer</em> y por otro lado <em>RESTful web service o RESTful api</em>, son programas basados en <em>REST</em>. Pero muchas veces se usan como sinónimos (REST y RESTful) (Código naranja, 2021).',
    },
    {
      termino: '<em>Script</em>',
      significado:
        'fragmento de código que se encuentra insertado dentro de un documento HTML.',
    },
    {
      termino: 'Scrum',
      significado:
        'proceso en el que se aplican de manera regular un conjunto de buenas prácticas para trabajar colaborativamente, en equipo, y obtener el mejor resultado posible de un proyecto. (Proyectos ágiles, 2021)',
    },
    {
      termino: 'SEO',
      significado:
        'iniciales en inglés de <em>Search Engine Optimization</em> (optimización para motores de búsqueda). Se puede definir como “conjunto de acciones que se realizan para mejorar la visibilidad de un portal de internet en los resultados orgánicos de los distintos buscadores” (Rock Content, 2021).',
    },
    {
      termino: '<em>Sprint</em>',
      significado:
        'nombre que va a recibir cada uno de los ciclos o iteraciones que vamos a tener dentro de un proyecto Scrum (Opern Webinars, 2018).',
    },
    {
      termino: 'Unicode',
      significado:
        'set de caracteres universal que define todos los caracteres necesarios para la escritura de la mayoría de los idiomas hablados y que se usan en los computadores (W3C, 2018).',
    },
    {
      termino: 'XML',
      significado:
        'siglas de Extensible Markup Language, que podemos traducir como Lenguaje de Marcas Extensibles, aunque realmente es un metalenguaje. Normalmente, los archivos XML contienen información de cualquier tipo, ya sea información sensible o información de cualquier ámbito (Alconchel, 2019).',
    },
  ],
  referencias: [
    {
      referencia:
        'Atlassian (2021). El backlog del producto: la lista de tareas pendientes definitiva. ',
      link: 'https://www.atlassian.com/es/agile/scrum/backlogs ',
    },
    {
      referencia:
        'Ceolevel. (2019). ¿Estándares, metodologías o marcos de trabajo? ¿Sabes diferenciarlos? ',
      link:
        'https://www.ceolevel.com/estandares-metodologias-o-marcos-de-trabajo-sabes-diferenciarlos ',
    },
    {
      referencia:
        'Código Naranja. (2021). ¿Qué es RESTful <em>web</em> Service? y ¿qué es REST? ',
      link: 'https://codigonaranja.com/restful-web-service ',
    },
    {
      referencia: 'Proyectos Ágiles. (2021). Qué es SCRUM. ',
      link: 'https://proyectosagiles.org/que-es-scrum/ ',
    },
    {
      referencia: 'Opern Webinars. (2019). ¿Qué es XML y para qué se usa? ',
      link: 'https://openwebinars.net/blog/que-es-xml-y-para-que-se-usa/ ',
    },
    {
      referencia: 'Opern Webinars. (2018). Qué es un sprint de Scrum ',
      link: 'https://openwebinars.net/blog/que-es-un-sprint-scrum/ ',
    },
    {
      referencia:
        'Rock Content. (2019). Conoce el método Kanban para organizar y aumentar la productividad de tu negocio.',
      link: 'https://rockcontent.com/es/blog/metodo-kanban/ ',
    },
    {
      referencia:
        'Rock Content. (2021). SEO: la guía completa para que conquistes la cima de Google en el 2022. ',
      link: 'https://rockcontent.com/es/blog/que-es-seo/',
    },
    {
      referencia: 'W3C. (2018). Codificación de caracteres: conceptos básicos.',
      link:
        'https://www.w3.org/International/articles/definitions-characters/index.es',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Eduardo José Velasco Acevedo',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Juan Manuel Reyes Ramírez',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Carlos Andrés Suescun Lesmes',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Olga Lucía Mogollón Carvajal',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Caterine Bedoya Mejía',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Carlos Julian Ramirez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Andrés Bolaño Rey',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Caceres Arenales',
        cargo: 'Validación ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Revisión de guion',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Magdi Kahlifah',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona  ',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
