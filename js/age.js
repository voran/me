age = new Date(new Date().getTime() - new Date(1989, 09, 15, 9).getTime());
$("#age").html("Age: " + age.getFullYear() + " years, " + (age.getMonth() + 1) + " months, " + age.getDate() + " days, " + age.getHours() + " hours");
