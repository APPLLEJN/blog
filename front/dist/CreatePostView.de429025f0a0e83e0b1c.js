webpackJsonp([0],{48:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{shortname:{type:String,required:!0}},mounted:function(){if(window.DISQUS)return void this.reset(window.DISQUS);this.init()},methods:{reset:function(t){var e=this;t.reset({reload:!0,config:function(){this.page.identifier=e.$route.path||window.location.pathname,this.page.url=e.$el.baseURI}})},init:function(){var t=this,e=this;window.disqus_config=function(){this.page.identifier=e.$route.path||window.location.pathname,this.page.url=e.$el.baseURI},setTimeout(function(){var e=document,s=e.createElement("script");s.type="text/javascript",s.async=!0,s.setAttribute("id","embed-disqus"),s.setAttribute("data-timestamp",+new Date),s.src="//"+t.shortname+".disqus.com/embed.js",(e.head||e.body).appendChild(s)},0)}}}},49:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=(s(52),s(54)),n=s.n(o);e.default={name:"post",components:{Disqus:n.a},props:["type","post","prev","next","siteInfo","supportWebp"],mixins:[],serverCacheKey:function(t){return t.post.pathName+"::"+t.post.updatedAt+"::webp::"+t.supportWebp},computed:{content:function(){var t=this.post,e=t.toc?'<div id="toc" class="toc">'+t.toc+"</div>"+t.content:t.content;return this.filterWebp(e)},shouldShow:function(){return 404!==this.post.pathName&&"post"===this.type},commentName:function(){return this.siteInfo.commentName.value||""},siteURL:function(){return this.siteInfo.siteUrl.value||"localhost"}},methods:{filterWebp:function(t){return this.supportWebp?t:t.replace(/\/webp/gm,"")}}}},52:function(t,e,s){"use strict"},53:function(t,e){t.exports={pathName:404,createdAt:"2017-01-01 00:00:00",updatedAt:"2017-01-01 00:00:00",title:"404 Not Found",toc:"",content:'<p>你要找的页面不存在。</p><p>请检查URL是否有误，或者查看本博客所有<a href="/proxyPrefix/api/post?conditions={&quot;isPublic&quot;:true}&select={&quot;_id&quot;:0,&quot;title&quot;:1,&quot;pathName&quot;:1}&sort=1">文章</a>。</p>'}},54:function(t,e,s){var o=s(0)(s(48),s(59),null,null);t.exports=o.exports},55:function(t,e,s){var o=s(0)(s(49),s(60),null,null);t.exports=o.exports},59:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:"disqus_thread"}})},staticRenderFns:[]}},60:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"main"}},[s("div",{attrs:{id:"page-post"}},[s("article",{staticClass:"post detail"},[s("div",{staticClass:"meta"},[s("div",{staticClass:"date"},[t._v(t._s(t.post.createdAt))])]),s("h1",{staticClass:"title"},[t._v(t._s(t.post.title))]),s("div",{staticClass:"entry-content",domProps:{innerHTML:t._s(t.content)}}),t.shouldShow?[s("p",[t._v("本文链接："),s("a",{attrs:{href:t.siteURL+"/post/"+t.post.pathName}},[t._v(t._s(t.siteURL)+"/post/"+t._s(t.post.pathName))])]),s("p",[t._v("-- "),s("acronym",{attrs:{title:"End of File"}},[t._v("EOF")]),t._v(" --")],1),s("div",{staticClass:"post-info"},[s("p",[t._v(" 发表于 "),s("i",[t._v(t._s(t.post.createdAt))]),t._v(" ，\n            添加在分类「\n            "),s("a",{attrs:{"data-cate":t.post.category}},[s("code",{staticClass:"notebook"},[t._v(t._s(t.post.category))])]),t._v(" 」下 ，并被添加「\n            "),t._l(t.post.tags,function(e){return s("router-link",{attrs:{to:{name:"tagPager",params:{tagName:e}},"data-tag":e}},[s("code",{staticClass:"notebook"},[t._v(t._s(e))])])}),t._v(" 」标签 ，最后修改于 "),s("i",[t._v(t._s(t.post.updatedAt))])],2)])]:t._e()],2),t.shouldShow?s("nav",{staticClass:"pagination"},[void 0!==t.prev.pathName?s("router-link",{staticClass:"prev",attrs:{to:{name:"post",params:{pathName:t.prev.pathName}}}},[t._v("« "+t._s(t.prev.title))]):t._e(),void 0!==t.next.pathName?s("router-link",{staticClass:"next",attrs:{to:{name:"post",params:{pathName:t.next.pathName}}}},[t._v(t._s(t.next.title)+" »")]):t._e()],1):t._e(),!0===t.post.allowComment&&""!==t.commentName?s("div",{staticClass:"comments"},[s("disqus",{attrs:{shortname:t.commentName}})],1):t._e()]),s("my-footer")],1)},staticRenderFns:[]}},9:function(t,e,s){var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o])}return t},n=s(2),a=n.mapGetters,i=s(55),r=s(53);t.exports=function(t){var e="post"===t,s=e?"FETCH_BLOG":"FETCH_PAGE",n=e?/^\/post\//g:/^\//g,p=e?{tags:1,category:1}:{},c=function(e,o,a){var i=o.path;o.params,o.query;return i=i.replace(n,""),e.dispatch(s,{model:"post",query:{conditions:{pathName:i,isPublic:!0,type:t},select:Object.assign({title:1,createdAt:1,content:1,toc:1,updatedAt:1,pathName:1,allowComment:1},p)},callback:a})};return{metaInfo:function(){return{title:this.post.title}},name:t+"-view",computed:o({},a(["prev","next","siteInfo","isLoadingAsyncComponent","supportWebp"]),{post:function(){var t=e?this.$store.state.blog:this.$store.state.page;return t.pathName?t:r}}),preFetch:c,beforeMount:function(){this.isLoadingAsyncComponent&&this.$root._isMounted&&c(this.$store,this.$route)},render:function(e){return e(i,{props:{type:t,post:this.post,prev:this.prev,next:this.next,siteInfo:this.siteInfo,supportWebp:this.supportWebp}})}}}}});