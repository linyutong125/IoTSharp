"use strict";(self.webpackChunkiotsharp=self.webpackChunkiotsharp||[]).push([[671],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return k}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),s=u(r),k=n,h=s["".concat(p,".").concat(k)]||s[k]||c[k]||o;return r?a.createElement(h,i(i({ref:t},m),{},{components:r})):a.createElement(h,i({ref:t},m))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},9881:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=r(3117),n=r(102),o=(r(7294),r(3905)),i=["components"],l={sidebar_position:1},p="IoTSharp \u7b80\u4ecb",u={unversionedId:"intro",id:"intro",title:"IoTSharp \u7b80\u4ecb",description:"\u8ba9\u6211\u4eec\u63a2\u7d22\u4e00\u4e0b  IoTSharp \u5728\u4e94\u5206\u949f\u5185.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",editUrl:"https://github.com/IoTSharp/IoTSharp/edit/master/docs/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"IoTSharp\u662f\u4ec0\u4e48\uff1f",permalink:"/docs/tutorial-basics/iotsharp"}},m={},c=[{value:"IoTSharp \u662f\u4ec0\u4e48\uff1f",id:"iotsharp-\u662f\u4ec0\u4e48",level:2},{value:"IoTSharp\u7684\u7cfb\u7edf\u5fc5\u5907\u6709\u54ea\u4e9b?",id:"iotsharp\u7684\u7cfb\u7edf\u5fc5\u5907\u6709\u54ea\u4e9b",level:3},{value:"\u5982\u4f55\u90e8\u7f72\uff1f",id:"\u5982\u4f55\u90e8\u7f72",level:2},{value:"\u5982\u4f55\u4f7f\u7528docker-compose  \u5b89\u88c5IoTSharp ?",id:"\u5982\u4f55\u4f7f\u7528docker-compose--\u5b89\u88c5iotsharp-",level:3},{value:"\u521d\u6b21\u4f7f\u7528",id:"\u521d\u6b21\u4f7f\u7528",level:2},{value:"\u5173\u4e8e\u8d5e\u52a9",id:"\u5173\u4e8e\u8d5e\u52a9",level:2}],s={toc:c};function k(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"iotsharp-\u7b80\u4ecb"},"IoTSharp \u7b80\u4ecb"),(0,o.kt)("p",null,"\u8ba9\u6211\u4eec\u63a2\u7d22\u4e00\u4e0b  ",(0,o.kt)("strong",{parentName:"p"},"IoTSharp \u5728\u4e94\u5206\u949f\u5185"),"."),(0,o.kt)("h2",{id:"iotsharp-\u662f\u4ec0\u4e48"},"IoTSharp \u662f\u4ec0\u4e48\uff1f"),(0,o.kt)("p",null," IoTSharp \u662f\u4e00\u4e2a\u57fa\u4e8e.Net 6.0 \u4f7f\u7528C#\u5f00\u53d1\u7684\u6570\u636e\u6536\u96c6\u3001\u5904\u7406\u3001\u53ef\u89c6\u5316\u4e0e\u8bbe\u5907\u7ba1\u7406\u7684\u5f00\u6e90\u7269\u8054\u7f51(IoT)\u5e73\u53f0\u57fa\u7840\u5e73\u53f0,\u652f\u6301 HTTP\u3001MQTT \u3001CoAP\u7b49\u534f\u8bae\u5b9e\u73b0\u8bbe\u5907\u7684\u6570\u5b57\u5b6a\u751f,\u4e14\u5c5e\u6027\u6570\u636e\u548c\u9065\u6d4b\u6570\u636e\u534f\u8bae\u7b80\u5355\u7c7b\u578b\u4e30\u5bcc,\u7b80\u6613\u8bbe\u7f6e\u5373\u53ef\u5c06\u6570\u636e\u5b58\u50a8\u5728PostgreSql\u3001MySql\u3001Oracle\u3001SQLServer\u3001Sqlite \u6216\u8005 InfluxDB 2.0;TDengine;TimescaleDB\u7b49\u65f6\u5e8f\u6570\u636e\u5e93\u4e2d\u3002"),(0,o.kt)("h3",{id:"iotsharp\u7684\u7cfb\u7edf\u5fc5\u5907\u6709\u54ea\u4e9b"},"IoTSharp\u7684\u7cfb\u7edf\u5fc5\u5907\u6709\u54ea\u4e9b?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"[Docker]","](",(0,o.kt)("a",{parentName:"li",href:"https://www.docker.com/"},"https://www.docker.com/"),") \u6700\u65b0\u7248\u672c",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u8981\u90e8\u7f72IoTSharp, \u6211\u4eec\u9996\u5148\u63a8\u8350\u7684\u662fdocker\uff0c \u4ee5\u53caDocker-Compose, \u901a\u8fc7\u6211\u4eec\u63a8\u8350\u7684",(0,o.kt)("a",{parentName:"li",href:"https://github.com/IoTSharp/IoTSharp/raw/master/Deployments/rabbit_mongo_influx/docker-compose.yml"},"docker-compose.yml")," \u4f60\u53ef\u4ee5\u76f4\u63a5\u90e8\u7f72\u6210\u529f\uff0c\u800c\u4e0d\u7528\u715e\u8d39\u5468\u6298\u7684\u90e8\u7f72\u73af\u5883\u3002"))),(0,o.kt)("li",{parentName:"ul"},"\u5173\u7cfb\u578b\u6570\u636e\u5e93   \u7528\u6765\u5b58\u50a8\u57fa\u7840\u6570\u636e\u548c\u5c5e\u6027\u6570\u636e\u3002",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"PostgreSQL \u9a8c\u8bc1\u8fc7\u7684\u7248\u672c\u4e3a  PostgreSQL 11.3,12.x\u7b49\u3002 "),(0,o.kt)("li",{parentName:"ul"},"MySql   \u9a8c\u8bc1\u8fc7\u7684\u7248\u672c\u4e3a MySQL 8.0.17  "),(0,o.kt)("li",{parentName:"ul"},"Oracle  \u9a8c\u8bc1\u8fc7\u7684\u7248\u672c\u4e3a  Oracle Standard Edition 12c Release 2  \uff0c \u64cd\u4f5c\u7cfb\u7edf\u4e3aCent OS 7 "),(0,o.kt)("li",{parentName:"ul"},"Sqlite  \u7a0b\u5e8f\u5185\u7f6e\uff0c\u5747\u9a8c\u8bc1\u3002 \u5c0f\u9879\u76ee\u63a8\u8350\u3002 "),(0,o.kt)("li",{parentName:"ul"},"SQLServer  \u9a8c\u8bc1\u8fc7\u7684\u7248\u672c\u4e3a Microsoft SQL Server 2016 (RTM-GDR) (KB4019088) - 13.0.1742.0 (X64)  "),(0,o.kt)("li",{parentName:"ul"},"InMemory \u901a\u8fc7EF \u7684\u5185\u5b58\u6570\u636e\u5e93\uff0c\u4e00\u822c\u7528\u4e8e\u6d4b\u8bd5 \u3002 "))),(0,o.kt)("li",{parentName:"ul"},"\u65f6\u5e8f\u6570\u636e\u5e93    \u7528\u6765\u5b58\u50a8\u9065\u6d4b\u6570\u636e\u5e76\u63d0\u4f9b\u9065\u6d4b\u6570\u636e\u7684\u67e5\u8be2\u7edf\u8ba1\u7b49\u7b49\u3002 ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"\u901a\u8fc7EFCore \u4f7f\u7528\u5173\u7cfb\u578b\u6570\u636e\u5e93\u6765\u5b58\u50a8\u5e26\u6709\u65f6\u95f4\u6233\u7684\u6570\u636e\uff0c\u867d\u7136\u4e0d\u63a8\u8350\uff0c\u4f46\u4e0d\u59a8\u662f\u4e00\u79cd\u5c0f\u578b\u9879\u76ee\u7684\u6700\u4f73\u9009\u62e9\u3002 "),(0,o.kt)("li",{parentName:"ul"},"InfluxDB 2.x \u6211\u4eec\u81f4\u529b\u4e8e\u63a8\u8350\u7684\u65f6\u5e8f\u6570\u636e\u5e93\uff0c InfluxDB\u96c6\u6210\u975e\u5e38\u597d\u7528\u7684\u53ef\u89c6\u5316\u5de5\u5177\uff0c \u9664\u4e86\u4e0d\u7b26\u5408\u4fe1\u521b\u6ca1\u6709\u4efb\u4f55\u53ef\u6311\u5254\u7684\u3002"),(0,o.kt)("li",{parentName:"ul"},"TDengine  \u6211\u4eec\u81f4\u529b\u4e8e\u63a8\u8350\u7684\u56fd\u4ea7\u65f6\u5e8f\u6570\u636e\u5e93\uff0c \u751a\u81f3\u4e3a\u4e86\u652f\u6301\u5b83\u6211\u82b1\u4e86\u5927\u91cf\u65f6\u95f4\u7f16\u5199\u4ed6\u7684\u63d0\u4f9b\u7a0b\u5e8f ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/maikebing/Maikebing.EntityFrameworkCore.Taos"},"Maikebing.EntityFrameworkCore.Taos")),(0,o.kt)("li",{parentName:"ul"},"PinusDB  \u56fd\u4ea7\u677e\u679c\u65f6\u5e8f\u6570\u636e\u5e93\uff0c \u7b80\u5355\u6613\u7528\uff0c \u6211\u4eec\u4e5f\u4e3a\u4ed6\u7f16\u5199\u4e86\u63d0\u4f9b\u7a0b\u5e8f\uff0c ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/maikebing/PinusDB.Data"},"PinusDB.Data")," "),(0,o.kt)("li",{parentName:"ul"},"TimescaleDB  \u57fa\u4e8ePostgreSQL\u7684\u65f6\u5e8f\u6570\u636e\u5e93\uff0c \u4f60\u53ef\u4ee5\u76f4\u63a5\u9009\u62e9\u5b83\u6765\u5f53\u65f6\u5e8f\u6570\u636e\u5e93\u4e5f\u53ef\u4ee5\u5f53\u5173\u7cfb\u578b\u6570\u636e\u5e93\uff0c \u4e00\u6b21\u641e\u5b9a\u3002 "),(0,o.kt)("li",{parentName:"ul"},"\u5173\u7cfb\u6570\u636e\u5e93 \u5206\u533a\u6cd5 \uff0c \u6211\u4eec\u6709\u652f\u6301\u8fd9\u79cd\u65b9\u5f0f\uff0c\u4f46\u59cb\u7ec8\u4e0d\u63a8\u8350\uff0c\u9664\u975e\u4f60\u60f3\u53ea\u60f3\u7528\u4e00\u4e2a\u6570\u636e\u5e93\u4e14\u901a\u8fc7\u5206\u533a\u5c31\u80fd\u641e\u5b9a\u4f60\u7684\u6570\u636e\u91cf\u3002 "),(0,o.kt)("li",{parentName:"ul"},"SingleTable  \u901a\u8fc7EF\u7684\u7684\u5355\u8868\u5b58\u50a8\u3002 \u901a\u8fc7\u5355\u8868\uff0c \u6211\u4eec\u5c31\u4e0d\u9700\u8981\u4f9d\u8d56\u4e8e\u6570\u636e\u5e93\u6216\u8005\u5206\u533a\u7b49\u7b49\u3002 \u5c0f\u9879\u76ee\u63a8\u8350\u3002 "))),(0,o.kt)("li",{parentName:"ul"},"\u6d88\u606f\u961f\u5217  \u6211\u4eec\u662f\u901a\u8fc7CAP\u9879\u76ee\u6765\u5b9e\u73b0\u7684\uff0c\u56e0\u6b64\u5b83\u652f\u6301\u7684\u7406\u8bba\u4e0a\u6211\u4eec\u90fd\u652f\u6301\u3002 ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"RabbitMQ \u6211\u4eec\u63a8\u8350\u7684\u3002 "),(0,o.kt)("li",{parentName:"ul"},"Kafka   \u6d4b\u8bd5\u4f3c\u4e4e\u6b63\u5e38\u3002 "),(0,o.kt)("li",{parentName:"ul"},"ZeroMQ  \u9488\u5bf9\u51fa\u95e8\u7684ZeroMQ , \u6211\u4eec\u7f16\u5199\u4e86MaiKeBing.CAP.ZeroMQ \u548c MaiKeBing.HostedService.ZeroMQ  \u4ee5\u652f\u6301\u5b83\u3002 "),(0,o.kt)("li",{parentName:"ul"},"InMemory \u901a\u8fc7\u5b83\u53ef\u4ee5\u4e0d\u9700\u8981\u4f9d\u8d56\u4efb\u4f55\u5916\u63a5\uff0c \u8fd9\u662fCAP\u63d0\u4f9b\u7684\u4e00\u79cd\u9014\u5f84\u3002 \u5c0f\u9879\u76ee\u63a8\u8350\u3002 "))),(0,o.kt)("li",{parentName:"ul"},"\u6d88\u606f\u961f\u5217\u5b58\u50a8",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"PostgreSql \u5982\u679c\u5168\u79f0\u7528PostgreSQL \u53ef\u4ee5\u8003\u8651\u3002 "),(0,o.kt)("li",{parentName:"ul"},"MongoDB  \u6211\u4eec\u63a8\u8350\u7684"),(0,o.kt)("li",{parentName:"ul"},"LiteDB  .Net \u7f16\u5199\u7684NoSQL \u9879\u76ee\uff0c \u5c0f\u9879\u76ee\u63a8\u8350\uff0c "),(0,o.kt)("li",{parentName:"ul"},"InMemory \u5b58\u50a8\u5728\u5185\u5b58\uff0c \u4e0d\u4f9d\u8d56\u4e8e\u5916\u63a5\u3002 \u5c0f\u9879\u76ee\u63a8\u8350\u3002 ")))),(0,o.kt)("h2",{id:"\u5982\u4f55\u90e8\u7f72"},"\u5982\u4f55\u90e8\u7f72\uff1f"),(0,o.kt)("h3",{id:"\u5982\u4f55\u4f7f\u7528docker-compose--\u5b89\u88c5iotsharp-"},"\u5982\u4f55\u4f7f\u7528docker-compose  \u5b89\u88c5IoTSharp ?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/IoTSharp/IoTSharp/tree/master/Deployments/rabbit_mongo_influx"},"RMI")," \u4f7f\u7528Rabbitmq \u4f5c\u4e3a EventBus, Mongodb \u4f5c\u4e3a\u6d88\u606f\u5b58\u50a8\uff0c \u9065\u6d4b\u6570\u636e\u4f7f\u7528Influx 2.0 \uff0c\u8fd9\u4e2a\u65b9\u6848\u4e2d\u9065\u6d4b\u6570\u636e\u4e5f\u53ef\u4ee5\u4f7f\u7528TDengine")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/IoTSharp/IoTSharp/tree/master/Deployments/zeromq_taos"},"ZPT")," \u4f7f\u7528ZeroMQ \u4f5c\u4e3a EventBus, PostgreSQL \u4f5c\u4e3a\u6d88\u606f\u5b58\u50a8\uff0c \u9065\u6d4b\u6570\u636e\u4f7f\u7528  TDengine  ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/IoTSharp/IoTSharp/tree/master/Deployments/zeromq_sharding"},"ZPS"),"  \u9ed8\u8ba4\u5f00\u53d1\u914d\u7f6e\uff0c  IoTSharp \u548c PostgreSql, \u9065\u6d4b\u6570\u636e\u53ef\u4ee5\u901a\u8fc7\u5355\u8868\u6216\u8005\u5206\u8868\u3002 "))),(0,o.kt)("h2",{id:"\u521d\u6b21\u4f7f\u7528"},"\u521d\u6b21\u4f7f\u7528"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u521d\u59cb\u79df\u6237\u548c\u7ba1\u7406\u5458\u3001\u7528\u6237\u6ce8\u518c\u4fe1\u606f\u5728\u7cfb\u7edf\u53d1\u73b0\u4f60\u672a\u521d\u59cb\u5316\u65f6\u81ea\u52a8\u8df3\u8f6c\u5230\u5b89\u88c5\u754c\u9762\uff0c \u586b\u5199\u5b8c\u6210\u540e\uff0c \u7cfb\u7edf\u4f1a\u521d\u59cb\u5316\u6743\u9650\u3001\u57fa\u7840\u6570\u636e\u7b49\u79cd\u5b50\u6570\u636e\u3002 "),(0,o.kt)("li",{parentName:"ul"},"X509 CA\u8bc1\u4e66\u7528\u4e8e\u901a\u8fc7\u8bc1\u4e66\u8fdb\u884c\u4fdd\u969c\u5b89\u5168\u901a\u8baf\u548c\u5173\u7cfb\u9a8c\u8bc1\uff0c \u7b2c\u4e00\u6b21\u65f6\u9700\u8981\u8c03\u7528\u9ad8\u7ea7\u7ba1\u7406\u5458\u6743\u9650\u529e\u6cd5\u5e76\u5199\u5165\u7cfb\u7edf\uff0c \u5c24\u5176\u662f\u5f53\u4f60\u4f7f\u7528\u4e86\u975e\u7ba1\u7406\u5458\u7528\u6237\u8fdb\u884c\u542f\u52a8IoTSharp \u65f6 \uff0c \u56e0\u6b64\uff0c \u9700\u8981\u786e\u4fdd\u7b2c\u4e00\u6b21\u751f\u6210\u4f7f\u7528\u9ad8\u6743\u9650\uff0c \u540e\u7eed\u4f7f\u7528\u4f4e\u6743\u9650\u3002 ")),(0,o.kt)("h2",{id:"\u5173\u4e8e\u8d5e\u52a9"},"\u5173\u4e8e\u8d5e\u52a9"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u6211\u4eec\u63a5\u53d7\u8d44\u91d1\u4ee5\u53ca\u4efb\u4f55\u65b9\u5f0f\u7684\u7684\u6350\u8d60\uff0c\u4f46\u5e76\u4e0d\u610f\u5473\u7740\u6211\u4eec\u4f1a\u4e3a\u60a8\u627f\u8bfa\u6216\u62c5\u4fdd\u4efb\u4f55\u4e8b\u60c5\uff0c \u4e5f\u5e76\u4e0d\u610f\u5473\u7740\u5bf9\u4f60\u4f7f\u7528IoTSharp\u5e26\u6765\u7684\u8d1f\u9762\u5f71\u54cd\u8d1f\u6709\u8d23\u4efb\u3002 \u6240\u6709\u4f60\u4f7f\u7528IoTSharp\u9020\u6210\u7684\u4efb\u4f55\u635f\u5931\u4ee5\u53ca\u4efb\u4f55\u5173\u8054\u7684\u8d23\u4efb\u7b49\u6211\u4eec\u5747\u4e0d\u4f1a\u6709\u4efb\u4f55\u8d23\u4efb\u548c\u4e49\u52a1\u627f\u62c5\uff0c\u4f60\u9700\u8981\u4e3a\u4f60\u505a\u7684\u51b3\u5b9a\u800c\u8d1f\u8d23\u3002 "),(0,o.kt)("li",{parentName:"ul"},"IoTSharp\u5f00\u6e90\u5e76\u4e0d\u7b49\u4e8e\u4f60\u53ef\u4ee5\u7528\u4ed6\u7533\u62a5\u9879\u76ee\u3001\u7533\u8bf7\u4e13\u5229\u3001\u63d0\u4f9b\u4e91\u670d\u52a1\u3001\u91cd\u65b0\u5305\u88c5\u7b49\u67d0\u79cd\u5176\u4ed6\u65b9\u5f0f\u6765\u83b7\u5229\u4f46\u5bf9IoTSharp\u6beb\u65e0\u5efa\u6811\u3002 \u6211\u4eec\u8ba8\u538c\u8fd9\u79cd\u81ea\u79c1\u884c\u4e3a\u3002")))}k.isMDXComponent=!0}}]);