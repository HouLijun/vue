$(function () {
    var list=new Vue({
        el:"#J_list",
        data:{
            list:[
                {
                    id:1,
                    title:"中国金融翘楚 - 大德通票号",
                    abstract:"祝贺晋商贷大同分公司盛大开业",
                    insertTime:"2015-04-02 11:15:35 ",
                    browseNumber:4151,
                    thumbnail:"images/thumbnail.jpg"
                },
                {
                    id:2,
                    title:"这是标题二",
                    abstract:"这是摘要二",
                    insertTime:"2016-04-02 11:15:35 ",
                    browseNumber:41501,
                    thumbnail:"images/thumbnail.jpg"
                },
                {
                    id:3,
                    title:"这是标题三",
                    abstract:"这是摘要三",
                    insertTime:"2017-04-02 11:15:35 ",
                    browseNumber:41515,
                    thumbnail:"images/thumbnail.jpg"
                }
            ]
        }
    })
})