fis.config.merge({
    project : {
        include : 'src/**'
    }
});

//上面的配置等价于：
//fis.config.set('project.include', 'src/**');

fis.config.set('roadmap.path', [
    {
        //fis会自动产出一个资源表
        reg : 'map.json',
        //这里不要它输出
        release : false
        //也可以调整输出到别的地方，比如/src/map.json
        //release : 'src/$&'
    }
]);