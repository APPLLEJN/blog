webpackJsonp([2],{12:function(t,e,r){var a=r(0)(r(54),r(68),null,null);t.exports=a.exports},50:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"blog-summary",props:{article:{type:Object,required:!0},supportWebp:Boolean},serverCacheKey:function(t){return t.article.pathName+"::"+t.article.updatedAt+"::webp::"+t.supportWebp},methods:{filterWebp:function(t){return this.supportWebp?t:t.replace(/\/webp/gm,"")}}}},51:function(t,e,r){var a=r(0)(r(50),r(52),null,null);t.exports=a.exports},52:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{staticClass:"post"},[r("div",{staticClass:"meta"},[r("div",{staticClass:"date"},[t._v(t._s(t.article.createdAt))])]),r("h1",{staticClass:"title"},[r("router-link",{attrs:{to:{name:"post",params:{pathName:t.article.pathName}}}},[t._v(t._s(t.article.title))])],1),r("div",{staticClass:"entry-content",domProps:{innerHTML:t._s(t.filterWebp(t.article.summary))}})])},staticRenderFns:[]}},54:function(t,e,r){"use strict";function a(t,e,r){var a=e.path,s=e.query;e.params;if("/"!==a)return Promise.resolve();var n=s&&void 0!==s.page?parseInt(s.page):1;return n<0&&(n=1),t.dispatch("FETCH_ITEMS",{model:"post",query:{conditions:{type:"post",isPublic:!0},select:{_id:0,title:1,summary:1,createdAt:1,updatedAt:1,pathName:1},limit:10,skip:10*(n-1),sort:1},callback:r})}Object.defineProperty(e,"__esModule",{value:!0});var s=r(2),n=r(51),o=r.n(n),i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a])}return t};e.default={name:"blog-pager",metaInfo:function(){return{title:"首页"}},components:{BlogSummary:o.a},computed:i({},r.i(s.mapGetters)(["items","page","totalPage","siteInfo","isLoadingAsyncComponent","supportWebp"])),preFetch:a,beforeMount:function(){this.isLoadingAsyncComponent&&this.$root._isMounted&&a(this.$store,this.$route)}}},68:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"main"}},[r("section",{attrs:{id:"page-index"}},[t._l(t.items,function(e){return r("blog-summary",{attrs:{"support-webp":t.supportWebp,article:e}})}),r("pagination",{attrs:{page:t.page,"total-page":t.totalPage}})],2),r("my-footer")],1)},staticRenderFns:[]}}});