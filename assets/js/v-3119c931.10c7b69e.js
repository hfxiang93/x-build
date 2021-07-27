(self.webpackChunk=self.webpackChunk||[]).push([[585],{9838:function(n,s,a){"use strict";a.r(s),a.d(s,{data:function(){return e}});const e={key:"v-3119c931",path:"/guide/ui/icon.html",title:"图标",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"为什么选择 Svg 方案",slug:"为什么选择-svg-方案",children:[]},{level:2,title:"其他方案",slug:"其他方案",children:[{level:3,title:"多倍图片",slug:"多倍图片",children:[]},{level:3,title:"Font Awesome",slug:"font-awesome",children:[]},{level:3,title:"iconfont",slug:"iconfont",children:[]}]},{level:2,title:"自动注册 Svg 图标",slug:"自动注册-svg-图标",children:[{level:3,title:"组件",slug:"组件",children:[]}]},{level:2,title:"组件库图标",slug:"组件库图标",children:[]}],filePathRelative:"guide/ui/icon.md",git:{updatedTime:1627376922e3,contributors:[]}}},5889:function(n,s,a){"use strict";a.r(s),a.d(s,{default:function(){return b}});var e=a(6252);const t=(0,e.uE)('<h1 id="图标" tabindex="-1"><a class="header-anchor" href="#图标" aria-hidden="true">#</a> 图标</h1><h2 id="为什么选择-svg-方案" tabindex="-1"><a class="header-anchor" href="#为什么选择-svg-方案" aria-hidden="true">#</a> 为什么选择 Svg 方案</h2><ul><li>支持多色图标了，不再受单色限制。</li><li>支持像字体那样通过font-size,color来调整样式。</li><li>支持 ie9+。</li><li>可利用CSS实现动画。</li><li>减少HTTP请求。</li><li>矢量，缩放不失真。</li><li>可以很精细的控制SVG图标的每一部分。</li></ul><h2 id="其他方案" tabindex="-1"><a class="header-anchor" href="#其他方案" aria-hidden="true">#</a> 其他方案</h2><h3 id="多倍图片" tabindex="-1"><a class="header-anchor" href="#多倍图片" aria-hidden="true">#</a> 多倍图片</h3><p>为了提升用户体验，一般会分开做几套图片，根据用用户的devicePixelRatio判断让他们加载对应的图片。</p><h3 id="font-awesome" tabindex="-1"><a class="header-anchor" href="#font-awesome" aria-hidden="true">#</a> Font Awesome</h3><p>提供了大量的图标，但是搜索起来麻烦，不支持自定义图标。</p><h3 id="iconfont" tabindex="-1"><a class="header-anchor" href="#iconfont" aria-hidden="true">#</a> iconfont</h3><p>字体图标存在失真、锯齿的问题。</p><h2 id="自动注册-svg-图标" tabindex="-1"><a class="header-anchor" href="#自动注册-svg-图标" aria-hidden="true">#</a> 自动注册 Svg 图标</h2><p>在 <code>src/assets/icons</code> 文件夹下的 svg 图表会被自动注册，这是因为已经对 webpack 和 svg-sprite-loader 进行了相关设置，文件全部打包成 svg-sprite。</p><p>webpack 配置：<code>vue.config.js</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function-variable function">chainWebpack</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n  config<span class="token punctuation">.</span>module\n    <span class="token punctuation">.</span><span class="token function">rule</span><span class="token punctuation">(</span><span class="token string">&#39;svg&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span>exclude<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;src/assets/icons&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  config<span class="token punctuation">.</span>module\n    <span class="token punctuation">.</span><span class="token function">rule</span><span class="token punctuation">(</span><span class="token string">&#39;icons&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.svg$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span>include<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">&#39;src/assets/icons&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;svg-sprite-loader&#39;</span><span class="token punctuation">)</span>\n    <span class="token punctuation">.</span><span class="token function">loader</span><span class="token punctuation">(</span><span class="token string">&#39;svg-sprite-loader&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><div class="highlight-line"> </div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>加载所有的 svg 图标：<code>@/components/SvgIcon/index.ts</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">requireAll</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">requireContext</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> requireContext\n  <span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n  <span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>requireContext<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> req <span class="token operator">=</span> require<span class="token punctuation">.</span><span class="token function">context</span><span class="token punctuation">(</span><span class="token string">&#39;@/assets/icons&#39;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.svg$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token function">requireAll</span><span class="token punctuation">(</span>req<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h3>',17),p=(0,e.Uk)("通过全局注册的组件 "),c=(0,e.Wm)("code",null,"<svg-icon />",-1),o=(0,e.Uk)(" 即可显示已经注册的 svg 图表，"),l={href:"/Components/Svg",target:"_blank",rel:"noopener noreferrer"},i=(0,e.Uk)("查看组件详细说明"),u=(0,e.Uk)("。"),r=(0,e.Wm)("h2",{id:"组件库图标",tabindex:"-1"},[(0,e.Wm)("a",{class:"header-anchor",href:"#组件库图标","aria-hidden":"true"},"#"),(0,e.Uk)(" 组件库图标")],-1),k=(0,e.Uk)("当你引入某些组件后，发现缺少了图标，这是因为教授架为了极致的压缩 chunk 包的大小作出的牺牲，改为按需加载，以少量的开发成本的代价，减少了大量的无用图标的引入，具体方式请阅读"),d={href:"/Guide/Basics/BuildOptimization",target:"_blank",rel:"noopener noreferrer"},h=(0,e.Uk)("构建优化章节"),g=(0,e.Uk)("。");var b={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[t,(0,e.Wm)("p",null,[p,c,o,(0,e.Wm)("a",l,[i,(0,e.Wm)(a)]),u]),r,(0,e.Wm)("p",null,[k,(0,e.Wm)("a",d,[h,(0,e.Wm)(a)]),g])],64)}}}}]);