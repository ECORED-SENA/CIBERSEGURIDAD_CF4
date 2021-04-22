<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        .h3 7
      .h3 Consideraciones para la implementación de un SGSI (Norma ISO 27001)
    TabsB.mb-5
      .py-4.py-md-5(titulo="" :icono="require('@/assets/curso/img5.svg')")
        .row
          .col-12
            .h4.txt-color1 7.1 Preguntas orientadoras de la necesidad del SGSI - ¿Cuándo y porque implantar un SGSI en una organización?
            p Implantar un SGSI en una empresa no es precisamente cuando se le haya presentado un incidente de seguridad sobre su información, sino, cuando ésta desea tener un crecimiento y posicionamiento ante un mercado exigente y global teniendo en cuenta que, para ello, requerirá del uso de la Tecnología de la información y las comunicaciones para lograrlo. En tal sentido, un SGSI, va permitir de forma organizada y sistémica, mantener la seguridad de la información que maneja la empresa con un alto grado de confiabilidad, integridad y disponibilidad. Así como el estar preparados para afrontar un incidente de seguridad que rompa las barreras (medidas de seguridad) de seguridad implantadas y estar en la capacidad de poner en funcionamiento rápidamente la empresa o que es lo mismo evitar que sus clientes lo perciban o lo vean.
      .py-4.py-md-5(titulo="" :icono="require('@/assets/curso/img6.svg')")
        .row
          .col-12
            .h4.txt-color1 7.2 ¿Qué aspectos se deben considerar al implantar un SGSI?
            p La seguridad de la información es un compromiso de todos en una organización. Aunque esto sea claro para muchos empleados de una empresa, para otras no lo es, es por ello que uno de los aspectos relevantes a la hora de implementar un SGSI, es concientizar a las directivas y demás empleados, la importancia y responsabilidad de proteger la información como el activo más preciado que posee que la perdida de ella podría causar el declive parcial o total de la empresa con una afectación económica, de identidad, de marca y por ende disminución de empleados.
      .py-4.py-md-5(titulo="" :icono="require('@/assets/curso/img7.svg')")
        .row
          .col-12
            .h4.txt-color1 7.3 ¿Cuánto tiempo se requiere para implantar un SGSI?
            p Dado que existen organizaciones que tienen por lo menos implementada algunas medidas de seguridad sobre sus activos y éstas a la vez cumplen con la normativa ISO/IEC 27001, la implantación del SGSI llevaría alrededor de 6 meses. Pero si la empresa posee medianamente o por lo menos unas técnicas seguras de sus activos, además de la concientización de las directivas, esta podría tardar alrededor de un año.
      .py-4.py-md-5(titulo="" :icono="require('@/assets/curso/img8.svg')")
        .row
          .col-12
            .h4.txt-color1 7.4 ¿Cuánto puede costar la implantación de un SGSI?
            p El costo de la implantación de un SGSI, depende de múltiples variables. Una de las variables es cuando la empresa la implementa, pero a través de la contratación de terceros o entes externos que realizan todo el proceso. Otra variable es que dentro de la empresa existan empleados que poseen el conocimiento o en su defecto la organización los capacite para que posteriormente realicen la implantación. También se podría incluir como variable las herramientas que se utilicen para la implementación ya que existen actualmente múltiples sistemas de información y/o aplicativos que ayudan a desarrollar todo el proceso de manera más ágil. Por último, se podría considerar, que el costo de la implantación de un SGSI, depende de la magnitud o tamaño de la empresa ya que entre más grande sea, pues los requerimientos serán mayores o simplemente tendría que hacer la implantación por áreas, factores, dependencias o departamentos según sea la estructura organizacional de la empresa.

</template>

<script>
import BannerInterno from '../../components/plantilla/BannerInterno'
export default {
  name: 'Tema7',
  components: {
    BannerInterno,
  },
}
</script>

<style lang="sass" scoped></style>
