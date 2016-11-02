// ObjectModelLab\test\model\index.js

import expect from 'expect';

import
{
	temperatureTest,
	porteTest,
	ventilateurTest,
} from '../../src/model';

import
{
	data
} from './sensors_data';

console.log(data.length);

describe('Object Model Lab Tests', () => {

	describe('Température tests', () => {

		it('Object température bien créé', () => {
			expect(temperatureTest(data[0])).toEqual('TEMPERATURE\n'+'id : '+'1234'+'\nname : '+'Température Bureau'+'\n'+'2016-10-19T08:00:00.000Z 23\n'+'2016-10-19T09:00:00.000Z 23\n'+'2016-10-19T10:00:00.000Z 22\n'+'2016-10-19T11:00:00.000Z 21\n'+'2016-10-19T12:00:00.000Z 23\n'+'2016-10-19T13:00:00.000Z 23\n'+'2016-10-19T14:00:00.000Z 23\n'+'2016-10-19T15:00:00.000Z 25\n'+'2016-10-19T16:00:00.000Z 25\n');
    	});

	});

	describe('Porte tests', () => {
  	
  		it('Object porte bien créé', () => {
			expect(porteTest(data[1])).toEqual('DOOR\n'+'id : '+'10245'+'\nname : '+'Porte du Garage'+'\n'+'0\n');
    	});

	});

	describe('Ventilateur tests', () => {
  	
  		it('Object ventilateur bien créé', () => {
			expect(ventilateurTest(data[2])).toEqual('FAN_SPEED\n'+'id : '+'2222'+'\nname : '+'Ventilateur Ordinateur Bureau'+'\n'+'2016-10-19T10:00:00.000Z 1073\n'+'2016-10-19T10:05:00.000Z 1800\n'+'2016-10-19T10:10:00.000Z 2299\n'+'2016-10-19T10:15:00.000Z 2176\n'+'2016-10-19T10:20:00.000Z 1899\n'+'2016-10-19T10:25:00.000Z 1400\n');
    	});

	});

});
