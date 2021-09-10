var floatAgeYears, floatAgeDays, floatAgeMonths, floatAgeWeeks, floatAgeFortnights
     floatAgeYears= parseFloat(prompt("Please Enter Your Age in Years!"));
     floatAgeDays= parseFloat(floatAgeYears*365.25);
     floatAgeWeeks= parseFloat(floatAgeDays/7);
     floatAgeFortnights= parseFloat(floatAgeDays/14);
     floatAgeMonths= parseFloat(floatAgeYears*12);
     alert("Your age in Days is " floatAgeDays, "Your age in Weeks is " floatAgeWeeks,
           "Your age in Fortnights is " floatAgeFortnights, "Your age in Months is " floatAgeMonths);