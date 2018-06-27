var nagybetus = false
$(document).ready(function () {
  $('.kontrasztos').click(function (){
    if (!nagybetus)
      $('link[href="css/screen.css"]').attr('href','css/akadalymentes.css')
    else
      $('link[href="css/akadalymentes.css"]').attr('href','css/screen.css')

    nagybetus = !nagybetus
  })
})
