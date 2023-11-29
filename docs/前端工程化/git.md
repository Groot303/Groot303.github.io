# git 相关操作

### git命令

- git branch xxx 创建xxx分支
- git branch -r  查看远程分支
- git checkout 切换分支
- git checkout -b xxx 创建并切换到xxx分支


## 操作

- 连接到远程仓库：
    - git remote add origin https://github.com/Groot303/nw-avplayer

- 回退到上一个提交：（撤销暂存区的提交，但保留工作目录中的更改）
    - git reset HEAD~

- 回退到上一个提交并保留更改：如果你想回退到上一个提交，并保留工作目录中的更改，可以运行
    - git reset --soft HEAD~



## git 问题

- fatal: refusing to merge unrelated histories

原因：
- 远程提交和本地提交没有相同的提交历史

解决：
- 结尾添加 --allow-unrelated-histories