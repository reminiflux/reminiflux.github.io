(this.webpackJsonpreminiflux=this.webpackJsonpreminiflux||[]).push([[0],{19:function(e,t,n){e.exports=n(42)},24:function(e,t,n){},25:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(10),l=n.n(i),s=(n(24),n(3)),o=n(4),c=n(2),u=n(6),d=n(5),m=(n(25),n(8)),h=n(17),f=n.n(h);function p(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=localStorage.getItem("miniflux_server"),r=localStorage.getItem("miniflux_api_key");if(!a||!r)return new Promise((function(e,t){return null}));var i={headers:{"X-Auth-Token":r}};return n&&(i.method="PUT",i.body=JSON.stringify(n)),fetch(a+"/v1/"+e,i).then((function(e){return e}),(function(n){return t(e+" "+n),null}))}var g=n(12),b=(n(30),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={categories:[],feeds:[],icons:JSON.parse(localStorage.getItem("favicons"))||{}},a.fetch=a.fetch.bind(Object(c.a)(a)),a.refetch=a.refetch.bind(Object(c.a)(a)),a.unreadbubble=a.unreadbubble.bind(Object(c.a)(a)),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.fetch()}},{key:"fetch",value:function(){var e=this;Promise.all([p("categories",this.props.errorHandler),p("feeds",this.props.errorHandler)]).then((function(e){var t=Object(g.a)(e,2),n=t[0],a=t[1];return Promise.all([n?n.json():[],a?a.json():[]])})).then((function(t){var n=Object(g.a)(t,2),a=n[0],r=n[1];return e.setState({categories:a,feeds:r}),r})).then((function(t){t.forEach((function(t){e.props.updateUnread(t)})),t.forEach((function(t){t.icon&&!(t.id in e.state.icons)&&e.fetchIcon(t.id)}))}))}},{key:"fetchIcon",value:function(e){var t=this;p("feeds/"+e+"/icon",this.props.errorHandler).then((function(e){return e?e.json():null})).then((function(n){if(n){var a=t.state.icons;a[e]=n,t.setState({icons:a}),localStorage.setItem("favicons",JSON.stringify(t.state.icons))}}))}},{key:"refetch",value:function(){var e=this;p("feeds/refresh",this.props.errorHandler,{}).then((function(){e.fetch(),setTimeout(function(){this.fetch()}.bind(e),5e3)}))}},{key:"handleClick",value:function(e){this.props.onFeedChange(e)}},{key:"unreadbubble",value:function(e){if(e.id in this.props.unreads&&0!==this.props.unreads[e.id])return r.a.createElement("span",{className:"unreadcount"},this.props.unreads[e.id])}},{key:"render",value:function(){var e=this,t=this.state,n=t.categories,a=t.feeds,i=t.icons;return r.a.createElement("div",{className:"feedlist"},r.a.createElement("button",{className:"refresh",onClick:this.refetch,title:"Refresh feeds and counts"},"\u21bb"),n.map((function(t){return r.a.createElement("div",{key:t.id},r.a.createElement("div",{className:"category"},t.title),a.filter((function(e){return e.category.id===t.id})).sort((function(e,t){return e.title.localeCompare(t.title)})).map((function(t){return r.a.createElement("div",{className:"feedrow\n\t\t\t\t\t".concat(t.id===(e.props.feed?e.props.feed.id:null)?"selected":"","\n\t\t\t\t\t"),onClick:function(){return e.handleClick(t)},key:t.id},r.a.createElement("img",{className:"favico",src:t.id in i?"data:"+i[t.id].data:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgODAgODAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDgwIDgwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8ZyBpZD0iX3gzN183X0Vzc2VudGlhbF9JY29uc18xOV8iPg0KCTxwYXRoIGlkPSJEb2N1bWVudCIgZD0iTTY5LjIsMjIuNEw0Ny40LDAuNkM0NywwLjIsNDYuNSwwLDQ2LDBIMTRjLTIuMiwwLTQsMS44LTQsNHY3MmMwLDIuMiwxLjgsNCw0LDRoNTJjMi4yLDAsNC0xLjgsNC00VjIzLjcNCgkJQzY5LjksMjMuMSw2OS42LDIyLjgsNjkuMiwyMi40eiBNNDgsNi44TDYzLjIsMjJINDhWNi44eiBNNjYsNzZIMTRWNGgzMHYyMGMwLDEuMSwwLjksMiwyLDJoMjBWNzZ6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==",alt:""}),r.a.createElement("div",{className:"feed \n\t\t\t\t\t\t\t\t ".concat(e.props.unreads[t.id]>0?"unread":"read","\n\t\t\t\t\t\t\t\t ").concat(t.parsing_error_count>0?"errorfeed":"","\n\t\t\t\t\t\t\t\t "),title:t.parsing_error_message},t.title,e.unreadbubble(t)))})))})))}}]),n}(r.a.Component)),v=(n(31),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={items:[],filter:localStorage.getItem("filter")||"u",sort:localStorage.getItem("sort")||"n"},a.fetch=a.fetch.bind(Object(c.a)(a)),a.toggleReadStatus=a.toggleReadStatus.bind(Object(c.a)(a)),a.toggleFilter=a.toggleFilter.bind(Object(c.a)(a)),a.toggleSort=a.toggleSort.bind(Object(c.a)(a)),a.markAllRead=a.markAllRead.bind(Object(c.a)(a)),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.fetch()}},{key:"componentDidUpdate",value:function(e,t){e.feed===this.props.feed&&t.sort===this.state.sort&&t.filter===this.state.filter||this.fetch(),e.item!==this.props.item&&this.props.item&&this.toggleReadStatus(this.props.item,!0)}},{key:"fetch",value:function(){var e=this;this.props.feed&&p("feeds/"+this.props.feed.id+"/entries?limit="+(parseInt(localStorage.getItem("fetch_limit"))||100)+"&order=published_at&direction="+("n"===this.state.sort?"desc":"asc")+("u"===this.state.filter?"&status=unread":""),this.props.errorHandler).then((function(e){return e?e.json():null})).then((function(t){return e.setState({items:t?t.entries:[]})}))}},{key:"handleClick",value:function(e){this.props.onItemChange(e)}},{key:"toggleReadStatus",value:function(e,t){var n=this,a=this.state.items,r=a.findIndex((function(t){return t.id===e})),i=t?"read":"unread";p("entries",this.props.errorHandler,{entry_ids:[e],status:i}).then((function(){a[r].status=i,n.setState({items:a}),n.props.updateUnread(n.props.feed)}))}},{key:"toggleFilter",value:function(e){this.setState({filter:e.target.value}),localStorage.setItem("filter",e.target.value)}},{key:"toggleSort",value:function(e){this.setState({sort:e.target.value}),localStorage.setItem("sort",e.target.value)}},{key:"markAllRead",value:function(){var e=this;this.state.items.length>0&&p("entries",this.props.errorHandler,{entry_ids:this.state.items.map((function(e){return e.id})),status:"read"}).then((function(){e.props.updateUnread(e.props.feed),e.fetch()}))}},{key:"feedlink",value:function(e,t){if(e)return r.a.createElement("div",{className:"controltitle"},r.a.createElement("a",{href:e.site_url,target:"_blank",rel:"noopener noreferrer"},e.title)," ",t," items")}},{key:"render",value:function(){var e=this,t=this.state.items;return r.a.createElement(m.a,{split:"horizontal",minSize:"26px",defaultSize:"26px",allowResize:!1,pane2Style:{background:"#f5f5f5"}},r.a.createElement("div",{className:"itemlistcontrol"},this.feedlink(this.props.feed,t.length),r.a.createElement("div",{className:"controlcontrols"},r.a.createElement("button",{onClick:this.markAllRead}," \u2713 Mark all as read"),r.a.createElement("select",{onChange:this.toggleFilter,value:this.state.filter},r.a.createElement("option",{value:"u"},"Show unread only"),r.a.createElement("option",{value:"a"},"Show all")),r.a.createElement("select",{onChange:this.toggleSort,value:this.state.sort},r.a.createElement("option",{value:"n"},"Newest first"),r.a.createElement("option",{value:"o"},"Oldest first")))),r.a.createElement("div",{className:"itemlist"},r.a.createElement("table",{className:"itemlist"},r.a.createElement("tbody",null,t.map((function(t){return r.a.createElement("tr",{className:"itemlistitem \n\t\t\t  ".concat(t.id===e.props.item?"selected":"","\n\t\t\t  ").concat("unread"===t.status?"unread":"read","\n\t\t\t  "),key:t.id},r.a.createElement("td",{className:"readstatus"},r.a.createElement("div",{className:"unread"===t.status?"unreaddot":"readdot",onClick:function(){return e.toggleReadStatus(t.id,"unread"===t.status)}})),r.a.createElement("td",{className:"title",onClick:function(){return e.handleClick(t.id)}},t.title),r.a.createElement("td",{className:"timestamp",onClick:function(){return e.handleClick(t.id)}},function(e){var t=(Date.now()-Date.parse(e))/1e3;return t>86400?Math.floor(t/86400)+"d":t>3600?Math.floor(t/3600)+"h":Math.floor(t/60)+"m"}(t.published_at)))}))))))}}]),n}(r.a.Component)),S=(n(32),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={item:null},a.fetch=a.fetch.bind(Object(c.a)(a)),a.handleStar=a.handleStar.bind(Object(c.a)(a)),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.fetch()}},{key:"componentDidUpdate",value:function(e){e.item!==this.props.item&&this.fetch()}},{key:"fetch",value:function(){var e=this;this.props.item?p("entries/"+this.props.item,this.props.errorHandler).then((function(e){return e?e.json():null})).then((function(t){return e.setState({item:t})})):this.setState({item:null})}},{key:"handleStar",value:function(){p("entries/"+this.state.item.id+"/bookmark",this.props.errorHandler,{}).then(setTimeout(function(){this.fetch()}.bind(this),100))}},{key:"render",value:function(){var e=this.state.item;if(!e)return r.a.createElement("div",null);var t,n={__html:e.content};return r.a.createElement("div",null,r.a.createElement("div",{className:"itemheader"},r.a.createElement("table",{className:"itemheader"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"title"},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},e.title),"\xa0",r.a.createElement("a",{href:e.comments_url?e.comments_url:e.url,style:{"text-decoration":"none"},target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{role:"img","aria-label":"comments"},"\ud83d\udcac"))),r.a.createElement("td",{rowspan:"2",className:"star"},r.a.createElement("div",{className:"star",onClick:this.handleStar},e.starred?String.fromCharCode(9733):String.fromCharCode(9734)))),r.a.createElement("tr",null,r.a.createElement("td",{className:"controls"},e.author?e.author:e.feed.title,", ",(t=e.published_at,f()(t).format("D MMM HH:mm"))))))),r.a.createElement("div",{className:"itemcontent",dangerouslySetInnerHTML:n}))}}]),n}(r.a.Component)),E=n(18),I=n.n(E),k=(n(41),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={isOpen:!1},a.closeSettings=a.closeSettings.bind(Object(c.a)(a)),a.clearCache=a.clearCache.bind(Object(c.a)(a)),a.hostInput=r.a.createRef(),a.apikeyInput=r.a.createRef(),a.limitInput=r.a.createRef(),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.setState({isOpen:!0})}},{key:"clearCache",value:function(){localStorage.removeItem("favicons"),this.forceUpdate()}},{key:"closeSettings",value:function(){localStorage.setItem("miniflux_server",this.hostInput.current.value),localStorage.setItem("miniflux_api_key",this.apikeyInput.current.value),localStorage.setItem("fetch_limit",parseInt(this.limitInput.current.value)||100),this.setState({isOpen:!1}),this.props.onClose()}},{key:"render",value:function(){return r.a.createElement(I.a,{isOpen:this.state.isOpen,ariaHideApp:!1,className:"settingsmodal",overlayClassName:"settingsoverlay"},r.a.createElement("h3",null,"Configure connection to Miniflux"),r.a.createElement("p",null,r.a.createElement("b",null,"Host")," (without /v1, e.g. ",r.a.createElement("i",null,"https://miniflux.mydomain.tld"),"):",r.a.createElement("br",null),r.a.createElement("input",{ref:this.hostInput,defaultValue:localStorage.getItem("miniflux_server")})," ",r.a.createElement("br",null),r.a.createElement("p",null),r.a.createElement("b",null,"API key")," (generated in Miniflux):",r.a.createElement("br",null),r.a.createElement("input",{ref:this.apikeyInput,defaultValue:localStorage.getItem("miniflux_api_key")}),r.a.createElement("p",null),r.a.createElement("b",null,"Maximum number of items to fetch"),":",r.a.createElement("br",null),r.a.createElement("input",{ref:this.limitInput,defaultValue:localStorage.getItem("fetch_limit")}),r.a.createElement("p",null),r.a.createElement("b",null,"Icon cache size"),": ",localStorage.getItem("favicons")?Math.round(localStorage.getItem("favicons").length/1024):0,"k",r.a.createElement("br",null),r.a.createElement("button",{onClick:this.clearCache},"Clear cache"),r.a.createElement("p",null),r.a.createElement("br",null),r.a.createElement("p",null)),r.a.createElement("button",{onClick:this.closeSettings},"OK"))}}]),n}(r.a.Component)),j=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={currentFeed:null,currentItem:null,unreads:{},settingsIsOpen:!(localStorage.getItem("miniflux_server")&&localStorage.getItem("miniflux_api_key")),error:null},a.changeFeed=a.changeFeed.bind(Object(c.a)(a)),a.changeItem=a.changeItem.bind(Object(c.a)(a)),a.updateUnread=a.updateUnread.bind(Object(c.a)(a)),a.openSettings=a.openSettings.bind(Object(c.a)(a)),a.closeSettings=a.closeSettings.bind(Object(c.a)(a)),a.errorHandler=a.errorHandler.bind(Object(c.a)(a)),a.clearError=a.clearError.bind(Object(c.a)(a)),a}return Object(o.a)(n,[{key:"changeFeed",value:function(e){this.setState({currentFeed:e,currentItem:null}),this.updateUnread(e)}},{key:"changeItem",value:function(e){this.setState({currentItem:e})}},{key:"updateUnread",value:function(e){var t=this;p("feeds/"+e.id+"/entries?status=unread&limit=1",this.errorHandler).then((function(e){return e?e.json():null})).then((function(n){if(n){var a=t.state.unreads;a[e.id]=n.total,t.setState({unreads:a}),document.title=Object.values(t.state.unreads).reduce((function(e,t){return e+t}))+" | reminiflux"}}))}},{key:"openSettings",value:function(){this.setState({settingsIsOpen:!0})}},{key:"closeSettings",value:function(){this.setState({settingsIsOpen:!1})}},{key:"errorHandler",value:function(e){this.setState({error:e})}},{key:"clearError",value:function(){this.setState({error:null})}},{key:"render",value:function(){if(this.state.settingsIsOpen)return r.a.createElement(k,{onClose:this.closeSettings});var e=this.state.currentFeed,t=this.state.currentItem,n=this.state.unreads,a=this.state.error?r.a.createElement("div",{className:"error"},"API error: ",String(this.state.error),r.a.createElement("div",{className:"errorclose"},r.a.createElement("button",{onClick:this.clearError},"X"))):"";return r.a.createElement("div",null,a,r.a.createElement(m.a,{split:"vertical",minSize:300,defaultSize:parseInt(localStorage.getItem("v_split"))||"35%",onChange:function(e){return localStorage.setItem("v_split",e)}},r.a.createElement("div",null,r.a.createElement("button",{className:"settings",onClick:this.openSettings,title:"Settings"},"\u2699"),r.a.createElement(b,{feed:e,unreads:n,onFeedChange:this.changeFeed,updateUnread:this.updateUnread,errorHandler:this.errorHandler})),r.a.createElement(m.a,{split:"horizontal",minSize:"10%",defaultSize:parseInt(localStorage.getItem("h_split"))||"40%",onChange:function(e){return localStorage.setItem("h_split",e)}},r.a.createElement(v,{feed:e,item:t,onItemChange:this.changeItem,updateUnread:this.updateUnread,errorHandler:this.errorHandler}),r.a.createElement(S,{item:t,errorHandler:this.errorHandler}))))}}]),n}(r.a.Component);l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[19,1,2]]]);