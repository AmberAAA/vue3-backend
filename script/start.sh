#/bin/bash
echo "拉取代码"
git checkout .
git pull
echo "安装依赖..."
npm i
echo "打包..."
npm run build
echo "重启服务"
/usr/local/node_global/bin/pm2 restart main
echo "成功"
