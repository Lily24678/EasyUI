package com.smates.code.controller;

import java.io.File;

import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.FileUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.alibaba.fastjson.JSONObject;

@Controller
@RequestMapping("/")
public class EasyUIController {
	
	@RequestMapping("list")
	@ResponseBody
	public Object list(ModelMap map, HttpServletResponse response,Integer page,Integer rows) throws Exception {
		String jsonStr = FileUtils.readFileToString(new File("D:\\HBuilderProject\\EasyUI\\data\\datagrid_data.json"));
		
		return JSONObject.parse(jsonStr);

	}

}