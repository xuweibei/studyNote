sudo  npm i yarn tyarn -g 安装命令

yarn global add umi 全局安装 umi

umi -v 看看是否有版本号，如果没有，则是表明环境变量没有配


输入命令 sudo vi ~/.bash_profile

按     i 进行编辑环境变量 
添加环境变量

export PATH=“$PATH:`yarn global bin`”

按esc退出编辑，
source vi ~/.bash_profile  回车 就保存了 环境变量的添加操作了；

此时再运行 umi -v 就可以看到版本号了

新建 文件夹存放umi项目，终端输入 yarn create umi 就开始创建了
过程中会有选项选择  app  然后 选择 antd dva 回车就可以了；
然后输入 yarn 安装依赖，
完事后 yarn start 就可以启动项目了；