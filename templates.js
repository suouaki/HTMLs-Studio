// templates.js
window.templates = {
    basic: `<!DOCTYPE html>
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
    a0: `<!DOCTYPE html>
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
    a1: `<!DOCTYPE html>
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
</html>`
};
