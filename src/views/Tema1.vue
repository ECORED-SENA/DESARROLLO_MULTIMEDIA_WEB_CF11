<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 Entornos y herramientas de codificación para el desarrollo de proyectos #[em web]

    .row.justify-content-center
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade")
        p.mb-0 Entendiendo la codificación y sus capacidades, se puede definir un entorno de desarrollo como el conjunto de elementos, herramientas, leyes y procedimientos para desarrollar un código donde implementar los códigos y caracteres. Para su implementación, es importante conocer desde los entornos de desarrollo hasta los diferentes fundamentos de programación, tal como se observará a continuación.
      .col-lg-5(data-aos="zoom-in")
        .bg--mint.p-4
          figure
            img(src="@/assets/curso/temas/t1/t1_01.svg", alt="alt")

    separador

    #t_1_1.titulo-segundo.color-acento-botones(data-aos="fade")
      h2 1.1 Entorno de desarrollo

    p(data-aos="fade").mb-5 Este término se puede percibir como un #[span.bold.clr--blue Entorno de Desarrollo Integrado (IDE)] que es una herramienta de desarrollo, utilizada para escribir, probar y perfeccionar un programa, proporcionando a los desarrolladores interfaces y herramientas comunes al momento de trabajar y desarrollar.

    .row.justify-content-center.mb-5
      .col-lg-4(data-aos="zoom-in")
        .bg--mint.p-4.hg-100
          figure.vp-50
            img(src="@/assets/curso/temas/t1/t1_02.png", alt="alt")
      .col-lg-8(data-aos="fade")
        .bg--paleYellow.p-4.hg-100
          p.mb-0 Al momento de elegir un entorno es fundamental conocer el lenguaje con el cual se definirá la programación, tanto en la parte visible o #[em Frontend], como en la parte oscura y escondida, conocida como #[em Backend]. Normalmente el desarrollo de entornos tiene tres niveles, que se clasifican como desarrollo, integración y producción, generalmente conocidos como DSP y que se explican a continuación:

    .bg_img_04.mb-5
      .row.justify-content-center
        .col-lg-10
          .row.justify-content-center
            .col-lg-4.mb-4.mb-lg-0(data-aos="flip-left")
              .bg--blue.p-4.brad_02.hg-100
                figure.mb-4
                  img(src="@/assets/curso/temas/t1/t1_03.svg", alt="alt").img90.m-auto
                h3.text-white Servidor de desarrollo
                p.text-white Aquí es donde se prueba el código y se comprueba si su ejecución es correcta; una vez que esté avalado y se considera que trabaja de manera correcta, avanza a la siguiente fase.
            .col-lg-4.mb-4.mb-lg-0(data-aos="flip-left")
              .bg--blue.p-4.brad_02.hg-100
                figure.mb-4
                  img(src="@/assets/curso/temas/t1/t1_04.svg", alt="alt").img90.m-auto
                h3.text-white Servidor de montaje
                p.text-white Aquí se hacen las pruebas necesarias tanto de código como de estilo, se comprueban servidores y se asegura que no exista alguna falla, al momento de pasarlo o subirlo a una producción real. Estas pruebas en servidores son el paso anterior al momento de subirlo a un servidor, con el fin de que sea aprobada y no vaya a tener problemas en su ejecución.
            .col-lg-4.mb-4.mb-lg-0(data-aos="flip-left")
              .bg--blue.p-4.brad_02.hg-100
                figure.mb-4
                  img(src="@/assets/curso/temas/t1/t1_05.svg", alt="alt").img90.m-auto
                h3.text-white Servidor de producción
                p.text-white Una vez pasado por las pruebas y dada la aprobación final, este se convierte en parte de ese servidor.

    p(data-aos="fade").mb-5 Los anteriores entornos deben cumplir características básicas para que sean atractivas para los usuarios, al igual que facilitar los procesos de programación, permitiendo entornos fáciles para trabajar. 

    .bg_mint_full.pb-5
      h5(data-aos="fade").text-center.py-5 Algunos de los lenguajes de programación más conocidos y usados son:

      TabsC.color-primario(data-aos="fade")
        .py-3.py-md-4(titulo="Visual Basic")
          .row.justify-content-around.py-4.px-4.px-lg-0
            .col-lg-3.col-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/t1/t1_06.png', alt='')
            .col-lg-7
              h4 Visual Basic
              p #[em Beginner’s All- purpose Symbolic Instruction Code] (código simbólico de instrucciones de propósito general para principiantes), es una familia de lenguajes imperativos de alto nivel, aparecidos por primera vez en 1964. Su versión más actual es Visual Basic .NET.

        .py-3.py-md-4(titulo="Cobol")
          .row.justify-content-around.py-4.px-4.px-lg-0
            .col-lg-3.col-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/t1/t1_07.png', alt='')
            .col-lg-7
              h4 Cobol
              p Su nombre es un acrónimo para #[em Common Business-Oriented Lenguage] (lenguaje común orientado a los negocios), se trata de un lenguaje de programación universal creado en 1959, orientado principalmente a la informática de gestión; es decir, empresarial.

        .py-3.py-md-4(titulo="Fortran")
          .row.justify-content-around.py-4.px-4.px-lg-0
            .col-lg-3.col-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/t1/t1_08.png', alt='')
            .col-lg-7
              h4 Fortran
              p Su nombre proviene de The IBM #[em Mathematical Formula Translating System] (sistema de traducción de fórmulas matemáticas de IBM),  es un lenguaje de programación de alto nivel, propósito general y de tipo imperativo, diseñado para aplicaciones científicas y de ingeniería.

        .py-3.py-md-4(titulo="Java")
          .row.justify-content-around.py-4.px-4.px-lg-0
            .col-lg-3.col-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/t1/t1_09.png', alt='')
            .col-lg-7
              h4 Java
              p Un lenguaje de programación de propósito general, orientado a objetos, cuyo espíritu se resume en las siglas WORA: #[em Written Once, Run Anywhere,] es decir: escrito una vez, funciona en cualquier parte. La idea era diseñar un lenguaje universal empleando sintaxis derivada de los lenguajes C y C++, pero empleando menos utilidades de bajo nivel que cualquiera de ambos.

        .py-3.py-md-4(titulo="JavaScript")
          .row.justify-content-around.py-4.px-4.px-lg-0
            .col-lg-3.col-4.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/temas/t1/t1_10.png', alt='')
            .col-lg-7
              h4 JavaScript
              p Lenguaje de programación utilizado para crear “pequeños programas” dentro de una página #[em web], permite crear pequeños #[em scripts] orientados a objetos, es decir que sus funciones y su interacción está basada en crear líneas de código que realizan tareas específicas y estructuras complejas, de la mano de una sintaxis definida, que son las reglas que debe seguirse al momento de escribir código. 
              p Una de las características del código JavaScript es que sus etiquetas deben cerrarse:
              figure
                img(src='@/assets/curso/temas/t1/t1_10A.svg', alt='').img200

    separador

    #t_1_2.titulo-segundo.color-acento-botones(data-aos="fade")
      h2 1.2 Entorno de ejecución multiplataforma

    p(data-aos="fade").mb-4 Es uno de los tantos atributos que tienen y permiten los programas y aplicaciones que hay actualmente en el mercado y el concepto básicamente consiste en implementar y operar en múltiples plataformas informáticas el #[em software] o aplicaciones que se crean.

    .row.justify-content-center.mb-4
      .col-lg-7.mb-4.mb-lg-0
        .row.align-items-center
          .col-auto(data-aos="zoom-in")
            figure
              img(src="@/assets/curso/temas/recursos/square_00.svg", alt="alt").img65
          .col(data-aos="fade")
            p.mb-0 Una plataforma es una combinación de #[em software] y #[em hardware] que ejecuta una aplicación. Se pueden conocer las plataformas como los sistemas operativos donde van las acciones de los comandos; sin embargo, los dispositivos móviles también pueden ser reconocidos como tal.
      .col-lg-5(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t1/t1_11.png", alt="alt")

    p(data-aos="fade") Una plataforma de #[em hardware] podría referirse a la CPU del ordenador y estas pueden ejecutar versiones y sistemas operativos como #[span.clr--blue.bold Windows, Linux, MacOS,] etc., cuando se refiere a los teléfonos móviles podemos referirnos a sistemas como #[span.clr--blue.bold Windows, Android e iOS].

    p(data-aos="fade").bold.mb-5 Dentro de las plataformas de #[em software] más comunes se puede encontrar: 

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-8
        figure
          img(src="@/assets/curso/temas/t1/t1_11A.png", alt="alt")


    p(data-aos="fade") #[span.hglt--mint Para que se pueda considerar multiplataforma, el #[em software] debe ser capaz de funcionar en más de un sistema operativo,] el inconveniente es que cada sistema tiene diferentes interfaces y así diferentes lenguajes, lo que hace que sea desgastante. Pensar en un determinado sistema operativo que sea ejecutable en cualquier #[em hardware] y que funcione correctamente en todas las arquitecturas posibles requiere que el #[em script] funcione en todos los sistemas operativos, por eso la importancia que el código sea leído por los diversos navegadores y sea funcional en más de una plataforma.

    .row.justify-content-center.mb-4
      .col-lg-4(data-aos="zoom-in")       
        figure.vp-50
          img(src="@/assets/curso/temas/t1/t1_12.jpg", alt="alt")
      .col-lg-8(data-aos="zoom-in")
        .bg--paleBlue.p-4.hg-100
          p.mb-0 Abordar los problemas que puede llevar la programación multimedia, van desde crear varias versiones para el mismo programa, hasta utilizar aplicaciones que ayudarán a adaptar el código a las plataformas o aplicaciones finales; dependerá mucho de la capacidad de costos, el tiempo para su desarrollo y de los enfoques que se vayan a solucionar al momento de construir código. Cabe resaltar que lo más importante para todas las versiones es reducir a cero los errores, por lo que se debe tener presente la corrección en cada una de las plataformas escogidas. 

    p(data-aos="fade").mb-5 Depender de algún #[em software] que permita encontrar esos problemas existentes entre las diferencias de las plataformas o utilizar aplicaciones que permitan construir y ejemplificar la construcción ayudan al momento de visualizar, serán herramientas que permitirán ahorrar tiempo al momento de solucionar y reconstruir el código. Aquí se relacionan algunas que pueden ser poderosas herramientas para el desarrollo en multiplataforma.

    .row.justify-content-center.mb-5(data-aos="fade")
       SlyderF.cstmSlyderF(columnas="col-lg-6 col-xl-4")
        .crd.crd--blue.hg-100         
          h4 El Cairo
          p.mb-0 Un #[em software] libre, que se utiliza para proporcionar un vector basado en gráficos, independiente del API del dispositivo, posee enlaces para muchos lenguajes de programación.

        .crd.crd--blue.hg-100         
          h4 Eclipse
          p.mb-0 Entorno de desarrollo multiplataforma y de código abierto. Funciona en Java con arquitectura que permite configurar diferentes elementos, y soporta herramientas para el desarrollo de #[em software]. Complementos con Java y C++.

        .crd.crd--blue.hg-100         
          h4 FLTK
          p.mb-0 Otro código abierto multiplataforma. Kit de herramientas, pero más ligero, ya que se limita a la GUI.

        .crd.crd--blue.hg-100         
          h4 fpGUI 
          p.mb-0 Un conjunto de herramientas de fuente abierta tipo #[em widget], implementado en Object Pascal.

        .crd.crd--blue.hg-100         
          h4 GeneXus 
          p.mb-0 En Windows es una solución rápida de desarrollo de #[em software] para la creación de aplicaciones multiplataforma y de despliegue basado en la representación del conocimiento y el apoyo a C#, Cobol, Java incluyendo Android y BlackBerry dispositivos inteligentes, Objective-C para el de Apple dispositivos móviles, RPG, Ruby, Visual Basic y Visual FoxPro.

        .crd.crd--blue.hg-100         
          h4 GTK+
          p.mb-0 Un conjunto de herramientas de código abierto para el #[em widget] de sistemas tipo Unix con X11 y Microsoft Windows.

        .crd.crd--blue.hg-100         
          h4 haXe
          p.mb-0 Un lenguaje multiplataforma de código abierto.

        .crd.crd--blue.hg-100         
          h4 Juce
          p.mb-0 Un #[em framework] de aplicaciones escritas en C++, que se utiliza para escribir #[em software] nativo en numerosos sistemas, sin cambios en el código.

        .crd.crd--blue.hg-100         
          h4 Max/MSP
          p.mb-0 Un lenguaje de programación #[em Visual] que encapsula independiente de la plataforma del código con un entorno de ejecución específico de la plataforma en las aplicaciones para Mac OS X y Windows.

        .crd.crd--blue.hg-100         
          h4 Mono
          p.mb-0 Un marco multiplataforma para las aplicaciones y lenguajes de programación.

        .crd.crd--blue.hg-100         
          h4 Monocross
          p.mb-0 Es una fuente abierta del patrón de diseño modelo-vista-controlador en el que se comparten el modelo y el controlador multiplataforma, pero la vista es específica de la plataforma.

        .crd.crd--blue.hg-100         
          h4 MoSync
          p.mb-0 Es un SDK de código abierto para el desarrollo de aplicaciones móviles en la plataforma C++ familia.

        .crd.crd--blue.hg-100         
          h4 #[em Framework] de la aplicación Mozilla
          p.mb-0 Una plataforma de código abierto para el desarrollo de Mac OS X, las aplicaciones de Windows y Linux.

        .crd.crd--blue.hg-100         
          h4 OpenGL
          p.mb-0 Una biblioteca multiplataforma de gráficos 3D.

        .crd.crd--blue.hg-100         
          h4 Qt #[em (toolkit)]
          p.mb-0 Una estructura de aplicaciones y #[em Widget Toolkit] para sistemas Unix con X11, Microsoft Windows, Mac OS X, disponible tanto en código abierto y como para licencias propietarias.

        .crd.crd--blue.hg-100         
          h4 Real Studio
          p.mb-0 Un IDE RAD desarrollado por Real #[em Software], utiliza un dialecto orientado a objetos del lenguaje de programación BASIC, y produce binarios compilados para MacOS X, Windows y Linux, como también, ser capaz de producir CGI aplicaciones basadas en #[em web].

        .crd.crd--blue.hg-100         
          h4 Simple DirectMedia Layer
          p.mb-0 Una librería de multimedia multiplataforma de código abierto, escrita en C que proporciona acceso de nivel bajo y alto a los gráficos, de entrada, audio, etc.

        .crd.crd--blue.hg-100         
          h4 Plataforma Smartface
          p.mb-0 Una herramienta multiplataforma para Windows que se usa para crear aplicaciones móviles para J2ME, Symbian S60, Blackberry y Android, usando herramientas de arrastrar y soltar y edición de acciones.

        .crd.crd--blue.hg-100         
          h4 Ultimate++
          p.mb-0 Es un marco de desarrollo rápido de aplicaciones multiplataforma de C++ centrado en la productividad de los programadores. Incluye un conjunto de bibliotecas de usuario (GUI, SQL, etc.), Y un entorno de desarrollo integrado. Tiene su propio entorno de desarrollo integrado.

        .crd.crd--blue.hg-100         
          h4 wxWidgets
          p.mb-0 Es una biblioteca de C++ que permite a los desarrolladores crear aplicaciones para Windows, macOS, Linux y otras plataformas con una única base de código. Tiene enlaces de lenguaje populares para Python , Perl , Ruby y muchos otros lenguajes y, a diferencia de otros kits de herramientas multiplataforma, wxWidgets brinda a las aplicaciones una apariencia verdaderamente nativa porque utiliza la API nativa de la plataforma en lugar de emular la GUI. También es extenso, gratuito, de código abierto y maduro.

        .crd.crd--blue.hg-100         
          h4 XPower++
          p.mb-0 Es un IDE multiplataforma para Windows, Linux, Mac OS X y sistemas operativos móviles.

    p Dada la complejidad y la cantidad de plataformas se pueden presentar errores los cuales a medida del tiempo se irán depurando, lo importante es construir las características más importantes y relevantes para después transformar los sutiles detalles que ayudarán a que el rendimiento no se vea afectado.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8(data-aos="fade")          
        p Dentro de las herramientas para el desarrollo en multiplataforma se encuentra #[span.clr--blue.bold Adobe AIR], una de las aplicaciones de la familia Adobe compatible con cualquier sistema operativo y una de las mejores al momento de construir y crear aplicaciones de escritorio a partir del desarrollo de páginas #[em web] en #[span.clr--blue.bold HTML, JAVA, AJAX,] etc., siendo una de sus características la generación de sus aplicaciones en plataforma multimedia; es decir, lo creado en esta aplicación podrá ser utilizado en cualquier sistema operativo, teniendo en cuenta que:
      .col-lg-4.col-8(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t1/t1_13.png", alt="alt")

    .row.justify-content-center.mb-4(data-aos="zoom-in")
      .col-lg-10
        .cajon.cjn--mint.p-4
          ul.fa-ul.mb-0
            li
              i.fa-li.fas.fa-check.clr--orange
              | Permite al usuario crear su propia aplicación de escritorio de una manera fácil, sencilla y rápida.
            li
              i.fa-li.fas.fa-check.clr--orange
              | Todos los programas creados tienen opción de ser multiplataforma.
            li
              i.fa-li.fas.fa-check.clr--orange
              | Se encuentra disponible tanto para los dispositivos móviles inteligente. Sin importar qué sistema operativo esté utilizando el mismo.

    p(data-aos="fade").mb-4 #[span.clr--blue.bold AIR es un programa que establece flujos de trabajo compuestos por codificación y compilados en archivos instaladores], su facilidad en la aplicación de lenguajes y formatos permite un flujo más constante y permite detectar errores en los procesos, estos procesos de depurado y solución de errores siguen una serie de lineamientos que permite realizar procesos más correctos; es un programa que trabaja de la mano con sus hermanos de la familia Adobe. En general, la creación de las aplicaciones será más eficiente usando las herramientas que proporcionen herramientas a los desarrolladores, para encontrar el sistema y el SDK adecuado, de no ser así la eficiencia de los resultados finales se verán afectados, como trabaja ejecutando la #[em web] como una aplicación de escritorio, la posibilidad de trabajar sin internet hace que compañías importantes hayan optado hacer uso de esta posibilidad. 

    .row.justify-content-center.mb-5
      .col-lg-6(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t1/t1_14.jpg", alt="alt")

    .tarjeta.color-secundario.p-3.mb-5(data-aos="zoom-in") 
      .row.justify-content-around.align-items-center
        .col-auto
          img(src="@/assets/curso/temas/recursos/cta_02.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Adobe Air
              p.mb-0 A Continuación lo invitamos a consultar un video introductorio sobre el uso de  Adobe Air.
            .col-sm-auto
              a.boton.color-acento-botones.px-4(href="https://www.youtube.com/watch?v=v_p6frCZBkA" target="_blank")
                span.clr--base ver 
                i.clr--base.fas.fa-link

    separador 

    #t_1_3.titulo-segundo.color-acento-botones(data-aos="fade")
      h2 1.3 Kit de Desarrollo de #[em Software] - SDK 

    .row.justify-content-center.mb-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="zoom-in")        
        figure
          img(src="@/assets/curso/temas/t1/t1_15.png", alt="alt")
      .col-lg-7(data-aos="fade")
        p #[span.clr--blue.bold Es una herramienta que permite a los programadores desarrollar programas en lenguajes y programas en concreto para una aplicación determinada.] Son elementos que son desarrollados con lenguajes originales para determinados #[em software] en cuestión, por lo que la mayoría son de uso gratuito.
        p El desarrollo de un SDK varía dependiendo el fabricante, el lenguaje específico y un sistema operativo dada su finalidad; #[span.clr--blue.bold un SDK viene provisto de muchas herramientas y ventajas dependiendo la necesidad,] pero se puede estandarizar que casi todos los SDK deberían tener presentes algunos elementos como los API, una clara documentación de lo que se encontrará en cada SDK: para qué sirve, ventajas y desventajas, etc.; las herramientas de prueba y análisis para la depuración y compilación de sus códigos; editores, bibliotecas y sistemas de tiempos de ejecución, sus entornos de desarrollo, protocolos y los controladores necesarios son los elementos básicos, los cuales son procesos bases para facilitar el trabajo de desarrolladores.

    .grad_01.mb-5
      .row.justify-content-center.pt-4
        .col-lg-10(data-aos="fade")
          p.mb-4 Dado que son herramientas de desarrollo gratuitas es importante que los desarrolladores que las utilicen se comprometan a tener claras unas normas para que sea más sencillo el uso de estas. En el desarrollo de aplicaciones se encontrarán muchas SDK con diferentes licencias de uso. #[strong Es importante tener en cuenta esta información al momento de trabajar con SDK y lo siguiente:]

          .bg--mint.p-4.mb-4(data-aos="zoom-in")
            .row
              .col-auto
                figure
                  img(src="@/assets/curso/temas/t1/t1_16.svg", alt="alt").im90
              .col
                ul.fa-ul.mb-0
                  li
                    i.fa-li.fas.fa-check.clr--orange
                    | Si un SDK tiene licencia de propiedad, no será apropiado para el desarrollo de #[em software] de código abierto.
                  li
                    i.fa-li.fas.fa-check.clr--orange
                    | Si un SDK tiene una licencia tipo GPL, no será apropiado para el desarrollo de aplicaciones de propiedad.
                  li
                    i.fa-li.fas.fa-check.clr--orange
                    | Si un SDK tiene una licencia tipo GPL, se podría usar partes del código de propiedad, pero el usuario final debe poder modificar la parte del código abierto

      p(data-aos="fade") Todas estas aplicaciones de código abierto se están desarrollando continuamente gracias a los kits de desarrollo, los cuales ayudan a programar nuevas funcionalidades para compartirlas a nivel global con otros programadores. #[strong Sobre ello, se debe conocer lo siguiente:]

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/NQyMBquqZzw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p(data-aos="fade").mb-5 #[strong Además de los kits de desarrollo de #[em software] anteriores, se encuentran otros con mayores especificaciones para la programación:]

    TabsB.color-primario(data-aos="fade")
      .py-4.py-md-5(titulo="Vuforia" :icono="require('@/assets/curso/temas/t1/t1_17.svg')")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Vuforia
            p.mb-0 Es un SDK de realidad aumentada, en su gran porcentaje para dispositivos móviles para la creación de aplicaciones multiplataforma, gracias a Unity, permite crear juegos y apps para iOS y Android, usa imágenes y mezcla la realidad aumentada y la realidad virtual; trabaja con diferentes tipos de imágenes u objetos transformándolos en marcadores, los más simples y comunes en todos los juegos y aplicaciones es un objetivo de imagen.        
          .col-lg-6.col-8
            figure
              img(src="@/assets/curso/temas/t1/t1_20.svg", alt="alt")

      .py-4.py-md-5(titulo="Layar" :icono="require('@/assets/curso/temas/t1/t1_18.svg')")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h4 Layar
            p Otro SDK de realidad aumentada, siendo uno de los pioneros y líderes en ofrecer este desarrollo de #[em software] de este tipo de contenido; a su vez, es una creadora de contenido interactivo, dado que se puede trabajar con soportes interactivos, #[em flyers] y demás contenido multimedia como videos, imágenes y música.
            p.mb-0 Permite analizar resultados con sus herramientas de estadísticas, los cuales permiten conocer el número de personas que ingresan e interactúan, el tiempo, su ubicación, etc. Como la mayoría de SDK trabajan en conjunto, Layar, utiliza herramientas como las que ofrece Blippar, que es una herramienta para crear contenido de realidad aumentada sin necesidad de código.       
          .col-lg-6.col-8
            figure
              img(src="@/assets/curso/temas/t1/t1_21.png", alt="alt")

      .py-4.py-md-5(titulo="ARToolKit" :icono="require('@/assets/curso/temas/t1/t1_19.svg')")
        .row.justify-content-center
          .col-lg-6.mb-4.mb-lg-0
            h4 ARToolKit
            p ARToolKit permite superponer imágenes virtuales digitalizadas en el mundo real para crear programas y aplicaciones que se pueden visualizar en diferentes dispositivos de RA y RV; en pocas palabras, este SDK calcula en tiempo real un punto en una ubicación y una referencia de geolocalización; es decir, un marcador específico y su desplazamiento por el mundo.
            p.mb-0 Utiliza su infinidad de bibliotecas para realizar algoritmos que resuelven problemas como calcular posiciones, orientaciones de cámara, y desarrollo de elementos de RA. Dentro de sus múltiples características está su trabajo multiplataforma, su marcado cuadro a cuadro y sus bibliotecas de códigos de fuente a código abierto con licencia para uso no comercial.       
          .col-lg-6.col-8
            figure
              img(src="@/assets/curso/temas/t1/t1_22.png", alt="alt")

    separador

    #t_1_4.titulo-segundo.color-acento-botones(data-aos="fade")
      h2 1.4 Lenguajes de programación

    .bloque-texto-g.bg--darkMint.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/t1/t1_22.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los lenguajes están presentes en todas partes y en todas las máquinas que nos acompañan día a día y comprenden lenguajes diseñados para que todas las máquinas y computadoras puedan entender idiomas que puedan comprender entre ellas. Para esto se crea el lenguaje binario del que hemos venido tratando en diferentes temas, dado que estos lenguajes se encargan de convertir funciones e instrucciones en un lenguaje de ceros (0) y unos (1) para que puedan entenderse e interpretarse.

    p(data-aos="fade").mb-5 Existen altos y bajos cuando nos referimos a los lenguajes de programación, permitiendo que se logren acciones con pocas palabras al hacer lo mismo que se logra con un lenguaje de bajo nivel. #[strong A continuación, conocerán un poco más de la temática:]

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/QpaLtzMsIFw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)        

    .row.justify-content-center.align-items-center
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade")
        .bg--paleBlue.p-4
          p.mb-0 En los lenguajes de Alto Nivel podemos encontrar a los lenguajes de mayor uso, como los son C++, el Java y el Python, lenguajes que desde la década de 1980 han sido los lenguajes más completos y los más usados por desarrolladores, permitiendo códigos más legibles y más fáciles al momento de su escritura y construcción.
      .col-lg-5(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t1/t1_23.jpg", alt="alt")

    p(data-aos="fade").mb-5 #[strong Se pueden agrupar a los lenguajes en diferentes niveles, que son lenguajes orientados a máquinas y la relación que existe entre el #[em hardware] y el #[em software]. Tal como se explica a continuación:]

    .row.justify-content-center.mb-5
      .col-lg-10
        .bg--paleBlue.brad_02.p-4.pb-5
          h3(data-aos="fade").text-center.mt-4.mb-5 Niveles lenguaje de programación
          .row.justify-content-center
            .col-lg-10.mb-4(data-aos="zoom-in")           
              .bg--halfBlue.brad_top.bg--half.half_bottom
                figure
                  img(src="@/assets/curso/temas/t1/t1_24.svg", alt="alt").img200.m-auto
              .bg--paleBlue02.p-4
                p #[strong Lenguaje máquina:] 
                p.mb-0 Es el más primitivo, es la colección de dígitos binarios (0 - 1) y son los únicos que las máquinas o computadoras entienden.
              .bg--halfBlue.brad_bottom.bg--half.half_top
                .row.justify-content-center
                  .col-auto
                    .bg--blue.p-4.brad_03
                      p.text-white.bold.mb-0 Código Binario: 100011100111 1001 1001 1101

            .col-lg-10.mb-4(data-aos="zoom-in")            
              .bg--halfBlue.brad_top.bg--half.half_bottom
                figure
                  img(src="@/assets/curso/temas/t1/t1_25.png", alt="alt").img200.m-auto
              .bg--paleBlue02.p-4
                p #[strong Lenguaje ensamblador:] 
                p.mb-0 Revisando el ejemplo anterior no podemos entender ni interpretar nada del código binario, por eso existe este primer paso que es como un humano o programador recibe esa información y la expresa en un idioma más utilizado por los humanos. 
              .bg--halfBlue.brad_bottom.bg--half.half_top
                .row.justify-content-center
                  .col-auto
                    .bg--blue.p-4.brad_03
                      p.text-white.bold.mb-0 MOV AL, 61h (asigna el valor hexadecimal 61 al registro &#60;&#60;AL&#62;&#62;)

            .col-lg-10(data-aos="zoom-in")            
              .bg--halfBlue.brad_top.bg--half.half_bottom
                figure
                  img(src="@/assets/curso/temas/t1/t1_25.png", alt="alt").img200.m-auto
              .bg--paleBlue02.p-4.brad_bottom_01
                p #[strong Lenguaje de alto nivel:] 
                p.mb-0 Este lenguaje permite escribir códigos que sirven para ser ejecutados en idiomas como inglés y español, y son traducidos mediante “traductores o compiladores”; el traductor utiliza el lenguaje de programación, traduciéndola en lenguaje para máquinas y los ejecuta al final.           


    p(data-aos="fade").mb-4 #[span.hglt--mint La finalidad y funcionalidad de los lenguajes es el programar; sin embargo, la diferencia es que cada uno tiene un alcance y una forma de comunicación diferentes], algo así como hablar inglés o francés o alemán. Se puede definir que el lenguaje de bajo nivel permite una comunicación con la máquina entendiendo sus códigos de operación y el lenguaje de alto nivel, es introducir datos y códigos en el lenguaje de las máquinas para facilitar instrucciones que se le dan a las máquinas; bajo nivel es un idioma cercano a las máquinas, un alto nivel es un entendimiento e idioma más humano.

    .row.justify-content-center.mb-5
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade")
        p #[span.clr--blue.bold Comprendiendo esta diferenciación, se entiende que el conjunto de herramientas permite diferentes acciones como crear, escribir, mantener, depurar, etc.]
        p Algunos #[em software] permiten escribir códigos y crearlos, otros simplemente ingresarlos y ejecutarlos, otros optimizan tiempos y monitorean variables, referencian memorias y ayudan a las correcciones de errores de código. Estos lenguajes permiten la comunicación con el #[em software] y acá se indica todo lo que se quiere que una página haga, se vea y realice determinadas acciones. 
      .col-lg-4.col-8(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t1/t1_26.svg", alt="alt")
      .col-lg-1.d-none.d-lg-flex

    .row.justify-content-center
      .col-lg-6.mb-4.mb-lg-0(data-aos="zoom-in")
        .bg--halfMint.p-4
          p.mb-4 Todas las acciones que se vean en una página #[em web] como los botones, los colores, el diseño, las animaciones, el texto, etc.; es información que se debe recopilar en secciones más pequeñas y traducirlas en instrucciones que la máquina pueda entender. 
          .row.justify-content-center
            .col-10
              figure
                img(src="@/assets/curso/temas/t1/t1_27.svg", alt="alt")
      .col-lg-6(data-aos="zoom-in")
        .bg--halfYellow.p-4
          p.mb-4 Todas las acciones que se vean en una página #[em web] como los botones, los colores, el diseño, las animaciones, el texto, etc.; es información que se debe recopilar en secciones más pequeñas y traducirlas en instrucciones que la máquina pueda entender.
          .row.justify-content-center
            .col-10 
              figure
                img(src="@/assets/curso/temas/t1/t1_28.svg", alt="alt")

    p(data-aos="fade").mb-5 HTML y CSS son solo los lenguajes de programación que estructuran las páginas y las informaciones de estilo, dado que HTML era el único que existía en los años 90, pero gracias a otros lenguajes como CSS y JS, estos sitios han venido mejorando. A continuación, se podrán conocer sus características: 

    TabsB.color-primario.mb-5(data-aos="fade")
      .py-4.py-md-5(titulo="HTML (Lenguaje de Marcado de Hipertexto)" :icono="require('@/assets/curso/temas/t1/t1_29.svg')")
        .row
          .col-lg-6.mb-4.mb-lg-0
            h4 HTML (Lenguaje de Marcado de Hipertexto) 
            p Es el núcleo de cada página y es el primer acercamiento que se debe tener como programador, dado que es donde se contendrá toda la información que tiene una página #[em web]; lenguaje de marcado es utilizar etiquetas ya identificadas para ordenar funciones e identificar diferentes tipos de contenido. Estas etiquetas tienen nombres que permiten ubicar fácilmente cada elemento como etiquetas de encabezados, etiquetas de párrafos, etiquetas de imagen y un sin número de etiquetas que identifican cada contenido de una página. 
            p.mb-0 Una vez se genera una etiqueta, se asume que todo el contenido hace parte de esta, hasta que finalmente se cierra. Las etiquetas tienen un contenido de apertura y otro de cierre.

          .col-lg-6
            .bg--paleBlue.p-4.hg-100
              .vp-50
                p.mb-0 #[span.clr--blue.bold &#60;p&#62;]
                p.mb-0.ms-3 #[span.clr--mint.bold “El contenido del párrafo”]
                p #[span.clr--blue.bold &#60;/p&#62;]

                p Donde #[span.clr--blue.bold &#60;p&#62;], representa la apertura de una etiqueta de párrafo inicial; #[span.clr--mint.bold “El contenido del párrafo”] y una etiqueta se cierra al final #[span.clr--blue.bold &#60;/p&#62;].

      .py-4.py-md-5(titulo="CSS" :icono="require('@/assets/curso/temas/t1/t1_30.svg')")
        .row.justify-content-between
          .col-lg-7.mb-4.mb-lg-0
            h4 CSS 
            p Hojas de estilo en cascada, básicamente es un lenguaje de programación que determina cómo deben aparecer los elementos antes mencionados en una página #[em web]. Son una lista de reglas que asignan propiedades a las etiquetas HTML sean específicas, de documento, de diseño, etc.
            p.mb-0 Ambos lenguajes son herramientas complementarias la una a la otra, por una parte uno estructura y el otro diseña el contenido, ambos trabajando de la mano, pero separados, para garantizar el mejor funcionamiento de cada una de las partes. 

          .col-lg-5
            figure
              img(src="@/assets/curso/temas/t1/t1_31.png", alt="alt")

      .py-4.py-md-5(titulo="JavaScript" :icono="require('@/assets/curso/temas/t1/t1_31.svg')")
        .row.justify-content-between
          .col-lg-7.mb-4.mb-lg-0
            h4 JavaScript 
            p Es un lenguaje más avanzado que el HTML y CSS, es compatible con todos los navegadores y gracias a sus características, genera funcionalidades más potentes.
            p.mb-0 JavaScript modifica el contenido de las páginas #[em web] haciendo que se comporten dependiendo las acciones de cada usuario, se podría decir que, gracias a JavaScript, se pueden crear sitios más interactivos.
          .col-lg-5
            figure
              img(src="@/assets/curso/temas/t1/t1_32.png", alt="alt")
            


    p(data-aos="fade").mb-5 Ahora, se relacionan las principales características de los lenguajes:

    .row.justify-content-center
      .col-lg-7.mb-4.mb-lg-0(data-aos="fade")
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Simplicidad")
            .col
              p El lenguaje debe ofrecer conceptos claros y simples que faciliten su aprendizaje y aplicación, de manera que sea sencillo de comprender y mantener. La simplicidad no significa que se le pueda restar el poder óptimo de funcionamiento.
          .row(numero="2" titulo="Naturalidad")
            .col
              p Se refiere a que su aplicación en el área para la que fue diseñado debe hacerse de forma natural, proporcionando operadores, estructuras y sintaxis para que los operadores trabajen eficientemente.
          .row(numero="3" titulo="Abstracción")
            .col
              p Consiste en la capacidad de definir y utilizar estructuras u operaciones complicadas ignorando algunos detalles. Esto influye en la capacidad de escritura.
          .row(numero="4" titulo="Eficiencia")
            .col
              p Los lenguajes de programación deben traducirse y ejecutarse eficientemente para no ocupar demasiado espacio en la memoria ni gastar mucho tiempo.
          .row(numero="5" titulo="Estructuración")
            .col
              p Permite que los programadores escriban sus códigos de acuerdo con los conceptos de programación estructurada, para evitar la creación de errores.
          .row(numero="6" titulo="Compacidad")
            .col
              p Con esta característica es posible expresar las operaciones con concisión, sin tener que escribir demasiados detalles.
          .row(numero="7" titulo="Localidad")
            .col
              p Se refiere a que los códigos se concentran en la parte del programa con la cual se está trabajando en un momento determinado.
      .col-lg-5(data-aos="zoom-in")
        .bg--paleMint.p-4.hg-100
          figure.vp-50
            img(src="@/assets/curso/temas/t1/t1_33.svg", alt="alt")

    separador

    #t_1_5.titulo-segundo.color-acento-botones(data-aos="fade")
      h2 1.5 Fundamentos de programación

    .row.justify-content-center
      .col-lg-5.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t1/t1_34.jpg", alt="alt") 
      .col-lg-7(data-aos="fade")
        p Son las bases comunes a todos los programas; es decir, es lo primero que debe aprender incluso antes de elegir el programa con el que se quiere programar. A continuación, se relacionan algunos conceptos que posibilitará conocer la intención de las programaciones:

        .tarjeta.color-secundario.p-3.mb-5(data-aos="fade") 
            .row.justify-content-around.align-items-center
              .col-auto
                img(src="@/assets/curso/temas/recursos/cta_01.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h3.mb-1 Fundamentos de programación 
                    p.mb-0 Se invita a consultar el siguiente recurso educativo.
                  .col-sm-auto
                    a.boton.color-acento-botones(:href="obtenerLink('/downloads/fundamentosProgramacion.pdf')" target="_blank")
                      span.clr--base Descargar
                      i.clr--base.fas.fa-file-download

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
