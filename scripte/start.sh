#/bin/bash
echo "安装依赖..."
npm i
echo "打包..."
npm run build
echo "重启服务"
pm2 restart main
echo "成功"
