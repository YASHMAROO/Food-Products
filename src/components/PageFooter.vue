<template>
  <section id="footer">
    <div class="footer container p-0 pt-4">
      <div class="row ">
        <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
          <ul class="list-unstyled list-inline social text-center">
            <li class="list-inline-item">
              <a href="https://www.facebook.com/yash.maroo" target="_blank"><i class="fab fa-facebook-f" /></a>
            </li>
            <li class="list-inline-item">
              <a href="https://github.com/YASHMAROO" target="_blank"><i class="fab fa-github" /></a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.instagram.com/marooyash/" target="_blank"><i class="fab fa-instagram" /></a>
            </li>
            <li class="list-inline-item">
              <a href="mailto:marooyash@yahoo.in" target="_blank"><i class="fa fa-envelope" /></a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.linkedin.com/in/yash-m-840830133/" target="_blank"><i class="fab fa-linkedin-in" /></a>
            </li>
            <li class="list-inline-item">
              <a href="https://dev.to/yashmaroo" target="_blank"><i class="fab fa-dev" /></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 font-weight-bold text-center">
          <p><span class="highlighted">© </span>Yash Maroo</p>
          <p><span><i class="fas fa-phone"></i>      Contact: 9830692706</span></p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
}
</script>

<style scoped>
/* Footer */
section {
    border-top: 1px solid red;
    padding: 2vh 1vw;
}

#footer a {
    text-decoration: none !important;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}
#footer ul.social li{
  padding: 3px 0;
}
#footer ul.social li a i {
  margin-right: 7px;
  font-size:20px;
  -webkit-transition: .5s all ease;
  -moz-transition: .5s all ease;
  transition: .5s all ease;
}
#footer ul.social li:hover a i {
  font-size:25px;
  margin-top:-10px;
}
#footer ul.social li a{
  color: #333;
}
#footer ul.social li a:hover{
  color: #fa631c;
}

</style>