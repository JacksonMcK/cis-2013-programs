var floatAgeYears, floatAgeDays, floatAgeMonths, floatAgeWeeks, floatAgeFortnights;
     floatAgeYears= parseFloat(prompt("Please Enter Your Age in Years!")).toFixed(2);
     floatAgeDays= parseFloat(floatAgeYears*365.25).toFixed(2);
     floatAgeWeeks= parseFloat(floatAgeDays/7).toFixed(2);
     floatAgeFortnights= parseFloat(floatAgeDays/14).toFixed(2);
     floatAgeMonths= parseFloat(floatAgeYears*12).toFixed(2);
     alert("Your age in Days is " + floatAgeDays + ", Your age in Weeks is " + floatAgeWeeks +
           ", Your age in Fortnights is " + floatAgeFortnights + ", and Your age in Months is " + floatAgeMonths);