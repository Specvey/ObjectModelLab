// ObjectModelLab\test\model\index.js


import expect from 'expect';

import
{
	temperatureTestId,
	temperatureTestNom,
	temperatureTestValeurs,
	temperatureTestLabels,
	temperatureTestType,
	temperatureTestToString,
	porteTestId,
	porteTestNom,
	porteTestValeurs,
	porteTestLabels,
	porteTestType,
	porteTestToString,
	ventilateurTestId,
	ventilateurTestNom,
	ventilateurTestValeurs,
	ventilateurTestLabels,
	ventilateurTestType,
	ventilateurTestToString
} from '../../src/model';

import
{
	data
} from './sensors_data';

console.log(data.length);

describe('Object Model Lab Tests', () => {

	describe('Température tests', () => {
		
		it('id correct', () => {
			expect(temperatureTestId(data[0])).toEqual('1234');
    	});

		it('nom correct', () => {
			expect(temperatureTestNom(data[0])).toEqual('Température Bureau');
		});

		it('valeurs correctes', () => {
			expect(temperatureTestValeurs(data[0])).toEqual([23,23,22,21,23,23,23,25,25]);
		});

		it('labels corrects', () => {
			expect(temperatureTestLabels(data[0])).toEqual(["2016-10-19T08:00:00.000Z", "2016-10-19T09:00:00.000Z", "2016-10-19T10:00:00.000Z", "2016-10-19T11:00:00.000Z", "2016-10-19T12:00:00.000Z","2016-10-19T13:00:00.000Z","2016-10-19T14:00:00.000Z","2016-10-19T15:00:00.000Z","2016-10-19T16:00:00.000Z"]);
    	});

		it('type correct', () => {
			expect(temperatureTestType(data[0])).toEqual('TEMPERATURE');
		});

		it('Object température bien créé', () => {
			expect(temperatureTestToString(data[0])).toEqual('TEMPERATURE\n'+'id : '+'1234'+'\nname : '+'Température Bureau'+'\n'+'2016-10-19T08:00:00.000Z 23\n'+'2016-10-19T09:00:00.000Z 23\n'+'2016-10-19T10:00:00.000Z 22\n'+'2016-10-19T11:00:00.000Z 21\n'+'2016-10-19T12:00:00.000Z 23\n'+'2016-10-19T13:00:00.000Z 23\n'+'2016-10-19T14:00:00.000Z 23\n'+'2016-10-19T15:00:00.000Z 25\n'+'2016-10-19T16:00:00.000Z 25\n');
    	});

	});
	
	describe('Porte tests', () => {
  	
		it('id correct', () => {
			expect(porteTestId(data[1])).toEqual('10245');
    	});

		it('nom correct', () => {
			expect(porteTestNom(data[1])).toEqual('Porte du Garage');
		});

		it('valeur correctes', () => {
			expect(porteTestValeurs(data[1])).toEqual(0);
		});

		it('label corrects', () => {
			expect(porteTestLabels(data[1])).toEqual(null); // undefined
    	});

		it('type correct', () => {
			expect(porteTestType(data[1])).toEqual('DOOR');
		});

  		it('Object porte bien créé', () => {
			expect(porteTestToString(data[1])).toEqual('DOOR\n'+'id : '+'10245'+'\nname : '+'Porte du Garage'+'\n'+'0\n');
    	});

	});
	
	describe('Ventilateur tests', () => {
  	

		it('id correct', () => {
			expect(ventilateurTestId(data[2])).toEqual('2222');
    	});

		it('nom correct', () => {
			expect(ventilateurTestNom(data[2])).toEqual('Ventilateur Ordinateur Bureau');
		});

		it('valeurs correctes', () => {
			expect(ventilateurTestValeurs(data[2])).toEqual([1073,1800,2299,2176,1899,1400]);
		});

		it('labels corrects', () => {
			expect(ventilateurTestLabels(data[2])).toEqual(["2016-10-19T10:00:00.000Z", "2016-10-19T10:05:00.000Z", "2016-10-19T10:10:00.000Z", "2016-10-19T10:15:00.000Z", "2016-10-19T10:20:00.000Z","2016-10-19T10:25:00.000Z"]);
    	});

		it('type correct', () => {
			expect(ventilateurTestType(data[2])).toEqual('FAN_SPEED');
		});

  		it('Object ventilateur bien créé', () => {
			expect(ventilateurTestToString(data[2])).toEqual('FAN_SPEED\n'+'id : '+'2222'+'\nname : '+'Ventilateur Ordinateur Bureau'+'\n'+'2016-10-19T10:00:00.000Z 1073\n'+'2016-10-19T10:05:00.000Z 1800\n'+'2016-10-19T10:10:00.000Z 2299\n'+'2016-10-19T10:15:00.000Z 2176\n'+'2016-10-19T10:20:00.000Z 1899\n'+'2016-10-19T10:25:00.000Z 1400\n');
    	});

	});

});
