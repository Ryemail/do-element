const Mock = require('mockjs');
import { parseQuery } from '../../src/utils/object';
const Random = Mock.Random;

const getMockData = function (config) {
	const message = {
		code: 200,
		message: '请求成功',
		data: {
			data: {},
			total: 50,
		},
	};

	const params = parseQuery(config.url) || { limit: 10 };
	// name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
	// cfirst: Random.cfirst(), //模拟姓氏
	// natural: Random.natural(10, 30), //返回一个随机的自然数
	// clast: Random.clast(), //模拟名字
	// age: Random.csentence(5, 10), // 生成一条随机的中文句子 ( min, max )
	// data: Random.date('yyyy-MM-dd'), // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
	// time: Random.time(), //时间
	// image: Random.image('200x100', '#4A7BF7', 'Hello'), //模拟图片 宽高不指定则随机
	// city: Random.city(true), //生成在某个省份的某个城市 city()生成随机城市
	// province: Random.province(), //生成随机省份
	// url: Random.url(), //生成随机URL(每次运行结果不同)
	// ip: Random.ip(), //  "74.97.41.159" 生成随机IP(每次运行结果不同)

	for (let i = 0; i < params.limit; i++) {
		const newObject = {
			id: i + 1,
			name: `${Random.clast()}${Random.cname()}`,
			date: Random.date('yyyy-MM-dd HH:mm'),
			status: Random.d4(),
			address: Mock.mock('@county(true)'),
		};
		message.data.data[i] = newObject;
	}

	return message;
};

Mock.mock(/api\/tableList/, 'get', getMockData);
