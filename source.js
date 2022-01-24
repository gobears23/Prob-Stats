$(document).ready(function () {

var colorArray=["#019875","#1E8BC3","#D91E18","#D35400","#8E44AD","#C0392B"];
var cardState;
var currentQuestion=0;
var qbank=[["According to the empirical rule, what percent of the data should fall within 2 standard deviations of the mean?","95%"],["Define 0!","1"],["How can you find the probability of an event?","total # of sample points in event / total # of sample points OR sum of all the probabilities of the sample points in event"],["How do you calculate z-value?","z= (x - x_bar )/ s"],["How do you find P(A union B)?","P(A) + P(B) - P(A intersect B)"],["How do you find the median of an even numbered data set?","You place the numbers in ascending/descending order then find the mean of the two middle most numbers."],["If a probability distribution is skewed to the right, what does it say about the mean and median?","median < mean"],["If a sample is left skewed is the median larger or smaller than the mean?","larger"],["If a z score is less than the mean value, will the z score be positive or negative.","negative"],["If you roll a pair of dice, what is the probability that you roll a 10 or higher?","1 in 6"],["Is a Pareto chart organized in ascending or descending order?","Descending."],["what are s and s^2?","standard deviation vs variation"],["What are the different types of ways to illustrate quantitative data?","Dot plots, Stem & Leaf, Histograms"],["What are the distances from the hinges that make up the dimensions of a Box Plot?","The inner fence is at a distance of 1.5 IQR and the outer fence is at a distance of 3 IQR."],["What are three types of graphs you can use to display qualitative data?","Pie chart, bar graph, pareto diagram"],["What do the outer fences on a box plot represent?","It is the distance of 3IQR from the hinges."],["What do x̄ and μ mean?","x̄ = Sample Mean, μ = Population Mean"],["What does it mean if A and B are mutually exclusive?","A intersect B contains no sample points"],["What does standard deviation represent?","Standard deviation is the root of variance. It measures dispersion/spread of the data by showing the usual distance from the mean amongst observations in a data set."],["What does the middle line of the box and whisker plot represent?","It represents the median."],["What does the z score indicate?","The number of standard deviations away from the mean of a measurement x."],["What EXCEL formulas are used to find the highest, lowest, and middle values from a set of numerical data?","'=MAX(), =MIN(), =MEDIAN()"],["What is an EVENT?","A specific collection of sample points."],["What is the formula for class relative frequency?","class frequency/n"],["What is the interquartile range formula?","IQR=QU-QL or IQR = Q3-Q1"],["What is the median of the numbers below: 1,2,2,3,3,4,5,5,6","3"],["What is the probability of rolling a 2 when rolling a 6 sided dice?","1/6"],["What is the probability that when two coins are flipped the result is heads-heads?","The answer is 1/4."],["What is the sample space of a a 10 sided dice.","There are 10 possible numbers, therefore a sample space of n = 10."],["What is the symbol for sample mean and what is the symbol for population mean?","sample mean: x with bar over it population mean: mu"],["What kind of data is a dot plot used for?","Quantitative data"],["What method can be used to find a middle number of a data set if an outlier skews the mean.","Take the median"],["What range must sample point probabilities lie between","0-1 (inclusive)"],["When would you use combinations?","When the order doesn't mattter."]];

 

 
  beginActivity();
 

function beginActivity(){
 cardState=0;
 var color1=colorArray[Math.floor(Math.random()*colorArray.length)];
 $("#cardArea").empty();
 $("#cardArea").append('<div id="card1" class="card">' + qbank[currentQuestion][0] + '</div>');
 $("#cardArea").append('<div id="card2" class="card">' + qbank[currentQuestion][1] + '</div>');
 $("#card1").css("background-color",color1);
 $("#card2").css("background-color","#34495E");
 $("#card2").css("top","200px");
 $("#cardArea").on("click",function(){
  if(cardState!=1){
   cardState=1;
   //togglePosition();
   $("#card1").animate({top: "-=200"}, 150, function() {cardState=0;togglePosition();});
   $("#card2").animate({top: "-=200"}, 150, function() {togglePosition2();});
  }//if
 });//click function
 currentQuestion++;
 $("#buttonArea").empty();
 $("#buttonArea").append('<div id="nextButton">NEXT</div>');
 $("#nextButton").on("click",function(){
  if(currentQuestion<qbank.length){beginActivity();}
  else{displayFinalMessage();}
 });//click function
}//beginactivity

function togglePosition(){
 if($("#card1").position().top==-200){$("#card1").css("top","200px");};
}//toggle

function togglePosition2(){
 if($("#card2").position().top==-200){$("#card2").css("top","200px");};
}//toggle2

function displayFinalMessage(){
 $("#buttonArea").empty();
 $("#cardArea").empty();
 $("#cardArea").append('<div id="finalMessage">You have finished the activity.</div>');
}//final message

});