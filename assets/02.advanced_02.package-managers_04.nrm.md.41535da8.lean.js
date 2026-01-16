import{_ as n,o as a,c as l,a as p}from"./app.eb270445.js";const C=JSON.parse('{"title":"nrm","description":"","frontmatter":{},"headers":[{"level":2,"title":"常见命令","slug":"常见命令","link":"#常见命令","children":[]}],"relativePath":"02.advanced/02.package-managers/04.nrm.md"}'),e={name:"02.advanced/02.package-managers/04.nrm.md"};function t(o,s,r,c,i,y){return a(),l("div",null,s[0]||(s[0]=[p(`<h1 id="nrm" tabindex="-1">nrm <a class="header-anchor" href="#nrm">¶</a></h1><p><a href="https://github.com/Pana/nrm" target="_blank" rel="noreferrer">nrm</a>（NPM registry manager）是 npm 的镜像源管理工具，使用它可以快速切换 npm 源。</p><h2 id="常见命令" tabindex="-1">常见命令 <a class="header-anchor" href="#常见命令">¶</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 查看当前已有源</span></span>
<span class="line"><span style="color:#FFCB6B;">nrm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ls</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 添加新的源地址</span></span>
<span class="line"><span style="color:#FFCB6B;">nrm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">nam</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&lt;</span><span style="color:#C3E88D;">registry_ur</span><span style="color:#A6ACCD;">l</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">  </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 例如 nrm add verdaccio http://192.168.75.164:4873/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 添加淘宝镜像   nrm add taobao https://registry.npmmirror.com</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 添加官方 npm   nrm add npm https://registry.npmjs.org</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 添加官方 npm   nrm add npm https://registry.npmjs.org</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 切换到新添加的源</span></span>
<span class="line"><span style="color:#FFCB6B;">nrm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">use</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">name</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 测试源速度</span></span>
<span class="line"><span style="color:#FFCB6B;">nrm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除源</span></span>
<span class="line"><span style="color:#FFCB6B;">nrm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">del</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">my-registry</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 如果还没安装 nrm</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># npm install -g nrm</span></span>
<span class="line"></span></code></pre></div>`,4)]))}const d=n(e,[["render",t]]);export{C as __pageData,d as default};
