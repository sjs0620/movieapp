(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(27)},17:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),i=n.n(o),s=(n(17),n(1)),c=n.n(s),l=n(4),u=n(5),m=n(6),v=n(9),p=n(7),d=n(10),f=(n(21),n(23),n(8)),g=n.n(f);function _(e){var t=e.poster,n=e.alt;return r.a.createElement("img",{src:t,alt:n,title:n,className:"Movie__Poster"})}function h(e){var t=e.genre;return r.a.createElement("span",{className:"Movie__Genre"},t," \xa0")}function E(e){var t=e.rating,n=function(e){for(var t=e.rating/2,n="",a=1;a<=5;a++)n+=a<=t?"\u2605":"\u2606";return n}({rating:t});return r.a.createElement("span",{className:"Movie__Rating"},t,"\xa0 ",n)}var w=function(e){var t=e.title,n=e.poster,a=e.genres,o=e.rating,i=e.synopsis;return r.a.createElement("div",{className:"Movie"},r.a.createElement("div",{className:"Movie__Column"},r.a.createElement(_,{poster:n,alt:t})),r.a.createElement("div",{className:"Movie__Column"},r.a.createElement("h1",null,t),r.a.createElement("div",{className:"Movie__Genres"},a.map(function(e,t){return r.a.createElement(h,{genre:e,key:t})}),r.a.createElement(E,{rating:o})),r.a.createElement("div",{className:"Movie__Synopsys"},r.a.createElement(g.a,{text:i,maxLine:"3",ellipsis:"...",trimRight:!0,basedOn:"letters"}))))},y=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={},n._renderMovies=function(){return n.state.movies.map(function(e){return console.log(e),r.a.createElement(w,{title:e.title_english,poster:e.medium_cover_image,key:e.id,genres:e.genres,rating:e.rating,synopsis:e.synopsis})})},n._getMovies=Object(l.a)(c.a.mark(function e(){var t;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._callApi();case 2:t=e.sent,n.setState({movies:t});case 4:case"end":return e.stop()}},e,this)})),n._callApi=function(){return fetch("https://yts.am/api/v2/list_movies.json?sort_by=download_count").then(function(e){return e.json()}).then(function(e){return e.data.movies}).catch(function(e){return console.log(e)})},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this._getMovies()}},{key:"render",value:function(){var e=this.state.movies;return r.a.createElement("div",{className:e?"App":"App--Loading"},e?this._renderMovies():"Loading")}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.348efcfd.chunk.js.map