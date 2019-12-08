var persons = ["Paolo","Anna","Maja"];
var edit =false;
var tempID=0;
update();
function update(){
    var output="";
for(let i=0;i<persons.length; i++){
    
    output+=persons[i]+ "<span title='remove"+persons[i] +"' onclick='remove("+ i +")'> [x] </span>"+"<span title='edit"+persons[i] +"' onclick='startEditing("+ i +")'> [edit] </span>" + "</br>" ;
}
document.getElementById("output").innerHTML=output;  
}

function add(){
    console.log("adding");

    var nameInput=document.getElementById("name").value;

    if(nameInput.length>0){
        persons.push(nameInput);
    }
    
    update();
}

function remove(id){
    console.log("remove" + id);
    persons.splice(id,1);
    update();
}

function startEditing(id){
    console.log("edit" + id);
    console.log(edit);
    document.getElementById("btnClick").hidden=true;
    document.getElementById("btnReset").hidden=true;
    document.getElementById("btnEdit").hidden=false;
    document.getElementById("btnEdit").innerHTML="edit "+ persons[id];
    document.getElementById("name").value=persons[id];    
    tempID=id;
}

function editing(){
    console.log(edit);
    persons[tempID]=document.getElementById("name").value;
    edit=false;
    update();
    document.getElementById("btnClick").hidden=false;
    document.getElementById("btnReset").hidden=false;
    document.getElementById("btnEdit").hidden=true;
    document.getElementById("name").value=""; 
    document.getElementById("name").placeholder="write a name"; 
}

function reset(){
    persons.splice(0,persons.length);
    update();

}

