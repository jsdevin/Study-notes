怎么将vscode中的文件或者文件夹推送到GitHub

**vscode中的文件推送到GitHub的方法**：
git init
git add .
git commit -m 你的提交信息”
git push

**解释**：
1. `git init`  git初始化
2. `git add .`  提交到缓存区。这里的"add"和“ . ”中间有个空格。如果不写空格，git无法识别。“add .” 这里就是添加所有文件的意思。
3. `git commit -m “你的提交信息”`  是将暂存区里的改动给提交到本地的版本库。 这里“你的提交信息”是你自己想要提交的信息哦，比如，“create a project”, “first commit”.
4. `git push` 是将本地版本库的分支推送到远程服务器上对应的分支,提交到远程的github仓库,。（此操作目的是把本地仓库push到github上面，此步骤可能需要你输入帐号和密码）

ps: 如果" git push "不成功, " git push -u origin master "也不能解决问题，如果是因为github中的README.md文件不在本地代码目录中， 可以通过如下命令进行代码合并
　`git pull --rebase origin master`
这里，pull=fetch+merge。合并后再用“git push”就可以上传了。

[推送方法的参考文章](https://blog.csdn.net/jojowei/article/details/89008657)