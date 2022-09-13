<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.mb-5
      .col-auto.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/temas/recursos/rectangle_01.svg", alt="alt").img90
      .col
        p.mb-0 Apreciado aprendiz, bienvenido a este componente formativo donde se abordará la codificación de los elementos del proyecto multimedia, por favor ingrese al siguiente recurso para ampliar la información inicial:

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
