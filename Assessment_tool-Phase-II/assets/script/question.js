
function prgvalidate() {
  var isvalid=true
  var weight = document.querySelectorAll('#weightprg');
  var weighterror = document.querySelectorAll('#weightprErrorMessage');

  var specialization = document.querySelectorAll('#special');
  var specialerror = document.querySelectorAll('#specialErrorMessage');

  for (let i = 0; i < specialization.length; i++) {
    console.log('hi');
    if (specialization[i].value == '') {
      specialerror[i].innerHTML = 'The specialization must be selected';
      isvalid=false
    } else {
      specialerror[i].innerHTML = '';
    }
  }

  for (let j = 0; j < weight.length; j++) {
    if (/^[0-9]{1,}$/.test(weight[j].value)) {
      weighterror[j].innerHTML = '';
    } else if (weight[j].value.trim() === '') {
      weighterror[j].innerHTML = 'The weight is required';
      isvalid=false
    } else {
      weighterror[j].innerHTML = 'The weight is invalid';
      isvalid=flase
    }
  }
  return isvalid
}



function checkinginput()
{
var inputvalue=document.querySelectorAll('#input')
var inputerror=document.querySelectorAll('#inputErrorMessage')

var outputvalue=document.querySelectorAll('#output')
var outputerror=document.querySelectorAll('#outputErrorMessage')
for(let i=0;i<inputvalue.length;i++)
{
  if(inputvalue[i].value==='')
  {
    inputerror[i].innerHTML='The sample input is required'
  }
  else
  {
    inputerror[i].innerHTML=''

  }
}
for(let k=0;k<outputvalue.length;k++)
{
  if(outputvalue[k].value==='')
  {
    outputerror[k].innerHTML='The sample output is required'
  }
  else
  {
    outputerror[k].innerHTML=''

  }
}
}
function batchs()
{
var assessmentname=document.getElementById('batch').value
var errormessage=document.getElementById('batchErrorMessage');
errormessage.innerHTML=""
if(assessmentname.trim()=='')
{
  errormessage.innerHTML="Question type must be selected"
  return false
}
else
{
  errormessage.innerHTML="";
  return true
}
}

function complex()
{
var assessmentname=document.getElementById('complex').value
var errormessage=document.getElementById('complexErrorMessage');
errormessage.innerHTML=""
if(assessmentname.trim()=='')
{
  errormessage.innerHTML="Complexity must be selected"
  return false
}
else
{
  errormessage.innerHTML="";
  return true
}
}

function subject()
{
var assessmentname=document.getElementById('sub').value
var errormessage=document.getElementById('subjectErrorMessage');
errormessage.innerHTML=""
if(assessmentname.trim()=='')
{
  errormessage.innerHTML="Subject is required"
  return false
}
else
{
  errormessage.innerHTML="";
  return true
}
}
function topic()
{
var assessmentname=document.getElementById('topic').value
var errormessage=document.getElementById('topicErrorMessage');
errormessage.innerHTML=""
if(assessmentname.trim()=='')
{
  errormessage.innerHTML="Topic is required"
  return false
}
else
{
  errormessage.innerHTML="";
  return true
}
}

