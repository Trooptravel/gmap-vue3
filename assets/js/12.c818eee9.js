(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{414:function(t,e,a){"use strict";a.r(e);a(10),a(26);var l={name:"eg-autocomplete",data:function(){return{markers:[],place:null}},methods:{setDescription:function(t){this.description=t},setPlace:function(t){this.place=t},usePlace:function(t){this.place&&(this.markers.push({position:{lat:this.place.geometry.location.lat(),lng:this.place.geometry.location.lng()}}),this.place=null)}}},o=a(9),n=Object(o.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",[t._v("Autocomplete Example (#164)")]),t._v(" "),a("label",[t._v("\n    AutoComplete\n    "),a("gmap-autocomplete",{attrs:{placeholder:"This is a placeholder text"},on:{place_changed:t.setPlace}}),t._v(" "),a("button",{on:{click:t.usePlace}},[t._v("Add")])],1),t._v(" "),a("br"),t._v(" "),a("br"),t._v(" "),a("Gmap-Map",{staticStyle:{width:"600px",height:"300px"},attrs:{zoom:1,center:{lat:0,lng:0}}},[t._l(t.markers,(function(t,e){return a("Gmap-Marker",{key:e,attrs:{position:t.position}})})),t._v(" "),this.place?a("Gmap-Marker",{attrs:{label:"&#x2605;",position:{lat:this.place.geometry.location.lat(),lng:this.place.geometry.location.lng()}}}):t._e()],2)],1)}),[],!1,null,"03f94725",null);e.default=n.exports}}]);