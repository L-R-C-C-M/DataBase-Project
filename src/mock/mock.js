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

Mock.mock('/api/volInst', 'get', function () {
    const data = {
        volInstAll: [{
            instID: 0,
            head: '',
            name: '上海青年志愿者协会',
            addr: '上海市 徐汇区',
            slogan: '青春志，愿美好',
            scale: 11444,
            fundationDate: '2020/11',
        }, {
            instID: 1,
            head: '',
            name: '上海青年志愿者协会',
            addr: '上海市 徐汇区',
            slogan: '青春志，愿美好',
            scale: 11444,
            fundationDate: '2020/11',
        }, {
            instID: 2,
            head: '',
            name: '上海青年志愿者协会',
            addr: '上海市 徐汇区',
            slogan: '青春志，愿美好',
            scale: 11444,
            fundationDate: '2020/11',
        }, {
            instID: 3,
            head: '',
            name: '上海青年志愿者协会',
            addr: '上海市 徐汇区',
            slogan: '青春志，愿美好',
            scale: 11444,
            fundationDate: '2020/11',
        }, {
            instID: 4,
            head: '',
            name: '上海青年志愿者协会',
            addr: '上海市 徐汇区',
            slogan: '青春志，愿美好',
            scale: 11444,
            fundationDate: '2020/11',
        }, {
            instID: 5,
            head: '',
            name: '上海青年志愿者协会',
            addr: '上海市 徐汇区',
            slogan: '青春志，愿美好',
            scale: 11444,
            fundationDate: '2020/11',
        }, {
            instID: 6,
            head: '',
            name: '上海青年志愿者协会',
            addr: '上海市 徐汇区',
            slogan: '青春志，愿美好',
            scale: 11444,
            fundationDate: '2020/11',
        }]
    }
    return data
})

Mock.mock('/api/volActInfo', 'get', function () {
    const data = {
        volActInfo: {
            actID: 0,
            img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
            name: '"同济大学"志愿宣传活动',
            addr: '上海市杨浦区',
            date: '2022/7/11-2022/7/18',
            aimNum: 10,
            tmpNum: 8,
            organization: '同济大学志愿者协会',
            //contactPerson: '陈书记',
            contact: '182xxxx9330',
            content: '这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~ 这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~这里是活动详情~~~~',
        }
    }
    return data
})

Mock.mock('/api/volInstInfo', 'get', function () {
    const data = {
        volInstInfo: {
            instID: 7,
            head: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
            name: '上海市嘉定区同济大学团工委',
            addr: '同济大学嘉定校区',
            scale: 11444,
            fundationDate: '2020/11',
            contact: '182****9330',
            introduction: '这里是队伍简介****这里是队伍简介****这里是队伍简介****这里是队伍简介****这里是队伍简介****这里是队伍简介**** 这里是队伍简介 **** 这里是队伍简介 **** 这里是队伍简介 **** 这里是队伍简介 ****这里是队伍简介 **** 这里是队伍简介',
            certificate: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png',
        }
    }
    return data
})