# 许萌个人学术主页

## 运行
这是无需安装依赖、无需构建的静态网站。可以直接双击 index.html。
推荐在本目录打开终端执行 `python -m http.server 8000`，浏览器打开 http://localhost:8000 。

## GitHub Pages 部署
1. 在 GitHub 创建公开仓库 `mengercode.github.io`（若账号不同，将 mengercode 替换成你的用户名）。
2. 将本目录内所有文件上传到仓库 main 分支根目录，确保 index.html 在根目录，不要多套一层目录；保留 .nojekyll。
3. 仓库 Settings → Pages → Build and deployment，Source 选择 Deploy from a branch，Branch 选择 main，目录选择 /(root)，保存。
4. 等待 GitHub 完成发布后，访问 https://mengercode.github.io/ 。普通项目仓库也可以部署，地址为 https://用户名.github.io/仓库名/，本项目相对资源路径支持该方式。
官方说明：https://docs.github.com/en/pages/quickstart

## 修改内容
- index.html：个人简介、项目、论文与联系方式。
- images/xumeng.png：个人照片。
- assets/css/homepage.css：布局、样式和手机适配。
- assets/js/homepage.js：栏目展开/收起与链接定位。
默认栏目收起；点击栏目展开，再次点击收起；只显示一个栏目。直接打开带 #publications 的网址可展开论文。打印时展示所有栏目。

## 来源与差异
参考页面：https://gengyulyu.github.io/homepage/ （2026-11-16 读取在线 HTML 和 CSS）。沿用参考页 Bootstrap 基础样式、字号、颜色、照片/简介比例及按钮交互；手机端改为流式宽度，避免原页面 min-width:1170px 的横向溢出。参考页加载 Roboto 但 Bootstrap 正文字体实际为 Helvetica Neue/Helvetica/Arial，因此沿用后者。
实际已检查桌面上的 mengercode.github.io-master.zip 原始同名压缩包（当前环境不存在 /mnt/data 路径），核对其中 _config.yml、_pages/about.md 和个人照片，并参考 Downloads/xu_meng_homepage_reference_style (6).zip 的已有整理版继续修改。补回原材料内此前遗漏的 2024 年两篇、2022 年一篇论文。原始简介备份在 source-notes/original-about.md。个人履历与论文沿用资料，未独立核实。没有对应个人资料的团队、教学、学术服务栏目不虚构，以个人项目和联系栏目替代。原项目 Jekyll 模板与示例页面不再作为发布依赖，原始压缩包保持不变。
浏览器验证：Chrome 无头模式实测初始收起、单栏目展开、再次收起、网址锚点展开；375、768、1024、1440 像素视口无横向溢出；打印显示全部六个栏目；无 JavaScript 运行错误。截图位于 preview/。
无外部脚本、分析追踪与远程字体依赖。保留源项目 LICENSE；Bootstrap 与 Font Awesome 文件保留上游许可，Font Awesome 字体适用 SIL OFL 1.1。
本次仅交付文件，未发布或更改 GitHub 仓库。

## 本次更新
新增 Student Training（人才培养）和 Courses Taught（讲授课程）折叠栏目。未提供学生清单及课程名称，相关内容暂留英文待补充说明。九项研究项目的标题、资助来源和承担角色全部改为英文，论文中的作者身份说明也统一改为英文。
