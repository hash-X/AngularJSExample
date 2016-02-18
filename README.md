AngularJS

解耦应用逻辑(Controller)、数据模型(Model)和视图(View);
Ajax服务;
依赖注入;

AngularJS有什么不同

在其他JavaScript框架中,我们被迫从自定义的JavaScript对象中进行扩展,并从外到内操作DOM。以jQuery 1 为例,为了在DOM中插入一个按钮元素,我们必须知道要把元素放到何处,并
在合适的位置插入它:

var btn = $("<button>Hi</button>");
btn.on('click', function(evt) { console.log("Clicked button"); });
$("#checkoutHolder").append(btn);

尽管这个过程并不复杂,但是它要求开发者对整个DOM结构都有所了解,并强迫我们在
JavaScript代码中加入复杂的控制逻辑,用以操作外部DOM。

而AngularJS则通过原生的Model-View-Controller(MVC,模型视图控制器)功能增强了HTML。结果表明,这个选择可以快捷和愉悦地构建出令人印象深刻并且极富表现力的客户端应用。

