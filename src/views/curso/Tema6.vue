<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 6
      .h3 Auditoria al SGSI
    p.mb-4 Una auditoría interna es el proceso mediante el cual la organización evalúa el cumplimiento de la implantación del Sistema de Gestión de la Seguridad de la información en una empresa bajo la normativa ISO/IEC 27001.
    p.mb-4 Los aspectos más importantes de una auditoría interna son:
    .list.align-items-star
      .list__item
        .list__item__icon
          img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
      .list__txt
        p.mt-1 Las auditorías internas deben estar bien planificadas (plan auditor) y aprobadas por la dirección.
    .list.align-items-star.mt-2
      .list__item
        .list__item__icon
          img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
      .list__txt
        p.mt-1 El equipo auditor deben ser profesionales idóneos con experiencia y diferentes a los encargados de la implantación del SGSI en la organización.
    .list.align-items-star.mt-2
      .list__item
        .list__item__icon
          img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
      .list__txt
        p.mt-1 Se debe estipular un coordinador del equipo auditor.
    .list.align-items-star.mt-2
      .list__item
        .list__item__icon
          img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
      .list__txt
        p.mt-1 Las auditorías se deben orientar hacia la correcta implantación de los 14 dominios, 35 objetivos de control y 114 controles de seguridad implementados.
    .list.align-items-star.mt-2
      .list__item
        .list__item__icon
          img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
      .list__txt
        p.mt-1 Toda la organización debe conocer el alcance y la agenda estipulada para la auditoría interna.
    .list.align-items-star.mt-2
      .list__item
        .list__item__icon
          img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
      .list__txt
        p.mt-1 Los informes y resultados deberán ser conocidos por todo el personal de la organización involucrado dentro del alcance del SGSI.
    .list.align-items-star.mt-2
      .list__item
        .list__item__icon
          img.img-a1(src="@/assets/template/icon-list1.svg").img-fluid  
      .list__txt
        p.mt-1 De acuerdo al informe y/o resultados presentados en la auditoría interna, la organización debe estipular los planes para mejorar la eficacia del SGSI y realizar el procedimiento documentado de las acciones correctivas y preventivas. 

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema6',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped></style>
