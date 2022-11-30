$(document).ready(function () {
  //   $.ajax({
  //     // la URL para la petición
  //     url : '/api/login',

  //     // la información a enviar
  //     // (también es posible utilizar una cadena de datos)
  //     // json : { id : 123 },

  //     // especifica si será una petición POST o GET
  //     type : 'GET',
  //     data:{action:'fetch'},
  //     // el tipo de información que se espera de respuesta
  //     dataType : 'json',

  //     // código a ejecutar si la petición es satisfactoria;
  //     // la respuesta es pasada como argumento a la función
  //     success : function(json) {


  //         console.log(json);

  //     },

  //     // código a ejecutar si la petición falla;
  //     // son pasados como argumentos a la función
  //     // el objeto de la petición en crudo y código de estatus de la petición
  //     error : function(xhr, status) {
  //         alert('Disculpe, existió un problema');
  //     },

  //     // código a ejecutar sin importar si la petición falló o no
  //     complete : function(xhr, status) {
  //         alert('Petición realizada');
  //     }
  //   });

  $.getJSON("/api/login", function (data) {
    var cuenta;
    items = []
    for (let i = 0; i < data.length; i++) {
    si=data[i];

    // console
    cuenta = new Account(si["dni"],si["full_name"],si["account_type"],si["amount"],si["client_type"],si["entry_date"])
    items.push(cuenta)
    }    //console.log(items)
    return items
  });


  console.log(items)
});
    

    
 

    // return items;

    // fuciona pero se puede mejorar

    // for (let i = 0; i < data.length; i++) {
    //   si = data[i];
    //   console.log(si);
    //  var items = [];
    //  $.each(si, function (key, val) {
    //     items.push("<li id='" + key + "'>" + val + "</li>");
    //  });

    // $("<ul/>", {
    //     "class": "my-new-list",
    //     html: items.join("")
    //  }).appendTo("body");
    // }

    ///////////////////////////////////////////////

    //   for (let i = 0; i < data.length; i++) {
    //   si = data[i];
    //   // var html = '';

    //   if(data.length > 0)
    //   {
    //       for(var count = 1; count < si.length; count++)
    //       {
    //         html += `<td>`+si.dni+`</td><td>`+si.full_name+`</td><td>`+si.account_type+`</td><td>`+si.amount+`</td><td>`+si.client_type+`</td>
    //         <td>`+si.entry_date+`</td><td></td>`;
    //         $("<tr/>",{html}).appendTo("body");

    //       }
    //   }


    //   console.log(si)
    // }

    ///////////////////////////////////////////////////////////////////////////////
    /// la mejor version 

    // for (let i = 0; i < data.length; i++) {
    //   si = data[i];
    //   console.log(si);
    //   var items = [];
    //   $.each(si, function (key, val) {
    //     items.push("<td id='" + key + "'>" + val + "</li>");
    //   });

    //   $("<tr/>", {
    //     "class": "my-new-list",
    //     html: items.join("")
    //   }).appendTo("#sample_data");
    // }

    ///////


    // for (let i = 0; i < data.length; i++) {
    //   si = data[i];
    //   if(si["amount"]<10000){
    //     si["client_type"]="Poor client"
    //   }
    //   else if(si["amount"]>10000 && si["amount"]<100000){
    //     si["client_type"]="Normall client"
    //   }
    //   else if(si["amount"]>100000){
    //     si["client_type"]="Very rich client"
    //   }
    //   console.log(si);
    //   var items = [];
    //   $.each(si, function (key, val) {
    //     if(key == 'full_name' || key == 'amount'){
    //     items.push("<td id='" + key + "'><input value='"+ val + "'> </input></td>")}
    //     else if(key == 'account_type'){
    //       items.push("<td id='" + key + "'><select><option>"+val+"</option><option>Personal Account</option><option>Savings account</option>Solidary account</select></td>")
    //     }
    //     else if(key=='entry_date'){
    //       items.push("<td id='" + key + "'><input id='datepicker' value='"+val+"'></input></td>")
    //       $( "#datepicker" ).datepicker({dateFormat:'dd-mm-yy',maxDate: 0})
    //     }
    //     else{items.push("<td id='" + key + "'>" + val + "</li>");
    //     };
    //   });
      
    //   $("<tr/>", {
    //     "class": "my-new-list",
    //     html: items.join("")
    //   }).appendTo("#sample_data");
    // }




// $("#send").click(function(){
//   $.post( "/api/login", {
//     "dni": "1111111Z",
//     "full_name": "Pepe Viñuela",
//     "account_type": "Investement account",
//     "amount": 1000000,
//     "client_type": "Very Rich Client",
//     "entry_date": "2012-05-10T22:00:00.000Z"
//   })
//   .done(function( data ) {
//     alert( "Data Loaded: " + data );
//   });
// })

  




// for (let i = 0; i < data.length; i++) {
//   si = data[i];
//   if(si["amount"]<10000){
//     si["client_type"]="Poor client"
//   }
//   else if(si["amount"]>10000 && si["amount"]<100000){
//     si["client_type"]="Normall client"
//   }
//   else if(si["amount"]>100000){
//     si["client_type"]="Very rich client"
//   }
//   console.log(si);
//   var items = [];
//   $.each(si, function (key, val) {
//     if(key == 'full_name' || key == 'amount'){
//     items.push("<td id='" + key + "'><input value='"+ val + "'> </input></td>")}
//     else if(key == 'account_type'){
//       items.push("<td id='" + key + "'><select><option>"+val+"</option><option>Personal Account</option><option>Savings account</option>Solidary account</select></td>")
//     }
//     else if(key=='entry_date'){
//       items.push("<td id='" + key + "'><input id='datepicker' value='"+val+"'></input></td>")
//       $( "#datepicker" ).datepicker({dateFormat:'dd-mm-yy',maxDate: 0})
//     }
//     else{items.push("<td id='" + key + "'>" + val + "</li>");
//     };
//   });
  
//   $("<tr/>", {
//     "class": "my-new-list",
//     html: items.join("")
//   }).appendTo("#sample_data");
// }
