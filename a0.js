// templates.js
window.templates = {
    色彩变化模板: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的第一个网页</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            min-height: 100vh;
        }
        .container {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 15px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        h1 {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 20px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }
        .rainbow-text {
            background: linear-gradient(45deg,
                #ff0000, #ff7700, #ffdd00, #00ff00,
                #0099ff, #6600ff, #ff00ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: rainbow 3s ease-in-out infinite;
        }
        @keyframes rainbow {
            0%, 100% { filter: hue-rotate(0deg); }
            50% { filter: hue-rotate(180deg); }
        }
        p {
            font-size: 1.2rem;
            line-height: 1.6;
            margin: 20px 0;
        }
        .highlight {
            background: rgba(255, 255, 0, 0.3);
            padding: 2px 8px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1 class="rainbow-text">🌟 欢迎来到我的网页世界！</h1>
        <p>这是一个 <span class="highlight">现代化的HTML页面</span>，展示了CSS的强大功能。</p>
        <p>✨ 在左侧编辑器中修改代码，右侧会实时显示效果！</p>
        <p>🚀 开始你的HTML编程之旅吧！</p>
  <h1 style="color: #ff6600;">欢迎体验HTML编辑器</h1>
    <p>
  <span style="color: red;">在</span>
  <span style="color: orange;">这</span>
  <span style="color: yellow;">里</span>
  <span style="color: green;">编</span>
  <span style="color: blue;">写</span>
  <span style="color: indigo;">H</span>
  <span style="color: violet;">T</span>
  <span style="color: teal;">M</span>
  <span style="color: brown;">L</span>
  <span>代码，实时预览效果！</span>
</p>
    </div>
</body>
</html>`,
  活力代码世界黑暗博客: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="暗色技术博客 - 充满活力的编程知识分享">
    <meta name="keywords" content="编程, JavaScript, 技术博客, 异步编程">
    <meta name="author" content="小刚">
    <title>暗色技术博客 - 活力代码世界</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Noto Sans SC', sans-serif;
            line-height: 1.7;
            background-color: #181818;
            color: #e0e0e0;
        }

        .header {
            background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
            padding: 3rem 1rem;
            text-align: center;
            color: #fff;
        }

        .header h1 {
            font-size: 2.8rem;
            margin-bottom: 0.5rem;
        }

        .nav {
            background: #222;
            padding: 1rem;
            display: flex;
            justify-content: center;
            gap: 2rem;
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .nav a {
            color: #e0e0e0;
            text-decoration: none;
            font-size: 1.1rem;
            transition: color 0.3s;
        }

        .nav a:hover {
            color: #ff6b6b;
       /* 颜色选择器弹窗样式 */
    .color-picker-modal {
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(0,0,0,0.35);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        .article code {
            background: #333;
            padding: 0.2rem 0.4rem;
            border-radius: 4px;
        }

        .article pre {
            background: #333;
            padding: 1rem;
            border-radius: 8px;
            overflow-x: auto;
        }

        .related-articles {
            background: #222;
            padding: 2rem;
            border-radius: 12px;
        }

        .related-articles h3 {
            font-size: 1.4rem;
            color: #ff6b6b;
            margin-bottom: 1rem;
        }

        .related-articles ul {
            list-style: none;
        }

        .related-articles li {
            margin-bottom: 0.8rem;
        }

        .related-articles a {
            color: #e0e0e0;
            text-decoration: none;
        }

        .related-articles a:hover {
            color: #ff6b6b;
        }

        .button {
            display: inline-block;
            padding: 0.8rem 1.5rem;
            background: #ff6b6b;
            color: #fff;
            text-decoration: none;
            border-radius: 6px;
            transition: background 0.3s;
        }

        .button:hover {
            background: #e55a5a;
        }

        .footer {
            background: #222;
            color: #aaa;
            text-align: center;
            padding: 1.5rem;
            margin-top: 2rem;
        }

        @media (max-width: 900px) {
            .container {
                grid-template-columns: 1fr;
            }
        }

        @media (max-width: 600px) {
            .header h1 {
                font-size: 2rem;
            }
            .article {
                padding: 1rem;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <h1>活力代码世界</h1>
        <p>点燃编程热情，分享技术洞见</p>
    </header>

    <nav class="nav">
        <a href="#home">首页</a>
        <a href="#articles">文章</a>
        <a href="#tutorials">教程</a>
        <a href="#about">关于</a>
    </nav>

    <div class="container">
        <article class="article">
            <h1>深入理解JavaScript异步编程</h1>
            <div class="meta">发布时间: 2025年6月2日 | 作者: 小刚</div>
            <h2>异步编程简介</h2>
            <p>异步编程是JavaScript的关键特性，支持非阻塞操作。常用工具包括 <code>Promise</code> 和 <code>async/await</code>。</p>
            <h2>代码示例</h2>
            <pre><code>async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
fetchData();
            </code></pre>
            <h2>注意事项</h2>
            <p>异步编程需关注错误处理和性能优化，避免复杂回调链。</p>
            <a href="#more" class="button">了解更多</a>
        </article>

        <aside class="related-articles">
            <h3>相关文章</h3>
            <ul>
                <li><a href="#">JavaScript 事件循环详解</a></li>
                <li><a href="#">Node.js 异步编程实践</a></li>
                <li><a href="#">前端性能优化技巧</a></li>
            </ul>
        </aside>
    </div>

    <footer class="footer">
        <p>© 2025 活力代码世界. 保留所有权利.</p>
    </footer>
</body>
</html>`,
代码世界暗黑技术博客: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>暗色技术博客 - 代码世界</title>
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #1a1a1a;
            color: #e0e0e0;
        }
        .header {
            background: #2c2c2c;
            padding: 40px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 2.5rem;
            color: #00adb5;
        }
        .container {
            max-width: 1000px;
            margin: 20px auto;
            background: #222222;
            padding: 30px;
            border-radius: 10px;
        }
        .article h1 {
            font-size: 2rem;
            color: #00adb5;
        }
        .meta {
            font-size: 0.9rem;
            color: #999;
            margin-bottom: 20px;
        }
        .article h2 {
            color: #e0e0e0;
            border-left: 4px solid #00adb5;
            padding-left: 10px;
        }
        .article p {
            margin-bottom: 20px;
        }
        .article code {
            background: #333;
            padding: 2px 6px;
            border-radius: 4px;
        }
        .article pre {
            background: #333;
            padding: 15px;
            border-radius: 8px;
            overflow-x: auto;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background: #00adb5;
            color: white;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
        }
        .button:hover {
            background: #008c93;
        }
        .footer {
            background: #2c2c2c;
            color: #999;
            text-align: center;
            padding: 20px;
            margin-top: 30px;
        }
        @media (max-width: 600px) {
            .container {
                padding: 15px;
            }
            .header h1 {
                font-size: 1.8rem;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <h1>代码世界</h1>
    </header>
    
    <div class="container">
        <article class="article">
            <h1>深入理解JavaScript异步编程</h1>
            <div class="meta">
                发布时间: 2025年6月2日 | 作者: 小刚
            </div>
            
            <h2>什么是异步编程？</h2>
            <p>异步编程是JavaScript的核心特性，允许非阻塞操作，提高程序效率。例如，<code>Promise</code> 和 <code>async/await</code> 是现代异步编程的基础。</p>
            
            <h2>代码示例</h2>
            <pre><code>async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
fetchData();
            </code></pre>
            
            <h2>注意事项</h2>
            <p>异步编程需要注意错误处理和性能优化，避免回调地狱。</p>
            
            <a href="#more" class="button">了解更多</a>
        </article>
    </div>
    
    <footer class="footer">
        <p>© 2025 代码世界. 保留所有权利.</p>
    </footer>
</body>
</html>`,
    极简博客技术笔记: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>极简博客 - 技术笔记</title>
    <style>
        body {
            font-family: 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f4f4f9;
            color: #333;
        }
        .header {
            background: #ffffff;
            border-bottom: 1px solid #e0e0e0;
            padding: 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 2rem;
            color: #2c3e50;
        }
        .header nav {
            margin-top: 10px;
        }
        .header nav a {
            margin: 0 15px;
            color: #3498db;
            text-decoration: none;
            font-weight: bold;
        }
        .header nav a:hover {
            text-decoration: underline;
        }
        .container {
            max-width: 900px;
            margin: 20px auto;
            background: white;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
        }
        .article h1 {
            font-size: 1.8rem;
            color: #2c3e50;
        }
        .meta {
            font-size: 0.85rem;
            color: #7f8c8d;
            margin-bottom: 20px;
        }
        .article h2 {
            color: #34495e;
            margin-top: 30px;
        }
        .article p {
            margin-bottom: 15px;
        }
        .article ul {
            margin-bottom: 20px;
            padding-left: 25px;
        }
        .footer {
            text-align: center;
            padding: 20px;
            background: #2c3e50;
            color: #ecf0f1;
            margin-top: 30px;
        }
        @media (max-width: 600px) {
            .container {
                padding: 15px;
            }
            .header h1 {
                font-size: 1.5rem;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <h1>技术笔记</h1>
        <nav>
            <a href="#home">首页</a>
            <a href="#about">关于</a>
            <a href="#archive">归档</a>
        </nav>
    </header>
    
    <div class="container">
        <article class="article">
            <h1>响应式设计的艺术</h1>
            <div class="meta">
                发布时间: 2025年6月2日 | 作者: 小明
            </div>
            
            <h2>引言</h2>
            <p>响应式设计是现代Web开发的核心，确保网页在手机、平板和桌面设备上都能完美呈现。</p>
            
            <h2>实现方法</h2>
            <p>通过CSS媒体查询、Flexbox和Grid布局，我们可以轻松构建灵活的页面结构。例如，使用 <code>vw</code> 和 <code>rem</code> 单位来适配不同屏幕大小。</p>
            
            <h2>工具推荐</h2>
            <ul>
                <li>Bootstrap：快速构建响应式布局</li>
                <li>Tailwind CSS：高效的工具类框架</li>
                <li>PostCSS：增强CSS功能</li>
            </ul>
            
            <h2>总结</h2>
            <p>响应式设计需要兼顾美观与性能，持续测试是关键。</p>
        </article>
    </div>
    
    <footer class="footer">
        <p>© 2025 技术笔记. 保留所有权利.</p>
    </footer>
</body>
</html>`,
                
                杂志风格博客生活与技术: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>杂志风格博客 - 生活与技术</title>
    <style>
        body {
            font-family: 'Lora', serif;
            line-height: 1.7;
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
        }
        .header {
            background: #e74c3c;
            color: white;
            padding: 50px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 2.8rem;
        }
        .container {
            display: flex;
            max-width: 1200px;
            margin: 20px auto;
            gap: 20px;
        }
        .main {
            flex: 3;
            background: white;
            padding: 30px;
            border-radius: 8px;
        }
        .sidebar {
            flex: 1;
            background: #ecf0f1;
            padding: 20px;
            border-radius: 8px;
        }
        .sidebar h3 {
            margin-top: 0;
            color: #2c3e50;
        }
        .sidebar ul {
            list-style: none;
            padding: 0;
        }
        .sidebar ul li {
            margin-bottom: 10px;
        }
        .sidebar ul li a {
            color: #3498db;
            text-decoration: none;
        }
        .article h1 {
            font-size: 2rem;
            color: #2c3e50;
        }
        .meta {
            font-size: 0.9rem;
            color: #7f8c8d;
            margin-bottom: 20px;
        }
        .article img {
            max-width: 100%;
            border-radius: 8px;
            margin: 20px 0;
        }
        .footer {
            background: #2c3e50;
            color: white;
            text-align: center;
            padding: 20px;
            margin-top: 30px;
        }
        @media (max-width: 800px) {
            .container {
                flex-direction: column;
            }
            .sidebar {
                order: -1;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <h1>生活与技术</h1>
    </header>
    
    <div class="container">
        <main class="main">
            <article class="article">
                <h1>探索Web开发的未来</h1>
                <div class="meta">
                    发布时间: 2025年6月2日 | 作者: 小红
                </div>
                <img src="web-future.jpg" alt="Web开发插图">
                
                <h2>引言</h2>
                <p>Web开发正在快速发展，人工智能和WebAssembly正在改变我们的构建方式。</p>
                
                <h2>新兴技术</h2>
                <p>WebAssembly允许在浏览器中运行高性能代码，而AI驱动的工具可以自动优化用户界面。</p>
                
                <h2>案例分析</h2>
                <p>例如，某些公司利用WebAssembly构建了接近原生应用的网页体验。</p>
            </article>
        </main>
        <aside class="sidebar">
            <h3>热门文章</h3>
            <ul>
                <li><a href="#">如何学习React</a></li>
                <li><a href="#">CSS Grid布局入门</a></li>
                <li><a href="#">JavaScript性能优化</a></li>
            </ul>
        </aside>
    </div>
    
    <footer class="footer">
        <p>© 2025 生活与技术. 保留所有权利.</p>
    </footer>
</body>
</html>`,
                 卡片式博客每日灵感: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>卡片式博客 - 每日灵感</title>
    <style>
        body {
            font-family: 'Open Sans', sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #e9ecef;
        }
        .header {
            background: #0984e3;
            color: white;
            padding: 40px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 2.5rem;
        }
        .container {
            max-width: 1200px;
            margin: 20px auto;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            padding: 0 20px;
        }
        .card {
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            transition: transform 0.3s;
        }
        .card:hover {
            transform: translateY(-5px);
        }
        .card img {
            width: 100%;
            height: 200px;
            object-fit: cover;
        }
        .card-content {
            padding: 20px;
        }
        .card h2 {
            font-size: 1.5rem;
            margin: 0 0 10px;
            color: #2d3436;
        }
        .meta {
            font-size: 0.85rem;
            color: #636e72;
            margin-bottom: 15px;
        }
        .card p {
            color: #2d3436;
            margin-bottom: 15px;
        }
        .card a {
            color: #0984e3;
            text-decoration: none;
            font-weight: bold;
        }
        .card a:hover {
            text-decoration: underline;
        }
        .footer {
            background: #2d3436;
            color: white;
            text-align: center;
            padding: 20px;
            margin-top: 30px;
        }
        @media (max-width: 600px) {
            .container {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <h1>每日灵感</h1>
    </header>
    
    <div class="container">
        <article class="card">
            <img src="article1.jpg" alt="文章1插图">
            <div class="card-content">
                <h2>如何提升前端开发效率</h2>
                <div class="meta">
                    发布时间: 2025年6月2日 | 作者: 小明
                </div>
                <p>探索现代前端工具如Vite和ESBuild，显著提升开发效率。</p>
                <a href="#read-more">阅读全文</a>
            </div>
        </article>
        <article class="card">
            <img src="article2.jpg" alt="文章2插图">
            <div class="card-content">
                <h2>CSS动画的魅力</h2>
                <div class="meta">
                    发布时间: 2025年6月1日 | 作者: 小红
                </div>
                <p>通过CSS动画为网页添加生动的交互效果，提升用户体验。</p>
                <a href="#read-more">阅读全文</a>
            </div>
        </article>
        <article class="card">
            <img src="article3.jpg" alt="文章3插图">
            <div class="card-content">
                <h2>学习TypeScript的5个理由</h2>
                <div class="meta">
                    发布时间: 2025年5月30日 | 作者: 小刚
                </div>
                <p>TypeScript为JavaScript开发带来类型安全和更好的可维护性。</p>
                <a href="#read-more">阅读全文</a>
            </div>
        </article>
    </div>
    
    <footer class="footer">
        <p>&copy; 2025 每日灵感. 保留所有权利.</p>
    </footer>
</body>
</html>`,
                沉浸式博客创意笔记: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>沉浸式博客 - 创意笔记</title>
    <style>
        body {
            font-family: 'Playfair Display', serif;
            line-height: 1.8;
            margin: 0;
            padding: 0;
            background: url('background.jpg') no-repeat center center fixed;
            background-size: cover;
            color: #fff;
        }
        .header {
            background: rgba(0, 0, 0, 0.5);
            padding: 80px 20px;
            text-align: center;
        }
        .header h1 {
            font-size: 3rem;
            margin: 0;
        }
        .header p {
            font-size: 1.2rem;
            opacity: 0.9;
        }
        .container {
            max-width: 900px;
            margin: 20px auto;
            background: rgba(0, 0, 0, 0.7);
            padding: 40px;
            border-radius: 12px;
        }
        .article h1 {
            font-size: 2.2rem;
            margin-bottom: 10px;
        }
        .meta {
            font-size: 0.9rem;
            color: #ccc;
            margin-bottom: 20px;
        }
        .article h2 {
            color: #fff;
            margin-top: 30px;
        }
        .article p {
            margin-bottom: 20px;
        }
        .article img {
            max-width: 100%;
            border-radius: 8px;
            margin: 20px 0;
        }
        .footer {
            background: rgba(0, 0, 0, 0.5);
            text-align: center;
            padding: 20px;
            margin-top: 30px;
        }
        @media (max-width: 600px) {
            .header h1 {
                font-size: 2rem;
            }
            .container {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <h1>创意笔记</h1>
        <p>记录艺术与灵感的瞬间</p>
    </header>
    
    <div class="container">
        <article class="article">
            <h1>摄影中的光影艺术</h1>
            <div class="meta">
                发布时间: 2025年6月2日 | 作者: 小白
            </div>
            <img src="photo.jpg" alt="光影摄影">
            
            <h2>引言</h2>
            <p>光影是摄影的灵魂，掌握光线可以让平凡的场景变得非凡。</p>
            
            <h2>技巧分享</h2>
            <p>利用黄金时段的自然光，或通过人工光源创造戏剧性效果，都是摄影师的常用技巧。</p>
            
            <h2>案例展示</h2>
            <p>例如，逆光拍摄可以营造出梦幻的轮廓光效果。</p>
        </article>
    </div>
    
    <footer class="footer">
        <p>&copy; 2025 创意笔记. 保留所有权利.</p>
    </footer>
</body>
</html>`,
                 交互式博客技术洞察: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>交互式博客 - 技术洞察</title>
    <style>
        body {
            font-family: 'Source Sans Pro', sans-serif;
            line-height: 1.6;
            margin: 0;
            padding: 0;
            background-color: #f7f7f7;
        }
        .header {
            background: #1e90ff;
            color: white;
            padding: 50px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 2.5rem;
        }
        .container {
            max-width: 1000px;
            margin: 20px auto;
            background: white;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 3px 15px rgba(0,0,0,0.1);
        }
        .article h1 {
            font-size: 2rem;
            color: #2d3436;
        }
        .meta {
            font-size: 0.9rem;
            color: #636e72;
            margin-bottom: 20px;
        }
        .article h2 {
            color: #2d3436;
            margin-top: 30px;
        }
        .article p {
            margin-bottom: 20px;
        }
        .comments {
            margin-top: 40px;
        }
        .comments h3 {
            color: #2d3436;
            margin-bottom: 20px;
        }
        .comment-form {
            margin-bottom: 30px;
        }
        .comment-form label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        .comment-form input, .comment-form textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        .comment-form button {
            padding: 10px 20px;
            background: #1e90ff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .comment-form button:hover {
            background: #1873cc;
        }
        .comment {
            border-top: 1px solid #ddd;
            padding: 15px 0;
        }
        .footer {
            background: #2d3436;
            color: white;
            text-align: center;
            padding: 20px;
            margin-top: 30px;
        }
        @media (max-width: 600px) {
            .container {
                padding: 15px;
            }
            .header h1 {
                font-size: 1.8rem;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <h1>技术洞察</h1>
    </header>
    
    <div class="container">
        <article class="article">
            <h1>深入探索Web性能优化</h1>
            <div class="meta">
                发布时间: 2025年6月2日 | 作者: 小刚
            </div>
            
            <h2>引言</h2>
            <p>网页性能直接影响用户体验，优化加载速度是开发者的必修课。</p>
            
            <h2>优化技巧</h2>
            <p>包括图片懒加载、减少HTTP请求和使用CDN加速等方法。</p>
            
            <h2>工具推荐</h2>
            <ul>
                <li>Lighthouse：分析网页性能</li>
                <li>Webpack：打包优化</li>
                <li>Cloudflare：CDN服务</li>
            </ul>
        </article>
        
        <section class="comments">
            <h3>评论区</h3>
            <form class="comment-form">
                <label for="name">姓名</label>
                <input type="text" id="name" name="name" required>
                <label for="comment">评论</label>
                <textarea id="comment" name="comment" rows="4" required></textarea>
                <button type="submit">提交评论</button>
            </form>
            <div class="comment">
                <p><strong>用户1</strong>: 感谢分享，Lighthouse真的很好用！</p>
                <p><small>2025年6月2日</small></p>
            </div>
        </section>
    </div>
    
    <footer class="footer">
        <p>&copy; 2025 技术洞察. 保留所有权利.</p>
    </footer>
</body>
</html>`,
                    
                博客文章我的博客: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>博客文章 - 我的博客</title>
    <style>
        body {
            font-family: 'Georgia', serif;
            line-height: 1.8;
            margin: 0;
            padding: 0;
            background-color: #fafafa;
        }
        .header {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 60px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 2.5rem;
        }
        .header p {
            margin: 10px 0 0;
            opacity: 0.9;
        }
        .container {
            max-width: 800px;
            margin: -30px auto 0;
            background: white;
            border-radius: 10px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        .article {
            padding: 40px;
        }
        .article h2 {
            color: #333;
            border-bottom: 2px solid #667eea;
            padding-bottom: 10px;
        }
        .article p {
            color: #555;
            margin-bottom: 20px;
        }
        .meta {
            color: #999;
            font-size: 0.9rem;
            margin-bottom: 30px;
        }
        .footer {
            background: #333;
            color: white;
            text-align: center;
            padding: 20px;
            margin-top: 40px;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>我的技术博客</h1>
        <p>分享编程经验与技术见解</p>
    </div>
    
    <div class="container">
        <article class="article">
            <h1>如何构建现代化的网页</h1>
            <div class="meta">
                发布时间: 2024年1月1日 | 作者: 开发者
            </div>
            
            <h2>前言</h2>
            <p>在现代Web开发中，构建一个优秀的网页需要考虑多个方面：用户体验、性能优化、响应式设计等。本文将介绍一些最佳实践。</p>
            
            <h2>设计原则</h2>
            <p>优秀的网页设计应该遵循以下原则：</p>
            <ul>
                <li>简洁明了的布局</li>
                <li>一致的视觉风格</li>
                <li>良好的可访问性</li>
                <li>快速的加载速度</li>
            </ul>
            
            <h2>技术实现</h2>
            <p>使用HTML5、CSS3和现代JavaScript框架可以帮助我们构建更好的用户体验。同时，响应式设计确保网页在各种设备上都能正常显示。</p>
            
            <h2>总结</h2>
            <p>构建现代化网页是一个持续学习和改进的过程。通过不断实践和学习新技术，我们可以创造出更优秀的Web体验。</p>
        </article>
    </div>
    
    <div class="footer">
        <p>&copy; 2024 我的博客. 保留所有权利.</p>
    </div>
</body>
</html>`,               

                产品着陆页: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>产品着陆页</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
        }
        .hero {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 0 20px;
        }
        .hero-content h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            animation: fadeInUp 1s ease;
        }
        .hero-content p {
            font-size: 1.25rem;
            margin-bottom: 2rem;
            opacity: 0.9;
            animation: fadeInUp 1s ease 0.2s both;
        }
        .cta-button {
            display: inline-block;
            padding: 15px 30px;
            background: rgba(255, 255, 255, 0.2);
            color: white;
            text-decoration: none;
            border-radius: 50px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            transition: all 0.3s ease;
            animation: fadeInUp 1s ease 0.4s both;
        }
        .cta-button:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: translateY(-2px);
        }
        .features {
            padding: 80px 20px;
            background: #f8f9fa;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
        }
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 40px;
            margin-top: 60px;
        }
        .feature {
            text-align: center;
            padding: 40px 20px;
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: transform 0.3s ease;
        }
        .feature:hover {
            transform: translateY(-10px);
        }
        .feature-icon {
            font-size: 3rem;
            margin-bottom: 20px;
        }
        .feature h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
            color: #333;
        }
        .feature p {
            color: #666;
        }
        .section-title {
            text-align: center;
            font-size: 2.5rem;
            color: #333;
            margin-bottom: 20px;
        }
        .section-subtitle {
            text-align: center;
            color: #666;
            font-size: 1.1rem;
            max-width: 600px;
            margin: 0 auto;
        }
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        @media (max-width: 768px) {
            .hero-content h1 {
                font-size: 2.5rem;
            }
            .features-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <section class="hero">
        <div class="hero-content">
            <h1>🚀 创新产品</h1>
            <p>革命性的解决方案，让您的工作更高效、更智能</p>
            <a href="#features" class="cta-button">了解更多</a>
        </div>
    </section>
    
    <section class="features" id="features">
        <div class="container">
            <h2 class="section-title">为什么选择我们？</h2>
            <p class="section-subtitle">我们的产品具有以下核心优势，帮助您实现更好的业务成果</p>
            
            <div class="features-grid">
                <div class="feature">
                    <div class="feature-icon">⚡</div>
                    <h3>极速体验</h3>
                    <p>采用最新技术架构，提供闪电般的响应速度，让您的工作效率提升10倍。</p>
                </div>
                <div class="feature">
                    <div class="feature-icon">🛡️</div>
                    <h3>安全可靠</h3>
                    <p>企业级安全保障，多重加密技术确保您的数据安全无忧。</p>
                </div>
                <div class="feature">
                    <div class="feature-icon">🎯</div>
                    <h3>精准智能</h3>
                    <p>AI驱动的智能分析，为您提供精准的数据洞察和决策支持。</p>
                </div>
            </div>
        </div>
    </section>
</body>
</html>`,

                个人作品集: `<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>个人作品集</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            line-height: 1.6;
            color: #333;
        }
        .header {
            background: linear-gradient(135deg, #2c3e50, #3498db);
            color: white;
            padding: 100px 20px;
            text-align: center;
        }
        .header h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
        }
        .header p {
            font-size: 1.2rem;
            opacity: 0.9;
        }
        .nav {
            background: rgba(255, 255, 255, 0.95);
            padding: 20px 0;
            position: sticky;
            top: 0;
            z-index: 100;
            backdrop-filter: blur(10px);
        }
        .nav ul {
            list-style: none;
            display: flex;
            justify-content: center;
            gap: 40px;
        }
        .nav a {
            text-decoration: none;
            color: #333;
            font-weight: 500;
            transition: color 0.3s ease;
        }
        .nav a:hover {
            color: #3498db;
        }
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        .section {
            padding: 80px 0;
        }
        .section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 60px;
            color: #2c3e50;
        }
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 40px;
        }
        .project-card {
            background: white;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .project-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        .project-image {
            height: 200px;
            background: linear-gradient(135deg, #667eea, #764ba2);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            color: white;
        }
        .project-content {
            padding: 30px;
        }
        .project-content h3 {
            font-size: 1.5rem;
            margin-bottom: 15px;
            color: #2c3e50;
        }
        .project-content p {
            color: #666;
            margin-bottom: 20px;
        }
        .project-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        .tag {
            background: #ecf0f1;
            color: #2c3e50;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.85rem;
        }
        .about {
            background: #f8f9fa;
        }
        .about-content {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 60px;
            align-items: center;
        }
        .about-text {
            font-size: 1.1rem;
            color: #555;
        }
        .skills-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-top: 30px;
        }
        .skill-item {
            background: white;
            padding: 20px;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 5px 15px rgba(0,0,0,0.05);
        }
        .footer {
            background: #2c3e50;
            color: white;
            text-align: center;
            padding: 40px 20px;
        }
        @media (max-width: 768px) {
            .header h1 {
                font-size: 2rem;
            }
            .nav ul {
                flex-direction: column;
                gap: 20px;
            }
            .about-content {
                grid-template-columns: 1fr;
                gap: 40px;
            }
        }
    </style>
</head>
<body>
    <header class="header">
        <h1>👋 我是张设计师</h1>
        <p>专注于用户体验设计与前端开发</p>
    </header>
    
    <nav class="nav">
        <ul>
            <li><a href="#projects">作品集</a></li>
            <li><a href="#about">关于我</a></li>
            <li><a href="#contact">联系方式</a></li>
        </ul>
    </nav>
    
    <section class="section" id="projects">
        <div class="container">
            <h2 class="section-title">我的作品</h2>
            <div class="projects-grid">
                <div class="project-card">
                    <div class="project-image">🎨</div>
                    <div class="project-content">
                        <h3>电商平台设计</h3>
                        <p>为某知名品牌设计的全新电商平台，提升了用户转化率30%，获得了客户的高度认可。</p>
                        <div class="project-tags">
                            <span class="tag">UI设计</span>
                            <span class="tag">用户体验</span>
                            <span class="tag">响应式</span>
                        </div>
                    </div>
                </div>
                
                <div class="project-card">
                    <div class="project-image">📱</div>
                    <div class="project-content">
                        <h3>移动应用界面</h3>
                        <p>简洁直观的移动应用界面设计，注重用户操作的便捷性和视觉的美观性。</p>
                        <div class="project-tags">
                            <span class="tag">移动端</span>
                            <span class="tag">原型设计</span>
                            <span class="tag">交互设计</span>
                        </div>
                    </div>
                </div>
                
                <div class="project-card">
                    <div class="project-image">🌐</div>
                    <div class="project-content">
                        <h3>企业官网重设</h3>
                        <p>为传统企业打造现代化官网，融合品牌特色与现代设计理念，提升企业形象。</p>
                        <div class="project-tags">
                            <span class="tag">网页设计</span>
                            <span class="tag">品牌设计</span>
                            <span class="tag">前端开发</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <section class="section about" id="about">
        <div class="container">
            <h2 class="section-title">关于我</h2>
            <div class="about-content">
                <div>
                    <div style="width: 200px; height: 200px; background: linear-gradient(135deg, #667eea, #764ba2); border-radius: 50%; margin: 0 auto; display: flex; align-items: center; justify-content: center; font-size: 4rem; color: white;">👨‍💻</div>
                </div>
                <div class="about-text">
                    <p>我是一名充满热情的设计师和开发者，拥有5年的用户体验设计经验。我专注于创造既美观又实用的数字产品，相信好的设计能够改变人们的生活方式。</p>
                    <p>我的设计理念是"以用户为中心"，通过深入了解用户需求，创造出真正有价值的产品体验。</p>
                    
                    <div class="skills-list">
                        <div class="skill-item">
                            <strong>UI/UX 设计</strong>
                        </div>
                        <div class="skill-item">
                            <strong>前端开发</strong>
                        </div>
                        <div class="skill-item">
                            <strong>原型设计</strong>
                        </div>
                        <div class="skill-item">
                            <strong>用户研究</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    <footer class="footer" id="contact">
        <div class="container">
            <h3>让我们一起创造美好的产品</h3>
            <p>📧 contact@designer.com | 📱 +86 138 0000 0000</p>
            <p>&copy; 2024 张设计师作品集. 保留所有权利.</p>
        </div>
    </footer>
</body>
</html>`
};

// 自动渲染模板选择区
(function() {
    function getTitleAndDesc(key, value) {
        if (typeof value === 'object' && value !== null) {
            return {
                title: value.title || key,
                desc: value.desc || 'HTML模板',
            };
        }
        // 兼容字符串模板
        return {
            title: key,
            desc: 'HTML模板',
        };
    }
    document.addEventListener('DOMContentLoaded', function() {
        var grid = document.getElementById('templates-grid');
        if (!grid || !window.templates) return;
        grid.innerHTML = '';
        Object.entries(window.templates).forEach(function([key, value]) {
            var meta = getTitleAndDesc(key, value);
            var item = document.createElement('div');
            item.className = 'template-item';
            item.onclick = function() { loadTemplate(key); };
            item.innerHTML =
                '<div class="template-title">' + meta.title + '</div>' +
                '<div class="template-desc">' + meta.desc + '</div>';
            grid.appendChild(item);
        });
    });

    // 优化 loadTemplate 兼容对象和字符串
    if (typeof window.loadTemplate === 'function') {
        var oldLoadTemplate = window.loadTemplate;
        window.loadTemplate = function(templateName) {
            var t = window.templates && window.templates[templateName];
            var code = (typeof t === 'object' && t !== null && 'code' in t) ? t.code : t;
            if (code) {
                if (typeof editor !== 'undefined' && editor.setValue) {
                    editor.setValue(code);
                }
                if (typeof showToast === 'function') {
                    showToast(templateName + '模板已加载！');
                }
            } else {
                if (typeof showToast === 'function') {
                    showToast('模板未找到');
                }
            }
        };
    }
})();
