var x=false;
var caveData ={
	info:{
		layout:[
			[x,x,x,x,x,x,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0],
			[x,x,x,x,x,6,6,x,x,5,3,x,x,x,x,5,x,x,x,x,x,x,x,x,x,5,x,x,x,2,5,5,x,x,x],
			[x,x,x,x,6,6,6,x,x,x,2,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,2,x,x,x,x,x],
			[x,x,x,6,6,6,6,x,x,x,2,x,x,x,x,x,3,x,x,x,x,x,x,x,x,x,x,x,x,2,x,x,x,x,x],
			[x,x,6,6,6,6,6,x,x,x,2,x,x,x,x,x,2,x,x,x,x,x,x,x,x,x,x,x,x,2,x,x,x,x,x],
			[x,6,6,6,6,6,6,x,x,x,2,x,x,x,x,x,2,x,x,x,x,x,x,x,x,x,x,x,x,2,x,x,x,x,x],
			[6,6,6,6,6,6,6,x,x,x,1,x,x,x,x,x,1,x,x,x,x,x,x,x,x,x,x,x,x,1,x,x,x,x,x],
			[6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]
			
			
		],
		src:`images/CaveSpreadsheet.png`,
	},
	states:
	[		
			{
				fps:5,
				cycle:false,
				frames:[
					{width:64, height:64, startX:0, startY:0}
				]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:64, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:128, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:192, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:256, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:320, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:384, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:448, startY:0}]
			},
			{
				fps:1,
				cycle:false,
				frames:[{width:64, height:64, startX:512, startY:0}]
			}
		]
	}
	var caveBackData ={
		info:{
			layout:[
				[x,x,x,x,x,x,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
				[x,x,x,x,x,6,6,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
				[x,x,x,x,6,6,6,4,4,4,4,4,4,4,4,4,4,4,5,5,x,5,x,5,4,4,4,4,4,4,4,4,4,4,4],
				[x,x,x,6,6,6,6,4,4,4,4,4,4,4,4,4,4,4,x,x,x,x,x,x,4,4,4,4,4,4,4,4,4,4,4],
				[x,x,6,6,6,6,6,4,4,4,4,4,4,4,4,4,4,4,x,x,x,x,x,x,4,4,4,4,4,4,4,4,4,4,4],
				[x,6,6,6,6,6,6,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
				[6,6,6,6,6,6,6,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4],
				[6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,4],
			],
			src:`images/CaveSpreadsheet.png`,
		},
		states:caveData.states
		}

		var caveHitData={
			info:{
				layout:[
					[x,x,x,x,x,x,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,4],
					[x,x,x,x,x,x,x,x,x,5,x,x,x,x,x,5,x,x,x,x,x,x,x,x,x,5,x,x,x,x,5,5,x,x,4],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,4],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,4],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,4],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,4],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,4],
					[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,4]
					
					
				],
				src:`images/CaveSpreadsheet.png`,
			},
			states:caveData.states
			
			}