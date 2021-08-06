# webview_jsbridge
基于[WebViewJavascriptBridge](https://github.com/marcuswestin/WebViewJavascriptBridge)，优化了部分功能。

- #### 需要多次regiestHandler
**改动前**，使用regiestHandler(handlerName, responseCallback)进行注册，当收到handerName对应的消息后会触发responseCallback。<br>
**改动后**，使用regiestHandler(callback)进行注册，当收到任何对方H5/Native的消息都会触发callback。<br>

单个regiestHandler，只有提前注册了，才会收到对应消息，其他的未注册的消息都无法收到，扩展性极差，需要技术提前感知业务。取消单个regiestHandler后，无需单个注册也可以收到所有消息，只需要对消息进行过滤转换，最终执行对应的回调。

- #### H5的regiestHandler只能收到一次消息
**改动前**，H5的regiestHandler在收到一次消息后，就会被删除，若想继续监听native发来的消息，需要重新注册。<br>
**改动后**，H5只需要注册一次，一直能收到消息。这样就需要H5页面手动进行取消注册的操作，不然会出现内存泄露的问题。<br>

