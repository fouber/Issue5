fis.config.merge({
    project : {
        include : 'src/**'
    }
});

//上面的配置等价于：
//fis.config.set('project.include', 'src/**');