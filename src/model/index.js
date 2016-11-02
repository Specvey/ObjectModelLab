// ObjectModelLab\src\model\index.js

// Soit faire un export const des class

// Soit créer des fonctions 

class Data
{
	constructor(donnees)
	{
		this._values = donnees['values'] || donnees['value'];
		this._labels = donnees['labels'] || null;
	}

	get values()
	{
    	return this._values;
  	}
  	
  	set values(val)
  	{
    	this._values = val;
  	}
  	
  	get labels()
  	{
    	return this._labels;
  	}

  	set labels(lab)
  	{
    	this._labels = lab;
  	}

  	toString()
  	{
  		if(this._labels === null) return ''+this._values+'\n';
  		let s = '';
  		for(let i = 0; i < this._values.length; i++)
  		{
  			s+=''+this._labels[i]+' '+this._values[i]+'\n';
  		}
  		return s;
  	}
}


class Sensor
{
	constructor(id, name, data)
	{
		this._id = id || '';
		this._name = name || '';
		this._data = new Data(data);
	}

	get id()
	{
    	return this._id;
  	}
  	
  	set id(identifiant)
  	{
    	this._id = identifiant;
  	}
  	
  	get name()
  	{
    	return this._name;
  	}

  	set name(nom)
  	{
    	this._name = nom;
  	}

  	get data()
  	{
    	return this._data;
  	}

  	set data(donnees)
  	{
    	this._data = donnees;
  	}

  	toString()
  	{
  		return ('id : '+this._id+'\nname : '+this._name+'\n'+this._data.toString());
  	}
}

class Temperature extends Sensor
{
	constructor(id, name, data)
	{
		super(id, name, data);
	}

	toString()
  	{
  		let s='TEMPERATURE\n'+super.toString();
  		return s;
  	}
}

class Humidity extends Sensor
{
	constructor(id, name, data)
	{
		super(id, name, data);
	}

	toString()
  	{
  		let s='HUMIDITY\n'+super.toString();
  		return s;
  	}
}

class Light extends Sensor
{
	constructor(id, name, data)
	{
		super(id, name, data);
	}

	toString()
  	{
  		let s='LIGHT\n'+super.toString();
  		return s;
  	}
}

class Switch extends Sensor
{
	constructor(id, name, data)
	{
		super(id, name, data);
	}

	toString()
  	{
  		let s='SWITCH\n'+super.toString();
  		return s;
  	}
}

class Door extends Sensor
{
	constructor(id, name, data)
	{
		super(id, name, data);
	}

	toString()
  	{
  		let s='DOOR\n'+super.toString();
  		return s;
  	}
}


class Fan_Speed extends Sensor
{
  constructor(id, name, data)
  {
    super(id, name, data);
  }

  toString()
    {
      let s='FAN_SPEED\n'+super.toString();
      return s;
    }
}
/*
let data = new Data(0);

let temp = new Temperature('#0123', 'JeSuisUneT',data);

console.log(temp.toString());
*/

export const temperatureTest = (donnees) => {
  let temperature = new Temperature(donnees['id'],donnees['name'],donnees['data']);
  return temperature.toString();
};

export const porteTest = (donnees) => {
  let porte = new Door(donnees['id'],donnees['name'],donnees['data']);
  return porte.toString();
};

export const ventilateurTest = (donnees) => {
  let ventilateur = new Fan_Speed(donnees['id'],donnees['name'],donnees['data']);
  return ventilateur.toString();
};