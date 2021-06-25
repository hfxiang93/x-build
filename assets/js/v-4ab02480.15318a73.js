(self.webpackChunk=self.webpackChunk||[]).push([[4241],{8418:function(n,s,a){"use strict";a.r(s),a.d(s,{data:function(){return e}});const e={key:"v-4ab02480",path:"/guide/router/menu.html",title:"菜单管理",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"使用",slug:"使用",children:[]},{level:2,title:"菜单",slug:"菜单",children:[]},{level:2,title:"扁平化",slug:"扁平化",children:[]},{level:2,title:"模糊查询",slug:"模糊查询",children:[]},{level:2,title:"API",slug:"api",children:[]}],filePathRelative:"guide/router/menu.md",git:{updatedTime:162461622e4,contributors:[]}}},9033:function(n,s,a){"use strict";a.r(s),a.d(s,{default:function(){return u}});var e=a(6252);const t=(0,e.uE)('<h1 id="菜单管理"><a class="header-anchor" href="#菜单管理">#</a> 菜单管理</h1><p>如果你打算开发一个后台应用，不论是实现导航栏还是侧边栏，菜单都是后台应用的关键组成部分。脚手架已经为你提供了两个非常实用的功能：<strong>路由扁平化</strong>与<strong>路由模糊查询</strong>功能，并且已经将 frameIn 中的路由储存在 menu 属性中，可以拿来即用，大大减轻了手动开发的工作量。</p><h2 id="使用"><a class="header-anchor" href="#使用">#</a> 使用</h2><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useMenuStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/store/sys/menu&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> menuStore <span class="token operator">=</span> <span class="token function">useMenuStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="菜单"><a class="header-anchor" href="#菜单">#</a> 菜单</h2><p>默认情况下，<code>menu</code> 取自 <code>routes.frameIn</code>：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> menu <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> menuStore<span class="token punctuation">.</span>menu<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="custom-container warning"><p class="custom-container-title">警告</p><p>你必须使用 computed 获取 menu，如果你使用解构的方式，menu 将不是一个响应式对象。</p></div><p><code>menu</code> 不是一成不变的，你可以通过 <code>setMenu</code> 方法用你的逻辑去改变它，切记你需要满足 <code>&lt;RouteRecordRaw[]&gt;</code> 类型检测：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>menuStore<span class="token punctuation">.</span><span class="token function">setMenu</span><span class="token punctuation">(</span>menus<span class="token operator">:</span> <span class="token operator">&lt;</span>RouteRecordRaw<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="扁平化"><a class="header-anchor" href="#扁平化">#</a> 扁平化</h2><p>将菜单扁平化为一维数组，为模糊搜索做数据支撑，如果你想直接使用的话：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> routesPool <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> menuStore<span class="token punctuation">.</span>routesPool<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="模糊查询"><a class="header-anchor" href="#模糊查询">#</a> 模糊查询</h2><p>通过调用 setSearchKeyword 方法设置搜索关键词：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>menuStore<span class="token punctuation">.</span><span class="token function">setSearchKeyword</span><span class="token punctuation">(</span>keyword<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>searchRoutes getter 将返回关键词相关的路由结果：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> searchRoutes <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> menuStore<span class="token punctuation">.</span>searchRoutes<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">提示</p><p>模糊搜索是基于<code>路由扁平化</code>的数据结果，相关搜索条件包含：[&#39;fullTitle&#39;, &#39;fullPath&#39;, &#39;path&#39;, &#39;name&#39;]。</p></div><h2 id="api"><a class="header-anchor" href="#api">#</a> API</h2>',20),p=(0,e.Uk)("相关参数请查看"),o={href:"/reference/store/menu.md",target:"_blank",rel:"noopener noreferrer"},c=(0,e.Uk)("菜单管理 API");var u={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[t,(0,e.Wm)("p",null,[p,(0,e.Wm)("a",o,[c,(0,e.Wm)(a)])])],64)}}}}]);