export default{
	inserted: function(el,binding,vnode){
		let navHeight = el.clientHeight;
		//console.log(navHeight)
		el.parentNode.addEventListener('scroll',function(){
			let scrollTop= el.parentNode.scrollTop;
			if(scrollTop>=31 ){
				el.style.position="fixed";
				el.style.top=0;
				el.style.zIndex=100;
				el.parentNode.style.paddingTop=navHeight+"px";
			}else{
				el.style.position="relative";
				el.parentNode.style.paddingTop="0px";
			}
			//console.log(scrollTop)
		},false)
		//console.log(el)
	}
}
