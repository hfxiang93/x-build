(self.webpackChunk=self.webpackChunk||[]).push([[951],{9042:function(t,e,r){"use strict";r.r(e),r.d(e,{data:function(){return d}});const d={key:"v-39911954",path:"/guide/router/router.html",title:"路由配置",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"分类",slug:"分类",children:[]},{level:2,title:"Meta 配置",slug:"meta-配置",children:[]}],filePathRelative:"guide/router/router.md",git:{updatedTime:162521823e4,contributors:[]}}},816:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return a}});const d=(0,r(6252).uE)('<h1 id="路由配置" tabindex="-1"><a class="header-anchor" href="#路由配置" aria-hidden="true">#</a> 路由配置</h1><p>在 <code>@/router/routes.ts</code> 中配置路由，如果页面较多，建议再做拆分。</p><h2 id="分类" tabindex="-1"><a class="header-anchor" href="#分类" aria-hidden="true">#</a> 分类</h2><p>路由分为3类：<code>frameIn</code>, <code>frameOut</code>, <code>errorPage</code></p><p>frameIn：基于 <code>BasicLayout</code>，通常需要登录或权限认证的路由。</p><p>frameOut：不继承任何 layout 的页面，如登录页或开发其他独立页面。</p><p>errorPage：暂只提供 404 页面。</p><h2 id="meta-配置" tabindex="-1"><a class="header-anchor" href="#meta-配置" aria-hidden="true">#</a> Meta 配置</h2><p>vue-router 配置时，需要匹配 <code>&lt;RouteRecordRaw&gt;</code> 类型，我们唯一可以自定义的类型就是 <code>meta</code>，在路由配置中，集成了<strong>权限验证</strong>、<strong>页面标题</strong>、<strong>页面缓存</strong>：</p><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>title</td><td>页面独立的标题</td><td>string</td><td>-</td></tr><tr><td>auth</td><td>此路由是否需要进行登陆权限验证</td><td>boolean</td><td>false</td></tr><tr><td>permissions</td><td>页面内部的权限，例如按钮权限</td><td>{ [key: string]: boolean }</td><td>-</td></tr><tr><td>keepAlive</td><td>设置页面是否需要使用缓存</td><td>{ boolean }</td><td>false</td></tr></tbody></table><div class="custom-container tip"><p class="custom-container-title">提示</p><p>permissions 每一个 key 对应权限功能的验证，当 key 的值为 true 时，代表具有权限，若 key 为 false，若配合 <code>v-permission</code> 指令，可以隐藏相应的 DOM。</p></div>',11);var a={render:function(t,e){return d}}}}]);