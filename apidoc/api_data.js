define({ "api": [
  {
    "type": "get",
    "url": "/api/v1/products/all",
    "title": "Get all products",
    "version": "1.0.0",
    "group": "create",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nameOfProduct",
            "description": "<p>The nameOfProduct should be passed as the URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>The description should be passed as the URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "isOutOfStock",
            "description": "<p>The isOutOfStock should be passed as the URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "manufacturer",
            "description": "<p>The manufacturer should be passed as the URL parameter</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>The category should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \t    \"error\": false,\n   \t    \"message\": \" Product created Successfully\",\n   \t    \"status\": 200,\n   \t    \"data\": [\n   \t\t\t\t\t{   \n   \t\t\t\t\t\tproductId: \"string\",\n   \t\t\t\t\t\tnameOfProduct: \"string\",\n   \t\t\t\t\t\tdescription: \"string\",\n   \t\t\t\t\t\tviews: number,\n   \t\t\t\t\t\tisOutOfStock: boolean,\n   \t\t\t\t\t\tcategory: \" \",\n   \t\t\t\t\t\tmanufacturer: \"string\",\n   \t\t\t\t\t\ttags: object(type = array),\n   \t\t\t\t\t\tintroducedToMarket: \"date\"\n   \t\t\t\t\t}\n   \t    \t\t]\n   \t    \t}\n   \t\t}\n   \t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \t    \"error\": true,\n    \t    \"message\": \"Failed To Find Product Details\",\n    \t    \"status\": 500,\n    \t    \"data\": null\n    \t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/appRoute.js",
    "groupTitle": "create",
    "name": "GetApiV1ProductsAll"
  },
  {
    "type": "get",
    "url": "/api/v1/products/all",
    "title": "Get all products",
    "version": "1.0.0",
    "group": "delete",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>The productId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \t    \"error\": false,\n   \t    \"message\": \"Product Details Deleted Successfully\",\n   \t    \"status\": 200,\n   \t    \"data\": []\n   \t    \t}\n   \t\t}\n   \t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \t    \"error\": true,\n    \t    \"message\": \"Failed To Find Product Details\",\n    \t    \"status\": 500,\n    \t    \"data\": null\n    \t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/appRoute.js",
    "groupTitle": "delete",
    "name": "GetApiV1ProductsAll"
  },
  {
    "type": "get",
    "url": "/api/v1/products/all",
    "title": "Get all products",
    "version": "1.0.0",
    "group": "edit",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>The productId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \t    \"error\": false,\n   \t    \"message\": \" Product Details Eddited Successfully\",\n   \t    \"status\": 200,\n   \t    \"data\": [\n   \t\t\t\t\t{   \n   \t\t\t\t\t\tproductId: \"string\",\n   \t\t\t\t\t\tnameOfProduct: \"string\",\n   \t\t\t\t\t\tdescription: \"string\",\n   \t\t\t\t\t\tviews: number,\n   \t\t\t\t\t\tisOutOfStock: boolean,\n   \t\t\t\t\t\tcategory: \" \",\n   \t\t\t\t\t\tmanufacturer: \"string\",\n   \t\t\t\t\t\ttags: object(type = array),\n   \t\t\t\t\t\tintroducedToMarket: \"date\"\n   \t\t\t\t\t}\n   \t    \t\t]\n   \t    \t}\n   \t\t}\n   \t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \t    \"error\": true,\n    \t    \"message\": \"Failed To Find Product Details\",\n    \t    \"status\": 500,\n    \t    \"data\": null\n    \t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/appRoute.js",
    "groupTitle": "edit",
    "name": "GetApiV1ProductsAll"
  },
  {
    "type": "get",
    "url": "/api/v1/products/all",
    "title": "Get all products",
    "version": "1.0.0",
    "group": "read",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \t    \"error\": false,\n   \t    \"message\": \"All Product Details Found\",\n   \t    \"status\": 200,\n   \t    \"data\": [\n   \t\t\t\t\t{\n   \t\t\t\t\t\tproductId: \"string\",\n   \t\t\t\t\t\tnameOfProduct: \"string\",\n   \t\t\t\t\t\tdescription: \"string\",\n   \t\t\t\t\t\tviews: number,\n   \t\t\t\t\t\tisOutOfStock: boolean,\n   \t\t\t\t\t\tcategory: \" \",\n   \t\t\t\t\t\tmanufacturer: \"string\",\n   \t\t\t\t\t\ttags: object(type = array),\n   \t\t\t\t\t\tintroducedToMarket: \"date\"\n   \t\t\t\t\t}\n   \t    \t\t]\n   \t    \t}\n   \t\t}\n   \t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \t    \"error\": true,\n    \t    \"message\": \"Failed To Find Product Details\",\n    \t    \"status\": 500,\n    \t    \"data\": null\n    \t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/appRoute.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductsAll"
  },
  {
    "type": "get",
    "url": "/api/v1/products/all",
    "title": "Get all products",
    "version": "1.0.0",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "produtId",
            "description": "<p>The productId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \t    \"error\": false,\n    \t    \"message\": \"All Product Details Found\",\n    \t    \"status\": 200,\n    \t    \"data\": [\n    \t\t\t\t\t{   \n                            _id: \"string\",\n\t    \t\t\t        __v: number,\n    \t\t\t\t\t\tproductId: \"string\",\n    \t\t\t\t\t\tnameOfProduct: \"string\",\n    \t\t\t\t\t\tdescription: \"string\",\n    \t\t\t\t\t\tviews: number,\n    \t\t\t\t\t\tisOutOfStock: boolean,\n    \t\t\t\t\t\tcategory: \" \",\n    \t\t\t\t\t\tmanufacturer: \"string\",\n    \t\t\t\t\t\ttags: object(type = array),\n    \t\t\t\t\t\tintroducedToMarket: \"date\"\n    \t\t\t\t\t}\n    \t    \t\t]\n    \t    \t}\n    \t\t}\n    \t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \t    \"error\": true,\n    \t    \"message\": \"Failed To Find Product Details\",\n    \t    \"status\": 500,\n    \t    \"data\": null\n    \t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/appRoute.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductsAll"
  },
  {
    "type": "get",
    "url": "/api/v1/products/all",
    "title": "Get all products",
    "version": "1.0.0",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "manufacturer",
            "description": "<p>The manufacturer should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \t    \"error\": false,\n   \t    \"message\": \"All Product Details Found\",\n   \t    \"status\": 200,\n   \t    \"data\": [\n   \t\t\t\t\t{   \n   \t\t\t\t\t\tproductId: \"string\",\n   \t\t\t\t\t\tnameOfProduct: \"string\",\n   \t\t\t\t\t\tdescription: \"string\",\n   \t\t\t\t\t\tviews: number,\n   \t\t\t\t\t\tisOutOfStock: boolean,\n   \t\t\t\t\t\tcategory: \" \",\n   \t\t\t\t\t\tmanufacturer: \"string\",\n   \t\t\t\t\t\ttags: object(type = array),\n   \t\t\t\t\t\tintroducedToMarket: \"date\"\n   \t\t\t\t\t}\n   \t    \t\t]\n   \t    \t}\n   \t\t}\n   \t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \t    \"error\": true,\n    \t    \"message\": \"Failed To Find Product Details\",\n    \t    \"status\": 500,\n    \t    \"data\": null\n    \t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/appRoute.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductsAll"
  },
  {
    "type": "get",
    "url": "/api/v1/products/all",
    "title": "Get all products",
    "version": "1.0.0",
    "group": "read",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "category",
            "description": "<p>The category should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \t    \"error\": false,\n   \t    \"message\": \"All Product Details Found\",\n   \t    \"status\": 200,\n   \t    \"data\": [\n   \t\t\t\t\t{   \n   \t\t\t\t\t\tproductId: \"string\",\n   \t\t\t\t\t\tnameOfProduct: \"string\",\n   \t\t\t\t\t\tdescription: \"string\",\n   \t\t\t\t\t\tviews: number,\n   \t\t\t\t\t\tisOutOfStock: boolean,\n   \t\t\t\t\t\tcategory: \" \",\n   \t\t\t\t\t\tmanufacturer: \"string\",\n   \t\t\t\t\t\ttags: object(type = array),\n   \t\t\t\t\t\tintroducedToMarket: \"date\"\n   \t\t\t\t\t}\n   \t    \t\t]\n   \t    \t}\n   \t\t}\n   \t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \t    \"error\": true,\n    \t    \"message\": \"Failed To Find Product Details\",\n    \t    \"status\": 500,\n    \t    \"data\": null\n    \t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/appRoute.js",
    "groupTitle": "read",
    "name": "GetApiV1ProductsAll"
  },
  {
    "type": "get",
    "url": "/api/v1/products/all",
    "title": "Get all products",
    "version": "1.0.0",
    "group": "update",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "productId",
            "description": "<p>The productId should be passed as the URL parameter</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n   \t    \"error\": false,\n   \t    \"message\": \" Product updated Successfully\",\n   \t    \"status\": 200,\n   \t    \"data\": [\n   \t\t\t\t\t{   \n   \t\t\t\t\t\tproductId: \"string\",\n   \t\t\t\t\t\tnameOfProduct: \"string\",\n   \t\t\t\t\t\tdescription: \"string\",\n   \t\t\t\t\t\tviews: number,\n   \t\t\t\t\t\tisOutOfStock: boolean,\n   \t\t\t\t\t\tcategory: \" \",\n   \t\t\t\t\t\tmanufacturer: \"string\",\n   \t\t\t\t\t\ttags: object(type = array),\n   \t\t\t\t\t\tintroducedToMarket: \"date\"\n   \t\t\t\t\t}\n   \t    \t\t]\n   \t    \t}\n   \t\t}\n   \t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "\n{\n    \t    \"error\": true,\n    \t    \"message\": \"Failed To Find Product Details\",\n    \t    \"status\": 500,\n    \t    \"data\": null\n    \t   }",
          "type": "json"
        }
      ]
    },
    "filename": "routes/appRoute.js",
    "groupTitle": "update",
    "name": "GetApiV1ProductsAll"
  }
] });
