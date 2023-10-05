const options = {
    method: "POST",
    headers:{
      "Content-Type":"application/json"
    },
  }

let c_arr = document.querySelectorAll(".cbox")
for(let i=0; i<c_arr.length; i++){
    c_arr[i].addEventListener("click", async (e)=>{
        let res = await fetch("/updateaction/"+i, options)
        console.log(res);
        if(res.ok) location.reload()
    })
}
//adding css to deleted row
$(".bi-trash3").click( function(){
  var smart = "this-row";
  var i = $(this).attr("id");
  smart = smart +  i;
  console.log("."+smart);
  $("."+smart).toggleClass("delete");
  $(this).toggleClass("delete");
  console.log("class of del btn is = "+ $(this).attr("class"));
})

$(".btn.btn-success").click(async function(e) {
let arr = document.querySelectorAll(".bi-trash3.delete")
for(let i=0; i<arr.length; i++){
  //console.log(c_arr);  
let res = await fetch("/delete/"+ $(arr[i]).attr("id"), options)//sending index to delete array element
console.log($(arr[i]).attr("id"));
if(res.ok) location.reload()
}
// location.reload()
})