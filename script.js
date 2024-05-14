//your JS code here. If required.
document.getElementById("btn").addEventListener("click", async function (event) {
	event.preventDefault();
	const text = document.getElementById("text").value;
	const time= parseInt(document.getElementById("delay").value,10);
	function del(ms) {
		return new Promise(resolve => setTimeout(resolve,ms))
	}
	if(isNaN(time)||time<0){
		alert('Please enter a valid delay in milliseconds.');
    return;
	}
	await del(time);
	document.getElementById('output').innerText=text;
	
})