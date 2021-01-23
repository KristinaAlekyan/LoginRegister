


class IndexController {
	landingPage(req, res){
		 res.render('landing');
	}
	homePage(req, res){
		 res.render('home');
	}
  
};

module.exports=new IndexController()