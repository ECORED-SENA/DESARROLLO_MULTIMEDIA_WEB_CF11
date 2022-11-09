<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 2
      h1 Herramientas de programación

    .row.justify-content-center.mb-5
      .col-lg-7.order-2.order-lg-1(data-aos="fade")
        p Permiten realizar aplicativos, programas, rutinas, utilitarios y sistemas para que la parte física del computador u ordenador, funcione y pueda producir resultados. Para comprender mejor el tema se dará un recorrido conceptual por herramientas como Unity y #[em FrameWorks], además de las buenas prácticas de programación:
      .col-lg-5.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/t2/t2_01.svg", alt="alt")

    .bg--paleMint.p-4.brad_02.mb-5
      .row.justify-content-center
        .col-lg-10.py-4
          .row.justify-content-center.mb-4
            .col-lg-3.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src="@/assets/curso/temas/t2/t2_02.png", alt="alt")
            .col-lg-9(data-aos="fade")
              p Es un motor de desarrollo para la creación de videojuegos; el término #[em “game engine”] hace referencia a una serie de códigos o rutinas que permiten diseñar y crear entornos interactivos en tiempo real, mediante programación vía código, y editores visuales. Una de las herramientas y de los puntos que sobresalen es la gran comunidad que permiten tener acceso a documentos y un sin número de foros, donde se resuelven dudas y se explican temas de programación y diseño 2D y 3D. 

          .row.justify-content-center.mb-4
            .col-lg-5.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src="@/assets/curso/temas/t2/t2_03.png", alt="alt")
            .col-lg-7(data-aos="fade")
              p Las plataformas de Unity son centros de interacción para artistas y programadores, permitiendo compartir información con otros semejantes; gracias a sus ciclos, permite interacciones y ediciones en tiempo real, permitiendo revisar con vistas previas lo que sucede con el trabajo. 
              p Unity permite acceder a cursos de aprendizaje autoguiados, permitiendo desarrollar micro juegos con plantillas muy sencillas de utilizar, crear con módulos creativos de diferentes juegos, posibles de compartir y aprender las bases de cómo trabajar con Unity. 

          .row.justify-content-center
            .col-12(data-aos="fade")
              p Su motor de trabajo es tal que pueden trabajar un diseñador y un programador sobre un mismo proyecto, desde ubicaciones diferentes, elementos de testeo y funcionalidades sólidas, hacen de Unity una potente herramienta para los diseñadores y programadores de videojuegos; además, cuenta con un amplio sistema de seguridad que protege la propiedad intelectual de toda su comunidad, y gracias a su herramienta multiplataforma se puede compartir en más de veinte sistemas operativos, desde celulares, consolas, realidad virtual y aumentada, páginas #[em web], video, etc.

              p Por último, y no menos importante, las diferentes tecnologías permiten renderizados de última generación y programables que optimizar el rendimiento gracias a su Canal de Renderizado Codificable, lo que permite a los desarrolladores emplear plantillas y herramientas que ofrecen soluciones y resoluciones dignas de #[em software] de última generación. 

    .bg--paleYellow.p-4.brad_02.mb-5
      .row.justify-content-center
        .col-lg-10.py-4
          h5(data-aos="fade") #[em Framework]
          p(data-aos="fade") Un #[em framework] es una plantilla que cuenta con mucha información como herramientas, guías y diferentes componentes y ayudan a agilizar procesos, un #[em framework] es una herramienta que guiará y conducirá en gran parte el proceso o proyecto, y que se basará las estructuras que se utilizarán en cada proyecto. Trabajan como elementos clave que ahorrarán tiempo en la construcción de código básico y que ya está construido en otros proyectos, construyendo aplicaciones rápidas y sólidas, entendiendo que para su utilización se debe conocer qué elementos trabaja, qué lenguajes, etc., para así hacer más sencillo su funcionalidad, ya que no vale la pena aventurarse en cualquier #[em framework] por que sí.

          p(data-aos="fade").mb-5 Dada a la facilidad de trabajo poseen gran documentación y una comunidad siempre activa a buscar soluciones a los problemas, ya que disponen de grandes foros donde desarrolladores ayudan a solucionar y corregir los #[em framework] más utilizados, esto permite que se reduzca cada vez más la incidencia de los errores y a su vez crear un código cada vez más estable y estándar, existe una gran lista que cabe la pena conocer, así que dejamos una lista de información importante al momento de trabajar con ellos.
          
          .row.justify-content-center
            .col-lg-9
              .bg--white.p-4.brad_02(data-aos="zoom-in")
                .row.justify-content-center
                  .col-lg-6.mb-4.mb-lg-0
                    h5 #[em Frameworks: Front-end]
                    ul.fa-ul.mb-4
                      li
                        i.fa-li.fas.fa-check.clr--orange
                        | Bootstrap.
                      li
                        i.fa-li.fas.fa-check.clr--orange
                        | Foundation.
                      li
                        i.fa-li.fas.fa-check.clr--orange
                        | Materialize.

                    h5 #[em Frameworks: en JavaScript]
                    ul.fa-ul.mb-0
                      li
                        i.fa-li.fas.fa-check.clr--orange
                        |  Angular.
                      li
                        i.fa-li.fas.fa-check.clr--orange
                        |  Vue.js. 

                  .col-lg-6
                    h5 #[em Frameworks: Back-end]
                    ul.fa-ul.mb-4
                      li
                        i.fa-li.fas.fa-check.clr--orange
                        | Laravel, para PHP.
                      li
                        i.fa-li.fas.fa-check.clr--orange
                        | CodeIgniter, para PHP.
                      li
                        i.fa-li.fas.fa-check.clr--orange
                        | Rails, para Ruby.
                      li
                        i.fa-li.fas.fa-check.clr--orange
                        | #[em Net Framework], para plataforma .Net.
                      li
                        i.fa-li.fas.fa-check.clr--orange
                        | Django, para Python.
                      li
                        i.fa-li.fas.fa-check.clr--orange
                        | Express, para Node.js.
                      li
                        i.fa-li.fas.fa-check.clr--orange
                        | Ionic, para crear aplicaciones #[em mobile].
                      li
                        i.fa-li.fas.fa-check.clr--orange
                        | Struts, para Java.

            .col-lg-3.d-none.d-lg-flex(data-aos="zoom-in")
              figure
                img(src="@/assets/curso/temas/t2/t2_04.png", alt="alt")

    .bg--paleMint.p-4.brad_02
      .row.justify-content-center.mb-4
        .col-lg-10.py-4
          h3.text-center.mb-5 Buenas prácticas de programación
          .row.justify-content-center.mb-4
            .col-lg-5.col-8.mb-4.mb-lg-0(data-aos="zoom-in")
              figure
                img(src="@/assets/curso/temas/t2/t2_05.png", alt="alt")
            .col-lg-7(data-aos="fade")
              p Podemos encontrar sinfín de información, tutoriales y elementos que ayudarán a construir líneas de texto, lo que con mucha práctica permitirá crear y programar estructuras complejas, pero lo realmente importante y lo que se debe asociar con un verdadero programador, es adquirir las destrezas que permiten crear de forma estructurada y precisa, coherente y sin errores.
              p Ahora, encontrar las verdaderas y únicas buenas prácticas no es posible, pero podemos encontrar una serie de parámetros a considerar al momento de programar:

        .col-lg-10(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/t2/t2_06.svg", alt="alt")



</template>

<script>
export default {
  name: 'Tema2',
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
