/*-----------datagrid----------cut-off rule---------------------*/
$('#dg_2').datagrid({
//  url:'data/datagrid_data.json',
	url:'http://localhost:20219/list',
    method:'get',//必须
    
    showFooter:true,
    showHeader:true,
	collapsible:true,
	
	idField:'id',
    remoteSort: false,//值false，sorter才生效
    columns:[[
   		{field:'id',hidden:true},
        {field:'code',title:'Code',width:'20%',align:'center',sortable:true},
        {field:'to',title:'发往',width:'20%',align:'center'},
        {field:'from',title:'产地',width:'20%',align:'center'},
        {field:'name',title:'Name',width:'20%',align:'center'},
        {field:'price',title:'Price',align:'center',width:'20%',sortable:true,
			sorter:function(a,b){//重写排序规则
				a = a.split('/');  
				b = b.split('/');  
				if (a[2] == b[2]){  
					if (a[0] == b[0]){  
						return (a[1]>b[1]?1:-1);  
					} else {  
						return (a[0]>b[0]?1:-1);  
					}  
				} else {  
					return (a[2]>b[2]?1:-1);  
				}  
			}        
        }
    ]],
    
    onSelect:function(index,row){
    	console.log(row.id);
    },
    
	pagination:true,//页码
	rownumbers:true,

});


/*---------------页码--------------------------*/
var p = $("#dg_2").datagrid("getPager");
p.pagination({
	pageList: [5,15,25,50],
	pageSize:5,
	pageNumber:2,
//	onSelectPage:function(pageNumber, pageSize){
//		debugger;
//		$("#dg_2").datagrid("loadData",data);
//	},
});



	
