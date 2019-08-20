$(function(){
/*-----------SideMenu----------cut-off rule---------------------*/
	
	var data = [{
		id:1,
		pid:-1,
	    text: 'Item1',
	    iconCls: 'icon-sum',
	    state: 'open',
	    children: [{
			id:2,
			pid:1,
	        text: 'Option1'
	    },{
			id:3,
			pid:1,
	        text: 'Option2'
	    },{
			id:4,
			pid:1,    	
	        text: 'Option3',
	        children: [{
				id:5,
				pid:4,        	
	            text: 'Option31'
	        },{
				id:6,
				pid:4,        	
	            text: 'Option32'
	        }]
	    }]
	},{
		id:7,
		pid:-1,
	    text: 'Item2',
	    iconCls: 'icon-more',
	    children: [{
	    	id:8,
	    	pid:7,
	        text: 'Option4'
	    },{
	    	id:9,
	    	pid:7,
	        text: 'Option5'
	    },{
	    	id:10,
	    	pid:7,
	        text: 'Option6'
	    }]
	}];
	$("#sm").sidemenu({
		border:false,
		data:data,
		onSelect:function(item){
			//addTab
			addTab(item,'url');
		
		},
	});	
	
	
	
	
	
	/*-----------Tabs----------cut-off rule---------------------*/
	$('#tt').tabs({
		fit:false,
	    border:false,
	    onLoad:function(panel){
	    	console.log(panel);
	    },
	});	
	function addTab(item,url){
		if($('#tt').tabs('exists',item.text)){
			$('#tt').tabs("select",item.text);
		}else{
			$('#tt').tabs('add',{
				id:item.id,
			    title:item.text,
//			    content:'<iframe src="html/tabContent-datagrid_2.html"></iframe>',
				href:'html/tabContent-datagrid_'+item.id+'.html',
			    closable:true,
			    tools:[{
			        iconCls:'icon-mini-refresh',
			        handler:function(){
			            alert('refresh');
			        }
			    }],
			});	
				
		}
		
	}	
});










