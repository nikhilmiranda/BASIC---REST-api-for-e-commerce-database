const express = require('express')
const appController = require('../controllers/appController')
const appConfig = require("../config/appConfig")
const example = require("../middlewares/appErrorHandler")

let setRouter = (app) => {

    let baseUrl = appConfig.apiVersion + '/products';


    app.get(baseUrl + '/all', appController.getAllProduct);
    /**
    	 * @api {get} /api/v1/products/all Get all products
    	 * @apiVersion 1.0.0
    	 * @apiGroup read
    	 *
    	 *  @apiSuccessExample {json} Success-Response:
    	 *  {
    	    "error": false,
    	    "message": "All Product Details Found",
    	    "status": 200,
    	    "data": [
    					{
    						productId: "string",
    						nameOfProduct: "string",
    						description: "string",
    						views: number,
    						isOutOfStock: boolean,
    						category: " ",
    						manufacturer: "string",
    						tags: object(type = array),
    						introducedToMarket: "date"
    					}
    	    		]
    	    	}
    		}
    	}
    	  @apiErrorExample {json} Error-Response:
    	 *
    	 * {
    	    "error": true,
    	    "message": "Failed To Find Product Details",
    	    "status": 500,
    	    "data": null
    	   }
    	 */

    app.get(baseUrl + '/view/:productId', appController.viewByProductId);
    /**
    	 * @api {get} /api/v1/products/all Get all products
    	 * @apiVersion 1.0.0
    	 * @apiGroup read
    	 *
         *  @apiParam {String} produtId The productId should be passed as the URL parameter
         *
    	 *  @apiSuccessExample {json} Success-Response:
    	 *  {
    	    "error": false,
    	    "message": "All Product Details Found",
    	    "status": 200,
    	    "data": [
    					{   
                            _id: "string",
	    			        __v: number,
    						productId: "string",
    						nameOfProduct: "string",
    						description: "string",
    						views: number,
    						isOutOfStock: boolean,
    						category: " ",
    						manufacturer: "string",
    						tags: object(type = array),
    						introducedToMarket: "date"
    					}
    	    		]
    	    	}
    		}
    	}
    	  @apiErrorExample {json} Error-Response:
    	 *
    	 * {
    	    "error": true,
    	    "message": "Failed To Find Product Details",
    	    "status": 500,
    	    "data": null
    	   }
    	 */

    app.get(baseUrl + '/view/by/manufacturer/:manufacturer', appController.viewByManufacturer);
              /**
    	 * @api {get} /api/v1/products/all Get all products
    	 * @apiVersion 1.0.0
    	 * @apiGroup read
    	 *
         *  @apiParam {String} manufacturer The manufacturer should be passed as the URL parameter
         *
    	 *  @apiSuccessExample {json} Success-Response:
    	 *  {
    	    "error": false,
    	    "message": "All Product Details Found",
    	    "status": 200,
    	    "data": [
    					{   
    						productId: "string",
    						nameOfProduct: "string",
    						description: "string",
    						views: number,
    						isOutOfStock: boolean,
    						category: " ",
    						manufacturer: "string",
    						tags: object(type = array),
    						introducedToMarket: "date"
    					}
    	    		]
    	    	}
    		}
    	}
    	  @apiErrorExample {json} Error-Response:
    	 *
    	 * {
    	    "error": true,
    	    "message": "Failed To Find Product Details",
    	    "status": 500,
    	    "data": null
    	   }
    	 */

    app.get(baseUrl + '/view/by/category/:category', appController.viewByCategory);
              /**
    	 * @api {get} /api/v1/products/all Get all products
    	 * @apiVersion 1.0.0
    	 * @apiGroup read
    	 *
         *  @apiParam {String} category The category should be passed as the URL parameter
         *
    	 *  @apiSuccessExample {json} Success-Response:
    	 *  {
    	    "error": false,
    	    "message": "All Product Details Found",
    	    "status": 200,
    	    "data": [
    					{   
    						productId: "string",
    						nameOfProduct: "string",
    						description: "string",
    						views: number,
    						isOutOfStock: boolean,
    						category: " ",
    						manufacturer: "string",
    						tags: object(type = array),
    						introducedToMarket: "date"
    					}
    	    		]
    	    	}
    		}
    	}
    	  @apiErrorExample {json} Error-Response:
    	 *
    	 * {
    	    "error": true,
    	    "message": "Failed To Find Product Details",
    	    "status": 500,
    	    "data": null
    	   }
    	 */
    app.post(baseUrl + '/:productId/delete', appController.deleteProduct);
              /**
    	 * @api {get} /api/v1/products/all Get all products
    	 * @apiVersion 1.0.0
    	 * @apiGroup delete
    	 *
         *  @apiParam {String} productId The productId should be passed as the URL parameter
         *
    	 *  @apiSuccessExample {json} Success-Response:
    	 *  {
    	    "error": false,
    	    "message": "Product Details Deleted Successfully",
    	    "status": 200,
    	    "data": []
    	    	}
    		}
    	}
    	  @apiErrorExample {json} Error-Response:
    	 *
    	 * {
    	    "error": true,
    	    "message": "Failed To Find Product Details",
    	    "status": 500,
    	    "data": null
    	   }
    	 */
    app.put(baseUrl + '/:productId/edit', appController.editProduct);
                    /**
    	 * @api {get} /api/v1/products/all Get all products
    	 * @apiVersion 1.0.0
    	 * @apiGroup edit
    	 *
         *  @apiParam {String} productId    The productId should be passed as the URL parameter
         *
    	 *  @apiSuccessExample {json} Success-Response:
    	 *  {
    	    "error": false,
    	    "message": " Product Details Eddited Successfully",
    	    "status": 200,
    	    "data": [
    					{   
    						productId: "string",
    						nameOfProduct: "string",
    						description: "string",
    						views: number,
    						isOutOfStock: boolean,
    						category: " ",
    						manufacturer: "string",
    						tags: object(type = array),
    						introducedToMarket: "date"
    					}
    	    		]
    	    	}
    		}
    	}
    	  @apiErrorExample {json} Error-Response:
    	 *
    	 * {
    	    "error": true,
    	    "message": "Failed To Find Product Details",
    	    "status": 500,
    	    "data": null
    	   }
    	 */
    app.post(baseUrl + '/create', appController.createProduct);
                    /**
    	 * @api {get} /api/v1/products/all Get all products
    	 * @apiVersion 1.0.0
    	 * @apiGroup create
    	 *
         *  @apiParam {String} nameOfProduct The nameOfProduct should be passed as the URL parameter
         *  @apiParam {String} description The description should be passed as the URL parameter
         *  @apiParam {String} isOutOfStock The isOutOfStock should be passed as the URL parameter
         *  @apiParam {String} manufacturer The manufacturer should be passed as the URL parameter
         *  @apiParam {String} category The category should be passed as the URL parameter
         *
    	 *  @apiSuccessExample {json} Success-Response:
    	 *  {
    	    "error": false,
    	    "message": " Product created Successfully",
    	    "status": 200,
    	    "data": [
    					{   
    						productId: "string",
    						nameOfProduct: "string",
    						description: "string",
    						views: number,
    						isOutOfStock: boolean,
    						category: " ",
    						manufacturer: "string",
    						tags: object(type = array),
    						introducedToMarket: "date"
    					}
    	    		]
    	    	}
    		}
    	}
    	  @apiErrorExample {json} Error-Response:
    	 *
    	 * {
    	    "error": true,
    	    "message": "Failed To Find Product Details",
    	    "status": 500,
    	    "data": null
    	   }
    	 */
    app.get(baseUrl + '/:productId/count/view', appController.increaseProductView);
                       /**
    	 * @api {get} /api/v1/products/all Get all products
    	 * @apiVersion 1.0.0
    	 * @apiGroup update
    	 *
         *  @apiParam {String} productId The productId should be passed as the URL parameter
         *
    	 *  @apiSuccessExample {json} Success-Response:
    	 *  {
    	    "error": false,
    	    "message": " Product updated Successfully",
    	    "status": 200,
    	    "data": [
    					{   
    						productId: "string",
    						nameOfProduct: "string",
    						description: "string",
    						views: number,
    						isOutOfStock: boolean,
    						category: " ",
    						manufacturer: "string",
    						tags: object(type = array),
    						introducedToMarket: "date"
    					}
    	    		]
    	    	}
    		}
    	}
    	  @apiErrorExample {json} Error-Response:
    	 *
    	 * {
    	    "error": true,
    	    "message": "Failed To Find Product Details",
    	    "status": 500,
    	    "data": null
    	   }
    	 */

} // end setRouter function 

module.exports = {
    setRouter: setRouter
}