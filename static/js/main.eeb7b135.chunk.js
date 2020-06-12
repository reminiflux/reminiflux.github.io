(this.webpackJsonpreminiflux=this.webpackJsonpreminiflux||[]).push([[0],{18:function(e,t,n){},20:function(e,t,n){e.exports=n(42)},25:function(e,t,n){},26:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(12),l=n.n(i),s=(n(25),n(3)),c=n(4),o=n(2),u=n(6),d=n(5),m=(n(26),n(9)),h=n(19),f=n.n(h);function p(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a=localStorage.getItem("miniflux_server"),r=localStorage.getItem("miniflux_api_key");if(!a||!r)return new Promise((function(e,t){return null}));var i={headers:{"X-Auth-Token":r}};n&&(i.method="PUT",i.body=JSON.stringify(n));var l=a+"/v1/"+e,s=function(e){return t(e+" ("+l+")")};return fetch(l,i).then((function(e){if(!e.ok)throw e;return 204===e.status?e:e.json()})).catch((function(e){if(e instanceof TypeError)s(e.message);else if(e instanceof Response){var t=e.headers.get("content-type");t&&-1!==t.indexOf("application/json")?e.json().then((function(e){return s(e.error_message)})):e.text().then((function(e){return s(e)}))}else s(String(e));return Promise.reject()}))}n(31);var g=n(7),v=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).handleCategoryClick=a.handleCategoryClick.bind(Object(o.a)(a)),a.handleFeedClick=a.handleFeedClick.bind(Object(o.a)(a)),a.unreadbubble=a.unreadbubble.bind(Object(o.a)(a)),a.prevFeed=a.prevFeed.bind(Object(o.a)(a)),a.nextFeed=a.nextFeed.bind(Object(o.a)(a)),a.currentRef=r.a.createRef(),a}return Object(c.a)(n,[{key:"scrollToCurrent",value:function(){this.currentRef.current&&this.currentRef.current.scrollIntoView({block:"center"})}},{key:"onKeyDown",value:function(e,t,n){switch(e){case"up":this.prevFeed(),this.scrollToCurrent(),t.preventDefault();break;case"down":this.nextFeed(),this.scrollToCurrent(),t.preventDefault()}}},{key:"handleFeedClick",value:function(e){this.props.onFeedChange(e)}},{key:"handleCategoryClick",value:function(e){this.props.onCategoryChange(e)}},{key:"prevFeed",value:function(){var e=this,t=this.props.currentFeed?Object.values(this.props.feeds).findIndex((function(t){return t.id===e.props.currentFeed.id}))-1:0;t>=0&&this.props.onFeedChange(Object.values(this.props.feeds)[t])}},{key:"nextFeed",value:function(){var e=this,t=this.props.currentFeed?Object.values(this.props.feeds).findIndex((function(t){return t.id===e.props.currentFeed.id}))+1:0;t>=0&&t<Object.values(this.props.feeds).length&&this.props.onFeedChange(Object.values(this.props.feeds)[t])}},{key:"unreadbubble",value:function(e){if(e.unreads)return r.a.createElement("span",{className:"unreadcount"},e.unreads)}},{key:"render",value:function(){var e=this;return this.props.feeds?r.a.createElement(g.a,{keyName:"up,down",onKeyDown:this.onKeyDown.bind(this)},r.a.createElement("div",{className:"feedlist"},Object.values(this.props.categories).sort((function(e,t){return e.title.localeCompare(t.title)})).map((function(t){return r.a.createElement("div",{key:t.id},r.a.createElement("div",{className:"categoryrow\n\t\t\t\t\t\t ".concat(t.id===(e.props.currentCategory?e.props.currentCategory.id:null)?"selected":"","\n\t\t\t\t\t\t "),onClick:function(){return e.handleCategoryClick(t)}},r.a.createElement("div",{className:"category"},t.title,e.unreadbubble(t))),Object.values(e.props.feeds).filter((function(e){return e.category.id===t.id})).sort((function(e,t){return e.title.localeCompare(t.title)})).map((function(t){return r.a.createElement("div",{className:"feedrow\n\t\t\t\t\t\t ".concat(t.id===(e.props.currentFeed?e.props.currentFeed.id:null)?"selected":"","\n\t\t\t\t\t\t "),ref:t.id===(e.props.currentFeed?e.props.currentFeed.id:null)?e.currentRef:void 0,onClick:function(){return e.handleFeedClick(t)},key:t.id},r.a.createElement("img",{className:"favico",src:t.icon_data,alt:""}),r.a.createElement("div",{className:"feed \n\t\t\t\t\t   \t   ".concat(t.parsing_error_count>0?"errorfeed":"","\n\t\t\t\t\t\t   "),title:t.parsing_error_message},t.title,e.unreadbubble(t)))})))})))):r.a.createElement("div",null,"...")}}]),n}(r.a.Component),b=(n(32),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={items:[],filter:localStorage.getItem("filter")||"u",sort:localStorage.getItem("sort")||"n"},a.fetch=a.fetch.bind(Object(o.a)(a)),a.getFeeds=a.getFeeds.bind(Object(o.a)(a)),a.fetchFeed=a.fetchFeed.bind(Object(o.a)(a)),a.toggleReadStatus=a.toggleReadStatus.bind(Object(o.a)(a)),a.toggleFilter=a.toggleFilter.bind(Object(o.a)(a)),a.toggleSort=a.toggleSort.bind(Object(o.a)(a)),a.markRead=a.markRead.bind(Object(o.a)(a)),a.markAllRead=a.markAllRead.bind(Object(o.a)(a)),a.markReadUntil=a.markReadUntil.bind(Object(o.a)(a)),a.markReadAfter=a.markReadAfter.bind(Object(o.a)(a)),a.handleClick=a.handleClick.bind(Object(o.a)(a)),a.prevItem=a.prevItem.bind(Object(o.a)(a)),a.nextItem=a.nextItem.bind(Object(o.a)(a)),a.firstItem=a.firstItem.bind(Object(o.a)(a)),a.lastItem=a.lastItem.bind(Object(o.a)(a)),a.currentRef=r.a.createRef(),a}return Object(c.a)(n,[{key:"scrollToCurrent",value:function(){this.currentRef.current&&this.currentRef.current.scrollIntoView({block:"center"})}},{key:"onKeyDown",value:function(e,t,n){switch(e){case"p":case"k":case"left":this.prevItem(),this.scrollToCurrent();break;case"n":case"j":case"right":case"space":this.nextItem(),this.scrollToCurrent(),t.preventDefault();break;case"home":this.firstItem(),this.scrollToCurrent();break;case"end":this.lastItem(),this.scrollToCurrent();break;case"u":this.toggleFilter();break;case"s":this.toggleSort();break;case"m":this.props.currentItem&&this.toggleReadStatus(this.props.currentItem);break;case"shift+a":this.markAllRead()}}},{key:"componentDidMount",value:function(){this.fetch()}},{key:"componentDidUpdate",value:function(e,t){(e.currentFeed!==this.props.currentFeed||e.currentCategory!==this.props.currentCategory||t.sort!==this.state.sort&&this.state.items.length>100||t.filter!==this.state.filter)&&this.fetch(),e.currentItem!==this.props.currentItem&&this.props.currentItem&&this.toggleReadStatus(this.props.currentItem,!0)}},{key:"getFeeds",value:function(){var e=this,t=[];return this.props.currentFeed?t=[this.props.currentFeed]:this.props.currentCategory&&(t=Object.values(this.props.feeds).filter((function(t){return t.category.id===e.props.currentCategory.id}))),t}},{key:"fetch",value:function(){var e=this;this.setState({items:[]}),this.getFeeds().forEach((function(t){(t.unreads>0||"a"===e.state.filter)&&e.fetchFeed(t)}))}},{key:"fetchFeed",value:function(e){var t=this;p("feeds/"+e.id+"/entries?limit="+(parseInt(localStorage.getItem("fetch_limit"))||100)+"&order=published_at&direction="+("n"===this.state.sort?"desc":"asc")+("u"===this.state.filter?"&status=unread":""),this.props.errorHandler).then((function(e){var n=t.getFeeds().map((function(e){return e.id})),a=e?e.entries.filter((function(e){return n.indexOf(e.feed.id)>=0})):[];t.setState({items:t.state.items.concat(a)})}),(function(e){}))}},{key:"handleClick",value:function(e){this.props.onItemChange(e)}},{key:"toggleReadStatus",value:function(e,t){var n=this,a=this.state.items,r=a.findIndex((function(t){return t.id===e}));void 0===t&&(t="unread"===a[r].status);var i=t?"read":"unread";p("entries",this.props.errorHandler,{entry_ids:[e],status:i}).then((function(){a[r].status=i,n.setState({items:a}),n.props.updateUnread(a[r].feed)}),(function(e){}))}},{key:"toggleFilter",value:function(e){var t=e?e.target.value:"u"===this.state.filter?"a":"u";this.setState({filter:t}),localStorage.setItem("filter",t),e&&e.target.blur()}},{key:"toggleSort",value:function(e){var t=e?e.target.value:"n"===this.state.sort?"o":"n";this.setState({sort:t}),localStorage.setItem("sort",t),e&&e.target.blur()}},{key:"prevItem",value:function(){var e=this,t=this.props.currentItem?this.state.items.findIndex((function(t){return t.id===e.props.currentItem}))-1:0;this.state.items.length>0&&t>=0&&this.props.onItemChange(this.state.items[t].id)}},{key:"nextItem",value:function(){var e=this,t=this.props.currentItem?this.state.items.findIndex((function(t){return t.id===e.props.currentItem}))+1:0;this.state.items.length>0&&t>=0&&t<this.state.items.length&&this.props.onItemChange(this.state.items[t].id)}},{key:"firstItem",value:function(){this.state.items.length>0&&this.props.onItemChange(this.state.items[0].id)}},{key:"lastItem",value:function(){this.state.items.length>0&&this.props.onItemChange(this.state.items[this.state.items.length-1].id)}},{key:"markRead",value:function(e){var t=this;e.length>0&&p("entries",this.props.errorHandler,{entry_ids:e.map((function(e){return e.id})),status:"read"}).then((function(){t.getFeeds().forEach((function(e){return t.props.updateUnread(e)})),t.fetch()}),(function(e){}))}},{key:"markAllRead",value:function(){this.markRead(this.state.items)}},{key:"markReadUntil",value:function(){var e=this,t=this.props.currentItem?this.state.items.findIndex((function(t){return t.id===e.props.currentItem})):-1;t>=0&&this.markRead(this.state.items.slice(0,t+1))}},{key:"markReadAfter",value:function(){var e=this,t=this.props.currentItem?this.state.items.findIndex((function(t){return t.id===e.props.currentItem})):-1;t>=0&&this.markRead(this.state.items.slice(t))}},{key:"feedlink",value:function(e,t){if(e&&t){var n=e.site_url?r.a.createElement("a",{href:e.site_url,target:"_blank",rel:"noopener noreferrer"},"\u2197"):"";return r.a.createElement("div",{className:"itemlisttitle"},r.a.createElement("span",{className:"titlename"},e.title),"\xa0",n,"\xa0",r.a.createElement("span",{className:"titlecounter"}," ",t.length," items"))}}},{key:"render",value:function(){var e=this,t=this.state.items;return r.a.createElement(g.a,{keyName:"p,k,left,n,j,right,m,shift+a,home,end,u,s,space",onKeyDown:this.onKeyDown.bind(this)},r.a.createElement(m.a,{split:"horizontal",minSize:"26px",defaultSize:"26px",allowResize:!1,pane2Style:{background:"#f5f5f5"}},r.a.createElement("div",{className:"itemlistcontrol"},this.feedlink(this.props.currentFeed||this.props.currentCategory,t),r.a.createElement("div",{className:"itemlistcontrolbuttons"},r.a.createElement("button",{onClick:this.markAllRead}," \u2713 Mark all as read"),r.a.createElement("button",{onClick:this.markReadUntil}," \u2b73 until selected"),r.a.createElement("button",{onClick:this.markReadAfter}," \u2b71 after selected"),r.a.createElement("select",{onChange:this.toggleFilter,value:this.state.filter},r.a.createElement("option",{value:"u"},"Show unread only"),r.a.createElement("option",{value:"a"},"Show all")),r.a.createElement("select",{onChange:this.toggleSort,value:this.state.sort},r.a.createElement("option",{value:"n"},"Newest first"),r.a.createElement("option",{value:"o"},"Oldest first")))),r.a.createElement("div",{className:"itemlist"},r.a.createElement("table",{className:"itemlist"},r.a.createElement("tbody",null,t.sort((function(t,n){return"o"===e.state.sort?t.published_at.localeCompare(n.published_at):n.published_at.localeCompare(t.published_at)})).map((function(t){return r.a.createElement("tr",{className:"itemlistitem \n\t\t\t  ".concat(t.id===e.props.currentItem?"selected":"","\n\t\t\t  ").concat("unread"===t.status?"unread":"read","\n\t\t\t  "),ref:t.id===e.props.currentItem?e.currentRef:void 0,key:t.id},r.a.createElement("td",{className:"favico"},r.a.createElement("img",{className:"minifavico",src:e.props.feeds[t.feed.id].icon_data,alt:""})),r.a.createElement("td",{className:"readstatus"},r.a.createElement("div",{className:"unread"===t.status?"unreaddot":"readdot",title:"Toggle read",onClick:function(){return e.toggleReadStatus(t.id,"unread"===t.status)}})),r.a.createElement("td",{className:"title",onClick:function(){return e.handleClick(t.id)}},t.title),r.a.createElement("td",{className:"timestamp",title:t.published_at,onClick:function(){return e.handleClick(t.id)}},function(e){var t=(Date.now()-Date.parse(e))/1e3;return t>86400?Math.floor(t/86400)+"d":t>3600?Math.floor(t/3600)+"h":Math.floor(t/60)+"m"}(t.published_at)))})))))))}}]),n}(r.a.Component)),y=(n(33),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={item:null},a.fetch=a.fetch.bind(Object(o.a)(a)),a.handleStar=a.handleStar.bind(Object(o.a)(a)),a.topRef=r.a.createRef(),a}return Object(c.a)(n,[{key:"onKeyDown",value:function(e,t,n){switch(e){case"f":this.handleStar();break;case"v":window.open(this.state.item.url,"_blank");break;case"c":window.open(this.state.item.comments_url||this.state.item.url,"_blank")}}},{key:"componentDidMount",value:function(){this.fetch()}},{key:"componentDidUpdate",value:function(e){e.currentItem!==this.props.currentItem&&this.fetch(),this.topRef.current&&this.topRef.current.scrollIntoView()}},{key:"fetch",value:function(){var e=this;this.props.currentItem?p("entries/"+this.props.currentItem,this.props.errorHandler).then((function(t){return e.setState({item:t},(function(e){}))})):this.setState({item:null})}},{key:"handleStar",value:function(){var e=this;p("entries/"+this.state.item.id+"/bookmark",this.props.errorHandler,{}).then((function(){return setTimeout(function(){this.fetch()}.bind(e),100)}),(function(e){}))}},{key:"render",value:function(){var e=this.state.item;if(!e)return r.a.createElement("div",null);var t,n={__html:e.content};return r.a.createElement(g.a,{keyName:"f,v,c",onKeyDown:this.onKeyDown.bind(this)},r.a.createElement("div",{ref:this.topRef},r.a.createElement("div",{className:"itemheader"},r.a.createElement("table",{className:"itemheader"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{className:"title"},r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},e.title),"\xa0",r.a.createElement("a",{href:e.comments_url?e.comments_url:e.url,title:"Comments",style:{textDecoration:"none"},target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{role:"img","aria-label":"comments"},"\ud83d\udcac"))),r.a.createElement("td",{rowSpan:"2",className:"star"},r.a.createElement("div",{className:"star",onClick:this.handleStar,title:"Toggle star"},e.starred?String.fromCharCode(9733):String.fromCharCode(9734)))),r.a.createElement("tr",null,r.a.createElement("td",{className:"controls"},e.author?e.author:e.feed.title,", ",(t=e.published_at,f()(t).format("D MMM HH:mm"))))))),r.a.createElement("div",{className:"itemcontent",dangerouslySetInnerHTML:n})))}}]),n}(r.a.Component)),k=n(10),E=n.n(k),I=(n(18),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={isOpen:!1},a.closeSettings=a.closeSettings.bind(Object(o.a)(a)),a.clearCache=a.clearCache.bind(Object(o.a)(a)),a.hostInput=r.a.createRef(),a.apikeyInput=r.a.createRef(),a.limitInput=r.a.createRef(),a}return Object(c.a)(n,[{key:"onKeyDown",value:function(e,t,n){switch(e){case"enter":this.closeSettings();break;case"esc":this.props.onClose()}}},{key:"componentDidMount",value:function(){this.setState({isOpen:!0})}},{key:"clearCache",value:function(){localStorage.removeItem("favicons"),this.forceUpdate()}},{key:"closeSettings",value:function(){localStorage.setItem("miniflux_server",this.hostInput.current.value),localStorage.setItem("miniflux_api_key",this.apikeyInput.current.value),localStorage.setItem("fetch_limit",parseInt(this.limitInput.current.value)||100),this.setState({isOpen:!1}),this.props.onClose()}},{key:"render",value:function(){return r.a.createElement(g.a,{keyName:"enter,esc",onKeyDown:this.onKeyDown.bind(this),filter:function(e){return!0}},r.a.createElement(E.a,{isOpen:this.state.isOpen,ariaHideApp:!1,className:"modal",overlayClassName:"overlay"},r.a.createElement("h3",null,"Configure connection to Miniflux"),r.a.createElement("p",null,r.a.createElement("b",null,"Host")," (without /v1, e.g. ",r.a.createElement("i",null,"https://miniflux.mydomain.tld"),"):",r.a.createElement("br",null),r.a.createElement("input",{ref:this.hostInput,defaultValue:localStorage.getItem("miniflux_server")})),r.a.createElement("p",null,r.a.createElement("b",null,"API key")," (generated in Miniflux):",r.a.createElement("br",null),r.a.createElement("input",{ref:this.apikeyInput,defaultValue:localStorage.getItem("miniflux_api_key")})),r.a.createElement("p",null,r.a.createElement("b",null,"Maximum number of items to fetch"),":",r.a.createElement("br",null),r.a.createElement("input",{ref:this.limitInput,defaultValue:localStorage.getItem("fetch_limit")||100})),r.a.createElement("p",null,r.a.createElement("b",null,"Icon cache size"),": ",localStorage.getItem("favicons")?Math.round(localStorage.getItem("favicons").length/1024):0,"k",r.a.createElement("br",null),r.a.createElement("button",{onClick:this.clearCache},"Clear cache")),r.a.createElement("button",{onClick:this.closeSettings},"OK")))}}]),n}(r.a.Component)),C=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={isOpen:!1},a.closeHelp=a.closeHelp.bind(Object(o.a)(a)),a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.setState({isOpen:!0})}},{key:"closeHelp",value:function(){this.setState({isOpen:!1}),this.props.onClose()}},{key:"render",value:function(){return r.a.createElement(E.a,{isOpen:this.state.isOpen,ariaHideApp:!1,className:"modal",overlayClassName:"overlay"},r.a.createElement("h3",null,"Keyboard shortcuts"),r.a.createElement("table",{className:"keyhelp"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Key"),r.a.createElement("th",null,"Command"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Up"),r.a.createElement("td",null,"Open previous feed")),r.a.createElement("tr",null,r.a.createElement("td",null,"Down"),r.a.createElement("td",null,"Open next feed")),r.a.createElement("tr",null,r.a.createElement("td",null,"Left/p/k"),r.a.createElement("td",null,"Open previous item")),r.a.createElement("tr",null,r.a.createElement("td",null,"Right/n/j/Space"),r.a.createElement("td",null,"Open next item")),r.a.createElement("tr",null,r.a.createElement("td",null,"Home"),r.a.createElement("td",null,"Open first item")),r.a.createElement("tr",null,r.a.createElement("td",null,"End"),r.a.createElement("td",null,"Open first item")),r.a.createElement("tr",null,r.a.createElement("td",null,"m"),r.a.createElement("td",null,"Mark item as read/unread")),r.a.createElement("tr",null,r.a.createElement("td",null,"A"),r.a.createElement("td",null,"Mark all items as read")),r.a.createElement("tr",null,r.a.createElement("td",null,"u"),r.a.createElement("td",null,"Toggle showing unread/all items")),r.a.createElement("tr",null,r.a.createElement("td",null,"s"),r.a.createElement("td",null,"Toggle item sort order (newest/oldest first)")),r.a.createElement("tr",null,r.a.createElement("td",null,"f"),r.a.createElement("td",null,"Star/unstar item")),r.a.createElement("tr",null,r.a.createElement("td",null,"v"),r.a.createElement("td",null,"Open original link in new tab")),r.a.createElement("tr",null,r.a.createElement("td",null,"c"),r.a.createElement("td",null,"Open comments link in new tab")),r.a.createElement("tr",null,r.a.createElement("td",null,"h"),r.a.createElement("td",null,"Show keyboard shortcuts")),r.a.createElement("tr",null,r.a.createElement("td",null,"Escape/Enter"),r.a.createElement("td",null,"Close modal window")))),r.a.createElement("p",null),r.a.createElement("button",{onClick:this.closeHelp},"OK"))}}]),n}(r.a.Component),S=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={currentFeed:null,currentCategory:null,currentItem:null,feeds:JSON.parse(localStorage.getItem("feeds"))||{},categories:JSON.parse(localStorage.getItem("categories"))||{},settingsIsOpen:!(localStorage.getItem("miniflux_server")&&localStorage.getItem("miniflux_api_key")),keyHelpIsOpen:!1,error:null},a.changeFeed=a.changeFeed.bind(Object(o.a)(a)),a.changeCategory=a.changeCategory.bind(Object(o.a)(a)),a.changeItem=a.changeItem.bind(Object(o.a)(a)),a.updateFeeds=a.updateFeeds.bind(Object(o.a)(a)),a.updateUnread=a.updateUnread.bind(Object(o.a)(a)),a.updateIcon=a.updateIcon.bind(Object(o.a)(a)),a.refresh=a.refresh.bind(Object(o.a)(a)),a.openSettings=a.openSettings.bind(Object(o.a)(a)),a.closeSettings=a.closeSettings.bind(Object(o.a)(a)),a.errorHandler=a.errorHandler.bind(Object(o.a)(a)),a.clearError=a.clearError.bind(Object(o.a)(a)),a.openKeyHelp=a.openKeyHelp.bind(Object(o.a)(a)),a.closeKeyHelp=a.closeKeyHelp.bind(Object(o.a)(a)),a}return Object(c.a)(n,[{key:"onKeyDown",value:function(e,t,n){switch(e){case"h":this.openKeyHelp();break;case"enter":case"esc":this.state.keyHelpIsOpen&&this.closeKeyHelp()}}},{key:"componentDidMount",value:function(){this.updateFeeds()}},{key:"updateFeeds",value:function(){var e=this;p("feeds",this.errorHandler).then((function(t){return e.setState({feeds:t.reduce((function(e,t){return e[t.id]=t,e}),{}),categories:t.reduce((function(e,t){return e[t.category.id]=t.category,e}),{})},(function(){localStorage.setItem("feeds",JSON.stringify(e.state.feeds)),localStorage.setItem("categories",JSON.stringify(e.state.categories))})),t}),(function(e){})).then((function(t){t&&t.forEach((function(t){e.updateUnread(t),e.updateIcon(t)}))}))}},{key:"updateUnread",value:function(e){var t=this;p("feeds/"+e.id+"/entries?status=unread&limit=1",this.errorHandler).then((function(n){return t.setState((function(t){var a=t.feeds;return a[e.id].unreads=n.total,{feeds:a}})),t.state.feeds})).then((function(e){return document.title=Object.values(e).reduce((function(e,t){return e+(t.unreads||0)}),0)+" | reminiflux",e})).then((function(e){t.setState((function(t){var n=t.categories;return Object.values(n).forEach((function(t){n[t.id].unreads=Object.values(e).filter((function(e){return e.category.id===t.id})).reduce((function(e,t){return e+(t.unreads||0)}),0)})),{categories:n}}))}),(function(e){}))}},{key:"updateIcon",value:function(e){var t=this;function n(t,n){t.setState((function(t){var a=t.feeds;return a[e.id].icon_data=n,{feeds:a}}))}n(this,"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgODAgODAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDgwIDgwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8ZyBpZD0iX3gzN183X0Vzc2VudGlhbF9JY29uc18xOV8iPg0KCTxwYXRoIGlkPSJEb2N1bWVudCIgZD0iTTY5LjIsMjIuNEw0Ny40LDAuNkM0NywwLjIsNDYuNSwwLDQ2LDBIMTRjLTIuMiwwLTQsMS44LTQsNHY3MmMwLDIuMiwxLjgsNCw0LDRoNTJjMi4yLDAsNC0xLjgsNC00VjIzLjcNCgkJQzY5LjksMjMuMSw2OS42LDIyLjgsNjkuMiwyMi40eiBNNDgsNi44TDYzLjIsMjJINDhWNi44eiBNNjYsNzZIMTRWNGgzMHYyMGMwLDEuMSwwLjksMiwyLDJoMjBWNzZ6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==");var a=JSON.parse(localStorage.getItem("favicons"))||{};e.icon&&(e.id in a?n(this,a[e.id]):p("feeds/"+e.id+"/icon",this.errorHandler).then((function(a){n(t,"data:"+a.data);var r=JSON.parse(localStorage.getItem("favicons"))||{};r[e.id]="data:"+a.data,localStorage.setItem("favicons",JSON.stringify(r))}),(function(e){})))}},{key:"refresh",value:function(){var e=this;p("feeds/refresh",this.props.errorHandler,{}).then((function(){e.updateFeeds(),setTimeout(function(){this.updateFeeds()}.bind(e),5e3)}),(function(e){}))}},{key:"changeFeed",value:function(e){this.setState({currentFeed:e,currentCategory:null,currentItem:null}),this.updateUnread(e)}},{key:"changeCategory",value:function(e){this.setState({currentFeed:null,currentCategory:e,currentItem:null})}},{key:"changeItem",value:function(e){this.setState({currentItem:e})}},{key:"openSettings",value:function(){this.setState({settingsIsOpen:!0})}},{key:"closeSettings",value:function(){this.setState({settingsIsOpen:!1}),this.updateFeeds()}},{key:"openKeyHelp",value:function(){this.setState({keyHelpIsOpen:!0})}},{key:"closeKeyHelp",value:function(){this.setState({keyHelpIsOpen:!1})}},{key:"errorHandler",value:function(e){this.setState({error:e})}},{key:"clearError",value:function(){this.setState({error:null})}},{key:"render",value:function(){if(this.state.settingsIsOpen)return r.a.createElement(I,{onClose:this.closeSettings});if(this.state.keyHelpIsOpen)return r.a.createElement(g.a,{keyName:"enter,esc",onKeyDown:this.onKeyDown.bind(this)},r.a.createElement(C,{onClose:this.closeKeyHelp}));var e=this.state.currentFeed,t=this.state.currentCategory,n=this.state.currentItem,a=this.state.error?r.a.createElement("div",{className:"error"},"API error: ",String(this.state.error),r.a.createElement("div",{className:"errorclose"},r.a.createElement("button",{onClick:this.clearError},"X"))):"";return r.a.createElement(g.a,{keyName:"h,enter,esc",onKeyDown:this.onKeyDown.bind(this)},r.a.createElement("div",null,a,r.a.createElement(m.a,{split:"vertical",minSize:300,defaultSize:parseInt(localStorage.getItem("v_split"))||"35%",onChange:function(e){return localStorage.setItem("v_split",e)}},r.a.createElement("div",null,r.a.createElement("button",{className:"settings",onClick:this.openSettings,title:"Settings"},"\u2699"),r.a.createElement("button",{className:"refresh",onClick:this.refresh,title:"Refresh feeds and counts"},"\u21bb"),r.a.createElement(v,{currentFeed:e,currentCategory:t,feeds:this.state.feeds,categories:this.state.categories,onFeedChange:this.changeFeed,onCategoryChange:this.changeCategory,errorHandler:this.errorHandler})),r.a.createElement(m.a,{split:"horizontal",minSize:"10%",defaultSize:parseInt(localStorage.getItem("h_split"))||"40%",onChange:function(e){return localStorage.setItem("h_split",e)}},r.a.createElement(b,{ref:this.itembrowserref,currentFeed:e,currentCategory:t,currentItem:n,feeds:this.state.feeds,onItemChange:this.changeItem,updateUnread:this.updateUnread,errorHandler:this.errorHandler}),r.a.createElement(y,{currentItem:n,errorHandler:this.errorHandler})))))}}]),n}(r.a.Component),O=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");O?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):j(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):j(t,e)}))}}()}},[[20,1,2]]]);