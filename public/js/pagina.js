$(document).ready(function () {
 
  var todo = $.get("/api/datos", function getdata(data) {
    var cuenta;
    items = []
    var tabla = [];
    for (let i = 0; i < data.length; i++) {
      si = data[i];
      // we change de value of client type 
      if(si["amount"]<10000){
        si["client_type"]="Poor client"
      }
      else if(si["amount"]>10000 && si["amount"]<100000){
        si["client_type"]="Normall client"
      }
      else if(si["amount"]>100000){
        si["client_type"]="Very rich client"
      }
      //here we do the object Account
      cuenta = new Account(si["dni"],si["full_name"],si["account_type"],si["amount"],si["client_type"],si["entry_date"])
      console.log(cuenta)
      localStorage.setItem("cuenta"+i+"", cuenta);
      console.log(localStorage.getItem("cuenta"+i+""))
      items.push(cuenta)
    }
    // we do the table with the values of the database
    for (let i = 0; i < items.length; i++) {
      no = items[i];
      tipo = no.accountType
      var cuentas = [];

        cuentas.push("<td> <input id='dni_cliente"+i+"' type='text' value='"+no.DNIClient+"' readonly></td>")
        cuentas.push("<td><input type='text' id='nombre_nuevo"+i+"' value='"+ no.FullNameClient +"'></input><p id='error_nombre"+i+"'></p></td>")
        cuentas.push("<td><select name='' id='tipo_cuenta"+i+"'> <option value='"+tipo.type+"'>"+ tipo.type +"</option> <option value='Savings account'>Savings account</option>  <option value='Investement account'>Investement account</option><option value='Personal account'>Personal account</option><option value='Solidary account'>Solidary account</option><option value='Individual Savings Account'>Individual Savings Account</option><option value='Fixed deposit account'>Fixed deposit account</option><option value='Tax-Free Savings Account'>Tax-Free Savings Account</option></select></td>")
        cuentas.push("<td><input type='number' id='cantidad"+i+"' value='"+ no.amount +"'></input><p id='error_cantidad"+i+"'></p></td>")
        cuentas.push("<td>"+no.clientType +"</td>")
        cuentas.push("<td><input class='datepicker' id='fecha"+i+"' value='"+ no.entryDate +"'></input></td>")
        cuentas.push("<td><button type='submit' id='enviar"+i+"'>Enviar</button></td>")

        $( ".datepicker" ).datepicker({dateFormat:'dd-mm-yy',maxDate: 0, regional:["ca"]})
  
      $("<tr/>", {
        "class": "todo_objeto",
        html: cuentas.join("")
      }).appendTo("#sample_data");
    }

    //  we get the values of the form and we send the object to the database
        $("#enviar0").click(function(){
          var dni_cliente= $("#dni_cliente0").val();
          var nombre = $("#nombre_nuevo0").val();
          var nom_cor = validaNomCognoms(nombre)
          var tipo_cuenta = $("#tipo_cuenta0").val();
          var cantidad = $("#cantidad0").val();
          var can_cor = valida_amount(cantidad);
          var tipo_cliente = $("#tipo_cliente0").val();
          var fecha = $("#fecha0").val()
          var enviar = `{ "full_name": "${nombre}",
          "account_type": "${tipo_cuenta}",
          "amount": ${cantidad},
          "client_type": "${tipo_cliente}",
          "entry_date": "${fecha}",
          "dni": "${dni_cliente}"}`
          var objetos = todo.responseJSON
          var listadeobjetos = doobjects(objetos)
          console.log(listadeobjetos)
          for (let i = 0; i < listadeobjetos.length; i++) {
            si = listadeobjetos[i];
            if (dni_cliente == si.DNIClient & nom_cor == true & can_cor == true){
              console.log(enviar)
              alert("enviando")
              $.ajax({
                url: '/api/mod',
                method: 'POST',
                contentType: 'application/json',
                data: enviar,
                succes: function(res){
                console.log(res.resonse)
              }
              })
               alert("enviado correctamente")
               break;
            }else{

            if (nom_cor) {
              $("#error_nombre0").html("")
            }
            else {
             $("#error_nombre0").html("nomes lletres")
            }
            if (can_cor){
              $("#error_cantidad0").html("")
            } else{
              $("#error_cantidad0").html("nomes numeric")
            }
            }
          }
    
        })
        //  we get the values of the form and we send the object to the database

        $("#enviar1").click(function(){
          var dni_cliente= $("#dni_cliente1").val();
          var nombre = $("#nombre_nuevo1").val();
          var nom_cor = validaNomCognoms(nombre)
          console.log(nom_cor)
          var tipo_cuenta = $("#tipo_cuenta1").val();
          var cantidad = $("#cantidad1").val();
          var can_cor = valida_amount(cantidad);
          console.log(can_cor)
          var fecha = $("#fecha1").val();
          var tipo_cliente = $("#tipo_cliente1").val();
          var enviar = `{ "full_name": "${nombre}",
          "account_type": "${tipo_cuenta}",
          "amount": ${cantidad},
          "client_type": "${tipo_cliente}",
          "entry_date":"${fecha}",
          "dni": "${dni_cliente}"}`
          var objetos = todo.responseJSON
          var listadeobjetos = doobjects(objetos)
          console.log(listadeobjetos)
          for (let i = 0; i < listadeobjetos.length; i++) {
            si = listadeobjetos[i];
            if (dni_cliente == si.DNIClient & nom_cor == true & can_cor == true){
              alert("enviando")
              $.ajax({
                url: '/api/mod',
                method: 'POST',
                contentType: 'application/json',
                data: enviar,
                succes: function(res){
                console.log(res.resonse)
                
              }
              })
              alert("enviado correctamente")
               break;
            }else{
              if (nom_cor) {
                  $("#error_nombre1").html("")
              }
              else {
               $("#error_nombre1").html("nomes lletres")
              }
              if (can_cor){
                $("#error_cantidad1").html("")
              } else{
                $("#error_cantidad1").html("nomes numeric")
              }
            }
          }
    
        })
    //  we get the values of the form and we send the object to the database

        $("#enviar2").click(function(){
          var dni_cliente= $("#dni_cliente2").val();
          var nombre = $("#nombre_nuevo2").val();
          var nom_cor = validaNomCognoms(nombre)
          var tipo_cuenta = $("#tipo_cuenta2").val();
          var cantidad = $("#cantidad2").val();
          var can_cor = valida_amount(cantidad);
          var tipo_cliente = $("#tipo_cliente2").val();
          var fecha = $("#fecha2").val();
          var enviar = `{ "full_name": "${nombre}",
          "account_type": "${tipo_cuenta}",
          "amount": ${cantidad},
          "client_type": "${tipo_cliente}",
          "entry_date":"${fecha}",
          "dni": "${dni_cliente}"}`
          var objetos = todo.responseJSON
          var listadeobjetos = doobjects(objetos)
          console.log(listadeobjetos)
          for (let i = 0; i < listadeobjetos.length; i++) {
            si = listadeobjetos[i];
            if (dni_cliente == si.DNIClient & nom_cor == true & can_cor == true){
              alert("enviando")
              $.ajax({
                url: '/api/mod',
                method: 'POST',
                contentType: 'application/json',
                data: enviar,
                succes: function(res){
                console.log(res.resonse)
              }
              })
               alert("enviado correctamente")
               break;
            }else{
              if (nom_cor) {
                $("#error_nombre2").html("")
            }
            else {
              $("#error_nombre2").html("nomes lletres")
            }
            if (can_cor){
              $("#error_cantidad2").html("")
            } else{
              $("#error_cantidad2").html("nomes numeric")
            }
            }
          }
    
        })

    //  we get the values of the form and we send the object to the database

        $("#enviar3").click(function(){
          var dni_cliente= $("#dni_cliente3").val();
          var nombre = $("#nombre_nuevo3").val();
          var nom_cor = validaNomCognoms(nombre)
          var tipo_cuenta = $("#tipo_cuenta3").val();
          var cantidad = $("#cantidad3").val();
          var can_cor = valida_amount(cantidad);
          var tipo_cliente = $("#tipo_cliente3").val();
          var fecha = $("#fecha3").val();
          var enviar = `{ "full_name": "${nombre}",
          "account_type": "${tipo_cuenta}",
          "amount": ${cantidad},
          "client_type": "${tipo_cliente}",
          "entry_date": "${fecha}",
          "dni": "${dni_cliente}"}`
          var objetos = todo.responseJSON
          var listadeobjetos = doobjects(objetos)
          console.log(listadeobjetos)
          for (let i = 0; i < listadeobjetos.length; i++) {
            si = listadeobjetos[i];
            if (dni_cliente == si.DNIClient & nom_cor == true & can_cor == true){
              alert("enviando")
              $.ajax({
                url: '/api/mod',
                method: 'POST',
                contentType: 'application/json',
                data: enviar,
                succes: function(res){
                console.log(res.resonse)
              }
              })
              alert("enviado correctamente")
               break;
            }else{
              if (nom_cor) {
                $("#error_nombre3").html("")
            }
            else {
                $("#error_nombre3").html("nomes lletres")
            }
              if (can_cor){
                $("#error_cantidad3").html("")
              } else{
                $("#error_cantidad3").html("nomes numeric")
              }
            }
          }
    
        })

    //  we get the values of the form and we send the object to the database

        $("#enviar4").click(function(){
          var dni_cliente= $("#dni_cliente4").val();
          var nombre = $("#nombre_nuevo4").val();
          var nom_cor = validaNomCognoms(nombre)
          var tipo_cuenta = $("#tipo_cuenta4").val();
          var cantidad = $("#cantidad4").val();
          var can_cor = valida_amount(cantidad);
          var tipo_cliente = $("#tipo_cliente4").val();
          var fecha = $("#fecha4").val();
          var enviar = `{ "full_name": "${nombre}",
          "account_type": "${tipo_cuenta}",
          "amount": ${cantidad},
          "client_type": "${tipo_cliente}",
          "entry_date": "${fecha}",
          "dni": "${dni_cliente}"}`
          var objetos = todo.responseJSON
          var listadeobjetos = doobjects(objetos)
          console.log(listadeobjetos)
          for (let i = 0; i < listadeobjetos.length; i++) {
            si = listadeobjetos[i];
            if (dni_cliente == si.DNIClient & nom_cor == true & can_cor == true){
              alert("enviando")
              $.ajax({
                url: '/api/mod',
                method: 'POST',
                contentType: 'application/json',
                data: enviar,
                succes: function(res){
                console.log(res.resonse)
              }
              })
               alert("enviado correctamente")
               break;
            }else{
              if (nom_cor) {
                $("#error_nombre4").html("")
              }
              else {
              $("#error_nombre4").html("nomes lletres")
              }
              if (can_cor){
                $("#error_cantidad4").html("")
              } else{
                $("#error_cantidad4").html("nomes numeric")
              }
            }
          }
    
        })

        $( ".datepicker" ).datepicker({dateFormat:'dd-mm-yy',maxDate: 0})

  });
    $("#recargar").click(function(){
      location.reload();
    })
  console.log(todo)

});
    
function doobjects(data){
  var cuenta;
  items = []
  for (let i = 0; i < data.length; i++) {
  si=data[i];
  //
  if(si["amount"]<10000){
     si["client_type"]="Poor client"
   }
   else if(si["amount"]>10000 && si["amount"]<100000){
     si["client_type"]="Normall client"
   }
  else if(si["amount"]>100000){
    si["client_type"]="Very rich client"
  }
  cuenta = new Account(si["dni"],si["full_name"],si["account_type"],si["amount"],si["client_type"],si["entry_date"])
  items.push(cuenta)
  }
  return items
}    


function validaNomCognoms(value) {
  var patternom = /^([A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]{1,30})$/;
  if (patternom.test(value)) {
      return true;
  } else {
      return false;
  };

}
function valida_amount(value) {
  var patternom = /^([0-9]{1,999999999999999999999999999})$/;
  if (patternom.test(value)) {
      return true;
  } else {
      return false;
  };}