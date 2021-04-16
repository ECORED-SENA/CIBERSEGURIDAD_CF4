export const global = {
  componenteFormativo: 'El Sistema de gestión de Seguridad de la Información',
  descripcionCurso:
    'En este componente formativo se hará una introducción general a los sistemas de gestión de seguridad de la información según la norma ISO 27001, sus fases, actividades y las recomendaciones.',
  imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
  fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
}

export const menuPrincipal = {
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
      titulo: 'ISO IEC 27001',
      desarrolloContenidos: true,
      subMenu: [
        {
          icono: 'far fa-file-alt',
          numero: '1.1',
          titulo: 'Fases del ciclo PHVA',
          hash: 't_1_1',
        },
      ],
    },
    {
      nombreRuta: 'tema2',
      icono: 'far fa-file-alt',
      numero: '2',
      titulo: 'Plan de gestión de un SGSI',
      desarrolloContenidos: true,
    },
    {
      nombreRuta: 'tema3',
      icono: 'far fa-file-alt',
      numero: '3',
      titulo: 'Definir el alcance del SGSI',
      desarrolloContenidos: true,
    },
    {
      nombreRuta: 'tema4',
      icono: 'far fa-file-alt',
      numero: '4',
      titulo: 'Política de Seguridad',
      desarrolloContenidos: true,
    },
    {
      nombreRuta: 'tema5',
      icono: 'far fa-file-alt',
      numero: '5',
      titulo: 'Diseño del SGSI',
      desarrolloContenidos: true,
    },
    {
      nombreRuta: 'tema6',
      icono: 'far fa-file-alt',
      numero: '6',
      titulo: 'Auditoria al SGSI',
      desarrolloContenidos: true,
    },
    {
      nombreRuta: 'tema7',
      icono: 'far fa-file-alt',
      numero: '7',
      titulo:
        'Consideraciones para la implantación de un SGSI (Norma ISO 27001)',
      desarrolloContenidos: true,
    },
  ],
  subMenu: [
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
}

export const creditos = {
  liderEquipo: {
    nombre: 'Maria Camila Garcia Santamaria',
    cargo: 'Líder del equipo',
  },
  contenidoInstruccional: [
    {
      nombre: 'Gloria Matilde Lee Mejía',
      cargo: 'Responsable del equipo',
      centro: 'Centro de Comercio y Servicios',
      regional: 'Regional Tolima',
    },
    {
      nombre: 'Rafael Neftalí Lizcano Reyes',
      cargo: 'Asesor pedagógico',
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: 'Henry Eduardo Bastidas Paruma',
      cargo: 'Asesor metodológico y pedagógico',
      centro: 'Centro Industrial Del Diseño Y La Manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: 'Henry Eduardo Bastidas Paruma',
      cargo: 'Experto temático',
      centro: 'Centro de comercio y servicios',
      regional: 'Regional Tolima',
    },
    {
      nombre: 'Carlos Andrés Rodríguez',
      cargo: 'Diseñador instruccional',
      centro: 'Centro de Diseño y Metrología',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'Oscar Absalón Guevara',
      cargo: 'Diseñador instruccional',
      centro: 'Centro de Diseño y Metrología',
      regional: 'Regional Distrito Capital',
    },
    {
      nombre: 'María Isabel Román Rueda',
      cargo: 'Revisora de estilo',
      centro: 'Centro Industrial Del Diseño Y La Manufactura',
      regional: 'Regional Santander',
    },
  ],
  desarrolloProducto: [
    {
      nombre: 'Francisco José Lizcano Reyes',
      cargo: 'Responsable del equipo',
    },
    {
      nombre: 'Leyson Fabian Castaño Perez',
      cargo: 'Soporte organizacional',
    },
    {
      nombre: [
        'Eulises Orduz Amezquita',
        'José Jaime Luis Tang Pinzón',
        'Maria Camila Ovalle Ospina',
        'Lady Adriana Ariza Luque',
        'Oleg Litvin',
        'Wilson Andres Arenales Cáceres',
      ],
      cargo: 'Diseño web y Producción Audiovisual',
    },
    {
      nombre: ['Daniel Ricardo Mutis Gómez', 'Lizeth Karina Manchego Suarez'],
      cargo: 'Desarrollo Front-End',
    },
    {
      centro: 'Centro Industrial del Diseño y la Manufactura',
      regional: 'Regional Santander',
    },
    {
      nombre: 'Jhon Jairo Urueta Alvarez',
      cargo: 'Desarrollo Front-End',
      centro: 'Centro de Comercio y Servicios',
      regional: 'Regional Tolima',
    },
  ],
  gestoresRepositorio: [
    {
      nombre: 'Milady Tatiana Villamil Castellanos',
      cargo: ['Validación de recursos'],
      centro: 'Centro de comercio y servicios',
      regional: 'Regional Tolima',
    },
  ],
}

export const referencias = [
  {
    referencia:
      'Ascanio, J. G. A., Trillos, R. A. B., & Bautista, D. W. R. (2015). Implantación de un sistema de gestión de seguridad de información bajo la ISO 27001: análisis del riesgo de la información.',
    link:
      'https://revistas.udistrital.edu.co/index.php/Tecnura/article/download/9551/10782',
  },
  {
    referencia:
      'Baldecchi Q., R. (2014). Implementación efectiva de un SGSI ISO 27001. Academia.',
    link:
      'https://www.academia.edu/26325423/Implementaci%C3%B3n_efectiva_de_un_SGSI_ISO_27001',
  },
  {
    referencia:
      'Nieves, A. C. (2017). Diseño de un sistema de gestión de la seguridad de la información (SGSI) basados en la norma Iso/iec 27001: 2013.',
    link:
      'https://alejandria.poligran.edu.co/bitstream/handle/10823/994/Trabajo%20Final.pdf?sequence=1&isAllowed=y',
  },
  {
    referencia:
      'SGSI - 08 Análisis y valoración de riesgos. Metodologías. (2010, 12 mayo). [Vídeo]. YouTube.',
    link: 'https://www.youtube.com/watch?v=g7EPuzN5Awg',
  },
]

export const glosario = [
  {
    termino: 'Deming',
    significado:
      'es igualmente designado ciclo PDCA, por sus siglas en inglés de las etapas Plan, Do, Check y Act. De igual manera, se le conoce como espiral de mejora continua o ciclo PHVA, debido a la versión en español de sus ciclos Planificar, Hacer, Verificar y Actuar.',
  },
  {
    termino: 'ISO',
    significado: 'Organización de estándares internacionales.',
  },
  {
    termino: 'Norma ISO',
    significado:
      'las normas ISO son pliegos que detallan requerimientos que pueden ser empleados en organizaciones para garantizar que los productos y/o servicios ofrecidos por dichas organizaciones cumplan su objetivo.',
  },
  {
    termino: 'SOA',
    significado: 'Declaración de aplicabilidad.',
  },
  {
    termino: 'SGSI',
    significado: 'Sistema de Gestión de Seguridad de la Información.',
  },
]

export const complementario = [
  {
    texto: 'Implantación de un SGSI”',
    tipo: 'Video',
    link: 'https://youtu.be/i_3z68QGaJs',
  },
]
