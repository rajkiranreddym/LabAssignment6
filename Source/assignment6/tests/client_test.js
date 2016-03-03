/**
 * Created by RajKiranReddyM on 02-03-2016.
 */
describe("The RESTService Validator",function() {

    it("should return when the record is returned", function () {
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

        describe("The RESTService Validator", function () {

            it("should return when the record is returned", function () {
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
            });


        });
    });
});