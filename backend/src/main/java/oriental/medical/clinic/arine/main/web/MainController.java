/**
 * 
 */
package oriental.medical.clinic.arine.main.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * 
 */
@Controller
public class MainController {
	
	@RequestMapping(value="/", method = RequestMethod.GET)
	public String index() {
		
//		Map<String, String> map = new HashMap<>();
//		map.put("brand1", "adererror");
		//model.addA
		
		return "index";
		
	}
}
