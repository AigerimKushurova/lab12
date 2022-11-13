console.log("Hello, World!");
console.log(document);
const r = document.getElementsByTagName("h1");
r[0].parentNode.removeChild(r[0]);

let h1 = document.createElement("h1");
h1.innerHTML ="Lab12 Assignment"; 
h1.style.color = "blue";

let firstline= document.createElement("hr");

document.body.appendChild(h1);
document.body.appendChild(firstline);

//task section

let h2 = document.createElement("h2");
h2.innerHTML ="Task"; 
h2.style.color = "red";

let p1 = document.createElement("p");
p1.innerHTML = "In this task you have to reproduce this HTML page as is using <b>only</b> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";

let ul1 = document.createElement("ul");
let task_list = ["find elements in the DOM (<b>5 points</b>);","create/add/remove elements (<b>5 points</b>);","change content of the elements (<b>5 points</b>);","change styles of the elements (<b>5 points</b>);","change attributes of the elements (<b>5 points</b>);","change classes of the elements (<b>5 points</b>)."];

let i =0;
while (i<task_list.length){
	let task_li= document.createElement("li");
	task_li.innerHTML = task_list[i];
	if ( i%2==0){
		task_li.style.color="green";
	}
	else{
		task_li.style.color="purple";
	}
	ul1.appendChild(task_li);
	i++;
}



let p2 = document.createElement("p");
p2.innerHTML ="Basic necessary code can be found in the supplementary materials to the Lecture 12 via this <a id= 'alin' ></a>";

p2.classList.add("p2_l");


document.body.appendChild(h2);
document.body.appendChild(p1);
document.body.appendChild(ul1);
document.body.appendChild(p2);


let aaa = document.getElementById("alin");

let link = document.createElement("a");
link.innerHTML ="link.";
link.setAttribute("href","https://github.com/yessen/nu_web_programming/tree/main/week12");


aaa.parentNode.replaceChild(link,aaa);


let secline= document.createElement("hr");
document.body.appendChild(secline);


//subm section
let h3 = document.createElement("h2");
h3.innerHTML ="Submission"; 
h3.style.color = "red";

let p3 = document.createElement("p");
p3.innerHTML = "To submit your work, follow these instructions:";

let ul2 = document.createElement("ul");
let task_list2 = ["Create a new repository on Github, named <b>lab12</b> (<b>1 point</b>).","Clone this repository to your local machine and work inside it.","Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with <q>Hello, World!</q> message (<b>1 point</b>).","Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).","Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).","Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).", "After you finish your work, submit it to the Github (<b>2 points</b>)."];

let m =0;
while (m<7){
	let task_li= document.createElement("li");
	task_li.innerHTML = task_list2[m];
	if ( m%2==0){
		task_li.style.color="green";
	}
	else{
		task_li.style.color="purple";
	}
	ul2.appendChild(task_li);
	m++;
}


let thrline= document.createElement("hr");

document.body.appendChild(h3);
document.body.appendChild(p3);
document.body.appendChild(ul2);
document.body.appendChild(thrline);
console.log(document);