##一个前后端分离的小项目
>这个小项目主要是实现前后端分离为目的。该项目前后端分离的思路是前端使用AngularJS调用后端接口，后端采用django作应用服务器，其中django引入第三方插件djangorestframework来
实现rest接口。在实际部署过程中，所有前端放置在apache的容器中，所有后端单独部署一个容器，中间使用zookeeper作为服务注册。该项目对博客进行基本的管理。
