var restify = require('restify');
var server = require('./server');

var client = restify.createJsonClient({
    url: 'http://localhost:3000'
});

// a static product to CREATE READ UPDATE DELETE

var testProduct = {
    id: "101",
    name: "Raj Kiran Reddy",
    major: "Computer Science",
    semester: "Spring 2016",

};


function getAllProducts() {
    client.get('/products', function (err, req, res, products) {
        if (err) {
            console.log("An error ocurred >>>>>>");
            console.log(err);
        } else {
            console.log("Total Students " + products.length);
            console.log('All Students >>>>>>>');
            console.log(products);
        }
    });
}

function saveProduct(product) {
    var p = product ? product : testProduct; // override with global product if nothing is supplied
    client.post('/product', p, function (err, req, res, product) {
        if (err) {
            console.log("An error ocurred >>>>>>");
            console.log(err);
        } else {
            console.log('Details saved >>>>>>>');
            console.log(product);
        }
    });
}

function getOneProduct(id) {
    var id = id ? id : testProduct.id;
    client.get('/product/' + id, function (err, req, res, product) {
        if (err) {
            console.log("An error ocurred >>>>>>");
            console.log(err);
        } else {
            console.log('Student with id ' + id + '  >>>>>>>');
            console.log(product);
        }
    });
}

function updateProduct(product) {
    var p = product ? product : testProduct;
    p.credithours = "9",
    client.put('/product/' + p.id, p, function (err, req, res, status) {
        if (err) {
            console.log("An error ocurred >>>>>>");
            console.log(err);
        } else {
            console.log('Details saved >>>>>>>');
            console.log(status);
        }

    });
}

/*function deletProduct(id) {
    var id = id ? id : testProduct.id;
    client.del('/product/' + id, function (err, req, res, status) {
        if (err) {
            console.log("An error ocurred >>>>>>");
            console.log(err);
        } else {
            console.log('Product deleted >>>>>>>');
            console.log(status);
        }
    });
}*/


// Since the methods are Async, We need to NEST them. The order of calling is >>
//getAllProducts();
//saveProduct();
//getOneProduct();
//updateProduct();
//getOneProduct();
//deletProduct();
//getAllProducts();

// to see the output when you the run the client, A nested async callback system to do the above steps
console.log("\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> \n");
client.get('/products', function (err, req, res, products) {
    if (err) console.log("Oops : ", err);
    else console.log('Total Students : ', products.length);
    console.log("\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> \n");

    client.post('/product', testProduct, function (err, req, res, prod) {
        if (err) console.log("Oops : ", err);
        else console.log('Inserted Student Details : ', prod);
        console.log("\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> \n");

        client.get('/product/' + testProduct.id, function (err, req, res, prod) {
            if (err) console.log("Oops : ", err);
            else console.log('Student with ID :' + testProduct.id + ' :: ', prod);
            console.log("\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> \n");

            client.put('/product/' + testProduct.id, {
                credithours: "9"
            }, function (err, req, res, status) {
                if (err) console.log("Oops : ", err);
                else console.log('Student Detaisl Updated status :', status);
                console.log("\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> \n");

                client.get('/product/' + testProduct.id, function (err, req, res, prod) {
                    if (err) console.log("Oops : ", err);
                    else console.log('Student with ID :' + testProduct.id + ' :: ', prod);
                    console.log("\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> \n");

                   // client.del('/product/' + testProduct.id, function (err, req, res, status) {
                    //    if (err) console.log("Oops : ", err);
                    //    else console.log('Product deleted status :', status);
                     //   console.log("\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> \n");
                     //   client.get('/products', function (err, req, res, products) {
                      //      if (err) console.log("Oops : ", err);
                      //      else console.log('Total products : ', products.length);
                       //     console.log("\n>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> \n");
                        });

                    });
                });
            });
       // });
   // });
});