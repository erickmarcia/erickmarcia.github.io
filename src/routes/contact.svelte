<svelte:head>
  <title>Contacto | Erick Marcia</title>

  <meta name="description" content="Contactame - Erick Marcia" />
  <meta name="keywords"
    content="contacto de erick marcia ,software,aprender programación,emarcia,Erick,marcia,Erick Marcia" />
</svelte:head>


<!-- <script>
  import { useForm, Hint, validators, minLength } from "svelte-use-form";

  const form = useForm();
</script>

<form use:form>
  <input name="title" use:validators={[minLength(5)]} />
  <Hint for="title" on="minLength" let:value>
    The title requires at least {value} characters.
  </Hint>

  <button disabled={!$form.valid}>Submit</button> <br />
</form> -->

<div class="section" data-anchor="contact">
  <div class="content wow fadeInDown" data-wow-delay="0.2s">
    <h1>CONTACT ME</h1>
    <p>Whether you're interested in working with me or just want to say hello, I'd love to hear from you!</p>
    <br>
    <div class="contact-form">

      <div id="form-messages"></div>
      <form id="ajax-contact" method="post" role="form" action="contact.php" data-toggle="validator">
        <div class="form-group has-feedback wow fadeInLeft" data-wow-delay="0.6s">
          <input type="text" class="form-control" id="name" name="name" placeholder="NAME"
            data-error="Field can't be blank!" required>
          <span class="glyphicon form-control-feedback" aria-hidden="true"></span>
          <div class="help-block with-errors"></div>
        </div>

        <div class="form-group has-feedback wow fadeInRight" data-wow-delay="0.8s">
          <input type="email" class="form-control" id="email" name="email" placeholder="EMAIL"
            data-error="Field can't be blank!" required>
          <span class="glyphicon form-control-feedback" aria-hidden="true"></span>
          <div class="help-block with-errors"></div>
        </div>

        <div class="form-group has-feedback wow fadeInLeft" data-wow-delay="1s">
          <textarea data-minlength="10" class="form-control" id="message" name="message" placeholder="MESSAGE"
            data-error="Minimum of 10 characters" required></textarea>
          <span class="glyphicon form-control-feedback" aria-hidden="true"></span>
          <div class="help-block with-errors"></div>
        </div>

        <div class="hidden">
          <input type="text" class="form-control" id="human" name="human" placeholder="">
        </div>
        <div class="wow fadeInUp" data-wow-delay="1s">
          <button type="submit" id="submit" name="submit" class="btn btn-lg">SEND MESSAGE</button>
        </div>
      </form>
      <br>
    </div>
  </div>
</div>
<!-- end section -->



<style>
  /* contact us styles */

  .fa-paper-plane {
    color: #484848;
  }

  /* input field styles */

  .contact-form {
    padding: 0px 15px 0px 15px;
  }

  .form-control {
    border: 2px solid rgba(0, 0, 0, 0.27);
    width: 100%;
    max-width: 100%;
    height: 3em;
    font-size: 16px;
    padding: 1em;
    margin: 0.5em 0 2em 0;
    font-weight: bold;
  }

  textarea {
    min-height: 10em;
  }

  label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 500;
  }

  #submit {
    outline: none;
    padding: 12px;
    min-width: 200px;
    border-radius: 2px;
    border: 2px solid #ff6363;
    text-align: center;
    font-size: 1em;
    color: #ff6363;
    background-color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
  }

  #submit:hover {
    background-color: #ff6363;
    color: white;
    -webkit-transition: all 0.3s ease-out;
    -o-transition: all 0.3s ease-out;
    -ms-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    transition: all 0.3s ease-out;
  }
</style>