!function e(l,t,a){function r(n,i){if(!t[n]){if(!l[n]){var u="function"==typeof require&&require;if(!i&&u)return u(n,!0);if(o)return o(n,!0);throw new Error("Cannot find module '"+n+"'")}var s=t[n]={exports:{}};l[n][0].call(s.exports,function(e){var t=l[n][1][e];return r(t||e)},s,s.exports,e,l,t,a)}return t[n].exports}for(var o="function"==typeof require&&require,n=0;n<a.length;n++)r(a[n]);return r}({1:[function(e,l,t){d3.json("./data/minneapolis.json",function(e,l){d3.json("./data/minneapolisParcels.json",function(e,t){$("#back").css("visibility","hidden");var a;a=$(window).width()<=845?11:12,$(window).on("load resize",function(){var e=$(window).width();a=e<=845?11:12,i.setView([44.983333,-93.266667],a)});var r=l.minneapolis,o=t.minneapolisParcels,n=new L.LatLngBounds(new L.LatLng(39.1982,-128.1445),new L.LatLng(50.5414,-68.2031));L.mapbox.accessToken="pk.eyJ1Ijoic2hhZG93ZmxhcmUiLCJhIjoiODRHdjBSWSJ9.lF4ymp-69zdGvZ5X4Tokzg";var i=L.mapbox.map("map","mapbox.light",{maxZoom:17,minZoom:11,bounds:n}).setView([44.983333,-93.266667],a);i.dragging.disable(),i.touchZoom.disable(),i.doubleClickZoom.disable(),i.scrollWheelZoom.disable(),$(document).ready(function(){function e(e,l,t){if("Minneapolis"==t){var a=d3.nest().key(function(t){return t.year==e&&t.rebuild==l}).rollup(function(e){return e.length}).entries(r);return a.length>1&&a[1].values>2e3?a[0].values:a.length>1&&a[1].values<2e3?a[1].values:0}var a=d3.nest().key(function(a){return a.year==e&&a.rebuild==l&&a.neighborhood==t}).rollup(function(e){return e.length}).entries(r);return a.length>1&&a[1].values>2e3?a[0].values:a.length>1&&a[1].values<2e3?a[1].values:0}function l(e,l,t){if(2001==e){var a=d3.nest().key(function(e){return e.rebuild==l&&e.CommName==t}).rollup(function(e){return e.length}).entries(r);return a.length>1&&a[1].values>2e3?a[0].values:a.length>1&&a[1].values<2e3?a[1].values:0}var a=d3.nest().key(function(a){return a.year==e&&a.rebuild==l&&a.CommName==t}).rollup(function(e){return e.length}).entries(r);return a.length>1&&a[1].values>2e3?a[0].values:a.length>1&&a[1].values<2e3?a[1].values:0}function t(e,l,t){if(2001==e){var a=d3.nest().key(function(e){return e.rebuild==l&&e.CommName==t}).rollup(function(e){return e.length}).entries(r);return a.length>1&&a[1].values>2e3?a[0].values:a.length>1&&a[1].values<2e3?a[1].values:0}var a=d3.nest().key(function(a){return a.year<=e&&a.rebuild==l&&a.CommName==t}).rollup(function(e){return e.length}).entries(r);return a.length>1&&a[1].values>2e3?a[0].values:a.length>1&&a[1].values<2e3?a[1].values:0}function n(e,l,t){if(2001==e){var a=d3.nest().key(function(e){return e.rebuild==l&&e.neighborhood==t}).rollup(function(e){return e.length}).entries(r);return a.length>1&&a[1].values>2e3?a[0].values:a.length>1&&a[1].values<2e3?a[1].values:0}var a=d3.nest().key(function(a){return a.year<=e&&a.rebuild==l&&a.neighborhood==t}).rollup(function(e){return e.length}).entries(r);return a.length>1&&a[1].values>2e3?a[0].values:a.length>1&&a[1].values<2e3?a[1].values:0}function u(e,l,t){if(2001==e){var a=d3.nest().key(function(e){return e.rebuild==l&&e.neighborhood==t}).rollup(function(e){return e.length}).entries(r);return a.length>1&&a[1].values>2e3?a[0].values:a.length>1&&a[1].values<2e3?a[1].values:0}var a=d3.nest().key(function(a){return a.year==e&&a.rebuild==l&&a.neighborhood==t}).rollup(function(e){return e.length}).entries(r);return a.length>1&&a[1].values>2e3?a[0].values:a.length>1&&a[1].values<2e3?a[1].values:0}function s(e,l){d3.select("#chart svg").datum(d(e,l)).transition().duration(300).call(v),nv.utils.windowResize(v.update)}function d(t,a){return 0==a?[{key:"Teardowns",color:"#801515",values:[{label:"2002",value:e(2002,!1,t)},{label:"2003",value:e(2003,!1,t)},{label:"2004",value:e(2004,!1,t)},{label:"2005",value:e(2005,!1,t)},{label:"2006",value:e(2006,!1,t)},{label:"2007",value:e(2007,!1,t)},{label:"2008",value:e(2008,!1,t)},{label:"2009",value:e(2009,!1,t)},{label:"2010",value:e(2010,!1,t)},{label:"2011",value:e(2011,!1,t)},{label:"2012",value:e(2012,!1,t)},{label:"2013",value:e(2013,!1,t)},{label:"2014",value:e(2014,!1,t)},{label:"2015",value:e(2015,!1,t)}]},{key:"Rebuilds",color:"#777",values:[{label:"2002",value:e(2002,!0,t)},{label:"2003",value:e(2003,!0,t)},{label:"2004",value:e(2004,!0,t)},{label:"2005",value:e(2005,!0,t)},{label:"2006",value:e(2006,!0,t)},{label:"2007",value:e(2007,!0,t)},{label:"2008",value:e(2008,!0,t)},{label:"2009",value:e(2009,!0,t)},{label:"2010",value:e(2010,!0,t)},{label:"2011",value:e(2011,!0,t)},{label:"2012",value:e(2012,!0,t)},{label:"2013",value:e(2013,!0,t)},{label:"2014",value:e(2014,!0,t)},{label:"2015",value:e(2015,!0,t)}]}]:1==a?[{key:"Teardowns",color:"#801515",values:[{label:"2002",value:l(2002,!1,t)},{label:"2003",value:l(2003,!1,t)},{label:"2004",value:l(2004,!1,t)},{label:"2005",value:l(2005,!1,t)},{label:"2006",value:l(2006,!1,t)},{label:"2007",value:l(2007,!1,t)},{label:"2008",value:l(2008,!1,t)},{label:"2009",value:l(2009,!1,t)},{label:"2010",value:l(2010,!1,t)},{label:"2011",value:l(2011,!1,t)},{label:"2012",value:l(2012,!1,t)},{label:"2013",value:l(2013,!1,t)},{label:"2014",value:l(2014,!1,t)},{label:"2015",value:l(2015,!1,t)}]},{key:"Rebuilds",color:"#777",values:[{label:"2002",value:l(2002,!0,t)},{label:"2003",value:l(2003,!0,t)},{label:"2004",value:l(2004,!0,t)},{label:"2005",value:l(2005,!0,t)},{label:"2006",value:l(2006,!0,t)},{label:"2007",value:l(2007,!0,t)},{label:"2008",value:l(2008,!0,t)},{label:"2009",value:l(2009,!0,t)},{label:"2010",value:l(2010,!0,t)},{label:"2011",value:l(2011,!0,t)},{label:"2012",value:l(2012,!0,t)},{label:"2013",value:l(2013,!0,t)},{label:"2014",value:l(2014,!0,t)},{label:"2015",value:l(2015,!0,t)}]}]:void 0}$.getJSON("shapefiles/minneapolis_communities.json",function(e){$.getJSON("shapefiles/tornado.json",function(d){$.getJSON("shapefiles/mpls.json",function(v){function c(e){s("Minneapolis",!1),2001==e?$("#thisYear").html("2002-2015"):$("#thisYear").html(""+e),$("#nb_title").html("Minneapolis"),m(""+e,null,!1),f(j,""+e),f(M,""+e),i.setView([44.983333,-93.266667],a),communityLayer.eachLayer(function(e){e.setStyle({fillColor:N(e.feature.properties.CommName,R.value())})}),B.eachLayer(function(e){e.setStyle({fillColor:w(e.feature.properties.Name,R.value())})})}function m(e,l,t){var a=0,n=0,i=0,u=0;d3.selectAll("text").style("font-weight","normal");d3.selectAll("text").each(function(l){d3.select(this).html()==e&&d3.select(this).style("font-weight","900")});if("2001"==e)if(null==l){for(var s=0;s<r.length;s++)1==r[s].rebuild?n++:a++;for(var s=0;s<o.length;s++)o[s].neighborhood==l&&(i=o[s].demos,u=o[s].rebuilds)}else{for(var s=0;s<r.length;s++)r[s].neighborhood==l&&(1==r[s].rebuild?n++:a++);for(var s=0;s<o.length;s++)o[s].neighborhood==l&&(i=o[s].demos,u=o[s].rebuilds)}else if(null==l){for(var s=0;s<r.length;s++)r[s].year==e&&(1==r[s].rebuild?n++:a++);for(var s=0;s<o.length;s++)o[s].neighborhood==l&&(i=o[s].demos,u=o[s].rebuilds)}else{for(var s=0;s<r.length;s++)r[s].neighborhood==l&&r[s].year==e&&(1==r[s].rebuild?n++:a++);for(var s=0;s<o.length;s++)o[s].neighborhood==l&&(i=o[s].demos,u=o[s].rebuilds)}0==t?($("#teardownsNum").html(a),$("#rebuildsNum").html(n),$("#total").html(Number($("#teardownsNum").text())+Number($("#rebuildsNum").text()))):1==t&&($("#teardownsNum").html(i),$("#rebuildsNum").html(u),$("#total").html(Number($("#teardownsNum").text())+Number($("#rebuildsNum").text())))}function f(e,l){e.eachLayer(function(e){"2001"==l?e.setStyle({fillOpacity:.3}):e.feature.properties.year==l?e.setStyle({fillOpacity:1}):e.setStyle({fillOpacity:0})})}function g(e,l){switch(e.properties.rebuild){case!0:return L.circleMarker(l,{radius:.05,color:"#fff",weight:1,opacity:0,fillOpacity:0});case!1:return L.circleMarker(l,{radius:5,color:"#AD1625",weight:1})}}function b(e,l){switch(e.properties.rebuild){case!0:return L.circleMarker(l,{radius:5,color:"#777",weight:1,opacity:1});case!1:return L.circleMarker(l,{radius:.05,color:"#fff",weight:1,opacity:0,fillOpacity:0})}}function h(e){return{weight:2,opacity:1,color:"#333",fillOpacity:0,fillColor:w(e.properties.Name,R.value())}}function p(e){return{weight:2,opacity:1,color:"#B35817",fillOpacity:0,fillColor:w(e.properties.Name,R.value())}}function y(e){return{weight:2,opacity:1,color:"#333",fillOpacity:1,fillColor:N(e.properties.CommName,R.value())}}function w(e,l){return n(l,!1,e)>=100?"#550000":n(l,!1,e)>=50?"#801515":n(l,!1,e)>=20?"#AA3939":n(l,!1,e)>=0?"#FFAAAA":"#ddd"}function N(e,l){return t(l,!1,e)>=200?"#550000":t(l,!1,e)>=100?"#801515":t(l,!1,e)>=50?"#AA3939":t(l,!1,e)>=0?"#FFAAAA":"#ddd"}function k(e,l){l.on({mousemove:_,mouseout:x,click:O})}function C(e,l){l.on({click:O})}function _(e){var l=e.target;P.setLatLng(e.latlng);var t=u(R.value(),!1,l.feature.properties.Name),a=u(R.value(),!0,l.feature.properties.Name),r=t+a;if(2001==R.value())var o="Total";else var o=R.value();P.setContent('<div class="marker-title">'+l.feature.properties.Name+'</div><div class="teardown">Accumulated Not Rebuilt: '+n(R.value(),!1,l.feature.properties.Name)+"</div><div>Teardowns "+o+": "+r+'</div><div class="teardown">Not Rebuilt '+o+": "+t+" ("+d3.format("%")(t/r)+')</div><div class="rebuild">Rebuilt: '+o+": "+a+" ("+d3.format("%")(a/r)+")</div>"),P._map||P.openOn(i),window.clearTimeout(V),l.setStyle({color:"#f00"}),L.Browser.ie||L.Browser.opera||l.bringToFront()}function x(e){e.target.setStyle({color:"#333"}),V=window.setTimeout(function(){i.closePopup()},100)}function O(e){var l=e.target;s(l.feature.properties.Name,!1),i.fitBounds(l.getBounds()),$("#nb_title").html(l.feature.properties.Name),m(R.value(),l.feature.properties.Name,!1),$("#total").html(Number($("#teardownsNum").text())+Number($("#rebuildsNum").text()))}function S(e,l){l.on({mousemove:A,mouseout:T,click:F})}function A(e){var a=e.target;P.setLatLng(e.latlng);var r=l(R.value(),!1,a.feature.properties.CommName),o=l(R.value(),!0,a.feature.properties.CommName),n=r+o;if(2001==R.value())var u="Total";else var u=R.value();P.setContent('<div class="marker-title">'+a.feature.properties.CommName+'</div><div class="teardown">Accumulated Not Rebuilt: '+t(R.value(),!1,a.feature.properties.CommName)+"</div><div>Teardowns "+u+": "+n+'</div><div class="teardown">Not Rebuilt '+u+": "+r+" ("+d3.format("%")(r/n)+')</div><div class="rebuild">Rebuilt: '+u+": "+o+" ("+d3.format("%")(o/n)+")</div>"),P._map||P.openOn(i),window.clearTimeout(V),a.setStyle({color:"#f00"}),L.Browser.ie||L.Browser.opera||a.bringToFront()}function T(e){e.target.setStyle({color:"#333"}),V=window.setTimeout(function(){i.closePopup()},100)}function F(e){var t=e.target;s(t.feature.properties.CommName,!0),i.fitBounds(t.getBounds()),$("#nb_title").html(t.feature.properties.CommName),$("#teardownsNum").html(l(R.value(),!1,t.feature.properties.CommName)),$("#rebuildsNum").html(l(R.value(),!0,t.feature.properties.CommName)),$("#total").html(Number($("#teardownsNum").text())+Number($("#rebuildsNum").text()))}$(".zoom").click(function(){s("Minneapolis",!1),i.setView([44.983333,-93.266667],a),$("#nb_title").html("Minneapolis"),m(R.value(),null,!1)}),$("#back").click(function(){R.value()-1>2e3&&(R.value(R.value()-1),c(R.value())),2001==R.value()&&$("#back").css("visibility","hidden")}),$("#forward").click(function(){$("#back").css("visibility","visible"),R.value()+1<2016&&(R.value(R.value()+1),c(R.value()))});var B;if($(window).width()<550)var J=7;else var J=15;var R=d3.slider().axis(!0);d3.select("#slider").call(R.min(2001).max(2015).value(2001).axis(d3.svg.axis().tickFormat(d3.format("")).orient("top").ticks(J)).step(1).on("slide",function(e,l){c(l),2001==l&&$("#back").css("visibility","hidden")})),d3.select("text").text("All"),m("2001",null,!1);for(var j=L.geoJson(null,{pointToLayer:g}),M=L.geoJson(null,{pointToLayer:b}),Z=0;Z<r.length;Z++)if("null"!=r[Z].longitude){var z=[{type:"Feature",geometry:{type:"Point",coordinates:[r[Z].longitude,r[Z].latitude]},properties:{neighborhood:r[Z].neighborhood,rebuild:r[Z].rebuild,year:r[Z].year,fulladdres:r[Z].fulladdres}}];j.addData(z),M.addData(z)}$("#demo_toggle input").on("change",function(){this.checked?(i.addLayer(j),i.addLayer(B),B.setStyle({fillOpacity:0}),i.removeLayer(communityLayer),$("#parcels_toggle, #nb_toggle").removeClass("active")):(B.setStyle({fillOpacity:0}),i.removeLayer(j))}),$("#rebuild_toggle input").on("change",function(){this.checked?(i.addLayer(M),i.addLayer(B),i.removeLayer(communityLayer),B.setStyle({fillOpacity:0}),$("#parcels_toggle, #nb_toggle").removeClass("active")):(B.setStyle({fillOpacity:0}),i.removeLayer(M))}),$("#tornado_toggle input").on("change",function(){this.checked?(i.addLayer(tornadoLayer),tornadoLayer.setStyle({fillOpacity:0}),$("#parcels_toggle").removeClass("active"),$("#tornadoOn").addClass("tornado"),$("#tornadoOn").html("2011 tornado damage on"),B.setStyle({fillOpacity:0})):(i.removeLayer(tornadoLayer),$("#tornadoOn").removeClass("tornado"),$("#tornadoOn").html("2011 tornado damage off"))}),$("#parcels_toggle input").on("change",function(){this.checked?($("#nb_toggle, #rebuild_toggle, #demo_toggle, #tornado_toggle").removeClass("active"),i.removeLayer(j),i.removeLayer(M),i.removeLayer(tornadoLayer),i.removeLayer(B),i.addLayer(communityLayer),i.removeLayer(j),i.removeLayer(M)):($("#rebuild_toggle, #demo_toggle").addClass("active"),i.addLayer(M),i.addLayer(j),i.removeLayer(communityLayer),i.addLayer(B))}),$("#nb_toggle input").on("change",function(){this.checked?($("#parcels_toggle, #rebuild_toggle, #demo_toggle, #tornado_toggle").removeClass("active"),i.removeLayer(j),i.removeLayer(M),i.removeLayer(tornadoLayer),i.removeLayer(communityLayer),i.addLayer(B),B.eachLayer(function(e){e.setStyle({weight:2,opacity:1,color:"#333",fillOpacity:1,fillColor:w(e.feature.properties.Name,R.value())})}),i.removeLayer(j),i.removeLayer(M)):($("#rebuild_toggle,#demo_toggle").addClass("active"),i.addLayer(M),i.addLayer(j),B.setStyle({fillOpacity:0}),i.removeLayer(communityLayer),i.addLayer(B))});var P=new L.Popup({autoPan:!1});B=L.geoJson(v,{style:h,onEachFeature:k}).addTo(i),tornadoLayer=L.geoJson(d,{style:p,onEachFeature:C}),communityLayer=L.geoJson(e,{style:y,onEachFeature:S}).addTo(i);var V})})});var v;nv.addGraph(function(){return v=nv.models.multiBarHorizontalChart().x(function(e){return e.label}).y(function(e){return e.value}).margin({top:30,right:20,bottom:20,left:40}).showValues(!1).tooltips(!0).stacked(!0).showLegend(!1).showControls(!1),v.yAxis.tickFormat(d3.format(",")),d3.select("#chart svg").datum(d("Minneapolis",!1)).transition().duration(500).call(v),nv.utils.windowResize(v.update),v})})})})},{}]},{},[1]);