function mark()
{
var assessmentname=document.getElementById('marks').value
var errormessage=document.getElementById('markErrorMessage');
errormessage.innerHTML=""
if(assessmentname.trim()=='')
{
  errormessage.innerHTML="Mark is required"
  return false
}
else if(/^[0-9]{1,}$/.test(assessmentname))
{
  errormessage.innerHTML=" "
  return true

}
else
{
  errormessage.innerHTML="Mark is invalid";
  return false
}
}


      function validateForm() {

          var current_val=document.getElementById("batch").value
      var isvalid=true
          // Validate Multiple Choice Section
          if( current_val==='Multiple choice')
          {
              
          var questionInput = document.getElementById("multiple-choice").querySelector("#ques");
          var checkButtons = document.querySelectorAll("#multiple-choice input[type='checkbox']:checked");
          var questioner=document.getElementById("questionmultiple")
          if (questionInput.value.trim() === "") {
            questioner .innerHTML="Question is required"
             isvalid=false
          }
          else
          {
              questioner .innerHTML=""
          }
          var activeTab = document.querySelector('.nav-pills .nav-link.active').getAttribute('href');
          // Validate single choice Section
          if(activeTab=='#msg')
          {            
              var radioButtons = document.querySelectorAll("#multiple-choice input[type='radio']:checked");
              var optionsInputs = document.getElementById("msg").querySelectorAll("input[type='text']");
              var Inputs = document.getElementById("msg").querySelectorAll("#radioErrorMessage");
              var error=document.getElementById("msg").querySelectorAll('#ansErrorMessage')
          if (radioButtons.length === 0) {
             
                for(let j=0;j<error.length;j++)
                {
                  Inputs[j].innerHTML="Select the answer"
                  isvalid=false
                }
              // return false;
          }
          else
          {
              for(let k=0;k<error.length;k++)
              {
                Inputs[k].innerHTML=""

              }
          }

          for (var i = 0; i < optionsInputs.length; i++) {
              if (optionsInputs[i].value.trim() === "") {
                  error[i].innerHTML="Option is required"
                  isvalid=false
              }
              else
              {
                  error[i].innerHTML=""

              }
          }
          return isvalid
      }


 // Validate multiplechoice Section
     else if(activeTab=='#pro')
{      
          var checkButtons = document.querySelectorAll("#multiple-choice input[type='checkbox']:checked");
          var optionsInputs = document.getElementById("pro").querySelectorAll("#ans");
          var Inputs = document.getElementById("pro").querySelectorAll("#checkErrorMessage");
          var weighterror=document.getElementById("pro").querySelectorAll('#weighterror')
          var weight=document.getElementById("pro").querySelectorAll("#weightmultiple")
          var error=document.getElementById("pro").querySelectorAll('#ansErrorMessage')
      if (checkButtons.length === 0) {
         
            for(let j=0;j<error.length;j++)
            {
              Inputs[j].innerHTML="Select the answer"
              isvalid=false
            }
            for (var i = 0; i < weight.length; i++) {

              if (weight[i].value.trim() === "") {
                  weighterror[i].innerHTML="Enter the weight"
                  isvalid=false
              }
          }
          // return false;
      }
      else if (checkButtons.length === 1)
      {
          for(let k=0;k<error.length;k++)
          {
            Inputs[k].innerHTML="Select atleast two"
            isvalid=false
          }
          for (var i = 0; i < weight.length; i++) {

              if (weight[i].value.trim() === "") {
                  weighterror[i].innerHTML="Weight is required"
                  isvalid=false
              }
              else if(/^[0-9]{2}$/.test(weight[i].value))
              {
                  weighterror[i].innerHTML="Weight is invalid"
                  isvalid=false
              }
              else
              {
                  error[i].innerHTML=""

              }
          }
          }
      
      else
      {
          for(let k=0;k<error.length;k++)
          {
            Inputs[k].innerHTML=""
          }
          checkButtons.forEach(function (checkbox, index) {
              // Check if the checkbox is checked
              if (checkbox.checked) {
                  // Check the weight for the checked checkbox
                  if (weight[index].value.trim() =="") {
                     
                      weighterror[index].innerHTML = "Weight is required";
                      isvalid=false
                  } else if (!/^[0-9]{2}$/.test(weight[index].value.trim())) {
                      weighterror[index].innerHTML = "Weight is invalid";
                      isvalid=false
                  } else {
                      // Clear any previous error message
                      console.log("angel")
                      weighterror[index].innerHTML = " ";
  
                  }
              } else {
                console.log('pugal')
                  // Clear any previous error message for unchecked checkboxes
                  weighterror[index].innerHTML = "";

              }
          });
          
      }
  
      for (var i = 0; i < optionsInputs.length; i++) {
          if (optionsInputs[i].value.trim() === "") {
              error[i].innerHTML="Option is required"
              isvalid=false
          }
          else
          {
              error[i].innerHTML=""
          }
      }
      return isvalid
      }
  
    }


    // Validate Descriptive Section
  else if(current_val==='Descriptive')
  {
  
var descriptiveQuestionInput = document.getElementById("Descriptive").querySelector("#ques");
var descriptiveerror= document.getElementById("descriptiveErrorMessage")
          var wordCountInput = document.getElementById("words");
          var worderror=document.getElementById("wordErrorMessage")

          if (descriptiveQuestionInput.value.trim() === "") {
             
              descriptiveerror.innerHTML="Question is required"
              isvalid=false
          }
          else
          {
              descriptiveerror.innerHTML=""
          }

          if (wordCountInput.value.trim() === "") {
              worderror.innerHTML="Word count is required"
              isvalid=false
          }
          else if(!/^[0-9]{1,}$/.test(wordCountInput.value))
          {
              worderror.innerHTML="Word count is invalid"
              isvalid=false
          }
          else
          {
              worderror.innerHTML=""

          }
          return isvalid
  }
// Validate Programming Section
  else
  {
  
      var programmingQuestionInput = document.getElementById("programming").querySelector("#ques");
          var sampleInputInputs = document.querySelectorAll("#programming #input");
          var sampleOutputInputs = document.querySelectorAll("#programming #output");
          var prgquestionerror=document.getElementById("prgErrorMessage")
          var inputerror=document.querySelectorAll('#inputErrorMessage')
          var outputerror=document.querySelectorAll("#outputErrorMessage")
          if (programmingQuestionInput.value.trim() === "") {
             prgquestionerror.innerHTML="Question is required"
             isvalid=false
          }
          else
          {
              prgquestionerror.innerHTML=""

          }

          for (var i = 0; i < sampleInputInputs.length; i++) {
              if (sampleInputInputs[i].value.trim() === "" ) {
                  inputerror[i].innerHTML="Sample input is required"
                  isvalid=false
              }
              else
              {
                  inputerror[i].innerHTML=""

              }
          } 
          for (var i = 0; i < sampleOutputInputs.length; i++) {
              if (sampleOutputInputs[i].value.trim() === "") {
                  outputerror[i].innerHTML="Sample output is required"
                  isvalid=false
              }
              else
              {
                outputerror[i].innerHTML=""

              }
          } 
 var r1=  prgvalidate()     
 if(r1==false) 
 {
  isvalid=false
 }
  }
  return isvalid
}
         
          


