<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        .h3 1
      .h3 ISO IEC 27001

    p.mb-4 Es el estándar internacional que define los requerimientos necesarios para establecer, implementar, mantener y actualizar los sistemas de gestión de seguridad de la información.
    .row.align-items-start
      .col-12.col-lg-6
        p.mb-4 Para la implantación de un sistema de gestión de la seguridad de la información, se requiere del desarrollo de actividades que marquen un orden lógico para llevar organizado todo el proceso. El modelo PDCA (Plan, do, check, act), en su equivalencia en español es planificar, hacer, verificar y actuar (PHVA), es una estrategia de mejora continua de calidad en cuatro pasos.
        p Este modelo es muy utilizado para la implantación de sistemas de gestión, como los sistemas de gestión de la calidad que muchas empresas de hoy lo implantan para la calidad administrativa y de servicios con el objetivo de perfeccionarlos y continuar en un proceso de mejora continua.
      .col-12.col-lg-6.mt-4.mt-lg-0
        .imagen-titulo--izq
          figure.mb-5
            img(src='@/assets/curso/img1.png', alt='Texto que describa la imagen')
          .imagen-titulo__titulo
              .h4.m-0.text-white Modelo PDCA
    #t_1_1.titulo-segundo.pt-5
      .h4 1.1 Fases del ciclo PHVA
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul").mt-5
      .row(titulo="1.1.1 Planear").align-items-center
        .col-12.col-lg-8
          p.mb-4 En esta etapa se enmarca todo el proceso de análisis de la situación en que actualmente se encuentra la empresa respecto a los mecanismos de seguridad implementados y la normativa ISO/IEC 27001:2017 la cual se pretende implantar para evaluación y certificación. Las etapas relevantes de esta fase son:
          .list.align-items-star
            .list__item
              .list__item__icon
                img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
            .list__txt
              p.mt-1 Establecer el compromiso con los directivos de la empresa para el inicio, proceso y ejecución.
          .list.align-items-star.mt-2
            .list__item
              .list__item__icon
                img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
            .list__txt
              p.mt-1 Definir el alcance del SGSI.
          .list.align-items-star.mt-2
            .list__item
              .list__item__icon
                img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
            .list__txt
              p.mt-1 Definir las políticas de seguridad.
          .list.align-items-star.mt-2
            .list__item
              .list__item__icon
                img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
            .list__txt
              p.mt-1 Selección y aplicación de una metodología de análisis y evaluación de riesgos.
          .list.align-items-star.mt-2
            .list__item
              .list__item__icon
                img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
            .list__txt
              p.mt-1 Fase de análisis de información de la organización, en esta fase se comprueba cuáles son los sistemas informáticos de hardware y los sistemas de información que actualmente utiliza la empresa para el cumplimiento de su misión u objeto social.
          .list.align-items-star.mt-2
            .list__item
              .list__item__icon
                img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
            .list__txt
              p.mt-1 Fase de evaluación del riesgo; En esta fase se evalúa los riesgos, se tratan y se seleccionan los controles a implementar.
        .col-12.col-lg-4.text-center.mt-4.mt-lg-0
          figure
            img(src='@/assets/curso/img1.svg', style="max-width: 50%; position: relative; left: 30%;", alt='Texto que describa la imagen')
      div(titulo="1.1.2 Hacer")
        .row.align-items-center
          .col-12.col-lg-8
            p.mb-4 En esta fase se hace la implementación de los controles que se definen de acuerdo al plan de tratamiento de riesgos definidos una vez construida la matriz de riesgos en la etapa anterior. Las actividades más relevantes de esta etapa son:
            .list.align-items-star
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-1 Definir el plan de tratamiento de riesgos.
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-1 Implantar el plan de tratamiento de riesgos.
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-1 Selección e implementación de controles (Anexo A ISO 27002:2013).
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-1 Formación y concientización (a toda la organización).
          .col-12.col-lg-4.text-center.mt-4.mt-lg-0
            figure
              img(src='@/assets/curso/img2.svg', style="max-width: 50%; position: relative; left: 30%;", alt='Texto que describa la imagen')
      div(titulo="1.1.3 Verificar")
        .row.align-items-center
          .col-12.col-lg-8
            p.mb-4 Esta es una fase donde se hace una revisión y evaluación del desempeño de los controles implementados buscan medir la eficacia y eficiencia de los controles seleccionados e implementados. Las etapas de esta fase son:
            .list.align-items-star
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-1 Revisión del Sistema de Gestión de Gestión de seguridad.
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-1 Medir la eficacia de los controles seleccionados e implementados.
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-1 Se miden y revisan si existen riesgos residuales.
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-1 Realización de auditorías internas al Sistema de gestión de seguridad de la información.
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-1 Registro de todas las acciones y eventos generados durante las pruebas y validaciones.
          .col-12.col-lg-4.text-center.mt-4.mt-lg-0
            figure
              img(src='@/assets/curso/img3.svg', style="max-width: 50%; position: relative; left: 30%;", alt='Texto que describa la imagen')
      div(titulo="1.1.4 Actuar")
        .row.align-items-center
          .col-12.col-lg-8
            p.mb-4 Como se mencionaba al principio el ciclo se requiere una mejora continua por esta razón en esta fase se busca actualizar o realizar los cambios a los controles identificados en la fase anterior que no están cumpliendo con la eficacia y eficiencia requerida. Las etapas de esta fase son:
            .list.align-items-star
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-1 Implantar mejoras al SGSI.
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-1 Definición y aplicaciones de acciones preventivas y correctivas.
            .list.align-items-star.mt-2
              .list__item
                .list__item__icon
                  img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
              .list__txt
                p.mt-1 Verificación de la eficiencia de las acciones ejecutadas.
          .col-12.col-lg-4.text-center.mt-4.mt-lg-0
            figure
              img(src='@/assets/curso/img4.svg', style="max-width: 50%; position: relative; left: 30%;", alt='Texto que describa la imagen')
    p A continuación, se hace una introducción a algunas de las actividades más importantes de los sistemas de gestión de seguridad de la información.

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema1',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped></style>
