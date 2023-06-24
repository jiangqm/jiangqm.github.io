

# 使用说明
### 所需环境

将下面三个都下载并安装完成

+ Node v16+
  ```
  https://nodejs.org/dist/v18.16.1/node-v18.16.1-x64.msi
  ```

+ vscode

  ```
  http://www.downza.cn/soft/276250.html
  ```

+ Git

  ```
  https://git-scm.com/downloads
  ```

生成SSH key

```
git config --global  user.name 
git config --global  user.email 

然后生成key
ssh-keygen -t rsa -C '上面user.name的邮箱'
```

基本在windows：C:\Users\用户.ssh这个文件夹下面

### 快速启动

+ 把代码clone下来

  ```
  git clone https://github.com/foaio-github/foaio-github.github.io.git
  ```

+  安装环境

  ```
  npm install
  ```

+ 启动

  ```
  npm run dev
  ```

### 添加商品

1. 打开项目中的`src/store/product.ts`这个文件

   ![image-20230624163005666](https://gitee.com/jiangqimin/note-pic/raw/master/img/image-20230624163005666.png)

2. 复制一个商品对象,修改对应的值放在productList中

   例如下面的对象

   ```
      {
         id: 2, // id
         /**商品名称 */
         title: '3ml atomizer - press version',
         /**图片地址可以是远程url也可以是具体的图片文件 */
         imageUrl: AK1403FImage,
         /**容量 */
         volume: '2ml',
         /**型号 */
         model:"1430-F",
         /**电池容量 */
         battery: '',
         /**电压 */
         resistance: '1.2Ω',
         /**充电口类型 */
         chargingPort: '',
         /**重量 */
         weight: '25g'
       },
   ```

   

3. 如果是实际图片文件将图片放入`\src\assets\image\product`文件夹中，并在`\src\assets\image\product\index.ts`文件中引入

   ![image-20230624163417573](https://gitee.com/jiangqimin/note-pic/raw/master/img/image-20230624163417573.png)

![image-20230624163519128](https://gitee.com/jiangqimin/note-pic/raw/master/img/image-20230624163519128.png)

4. 在商品对象的imageUrl属性中就可以填入以下的图片变量了

5. 重新打包

   ```
   npm run build
   ```

6. 点提交上传至github上等两三分钟就可以直接去网站可以看到最新添加的商品

   

   ![image-20230624163710770](https://gitee.com/jiangqimin/note-pic/raw/master/img/image-20230624163710770.png)

   