function save()
{
var r2=batchs()
var r3=complex()
var r4=subject()
var r5=topic()
var r6=mark()
var r1= validateForm()
if(r1&&r2&& r3&&r4&& r5&&r6 )
{
  window.location.href='Assessment.html'
}

}
function saves()
{
var r2=batchs()
var r3=complex()
var r4=subject()
var r5=topic()
var r6=mark()
var r1= validateForm()
if(r1&&r2&& r3&&r4&& r5&&r6 )
{
  window.location.href = 'question.html';
}

}

function inside()

{
batchs()
complex()
subject()
topic()
mark()
validateForm()
}



// script to add the option in single
  document.addEventListener('DOMContentLoaded', function () {
  // Add new div on plus button click
  document.querySelector('.add-div').addEventListener('click', function () {
      var container = document.getElementById('container');
      var firstDiv = container.firstElementChild.cloneNode(true);
      firstDiv.querySelector('input[type="text"]').value = "";
      container.appendChild(firstDiv);
  });

  // Remove div on trash button click
  document.getElementById('container').addEventListener('click', function (event) {
      var removeButton = event.target.closest('.remove-div');
      if (removeButton && removeButton.classList.contains('remove-div')) {
          removeButton.closest('.col-12').remove();
      }
  });
});

// script to add the option in multiple
document.addEventListener('DOMContentLoaded', function () {
  // Add new div on plus button click
  document.querySelector('.add-div').addEventListener('click', function () {
      var container = document.getElementById('add');
      var firstDiv = container.firstElementChild.cloneNode(true);
      firstDiv.querySelector('input[type="text"]').value = "";
      container.appendChild(firstDiv);
  });

  // Remove div on trash button click
  document.getElementById('add').addEventListener('click', function (event) {
      var removeButton = event.target.closest('.remove-div');
      if (removeButton && removeButton.classList.contains('remove-div')) {
          removeButton.closest('.col-12').remove();
      }
  });
  
});
