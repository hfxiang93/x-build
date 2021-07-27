(self.webpackChunk=self.webpackChunk||[]).push([[3224],{412:function(n,s,a){"use strict";a.r(s),a.d(s,{data:function(){return e}});const e={key:"v-540b18c0",path:"/reference/store/log.html",title:"日志管理",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"API",slug:"api",children:[]},{level:2,title:"State",slug:"state",children:[]},{level:2,title:"Actions",slug:"actions",children:[{level:3,title:"addErrorLogs",slug:"adderrorlogs",children:[]},{level:3,title:"notification",slug:"notification",children:[]}]}],filePathRelative:"reference/store/log.md",git:{updatedTime:1627376922e3,contributors:[]}}},991:function(n,s,a){"use strict";a.r(s),a.d(s,{default:function(){return d}});var e=a(6252);const t=(0,e.uE)('<h1 id="日志管理" tabindex="-1"><a class="header-anchor" href="#日志管理" aria-hidden="true">#</a> 日志管理</h1><p><code>@/store/sys/log.ts</code></p><p>用于系统日志的 store。</p><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> useMenuStore <span class="token keyword">from</span> <span class="token string">&#39;@/store/sys/log&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> menuStore <span class="token operator">=</span> <span class="token function">useMenuStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> State</h2><table><thead><tr><th>属性</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>errorLogs</td><td>错误日志信息列表</td><td>ErrorLog[]</td><td>-</td></tr></tbody></table><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">ErrorLog</span> <span class="token punctuation">{</span>\n  id<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  time<span class="token operator">:</span> Date<span class="token punctuation">;</span>\n  error<span class="token operator">:</span> Error<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="actions" tabindex="-1"><a class="header-anchor" href="#actions" aria-hidden="true">#</a> Actions</h2><h3 id="adderrorlogs" tabindex="-1"><a class="header-anchor" href="#adderrorlogs" aria-hidden="true">#</a> addErrorLogs</h3><p>向 ErrorLogs 列表中加入新的日志信息，并记录时间。</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>menuStore<span class="token punctuation">.</span><span class="token function">addErrorLogs</span><span class="token punctuation">(</span>err<span class="token operator">:</span> Error<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="notification" tabindex="-1"><a class="header-anchor" href="#notification" aria-hidden="true">#</a> notification</h3><p>提供一个方便的消息提示功能，支持三种类型：</p>',14),r=(0,e.Wm)("li",null,"string: 直接输出成功消息。",-1),o=(0,e.Wm)("li",null,"Error: 输出一条错误的消息。",-1),i=(0,e.Uk)("INotificationOptions: 基于 Element-Plus "),p={href:"https://element-plus.gitee.io/#/zh-CN/component/notification#options",target:"_blank",rel:"noopener noreferrer"},l=(0,e.Uk)("Notification"),c=(0,e.Uk)(" 组件配置类型。"),u=(0,e.uE)('<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>menuStore<span class="token punctuation">.</span><span class="token function">notification</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> Error <span class="token operator">|</span> INotificationOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',1);var d={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[t,(0,e.Wm)("ul",null,[r,o,(0,e.Wm)("li",null,[i,(0,e.Wm)("a",p,[l,(0,e.Wm)(a)]),c])]),u],64)}}}}]);