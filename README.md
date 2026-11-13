# Xu Meng 许萌 · 学术主页

## 新版首页

新版首页为根目录的 `index.html`，布局参考 [GengyuLyu/homepage](https://github.com/GengyuLyu/homepage)，独立编写，不引入参考站的个人资料、统计脚本或外部字体。

- 本地预览：直接用浏览器打开 `index.html`，或用 VS Code Live Server 打开。
- 内容：编辑 `index.html`；照片沿用 `images/xumeng.png`，Scholar 与 ORCID 来自本仓库原配置。
- 样式：`assets/css/homepage.css`；栏目切换：`assets/js/homepage.js`。
- 默认显示个人简介，点击蓝色按钮切换论文、项目和联系方式。锚点地址可分享，前进/后退可恢复栏目。禁用 JavaScript 或打印时显示全部内容。
- 右上角「中文 / English」切换完整语言版本，首次默认中文；允许本地存储时记住上次选择，切换语言不改变当前栏目。禁用 JavaScript 时显示中文全文并隐藏语言按钮。
- 双语内容集中维护在 `index.html`：元素正文为中文，`data-en` 为英文；`data-i18n-attr` 指定需要翻译的属性（如照片替代文本）。论文英文标题、期刊名和链接保持原文。栏目切换保留轻量淡入动效，并遵循系统“减少动态效果”设置。
- 旧 Jekyll 模板与内容保留；`_pages/about.md` 改为 `/about/` 并跳转到 `/`，避免覆盖新的静态首页。旧模板页面仍由 Jekyll 构建。
- GitHub Pages 仍可使用当前分支根目录构建。无需新增依赖，也不要添加 `.nojekyll`，以免影响旧页面。此修改未自动提交、推送或部署。

**资料核对：** 5 篇论文、7 个项目沿用已有资料；部分英文标题、期刊名存在疑似乱码（如 `Journal`、`Multi-objective`），未猜测修正文献内容。已移除一处乱码检索链接；其余 Scholar 链接仅为检索入口，不是已验证的论文原文地址。正式发布前请核对文献、照片使用许可及项目公开范围。

---

以下保留原模板说明，供维护旧页面时参考。

# Academic Pages
**Academic Pages is a Github Pages template for academic websites.**

![Academic Pages template example](images/homepage.png "Academic Pages template example")

# Getting Started

1. Register a GitHub account if you don't have one and confirm your e-mail (required!)
1. Click the "Use this template" button in the top right.
1. On the "New repository" page, enter your repository name as "[your GitHub username].github.io", which will also be your website's URL.
1. Set site-wide configuration and add your content.
1. Upload any files (like PDFs, .zip files, etc.) to the `files/` directory. They will appear at https://[your GitHub username].github.io/files/example.pdf.
1. Check status by going to the repository settings, in the "GitHub pages" section
1. (Optional) Use the Jupyter notebooks or python scripts in the `markdown_generator` folder to generate markdown files for publications and talks from a TSV file.

See more info at https://academicpages.github.io/

## Running locally

When you are initially working your website, it is very useful to be able to preview the changes locally before pushing them to GitHub. To work locally you will need to:

1. Clone the repository and made updates as detailed above.
1. Make sure you have ruby-dev, bundler, and nodejs installed
    
    On most Linux distribution and [Windows Subsystem Linux](https://learn.microsoft.com/en-us/windows/wsl/about) the command is:
    ```bash
    sudo apt install ruby-dev ruby-bundler nodejs
    ```
    On MacOS the commands are:
    ```bash
    brew install ruby
    brew install node
    gem install bundler
    ```
1. Run `bundle install` to install ruby dependencies. If you get errors, delete Gemfile.lock and try again.
1. Run `jekyll serve -l -H localhost` to generate the HTML and serve it from `localhost:4000` the local server will automatically rebuild and refresh the pages on change.

If you are running on Linux it may be necessary to install some additional dependencies prior to being able to run locally: `sudo apt install build-essential gcc make`

## Using Docker

Working from a different OS, or just want to avoid installing dependencies? You can use the provided `Dockerfile` to build a container that will run the site for you if you have [Docker](https://www.docker.com/) installed.

Start by build the container:

```bash
docker build -t jekyll-site .
```

Next, run the container:
```bash
docker run -p 4000:4000 --rm -v $(pwd):/usr/src/app jekyll-site
```

To run the `docker run` command on Windows, you need to adjust the syntax for the volume mapping (`-v`) as Windows uses different path formats. Here's how to run your command on Windows:

### Steps for Windows:
1. **Check Docker Installation**: Ensure Docker is installed and running.
2. **Adjust Path for Volume Mapping**:

   - On Windows, replace `$(pwd)` with the full absolute path to your current directory. For example:

     ```bash
     -v C:\path\to\your\site:/usr/src/app
     ```

### Full Command Example:
```bash
docker run -p 4000:4000 --rm -v C:\path\to\your\site:/usr/src/app jekyll-site
```

### Things to Keep in Mind:
1. **Use PowerShell**:
   - If you are using PowerShell, you can use `${PWD}` for the current directory:
     ```bash
     docker run -p 4000:4000 --rm -v ${PWD}:/usr/src/app jekyll-site
     ```

2. **Enable Docker File Sharing**:
   - If your volume doesn't map correctly, ensure Docker has access to the drive where your project resides. To do this:
     - Open Docker Desktop.
     - Go to *Settings* → *Resources* → *File Sharing*.
     - Add your drive (e.g., `C:`).

3. **Run in Command Prompt or PowerShell**:
   - In *Command Prompt*:
   
     ```bash
     docker run -p 4000:4000 --rm -v C:\path\to\your\site:/usr/src/app jekyll-site
     ```
   - In *PowerShell*:

     ```bash
     docker run -p 4000:4000 --rm -v ${PWD}:/usr/src/app jekyll-site
     ```

# Maintenance

Bug reports and feature requests to the template should be [submitted via GitHub](https://github.com/academicpages/academicpages.github.io/issues/new/choose). For questions concerning how to style the template, please feel free to start a [new discussion on GitHub](https://github.com/academicpages/academicpages.github.io/discussions).

This repository was forked (then detached) by [Stuart Geiger](https://github.com/staeiou) from the [Minimal Mistakes Jekyll Theme](https://mmistakes.github.io/minimal-mistakes/), which is © 2016 Michael Rose and released under the MIT License (see LICENSE.md). It is currently being maintained by [Robert Zupko](https://github.com/rjzupkoii) and additional maintainers would be welcomed.

## Bugfixes and enhancements

If you have bugfixes and enhancements that you would like to submit as a pull request, you will need to [fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) this repository as opposed to using it as a template. This will also allow you to [synchronize your copy](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) of template to your fork as well.

Unfortunately, one logistical issue with a template theme like Academic Pages that makes it a little tricky to get bug fixes and updates to the core theme. If you use this template and customize it, you will probably get merge conflicts if you attempt to synchronize. If you want to save your various .yml configuration files and markdown files, you can delete the repository and fork it again. Or you can manually patch.

---
<div align="center">
    
![pages-build-deployment](https://github.com/academicpages/academicpages.github.io/actions/workflows/pages/pages-build-deployment/badge.svg)
[![GitHub contributors](https://img.shields.io/github/contributors/academicpages/academicpages.github.io.svg)](https://github.com/academicpages/academicpages.github.io/graphs/contributors)
[![GitHub release](https://img.shields.io/github/v/release/academicpages/academicpages.github.io)](https://github.com/academicpages/academicpages.github.io/releases/latest)
[![GitHub license](https://img.shields.io/github/license/academicpages/academicpages.github.io?color=blue)](https://github.com/academicpages/academicpages.github.io/blob/master/LICENSE)

[![GitHub stars](https://img.shields.io/github/stars/academicpages/academicpages.github.io)](https://github.com/academicpages/academicpages.github.io)
[![GitHub forks](https://img.shields.io/github/forks/academicpages/academicpages.github.io)](https://github.com/academicpages/academicpages.github.io/fork)
</div>
