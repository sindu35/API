var firebaseConfig = {
    apiKey: "AIzaSyAySDYWbO4k0Z2MLsgvuNNFDw6oOczCFl4",
    authDomain: "project-f6f3e.firebaseapp.com",
    databaseURL: "https://project-f6f3e-default-rtdb.firebaseio.com",
    projectId: "project-f6f3e",
    storageBucket: "project-f6f3e.appspot.com",
    messagingSenderId: "940660529498",
    appId: "1:940660529498:web:9ce459eb1e7a390e693b63"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var dbrf=firebase.database().ref()
 function insertData(){
     var sname=document.getElementById("name").value;
     var roll=document.getElementById("rollno").value;
    

     dbrf.child(roll).set({
         NAME:sname,
         ID:roll,
        

     })
     console.log("inserted..")
     document.getElementById("result").innerHTML=""
 }
 function updateData()
 {
    
     var roll=document.getElementById("rollno").value;
     var newname=document.getElementById("name").value;
     
      dbrf.child(roll).update({NAME:newname})
      console.log("updated")
    
 }
 function deleteData()
 {
    var id=window.prompt("enter roll to delete")
    dbrf.child(id).remove()
    console.log("removed")
 }
 function readData()
 {
    table=document.createElement("TABLE")
    table.border="1";
    table.width="500";
    table.align="center"
   //table.class=`table table-stripped table-primary`
    row=table.insertRow(-1);
    var name=row.insertCell(-1);
    var rollno=row.insertCell(-1);
    name.innerHTML="<center>NAME</center>";
    rollno.innerHTML="<center>ROLL_NO</center>"
    table.border=1;

    dbrf.on("child_added",(snap)=>{
        
            row=table.insertRow(-1);
            var name=row.insertCell(-1);
            var rollno=row.insertCell(-1);
              console.log(snap.val().NAME)
              name.innerHTML=`<center>${snap.val().NAME}</center>`
              rollno.innerHTML=`<center>${snap.val().ID}</center>`
              console.log(snap.val().ID)
         

    })
    document.getElementById("result").innerHTML=""
    document.getElementById("result").append(table)
 }
