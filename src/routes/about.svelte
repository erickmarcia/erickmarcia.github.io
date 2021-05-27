<script>
  const today = new Date(`2021-05-25T20:39:17.000-07:00`);
  export const experienceYears = today.getFullYear() - 2014;
  export const experienceYear = today.getFullYear() - 2008;
</script>

<style>
  figure {
    float: right;
    margin: -3em -7em 2em 2em;
    max-width: 400px;
  }

  figure img {
    border-radius: 8px;
  }

  @media (max-width: 1020px) {
    figure {
      float: none;
      margin: 0 auto 2em;
    }
  }
</style>

<!-- <svelte:head>
  <title>About</title>
</svelte:head> -->
<svelte:head>
  <title>Acerca | Erick Marcia</title>

  <meta name="description" content="Acerca de Erick Marcia" />
  <meta name="keywords"
    content="acerca de erick marcia ,software,aprender programación,emarcia,Erick,marcia,Erick Marcia" />
</svelte:head>


<article class="text-justify">
  <!-- <div class="container"> -->
  <h1>Erick Marcia</h1>
  <h2>Diseñador & Desarrollador de Software</h2>
  <figure>
    <img src='/media/about-me/profile.png' alt='Erick Marcia'>
    <!-- <figcaption>Erick Marcia <a href="" target="_blank">Erick Marcia</a>
    </figcaption> -->
  </figure>
  <p>Deseaba entrar a la Universidad pensando en ser un diseñador gráfico ya que se me facilitaba el dibujo y la
    pintura, desde pequeño aprendi de mi padre que es pintor y de mi madre el emprendimiento, y de ambos queria formar
    mi empresa de diseño, pero en el 2008 logre entrar en la universidad por casos de la vida entre en la carrera de
    Ingenieria de Sistemas y Computación, fue en ese momento que conoci al computador y todo el mundo que escondia,
    anteriormente los habia visto pero nunca trabaje con uno, fue con esas primeras experiencias que decidi cambiar el
    rumbo de mi carrera y al
    avanzar me enamore del desarrollo de software, aun cuando muchos en el salón de clase me decian que nunca iba a
    vivir de eso,
    puedo decir que hasta el dia de hoy me ha dado de comer.</p>
  <p>Desde el 2008 comence a trabajar para pagar mis
    estudios acumulando en este tiempo {experienceYear} años de experiencia en diferentes areas y jiros de negocios,
    siempre me he compromedito con mi trabajo y apoyado con mis conocimientos para el desarrrollo y productividad de las
    empresas que en su momento me brindaron una oportunidad, pero desdes el 2014 que me adrente en el mundo profesional
    del desarrollo de software acumulando a la
    fecha ya {experienceYears} años de expericia y constante aprendizaje
  </p>
  <p>Este hermoso mundo me ha llevado a conocer la frustración cuando el proyecto no compila y a brincar de alegria
    cuando luego de varias horas por fin logre vencer a ese gigante que me atormentaba llamado bug
    <img src="/media/bug.svg" height="24" alt="bug">, me ha llevado a
    vencer grandes muros como cometer errores, hablar en publico, tanto que al día de hoy he logrado impartir clases,
    conferencias y capacitaciones para personas, empresas, instituciones educativas y comunidades en internet.
  </p>
  <p>También colaboro en proyectos como Freelance FullStack, aunque estoy mas orientado al BanckEnd, pero también hago
    Frontend.
  </p>
  <p class="mb-5">
    A lo largo de mi carrera, he trabajado con una variedad de lenguajes y herramientas, tales como:
    <b>PHP, Postgrest, MySQL, Microsoft SQL como gestores de Base de Datos y con Asp.NET Core, C#, Xamarin, Kotlin, Php,
      Laravel y reciente mente Svelte, </b> del cual me he enamorado y con lo cual esta construido este blog.
  </p>
  <p>Entre las cosas que más me gustan es servirle a <b>Jesús</b>, y lo hago trabajando con Jóvenes y niños, pues
    actualmente
    tambien soy Lider Juvenil en mi Iglesia Local, podria decir que en los tiempos que no estoy programando estoy
    trabajando con un grupo de chicos locos autos llamados S.W.A.T del <a
      href="https://www.facebook.com/ministeriojuvenil180grados/?ref=pages_you_manage" class="text-blue-500">
      ministero Juvenil 180 Grados</a>, algo que me llena
    de orgullo por que en esta estapa no solo he ayudado a otros jóvenes sino que también he podido desarrollar mis
    habilidades de liderazgo, organización de evetos, gestión de recursos, entre otros dones y talentos.</p>
  <p>Para contactarme, mi cuenta de twitter
    <a href="https://twitter.com/Emarcia14" class="text-blue-500">
      @Emarcia14
    </a> es una buena opción. También puedes escribirme un e-mail <a href="mailto:erickmarcia14@gmail.com"
      class="text-blue-500">aquí</a>, con gusto te respondere.
  </p>
  <!-- </div> -->
</article>