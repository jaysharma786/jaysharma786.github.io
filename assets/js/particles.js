var pJS=function(d,c){var b=document.querySelector("#"+d+" > .particles-js-canvas-el");this.pJS={canvas:{el:b,w:b.offsetWidth,h:b.offsetHeight},particles:{number:{value:400,density:{enable:true,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:false,anim:{enable:false,speed:2,opacity_min:0,sync:false}},size:{value:20,random:false,anim:{enable:false,speed:20,size_min:0,sync:false}},line_linked:{enable:true,distance:100,color:"#fff",opacity:1,width:1},move:{enable:true,speed:2,direction:"none",random:false,straight:false,out_mode:"out",bounce:false,attract:{enable:false,rotateX:3000,rotateY:3000}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:true,mode:"grab"},onclick:{enable:true,mode:"push"},resize:true},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:0.4},repulse:{distance:200,duration:0.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:false,fn:{interact:{},modes:{},vendors:{}},tmp:{}};var a=this.pJS;if(c){Object.deepExtend(a,c)}a.tmp.obj={size_value:a.particles.size.value,size_anim_speed:a.particles.size.anim.speed,move_speed:a.particles.move.speed,line_linked_distance:a.particles.line_linked.distance,line_linked_width:a.particles.line_linked.width,mode_grab_distance:a.interactivity.modes.grab.distance,mode_bubble_distance:a.interactivity.modes.bubble.distance,mode_bubble_size:a.interactivity.modes.bubble.size,mode_repulse_distance:a.interactivity.modes.repulse.distance};a.fn.retinaInit=function(){if(a.retina_detect&&window.devicePixelRatio>1){a.canvas.pxratio=window.devicePixelRatio;a.tmp.retina=true}else{a.canvas.pxratio=1;a.tmp.retina=false}a.canvas.w=a.canvas.el.offsetWidth*a.canvas.pxratio;a.canvas.h=a.canvas.el.offsetHeight*a.canvas.pxratio;a.particles.size.value=a.tmp.obj.size_value*a.canvas.pxratio;a.particles.size.anim.speed=a.tmp.obj.size_anim_speed*a.canvas.pxratio;a.particles.move.speed=a.tmp.obj.move_speed*a.canvas.pxratio;a.particles.line_linked.distance=a.tmp.obj.line_linked_distance*a.canvas.pxratio;a.interactivity.modes.grab.distance=a.tmp.obj.mode_grab_distance*a.canvas.pxratio;a.interactivity.modes.bubble.distance=a.tmp.obj.mode_bubble_distance*a.canvas.pxratio;a.particles.line_linked.width=a.tmp.obj.line_linked_width*a.canvas.pxratio;a.interactivity.modes.bubble.size=a.tmp.obj.mode_bubble_size*a.canvas.pxratio;a.interactivity.modes.repulse.distance=a.tmp.obj.mode_repulse_distance*a.canvas.pxratio};a.fn.canvasInit=function(){a.canvas.ctx=a.canvas.el.getContext("2d")};a.fn.canvasSize=function(){a.canvas.el.width=a.canvas.w;a.canvas.el.height=a.canvas.h;if(a&&a.interactivity.events.resize){window.addEventListener("resize",function(){a.canvas.w=a.canvas.el.offsetWidth;a.canvas.h=a.canvas.el.offsetHeight;if(a.tmp.retina){a.canvas.w*=a.canvas.pxratio;a.canvas.h*=a.canvas.pxratio}a.canvas.el.width=a.canvas.w;a.canvas.el.height=a.canvas.h;if(!a.particles.move.enable){a.fn.particlesEmpty();a.fn.particlesCreate();a.fn.particlesDraw();a.fn.vendors.densityAutoParticles()}a.fn.vendors.densityAutoParticles()})}};a.fn.canvasPaint=function(){a.canvas.ctx.fillRect(0,0,a.canvas.w,a.canvas.h)};a.fn.canvasClear=function(){a.canvas.ctx.clearRect(0,0,a.canvas.w,a.canvas.h)};a.fn.particle=function(g,h,f){this.radius=(a.particles.size.random?Math.random():1)*a.particles.size.value;if(a.particles.size.anim.enable){this.size_status=false;this.vs=a.particles.size.anim.speed/100;if(!a.particles.size.anim.sync){this.vs=this.vs*Math.random()}}this.x=f?f.x:Math.random()*a.canvas.w;this.y=f?f.y:Math.random()*a.canvas.h;if(this.x>a.canvas.w-this.radius*2){this.x=this.x-this.radius}else{if(this.x<this.radius*2){this.x=this.x+this.radius}}if(this.y>a.canvas.h-this.radius*2){this.y=this.y-this.radius}else{if(this.y<this.radius*2){this.y=this.y+this.radius}}if(a.particles.move.bounce){a.fn.vendors.checkOverlap(this,f)}this.color={};if(typeof(g.value)=="object"){if(g.value instanceof Array){var j=g.value[Math.floor(Math.random()*a.particles.color.value.length)];this.color.rgb=hexToRgb(j)}else{if(g.value.r!=undefined&&g.value.g!=undefined&&g.value.b!=undefined){this.color.rgb={r:g.value.r,g:g.value.g,b:g.value.b}}if(g.value.h!=undefined&&g.value.s!=undefined&&g.value.l!=undefined){this.color.hsl={h:g.value.h,s:g.value.s,l:g.value.l}}}}else{if(g.value=="random"){this.color.rgb={r:(Math.floor(Math.random()*(255-0+1))+0),g:(Math.floor(Math.random()*(255-0+1))+0),b:(Math.floor(Math.random()*(255-0+1))+0)}}else{if(typeof(g.value)=="string"){this.color=g;this.color.rgb=hexToRgb(this.color.value)}}}this.opacity=(a.particles.opacity.random?Math.random():1)*a.particles.opacity.value;if(a.particles.opacity.anim.enable){this.opacity_status=false;this.vo=a.particles.opacity.anim.speed/100;if(!a.particles.opacity.anim.sync){this.vo=this.vo*Math.random()}}var l={};switch(a.particles.move.direction){case"top":l={x:0,y:-1};break;case"top-right":l={x:0.5,y:-0.5};break;case"right":l={x:1,y:-0};break;case"bottom-right":l={x:0.5,y:0.5};break;case"bottom":l={x:0,y:1};break;case"bottom-left":l={x:-0.5,y:1};break;case"left":l={x:-1,y:0};break;case"top-left":l={x:-0.5,y:-0.5};break;default:l={x:0,y:0};break}if(a.particles.move.straight){this.vx=l.x;this.vy=l.y;if(a.particles.move.random){this.vx=this.vx*(Math.random());this.vy=this.vy*(Math.random())}}else{this.vx=l.x+Math.random()-0.5;this.vy=l.y+Math.random()-0.5}this.vx_i=this.vx;this.vy_i=this.vy;var k=a.particles.shape.type;if(typeof(k)=="object"){if(k instanceof Array){var e=k[Math.floor(Math.random()*k.length)];this.shape=e}}else{this.shape=k}if(this.shape=="image"){var i=a.particles.shape;this.img={src:i.image.src,ratio:i.image.width/i.image.height};if(!this.img.ratio){this.img.ratio=1}if(a.tmp.img_type=="svg"&&a.tmp.source_svg!=undefined){a.fn.vendors.createSvgImg(this);if(a.tmp.pushing){this.img.loaded=false}}}};a.fn.particle.prototype.draw=function(){var j=this;if(j.radius_bubble!=undefined){var f=j.radius_bubble}else{var f=j.radius}if(j.opacity_bubble!=undefined){var i=j.opacity_bubble}else{var i=j.opacity}if(j.color.rgb){var g="rgba("+j.color.rgb.r+","+j.color.rgb.g+","+j.color.rgb.b+","+i+")"}else{var g="hsla("+j.color.hsl.h+","+j.color.hsl.s+"%,"+j.color.hsl.l+"%,"+i+")"}a.canvas.ctx.fillStyle=g;a.canvas.ctx.beginPath();switch(j.shape){case"circle":a.canvas.ctx.arc(j.x,j.y,f,0,Math.PI*2,false);break;case"edge":a.canvas.ctx.rect(j.x-f,j.y-f,f*2,f*2);break;case"triangle":a.fn.vendors.drawShape(a.canvas.ctx,j.x-f,j.y+f/1.66,f*2,3,2);break;case"polygon":a.fn.vendors.drawShape(a.canvas.ctx,j.x-f/(a.particles.shape.polygon.nb_sides/3.5),j.y-f/(2.66/3.5),f*2.66/(a.particles.shape.polygon.nb_sides/3),a.particles.shape.polygon.nb_sides,1);break;case"star":a.fn.vendors.drawShape(a.canvas.ctx,j.x-f*2/(a.particles.shape.polygon.nb_sides/4),j.y-f/(2*2.66/3.5),f*2*2.66/(a.particles.shape.polygon.nb_sides/3),a.particles.shape.polygon.nb_sides,2);break;case"image":function e(){a.canvas.ctx.drawImage(h,j.x-f,j.y-f,f*2,f*2/j.img.ratio)}if(a.tmp.img_type=="svg"){var h=j.img.obj}else{var h=a.tmp.img_obj}if(h){e()}break}a.canvas.ctx.closePath();if(a.particles.shape.stroke.width>0){a.canvas.ctx.strokeStyle=a.particles.shape.stroke.color;a.canvas.ctx.lineWidth=a.particles.shape.stroke.width;a.canvas.ctx.stroke()}a.canvas.ctx.fill()};a.fn.particlesCreate=function(){for(var e=0;e<a.particles.number.value;e++){a.particles.array.push(new a.fn.particle(a.particles.color,a.particles.opacity.value))}};a.fn.particlesUpdate=function(){for(var h=0;h<a.particles.array.length;h++){var l=a.particles.array[h];if(a.particles.move.enable){var g=a.particles.move.speed/2;l.x+=l.vx*g;l.y+=l.vy*g}if(a.particles.opacity.anim.enable){if(l.opacity_status==true){if(l.opacity>=a.particles.opacity.value){l.opacity_status=false}l.opacity+=l.vo}else{if(l.opacity<=a.particles.opacity.anim.opacity_min){l.opacity_status=true}l.opacity-=l.vo}if(l.opacity<0){l.opacity=0}}if(a.particles.size.anim.enable){if(l.size_status==true){if(l.radius>=a.particles.size.value){l.size_status=false}l.radius+=l.vs}else{if(l.radius<=a.particles.size.anim.size_min){l.size_status=true}l.radius-=l.vs}if(l.radius<0){l.radius=0}}if(a.particles.move.out_mode=="bounce"){var e={x_left:l.radius,x_right:a.canvas.w,y_top:l.radius,y_bottom:a.canvas.h}}else{var e={x_left:-l.radius,x_right:a.canvas.w+l.radius,y_top:-l.radius,y_bottom:a.canvas.h+l.radius}}if(l.x-l.radius>a.canvas.w){l.x=e.x_left;l.y=Math.random()*a.canvas.h}else{if(l.x+l.radius<0){l.x=e.x_right;l.y=Math.random()*a.canvas.h}}if(l.y-l.radius>a.canvas.h){l.y=e.y_top;l.x=Math.random()*a.canvas.w}else{if(l.y+l.radius<0){l.y=e.y_bottom;l.x=Math.random()*a.canvas.w}}switch(a.particles.move.out_mode){case"bounce":if(l.x+l.radius>a.canvas.w){l.vx=-l.vx}else{if(l.x-l.radius<0){l.vx=-l.vx}}if(l.y+l.radius>a.canvas.h){l.vy=-l.vy}else{if(l.y-l.radius<0){l.vy=-l.vy}}break}if(isInArray("grab",a.interactivity.events.onhover.mode)){a.fn.modes.grabParticle(l)}if(isInArray("bubble",a.interactivity.events.onhover.mode)||isInArray("bubble",a.interactivity.events.onclick.mode)){a.fn.modes.bubbleParticle(l)}if(isInArray("repulse",a.interactivity.events.onhover.mode)||isInArray("repulse",a.interactivity.events.onclick.mode)){a.fn.modes.repulseParticle(l)}if(a.particles.line_linked.enable||a.particles.move.attract.enable){for(var f=h+1;f<a.particles.array.length;f++){var k=a.particles.array[f];if(a.particles.line_linked.enable){a.fn.interact.linkParticles(l,k)}if(a.particles.move.attract.enable){a.fn.interact.attractParticles(l,k)}if(a.particles.move.bounce){a.fn.interact.bounceParticles(l,k)}}}}};a.fn.particlesDraw=function(){a.canvas.ctx.clearRect(0,0,a.canvas.w,a.canvas.h);a.fn.particlesUpdate();for(var e=0;e<a.particles.array.length;e++){var f=a.particles.array[e];f.draw()}};a.fn.particlesEmpty=function(){a.particles.array=[]};a.fn.particlesRefresh=function(){cancelRequestAnimFrame(a.fn.checkAnimFrame);cancelRequestAnimFrame(a.fn.drawAnimFrame);a.tmp.source_svg=undefined;a.tmp.img_obj=undefined;a.tmp.count_svg=0;a.fn.particlesEmpty();a.fn.canvasClear();a.fn.vendors.start()};a.fn.interact.linkParticles=function(k,h){var g=k.x-h.x,f=k.y-h.y,j=Math.sqrt(g*g+f*f);if(j<=a.particles.line_linked.distance){var i=a.particles.line_linked.opacity-(j/(1/a.particles.line_linked.opacity))/a.particles.line_linked.distance;if(i>0){var e=a.particles.line_linked.color_rgb_line;a.canvas.ctx.strokeStyle="rgba("+e.r+","+e.g+","+e.b+","+i+")";a.canvas.ctx.lineWidth=a.particles.line_linked.width;a.canvas.ctx.beginPath();a.canvas.ctx.moveTo(k.x,k.y);a.canvas.ctx.lineTo(h.x,h.y);a.canvas.ctx.stroke();a.canvas.ctx.closePath()}}};a.fn.interact.attractParticles=function(k,i){var f=k.x-i.x,e=k.y-i.y,j=Math.sqrt(f*f+e*e);if(j<=a.particles.line_linked.distance){var h=f/(a.particles.move.attract.rotateX*1000),g=e/(a.particles.move.attract.rotateY*1000);k.vx-=h;k.vy-=g;i.vx+=h;i.vy+=g}};a.fn.interact.bounceParticles=function(j,g){var f=j.x-g.x,e=j.y-g.y,i=Math.sqrt(f*f+e*e),h=j.radius+g.radius;if(i<=h){j.vx=-j.vx;j.vy=-j.vy;g.vx=-g.vx;g.vy=-g.vy}};a.fn.modes.pushParticles=function(e,g){a.tmp.pushing=true;for(var f=0;f<e;f++){a.particles.array.push(new a.fn.particle(a.particles.color,a.particles.opacity.value,{x:g?g.pos_x:Math.random()*a.canvas.w,y:g?g.pos_y:Math.random()*a.canvas.h}));if(f==e-1){if(!a.particles.move.enable){a.fn.particlesDraw()}a.tmp.pushing=false}}};a.fn.modes.removeParticles=function(e){a.particles.array.splice(0,e);if(!a.particles.move.enable){a.fn.particlesDraw()}};a.fn.modes.bubbleParticle=function(f){if(a.interactivity.events.onhover.enable&&isInArray("bubble",a.interactivity.events.onhover.mode)){var o=f.x-a.interactivity.mouse.pos_x,g=f.y-a.interactivity.mouse.pos_y,i=Math.sqrt(o*o+g*g),j=1-i/a.interactivity.modes.bubble.distance;function m(){f.opacity_bubble=f.opacity;f.radius_bubble=f.radius}if(i<=a.interactivity.modes.bubble.distance){if(j>=0&&a.interactivity.status=="mousemove"){if(a.interactivity.modes.bubble.size!=a.particles.size.value){if(a.interactivity.modes.bubble.size>a.particles.size.value){var n=f.radius+(a.interactivity.modes.bubble.size*j);if(n>=0){f.radius_bubble=n}}else{var k=f.radius-a.interactivity.modes.bubble.size,n=f.radius-(k*j);if(n>0){f.radius_bubble=n}else{f.radius_bubble=0}}}if(a.interactivity.modes.bubble.opacity!=a.particles.opacity.value){if(a.interactivity.modes.bubble.opacity>a.particles.opacity.value){var h=a.interactivity.modes.bubble.opacity*j;if(h>f.opacity&&h<=a.interactivity.modes.bubble.opacity){f.opacity_bubble=h}}else{var h=f.opacity-(a.particles.opacity.value-a.interactivity.modes.bubble.opacity)*j;if(h<f.opacity&&h>=a.interactivity.modes.bubble.opacity){f.opacity_bubble=h}}}}}else{m()}if(a.interactivity.status=="mouseleave"){m()}}else{if(a.interactivity.events.onclick.enable&&isInArray("bubble",a.interactivity.events.onclick.mode)){if(a.tmp.bubble_clicking){var o=f.x-a.interactivity.mouse.click_pos_x,g=f.y-a.interactivity.mouse.click_pos_y,i=Math.sqrt(o*o+g*g),l=(new Date().getTime()-a.interactivity.mouse.click_time)/1000;if(l>a.interactivity.modes.bubble.duration){a.tmp.bubble_duration_end=true}if(l>a.interactivity.modes.bubble.duration*2){a.tmp.bubble_clicking=false;a.tmp.bubble_duration_end=false}}function e(s,t,r,w,p){if(s!=t){if(!a.tmp.bubble_duration_end){if(i<=a.interactivity.modes.bubble.distance){if(r!=undefined){var q=r}else{var q=w}if(q!=s){var v=w-(l*(w-s)/a.interactivity.modes.bubble.duration);if(p=="size"){f.radius_bubble=v}if(p=="opacity"){f.opacity_bubble=v}}}else{if(p=="size"){f.radius_bubble=undefined}if(p=="opacity"){f.opacity_bubble=undefined}}}else{if(r!=undefined){var x=w-(l*(w-s)/a.interactivity.modes.bubble.duration),u=s-x;v=s+u;if(p=="size"){f.radius_bubble=v}if(p=="opacity"){f.opacity_bubble=v}}}}}if(a.tmp.bubble_clicking){e(a.interactivity.modes.bubble.size,a.particles.size.value,f.radius_bubble,f.radius,"size");e(a.interactivity.modes.bubble.opacity,a.particles.opacity.value,f.opacity_bubble,f.opacity,"opacity")}}}};a.fn.modes.repulseParticle=function(g){if(a.interactivity.events.onhover.enable&&isInArray("repulse",a.interactivity.events.onhover.mode)&&a.interactivity.status=="mousemove"){var s=g.x-a.interactivity.mouse.pos_x,k=g.y-a.interactivity.mouse.pos_y,n=Math.sqrt(s*s+k*k);var l={x:s/n,y:k/n},h=a.interactivity.modes.repulse.distance,i=100,j=clamp((1/h)*(-1*Math.pow(n/h,2)+1)*h*i,0,50);var o={x:g.x+l.x*j,y:g.y+l.y*j};if(a.particles.move.out_mode=="bounce"){if(o.x-g.radius>0&&o.x+g.radius<a.canvas.w){g.x=o.x}if(o.y-g.radius>0&&o.y+g.radius<a.canvas.h){g.y=o.y}}else{g.x=o.x;g.y=o.y}}else{if(a.interactivity.events.onclick.enable&&isInArray("repulse",a.interactivity.events.onclick.mode)){if(!a.tmp.repulse_finish){a.tmp.repulse_count++;if(a.tmp.repulse_count==a.particles.array.length){a.tmp.repulse_finish=true}}if(a.tmp.repulse_clicking){var h=Math.pow(a.interactivity.modes.repulse.distance/6,3);var r=a.interactivity.mouse.click_pos_x-g.x,q=a.interactivity.mouse.click_pos_y-g.y,m=r*r+q*q;var f=-h/m*1;function e(){var p=Math.atan2(q,r);g.vx=f*Math.cos(p);g.vy=f*Math.sin(p);if(a.particles.move.out_mode=="bounce"){var t={x:g.x+g.vx,y:g.y+g.vy};if(t.x+g.radius>a.canvas.w){g.vx=-g.vx}else{if(t.x-g.radius<0){g.vx=-g.vx}}if(t.y+g.radius>a.canvas.h){g.vy=-g.vy}else{if(t.y-g.radius<0){g.vy=-g.vy}}}}if(m<=h){e()}}else{if(a.tmp.repulse_clicking==false){g.vx=g.vx_i;g.vy=g.vy_i}}}}};a.fn.modes.grabParticle=function(i){if(a.interactivity.events.onhover.enable&&a.interactivity.status=="mousemove"){var f=i.x-a.interactivity.mouse.pos_x,g=i.y-a.interactivity.mouse.pos_y,h=Math.sqrt(f*f+g*g);if(h<=a.interactivity.modes.grab.distance){var j=a.interactivity.modes.grab.line_linked.opacity-(h/(1/a.interactivity.modes.grab.line_linked.opacity))/a.interactivity.modes.grab.distance;if(j>0){var e=a.particles.line_linked.color_rgb_line;a.canvas.ctx.strokeStyle="rgba("+e.r+","+e.g+","+e.b+","+j+")";a.canvas.ctx.lineWidth=a.particles.line_linked.width;a.canvas.ctx.beginPath();a.canvas.ctx.moveTo(i.x,i.y);a.canvas.ctx.lineTo(a.interactivity.mouse.pos_x,a.interactivity.mouse.pos_y);a.canvas.ctx.stroke();a.canvas.ctx.closePath()}}}};a.fn.vendors.eventsListeners=function(){if(a.interactivity.detect_on=="window"){a.interactivity.el=window}else{a.interactivity.el=a.canvas.el}if(a.interactivity.events.onhover.enable||a.interactivity.events.onclick.enable){a.interactivity.el.addEventListener("mousemove",function(h){if(a.interactivity.el==window){var g=h.clientX,f=h.clientY}else{var g=h.offsetX||h.clientX,f=h.offsetY||h.clientY}a.interactivity.mouse.pos_x=g;a.interactivity.mouse.pos_y=f;if(a.tmp.retina){a.interactivity.mouse.pos_x*=a.canvas.pxratio;a.interactivity.mouse.pos_y*=a.canvas.pxratio}a.interactivity.status="mousemove"});a.interactivity.el.addEventListener("mouseleave",function(f){a.interactivity.mouse.pos_x=null;a.interactivity.mouse.pos_y=null;a.interactivity.status="mouseleave"})}if(a.interactivity.events.onclick.enable){a.interactivity.el.addEventListener("click",function(){a.interactivity.mouse.click_pos_x=a.interactivity.mouse.pos_x;a.interactivity.mouse.click_pos_y=a.interactivity.mouse.pos_y;a.interactivity.mouse.click_time=new Date().getTime();if(a.interactivity.events.onclick.enable){switch(a.interactivity.events.onclick.mode){case"push":if(a.particles.move.enable){a.fn.modes.pushParticles(a.interactivity.modes.push.particles_nb,a.interactivity.mouse)}else{if(a.interactivity.modes.push.particles_nb==1){a.fn.modes.pushParticles(a.interactivity.modes.push.particles_nb,a.interactivity.mouse)}else{if(a.interactivity.modes.push.particles_nb>1){a.fn.modes.pushParticles(a.interactivity.modes.push.particles_nb)}}}break;case"remove":a.fn.modes.removeParticles(a.interactivity.modes.remove.particles_nb);break;case"bubble":a.tmp.bubble_clicking=true;break;case"repulse":a.tmp.repulse_clicking=true;a.tmp.repulse_count=0;a.tmp.repulse_finish=false;setTimeout(function(){a.tmp.repulse_clicking=false},a.interactivity.modes.repulse.duration*1000);break}}})}};a.fn.vendors.densityAutoParticles=function(){if(a.particles.number.density.enable){var g=a.canvas.el.width*a.canvas.el.height/1000;if(a.tmp.retina){g=g/(a.canvas.pxratio*2)}var f=g*a.particles.number.value/a.particles.number.density.value_area;var e=a.particles.array.length-f;if(e<0){a.fn.modes.pushParticles(Math.abs(e))}else{a.fn.modes.removeParticles(e)}}};a.fn.vendors.checkOverlap=function(l,e){for(var h=0;h<a.particles.array.length;h++){var j=a.particles.array[h];var g=l.x-j.x,f=l.y-j.y,k=Math.sqrt(g*g+f*f);if(k<=l.radius+j.radius){l.x=e?e.x:Math.random()*a.canvas.w;l.y=e?e.y:Math.random()*a.canvas.h;a.fn.vendors.checkOverlap(l)}}};a.fn.vendors.createSvgImg=function(j){var l=a.tmp.source_svg,i=/#([0-9A-F]{3,6})/gi,e=l.replace(i,function(o,s,q,n){if(j.color.rgb){var p="rgba("+j.color.rgb.r+","+j.color.rgb.g+","+j.color.rgb.b+","+j.opacity+")"}else{var p="hsla("+j.color.hsl.h+","+j.color.hsl.s+"%,"+j.color.hsl.l+"%,"+j.opacity+")"}return p});var g=new Blob([e],{type:"image/svg+xml;charset=utf-8"}),k=window.URL||window.webkitURL||window,h=k.createObjectURL(g);var f=new Image();f.addEventListener("load",function(){j.img.obj=f;j.img.loaded=true;k.revokeObjectURL(h);a.tmp.count_svg++});f.src=h};a.fn.vendors.destroypJS=function(){cancelAnimationFrame(a.fn.drawAnimFrame);b.remove();pJSDom=null};a.fn.vendors.drawShape=function(n,k,h,p,o,e){var l=o*e;var j=o/e;var g=(180*(j-2))/j;var m=Math.PI-Math.PI*g/180;n.save();n.beginPath();n.translate(k,h);n.moveTo(0,0);for(var f=0;f<l;f++){n.lineTo(p,0);n.translate(p,0);n.rotate(m)}n.fill();n.restore()};a.fn.vendors.exportImg=function(){window.open(a.canvas.el.toDataURL("image/png"),"_blank")};a.fn.vendors.loadImg=function(f){a.tmp.img_error=undefined;if(a.particles.shape.image.src!=""){if(f=="svg"){var g=new XMLHttpRequest();g.open("GET",a.particles.shape.image.src);g.onreadystatechange=function(h){if(g.readyState==4){if(g.status==200){a.tmp.source_svg=h.currentTarget.response;a.fn.vendors.checkBeforeDraw()}else{console.log("Error pJS - Image not found");a.tmp.img_error=true}}};g.send()}else{var e=new Image();e.addEventListener("load",function(){a.tmp.img_obj=e;a.fn.vendors.checkBeforeDraw()});e.src=a.particles.shape.image.src}}else{console.log("Error pJS - No image.src");a.tmp.img_error=true}};a.fn.vendors.draw=function(){if(a.particles.shape.type=="image"){if(a.tmp.img_type=="svg"){if(a.tmp.count_svg>=a.particles.number.value){a.fn.particlesDraw();if(!a.particles.move.enable){cancelRequestAnimFrame(a.fn.drawAnimFrame)}else{a.fn.drawAnimFrame=requestAnimFrame(a.fn.vendors.draw)}}else{if(!a.tmp.img_error){a.fn.drawAnimFrame=requestAnimFrame(a.fn.vendors.draw)}}}else{if(a.tmp.img_obj!=undefined){a.fn.particlesDraw();if(!a.particles.move.enable){cancelRequestAnimFrame(a.fn.drawAnimFrame)}else{a.fn.drawAnimFrame=requestAnimFrame(a.fn.vendors.draw)}}else{if(!a.tmp.img_error){a.fn.drawAnimFrame=requestAnimFrame(a.fn.vendors.draw)}}}}else{a.fn.particlesDraw();if(!a.particles.move.enable){cancelRequestAnimFrame(a.fn.drawAnimFrame)}else{a.fn.drawAnimFrame=requestAnimFrame(a.fn.vendors.draw)}}};a.fn.vendors.checkBeforeDraw=function(){if(a.particles.shape.type=="image"){if(a.tmp.img_type=="svg"&&a.tmp.source_svg==undefined){a.tmp.checkAnimFrame=requestAnimFrame(check)}else{cancelRequestAnimFrame(a.tmp.checkAnimFrame);if(!a.tmp.img_error){a.fn.vendors.init();a.fn.vendors.draw()}}}else{a.fn.vendors.init();a.fn.vendors.draw()}};a.fn.vendors.init=function(){a.fn.retinaInit();a.fn.canvasInit();a.fn.canvasSize();a.fn.canvasPaint();a.fn.particlesCreate();a.fn.vendors.densityAutoParticles();a.particles.line_linked.color_rgb_line=hexToRgb(a.particles.line_linked.color)};a.fn.vendors.start=function(){if(isInArray("image",a.particles.shape.type)){a.tmp.img_type=a.particles.shape.image.src.substr(a.particles.shape.image.src.length-3);a.fn.vendors.loadImg(a.tmp.img_type)}else{a.fn.vendors.checkBeforeDraw()}};a.fn.vendors.eventsListeners();a.fn.vendors.start()};Object.deepExtend=function(a,c){for(var b in c){if(c[b]&&c[b].constructor&&c[b].constructor===Object){a[b]=a[b]||{};arguments.callee(a[b],c[b])}else{a[b]=c[b]}}return a};window.requestAnimFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1000/60)}})();window.cancelRequestAnimFrame=(function(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout})();function hexToRgb(c){var b=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;c=c.replace(b,function(e,h,f,d){return h+h+f+f+d+d});var a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);return a?{r:parseInt(a[1],16),g:parseInt(a[2],16),b:parseInt(a[3],16)}:null}function clamp(c,b,a){return Math.min(Math.max(c,b),a)}function isInArray(a,b){return b.indexOf(a)>-1}window.pJSDom=[];window.particlesJS=function(f,e){if(typeof(f)!="string"){e=f;f="particles-js"}if(!f){f="particles-js"}var c=document.getElementById(f),g="particles-js-canvas-el",b=c.getElementsByClassName(g);if(b.length){while(b.length>0){c.removeChild(b[0])}}var d=document.createElement("canvas");d.className=g;d.style.width="100%";d.style.height="100%";var a=document.getElementById(f).appendChild(d);if(a!=null){pJSDom.push(new pJS(f,e))}};window.particlesJS.load=function(c,a,d){var b=new XMLHttpRequest();b.open("GET",a);b.onreadystatechange=function(e){if(b.readyState==4){if(b.status==200){var f=JSON.parse(e.currentTarget.response);window.particlesJS(c,f);if(d){d()}}else{console.log("Error pJS - XMLHttpRequest status: "+b.status);console.log("Error pJS - File config not found")}}};b.send()};
