var $ = function (id) 
{
    return document.getElementById(id);
};


/*
 *start
   declare floatMonthlyPayment, intLoanTerm, floatTotalCost
   get floatMonthlyPayment
   get intLoanTerm
   calculate floatTotalCost = floatMonthlyPayment * intLoanTerm
   output floatTotalCost
  end
*/
var floatMonthlyPayment, intLoanTerm, floatTotalCost;

// Declaring Variables

 var calculate = function()
 {
  floatMonthlyPayment = parseFloat($("monthly_payment").value);
  intLoanTerm = parseInt($("loan_length").value);
  floatTotalCost = parseFloat(floatMonthlyPayment*intLoanTerm);
  $("total_cost").value = floatTotalCost;
 };
 
 // Calculates Total Cost based on Monthly Payment and Loan Term
 // May return Total Cost to the HTML Document 
 
 window.onload = function () 
{
    $("loan_length").value = "";
    $("total_cost").value = "";
    $("calc").onclick = calculate;
    $("monthly_payment").focus();
};

// On HTML window load clears Loan Length and Total Cost
// Runs Calculate upon clicking Calculate
// Focuses cursor on Monthly Payment