//var car ={ 
  //  name: "eiei",
    //model:500,
    //weight: '850kg',
    //color: 'white',
    //start: function() {
      //  alert(this.name + 'Engine sarted');
    //}

//}
//car.start();
//car.name= 'Honda';
//car.start();
 //var products = {};
 //products.name = 'Box';
 //products.price = 200;
 //products.amount = 6;
 //products.total = function() {
   //  return this.price * this.amount
 //}
 alert("total price is" + products.total());

 var employee = new Object();
 employee.id =100;
 employee.name = 'mark lee';
 employee.salary = 30000;

 document.write('id:${employee.id} name: ${employee.name} salary: ${employee.salary}');
  
 function emp(id,name,sa){
     this.id = id;
     this.name = name;
     this.salary = sa
 }

 employee1 = new emp(101, "mark lee", 10000);
 employee1 = new emp(101, "jeno lee", 30000);
 employee1 = new emp(101, "jaemin na", 80000);

 document.write(employee1.id + "<br>");
 document.write(employee1.name + "<br>");
 document.write(employee1.salary + "<br>");