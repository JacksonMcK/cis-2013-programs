var floatAgeYears, floatAgeDays, floatAgeMonths, floatAgeWeeks, floatAgeFortnights
     floatAgeYears= prompt("Please Enter Your Age in Years!");
     floatAgeDays= floatAgeYears*365.25;
     floatAgeWeeks= floatAgeDays/7;
     floatAgeFortnights= floatAgeDays/14;
     floatAgeMonths= floatAgeYears*12;
     alert("Your age in Days is " floatAgeDays, "Your age in Weeks is " floatAgeWeeks,
           "Your age in Fortnights is " floatAgeFortnights, "Your age in Months is " floatAgeMonths);