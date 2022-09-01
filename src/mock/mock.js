import Mock from 'mockjs';
// import HomeApi from './mock1';
// import UserApi from './mock2';
// import loginApi from './mock3';

//设置延时200-2000ms
Mock.setup({
    timeout: "200-2000",
    //timeout:400
})

Mock.mock('/api/volAct', 'get', function () {
    const data = {
        volActAll: [{
            actID: 0,
            img: '',
            name: '"宝贝回家"志愿宣传活动',
            addr: '上海市长宁区',
            date: '2022/6/11上午',
            aimNum: 10,
            tmpNum: 5,
        }, {
            actID: 1,
            img: '',
            name: '"阳光嘉园"志愿宣传活动',
            addr: '上海市嘉定区',
            date: '2022/7/11下午',
            aimNum: 10,
            tmpNum: 6,
        }, {
            actID: 2,
            img: '',
            name: '"快乐成长"志愿宣传活动',
            addr: '上海市徐汇区',
            date: '2022/6/11-2022/6/15',
            aimNum: 10,
            tmpNum: 7,
        }, {
            actID: 3,
            img: '',
            name: '"同济大学"志愿宣传活动',
            addr: '上海市杨浦区',
            date: '2022/7/11-2022/7/18',
            aimNum: 10,
            tmpNum: 8,
        }, {
            actID: 4,
            img: '',
            name: '"宝贝回家"志愿宣传活动',
            addr: '上海市长宁区',
            date: '2022/6/11上午',
            aimNum: 10,
            tmpNum: 5,
        }, {
            actID: 5,
            img: '',
            name: '"阳光嘉园"志愿宣传活动',
            addr: '上海市嘉定区',
            date: '2022/7/11下午',
            aimNum: 10,
            tmpNum: 6,
        }, {
            actID: 6,
            img: '',
            name: '"快乐成长"志愿宣传活动',
            addr: '上海市徐汇区',
            date: '2022/6/11-2022/6/15',
            aimNum: 10,
            tmpNum: 7,
        }]
    }
    return data
})

Mock.mock('/api/volOrgan', 'get', function () {
    const data = {

    }
    return data
})

Mock.mock('/api/volActInfo', 'post', function () {
    const data = {
        volActInfo: {
            actID: 3,
            img: '',
            name: '"同济大学"志愿宣传活动',
            addr: '上海市杨浦区',
            date: '2022/7/11*2022/7/18',
            aimNum: 10,
            tmpNum: 8,
            organization: '同济大学志愿者协会',
            contactPerson: '陈书记',
            contactNumber: '182xxxx9330',
            content: '这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~ 这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~'
        }
    }
    return data
})

Mock.mock('/api/volOrganInfo', 'post', function () {
    const data = {

    }
    return data
})