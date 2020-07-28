!function(e){var t={};function a(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(r,o,function(t){return e[t]}.bind(null,o));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=9)}([function(e,t,a){},function(e,t,a){"use strict";a.r(t),t.default=a.p+"img/WelcomeSW.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"img/task.png"},function(e,t,a){const r=new(a(4));e.exports=class{async renderTrabajos(e){const t=(await r.getTrabajo()).data,a=[];t.forEach(t=>{t.cod_trabajo===e.cod_trabajo&&-1===a.indexOf(t)&&a.push(t),t.mat_trabajo===e.mat_trabajo&&-1===a.indexOf(t)&&a.push(t),t.cur_trabajo===e.cur_trabajo&&-1===a.indexOf(t)&&a.push(t),t.prof_trabajo===e.prof_trabajo&&-1===a.indexOf(t)&&a.push(t)});const o=document.querySelector("#table .tbody");o.innerHTML="",a.forEach(e=>{const t=document.createElement("tr");t.innerHTML=`\n                    <th>${e.cod_trabajo}</th>\n                    <td>${e.mat_trabajo}</td>\n                    <td>${e.prof_trabajo}</td>\n                    <td>${e.act_trabajo}</td>\n                    <td>${e.des_trabajo}</td>\n                    <td>${e.fei_trabajo}</td>\n                    <td>${e.fec_trabajo}</td>\n                    <td>${e.cur_trabajo}</td>\n            `,o.appendChild(t)})}async renderTrabajosDelete(e){const t=(await r.getTrabajo()).data,a=[];t.forEach(t=>{t.cod_trabajo===e.cod_trabajo&&-1===a.indexOf(t)&&a.push(t),t.mat_trabajo===e.mat_trabajo&&-1===a.indexOf(t)&&a.push(t),t.cur_trabajo===e.cur_trabajo&&-1===a.indexOf(t)&&a.push(t),t.prof_trabajo===e.prof_trabajo&&-1===a.indexOf(t)&&a.push(t)});const o=document.querySelector("#table .tbody");o.innerHTML="",a.forEach(e=>{const t=document.createElement("tr");t.innerHTML=`\n                    <th>${e.cod_trabajo}</th>\n                    <td>${e.mat_trabajo}</td>\n                    <td>${e.prof_trabajo}</td>\n                    <td>${e.act_trabajo}</td>\n                    <td>${e.des_trabajo}</td>\n                    <td>${e.fei_trabajo}</td>\n                    <td>${e.fec_trabajo}</td>\n                    <td>${e.cur_trabajo}</td>\n                    <td><a href="#" class="btn btn-danger delete" cod_trabajo=${e.cod_trabajo}>X</a></td>\n            `,o.appendChild(t)})}async renderTrabajoById(e){const t=(await r.getTrabajoOne(e)).data;console.log(t);const a=document.getElementById("tarea"),o=document.getElementById("descripcion"),n=document.getElementById("materia"),d=document.getElementById("curso"),c=document.getElementById("docente"),s=document.getElementById("fInicio"),i=document.getElementById("fFin");t?t.cod_trabajo===e&&(a.value=t.act_trabajo,o.value=t.des_trabajo,n.value=t.mat_trabajo,d.value=t.cur_trabajo,c.value=t.prof_trabajo,s.value=t.fei_trabajo,i.value=t.fec_trabajo):(this.renderMessage("El código ingresado no es correcto","danger"),this.clearFormEditar(),document.getElementById("guardar").setAttribute("disabled","true"))}async addTrabajos(e){const t=await r.postTrabajo(e);t==="Actividad creada".toUpperCase()?this.renderMessage(t,"success"):this.renderMessage(t,"danger"),this.clearFormIngreso()}async updateTrabajos(e){const t=await r.putTrabajo(e);t==="Datos actualizados".toUpperCase()?this.renderMessage(t,"success"):this.renderMessage(t,"danger"),this.clearFormEditar()}async deleteTrabajos(e){const t=await r.deleteTrabajo(e);t==="Dato eliminado".toUpperCase()?this.renderMessage(t,"success"):this.renderMessage(t,"danger")}renderMessage(e,t){const a=document.createElement("div");a.className=`alert alert-${t} message text-center`,a.appendChild(document.createTextNode(e));const r=document.querySelector(".main-container"),o=document.querySelector(".main-form");r.insertBefore(a,o),setTimeout(()=>{document.querySelector(".message").remove()},3e3)}clearFormIngreso(){document.getElementById("actividad-form").reset()}clearFormConsultar(){document.getElementById("consulta-form").reset()}clearFormEditar(){document.getElementById("consultaEdi-form").reset(),document.getElementById("edicion-form").reset()}clearFormEliminar(){document.getElementById("eliminar-form").reset()}}},function(e,t){e.exports=class{constructor(){this.URI="http://localhost:3000/api/trabajos"}async getTrabajo(){const e=await fetch(this.URI);return await e.json()}async getTrabajoOne(e){const t=await fetch(`${this.URI}/${e}`);return await t.json()}async postTrabajo(e){const t=JSON.stringify(e),a=await fetch(this.URI,{headers:{"Content-Type":"application/json"},method:"POST",body:t});return(await a.json()).message.toUpperCase()}async putTrabajo(e){const t=JSON.stringify(e),a=await fetch(this.URI,{headers:{"Content-Type":"application/json"},method:"PUT",body:t});return(await a.json()).message.toUpperCase()}async deleteTrabajo(e){const t=await fetch(`${this.URI}/${e}`,{headers:{"Content-Type":"application/json"},method:"DELETE"});return(await t.json()).message.toUpperCase()}}},,,,,function(e,t,a){a(0),a(1),a(2);const r=a(3);document.getElementById("eliminar-form").addEventListener("submit",e=>{e.preventDefault();const t=document.getElementById("codigo").value,a=document.getElementById("materia").value,o=document.getElementById("curso").value,n=document.getElementById("profesor").value;if(!t&&"Materia"===a&&"Curso"===o&&"Docente"===n){(new r).renderMessage("Seleccione un método de búsqueda","primary")}const d={cod_trabajo:parseInt(t),mat_trabajo:a,cur_trabajo:o,prof_trabajo:n};(new r).renderTrabajosDelete(d)}),document.getElementById("borrar").addEventListener("click",e=>{e.preventDefault();(new r).clearFormEliminar()}),document.getElementById("table").addEventListener("click",async e=>{if(e.preventDefault(),e.target.classList.contains("delete")){const t=e.target.getAttribute("cod_trabajo"),a=parseInt(t),o=document.getElementById("codigo").value,n=document.getElementById("materia").value,d=document.getElementById("curso").value,c=document.getElementById("profesor").value,s={cod_trabajo:parseInt(o),mat_trabajo:n,cur_trabajo:d,prof_trabajo:c},i=new r;await i.deleteTrabajos(a),i.renderTrabajosDelete(s)}})}]);
//# sourceMappingURL=eliminacion.bundle.js.map