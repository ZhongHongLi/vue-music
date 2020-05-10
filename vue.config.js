module.exports={
	lintOnSave:false,
	devServer: {
	    open:true,
	    proxy: {
	      '/api': {
	        // /api/login  ===> /login   ==> http://127.0.0.1:3001/login
	       target: 'http://120.53.13.253:4000/', // 本地服务器地址
			//   target: 'http://140.143.128.100:4000/',
	        ws: true,
	        changeOrigin: true, // 是否开启跨域
	        pathRewrite: {
	          '^/api': ''
	        }
	      }
	    }
	  },
	   publicPath: './'
}