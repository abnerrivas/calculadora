
//reinicia los fondos y colores 
function del(){
    var value=document.getElementById('screen').value;
    document.getElementById('screen').value=value.substr(0,value.length-1);
}

//selector 1
        var one=document.getElementById('one');
		one.addEventListener('click',function(){
			var body=document.querySelector('body');
			var base=document.getElementById('circle');
			body.classList.remove('active1');
			body.classList.remove('active2');
			base.style.left='0';
		})
        //selector 2
        var two=document.getElementById('two');
		two.addEventListener('click',function(){
			var body=document.querySelector('body');
			var base=document.getElementById('circle');
			body.classList.add('active1');
			body.classList.remove('active2');
			base.style.left='36%';
		})
		//selector 3
		var three=document.getElementById('three');
		three.addEventListener('click',function(){
			var body=document.querySelector('body');
			var base=document.getElementById('circle');
			body.classList.add('active2');
			body.classList.remove('active1');
			base.style.left='65%';
		})