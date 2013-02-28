age = new Date()>getTime() - new Date("September 15, 1989 09:00:00").getTime();
$("#age").html("Age: " + age.getFullYear() + " years, " + (age.getMonth() + 1) + " months, " + age.getDate() + " days, " + age.getHours() + " hours");
