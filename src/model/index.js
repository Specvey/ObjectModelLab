// ObjectModelLab\src\model\index.js

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

  getType()
  {
    return 'TEMPERATURE';
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

  getType()
  {
    return 'HUMIDITY';
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

  getType()
  {
    return 'LIGHT';
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

  getType()
  {
    return 'SWITCH';
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

  getType()
  {
    return 'DOOR';
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

  getType()
  {
    return 'FAN_SPEED';
  }

  toString()
    {
      let s='FAN_SPEED\n'+super.toString();
      return s;
    }
}


export const temperatureTestId = (donnees) => {
  let temperature = new Temperature(donnees['id'],donnees['name'],donnees['data']);
  return temperature.id;
};

export const temperatureTestNom = (donnees) => {
  let temperature = new Temperature(donnees['id'],donnees['name'],donnees['data']);
  return temperature.name;
};

export const temperatureTestValeurs = (donnees) => {
  let temperature = new Temperature(donnees['id'],donnees['name'],donnees['data']);
  return temperature.data.values;
};

export const temperatureTestLabels = (donnees) => {
  let temperature = new Temperature(donnees['id'],donnees['name'],donnees['data']);
  return temperature.data.labels;
};

export const temperatureTestType = (donnees) => {
  let temperature = new Temperature(donnees['id'],donnees['name'],donnees['data']);
  return temperature.getType();
};

export const temperatureTestToString = (donnees) => {
  let temperature = new Temperature(donnees['id'],donnees['name'],donnees['data']);
  return temperature.toString();
};



export const porteTestId = (donnees) => {
  let porte = new Door(donnees['id'],donnees['name'],donnees['data']);
  return porte.id;
};

export const porteTestNom = (donnees) => {
  let porte = new Door(donnees['id'],donnees['name'],donnees['data']);
  return porte.name;
};

export const porteTestValeurs = (donnees) => {
  let porte = new Door(donnees['id'],donnees['name'],donnees['data']);
  return porte.data.values;
};

export const porteTestLabels = (donnees) => {
  let porte = new Door(donnees['id'],donnees['name'],donnees['data']);
  return porte.data.labels;
};

export const porteTestType = (donnees) => {
  let porte = new Door(donnees['id'],donnees['name'],donnees['data']);
  return porte.getType();
};

export const porteTestToString = (donnees) => {
  let porte = new Door(donnees['id'],donnees['name'],donnees['data']);
  return porte.toString();
};


export const ventilateurTestId = (donnees) => {
  let ventilateur = new Fan_Speed(donnees['id'],donnees['name'],donnees['data']);
  return ventilateur.id;
};

export const ventilateurTestNom = (donnees) => {
  let ventilateur = new Fan_Speed(donnees['id'],donnees['name'],donnees['data']);
  return ventilateur.name;
};

export const ventilateurTestValeurs = (donnees) => {
  let ventilateur = new Fan_Speed(donnees['id'],donnees['name'],donnees['data']);
  return ventilateur.data.values;
};

export const ventilateurTestLabels = (donnees) => {
  let ventilateur = new Fan_Speed(donnees['id'],donnees['name'],donnees['data']);
  return ventilateur.data.labels;
};

export const ventilateurTestType = (donnees) => {
  let ventilateur = new Fan_Speed(donnees['id'],donnees['name'],donnees['data']);
  return ventilateur.getType();
};

export const ventilateurTestToString = (donnees) => {
  let ventilateur = new Fan_Speed(donnees['id'],donnees['name'],donnees['data']);
  return ventilateur.toString();
};
