function Group()
{
	this.color=`rgb(255,0,255)`
	this.items=[]

	this.play= function(_func=`drawRect`)
	{
		
		for(index in this.items)
		{
			this.items[index].play();
		}
		return this;
	}
	this.render= function(_func=`drawRect`, _args=undefined)
	{
		
		for(index in this.items)
		{
			this.items[index][_func](_args);
		}
		return this;
	}

	this.add=function(_arr)
	{
		for(index in _arr)
		{
			if(_arr[index].length)
			{
				for(obj in _arr[index])
				{
					this.items.push(_arr[index][obj])
				}
			}	
			else
			{
				this.items.push(_arr[index])
			}
		}
	}
	this.remove=function(_arr)
	{
		for(index in _arr)
		{
			if(_arr[index].length)
			{
				for(obj in _arr[index])
				{
					let thing = this.items.indexOf(_arr[index][obj])
					this.items.splice(thing,1)
				}
			}	
			else
			{
				let thing = this.items.indexOf(_arr[index])
				this.items.splice(thing,1)
			}
		}
    }
    this.drawMasks=function()
    {
        for(index in this.items)
        {
            this.items[index].drawMask(this.color)
        }   
        return this;
    }
    
    this.collide=function(_object, _type=``)
    {
		switch(_type)
		{
			case `color`:
				this.drawMasks();
				let pix = context.getImageData(_object.x, _object.y, 1, 1)
				if(this.color === `rgb(${pix.data[0]},${pix.data[1]},${pix.data[2]})`)
				{
					return true;
				}
			break;
			default:
				for(index in this.items)
				{
					while(this.items[index].overlap(_object))
					{
						return true;
					}
				}
			break;
		}
		return false;
    }
}